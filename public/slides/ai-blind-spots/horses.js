(() => {
  "use strict";

  const root = document.documentElement;
  const stage = document.querySelector("[data-story-stage]");
  const coda = document.querySelector("[data-horse-coda]");
  if (!stage || !coda) return;

  root.dataset.horseConcept = "02";

  const captions = Array.from(coda.querySelectorAll("[data-horse-caption]"));
  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  const smoothstep = (start, end, value) => {
    const progress = clamp((value - start) / (end - start), 0, 1);
    return progress * progress * (3 - 2 * progress);
  };

  function paint(rawPosition, reduced = false) {
    const state = Number(stage.dataset.state || 0);
    const position = reduced ? state : rawPosition;
    captions.forEach(caption => {
      const active = Number(caption.dataset.horseCaption) === state;
      caption.style.visibility = active ? "visible" : "hidden";
      caption.setAttribute("aria-hidden", String(!active));
    });
    // The opener fades out as the chart (horses-chart.js) fades in.
    coda.style.setProperty("--r13-opener-in", (1 - smoothstep(24.56, 24.72, position)).toFixed(4));
    coda.style.setProperty("--hz-in", smoothstep(24.58, 24.74, position).toFixed(4));
  }

  window.addEventListener("story:position", (event) => {
    paint(Number(event.detail?.position || 0), Boolean(event.detail?.reduced));
  });
  window.addEventListener("resize", () => {
    paint(Number(stage.dataset.position || stage.dataset.state || 0), root.dataset.forceReduced === "true");
  });

  [
    "horse-opener-dockside-landscape-v2.png",
    "horse-opener-dockside-mobile-v2.png",
    "horse-workday-panorama-neutral-v2.png",
    "engine-workday-panorama-cobalt-v2.png",
  ].forEach((filename) => {
    const image = new Image();
    image.decoding = "async";
    image.src = typeof window.round14Asset === "function"
      ? window.round14Asset(filename, "local")
      : `./assets/${filename}`;
    image.decode?.().catch(() => {});
  });

  paint(Number(stage.dataset.position || stage.dataset.state || 0), root.dataset.forceReduced === "true");
})();
