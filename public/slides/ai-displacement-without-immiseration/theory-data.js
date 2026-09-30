/* Theory Meets Data (Round 28, prototype D): scenes 40–60 of the story.
   Builds the frames into the data module and follows the story's position,
   one scene per beat, with the same step and scrub rules as the prototype. */
(() => {
  "use strict";
  const FIRST = 40;
  const module = document.querySelector("[data-deck-module=\"data\"]");
  const stage = document.querySelector("[data-story-stage]");
  if (!module || !stage || !window.R28_FRAMES) return;

  const frames = window.R28_FRAMES();
  let total = 0;
  for (const f of frames) {
    const sec = document.createElement("section");
    sec.className = "frame " + (f.cls || "");
    sec.innerHTML = f.html;
    sec.style.setProperty("--step", 0);
    sec.dataset.step = 0;
    module.appendChild(sec);
    f.el = sec; f.start = total; total += f.steps;
  }
  Charts.mount(module);
  for (const f of frames) if (f.init) f.init(f.el);

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const reduced = () => document.documentElement.dataset.forceReduced === "true" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cur = -1, active = null;

  function apply(s) {
    cur = s;
    const fi = frames.findIndex(f => s >= f.start && s < f.start + f.steps);
    frames.forEach((f, j) => {
      const step = j < fi ? f.steps - 1 : j > fi ? 0 : s - f.start;
      if (f.el.dataset.step !== String(step)) {
        f.el.style.setProperty("--step", step);
        f.el.dataset.step = step;
        if (f.onStep) f.onStep(f.el, step);
      }
    });
    const next = frames[fi];
    if (active !== next) {
      if (active) active.el.classList.remove("is-active");
      next.el.classList.add("is-active");
      // Entered at its first step, a frame builds in (theory-data.css); otherwise it shows at rest.
      if (next.enter) next.enter(next.el);
      else next.el.classList.toggle("done", s !== next.start || reduced());
      active = next;
    }
  }

  // Outside the section no frame is active, so re-entry replays the frame entrance.
  function leave() {
    if (active) active.el.classList.remove("is-active");
    active = null;
    cur = -1;
  }

  function paint({ state, position }) {
    state = Number(state);
    if (state < FIRST || state >= FIRST + total) { leave(); return; }
    const s = state - FIRST;
    if (s !== cur) apply(s);
    const p = Number(position) - FIRST;
    for (const f of frames) if (f.scrub) f.scrub(f.el, clamp(p - f.start, 0, f.steps - 1));
  }

  window.addEventListener("story:position", event => paint(event.detail));
  paint({ state: stage.dataset.state, position: stage.dataset.position ?? stage.dataset.state });
  if (document.fonts) document.fonts.ready.then(() => Charts.redrawAll());
})();
