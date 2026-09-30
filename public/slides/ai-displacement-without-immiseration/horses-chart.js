/* Round 30, states 25 to 29 (frames 47 to 51): the fate of horses (prototype A1, "Hairlines").
   Horses and engines in three tasks, then workers and AI in the 24 tasks of the trade slides. Each
   task is a dot on a line where both cost the same: above it horses (humans) are cheaper, below it
   engines (AI) are. Engines' lead is the same in every task, so the horse dots fall below their line
   together; AI's lead differs, so its dots cross one by one and humans keep the tasks where it is
   smallest. The paintings are crops of the horse and engine panoramas; the marks are painted like
   the trade slides'. The chart fades in over the opener (--hz-in, set by horses.js). */
(() => {
  "use strict";
  const article = document.querySelector(".hz");
  const story = document.querySelector("[data-story-stage]");
  if (!article || !story || !window.Gouache) return;
  const { clamp, smooth, phase, lerp, color, mix, WORKERS, AI, ABROAD, random, paint, circle, fit } = Gouache;
  const FIRST = 25, LAST = 29;

  // The horse and engine paintings share one layout, 1774 pixels wide; each task is a crop [x, y, w, h].
  const PANORAMA = { width: 1774, horse: "./assets/horse-workday-panorama-r20.png", engine: "./assets/engine-workday-panorama-r20.png" };
  const HORSES = [
    { name: "Plow fields", crop: [30, 500, 580, 290] },
    { name: "Haul freight", crop: [610, 470, 600, 300] },
    { name: "Carry passengers", crop: [1175, 470, 560, 280] },
  ];
  // The 24 tasks of the trade slides, by workers' edge over AI in each: the higher, the smaller AI's
  // lead. Sorted, AI's lead shrinks from first to last.
  const EDGES = [-1.6, -1.2, -0.4, 1.8, 0.5, 2.2, -1.8, -0.5, 0.3, -0.9, -0.6, 0.8, -1.1, -0.6, 2.6, 0.4, -0.2, 0.3, 1.0, 1.1, 1.7, 2.3, 1.4, -0.3].sort((a, b) => a - b);

  // The five steps: the horse tasks; engines' lead; engines get cheaper; AI's lead; AI gets cheaper.
  const STEPS = [0, 0.14, 0.28, 0.5, 0.66];
  // Where each beat rests; the way to the next plays from the beat's start. Coming in from the
  // opener, the first painting shows alone, then the other two.
  const REST = [0.12, 0.27, 0.49, 0.64, 1];
  function progress(x) {
    if (x < FIRST) return REST[0] * clamp((x - 24.74) / 0.26);
    const k = Math.min(Math.floor(x - FIRST), REST.length - 2);
    return lerp(REST[k], REST[k + 1], clamp(x - FIRST - k));
  }
  const shown = (p, j) => (j ? phase(p, 0.005 + 0.04 * j, 0.025 + 0.04 * j) : 1);
  // Horses' edge over engines, the same in every task: from 1.2 to −0.8 as engines get cheaper.
  const horseEdge = p => 1.2 - 2 * smooth(clamp((p - 0.3) / 0.16));
  // How cheap AI has become: workers keep the tasks whose edge is above it.
  const L0 = -2.4, L1 = 1.55;
  const aiLevel = p => lerp(L0, L1, smooth(clamp((p - 0.68) / 0.24)));
  // The share of their tasks horses and humans keep.
  const percent = (n, of) => `${Math.round(100 * n / of)}%`;

  const K = {};
  function readColours() {
    K.SANS = color("--sans") || "sans-serif";
    K.RULE = color("--palette-rule-dark");
    K.COPY = color("--copy");
    K.MUTED = color("--muted");
    K.HORSES = WORKERS.ink;
    K.COAT = { w: [WORKERS.wash, WORKERS.mark, 0.78], ai: [AI.wash, AI.mark, 0.62], ab: [ABROAD.wash, ABROAD.mark, 0.6] };
  }
  const phone = () => innerWidth <= 760;

  // Painted dots, a few of each colour, so neighbours differ.
  const VARIANTS = 6;
  let dots = null;
  function paintDots(d) {
    const dpr = Math.min(2, devicePixelRatio || 1);
    dots = {};
    Object.entries(K.COAT).forEach(([key, [wash, mark, t]], n) => {
      dots[key] = Array.from({ length: VARIANTS }, (_, v) => {
        const s = Math.ceil(d + 6), cv = document.createElement("canvas");
        cv.width = cv.height = Math.ceil(s * dpr);
        const g = cv.getContext("2d");
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        paint(g, circle(s / 2, s / 2, d / 2, 14), mix(wash, mark, t + 0.16 * (v / (VARIANTS - 1) - 0.5)), random(100 * n + v + 1),
          { rough: 0.22, rounds: 2, light: 0.1, bare: 0.12 });
        return { cv, s };
      });
    });
  }
  function put(ctx, sp, x, y, alpha) {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.drawImage(sp.cv, x - sp.s / 2, y - sp.s / 2, sp.s, sp.s);
  }
  // A dot in the owner's colour (plum) turning to the other's (key) as u goes from 0 to 1.
  function dot(ctx, key, i, x, y, u = 0, alpha = 1) {
    const v = i % VARIANTS;
    if (u < 1) put(ctx, dots.w[v], x, y, alpha);
    if (u > 0) put(ctx, dots[key][v], x, y, alpha * u);
  }

  function text(ctx, s, x, y, { size = 13, weight = 400, fill = K.COPY, align = "left", alpha = 1 } = {}) {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.font = `${weight} ${size}px ${K.SANS}`;
    ctx.textAlign = align;
    ctx.fillStyle = fill;
    ctx.fillText(s, x, y);
  }
  const width = (ctx, s, size, weight) => {
    ctx.font = `${weight} ${size}px ${K.SANS}`;
    return ctx.measureText(s).width;
  };
  // A thin bracket over x0..x1 with its ends turned down, and its name above.
  function bracket(ctx, s, x0, x1, y, ink, alpha = 1, align = "center") {
    if (alpha <= 0.004) return;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = ink;
    ctx.fillRect(x0, y, x1 - x0, 1);
    ctx.fillRect(x0, y, 1, 5);
    ctx.fillRect(x1 - 1, y, 1, 5);
    const x = align === "left" ? x0 : align === "right" ? x1 : (x0 + x1) / 2;
    text(ctx, s, x, y - 7, { size: phone() ? 11 : 13, weight: 500, fill: ink, align, alpha });
  }

  // A crop of a painting in a box on the page (see horses-chart.css).
  function picture(parent, src, [cx, cy, cw, ch], natural) {
    const box = document.createElement("div"), img = new Image();
    box.className = "hz-pic";
    img.alt = "";
    img.src = src;
    box.append(img);
    parent.append(box);
    return {
      place(x, y, w) {
        const k = w / cw, h = ch * k;
        Object.assign(box.style, { left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px` });
        Object.assign(img.style, { width: `${natural * k}px`, left: `${-cx * k}px`, top: `${-cy * k}px` });
        const size = `${cw * k}px ${ch * k}px`, at = `${cx * k}px ${cy * k}px`;
        ["-webkit-mask-size", "mask-size"].forEach(p => img.style.setProperty(p, `${size}, ${size}`));
        ["-webkit-mask-position", "mask-position"].forEach(p => img.style.setProperty(p, `${at}, ${at}`));
      },
      set(opacity) {
        img.style.opacity = opacity.toFixed(3);
      },
    };
  }
  // A horse task's painting over its engine twin, the engine showing as u goes from 0 to 1.
  function twin(parent, task) {
    const horse = picture(parent, PANORAMA.horse, task.crop, PANORAMA.width);
    const engine = picture(parent, PANORAMA.engine, task.crop, PANORAMA.width);
    return {
      place: (x, y, w) => (horse.place(x, y, w), engine.place(x, y, w)),
      set(alpha, u) {
        horse.set(alpha * (1 - u));
        engine.set(alpha * u);
      },
    };
  }

  // The chart's small gray words: their size, and the height of their capitals.
  const small = () => (phone() ? 10.5 : 12);
  const cap = () => 0.72 * small();

  // The line where the machine and the animal (or human) cost the same.
  function line(c, x0, x1, y, alpha) {
    if (alpha <= 0.004) return;
    c.globalAlpha = alpha;
    c.fillStyle = K.RULE;
    c.fillRect(x0, y - 0.75, x1 - x0, 1.5);
  }
  // A thin vertical arrow from y0 to its tip at y1.
  function arrow(c, x, y0, y1, alpha) {
    const d = Math.sign(y1 - y0), head = phone() ? 2.5 : 3;
    c.save();
    c.globalAlpha = alpha;
    c.strokeStyle = K.RULE;
    c.lineWidth = 1;
    c.lineCap = c.lineJoin = "round";
    c.beginPath();
    c.moveTo(x, y0);
    c.lineTo(x, y1);
    c.moveTo(x - head, y1 - d * head);
    c.lineTo(x, y1);
    c.lineTo(x + head, y1 - d * head);
    c.stroke();
    c.restore();
  }
  // Small gray words, one word per line on a phone; y is the first baseline. The block's height:
  const block = () => cap() + (phone() ? small() + 2 : 0);
  function words(c, s, x, y, align, alpha) {
    const size = small();
    (phone() ? s.split(" ") : [s]).forEach((t, i) => text(c, t, x, y + (size + 2) * i, { size, fill: K.MUTED, align, alpha }));
  }
  // Who is cheaper above and below the line at y: a short thin arrow up and one down from the
  // line's left end x, the words beside their tips.
  function sides(c, x, y, above, below, alpha) {
    if (alpha <= 0.004) return;
    const b = block(), tip = phone() ? 20 : 17;
    arrow(c, x, y - 5, y - tip, alpha);
    arrow(c, x, y + 5, y + tip, alpha);
    words(c, above, x - 8, y - tip - b / 2 + cap(), "right", alpha);
    words(c, below, x - 8, y + tip - b / 2 + cap(), "right", alpha);
  }
  function profile(c, pts, alpha) {
    if (alpha <= 0.004) return;
    c.globalAlpha = 0.7 * alpha;
    c.strokeStyle = K.RULE;
    c.lineWidth = 1;
    c.beginPath();
    pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
    c.stroke();
  }
  // A task name under its painting, on two lines if the column is narrow.
  function name(c, s, x, y, w, alpha) {
    const size = phone() ? 11 : 13, lines = width(c, s, size, 400) > w ? s.split(" ") : [s];
    lines.forEach((t, i) => text(c, t, x, y + (size + 2) * i, { size, align: "center", alpha }));
  }

  const title = article.querySelector(".trade-header h2");
  const stage = article.querySelector(".hz-stage");
  const steps = [...article.querySelectorAll(".line-steps > span")];
  const rows = {};
  ["horses", "ai"].forEach(key => {
    const el = article.querySelector(`[data-row="${key}"]`);
    rows[key] = {
      el, wrap: el.querySelector(".pile-wrap"), canvas: el.querySelector("canvas"),
      count: el.querySelector("[data-count]"), box: el.querySelector(".line-count"),
      fade: el.querySelectorAll(".blocks-head, canvas, .line-count"),
    };
  });
  const list = Object.values(rows);
  let geo = null, twins = null;

  // Each row gets a canvas W by H.
  function size(r, W, H) {
    r.W = W;
    r.H = Math.ceil(H);
    r.wrap.style.height = `${r.H}px`;
    r.ctx = fit(r.canvas, W, r.H);
  }
  function build() {
    readColours();
    // The title keeps to one line on wider screens, a little smaller where it would not fit.
    title.style.removeProperty("font-size");
    if (!phone() && title.scrollWidth > title.clientWidth) {
      title.style.fontSize = `${Math.floor(parseFloat(getComputedStyle(title).fontSize) * title.clientWidth / title.scrollWidth)}px`;
    }
    // The rows share the stage's free height.
    list.forEach(r => (r.wrap.style.height = "0px"));
    const gap = parseFloat(getComputedStyle(stage).rowGap) || 0;
    const room = stage.clientHeight - list.reduce((s, r) => s + r.el.offsetHeight, 0) - gap - 4;
    const W = rows.horses.wrap.clientWidth, ph = phone(), r = ph ? 8 : 11;
    paintDots(2 * r);
    // The lines start at the words' arrows, clear of the first dots.
    const x0 = ph ? 62 : 132, x1 = W - (ph ? 8 : 150), start = x0 - 10;
    const col = (x1 - x0) / 3, pw = Math.min(ph ? 92 : 176, col - (ph ? 10 : 24)), pH = pw / 2;
    // Where the names sit, and the gaps under them, over AI's highest dots (as the paintings' feathered
    // tops) and under the horses' lowest ones.
    const names = pH + (ph ? 16 : 20), top = names + (ph ? 34 : 30), pad = ph ? 3 : 6, below = ph ? 14 : 34;
    // Heights scale with the room: U for the horses' lead, S for AI's (both in pixels per unit).
    const fixed = top + 4 * r + pad + below + 30, per = 2 * 40 + (EDGES.at(-1) - L0 + L1 - EDGES[0]) * 24;
    const f = clamp((room - fixed) / per, 0.45, 1.25), U = 40 * f, S = 24 * f;
    const hy = top + r + 1.2 * U;
    // The horses' row reaches past its lowest dots, or past the words under its line.
    size(rows.horses, W, hy + Math.max(0.8 * U + r + below, ph ? 44 : 36));
    const ay = (EDGES.at(-1) - L0) * S + r + pad;
    size(rows.ai, W, ay + (L1 - EDGES[0]) * S + r + 30);
    rows.horses.wrap.style.setProperty("--lane", `${hy}px`);
    rows.ai.wrap.style.setProperty("--lane", `${ay}px`);
    if (!twins) twins = HORSES.map(t => twin(rows.horses.wrap, t));
    const cols = HORSES.map((_, j) => x0 + col * (j + 0.5));
    cols.forEach((x, j) => twins[j].place(x - pw / 2, 0, pw));
    const step = (x1 - x0) / EDGES.length;
    geo = { r, x1, start, col, cols, names, U, S, hy, ay, ax: i => x0 + step * (i + 0.5) };
  }

  function horses(p) {
    const c = rows.horses.ctx, edge = horseEdge(p), y = geo.hy - edge * geo.U;
    const u = smooth(clamp((y - geo.hy + 4) / 8)), swap = smooth(clamp(0.5 - edge / 0.25));
    twins.forEach((t, j) => t.set(shown(p, j), swap));
    geo.cols.forEach((x, j) => name(c, HORSES[j].name, x, geo.names, geo.col - 8, shown(p, j)));
    // The line comes in with the second step, and the count, which reads it, with it.
    const a = phase(p, 0.14, 0.17);
    rows.horses.box.style.opacity = a.toFixed(3);
    line(c, geo.start, geo.x1 + 10, geo.hy, a);
    sides(c, geo.start, geo.hy, "Horses cheaper", "Engines cheaper", a);
    profile(c, geo.cols.map(x => [x, y]), a);
    geo.cols.forEach((x, j) => dot(c, "ab", j, x, y, u, a));
    text(c, "No niches left", geo.cols[1], geo.hy - 14, { size: phone() ? 11 : 13, weight: 500, fill: K.HORSES, align: "center", alpha: phase(p, 0.46, 0.49) });
  }

  function ai(p) {
    const c = rows.ai.ctx, L = aiLevel(p), { r, ay, S } = geo;
    line(c, geo.start, geo.x1 + 10, ay, 1);
    sides(c, geo.start, ay, "Humans cheaper", "AI cheaper", 1);
    const pts = EDGES.map((x, i) => [geo.ax(i), ay - (x - L) * S]);
    profile(c, pts, 1);
    pts.forEach(([x, y], i) => dot(c, "ai", i, x, y, smooth(clamp((y - ay + 4) / 8))));
    const base = rows.ai.H - 8;
    text(c, "Largest AI lead", pts[0][0] - r, base, { size: small(), fill: K.MUTED });
    text(c, "Smallest AI lead", pts.at(-1)[0] + r, base, { size: small(), fill: K.MUTED, align: "right" });
    // The tasks humans keep, under a bracket.
    const kept = pts.filter((_, i) => EDGES[i] > L1), high = Math.min(...kept.map(q => q[1]));
    bracket(c, "Niches humans keep", kept[0][0] - r, kept.at(-1)[0] + r, high - r - 10, K.HORSES, phase(p, 0.92, 0.97), phone() ? "right" : "center");
  }

  function render(p) {
    if (!geo) build();
    const k = STEPS.reduce((n, s, i) => (p >= s ? i : n), 0);
    steps.forEach((el, i) => el.classList.toggle("on", i === k));
    // AI's row comes in with the fourth step.
    const a = phase(p, 0.5, 0.54);
    rows.ai.fade.forEach(el => (el.style.opacity = a.toFixed(3)));
    rows.horses.count.textContent = percent(horseEdge(p) > 0 ? HORSES.length : 0, HORSES.length);
    rows.ai.count.textContent = percent(EDGES.filter(x => x > aiLevel(p)).length, EDGES.length);
    list.forEach(r => {
      r.ctx.globalAlpha = 1;
      r.ctx.clearRect(0, 0, r.W, r.H);
    });
    horses(p);
    ai(p);
  }

  // The chart is drawn from the opener on, so it is ready when it fades in.
  function show({ state, position }) {
    state = Number(state);
    if (state < FIRST - 1 || state > LAST) return;
    render(progress(Number(position)));
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
