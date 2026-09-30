/* Slide arrows, prototype A of prototypes/slide-nav/: a round arrow in each side margin and a counter
   beside the autoplay ring (the NYT slideshow). An arrow, or the left and right arrow keys, steps by
   putting a slide's beat at the reading line, as the ring's nudge does, so the autoplay treats a step
   as a scroll: forward plays the graphic on, back lands at rest. */
(() => {
  const root = document.documentElement;
  const stage = document.querySelector("[data-stage]");
  const beats = [...document.querySelectorAll("[data-beat]")];
  const last = beats.length - 1;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  let frame = 0;

  // The frame at the reading line, read as story.js reads it.
  function scrolled() {
    const first = beats[0].getBoundingClientRect();
    return clamp(Math.round((innerHeight / 2 - first.top - first.height / 2) / first.height), 0, last);
  }
  function go(to) {
    const box = beats[clamp(to, 0, last)].getBoundingClientRect();
    window.scrollTo(0, window.scrollY + box.top + box.height / 2 - window.innerHeight / 2);
  }
  // From the cover the first step forward goes to the first slide.
  function step(by) {
    if (root.dataset.coverVisible !== "true") go(by > 0 ? Math.max(frame, scrolled()) + 1 : Math.min(frame, scrolled()) - 1);
    else if (by > 0) go(0);
  }

  const chevron = '<span class="snav__chevron"></span>';
  const nav = document.createElement("nav");
  nav.className = "snav";
  nav.setAttribute("aria-label", "Slides");
  nav.innerHTML = '<div class="snav__pager">'
    + `<button class="snav__arrow snav__arrow--back" type="button" aria-label="Previous slide">${chevron}</button>`
    + `<p class="snav__count"><b>1</b> / ${last + 1}</p>`
    + `<button class="snav__arrow snav__arrow--next" type="button" aria-label="Next slide">${chevron}</button></div>`;
  stage.append(nav);
  const number = nav.querySelector(".snav__count b");
  const back = nav.querySelector(".snav__arrow--back");
  const next = nav.querySelector(".snav__arrow--next");
  back.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));

  window.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest?.("input, select, textarea")) return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      step(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  // The arrows fade at either end.
  window.addEventListener("story:position", (event) => {
    frame = event.detail.frame;
    number.textContent = frame + 1;
    back.disabled = frame === 0;
    next.disabled = frame === last;
  });
})();
