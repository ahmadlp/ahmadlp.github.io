(() => {
  "use strict";

  // This module owns visibility and entrances only. The chapter scripts keep
  // their own scroll-driven geometry, chart drawing and illustration timing.
  const stage = document.querySelector("[data-story-stage]");
  const modules = [...stage.querySelectorAll("[data-deck-module]")];
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let previousState = null;
  let previousModule = null;
  let entrance = null;

  function moduleFor(state) {
    if (state <= 10) return "mechanism";
    if (state === 11) return "equation";
    if (state === 66) return "singularity";
    if (state >= 40 && state <= 59) return "data";
    if (state >= 30 && state <= 39) return "trade";
    if (state >= 61 && state <= 65) return "trade";
    if (state >= 24 && state <= 29) return "horses";
    return null;
  }
  const tradeFrame = state => stage.querySelector(`[data-trade-frame~="${state}"]`);

  function show({ state, reduced = false }) {
    state = Number(state);
    if (reduced || motion.matches) entrance?.cancel();
    if (state === previousState) return;
    entrance?.cancel();
    const name = moduleFor(state);
    stage.dataset.module = name;
    for (const panel of modules) {
      const active = panel.dataset.deckModule === name;
      panel.dataset.sceneActive = String(active);
      panel.setAttribute("aria-hidden", String(!active));
      panel.inert = !active;
    }

    const panel = modules.find(node => node.dataset.deckModule === name);
    let target = panel;
    if (name === "mechanism") {
      // Keep the sorting diagram continuous when only its caption changes.
      target = panel.querySelector(".stage-copy");
    } else if (name === "data") {
      // Theory Meets Data plays its own frame entrance.
      target = null;
    } else if (name === "horses" && previousModule === "horses") {
      // The horse chapter already interpolates its figures and captions.
      target = null;
    } else if (name === "trade" && previousModule === "trade" && tradeFrame(state) === tradeFrame(previousState)) {
      // A trade slide that spans several beats animates with the scroll.
      target = null;
    }
    if (target && previousState !== null && !reduced && !motion.matches) {
      entrance = target.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 220,
        easing: "cubic-bezier(.22,.61,.36,1)",
      });
    }
    previousState = state;
    previousModule = name;
  }

  window.addEventListener("story:position", event => show(event.detail));
  motion.addEventListener("change", () => entrance?.cancel());
  show({ state: stage.dataset.state });
})();
