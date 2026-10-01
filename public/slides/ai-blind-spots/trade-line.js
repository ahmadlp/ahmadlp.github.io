/* Round 30, states 61 to 65: AI versus trade (prototype blocks C, "Production line"). The 24 tasks
   of the medicine panorama in production order along a thread, the workers' lane above, AI's or
   abroad's below, and the six block names over both rows. Under trade a painted lid folds down
   over each block's four dots and locks them in a box; then whole boxes drop across the border,
   so the thread crosses it only between blocks. Under AI single dots drop and the thread zigzags.
   Progress follows the scroll from the centre of the first beat to the centre of the last. */
(() => {
  "use strict";
  const article = document.querySelector(".trade-line");
  const story = document.querySelector("[data-story-stage]");
  if (!article || !story || !window.Gouache) return;
  const { clamp, smooth, phase, lerp, color, mix, WORKERS, AI, ABROAD, random, paint, circle, fit } = Gouache;
  const FIRST = 61, LAST = 65;

  // Illustrative: 24 consecutive tasks in six blocks of four. x is the workers' cost advantage:
  // positive where workers are cheaper.
  const BLOCKS = [
    { name: "Drug discovery", tasks: [["screen compounds", -1.6], ["model molecules", -1.2], ["read the literature", -0.4], ["choose a candidate", 1.8]] },
    { name: "Lab testing", tasks: [["run the assays", -0.2], ["prepare samples", 0.3], ["test on animals", 1.0], ["calibrate instruments", 1.1]] },
    { name: "Clinical trials", tasks: [["design the trial", 0.5], ["recruit patients", 2.2], ["record outcomes", -1.8], ["analyze the results", -0.5]] },
    { name: "Regulatory filing", tasks: [["estimate costs", -1.1], ["write the dossier", -0.6], ["meet the regulators", 2.6], ["set the price", 0.4]] },
    { name: "Manufacturing", tasks: [["source ingredients", 0.3], ["run the press line", -0.9], ["test each batch", -0.6], ["label the packs", 0.8]] },
    { name: "Sales", tasks: [["brief doctors", 1.7], ["hear their concerns", 2.3], ["train nurses", 1.4], ["report side effects", -0.3]] },
  ];
  const tasks = [];
  BLOCKS.forEach((block, b) => {
    block.mean = block.tasks.reduce((sum, task) => sum + task[1], 0) / block.tasks.length;
    block.tasks.forEach(([name, x]) => tasks.push({ name, x, i: tasks.length, block: b }));
  });
  // L, the cost advantage that AI or foreign producers have overcome, rises while productivity
  // grows. Workers keep a task while its own advantage is above L (AI), or while the average
  // advantage of its block is above L (trade). A task leaves over a short stretch of L.
  const L0 = -2, L1 = 1.65;
  const moved = (threshold, L) => smooth(clamp((L - threshold) / 0.16));
  // A dot or box that drops lands with a bounce.
  const bounce = u => {
    const n = 7.5625, d = 2.75;
    if (u < 1 / d) return n * u * u;
    if (u < 2 / d) return n * (u -= 1.5 / d) * u + 0.75;
    if (u < 2.5 / d) return n * (u -= 2.25 / d) * u + 0.9375;
    return n * (u -= 2.625 / d) * u + 0.984375;
  };
  // The niches workers keep under AI, named above them: a lone task's name on the side away from
  // its neighbour, a pair's names together.
  const NICHES = [[[3], "right"], [[9], "center"], [[14], "center"], [[20, 21], "center"]];

  // The timeline, in progress; the beats' centres are at 0, 1/4, 1/2, 3/4 and 1. Each step's
  // sentence shows from its start. The first block locks alone while the others wait, dimmed; then
  // the other five lock in turn; then L rises, a little past halfway by the fourth beat.
  const STEPS = [0, 0.02, 0.27, 0.51, 0.95];
  const level = p => lerp(L0, L1, clamp((p - 0.51) / 0.42));
  const lockOf = (b, p) => (b === 0 ? clamp((p - 0.08) / 0.1) : clamp((p - 0.3 - 0.025 * (b - 1)) / 0.07));
  const dim = p => 1 - 0.65 * phase(p, 0.04, 0.07) * (1 - phase(p, 0.27, 0.3));

  const stage = article.querySelector(".line-stage");
  const steps = [...article.querySelectorAll(".line-steps > span")];
  const names = article.querySelector(".line-names");
  const rows = ["ai", "trade"].map(key => {
    const el = article.querySelector(`[data-row="${key}"]`);
    return { key, el, wrap: el.querySelector(".pile-wrap"), canvas: el.querySelector("canvas"), count: el.querySelector("[data-count]") };
  });
  // The type and the colours, read from the stylesheets at every build.
  let SANS, SERIF, INK, RULE, COPY, MUTED, HALO;
  let geo = null;

  // Painted dots of diameter d, as on the next slide: drawn once per colour and variant, each
  // variant a shade lighter or darker, then stamped every frame.
  const VARIANTS = 6;
  function paintDots(d) {
    const dpr = Math.min(2, devicePixelRatio || 1), out = {};
    const coats = { w: [WORKERS.wash, WORKERS.mark, 0.78], ai: [AI.wash, AI.mark, 0.62], ab: [ABROAD.wash, ABROAD.mark, 0.6] };
    Object.entries(coats).forEach(([key, [wash, mark, t]], n) => {
      out[key] = Array.from({ length: VARIANTS }, (_, v) => {
        const s = Math.ceil(d + 6), cv = document.createElement("canvas");
        cv.width = cv.height = Math.ceil(s * dpr);
        const g = cv.getContext("2d");
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        paint(g, circle(s / 2, s / 2, d / 2, 14), mix(wash, mark, t + 0.16 * (v / (VARIANTS - 1) - 0.5)), random(100 * n + v + 1),
          { rough: 0.22, rounds: 2, light: 0.1, bare: 0.12 });
        return { cv, s };
      });
    });
    return out;
  }
  function put(ctx, sp, x, y, alpha) {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.drawImage(sp.cv, x - sp.s / 2, y - sp.s / 2, sp.s, sp.s);
  }
  // A task in the workers' plum, glazed over in the colour of AI or abroad (key "ai" or "ab") as
  // it leaves them (u from 0 to 1).
  function dot(ctx, key, i, x, y, u = 0, alpha = 1) {
    const v = i % VARIANTS;
    if (u < 1) put(ctx, geo.dots.w[v], x, y, alpha);
    if (u > 0) put(ctx, geo.dots[key][v], x, y, alpha * u);
  }

  // Points around a rounded rectangle, for a painted shape.
  function roundRect(x, y, w, h, r, n = 6) {
    r = Math.min(r, w / 2, h / 2);
    const pts = [];
    [[x + w - r, y + r], [x + w - r, y + h - r], [x + r, y + h - r], [x + r, y + r]].forEach(([cx, cy], c) => {
      for (let i = 0; i <= n; i++) {
        const a = (c - 1 + i / n) * Math.PI / 2;
        pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
      }
    });
    return pts;
  }
  // A pale painted wash in a rounded rectangle w by h, the ground of a box; drawn once, then
  // stamped with its top left corner at (x, y), squeezed to height h while its lid folds.
  function wash(w, h, r, c, seed) {
    const dpr = Math.min(2, devicePixelRatio || 1), m = 4;
    const cv = document.createElement("canvas");
    cv.width = Math.ceil((w + 2 * m) * dpr);
    cv.height = Math.ceil((h + 2 * m) * dpr);
    const g = cv.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint(g, roundRect(m, m, w, h, r), c, random(seed), { rough: 0.012, light: 0.04, bare: 0.1 });
    return { cv, m, w, h };
  }
  function stamp(ctx, sp, x, y, alpha, h) {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.drawImage(sp.cv, x - sp.m, y - sp.m * h / sp.h, sp.w + 2 * sp.m, (sp.h + 2 * sp.m) * h / sp.h);
  }
  function rrect(ctx, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  // A box's outline, in the ink of the rings.
  function outline(ctx, x, y, w, h, r, alpha) {
    if (alpha <= 0.004 || w <= 0 || h <= 0) return;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = INK;
    ctx.lineWidth = 1.2;
    rrect(ctx, x, y, w, h, r);
    ctx.stroke();
  }

  function text(ctx, s, x, y, { size = 13, weight = 400, fill = COPY, align = "left", alpha = 1, halo = false } = {}) {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.font = `${weight} ${size}px ${SANS}`;
    ctx.textAlign = align;
    if (halo) {
      ctx.lineJoin = "round";
      ctx.lineWidth = 5;
      ctx.strokeStyle = HALO;
      ctx.strokeText(s, x, y);
    }
    ctx.fillStyle = fill;
    ctx.fillText(s, x, y);
  }
  const tagSize = () => (geo.phone ? 11 : 13);
  const width = (ctx, s, size) => { ctx.font = `500 ${size}px ${SANS}`; return ctx.measureText(s).width; };

  // A tag in the deck's callout style: short text on a paper halo, with a thin leader from the edge
  // of each target [x, y, radius] to the nearest point of the text.
  function tag(ctx, s, x, y, targets, { align = "left", fill = INK, alpha = 1 } = {}) {
    if (alpha <= 0.004) return;
    const size = tagSize(), w = width(ctx, s, size);
    const x0 = align === "left" ? x : align === "right" ? x - w : x - w / 2;
    const box = { x: x0 - 3, y: y - 0.75 * size - 3, w: w + 6, h: 0.75 * size + 7 };
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = COPY;
    ctx.lineWidth = 1;
    targets.forEach(([tx, ty, r]) => {
      const nx = clamp(tx, box.x, box.x + box.w), ny = clamp(ty, box.y, box.y + box.h);
      const a = Math.atan2(ny - ty, nx - tx);
      ctx.beginPath();
      ctx.moveTo(tx + (r + 2) * Math.cos(a), ty + (r + 2) * Math.sin(a));
      ctx.lineTo(nx, ny);
      ctx.stroke();
    });
    text(ctx, s, x, y, { size, weight: 500, fill, align, alpha, halo: true });
  }
  function ring(ctx, x, y, r, alpha) {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = INK;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function build() {
    SANS = color("--sans") || "sans-serif";
    SERIF = color("--serif") || "serif";
    INK = color("--ink");
    RULE = color("--palette-rule-dark");
    COPY = color("--copy");
    MUTED = color("--muted");
    HALO = color("--paper") || "#f2f6f8";
    const phone = innerWidth <= 760;
    rows.forEach(r => (r.wrap.style.height = "0px"));
    names.style.height = "0px";
    const W = rows[0].wrap.clientWidth;
    // 24 dots with a gap between tasks and a wider one between blocks, right of the lanes' names
    // and, on wider screens, left of the counts.
    const GUTTER = phone ? 48 : 86, room = W - GUTTER - (phone ? 4 : 132);
    const d = clamp(room / (24 + 23 * 0.29 + 5 * 0.8), 6, 28);
    const gap = 0.29 * d, extra = 0.8 * d, pad = 0.2 * d, bh = d + 2 * pad;
    const left = GUTTER + (room - (24 * d + 23 * gap + 5 * extra)) / 2 + d / 2;
    const xs = tasks.map(t => left + t.i * (d + gap) + t.block * extra);
    const boxes = BLOCKS.map((B, b) => {
      const x0 = xs[4 * b] - d / 2 - pad, w = xs[4 * b + 3] - xs[4 * b] + d + 2 * pad;
      const c = (t, seed) => wash(w, bh, 6, mix(t.wash, t.mark, 0.2), seed);
      return { x0, w, cx: x0 + w / 2, sp: { w: c(WORKERS, 500 + 2 * b), ab: c(ABROAD, 501 + 2 * b) } };
    });
    // The block names at 19px, or smaller to fit over their blocks; where even 14px is too wide,
    // on alternate lines.
    const m = names.getContext("2d");
    m.font = `600 19px ${SERIF}`;
    const widest = Math.max(...BLOCKS.map(B => m.measureText(B.name).width));
    const fits = n => Math.min(19, Math.floor((19 * (n * (xs[4] - xs[0]) - 12)) / widest));
    const tiers = fits(1) >= 14 ? 1 : 2, size = fits(tiers), NH = tiers * (size + 4) + 12;
    // Above each workers' lane, room for the niches' names (AI) or the open lids (trade); below the
    // other lane, room for the dots. The drop between the two lanes takes what the stage has left.
    const top = { ai: d / 2 + (phone ? 26 : 34), trade: 1.5 * bh + 8 }, foot = { ai: d / 2 + 12, trade: bh / 2 + 10 };
    const gapY = parseFloat(getComputedStyle(stage).rowGap) || 0;
    const used = NH + 2 * gapY + rows.reduce((s, r) => s + r.el.offsetHeight + top[r.key] + foot[r.key], 0);
    const fall = clamp((stage.clientHeight - used - 6) / 2, 56, phone ? 100 : 150);
    geo = { W, phone, GUTTER, NH, size, tiers, d, bh, xs, boxes, fall, dots: paintDots(d) };
    geo.names = fit(names, W, NH);
    rows.forEach(r => {
      r.y1 = top[r.key];
      r.H = Math.ceil(top[r.key] + fall + foot[r.key]);
      r.wrap.style.height = `${r.H}px`;
      r.wrap.style.setProperty("--lane", `${r.y1}px`);
      r.ctx = fit(r.canvas, W, r.H);
    });
    heads();
  }

  // The block names head both rows, each over a thin rule with its ends turned down, spanning the
  // block's four tasks; a name wider than the edge allows moves in.
  function heads() {
    const { W, NH, size, tiers, boxes } = geo, ctx = geo.names;
    ctx.globalAlpha = 1;
    ctx.font = `600 ${size}px ${SERIF}`;
    ctx.textAlign = "center";
    boxes.forEach(({ x0, w, cx }, b) => {
      const half = ctx.measureText(BLOCKS[b].name).width / 2;
      ctx.fillStyle = INK;
      ctx.fillText(BLOCKS[b].name, clamp(cx, half, W - half), NH - 11 - (tiers === 2 && b % 2 === 0 ? size + 4 : 0));
      ctx.fillStyle = RULE;
      ctx.fillRect(x0, NH - 5, w, 1);
      ctx.fillRect(x0, NH - 5, 1, 4);
      ctx.fillRect(x0 + w - 1, NH - 5, 1, 4);
    });
  }

  // The two lanes' owners and, under trade, the border between them as a map draws one.
  function lanes(ctx, r, other, ink, border) {
    const { phone, d, xs, fall } = geo, size = phone ? 10.5 : 13;
    text(ctx, "Workers", 0, r.y1 + 0.35 * size, { size, weight: 600, fill: WORKERS.ink });
    text(ctx, other, 0, r.y1 + fall + 0.35 * size, { size, weight: 600, fill: ink });
    if (!border) return;
    const y = r.y1 + fall / 2, x1 = xs[23] + d / 2;
    ctx.globalAlpha = 1;
    ctx.strokeStyle = RULE;
    ctx.lineWidth = 1.2;
    ctx.setLineDash([9, 3.5, 1.6, 3.5]);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(x1, y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = MUTED;
    ctx.font = `600 10px ${SANS}`;
    ctx.letterSpacing = "1.6px";
    ctx.textAlign = "right";
    ctx.fillText("BORDER", x1, y - 7);
    ctx.letterSpacing = "0px";
  }
  // The thread from each task to the next, behind the dots.
  function thread(ctx, pts) {
    ctx.globalAlpha = 1;
    ctx.strokeStyle = RULE;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.stroke();
  }

  function render(p) {
    if (!geo) build();
    const { W, phone, GUTTER, d, bh, xs, boxes, fall } = geo, L = level(p), fin = phase(p, 0.95, 0.99);
    const k = STEPS.reduce((n, s, i) => (p >= s ? i : n), 0);
    steps.forEach((el, i) => el.classList.toggle("on", i === k));
    const [a, t] = rows;

    // AI: each dot drops on its own when AI overtakes the workers on its task.
    let ctx = a.ctx, y1 = a.y1;
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, a.H);
    lanes(ctx, a, "AI", AI.ink, false);
    const ai = tasks.map(task => { const m = moved(task.x, L); return [xs[task.i], y1 + fall * bounce(m), smooth(clamp(2 * m - 0.5))]; });
    thread(ctx, ai);
    ai.forEach(([x, y, u], i) => dot(ctx, "ai", i, x, y, u));
    tag(ctx, "one task", xs[0], y1 + d / 2 + 22, [[xs[0], y1, d / 2]], { align: "center", alpha: 1 - phase(p, 0.02, 0.05) });
    // The niches workers keep, named above them; on a phone one tag for all five.
    const above = y1 - d / 2 - 12, at = i => [xs[i], y1, d / 2];
    if (phone) tag(ctx, "Niches workers keep", (GUTTER + xs[23]) / 2, above - 4, NICHES.flatMap(([ids]) => ids.map(at)), { align: "center", fill: WORKERS.ink, alpha: fin });
    else NICHES.forEach(([ids, align]) => {
      const x = align === "right" ? xs[ids[0]] + d / 2 : align === "left" ? xs[ids[0]] - d / 2 : ids.reduce((s, i) => s + xs[i], 0) / ids.length;
      tag(ctx, ids.map(i => tasks[i].name).join(" · "), x, above, ids.map(at), { align, fill: WORKERS.ink, alpha: fin });
    });
    a.count.textContent = tasks.filter(task => moved(task.x, L) < 0.5).length;

    // Trade: a lid, first standing open above each block, folds down about the block's top edge
    // and covers its four dots; then the closed box drops across the border when L passes the
    // average of its tasks. The first block locks alone while the others wait, dimmed.
    ctx = t.ctx;
    y1 = t.y1;
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, t.H);
    lanes(ctx, t, "Abroad", ABROAD.ink, true);
    const state = BLOCKS.map((B, b) => {
      const m = moved(B.mean, L);
      return { b, s: lockOf(b, p), y: y1 + fall * bounce(m), u: smooth(clamp(2 * m - 0.5)), alpha: b === 0 ? 1 : dim(p) };
    });
    thread(ctx, tasks.map(task => [xs[task.i], state[task.block].y]));
    state.forEach(({ b, s, y, u, alpha }) => {
      const { x0, w, sp } = boxes[b], hinge = y - bh / 2;
      const f = phase(s, 0.25, 1), o = alpha * phase(s, 0, 0.25);
      const far = hinge - bh * Math.cos(Math.PI * f), top = Math.min(hinge, far), h = Math.abs(far - hinge);
      // Folding over, the lid is seen through; closed, its wash lies behind the dots.
      const behind = phase(f, 0.8, 1), front = f < 0.5 ? 1 : 0.5 * (1 - behind);
      stamp(ctx, sp.w, x0, top, o * behind * (1 - u), h);
      stamp(ctx, sp.ab, x0, top, o * behind * u, h);
      for (let i = 4 * b; i < 4 * b + 4; i++) dot(ctx, "ab", i, xs[i], y, u, alpha);
      stamp(ctx, sp.w, x0, top, o * front, h);
      outline(ctx, x0, top, w, h, 6, o);
    });
    // Rings on the first block's four tasks and a tag naming them, then the one block.
    const s0 = lockOf(0, p), into = phase(p, 0.04, 0.07), box = boxes[0];
    const four = [0, 1, 2, 3].map(i => [xs[i], y1, d / 2 + 3]);
    four.forEach(([x, y, r]) => ring(ctx, x, y, r, into * (1 - phase(s0, 0.2, 0.4))));
    const ty = y1 + bh / 2 + 24;
    tag(ctx, "4 tasks", box.cx, ty, four, { align: "center", alpha: into * (1 - phase(s0, 0.6, 0.85)) });
    tag(ctx, "1 block", box.cx, ty, [[box.cx, y1 + bh / 2, 0]], { align: "center", alpha: phase(s0, 0.85, 1) * (1 - phase(p, 0.27, 0.29)) });
    tag(ctx, "No niches left", (GUTTER + xs[23]) / 2, y1 + 4.5, [], { align: "center", fill: WORKERS.ink, alpha: fin });
    t.count.textContent = 4 * BLOCKS.filter(B => moved(B.mean, L) < 0.5).length;
  }

  function show({ state, position }) {
    state = Number(state);
    if (state < FIRST || state > LAST) return;
    render(clamp((Number(position) - FIRST) / (LAST - FIRST)));
  }
  const current = () => show({ state: story.dataset.state, position: story.dataset.position ?? story.dataset.state });

  let resizeTimer = 0;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { geo = null; current(); }, 120);
  });
  window.addEventListener("story:position", event => show(event.detail));
  // The heads above the rows set the room left for them; measure again in the loaded fonts.
  document.fonts.ready.then(() => { geo = null; current(); });
  // And once the page has loaded, after gouache.js has read the palette again: Safari can run this
  // script before the stylesheets apply, when the colours and the sizes are not yet known.
  addEventListener("load", () => { geo = null; current(); });
  current();
})();
