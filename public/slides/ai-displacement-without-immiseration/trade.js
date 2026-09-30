(() => {
  "use strict";
  const stage = document.querySelector("[data-stage]");
  const frames = [...document.querySelectorAll("[data-trade-frame]")];
  const reduced = () => document.documentElement.dataset.forceReduced === "true" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  function paint({ state }) {
    frames.forEach(frame => {
      const states = frame.dataset.tradeFrame.split(" ").map(Number);
      const active = states.includes(state);
      // Entered at its first step, a slide builds in (trade.css); otherwise it shows at rest.
      if (active && frame.dataset.active !== "true") frame.classList.toggle("done", state !== states[0] || reduced());
      frame.dataset.active = String(active);
      frame.setAttribute("aria-hidden", String(!active));
    });
  }
  window.addEventListener("story:position", event => paint(event.detail));
  paint({ state: Number(stage.dataset.state) });

  // Direct chapter URLs enter the scrolling story.
  function enterTrade() {
    const beat = document.querySelector('[data-beat="30"]');
    const box = beat.getBoundingClientRect();
    window.scrollTo({ top: scrollY + box.top + box.height / 2 - innerHeight / 2, behavior: "instant" });
  }
  if (location.hash === "#trade" && !new URLSearchParams(location.search).has("state")) {
    window.addEventListener("load", () => requestAnimationFrame(enterTrade), { once: true });
  }
})();
