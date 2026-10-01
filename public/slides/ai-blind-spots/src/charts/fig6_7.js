/* Figures 6 and 7: fig6 (AI token costs continue to fall) and fig7 (average wages rise while labor share falls). */
(function () {
  const D = window.R28;
  const MINUS = '−';
  const sz = c => c ? { lab: 14, small: 12, micro: 10.5 } : { lab: 16, small: 13, micro: 11 };

  /* ISO date to decimal year. */
  const yr = s => { const [y, m, d] = s.split('-').map(Number); return y + (Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 1)) / 864e5 / 365.25; };
  /* Pixel y of a polyline (sorted by x) at pixel x, and its topmost pixel y over [a, b]. */
  function yAt(pts, x) {
    if (x <= pts[0][0]) return pts[0][1];
    for (let i = 1; i < pts.length; i++) {
      if (x <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; return y0 + (y1 - y0) * (x - x0) / (x1 - x0); }
    }
    return pts[pts.length - 1][1];
  }
  function topOver(pts, a, b) {
    let m = Math.min(yAt(pts, a), yAt(pts, b));
    for (const p of pts) if (p[0] >= a && p[0] <= b) m = Math.min(m, p[1]);
    return m;
  }
  const line = (pts, stroke, width, extra = '') =>
    `<path d="${pathD(pts)}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;
  const hRule = (x0, x1, y, stroke, width, extra = '') =>
    `<line x1="${fmt(x0)}" x2="${fmt(x1)}" y1="${fmt(y)}" y2="${fmt(y)}" stroke="${stroke}" stroke-width="${width}"${extra}/>`;
  const vRule = (x, y0, y1, stroke, width, extra = '') =>
    `<line x1="${fmt(x)}" x2="${fmt(x)}" y1="${fmt(y0)}" y2="${fmt(y1)}" stroke="${stroke}" stroke-width="${width}"${extra}/>`;
  /* wrap(), but a two-line result is rebalanced so the lines have similar widths. */
  function wrapEven(s, W, o) {
    const ls = wrap(s, W, o);
    if (ls.length !== 2) return ls;
    const ws = s.split(/\s+/);
    let best = ls, bw = Infinity;
    for (let i = 1; i < ws.length; i++) {
      const a = ws.slice(0, i).join(' '), b = ws.slice(i).join(' '), m = Math.max(tw(a, o), tw(b, o));
      if (m <= W && m < bw) { bw = m; best = [a, b]; }
    }
    return best;
  }
  const dot = (x, y, r, fill, stroke, sw) =>
    `<circle cx="${fmt(x)}" cy="${fmt(y)}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

  /* ---------- fig6: AI token costs continue to fall ---------- */
  Charts.add('fig6', ({ w, h, compact }) => {
    const F = D.fig6, S = sz(compact), side = w >= 600;
    const P = k => F[k].map(([d, v]) => [yr(d), v]);
    const obs = P('observed'), cen = P('central'), str = P('straight');
    const t0 = obs[0][0], tE = cen[cen.length - 1][0], tD = obs[obs.length - 1][0];
    const labS = `${M.CfAnnualCostDeclinePct}% a year`;
    const labEnd = `${MINUS}${M.CfTaperFiveYearCostDeclinePct}%`;
    const oC = { size: S.lab, w: 600 }, oS = { size: S.small };

    const gut = side ? Math.ceil(Math.max(tw(labEnd, oC), tw(labS, oS)) + 22) : 12;
    const L = Math.ceil(6 + S.small + 10 + tw('0.01', oS) + 8);
    const top = 6 + S.micro + 16, B = h - S.small - 14, Rx = w - gut;
    const xs = lin(t0, tE, L, Rx), ys = logS(100, 0.0035, top, B);
    const px = a => a.map(([t, v]) => [xs(t), ys(v)]);
    const cenP = px(cen), strP = px(str);
    const [xE, yCE] = cenP[cenP.length - 1], ySE = strP[strP.length - 1][1];
    let svg = '';

    /* Grid, y ticks and y title. */
    for (const v of [100, 10, 1, 0.1, 0.01]) {
      svg += hRule(L, Rx, ys(v), C.rule, 0.75);
      svg += T(L - 8, ys(v), String(v), { size: S.small, fill: C.muted, anchor: 'end', base: 'central' });
    }
    svg += `<g transform="translate(${fmt(6 + S.small * 0.78)},${fmt((top + B) / 2)}) rotate(-90)">${T(0, 0, 'Cost index', { size: S.small, fill: C.copy, anchor: 'middle' })}</g>`;

    /* x axis: years at 1 January. */
    svg += hRule(L, Rx, B, C.ruleDark, 0.9);
    const every = (Rx - L) / (tE - t0) < tw('2025', oS) + 12 ? 2 : 1;
    for (let y = 2025; y <= 2031; y += every) {
      svg += vRule(xs(y), B, B + 4, C.ruleDark, 0.9);
      svg += T(xs(y), B + S.small + 8, String(y), { size: S.small, fill: C.muted, anchor: 'middle' });
    }

    /* Divider at the last observed date. */
    const xD = xs(tD);
    /* In legend mode the legend sits in the lower left; the divider stops above it. */
    const rh = S.small + 9, sw = 24, lx0 = L + 8, lTop = B - 12 - rh / 2 - 2;
    const lRight = lx0 + sw + 8 + tw(labS, oS);
    const dEnd = !side && xD > lx0 - 4 && xD < lRight + 4 ? lTop - 4 : B;
    svg += vRule(xD, 4, dEnd, C.ruleDark, 0.9, ' stroke-dasharray="2 3"');
    svg += T(xD - 6, 6 + S.micro, 'Observed', { size: S.micro, fill: C.muted, anchor: 'end' });
    svg += T(xD + 6, 6 + S.micro, 'Extrapolated', { size: S.micro, fill: C.coral });

    /* Straight-line reference, central path, observed step path. With gouache.js loaded they
       are painted in the brush of fig7, on a canvas that sits in the chart as an image. */
    const G = window.Gouache;
    const op = [];
    obs.forEach(([t, v], i) => { if (i) op.push([xs(t), ys(obs[i - 1][1])]); op.push([xs(t), ys(v)]); });
    const yD = ys(obs[obs.length - 1][1]), rMain = compact ? 3 : 4, strDash = [8, 6];
    if (G) {
      /* One stroke per step, so the corners join round as in the crisp line; the observed line
         keeps its crisp width relative to the central path. */
      const steps = op.slice(1).map((p, i) => [op[i], p]).filter(([a, b]) => a[0] !== b[0] || a[1] !== b[1]);
      svg += G.layer(L - 8, top - 8, Rx - L + 16, B - top + 16, ctx => {
        G.stroke(ctx, strP, 1.4, G.rgb(C.context), G.random(600), { dash: strDash });
        G.stroke(ctx, cenP, rMain, G.rgb(C.coral), G.random(601));
        const rand = G.random(602);
        steps.forEach(s => G.stroke(ctx, s, rMain * 0.8, G.rgb(C.ink), rand));
        G.dot(ctx, xD, yD, 5.5, G.rgb(C.ink), G.random(603));
        G.dot(ctx, xD, yD, 3.5, G.rgb(C.paper), G.random(604), { light: 0, bare: 0 });
      });
    } else {
      svg += line(strP, C.context, 2.1, ' stroke-dasharray="8 6"');
      svg += line(cenP, C.coral, 3.25);
      svg += `<path d="${pathD(op)}" fill="none" stroke="${C.ink}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;
      svg += dot(xD, yD, 4.5, C.paper, C.ink, 2);
    }

    const endDot = G
      ? G.layer(xE - 9, yCE - 9, 18, 18, ctx => {
        G.dot(ctx, xE, yCE, 6.5, G.rgb(C.paper), G.random(605), { light: 0, bare: 0 });
        G.dot(ctx, xE, yCE, 5, G.rgb(C.coral), G.random(606));
      })
      : dot(xE, yCE, 5, C.coral, C.paper, 1.5);
    if (side) {
      /* Direct labels in the right gutter. */
      svg += T(xE + 12, ySE, labS, { ...oS, fill: C.copy, base: 'central' });
      svg += `<g class="st" style="--from:1">${endDot}${T(xE + 12, yCE, labEnd, { ...oC, fill: C.coral, base: 'central' })}</g>`;
    } else {
      /* Legend in the empty lower left, below the straight-line reference. */
      const y = B - 12;
      svg += G
        ? G.layer(lx0 - 4, y - 4, sw + 8, 8, ctx => G.stroke(ctx, [[lx0, y], [lx0 + sw, y]], 1.4, G.rgb(C.context), G.random(607), { dash: strDash }))
        : `<g transform="translate(${fmt(lx0)},${fmt(y)})">${line([[0, 0], [sw, 0]], C.context, 2.1, ' stroke-dasharray="8 6"')}</g>`;
      svg += T(lx0 + sw + 8, y, labS, { ...oS, fill: C.copy, base: 'central', cls: 'halo' });
      const wE = tw(labEnd, oC), xr = Math.min(xE + 5, w - 2);
      const base = topOver(cenP, xr - wE, xr) - 8;
      svg += `<g class="st" style="--from:1">${endDot}${T(xr, base, labEnd, { ...oC, fill: C.coral, anchor: 'end' })}</g>`;
    }
    return svg;
  });

  /* ---------- fig7: average wages rise while labor share falls ---------- */
  Charts.add('fig7', ({ w, h, compact }) => {
    const F = D.fig7, S = sz(compact);
    const E = F.estimated, J = F.five_times_less, N = E.year.length - 1;
    /* Colors and brush of the model's prediction slide (singularity.js); the less jagged
       paths are painted lighter, thinner and dashed. Each tag carries the path's number. */
    const series = [
      { v: J.wage, mark: C.coralMark, r: compact ? 2.2 : 2.8, name: 'Five times less jagged', value: `+${M.CfLessJaggedFiveYearWorkerRealEarningsGainPct}%`, nameFill: C.coralMark, later: true },
      { v: J.shareFactor, mark: C.humanMark, r: compact ? 2.2 : 2.8, name: 'Five times less jagged', value: `${M.CfLessJaggedFiveYearLaborIncomeSharePct}%`, nameFill: C.humanMark, later: true },
      { v: E.wage, mark: C.coralMark, r: compact ? 3.2 : 4.2, name: 'Average real wages', value: `+${M.CfExposureDrivenFiveYearWorkerRealEarningsGainPct}%`, nameFill: C.coral },
      { v: E.shareFactor, mark: C.humanMark, r: compact ? 3.2 : 4.2, name: 'Labor share', value: `${M.CfBaselineLaborIncomeSharePct}% → ${M.CfExposureDrivenFiveYearLaborIncomeSharePct}%`, nameFill: C.human }
    ];
    const oN = { size: S.lab + (compact ? 1 : 3), w: 600, fam: 'serif' }, oX = { size: S.lab, w: 600 }, oV = { size: S.small };

    /* Right gutter for end labels; on narrow boxes the names wrap. */
    const want = Math.max(...series.map(s => Math.max(tw(s.name, oN), tw(s.value, oX))));
    const cap0 = compact ? Math.max(100, Math.min(150, w * 0.36)) : Math.max(170, Math.min(240, w * 0.3));
    const gap = 12, L = Math.ceil(6 + S.small + 10 + tw('0.75×', oV) + 8);
    const top = 12, B = h - (S.small + 10) - (S.small + 16);
    const ys = logS(1.25, 0.45, top, B);

    /* End-label blocks (all four, so positions do not move between steps): the name, then
       its number. When they do not fit the chart height, widen the label column first, then
       tighten the line spacing. */
    let textW, lhN, lhX, pad, blocks;
    const build = (cap, sq) => {
      textW = Math.ceil(Math.min(want, cap));
      lhN = oN.size + 4 - sq; lhX = oX.size + 4 - sq; pad = 10 - 2 * sq;
      blocks = series.map(s => {
        const yE = ys(s.v[N]);
        const names = wrapEven(s.name, textW, oN);
        return { s, yE, names, top: yE - lhN / 2, h: names.length * lhN + lhX };
      }).sort((a, b) => a.top - b.top);
      return blocks.reduce((a, b) => a + b.h, 0) + pad * (blocks.length - 1) <= h - 4;
    };
    const caps = [cap0];
    for (let c = cap0 + 10; c <= w * 0.46; c += 10) caps.push(c);
    fit: for (const sq of [0, 1, 2, 3]) for (const c of caps) if (build(c, sq)) break fit;
    const Rx = w - textW - gap - 4, xs = lin(0, N, L, Rx);
    let svg = '';

    /* Grid, dotted 1.0 line, y ticks and y title. */
    for (const [v, lab] of [[1.2, '1.2×'], [1, '1×'], [0.75, '0.75×'], [0.5, '0.5×']]) {
      svg += v === 1 ? hRule(L, Rx, ys(v), C.ruleDark, 1, ' stroke-dasharray="1.5 3.5"') : hRule(L, Rx, ys(v), C.rule, 0.75);
      svg += T(L - 8, ys(v), lab, { size: S.small, fill: C.muted, anchor: 'end', base: 'central' });
    }
    svg += `<g transform="translate(${fmt(6 + S.small * 0.78)},${fmt((top + B) / 2)}) rotate(-90)">${T(0, 0, 'Relative to today', { size: S.small, fill: C.copy, anchor: 'middle' })}</g>`;
    /* x axis. */
    svg += hRule(L, Rx, B, C.ruleDark, 0.9);
    for (let k = 0; k <= N; k++) {
      svg += vRule(xs(k), B, B + 4, C.ruleDark, 0.9);
      svg += T(xs(k), B + S.small + 8, String(k), { size: S.small, fill: C.muted, anchor: 'middle' });
    }
    svg += T(L, h - 4, 'Years from 2026', { size: S.small, fill: C.copy });

    /* Nudge the end-label blocks apart vertically. */
    blocks.forEach((b, i) => { if (i) b.top = Math.max(b.top, blocks[i - 1].top + blocks[i - 1].h + pad); });
    let lim = h - 2;
    for (let i = blocks.length - 1; i >= 0; i--) { blocks[i].top = Math.min(blocks[i].top, lim - blocks[i].h); lim = blocks[i].top - pad; }
    if (blocks[0].top < 2) { let t = 2; blocks.forEach(b => { b.top = Math.max(b.top, t); t = b.top + b.h + pad; }); }

    const xE = xs(N), xT = xE + gap;
    /* The paths of one step, painted on a canvas that sits in the chart as an image
       (plain lines without gouache.js). */
    const G = window.Gouache;
    const paths = list => {
      const P = list.map(s => s.v.map((v, k) => [xs(k), ys(v)]));
      const dash = compact ? [10, 7] : [14, 9];
      if (!G) return list.map((s, i) => line(P[i], s.mark, 2 * s.r - 1, s.later ? ` stroke-dasharray="${dash[0]} ${dash[1] + 2 * s.r}"` : '')).join('');
      return G.layer(L - 8, top - 8, Rx - L + 16, B - top + 16, ctx => list.forEach((s, i) => {
        const fill = s.later ? G.mix(G.rgb(s.mark), G.rgb(C.paper), 0.4) : G.rgb(s.mark);
        G.stroke(ctx, P[i], s.r, fill, G.random(700 + series.indexOf(s)), s.later ? { dash } : {});
      }));
    };
    const labelsOf = b => {
      let m = '';
      const mid0 = b.top + lhN / 2;
      if (Math.abs(mid0 - b.yE) > 3) m += line([[xE + b.s.r + 3, b.yE], [xT - 3, mid0]], b.s.mark, 1);
      b.names.forEach((l, k) => { m += T(xT, b.top + lhN * (k + 0.5), l, { ...oN, fill: b.s.nameFill, base: 'central' }); });
      m += T(xT, b.top + b.names.length * lhN + lhX / 2, b.s.value, { ...oX, fill: b.s.nameFill, base: 'central' });
      return m;
    };
    const byS = new Map(blocks.map(b => [b.s, b]));
    const group = list => paths(list) + list.map(s => labelsOf(byS.get(s))).join('');
    svg += `<g class="st" style="--from:1">${group(series.filter(s => s.later))}</g>`;
    svg += group(series.filter(s => !s.later));
    return svg;
  });
})();
