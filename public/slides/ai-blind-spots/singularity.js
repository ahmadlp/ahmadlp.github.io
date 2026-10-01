/* Round 31, state 66: the prediction, after the equation. From today's level the real wage rises
   while the labor share falls. The two paths are painted in gouache and tagged at the right, as in
   Round 30's generic GIF. */
(() => {
  "use strict";
  const stage = document.querySelector("[data-story-stage]");
  if (!stage || !window.Gouache) return;
  const { clamp, phase, lerp, color, random, paint, fit, WORKERS, ABROAD } = Gouache;
  const STATE = 66;

  // Both paths relative to today, over time u from 0 to 1, as in the GIF: the labor share halves,
  // and the wage follows the formula on the slide before with 1/psi = 0.8.
  const share = u => 0.5 ** u;
  const wage = u => share(u) ** -0.8;
  // Today's level, as a fraction of the plot's height above zero.
  const TODAY = 0.5;

  const panel = document.createElement("section");
  panel.className = "eq-study sg-study";
  panel.dataset.deckModule = "singularity";
  panel.setAttribute("aria-labelledby", "sg-title");
  panel.innerHTML = `<header class="eq-study-header"><h2 id="sg-title">What the model predicts</h2><p>Under jagged AI-driven growth, the labor share falls while real wages rise.</p></header><div class="eq-study-body"><div class="sg-chart"><canvas role="img" aria-label="Over time, the real wage rises above today's level while the labor share falls below it."></canvas></div></div>`;
  stage.append(panel);
  const box = panel.querySelector(".sg-chart");
  const canvas = panel.querySelector("canvas");

  const SERIF = '"Source Serif 4", Georgia, serif';
  const SANS = '"Libre Franklin", "Helvetica Neue", sans-serif';
  let geo = null;

  // Points along a path, evenly spaced along its length on screen.
  function trace(f, u1, gap) {
    const fine = Array.from({ length: 900 }, (_, i) => { const u = u1 * i / 899; return [geo.PX(u), geo.PY(f(u)), u]; });
    const len = [0];
    for (let i = 1; i < fine.length; i++) len.push(len[i - 1] + Math.hypot(fine[i][0] - fine[i - 1][0], fine[i][1] - fine[i - 1][1]));
    const n = Math.max(8, Math.round(len[len.length - 1] / gap)) + 1;
    let j = 0;
    return Array.from({ length: n }, (_, k) => {
      const s = len[len.length - 1] * k / (n - 1);
      while (j < fine.length - 2 && len[j + 1] < s) j++;
      const t = clamp((s - len[j]) / (len[j + 1] - len[j] || 1));
      return fine[j].map((v, i) => lerp(v, fine[j + 1][i], t));
    });
  }
  // A band of half-width r around a line of points, with round ends.
  function band(pts, r) {
    const n = pts.length, q = Math.PI / 2;
    const dir = i => { const [x0, y0] = pts[Math.max(0, i - 1)], [x1, y1] = pts[Math.min(n - 1, i + 1)]; return Math.atan2(y1 - y0, x1 - x0); };
    const at = (i, a) => [pts[i][0] + r * Math.cos(a), pts[i][1] + r * Math.sin(a)];
    const cap = (i, a) => Array.from({ length: 7 }, (_, k) => at(i, a - Math.PI * k / 6)).slice(1, -1);
    return [...pts.map((_, i) => at(i, dir(i) + q)), ...cap(n - 1, dir(n - 1) + q),
      ...pts.map((_, i) => at(n - 1 - i, dir(n - 1 - i) - q)), ...cap(0, dir(0) - q)];
  }

  function layout() {
    const W = box.clientWidth, narrow = W < 640;
    const H = Math.min(box.clientHeight, W * (narrow ? 0.95 : 0.55));
    const k = clamp(W / 1120, 0.6, 1);
    const ctx = fit(canvas, W, H);
    const g = {
      W, H, ctx, k,
      tag: `600 ${Math.max(17, 30 * k)}px ${SERIF}`,
      axis: Math.max(13, 19 * k),
      r: Math.max(3.5, 5.5 * k),
    };
    ctx.font = g.tag;
    const room = ctx.measureText("Labor share").width + 34 * k + 16;
    g.AX = 2;
    g.TOP = 44 * k + 10;
    g.BASE = H - 40 * k - 14;
    g.X0 = g.AX + 58 * k;
    g.X1 = W - room - 30 * k;
    g.PX = u => lerp(g.X0, g.X1, u);
    g.PY = v => g.BASE - v * TODAY * (g.BASE - g.TOP);
    geo = g;
    g.paths = [[wage, ABROAD, "--palette-purchase", "Real wage", -1, 1], [share, WORKERS, "--palette-human", "Labor share", 1, 1]]
      .map(([f, tint, ink, name, side, end], n) => {
        const sprite = document.createElement("canvas");
        sprite.width = canvas.width;
        sprite.height = canvas.height;
        const s = sprite.getContext("2d");
        s.setTransform(ctx.getTransform());
        paint(s, band(trace(f, end, 24), g.r), tint.mark, random(700 + n), { rough: 0.07, rounds: 3, light: 0.06, bare: 0.12 });
        return { f, ink, name, side, end, sprite, line: trace(f, end, 2) };
      });
  }

  function text(ctx, s, x, y, font, fill, alpha = 1, align = "left") {
    if (alpha <= 0.004) return 0;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = font;
    ctx.fillStyle = fill;
    ctx.textAlign = align;
    ctx.fillText(s, x, y);
    const w = ctx.measureText(s).width;
    ctx.restore();
    return w;
  }
  function line(ctx, pts, stroke, width, dash = [], alpha = 1) {
    if (alpha <= 0.004) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.setLineDash(dash);
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.stroke();
    ctx.restore();
  }
  function arrow(ctx, x, y0, y1, fill, width, head, alpha) {
    if (alpha <= 0.004) return;
    const s = Math.sign(y1 - y0);
    line(ctx, [[x, y0], [x, y1 - s * head * 0.6]], fill, width, [], alpha);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x, y1);
    ctx.lineTo(x - head * 0.45, y1 - s * head);
    ctx.lineTo(x + head * 0.45, y1 - s * head);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // t in seconds since the slide opened; Infinity draws the finished chart.
  function draw(t) {
    if (!geo) layout();
    const { ctx, W, H, k, AX, TOP, BASE, PX, PY, X1 } = geo;
    const navy = color("--palette-ink"), copy = color("--palette-copy"), axis = color("--palette-rule-dark"), rule = color("--palette-context");
    const small = `400 ${geo.axis}px ${SANS}`, bold = `600 ${geo.axis}px ${SANS}`;
    ctx.clearRect(0, 0, W, H);
    line(ctx, [[AX, TOP - 8], [AX, BASE], [X1, BASE]], axis, 1.5);
    line(ctx, [[PX(0), BASE], [PX(0), BASE + 9]], axis, 1.5);
    text(ctx, "Relative to today", AX, TOP - 22 * k, bold, navy);
    text(ctx, "Today", PX(0), BASE + 20 + 12 * k, small, copy, 1, "center");
    text(ctx, "Time", PX(0.5), BASE + 20 + 12 * k, bold, navy, 1, "center");
    line(ctx, [[AX, PY(1)], [X1, PY(1)]], rule, 2.5, [2, 8]);

    // Each path is painted left to right with a round brush tip; its tag rides at the right,
    // level with the tip; arrows follow at the end.
    const p = phase(t, 0.35, 3.9), tags = phase(t, 0.1, 0.5), ends = phase(t, 3.8, 4.3);
    for (const { f, ink, name, side, end, sprite, line: pts } of geo.paths) {
      const tone = color(ink);
      if (p > 0) {
        const shown = pts.filter(([, , u]) => u <= p);
        if (shown.length > 1) {
          ctx.save();
          ctx.beginPath();
          band(shown, geo.r + 4).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
          ctx.closePath();
          ctx.clip();
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.drawImage(sprite, 0, 0);
          ctx.restore();
          ctx.restore();
        }
      }
      const u = Math.min(p, end);
      const y = clamp(PY(f(u)) + 10 * k + side * 30 * k * (1 - p), TOP + 22 * k, BASE - 6 * k);
      const x = X1 + 24 * k;
      const w = text(ctx, name, x, y, geo.tag, tone, tags);
      const [a, b] = side < 0 ? [y + 2, y - 28 * k] : [y - 28 * k, y + 2];
      arrow(ctx, x + w + 16 * k, a, b, tone, 3, 12 * k, ends);
    }
  }

  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let animation = 0, shownFrame = null;
  function play() {
    cancelAnimationFrame(animation);
    const start = performance.now();
    const tick = now => {
      const t = (now - start) / 1000;
      draw(t);
      if (t < 4.3) animation = requestAnimationFrame(tick);
    };
    animation = requestAnimationFrame(tick);
  }
  // Forward into the slide it paints; back into it, or in a still, it lands at rest.
  function show({ state, frame, reduced }) {
    const active = Number(state) === STATE;
    panel.hidden = !active;
    frame = Number(frame);
    if (active && frame !== shownFrame) {
      if (reduced || motion.matches || shownFrame === null || frame < shownFrame) { cancelAnimationFrame(animation); draw(Infinity); }
      else play();
    }
    if (!active) cancelAnimationFrame(animation);
    shownFrame = frame;
  }
  const current = () => { geo = null; if (!panel.hidden) { cancelAnimationFrame(animation); draw(Infinity); } };

  let resizeTimer = 0;
  addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(current, 120); });
  window.addEventListener("story:position", event => show(event.detail));
  // Tags are measured in the loaded fonts; the palette is read again once the page has loaded.
  document.fonts.ready.then(current);
  addEventListener("load", current);
  show({ state: stage.dataset.state, frame: stage.dataset.frame, reduced: true });
})();
