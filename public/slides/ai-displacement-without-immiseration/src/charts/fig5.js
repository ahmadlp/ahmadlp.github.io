/* Figure 5: model validation as a forest plot with two panels.
   (a) goodness-of-fit measure, bz ± 1.96·se, benchmark at 0;
   (b) IV coefficient, AR interval [lo, hi] with point iv, benchmark at 1. */
(function () {
  const MINUS = '−';
  const signed = v => (v < 0 ? MINUS : '') + String(Math.abs(v));
  const BRUSH = { rough: 0.05, rounds: 3, light: 0.06, bare: 0.12 };
  const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  /* A straight stroke of half-width r from a to b with round ends, as points for Gouache.paint. */
  function stroke([x0, y0], [x1, y1], r, n = 30) {
    const a = Math.atan2(y1 - y0, x1 - x0), q = Math.PI / 2;
    const side = (s, o) => Array.from({ length: n }, (_, k) => { const f = s ? 1 - k / (n - 1) : k / (n - 1);
      return [x0 + (x1 - x0) * f + r * Math.cos(a + o), y0 + (y1 - y0) * f + r * Math.sin(a + o)]; });
    const cap = ([x, y], a0) => Array.from({ length: 5 }, (_, k) => [x + r * Math.cos(a0 - Math.PI * (k + 1) / 6), y + r * Math.sin(a0 - Math.PI * (k + 1) / 6)]);
    return [...side(0, q), ...cap([x1, y1], a + q), ...side(1, -q), ...cap([x0, y0], a - q)];
  }

  Charts.add('fig5', ({ w, h, compact }) => {
    const D = window.R28.fig5;
    const fs = compact ? { lab: 14, small: 12, title: 16 } : { lab: 16, small: 13, title: 19 };
    const dotR = compact ? 6 : 7, capH = compact ? 9 : 11, lineW = compact ? 2.6 : 3.25;
    const small = { size: fs.small }, lab = { size: fs.lab, w: 600 };

    const ROWS = [
      { key: 'fixed', label: 'Zero labor mobility', text: C.human, mark: C.humanMark, value: M.ModelValidationFixedIV },
      { key: 'mobile', label: 'Imperfect labor mobility\n(baseline calibration)', text: C.machine, mark: C.machineMark, value: M.ModelValidationMobileIV }
    ];
    const PANELS = [
      { title: 'Goodness-of-fit measure', bench: 0, benchLabel: '0 means a perfect fit',
        d0: -0.001, d1: 0.001, ticks: [-0.001, -0.0005, 0, 0.0005, 0.001],
        est: o => [o.bz - 1.96 * o.se, o.bz, o.bz + 1.96 * o.se] },
      { title: 'IV coefficient', bench: 1, benchLabel: '1 means a perfect fit',
        d0: -1, d1: 3, ticks: [-1, 0, 1, 2, 3], values: true,
        est: o => [o.lo, o.iv, o.hi] }
    ];

    const lh = fs.small * 1.25;
    const axisH = 6 + fs.small + 4;
    const headH = n => fs.title * 0.9 + 8 + fs.small + (n - 1) * lh + 8;
    /* Vertical room the rows need: space above a dot for its value label,
       and a row gap that keeps the lower label clear of the upper row. */
    const need = values => {
      const top = values ? dotR + 6 + fs.small * 0.75 + 3 : Math.max(dotR, capH / 2) + 5;
      const sep = values ? 2 * dotR + 8 + fs.small * 0.75 : 2 * dotR + 8;
      return { top, sep, bot: Math.max(dotR, capH / 2) + 5 };
    };
    const needSum = n => n.top + n.sep + n.bot;

    /* One panel: title, benchmark label, grid, benchmark line, two rows, axis.
       o.titleX/o.anchor place the title; [o.l, o.r] bound the benchmark label. */
    function panel(p, x0, x1, top, bot, benchN, o) {
      const x = lin(p.d0, p.d1, x0, x1);
      let s = '';
      const tY = top + fs.title * 0.9;
      s += T(o.titleX, tY, p.title, { size: fs.title, w: 600, fam: 'serif', fill: C.ink, anchor: o.anchor });

      const bx = x(p.bench);
      const bLines = wrap(p.benchLabel, o.r - o.l, small);
      const bW = Math.max(...bLines.map(t => tw(t, small)));
      const bCx = Math.min(Math.max(bx, o.l + bW / 2), o.r - bW / 2);
      const b0 = tY + 8 + fs.small + (benchN - bLines.length) * lh;
      bLines.forEach((t, i) => { s += T(bCx, b0 + i * lh, t, { size: fs.small, fill: C.coral, anchor: 'middle' }); });

      const plotTop = top + headH(benchN), plotBot = bot - axisH;
      for (const t of p.ticks) {
        s += `<line x1="${fmt(x(t))}" x2="${fmt(x(t))}" y1="${fmt(plotTop)}" y2="${fmt(plotBot)}" stroke="${C.rule}" stroke-width=".75"/>`;
      }
      s += `<line x1="${fmt(bx)}" x2="${fmt(bx)}" y1="${fmt(plotTop)}" y2="${fmt(plotBot)}" stroke="${C.coral}" stroke-width="1.6" stroke-dasharray="5 4"/>`;
      s += `<line x1="${fmt(x0)}" x2="${fmt(x1)}" y1="${fmt(plotBot)}" y2="${fmt(plotBot)}" stroke="${C.ruleDark}" stroke-width=".9"/>`;
      /* Label every other tick when the labels would touch. */
      const every = Math.max(...p.ticks.map(t => tw(signed(t), small))) + 10 > x(p.ticks[1]) - x(p.ticks[0]) ? 2 : 1;
      p.ticks.forEach((t, i) => {
        s += `<line x1="${fmt(x(t))}" x2="${fmt(x(t))}" y1="${fmt(plotBot)}" y2="${fmt(plotBot + 5)}" stroke="${C.ruleDark}" stroke-width=".9"/>`;
        if (i % every === 0) s += T(x(t), plotBot + 6 + fs.small, signed(t), { size: fs.small, anchor: 'middle' });
      });

      const n = o.need;
      const avail = plotBot - plotTop - n.top - n.bot;
      const sep = Math.min(compact ? 90 : 400, Math.max(Math.min(n.sep, avail), avail * 0.6));
      const y1 = plotTop + n.top + (avail - sep) / 2;
      const rowY = [y1, y1 + sep];
      /* With gouache.js loaded, the bars and dots are painted on a canvas that sits in the
         chart as an image, under the value labels. */
      const G = window.Gouache;
      let cv, ctx;
      if (G) {
        cv = document.createElement('canvas');
        ctx = G.fit(cv, x1 - x0 + 40, plotBot - plotTop);
        ctx.translate(20 - x0, -plotTop);
      }
      let labels = '';
      ROWS.forEach((r, i) => {
        const y = rowY[i], [lo, pt, hi] = p.est(D[r.key]).map(x);
        if (G) {
          const rand = G.random(41 + 7 * i + (p.values ? 3 : 0)), mark = rgb(r.mark);
          G.paint(ctx, stroke([lo, y], [hi, y], lineW / 2 + 1.2), mark, rand, BRUSH);
          for (const xc of [lo, hi]) G.paint(ctx, stroke([xc, y - capH / 2], [xc, y + capH / 2], 1.7, 12), mark, rand, BRUSH);
          G.paint(ctx, G.circle(pt, y, dotR + 1.5, 14), rgb(C.paper), rand, { rough: 0.06, rounds: 2, light: 0, bare: 0 });
          G.paint(ctx, G.circle(pt, y, dotR, 14), mark, rand, { rough: 0.1, rounds: 2, light: 0.08, bare: 0.1 });
        } else {
          s += `<g stroke="${r.mark}" stroke-linecap="round">`
            + `<line x1="${fmt(lo)}" x2="${fmt(hi)}" y1="${fmt(y)}" y2="${fmt(y)}" stroke-width="${lineW}"/>`
            + `<line x1="${fmt(lo)}" x2="${fmt(lo)}" y1="${fmt(y - capH / 2)}" y2="${fmt(y + capH / 2)}" stroke-width="2"/>`
            + `<line x1="${fmt(hi)}" x2="${fmt(hi)}" y1="${fmt(y - capH / 2)}" y2="${fmt(y + capH / 2)}" stroke-width="2"/></g>`;
          s += `<circle cx="${fmt(pt)}" cy="${fmt(y)}" r="${dotR}" fill="${r.mark}" stroke="${C.paper}" stroke-width="1.5"/>`;
        }
        if (p.values) {
          /* Value above the dot, moved off the benchmark line if it would cross it. */
          const vw = tw(r.value, { size: fs.small, w: 600 });
          let left = pt - vw / 2;
          if (left < bx + 4 && left + vw > bx - 4) left = pt >= bx ? bx + 4 : bx - 4 - vw;
          labels += T(left, y - dotR - 6, r.value, { size: fs.small, w: 600, fill: r.text, cls: 'halo' });
        }
      });
      if (G) s += `<image x="${fmt(x0 - 20)}" y="${fmt(plotTop)}" width="${fmt(x1 - x0 + 40)}" height="${fmt(plotBot - plotTop)}" href="${cv.toDataURL()}"/>`;
      s += labels;
      return { s, rowY };
    }

    let out = '';

    if (w >= 680) {
      /* Side by side: row labels on the left, panels (a) and (b) on shared rows. */
      const wrapW = Math.min(Math.max(w * 0.2, 140), 230);
      const labLines = ROWS.map(r => r.label.split('\n').flatMap(l => wrap(l, wrapW, lab)));
      const labRight = Math.max(...labLines.flat().map(t => tw(t, lab)));
      const labW = labRight + tw(signed(-0.001), small) / 2 + 16;
      const G = tw('0.001', small) / 2 + tw(signed(-1), small) / 2 + Math.max(28, w * 0.04);
      const pw = (w - labW - G - tw('3', small) / 2 - 2) / 2;
      const n = Math.max(...PANELS.map(p => wrap(p.benchLabel, pw, small).length));
      let rowY;
      PANELS.forEach((p, i) => {
        const x0 = labW + i * (pw + G);
        const r = panel(p, x0, x0 + pw, 0, h, n,
          { titleX: x0 + pw / 2, anchor: 'middle', l: x0, r: x0 + pw, need: need(true) });
        out += r.s; rowY = r.rowY;
      });
      const llh = fs.lab * 1.2;
      ROWS.forEach((r, i) => {
        const lines = labLines[i];
        const y0 = rowY[i] - (lines.length - 1) * llh / 2 + fs.lab * 0.35;
        lines.forEach((t, j) => { out += T(labRight, y0 + j * llh, t, { ...lab, fill: r.text, anchor: 'end' }); });
      });
    } else {
      /* Stacked: row legend on top, then panel (a) above panel (b). */
      const llh = fs.lab * 1.25, mx = 26;
      let y = fs.lab;
      ROWS.forEach(r => {
        const lines = r.label.split('\n').flatMap(l => wrap(l, w - mx - 2, lab));
        const my = y - fs.lab * 0.35;
        out += `<line x1="3" x2="19" y1="${fmt(my)}" y2="${fmt(my)}" stroke="${r.mark}" stroke-width="${lineW}" stroke-linecap="round"/>`;
        out += `<circle cx="11" cy="${fmt(my)}" r="${dotR - 1}" fill="${r.mark}" stroke="${C.paper}" stroke-width="1.5"/>`;
        lines.forEach((t, j) => { out += T(mx, y + j * llh, t, { ...lab, fill: r.text }); });
        y += lines.length * llh + 2;
      });
      const legendH = y - fs.lab + 8;
      const x0 = tw(signed(-0.001), small) / 2 + 2, x1 = w - tw('0.001', small) / 2 - 2;
      const gapP = compact ? 14 : 18;
      /* Each panel gets the height it needs; spare height is split evenly. */
      const parts = PANELS.map(p => {
        const n = wrap(p.benchLabel, w, small).length, nd = need(!!p.values);
        return { n, nd, fixed: headH(n) + axisH + needSum(nd) };
      });
      const spare = (h - legendH - gapP - parts[0].fixed - parts[1].fixed) / 2;
      let top = legendH;
      PANELS.forEach((p, i) => {
        const bot = top + parts[i].fixed + spare;
        out += panel(p, x0, x1, top, bot, parts[i].n, { titleX: 0, l: 0, r: w, need: parts[i].nd }).s;
        top = bot + gapP;
      });
    }
    return out;
  });
})();
