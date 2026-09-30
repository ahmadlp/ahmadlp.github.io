/* Figure 9: five-year real wage gains by education (fig9a) and task shares in the most AI-exposed sectors (fig9b). */
(function () {
  const D = window.R28.fig9;
  const size = c => c ? { title: 16, lab: 14, small: 12, micro: 10.5 } : { title: 19, lab: 16, small: 13, micro: 11 };

  /* Panel title (wrapped to the box) and optional small-caps sub. Returns the markup and the last baseline. */
  function head(w, title, sub, S) {
    const o = { fam: 'serif', w: 600, size: S.title, fill: C.ink };
    const lines = wrap(title, w - 4, o);
    let s = '', y = S.title;
    lines.forEach((l, i) => { s += T(0, y + i * S.title * 1.2, l, o); });
    y += (lines.length - 1) * S.title * 1.2;
    if (sub) { y += S.micro + 9; s += T(0, y, sub.toUpperCase(), { size: S.micro, fill: C.muted, ls: '.08em' }); }
    return { s, y };
  }

  const st = (from, inner) => `<g class="st" style="--from:${from}">${inner}</g>`;
  const line = (x1, y1, x2, y2, stroke, sw, extra = '') =>
    `<line x1="${fmt(x1)}" y1="${fmt(y1)}" x2="${fmt(x2)}" y2="${fmt(y2)}" stroke="${stroke}" stroke-width="${sw}"${extra}/>`;
  /* Data marks: painted in the brush of fig7 when gouache.js is loaded, each from its own seed. */
  const G = window.Gouache;
  const square = (x, y, r, seed) => {
    const a = r - 1;
    if (!G) return `<rect x="${fmt(x - a)}" y="${fmt(y - a)}" width="${fmt(2 * a)}" height="${fmt(2 * a)}" fill="${C.paper}" stroke="${C.coral}" stroke-width="2"/>`;
    /* A hollow square: a paper box, then its four sides. */
    return G.layer(x - r - 3, y - r - 3, 2 * r + 6, 2 * r + 6, ctx => {
      const rand = G.random(seed), P = [[x - a, y - a], [x + a, y - a], [x + a, y + a], [x - a, y + a]];
      G.box(ctx, x - a, y - a, 2 * a, 2 * a, G.rgb(C.paper), rand, { light: 0, bare: 0 });
      P.forEach((p, k) => G.stroke(ctx, [p, P[(k + 1) % 4]], 1.1, G.rgb(C.coral), rand));
    });
  };
  const dot = (x, y, r, seed) => G
    ? G.layer(x - r - 3, y - r - 3, 2 * r + 6, 2 * r + 6, ctx => G.dot(ctx, x, y, r, G.rgb(C.humanMark), G.random(seed)))
    : `<circle cx="${fmt(x)}" cy="${fmt(y)}" r="${fmt(r)}" fill="${C.humanMark}"/>`;
  /* A thin rule: a smaller wobble than the brush default, which would pinch it shut in places. */
  const bar = (x0, x1, y, stroke, sw, seed) => G
    ? G.layer(x0 - sw - 2, y - sw - 2, x1 - x0 + 2 * sw + 4, 2 * sw + 4, ctx => G.stroke(ctx, [[x0, y], [x1, y]], sw / 2 + 0.2, G.rgb(stroke), G.random(seed), { rough: 0.015 }))
    : line(x0, y, x1, y, stroke, sw);
  const box = (x, y, w, h, fill, seed) => G
    ? G.layer(x - 3, y - 3, w + 6, h + 6, ctx => G.box(ctx, x, y, w, h, G.rgb(fill), G.random(seed)))
    : `<rect x="${fmt(x)}" y="${fmt(y)}" width="${fmt(w)}" height="${fmt(h)}" fill="${fill}"/>`;

  /* ---------- fig9a: five-year real wage gains by education ---------- */
  const GROUPS = [
    ['hs_or_less', 'High school or less', 'HS'],
    ['some_college_associate', 'Some college', 'SomeCollege'],
    ['ba_plus', 'Bachelor’s or more', 'BAPlus']
  ];

  Charts.add('fig9a', ctx => {
    const { w, h, compact: c } = ctx, S = size(c);
    const r = c ? 5.5 : 7, gap = c ? 5 : 8;
    const lab = { size: S.lab, w: 600, fill: C.ink };
    const val = { size: c ? 12.5 : 14, w: 600, fill: C.coral, base: 'central' };
    const H = head(w, 'Five-year real wage gains', null, S);
    let out = H.s;

    /* Legend: no sectoral mobility now, partial sectoral mobility from step 1. */
    const ly = H.y + (c ? 20 : 26), leg = { size: S.small, fill: C.copy, base: 'central' };
    const t1 = 'No sectoral mobility', x2 = 2 * r + 8 + tw(t1, leg) + 22;
    out += square(r, ly, r, 900) + T(2 * r + 8, ly, t1, leg);
    out += st(1, dot(x2 + r, ly, r, 901) + T(x2 + 2 * r + 8, ly, 'Partial sectoral mobility', leg));

    /* Rows and scale. Desktop: labels right-aligned left of the plot. Compact: labels above each row. */
    const rows = GROUPS.map(([id, name, key]) => {
      const g = D.groups.find(q => q.id === id);
      const fix = { v: g.fixed, t: `+${M[`CfFrozen${key}RealWageGainPct`]}%`, fixed: true };
      const mob = { v: g.mobile, t: `+${M[`CfMobile${key}RealWageGainPct`]}%`, fixed: false };
      const [lo, hi] = fix.v <= mob.v ? [fix, mob] : [mob, fix];
      return { name, fix, mob, lo, hi };
    });
    const top = ly + (c ? 16 : 26), axisY = h - (c ? 20 : 24);
    const x0 = c ? tw('0', { size: S.small }) / 2 + 2 : Math.max(...rows.map(q => tw(q.name, lab))) + 22;
    /* Largest right end so every right-hand value label and the last tick fit inside the box. */
    let x1 = w - tw('%', { size: S.small }) - 4;
    for (const q of rows) {
      const room = w - 2 - r - gap - tw(q.hi.t, val) - x0;
      x1 = Math.min(x1, x0 + room * 35 / q.hi.v);
    }
    x1 = Math.min(x1, x0 + (w - 2 - tw('+30%', { size: S.small }) / 2 - x0) * 35 / 30);
    const x = lin(0, 35, x0, x1);

    /* Grid, zero line and ticks. */
    for (const v of [10, 20, 30]) out += line(x(v), top, x(v), axisY, C.rule, .75);
    out += line(x(0), top, x(0), axisY, C.ruleDark, .9);
    for (const v of [0, 10, 20, 30]) {
      const s = v === 0 ? '0' : `+${v}${v === 30 ? '%' : ''}`;
      out += T(x(v), axisY + (c ? 14 : 17), s, { size: S.small, fill: C.muted, anchor: 'middle' });
    }

    const rowH = (axisY - top) / 3;
    rows.forEach((q, i) => {
      let my;
      if (c) {
        const block = S.lab + 7 + 2 * r, bt = top + rowH * i + (rowH - block) / 2;
        out += T(x0 + 4, bt + S.lab / 2, q.name, { ...lab, base: 'central' });
        my = bt + S.lab + 7 + r;
      } else {
        my = top + rowH * (i + .5);
        out += T(x0 - 14, my, q.name, { ...lab, anchor: 'end', base: 'central' });
      }
      const place = (p, o = p.fixed ? val : { ...val, fill: C.human }) => p === q.hi
        ? T(x(p.v) + r + gap, my, p.t, o)
        : T(x(p.v) - r - gap, my, p.t, { ...o, anchor: 'end' });
      out += st(1, bar(x(q.lo.v), x(q.hi.v), my, C.ruleDark, 1.2, 910 + 3 * i));
      out += square(x(q.fix.v), my, r, 911 + 3 * i) + place(q.fix);
      out += st(1, dot(x(q.mob.v), my, r, 912 + 3 * i) + place(q.mob));
    });
    return out;
  });

  /* ---------- fig9b: task shares in the most AI-exposed sectors ---------- */
  Charts.add('fig9b', ctx => {
    const { w, h, compact: c } = ctx, S = size(c);
    const lab = { size: S.lab, w: 600, fill: C.ink };
    const inner = { size: c ? 13 : 15, w: 600, fill: C.ink, base: 'central', anchor: 'middle' };
    /* Brighter than the shared fills. */
    const HUM = '#e0acc8', MAC = '#abbbe5';
    const H = head(w, `Among the ${M.CfMobilityTailSectorCount} sectors with the highest AI exposure`, null, S);
    let out = H.s;

    /* Legend. */
    const ly = H.y + (c ? 20 : 26), leg = { size: S.small, fill: C.copy, base: 'central' }, sq = c ? 11 : 12;
    const sw = (xx, fill, seed) => box(xx, ly - sq / 2, sq, sq, fill, seed);
    const xa = sq + 7 + tw('Workers', leg) + 20;
    out += sw(0, HUM, 920) + T(sq + 7, ly, 'Workers', leg) + sw(xa, MAC, 921) + T(xa + sq + 7, ly, 'AI', leg);

    const share = (tp, tt) => D.tail.find(q => q.timepoint === tp && q.task_type === tt).task_share_pct;
    const rows = [
      { name: 'Today', v: share('baseline', 'workers'), tw: M.CfMobilityTailBaselineWorkerSharePct, ta: M.CfMobilityTailBaselineAISharePct },
      { name: 'After five years', v: share('five_years', 'workers'), tw: M.CfMobilityTailFiveYearWorkerSharePct, ta: M.CfMobilityTailFiveYearAISharePct }
    ];

    const top = ly + (c ? 16 : 28), axisY = h - (c ? 20 : 24);
    const x0 = c ? tw('0', { size: S.small }) / 2 + 2 : Math.max(...rows.map(q => tw(q.name, lab))) + 22;
    const tickR = tw('100%', { size: S.small }) / 2 + 2;
    let x1 = w - tickR;
    /* An AI segment too narrow for its label gets the label outside the bar end. */
    rows.forEach(q => { q.inside = (x1 - x0) * (100 - q.v) / 100 >= tw(q.ta + '%', inner) + 12; });
    if (!rows.every(q => q.inside)) x1 = w - 8 - Math.max(...rows.filter(q => !q.inside).map(q => tw(q.ta + '%', inner)));
    const x = lin(0, 100, x0, x1);

    out += line(x(50), top, x(50), axisY, C.rule, .75);
    for (const v of [0, 50, 100]) {
      out += T(x(v), axisY + (c ? 14 : 17), v === 100 ? '100%' : String(v), { size: S.small, fill: C.muted, anchor: 'middle' });
    }
    out += line(x0, axisY, x1, axisY, C.ruleDark, .9);

    const rowH = (axisY - top) / 2;
    rows.forEach((q, i) => {
      const pre = out;
      let bt, bh;
      if (c) {
        bh = Math.max(18, Math.min(40, rowH - S.lab - 20));
        const block = S.lab + 8 + bh;
        const t = top + rowH * i + (rowH - block) / 2;
        out += T(x0, t + S.lab / 2, q.name, { ...lab, base: 'central' });
        bt = t + S.lab + 8;
      } else {
        bh = Math.max(22, Math.min(60, rowH * .46));
        bt = top + rowH * (i + .5) - bh / 2;
        out += T(x0 - 14, bt + bh / 2, q.name, { ...lab, anchor: 'end', base: 'central' });
      }
      const xm = x(q.v), cy = bt + bh / 2;
      /* Painted, the two segments leave a gap of bare paper where the crisp bars have a paper rule. */
      if (G) out += box(x0, bt, xm - x0 - 0.75, bh, HUM, 930 + 2 * i) + box(xm + 0.75, bt, x1 - xm - 0.75, bh, MAC, 931 + 2 * i);
      else {
        out += box(x0, bt, xm - x0, bh, HUM) + box(xm, bt, x1 - xm, bh, MAC);
        out += line(xm, bt, xm, bt + bh, C.paper, 1.5);
      }
      out += T((x0 + xm) / 2, cy, q.tw + '%', inner);
      out += q.inside
        ? T((xm + x1) / 2, cy, q.ta + '%', inner)
        : T(x1 + 6, cy, q.ta + '%', { ...inner, anchor: 'start', fill: C.machine });
      /* The row after five years arrives after today's (theory-data.css). */
      if (i) out = pre + `<g class="f9b-later">${out.slice(pre.length)}</g>`;
    });
    return out;
  });
})();
