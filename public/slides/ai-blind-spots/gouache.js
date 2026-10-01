/* Round 29: the gouache kit of the two block slides (trade-line.js, trade-pile.js), as in the
   deck's paintings: opaque coats broken into small dabs, soft uneven edges and flecks of paper. */
(() => {
  "use strict";

  const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
  const smooth = v => v * v * (3 - 2 * v);
  // 0 before a, 1 after b, eased in between.
  const phase = (p, a, b) => smooth(clamp((p - a) / (b - a)));
  const lerp = (a, b, t) => a + (b - a) * t;

  const css = getComputedStyle(document.documentElement);
  const color = name => css.getPropertyValue(name).trim();
  const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
  const str = (c, a = 1) => `rgb(${c.map(Math.round).join(" ")} / ${a})`;
  const tint = name => ({
    mark: rgb(color(`--palette-${name}-mark`)),
    wash: rgb(color(`--palette-${name}-wash`)),
    ink: color(`--palette-${name}`),
  });
  // The palette is read now and again once the page has loaded: Safari can run this script before
  // the stylesheets apply, when every colour still reads as empty.
  const WORKERS = {}, AI = {}, ABROAD = {};
  const palette = () => {
    Object.assign(WORKERS, tint("human"));
    Object.assign(AI, tint("machine"));
    Object.assign(ABROAD, tint("purchase"));
  };
  palette();
  addEventListener("load", palette);
  const WHITE = [255, 255, 255];

  // A small seeded generator, so every page load paints the same picture.
  const random = seed => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  // Split every edge and push the midpoint in or out, a few times over: a hand-painted outline.
  function deform(points, rounds, amount, rand) {
    let pts = points;
    for (let r = 0; r < rounds; r++) {
      const out = [];
      pts.forEach((p, i) => {
        const q = pts[(i + 1) % pts.length];
        const len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
        const k = (rand() + rand() - 1) * amount * len;
        out.push(p, [(p[0] + q[0]) / 2 - (q[1] - p[1]) / len * k, (p[1] + q[1]) / 2 + (q[0] - p[0]) / len * k]);
      });
      pts = out;
    }
    return pts;
  }
  function path(ctx, points) {
    ctx.beginPath();
    points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
  }
  const circle = (x, y, r, n) => Array.from({ length: n }, (_, i) => [x + r * Math.cos(2 * Math.PI * i / n), y + r * Math.sin(2 * Math.PI * i / n)]);

  // The dabs: a grey tile of overlapping rough ovals, a little lighter or darker than the last,
  // whose edges show as faint arcs. It repeats, and it is laid over a coat in soft light, so each
  // colour keeps its hue.
  let cells = null;
  function crackle(ctx) {
    if (!cells) {
      const T = 256;
      cells = document.createElement("canvas");
      cells.width = cells.height = T;
      const g = cells.getContext("2d");
      const rand = random(5);
      g.fillStyle = "rgb(128 128 128)";
      g.fillRect(0, 0, T, T);
      g.lineWidth = 1.2;
      g.lineJoin = "round";
      g.strokeStyle = "rgb(106 106 106)";
      for (let i = 0; i < 150; i++) {
        const r = 11 + rand() * 13, x = rand() * T, y = rand() * T, v = 132 + (rand() * 2 - 1) * 22;
        const long = 1 + 0.6 * rand(), turn = Math.PI * rand(), rim = rand() < 0.75;
        const blob = deform(circle(0, 0, r, 9), 2, 0.2, rand).map(([u, w]) => [u * long, w / long])
          .map(([u, w]) => [u * Math.cos(turn) - w * Math.sin(turn), u * Math.sin(turn) + w * Math.cos(turn)]);
        const reach = r * long + 4;
        g.fillStyle = `rgb(${v} ${v} ${v})`;
        // Each dab is drawn again one tile over wherever it crosses an edge, so the tile repeats.
        for (const ox of [-T, 0, T]) for (const oy of [-T, 0, T]) {
          if (Math.abs(x + ox - T / 2) > T / 2 + reach || Math.abs(y + oy - T / 2) > T / 2 + reach) continue;
          path(g, blob.map(([u, w]) => [u + x + ox, w + y + oy]));
          g.fill();
          if (rim) g.stroke();
        }
      }
    }
    return ctx.createPattern(cells, "repeat");
  }
  // Flecks of bare paper where the dry brush skipped.
  let flecks = null;
  function paper(ctx) {
    if (!flecks) {
      const T = 128, img = new ImageData(T, T), rand = random(7);
      for (let k = 0; k < 240; k++) {
        const x = Math.floor(rand() * T), y = Math.floor(rand() * T), a = 80 + rand() * 140;
        for (let i = Math.floor(1 + rand() * 4); i--;) {
          const o = 4 * (y * T + (x + i) % T);
          img.data[o] = img.data[o + 1] = img.data[o + 2] = 255;
          img.data[o + 3] = a;
        }
      }
      flecks = document.createElement("canvas");
      flecks.width = flecks.height = T;
      flecks.getContext("2d").putImageData(img, 0, 0);
    }
    return ctx.createPattern(flecks, "repeat");
  }

  // One painted shape: an opaque coat, broken into dabs, a shade lighter at the top than at the
  // bottom, with a few flecks of paper. Pass the same seed every time and the shape keeps its
  // edge and its dabs.
  function paint(ctx, points, c, rand, { rough = 0.02, rounds = 2, alpha = 1, dabs = 1, light = 0.05, bare = 0.15 } = {}) {
    const edge = deform(points, rounds, rough, rand);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const [x, y] of edge) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    const box = [x0 - 2, y0 - 2, x1 - x0 + 4, y1 - y0 + 4];
    const ox = rand() * 128, oy = rand() * 128, fx = rand() * 64, fy = rand() * 64;
    ctx.save();
    ctx.globalAlpha = alpha;
    path(ctx, edge);
    ctx.fillStyle = str(c);
    ctx.fill();
    ctx.clip();
    const tex = crackle(ctx);
    tex.setTransform(new DOMMatrix().translate(-ox, -oy).scale(0.5));
    ctx.globalCompositeOperation = "soft-light";
    ctx.globalAlpha = alpha * dabs;
    ctx.fillStyle = tex;
    ctx.fillRect(...box);
    ctx.globalCompositeOperation = "source-over";
    if (light) {
      const shade = ctx.createLinearGradient(0, box[1], 0, box[1] + box[3]);
      shade.addColorStop(0, `rgb(255 255 255 / ${light})`);
      shade.addColorStop(1, `rgb(29 49 90 / ${light})`);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = shade;
      ctx.fillRect(...box);
    }
    if (bare) {
      const fleck = paper(ctx);
      fleck.setTransform(new DOMMatrix().translate(-fx, -fy).scale(0.5));
      ctx.globalAlpha = alpha * bare;
      ctx.fillStyle = fleck;
      ctx.fillRect(...box);
    }
    ctx.restore();
  }

  // Canvas at the device's pixel density, up to two.
  function fit(canvas, w, h) {
    const dpr = Math.min(2, devicePixelRatio || 1);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  // Round 31: the chart kit. Lines, dots and boxes in the brush of the prediction slide
  // (singularity.js), for every chart in the deck.
  const BRUSH = { rough: 0.07, rounds: 3, light: 0.06, bare: 0.12 };
  const DOT = { rough: 0.1, rounds: 2, light: 0.08, bare: 0.1 };
  // Points along a polyline about gap px apart, so a painted edge wobbles evenly.
  function dense(pts, gap) {
    const out = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], n = Math.max(1, Math.round(Math.hypot(x1 - x0, y1 - y0) / gap));
      for (let k = 1; k <= n; k++) out.push([x0 + (x1 - x0) * k / n, y0 + (y1 - y0) * k / n]);
    }
    return out;
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
  // A polyline cut into dashes of length on, off px apart.
  function dashes(pts, on, off) {
    const out = [];
    let cur = [pts[0]], left = on, drawing = true;
    for (let i = 1; i < pts.length; i++) {
      let [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      let d = Math.hypot(x1 - x0, y1 - y0);
      while (d > left) {
        const f = left / d, p = [x0 + (x1 - x0) * f, y0 + (y1 - y0) * f];
        if (drawing) { cur.push(p); out.push(cur); } else cur = [p];
        [x0, y0] = p; d -= left; drawing = !drawing; left = drawing ? on : off;
      }
      if (drawing) cur.push([x1, y1]);
      left -= d;
    }
    if (drawing && cur.length > 1) out.push(cur);
    return out;
  }
  // A painted line of half-width r through pts; dashed when dash = [on, off] (the gap is
  // measured between the painted ends).
  function stroke(ctx, pts, r, c, rand, { dash, ...o } = {}) {
    const runs = dash ? dashes(pts, dash[0], dash[1] + 2 * r) : [pts];
    runs.forEach(p => paint(ctx, band(dense(p, dash ? 5 : 22), r), c, rand, { ...BRUSH, ...o }));
  }
  const dot = (ctx, x, y, r, c, rand, o = {}) => paint(ctx, circle(x, y, r, 14), c, rand, { ...DOT, ...o });
  // A painted box; its edges are split every 12 px so they wobble evenly.
  const box = (ctx, x, y, w, h, c, rand, o = {}) =>
    paint(ctx, dense([[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]], 12).slice(0, -1), c, rand, { rough: 0.03, rounds: 2, light: 0.05, bare: 0.1, ...o });
  // An SVG <image> holding a canvas painted by draw(ctx) in the chart's own units over x, y, w, h.
  function layer(x, y, w, h, draw, attrs = "") {
    const cv = document.createElement("canvas"), ctx = fit(cv, w, h);
    ctx.translate(-x, -y);
    draw(ctx);
    return `<image x="${x}" y="${y}" width="${w}" height="${h}" href="${cv.toDataURL()}"${attrs}/>`;
  }

  window.Gouache = { clamp, smooth, phase, lerp, color, rgb, mix, WORKERS, AI, ABROAD, WHITE, random, circle, paint, fit,
    BRUSH, DOT, dense, band, dashes, stroke, dot, box, layer };
})();
