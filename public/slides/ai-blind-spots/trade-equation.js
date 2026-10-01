/* Frame 45: the painted parts of the two tracks, in the deck's gouache (gouache.js). Repainted on resize,
   since the bars follow the track's width and the arrows the verdict's size. */
(() => {
  "use strict";
  const G = window.Gouache, frame = document.querySelector(".trade-equation-frame");
  if (!G || !frame) return;
  const tone = name => G.rgb(G.color(name));

  // Adoption jaggedness as a red bar from 1 to its value, and 1 + frontier jaggedness as a blue tick
  // across the track.
  function tracks() {
    frame.querySelectorAll(".tr").forEach((row, i) => {
      const track = row.querySelector(".tr-track"), bar = row.querySelector(".tr-bar"), tick = row.querySelector(".tr-tick");
      const at = parseFloat(row.style.getPropertyValue("--at")) / 100;
      const r = 7, h = 2 * r + 10, len = Math.max(2 * r + 4, track.clientWidth * at);
      const ctx = G.fit(bar, len, h);
      bar.style.marginTop = `${-h / 2}px`;
      G.stroke(ctx, [[r + 1, h / 2], [len - r - 1, h / 2]], r, tone("--palette-purchase"), G.random(700 + i));
      G.stroke(G.fit(tick, 12, 56), [[6, 4], [6, 52]], 2.2, tone("--palette-machine"), G.random(720 + i));
    });
  }

  // The verdict arrows, sized to their text: down for "Wages fall", up for "Wages rise".
  function arrows() {
    frame.querySelectorAll(".tr-verdict-arrow").forEach((cv, i) => {
      const fs = parseFloat(getComputedStyle(cv).fontSize);
      const w = Math.round(fs * 0.62), h = Math.round(fs * 0.96), r = Math.max(1.8, fs * 0.065);
      const ctx = G.fit(cv, w, h), rand = G.random(900 + i), c = tone("--palette-human");
      const up = !!cv.closest(".tr-verdict--rise"), x = w / 2, head = h * 0.44, pad = 2;
      const tip = up ? pad : h - pad, base = up ? pad + head : h - pad - head;
      G.stroke(ctx, [[x, up ? h - pad - r : pad + r], [x, up ? base + 2 : base - 2]], r, c, rand);
      G.paint(ctx, G.dense([[x, tip], [w - pad, base], [pad, base], [x, tip]], 6).slice(0, -1), c, rand, { ...G.BRUSH, rough: 0.04 });
    });
  }

  // The port painting has a paper ground, so it gets a hand-cut edge.
  function edges() {
    frame.querySelectorAll(".tr-art--port").forEach((art, i) => {
      const w = art.clientWidth, h = art.clientHeight, m = 8;
      if (!w || !h) return;
      const cv = document.createElement("canvas");
      G.paint(G.fit(cv, w, h), G.dense([[m, m], [w - m, m], [w - m, h - m], [m, h - m], [m, m]], 40).slice(0, -1), [0, 0, 0], G.random(800 + i),
        { rough: 0.08, rounds: 3, dabs: 0, light: 0, bare: 0 });
      art.style.setProperty("--edge", `url("${cv.toDataURL()}")`);
    });
  }

  // The arrows go first: until then each is a blank canvas of the default 300 by 150, which widens the
  // verdict and so narrows the track the bars are measured on.
  function paint() {
    arrows();
    tracks();
    edges();
  }
  addEventListener("load", paint);
  let queued = false;
  addEventListener("resize", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; paint(); });
  });
})();
