/* Figure 8: fig8a (annual growth of average real wages) and fig8b (five-year change in sector real wages). */
(function () {
  const D = window.R28;
  const MINUS = '−';
  const sz = c => c ? { title: 15, lab: 14, small: 12, micro: 10.5 } : { title: 18, lab: 16, small: 13, micro: 11 };

  /* Panel title (serif) and optional sub line (micro caps). Returns markup and height used. */
  function header(title, sub, S, w) {
    const o = { size: S.title, w: 600, fam: 'serif', fill: C.ink };
    let svg = '', y = 0;
    wrap(title, w - 2, o).forEach((l, i) => { y += i ? S.title * 1.2 : S.title; svg += T(0, y, l, o); });
    if (sub) { y += S.micro + 9; svg += T(0, y, sub.toUpperCase(), { size: S.micro, fill: C.muted, ls: '.07em' }); }
    return { svg, h: y + 6 };
  }

  /* Geometry helpers for label placement. Rects are {x, y, w, h}; circles {cx, cy, r}. */
  const rectHit = (a, b, p = 3) => a.x < b.x + b.w + p && b.x < a.x + a.w + p && a.y < b.y + b.h + p && b.y < a.y + a.h + p;
  const circHit = (a, c, p = 1.5) => {
    const nx = Math.max(a.x, Math.min(c.cx, a.x + a.w)), ny = Math.max(a.y, Math.min(c.cy, a.y + a.h));
    return Math.hypot(nx - c.cx, ny - c.cy) < c.r + p;
  };
  const inside = (a, b) => a.x >= b.x && a.y >= b.y && a.x + a.w <= b.x + b.w && a.y + a.h <= b.y + b.h;

  const line = (pts, stroke, width, extra = '') =>
    `<path d="${pathD(pts)}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;
  const hRule = (x0, x1, y, stroke, width) => `<line x1="${fmt(x0)}" x2="${fmt(x1)}" y1="${fmt(y)}" y2="${fmt(y)}" stroke="${stroke}" stroke-width="${width}"/>`;
  const vDots = (x, y0, y1) => `<line x1="${fmt(x)}" x2="${fmt(x)}" y1="${fmt(y0)}" y2="${fmt(y1)}" stroke="${C.context}" stroke-width="1.3" stroke-dasharray="0.1 4.2" stroke-linecap="round"/>`;

  /* ---------- fig8a: annual growth of average real wages ---------- */
  Charts.add('fig8a', ctx => {
    const { w, h, compact } = ctx, S = sz(compact);
    const J = D.fig8a.exposure_driven, B = D.fig8a.balanced;
    const hd = header('Annual growth of average real wages', null, S, w);
    const fS = { size: S.small };
    const L = Math.ceil(Math.max(tw('10%', fS) + 10, tw('Today', fS) / 2 + 2));
    const R = Math.ceil(tw('50 years', fS) - tw('50', fS) / 2 + 2);
    const top = hd.h + S.small / 2 + 8, bottom = S.small + 12;
    const x = lin(0, 50, L, w - R), y = lin(0, 10, h - bottom, top);
    const at = (s, yr) => {
      const k = Math.min(Math.max(1, s.year.findIndex(v => v >= yr)), s.year.length - 1);
      const t = (yr - s.year[k - 1]) / (s.year[k] - s.year[k - 1]);
      return s.growth[k - 1] + Math.max(0, Math.min(1, t)) * (s.growth[k] - s.growth[k - 1]);
    };
    const span = (s, px0, px1, fn) => {
      let v = fn === Math.max ? -Infinity : Infinity;
      for (let p = px0; p <= px1 + 0.5; p += 2) v = fn(v, at(s, Math.max(s.year[0], Math.min(50, x.inv(Math.min(p, px1))))));
      return v;
    };
    const pts = s => s.year.map((yr, i) => [x(yr), y(s.growth[i])]);
    let svg = hd.svg;

    /* Step 1 wash between the lines where jagged exceeds balanced. */
    const diff = J.growth.map((g, i) => g - B.growth[i]);
    const k = diff.findIndex(v => v > 0);
    if (k >= 0) {
      const poly = [];
      if (k > 0) {
        const t = diff[k - 1] / (diff[k - 1] - diff[k]);
        const yr = J.year[k - 1] + t * (J.year[k] - J.year[k - 1]);
        poly.push([x(yr), y(B.growth[k - 1] + t * (B.growth[k] - B.growth[k - 1]))]);
      }
      for (let i = k; i < J.year.length; i++) poly.push([x(J.year[i]), y(J.growth[i])]);
      for (let i = B.year.length - 1; i >= k; i--) poly.push([x(B.year[i]), y(B.growth[i])]);
      svg += `<g class="st" style="--from:1"><path d="${pathD(poly)}Z" fill="${C.coralWash}" opacity=".45"/></g>`;
    }

    /* Grid, axis and ticks. */
    for (const v of [2, 4, 6, 8, 10]) {
      svg += hRule(L, w - R, y(v), C.rule, 0.75);
      svg += T(L - 8, y(v), v === 10 ? '10%' : String(v), { size: S.small, fill: C.muted, anchor: 'end', base: 'central' });
    }
    svg += hRule(L, w - R, y(0), C.ruleDark, 0.9);
    const tickY = h - 4;
    for (const v of [0, 10, 20, 30, 40, 50]) {
      svg += `<line x1="${fmt(x(v))}" x2="${fmt(x(v))}" y1="${fmt(y(0))}" y2="${fmt(y(0) + 4)}" stroke="${C.ruleDark}" stroke-width=".9"/>`;
      if (v === 0) svg += T(x(v), tickY, 'Today', { size: S.small, fill: C.muted, anchor: 'middle' });
      else if (v === 50) svg += T(x(v) - tw('50', fS) / 2, tickY, '50 years', { size: S.small, fill: C.muted });
      else svg += T(x(v), tickY, String(v), { size: S.small, fill: C.muted, anchor: 'middle' });
    }

    /* Five-year horizon (its label is set after the series names). */
    svg += vDots(x(5), y(0), y(10));

    /* Lines, painted in the brush of fig7 when gouache.js is loaded. */
    const G = window.Gouache;
    if (G) {
      const r = compact ? 3 : 4;
      svg += G.layer(L - 8, top - 8, w - R - L + 16, h - bottom - top + 16, c => {
        G.stroke(c, pts(B), r, G.rgb(C.machine), G.random(800));
        G.stroke(c, pts(J), r, G.rgb(C.coral), G.random(801));
      });
    } else {
      svg += line(pts(B), C.machine, 3.25);
      svg += line(pts(J), C.coral, 3.25);
    }

    /* End values and series names. */
    const jEnd = J.growth[J.growth.length - 1], bEnd = B.growth[B.growth.length - 1];
    const jVal = `${M.CfExposureDrivenLongRunRealWageGrowthPct}% a year`, bVal = `${M.CfBalancedLongRunRealWageGrowthPct}% a year`;
    const jValY = y(jEnd) - 9;
    const bValY = y(bEnd) - 9;
    svg += T(x(50), jValY, jVal, { size: S.small, fill: C.copy, anchor: 'end' });

    const nO = { size: S.lab, w: 600 };
    const jName = 'Jagged AI adoption', bName = 'Balanced AI adoption';
    const jW = tw(jName, nO), bW = tw(bName, nO);
    let jNameY = jValY - S.small - 6, jx0 = x(50) - jW;
    if (jNameY - S.lab * 0.75 >= hd.h + 2) {
      svg += T(x(50), jNameY, jName, { ...nO, fill: C.coral, anchor: 'end' });
    } else {
      /* Not enough room above the line end: set the name above the line further left, clear of the end value. */
      const jvW = tw(jVal, fS), jvBox = { x: x(50) - jvW, y: jValY - S.small * 0.75, w: jvW, h: S.small };
      for (jx0 = Math.max(L + 4, x(24) - jW / 2); ; jx0 = Math.max(L + 4, jx0 - 4)) {
        jNameY = y(span(J, jx0, jx0 + jW, Math.max)) - 9;
        if (jx0 === L + 4 || !rectHit({ x: jx0, y: jNameY - S.lab * 0.75, w: jW, h: S.lab }, jvBox)) break;
      }
      svg += T(jx0, jNameY, jName, { ...nO, fill: C.coral });
    }
    const bx0 = Math.max(L + 4, Math.min(x(30) - bW / 2, w - R - bW));
    const bNameY = y(span(B, bx0, bx0 + bW, Math.min)) + 9 + S.lab * 0.75;
    svg += T(bx0, bNameY, bName, { ...nO, fill: C.machine });

    /* Horizon label at the top of the dotted line, or at its foot when the jagged name covers the top. */
    const mO = { size: S.micro, fill: C.muted, cls: 'halo' };
    const hzW = Math.max(tw('Five-year', mO), tw('horizon', mO)), hzH = S.micro * 2 + 3;
    const hzBox = yb => ({ x: x(5) + 6, y: yb - S.micro * 0.75, w: hzW, h: hzH });
    const jNameBox = { x: jx0, y: jNameY - S.lab * 0.75, w: jW, h: S.lab };
    let hzY = y(10) + S.micro + 5;
    if (rectHit(hzBox(hzY), jNameBox)) {
      const foot = y(0) - 6 - S.micro - 3, fb = hzBox(foot);
      const lowest = y(Math.min(span(J, fb.x, fb.x + fb.w, Math.min), span(B, fb.x, fb.x + fb.w, Math.min)));
      if (lowest < fb.y - 3) hzY = foot;
    }
    svg += T(x(5) + 6, hzY, 'Five-year', mO) + T(x(5) + 6, hzY + S.micro + 3, 'horizon', mO);

    svg += T(x(50), bValY, bVal, { size: S.small, fill: C.copy, anchor: 'end' });
    return svg;
  });

  /* ---------- fig8b: five-year change in sector real wages ---------- */
  Charts.add('fig8b', ctx => {
    const { w, h, compact } = ctx, S = sz(compact), G = window.Gouache;
    const rows = D.fig8b;
    const hd = header('Five-year change in sector real wages', null, S, w);
    const fS = { size: S.small };
    const L = Math.ceil(tw('+50%', fS) + 10);
    const R = Math.ceil(tw('60%', fS) / 2 + 2);
    const bottom = S.small * 2 + 20;
    const vaMax = Math.max(...rows.map(r => r.va)), rMax = compact ? 10 : 13;
    const rad = r => Math.max(3, rMax * Math.sqrt(r.va / vaMax));
    const order = rows.slice().sort((a, b) => b.va - a.va);
    const legend = [['Jagged AI adoption', C.coral, C.coralMark, 1], ['Balanced AI adoption', C.machine, C.machineMark, 0]];
    const lr = compact ? 4.5 : 5.5;
    let lO, rowH, blockW, blockH;
    const legendSize = size => {
      lO = { size, w: 600 }; rowH = size + 8;
      blockW = 2 * lr + 8 + Math.max(...legend.map(l => tw(l[0], lO))); blockH = rowH + size * 1.2;
    };

    /* Everything below depends on the value range. Small charts may widen it to make room around the dots
       for the legend and callouts; the first range where nothing covers a dot wins. */
    const drawAt = (yTop, k, yBot) => {
      /* Scales, dots and the legend spot: top right of the plot (as in the paper), or bottom left where the
         plot is empty; on small charts the legend may drop to the small text size. If every spot covers dots,
         a large chart gives the legend its own strip above the plot; a small one takes the spot covering the
         fewest dots and counts them against this value range. k picks the k-th spot that covers no dot. */
      let top, x, y, plot, circ, bC, jC, allC, spot = null, bad = 0;
      const build = t => {
        top = t;
        x = lin(0.13, 0.60, L, w - R); y = lin(yBot, yTop, h - bottom, top);
        plot = { x: L, y: top, w: w - R - L, h: h - bottom - top };
        circ = (r, key) => ({ cx: x(r.exposure), cy: y(r[key]), r: rad(r) });
        bC = order.map(r => circ(r, 'balanced')); jC = order.map(r => circ(r, 'jagged')); allC = bC.concat(jC);
      };
      build(hd.h + 6);
      let least = null;
      const clean = [];
      for (const size of compact ? [S.lab, S.small] : [S.lab]) {
        legendSize(size);
        const spots = { tr: [w - R - blockW, top + 2], bl: [L + 10, h - bottom - blockH - 8], bl2: [L + 3, h - bottom - blockH - 3] };
        for (const key of compact ? ['bl', 'tr', 'bl2'] : ['tr', 'bl']) {
          const b = { x: spots[key][0], y: spots[key][1], w: blockW, h: blockH };
          const n = allC.filter(q => circHit(b, q, 4)).length;
          if (!n) clean.push({ b, size });
          else if (!least || n < least.n) least = { b, n, size };
        }
      }
      if (k >= Math.max(1, clean.length)) return null;
      if (clean.length) { legendSize(clean[k].size); spot = clean[k].b; }
      else if (compact) { legendSize(least.size); spot = least.b; bad += least.n; }
      else { legendSize(S.lab); spot = { x: L, y: hd.h + 2, w: blockW, h: blockH }; build(hd.h + 6 + blockH + 6); }
      let svg = hd.svg;
      /* Painted marks are left as numbered slots and painted only for the chosen value range. */
      const lazy = [], later = fn => `\u0001${lazy.push(fn) - 1}\u0001`;

      /* Grid, zero line, ticks. */
      for (const v of [-50, -25, 25, 50]) svg += hRule(L, w - R, y(v), C.rule, 0.75);
      svg += hRule(L, w - R, y(0), C.ruleDark, 0.9);
      for (const v of [-50, -25, 0, 25, 50]) {
        const s = v === 50 ? '+50%' : v > 0 ? '+' + v : v < 0 ? MINUS + -v : '0';
        svg += T(L - 8, y(v), s, { size: S.small, fill: C.muted, anchor: 'end', base: 'central' });
      }
      const tickY = h - bottom + 8 + S.small * 0.8;
      for (const v of [20, 30, 40, 50, 60]) svg += T(x(v / 100), tickY, v === 60 ? '60%' : String(v), { size: S.small, fill: C.muted, anchor: 'middle' });
      svg += T(L + plot.w / 2, h - 4, 'AI exposure', { size: S.small, fill: C.copy, anchor: 'middle' });
      svg += vDots(x(Number(M.CfSizeWeightedExposurePct) / 100), top, h - bottom);

      /* Dots: area proportional to value added, largest drawn first. With gouache.js loaded they are
         painted, opaque, in the crisp fill mixed toward paper, each over a slightly larger paper dot
         that keeps the crisp outline. The painting waits until the value range is chosen. */
      const dot = (c, fill, op) => `<circle cx="${fmt(c.cx)}" cy="${fmt(c.cy)}" r="${fmt(c.r)}" fill="${fill}" fill-opacity="${op}" stroke="${C.paperLight}" stroke-width=".7"/>`;
      const paint = (cs, fill, op, seed, rim) => later(() => {
        const x0 = Math.min(...cs.map(c => c.cx - c.r)) - 4, y0 = Math.min(...cs.map(c => c.cy - c.r)) - 4;
        const x1 = Math.max(...cs.map(c => c.cx + c.r)) + 4, y1 = Math.max(...cs.map(c => c.cy + c.r)) + 4;
        return G.layer(x0, y0, x1 - x0, y1 - y0, ctx => cs.forEach((c, i) => {
          if (rim) G.dot(ctx, c.cx, c.cy, c.r + 1.2, G.rgb(C.paperLight), G.random(seed + 2 * i), { rough: 0.06, light: 0, bare: 0 });
          G.dot(ctx, c.cx, c.cy, c.r, G.mix(G.rgb(fill), G.rgb(C.paper), 1 - op), G.random(seed + 2 * i + 1));
        }));
      });
      const dots = (cs, fill, op, seed) => G ? paint(cs, fill, op, seed, true) : cs.map(c => dot(c, fill, op)).join('');
      svg += dots(bC, C.machineMark, 0.75, 1000);

      /* Legend. */
      const obst = [spot];
      let legJ = '', legB = '';
      legend.forEach(([name, ink, mark, from], i) => {
        const cy = spot.y + lO.size * 0.6 + i * rowH, op = from ? 0.8 : 0.75;
        const m = (G ? paint([{ cx: spot.x + lr, cy, r: lr }], mark, op, 1400 + 2 * i, false)
          : `<circle cx="${fmt(spot.x + lr)}" cy="${fmt(cy)}" r="${lr}" fill="${mark}" fill-opacity="${op}"/>`) +
          T(spot.x + 2 * lr + 8, cy, name, { ...lO, fill: ink, base: 'central' });
        if (from) legJ = m; else legB = m;
      });
      svg += legB;

      /* Step 1: jagged dots, legend entry and callouts. */
      let st = dots(jC, C.coralMark, 0.8, 1200) + legJ;
      const cO = { size: S.small };
      const calls = [
        [r => /Forestry/.test(r.name + r.id), 'Forestry and fishing', ['right', 'ur', 'above', 'lr', 'left']],
        [r => r.id === 'HS', 'Housing', ['right', 'lr', 'below', 'ur', 'above', 'left']],
        [r => /Insurance/.test(r.name + r.id), 'Insurance', ['left', 'll', 'ul', 'below', 'right']]
      ];
      /* Leader from the dot edge to the nearest point of the label box; it must not cross another dot. */
      const leader = (c, b) => {
        const nx = Math.max(b.x, Math.min(c.cx, b.x + b.w)), ny = Math.max(b.y, Math.min(c.cy, b.y + b.h));
        const a = Math.atan2(ny - c.cy, nx - c.cx);
        return [c.cx + (c.r + 1.5) * Math.cos(a), c.cy + (c.r + 1.5) * Math.sin(a), nx - 2 * Math.cos(a), ny - 2 * Math.sin(a)];
      };
      const segHit = ([x0, y0, x1, y1], q) => {
        const dx = x1 - x0, dy = y1 - y0, t = Math.max(0, Math.min(1, ((q.cx - x0) * dx + (q.cy - y0) * dy) / (dx * dx + dy * dy || 1)));
        return Math.hypot(x0 + t * dx - q.cx, y0 + t * dy - q.cy) < q.r + 1;
      };
      for (const [pick, text, prefs] of calls) {
        const r = rows.find(pick);
        if (!r) continue;
        const c = circ(r, 'jagged'), bw = tw(text, cO), bh = S.small * 1.15, g = 4;
        /* Score every candidate: text over a dot costs most, then a leader across a dot, then leader length,
           then the preferred side. */
        const dirs = prefs.concat(['right', 'left', 'above', 'below', 'ur', 'ul', 'lr', 'll'].filter(p => !prefs.includes(p)));
        /* Inside the plot if possible; if every spot there covers a dot, also try the right margin. */
        let best = null;
        for (const bound of [plot, { ...plot, w: w - 1 - L }]) {
          if (best && !best.bad) break;
          for (const d of [0, 6, 14, 24, 36, 50, 66]) {
            const o = c.r + g + d, od = (c.r + d) * 0.72 + g;
            const pos = {
              right: [c.cx + o, c.cy - bh / 2], left: [c.cx - o - bw, c.cy - bh / 2],
              above: [c.cx - bw / 2, c.cy - o - bh], below: [c.cx - bw / 2, c.cy + o],
              ur: [c.cx + od, c.cy - od - bh], ul: [c.cx - od - bw, c.cy - od - bh],
              lr: [c.cx + od, c.cy + od], ll: [c.cx - od - bw, c.cy + od]
            };
            dirs.forEach((p, i) => {
              const box = { x: pos[p][0], y: pos[p][1], w: bw, h: bh };
              if (!inside(box, bound) || obst.some(q => rectHit(box, q))) return;
              const s = d > 0 ? leader(c, box) : null;
              const tHits = allC.filter(q => circHit(box, q)).length, lHits = s ? allC.filter(q => segHit(s, q)).length : 0;
              const score = tHits * 1000 + lHits * 200 + d + i * 3;
              if (!best || score < best.score) best = { box, d, score, bad: tHits + lHits * 0.2 };
            });
          }
        }
        if (!best) best = { box: { x: c.cx + c.r + g, y: c.cy - bh / 2, w: bw, h: bh }, d: 0, score: 1000, bad: 1 };
        const b = best.box;
        obst.push(b);
        bad += best.bad;
        if (best.d > 0) {
          const s = leader(c, b);
          st += `<line x1="${fmt(s[0])}" y1="${fmt(s[1])}" x2="${fmt(s[2])}" y2="${fmt(s[3])}" stroke="${C.copy}" stroke-width="1"/>`;
        }
        st += T(b.x, b.y + bh / 2, text, { ...cO, fill: C.ink, base: 'central', cls: 'halo' });
      }
      svg += `<g class="st" style="--from:1">${st}</g>`;
      return { svg, bad, lazy };
    };
    /* First legend spot at every top of the value range, then the next spot, and so on; a small chart
       may then also lower the bottom of the range. */
    let best = null;
    search: for (const b of compact ? [-56, -72] : [-56]) for (let k = 0; k < 6; k++) for (const t of compact ? [62, 72, 82] : [62]) {
      const r = drawAt(t, k, b);
      if (!r) continue;
      if (!best || r.bad < best.bad) best = r;
      if (!r.bad) break search;
    }
    return best.svg.replace(/\u0001(\d+)\u0001/g, (_, i) => best.lazy[i]());
  });
})();
