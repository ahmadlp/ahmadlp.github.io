/* The autoplay cue: a ring at the content's bottom right that fills as the autoplay plays through
   a graphic and, once it has played to the end, holds a chevron that nudges the reader to scroll
   on. The story reports its play in the story:position event. */
(() => {
  // The nudge waits for the last beat to settle.
  const NUDGE_MS = 1200;
  const RING = 2 * Math.PI * 10.3;
  const root = document.documentElement;
  const stage = document.querySelector("[data-stage]");
  const beats = document.querySelectorAll("[data-beat]");
  const cue = document.createElement("div");
  cue.className = "cue";
  cue.setAttribute("aria-hidden", "true");
  cue.innerHTML = '<svg viewBox="0 0 24 24"><circle class="cue__track" cx="12" cy="12" r="10.3"/>'
    + `<circle class="cue__arc" cx="12" cy="12" r="10.3" stroke-dasharray="${RING.toFixed(2)}"/></svg>`
    + '<span class="cue__nudge"><span class="cue__chevron"></span></span>';
  stage.append(cue);
  const arc = cue.querySelector(".cue__arc");

  let play = null;
  let came = 0;
  let endFrame = -1;
  let endSince = 0;
  let loop = 0;

  function update() {
    cancelAnimationFrame(loop);
    const now = performance.now();
    const { frame, start, end, to, steps, last, reduced } = play;
    const total = steps.at(-1);
    const left = Math.max(0, play.left - (now - came));
    const off = reduced || root.dataset.coverVisible === "true";
    const ended = left === 0 && to === end && !off;
    if (!ended || frame !== endFrame) {
      endFrame = ended ? frame : -1;
      endSince = now;
    }
    const state = off ? "off" : left > 0 ? "play" : to < end ? "rest" : now - endSince < NUDGE_MS ? "end" : frame < last ? "done" : "off";
    stage.dataset.cueState = state;

    const elapsed = state === "rest" ? steps[to - start] : total - left;
    arc.style.strokeDashoffset = (RING * (1 - Math.min(1, Math.max(0, elapsed / total)))).toFixed(2);
    if (state === "play" || state === "end") loop = requestAnimationFrame(update);
  }

  window.addEventListener("story:position", (event) => {
    const { frame, reduced } = event.detail;
    play = { ...event.detail.play, frame, reduced };
    came = performance.now();
    update();
  });

  // The nudge scrolls to the next beat.
  cue.querySelector(".cue__nudge").addEventListener("click", () => {
    const beat = beats[play.frame + 1];
    if (!beat) return;
    const box = beat.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + box.top + box.height / 2 - window.innerHeight / 2, behavior: "smooth" });
  });
})();
