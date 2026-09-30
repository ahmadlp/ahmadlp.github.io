/* Round 29, states 35 to 39: blocks average away the workers' niches (prototype blocks C).
   The estimation histogram as a pile of painted dots, one per task, placed by the log cost ratio
   of workers to AI. Under trade one block of four tasks gathers first, alone, into one dot of four
   times the area at the average of its tasks; then every block does the same, the pile narrows
   and the niches on the far left, where workers are cheapest, are averaged away. Then cost parity
   moves left as productivity grows. Progress follows the scroll from the centre of the first beat
   to the centre of the last. */
(() => {
  "use strict";
  const article = document.querySelector(".trade-pile");
  const story = document.querySelector("[data-story-stage]");
  if (!article || !story || !window.Gouache) return;
  const { clamp, smooth, phase, lerp, color, mix, WORKERS, AI, ABROAD, random, paint, circle, fit } = Gouache;
  const FIRST = 35, LAST = 39;

  // 484 tasks at evenly spread points of the estimated frontier, as the deck's frontier star
  // places its 32 (data/r28-data.js, theory): z is the log human-to-AI cost ratio, below zero
  // where workers are cheaper. A seeded shuffle is the production order, and a block is four
  // consecutive tasks. With this seed 13 of the 121 blocks start on the workers' side, the share
  // the frontier predicts for blocks of four.
  const N = 484, K = 4, B = N / K, PSI = 1.3589455815489735, MU = 0.8165611190919532;
  const Z = (() => {
    const rand = random(13), idx = Array.from({ length: N }, (_, i) => i);
    for (let i = N - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx.map(k => MU + Math.log((k + 0.5) / (N - k - 0.5)) / PSI);
  })();
  const MEANS = Array.from({ length: B }, (_, b) => (Z[K * b] + Z[K * b + 1] + Z[K * b + 2] + Z[K * b + 3]) / K);
  const ZL = -4.5, ZR = 6.1; // the axis
  const GROWTH = Math.log(10); // parity moves this far left: productivity grows tenfold
  const ROOM = { ai: 58, trade: 36 }, FOOT = 24; // space above each pile, and below it for the width tags
  const VARIANTS = 6;
  // Where a block's four dots meet inside it before they merge.
  const SLOTS = [[-0.45, 0.45], [-0.45, -0.45], [0.45, 0.45], [0.45, -0.45]];
  // The block that gathers first, alone: it holds the deepest niche (z = −4.24) with tasks at
  // −0.51, 2.26 and 3.23, so it sits at 0.19, just right of parity. The tagged task is the one
  // furthest right.
  const EX = 30, ONE = Z.indexOf(Math.max(...Z));
  const NICHES = Z.map((z, i) => i).filter(i => Z[i] < -GROWTH);
  // The timeline, in progress. Each step's sentence shows from its start.
  const STEPS = [0, 0.01, 0.2, 0.3, 0.46, 0.6, 0.93];
  const MOVE = [0.12, 0.19]; // the first block gathers
  const MASS = [0.3, 0.39], GLIDE = 0.11; // then every other block, each over GLIDE
  const GROW = [0.6, 0.93]; // then parity moves

  const stage = article.querySelector(".pile-stage");
  const steps = [...article.querySelectorAll(".pile-steps > span")];
  const rows = ["ai", "trade"].map(key => {
    const el = article.querySelector(`[data-row="${key}"]`);
    return { key, el, wrap: el.querySelector(".pile-wrap"), canvas: el.querySelector("canvas"), count: el.querySelector("[data-count]") };
  });
  // The type and the colours, read from the stylesheets at every build.
  let SANS, INK, RULE, COPY, HALO, COAT;
  let geo = null;

  // Stack discs of diameter d on a baseline from left to right, each as low as it can go without
  // overlapping the discs already placed. With a slide, stack them again from the bottom up, and
  // let each disc move sideways by up to that much into a lower spot, so heaps settle into a mound;
  // no disc slides across the wall (cost parity at the start). The disc `first` is placed first in
  // both passes, so it rests on the baseline.
  function swarm(xs, d, slide = 0, wall = 0, first = -1) {
    const px = xs.slice(), py = [], cell = x => Math.floor(x / d);
    let cells;
    const drop = x => {
      const near = [];
      for (let c = cell(x) - 1; c <= cell(x) + 1; c++) (cells.get(c) || []).forEach(j => { if (Math.abs(px[j] - x) < d) near.push(j); });
      return [d / 2].concat(near.map(j => py[j] + Math.sqrt(d * d - (px[j] - x) ** 2))).sort((a, b) => a - b)
        .find(y => near.every(j => (px[j] - x) ** 2 + (py[j] - y) ** 2 >= d * d - 1e-6));
    };
    const pass = (order, reach) => {
      cells = new Map();
      order.forEach(i => {
        let best = Infinity;
        [0, 1, -1, 2, -2, 3, -3, 4, -4].slice(0, reach ? 9 : 1).forEach(k => {
          const x = xs[i] + reach * k / 4;
          if ((x - wall) * (xs[i] - wall) < 0) return;
          const y = drop(x), score = y + 0.4 * Math.abs(x - xs[i]);
          if (score < best) { best = score; px[i] = x; py[i] = y; }
        });
        if (!cells.has(cell(px[i]))) cells.set(cell(px[i]), []);
        cells.get(cell(px[i])).push(i);
      });
    };
    const lead = order => (first < 0 ? order : [first].concat(order.filter(i => i !== first)));
    const ids = xs.map((x, i) => i);
    pass(lead(ids.slice().sort((i, j) => xs[i] - xs[j])), 0);
    if (slide) pass(lead(ids.sort((i, j) => py[i] - py[j])), slide);
    return { x: px, y: py };
  }

  // Painted dots, drawn once per colour, size and variant, then stamped every frame.
  function sprites(d) {
    const dpr = Math.min(2, devicePixelRatio || 1);
    const make = (c, diam, seed) => {
      const s = Math.ceil(diam + 6), cv = document.createElement("canvas");
      cv.width = cv.height = Math.ceil(s * dpr);
      const g = cv.getContext("2d");
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(g, circle(s / 2, s / 2, diam / 2, 14), c, random(seed), { rough: 0.22, rounds: 2, light: 0.1, bare: 0.12 });
      return { cv, s };
    };
    // Each variant a shade lighter or darker, so the pile shimmers like a pointillist field.
    const out = {};
    Object.entries(COAT).forEach(([key, [wash, mark, t]], n) => {
      out[key] = [d, 2 * d].map((diam, big) => Array.from({ length: VARIANTS }, (_, v) =>
        make(mix(wash, mark, t + 0.16 * (v / (VARIANTS - 1) - 0.5)), diam, 100 * n + 10 * big + v + 1)));
    });
    return out;
  }

  function build() {
    SANS = color("--sans") || "sans-serif";
    INK = color("--ink");
    RULE = color("--palette-rule-dark");
    COPY = color("--copy");
    HALO = color("--paper") || "#f2f6f8";
    COAT = {
      w: [WORKERS.wash, WORKERS.mark, 0.78],
      ai: [AI.wash, AI.mark, 0.62],
      ab: [ABROAD.wash, ABROAD.mark, 0.6],
    };
    const phone = innerWidth <= 760;
    rows.forEach(r => (r.wrap.style.height = "0px"));
    const W = rows[0].wrap.clientWidth, pad = 6;
    const X = z => pad + (z - ZL) / (ZR - ZL) * (W - 2 * pad);
    const ax = Z.map(X);
    const piles = d => {
      const ay = swarm(ax, d).y, { x: bx, y: by } = swarm(MEANS.map(X), 2 * d, 1.5 * d, X(0), EX);
      return { d, ay, bx, by, hA: Math.max(...ay) + d / 2, hB: Math.max(...by) + d };
    };
    // The largest dots whose piles fit the stage; on a phone no larger than W / 64.
    let pick;
    const gap = parseFloat(getComputedStyle(stage).rowGap) || 0;
    const used = rows.reduce((s, r) => s + r.el.offsetHeight, 0) + gap;
    const avail = stage.clientHeight - used - ROOM.ai - ROOM.trade - 2 * FOOT - 6;
    for (let d = phone ? Math.min(9, 0.25 * Math.floor(W / 16)) : 9; d >= 3.4; d -= 0.25) {
      pick = piles(d);
      if (pick.hA + pick.hB <= avail) break;
    }
    const { d, ay, bx, by, hA, hB } = pick;
    const heights = { ai: Math.ceil(ROOM.ai + hA + FOOT), trade: Math.ceil(ROOM.trade + hB + FOOT) };
    rows.forEach(r => {
      r.H = heights[r.key];
      r.base = r.H - FOOT;
      r.wrap.style.height = `${r.H}px`;
      r.ctx = fit(r.canvas, W, r.H);
    });
    // The other blocks gather from the bottom of their pile up, so the narrow pile builds like sand.
    const rand = random(5);
    const rank = by.map((y, b) => [y + rand() * 3 * d, b]).filter(([, b]) => b !== EX).sort((p, q) => p[0] - q[0]);
    const starts = new Array(B);
    rank.forEach(([, b], n) => (starts[b] = lerp(MASS[0], MASS[1], n / (B - 2))));
    geo = { W, X, d, hA, ax, ay, bx, by, starts, phone, sp: sprites(d) };
  }

  function put(ctx, sp, x, y, alpha, scale = 1) {
    if (alpha <= 0.004) return;
    const s = sp.s * scale;
    ctx.globalAlpha = alpha;
    ctx.drawImage(sp.cv, x - s / 2, y - s / 2, s, s);
  }
  // A dot whose colour turns to the workers' plum as parity passes it (w from 0 to 1).
  function dot(ctx, key, big, n, x, y, w, alpha = 1, scale = 1) {
    const v = n % VARIANTS;
    if (w < 1) put(ctx, geo.sp[key][big][v], x, y, alpha, scale);
    if (w > 0) put(ctx, geo.sp.w[big][v], x, y, alpha * w, scale);
  }
  const side = (z, parity) => smooth(clamp((parity - z) / 0.12 + 0.5));

  function text(ctx, s, x, y, { size = 13, weight = 400, fill = COPY, align = "left", alpha = 1, halo = false } = {}) {
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
  const width = (ctx, s, size, weight = 500) => { ctx.font = `${weight} ${size}px ${SANS}`; return ctx.measureText(s).width; };

  // A tag in the deck's callout style: short text on a paper halo, with a thin leader from the edge
  // of each target dot [x, y, radius] to the nearest point of the text.
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

  // A dimension line under a pile, from its outermost dots, with the tag in a gap at its middle.
  function span(ctx, x0, x1, y, s, alpha) {
    if (alpha <= 0.004) return;
    const size = geo.phone ? 11 : 12.5, gap = width(ctx, s, size) + 14, xm = (x0 + x1) / 2;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = COPY;
    ctx.fillRect(x0, y - 0.5, xm - gap / 2 - x0, 1);
    ctx.fillRect(xm + gap / 2, y - 0.5, x1 - xm - gap / 2, 1);
    ctx.fillRect(x0 - 0.5, y - 4, 1, 8);
    ctx.fillRect(x1 - 0.5, y - 4, 1, 8);
    text(ctx, s, xm, y + 0.36 * size, { size, weight: 500, fill: INK, align: "center", alpha });
  }

  // Baseline, the parity line and the two labels at its top.
  function frame(ctx, r, parity, other, otherInk) {
    const { W, X, phone } = geo, x = X(parity), top = ROOM[r.key], base = r.base;
    const size = phone ? 10.5 : 13;
    ctx.globalAlpha = 1;
    ctx.fillStyle = RULE;
    ctx.fillRect(0, base, W, 0.9);
    ctx.fillStyle = INK;
    ctx.fillRect(x - 0.6, top - 30, 1.2, base - top + 30);
    text(ctx, phone ? "Workers" : "Workers cheaper", x - 7, top - 14, { size, weight: 600, fill: WORKERS.ink, align: "right" });
    text(ctx, other, x + 7, top - 14, { size, weight: 600, fill: otherInk });
  }

  function render(p) {
    if (!geo) build();
    const { X, d, hA, ax, ay, bx, by, starts, phone } = geo;
    const parity = -GROWTH * phase(p, GROW[0], GROW[1]);
    const [a, t] = rows;
    const k = STEPS.reduce((n, s, i) => (p >= s ? i : n), 0);
    steps.forEach((el, i) => el.classList.toggle("on", i === k));
    const spans = phase(p, 0.46, 0.5) * (1 - phase(p, 0.6, 0.64));
    const end = phase(p, 0.93, 0.98), size = tagSize();

    // AI: every task on its own.
    let ctx = a.ctx, base = a.base, kept = 0;
    ctx.clearRect(0, 0, geo.W, a.H);
    Z.forEach((z, i) => {
      dot(ctx, "ai", 0, i, ax[i], base - ay[i], side(z, parity));
      if (z < parity) kept++;
    });
    frame(ctx, a, parity, "AI cheaper", AI.ink);
    const x = Math.exp(-parity);
    text(ctx, `Productivity ×${x < 9.95 ? x.toFixed(1) : Math.round(x)}`, X(parity), 14,
      { size: phone ? 10.5 : 12, fill: COPY, align: "center", alpha: phase(p, 0.57, 0.61) });
    tag(ctx, "one task", ax[ONE] - 10, base - ay[ONE] - d - 16, [[ax[ONE], base - ay[ONE], d / 2]],
      { align: "right", alpha: 1 - phase(p, 0.01, 0.03) });
    span(ctx, Math.min(...ax) - d / 2, Math.max(...ax) + d / 2, base + 13, "wide", spans);
    // The niches: a bracket over the tasks workers keep at the end, named where the name fits.
    const x0 = Math.min(...NICHES.map(i => ax[i])) - d / 2;
    if (end > 0) {
      const x1 = Math.max(...NICHES.map(i => ax[i])) + d / 2;
      const y = base - Math.max(...NICHES.map(i => ay[i])) - d / 2 - 7;
      ctx.globalAlpha = end;
      ctx.fillStyle = WORKERS.ink;
      ctx.fillRect(x0, y, x1 - x0, 1);
      ctx.fillRect(x0, y, 1, 4);
      ctx.fillRect(x1 - 1, y, 1, 4);
      const name = ["Niches workers keep", "Niches"].find(s => x0 + width(ctx, s, size) <= X(parity) - 10);
      if (name) tag(ctx, name, x0, y - 7, [], { fill: WORKERS.ink, alpha: end });
    }
    a.count.textContent = `${Math.round(100 * kept / N)}%`;

    // Trade: each block's four tasks glide together and merge into one dot at their average. The
    // first block goes alone while the rest of the pile waits, dimmed.
    ctx = t.ctx;
    base = t.base;
    kept = 0;
    ctx.clearRect(0, 0, geo.W, t.H);
    const dim = 1 - 0.7 * phase(p, 0.01, 0.035) * (1 - phase(p, 0.28, 0.31));
    const where = [];
    const block = b => {
      const first = b === EX;
      const g = first ? clamp((p - MOVE[0]) / (MOVE[1] - MOVE[0])) : clamp((p - starts[b]) / GLIDE), e = smooth(g);
      const cx = bx[b], cy = base - by[b], alpha = first ? 1 : dim;
      if (g < 1) {
        for (let j = 0; j < K; j++) {
          const i = K * b + j, x0 = ax[i], y0 = base - ay[i];
          const x1 = cx + SLOTS[j][0] * d, y1 = cy + SLOTS[j][1] * d;
          const lift = Math.min(first ? 56 : 32, (first ? 0.16 : 0.12) * Math.abs(x1 - x0)) * Math.sin(Math.PI * e);
          const px = lerp(x0, x1, e), py = lerp(y0, y1, e) - lift;
          dot(ctx, "ab", 0, i, px, py, side(Z[i], parity), alpha * (1 - phase(g, 0.82, 1)));
          if (first) where.push([px, py, d / 2]);
        }
      }
      if (g > 0.7) {
        const m = phase(g, 0.7, 1);
        dot(ctx, "ab", 1, b, cx, cy, side(MEANS[b], parity), alpha * m, lerp(0.8, 1, m));
      }
      if (g >= 0.8) kept += MEANS[b] < parity ? K : 0;
      else for (let j = 0; j < K; j++) kept += Z[K * b + j] < parity ? 1 : 0;
      return g;
    };
    for (let b = 0; b < B; b++) if (b !== EX) block(b);
    const g = block(EX);
    // Rings on the first block's four tasks, then on the block, which keeps its ring until the pile
    // has formed; the tag names the four tasks, then the one block.
    const into = phase(p, 0.01, 0.035);
    where.forEach(([px, py]) => ring(ctx, px, py, d / 2 + 3, into * (1 - phase(g, 0.6, 0.85))));
    ring(ctx, bx[EX], base - by[EX], d + 3, phase(g, 0.85, 1) * (1 - phase(p, 0.46, 0.5)));
    const lx = X(-1), ly = base - hA - 16;
    tag(ctx, "4 tasks", lx, ly, where, { align: "center", alpha: into * (1 - phase(g, 0.75, 0.9)) });
    tag(ctx, "1 block", lx, ly, [[bx[EX], base - by[EX], d]], { align: "center", alpha: phase(g, 0.85, 1) * (1 - phase(p, 0.27, 0.29)) });
    frame(ctx, t, parity, "Abroad cheaper", ABROAD.ink);
    span(ctx, Math.min(...bx) - d, Math.max(...bx) + d, base + 13, "narrow", spans);
    if (end > 0) {
      const name = ["No niches left", "None left"].find(s => x0 + width(ctx, s, size) <= X(parity) - 10);
      if (name) tag(ctx, name, x0, base - d - 14, [], { fill: WORKERS.ink, alpha: end });
    }
    t.count.textContent = `${Math.round(100 * kept / N)}%`;
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
  // The heads above the piles set the room left for them; measure again in the loaded fonts.
  document.fonts.ready.then(() => { geo = null; current(); });
  // And once the page has loaded, after gouache.js has read the palette again: Safari can run this
  // script before the stylesheets apply, when the colours and the sizes are not yet known.
  addEventListener("load", () => { geo = null; current(); });
  current();
})();
