/* Figure 3, "Distribution of the human-to-AI cost ratio": fig3build. */
(function () {
  const D = window.R28.fig3, TH = window.R28.theory;
  const MINUS = '−';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, p) => a + (b - a) * p;
  const maxBar = Math.max(...D.counts);
  const Z0 = D.edges[0], Z1 = D.edges[D.edges.length - 1];
  let uid = 0;

  /* Width of a label whose ψ is set in the math font. */
  const twp = (s, o) => {
    const parts = String(s).split('ψ');
    return parts.reduce((a, p) => a + tw(p, o), 0) + (parts.length - 1) * tw('\u{1D713}', { size: o.size, w: o.w, fam: 'math' });
  };

  /* Fitted task count per bin: N·bw·ψ·w/(1+w)², w = omega·e^(−ψz). */
  const fitCount = (z, psi) => { const w = D.omega * Math.exp(-psi * z); return D.N * D.bw * psi * w / ((1 + w) * (1 + w)); };
  /* Density with peak 1 at mu. */
  const dens = (z, psi) => { const w = Math.exp(-psi * (z - TH.mu)); return 4 * w / ((1 + w) * (1 + w)); };

  const legendItems = () => [
    { label: 'Task-level regression', psi: M.EmpPsiTaskLevel, stroke: C.ink, sw: 2.6, fill: C.ink },
    { label: 'Release-level regression', psi: M.EmpPsiShareMedian, stroke: C.ruleDark, sw: 2.2, fill: C.muted }
  ];
  /* Legend row width: the label, then the estimate in bold and EST times larger (25 px beside 17 px labels). */
  const EST = 25 / 17;
  const legRowW = (it, size) => tw(it.label + ' ', { size }) + twp(`ψ = ${it.psi}`, { size: EST * size, w: 600 });

  /* Shared geometry. opts.legend: reserve room for the fit legend. */
  function geom(ctx, opts = {}) {
    const { w, h, compact } = ctx;
    const S = { lab: compact ? 14 : 16, small: compact ? 12 : 13, micro: compact ? 10.5 : 11, leg: 14 };
    const L = Math.ceil(tw('40 tasks', { size: S.small })) + 12;
    const R = w - (compact ? 6 : 10);
    const B = h - (S.small + 10 + S.small + 14);
    /* Larger screens: legend text up to 17 px, as far as it fits right of "AI cheaper". */
    if (!compact) {
      const room = R - lin(Z0, Z1, L, R)(0) - tw('AI cheaper', { size: S.lab, w: 600 }) - 46;
      S.leg = clamp(Math.floor(17 * room / Math.max(...legendItems().map(it => legRowW(it, 17)))), 13, 17);
    }
    const legW = Math.max(...legendItems().map(it => legRowW(it, S.leg))) + 30;
    const rowH = 1.6 * EST * S.leg;
    const labRow = S.lab + 12;
    const make = top => {
      const xs = lin(Z0, Z1, L, R), ys = lin(0, 50, B, top);
      return { xs, ys, top };
    };
    let g = make(labRow + 2), legIn = true;
    if (opts.legend) {
      /* Inside, top right, if clear of bars and fits under it; otherwise in rows above the plot. */
      const x0 = R - legW, yBot = g.top + 6 + 2 * rowH;
      const z0 = g.xs.inv(x0 - 8);
      let hi = 0;
      D.counts.forEach((c, i) => { if (D.edges[i + 1] > z0) hi = Math.max(hi, c); });
      for (let z = z0; z <= Z1; z += .02) hi = Math.max(hi, fitCount(z, D.psiTask), fitCount(z, D.psiRelease));
      if (x0 < g.xs(0) + tw('AI cheaper', { size: S.lab, w: 600 }) + 16 || g.ys(hi) < yBot + 6) {
        legIn = false;
        g = make(2 * rowH + labRow + 4);
      }
    }
    const leg = legIn ? { x: R - legW, y: g.top + 6 } : { x: R - legW, y: 2 };
    return Object.assign(g, { S, L, R, B, legW, rowH, leg, legIn, compact });
  }

  function axes(g) {
    const { xs, ys, L, R, B, S } = g;
    let s = '';
    for (let v = 10; v <= 40; v += 10) s += `<line x1="${L}" x2="${R}" y1="${fmt(ys(v))}" y2="${fmt(ys(v))}" stroke="${C.rule}" stroke-width=".75"/>`;
    for (let v = 0; v <= 40; v += 10) s += T(L - 8, ys(v), v === 40 ? '40 tasks' : String(v), { size: S.small, anchor: 'end', base: 'middle', fill: C.copy });
    for (let v = -3; v <= 3; v++) {
      s += `<line x1="${fmt(xs(v))}" x2="${fmt(xs(v))}" y1="${B}" y2="${B + 4}" stroke="${C.ruleDark}" stroke-width=".9"/>`;
      s += T(xs(v), B + 8 + S.small, (v < 0 ? MINUS : '') + Math.abs(v), { size: S.small, anchor: 'middle', fill: C.copy });
    }
    const title = 'Log human-to-AI cost ratio, ln <tspan style="font-family:var(--math)">\u{1D437}</tspan>';
    s += T((L + R) / 2, g.B + 10 + S.small + 14 + S.small - 2, title, { size: S.small, anchor: 'middle', fill: C.copy, raw: true });
    return s;
  }

  function bars(g) {
    const { xs, ys, B } = g;
    return D.counts.map((c, i) => {
      if (!c) return '';
      const x0 = xs(D.edges[i]), x1 = xs(D.edges[i + 1]);
      const fill = D.edges[i] < 0 ? C.roseFill : C.denimFill;
      return `<rect x="${fmt(x0)}" y="${fmt(ys(c))}" width="${fmt(x1 - x0)}" height="${fmt(B - ys(c))}" fill="${fill}" stroke="${C.paper}" stroke-width="1"/>`;
    }).join('');
  }

  /* Axis line (drawn over the marks) and parity line at 0, with the two labels flanking its top. */
  function parity(g) {
    const { xs, B, S } = g, x = xs(0), y = g.top - 10;
    return `<line x1="${g.L}" x2="${g.R}" y1="${B}" y2="${B}" stroke="${C.ruleDark}" stroke-width=".9"/><line x1="${fmt(x)}" x2="${fmt(x)}" y1="${B}" y2="${fmt(y - S.lab - 2)}" stroke="${C.ink}" stroke-width="1.2"/>`
      + T(x - 7, y, 'Humans cheaper', { size: S.lab, w: 600, anchor: 'end', fill: C.rose })
      + T(x + 7, y, 'AI cheaper', { size: S.lab, w: 600, fill: C.denim });
  }

  function curvePts(g, fn) {
    const { xs, ys } = g, pts = [];
    const step = (Z1 - Z0) / Math.max(60, Math.round((g.R - g.L) / 2));
    for (let z = Z0; z <= Z1 + 1e-9; z += step) pts.push([xs(z), ys(fn(z))]);
    return pts;
  }

  function curve(g, fn, stroke, sw) {
    const d = pathD(curvePts(g, fn));
    return `<path d="${d}" fill="none" stroke="${C.paper}" stroke-width="${sw + 3.5}" stroke-linecap="round" stroke-linejoin="round"/>`
      + `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  /* Each row: the fit's label, then its estimate, larger and in bold ink. The text sits
     on its alphabetic baseline so that Safari keeps ψ on the line. */
  function legend(g, painted) {
    const { S, leg, rowH } = g;
    return legendItems().map((it, i) => {
      const y = leg.y + rowH * i + rowH / 2;
      const est = `<tspan fill="${C.ink}" style="font-weight:600;font-size:${fmt(EST * S.leg)}px"><tspan style="font-family:var(--math)">\u{1D713}</tspan> = ${it.psi}</tspan>`;
      return (painted ? '' : `<line x1="${fmt(leg.x)}" x2="${fmt(leg.x + 20)}" y1="${fmt(y)}" y2="${fmt(y)}" stroke="${it.stroke}" stroke-width="${it.sw}" stroke-linecap="round"/>`)
        + T(leg.x + 30, y + .35 * S.leg, `${esc(it.label)} ${est}`, { size: S.leg, fill: it.fill, cls: 'halo', raw: true });
    }).join('');
  }

  /* Theory star: denim spikes where AI is cheaper, rose wedges where humans are cheaper. */
  function starPts(cx, cy, R0, psi) {
    const n = TH.n, z = [];
    for (let k = 0; k < n; k++) z.push(TH.mu + Math.log((k + .5) / (n - k - .5)) / psi);
    const pts = [];
    for (let k = 0; k < n; k++) {
      const dg = (90 + 360 * k / n) % 360, a = (dg > 180 ? dg - 360 : dg) * Math.PI / 180;
      const r = R0 * (1 + .3 * z[TH.perm[k]]);
      pts.push([cx + r * Math.cos(a), cy - r * Math.sin(a)]);
    }
    return pts;
  }

  function star(cx, cy, R0, psi) {
    const d = pathD(starPts(cx, cy, R0, psi)) + 'Z', id = 'f3clip' + (++uid), c = `cx="${fmt(cx)}" cy="${fmt(cy)}" r="${fmt(R0)}"`;
    return `<defs><clipPath id="${id}"><circle ${c}/></clipPath></defs>`
      + `<path d="${d}" fill="${C.denimFill}"/><circle ${c} fill="${C.roseFill}"/>`
      + `<path d="${d}" fill="#fff" clip-path="url(#${id})"/>`
      + `<circle ${c} fill="none" stroke="${C.ruleDark}" stroke-width=".8"/>`
      + `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="1.4" stroke-linejoin="round"/>`;
  }

  /* Round 31: painted marks (gouache.js). The bars, and the release-level fit with the legend
     swatches, are painted once per size as SVG images that are kept across renders and put back in
     their places after each render. The star and the task-level fit change with t: they are painted
     on a canvas over the chart, again only when their shape changes. */
  const node = markup => { const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.innerHTML = markup; return svg.firstElementChild; };
  /* n points evenly spaced along a polyline. The count stays the same at every ψ, so the brush keeps its marks while the curve moves. */
  function even(pts, n) {
    const d = [0], out = [];
    for (let i = 1; i < pts.length; i++) d.push(d[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    for (let k = 0, i = 1; k < n; k++) {
      const at = d[d.length - 1] * k / (n - 1);
      while (i < pts.length - 1 && d[i] < at) i++;
      const f = (at - d[i - 1]) / (d[i] - d[i - 1] || 1);
      out.push([lerp(pts[i - 1][0], pts[i][0], f), lerp(pts[i - 1][1], pts[i][1], f)]);
    }
    return out;
  }
  /* A painted line of half-width r, on a band of paper when halo is set. */
  function line(c, pts, r, hex, seed, halo) {
    const G = window.Gouache, P = even(pts, pts.length);
    if (halo) G.paint(c, G.band(P, r + 1.5), G.rgb(C.paper), G.random(seed + 1), { ...G.BRUSH, light: 0, bare: 0 });
    G.paint(c, G.band(P, r), G.rgb(hex), G.random(seed), G.BRUSH);
  }
  function paintBars(c, g) {
    const G = window.Gouache, { xs, ys, B } = g, rand = G.random(331);
    D.counts.forEach((n, i) => {
      if (!n) return;
      const x0 = xs(D.edges[i]) + .75, x1 = xs(D.edges[i + 1]) - .75;
      G.box(c, x0, ys(n), x1 - x0, B - ys(n), G.rgb(D.edges[i] < 0 ? C.roseFill : C.denimFill), rand);
    });
  }
  function paintFit(c, g) {
    line(c, curvePts(g, z => fitCount(z, D.psiRelease)), 1.7, C.ruleDark, 351, true);
    legendItems().forEach((it, i) => {
      const y = g.leg.y + g.rowH * i + g.rowH / 2;
      line(c, [[g.leg.x, y], [g.leg.x + 20, y]], it.sw / 2 + .6, it.stroke, 353 + 2 * i);
    });
  }
  function paintStar(c, cx, cy, R0, psi) {
    const G = window.Gouache, P = starPts(cx, cy, R0, psi), E = [];
    P.forEach((p, i) => { const q = P[(i + 1) % P.length]; for (let k = 0; k < 4; k++) E.push([lerp(p[0], q[0], k / 4), lerp(p[1], q[1], k / 4)]); });
    const disc = G.circle(cx, cy, R0, 48), soft = { rough: .03, rounds: 2, light: .05, bare: .1 };
    G.paint(c, E, G.rgb(C.denimFill), G.random(341), soft);
    G.paint(c, disc, G.rgb(C.roseFill), G.random(342), soft);
    /* Where the star lies inside the circle: white, with the star's own edge (same seed). */
    c.save();
    c.beginPath();
    c.arc(cx, cy, R0, 0, 2 * Math.PI);
    c.clip();
    G.paint(c, E, G.WHITE, G.random(341), soft);
    c.restore();
    G.paint(c, G.band([...disc, disc[0]], .9), G.rgb(C.ruleDark), G.random(343), G.BRUSH);
    G.paint(c, G.band([...E, E[0]], 1.2), G.rgb(C.ink), G.random(344), G.BRUSH);
  }
  /* sb: the star and the task-level fit, or null before they appear. */
  function painted(ctx, g, sb) {
    const G = window.Gouache, el = ctx.el, st = el._f3 || (el._f3 = {});
    if (!st.cv) {
      st.cv = document.createElement('canvas');
      st.cv.setAttribute('aria-hidden', 'true');
      Object.assign(st.cv.style, { position: 'absolute', left: '0', top: '0', pointerEvents: 'none' });
    }
    const key = [ctx.w, ctx.h, Math.min(2, devicePixelRatio || 1), g.L, g.R, g.B, g.top, g.leg.x, g.leg.y].join();
    if (st.key !== key) {
      st.key = key;
      st.starKey = '';
      st.bars = node(G.layer(g.L - 4, g.top - 4, g.R - g.L + 8, g.B - g.top + 8, c => paintBars(c, g)));
      st.fit = node(G.layer(0, 0, ctx.w, ctx.h, c => paintFit(c, g)));
      st.c = G.fit(st.cv, ctx.w, ctx.h);
    }
    if (sb) {
      const k = [sb.cx, sb.cy, sb.R0, sb.psi, sb.H].join();
      if (st.starKey !== k) {
        st.starKey = k;
        st.c.clearRect(0, 0, ctx.w + 1, ctx.h + 1);
        paintStar(st.c, sb.cx, sb.cy, sb.R0, sb.psi);
        line(st.c, curvePts(g, z => sb.H * dens(z, sb.psi)), 1.9, C.ink, 357);
      }
      st.cv.style.opacity = sb.aIn;
    }
    st.show = !!sb;
    /* After render has replaced the chart's markup. */
    queueMicrotask(() => {
      el.querySelector('[data-paint="bars"]')?.appendChild(st.bars);
      el.querySelector('[data-paint="fit"]')?.appendChild(st.fit);
      if (st.show) el.appendChild(st.cv); else st.cv.remove();
    });
  }

  Charts.add('fig3build', ctx => {
    const t = clamp(+ctx.t || 0, 0, 5);
    const g = geom(ctx, { legend: true });
    const { xs, ys, S, compact } = g;
    const aIn = clamp(t, 0, 1), fitA = clamp(t - 3, 0, 1);
    const psi = Math.exp(lerp(Math.log(TH.psiS), Math.log(TH.psiJ), clamp((t - 1) / 2, 0, 1)));
    const H = lerp(maxBar, D.N * D.bw * TH.psiJ / 4, fitA);
    const G = window.Gouache;
    let s = axes(g) + (G ? '<g data-paint="bars"></g>' : bars(g)) + parity(g), sb = null;
    if (aIn > 0) {
      /* Star inset in the empty upper left, with its head. */
      const x0 = g.L + (compact ? 6 : 14), x1 = xs(-.45) - 4, y0 = g.top + 8, y1 = ys(25);
      const hn = { size: compact ? 15 : 19, w: 600, fam: 'serif' }, hs = { size: compact ? 12 : 14 };
      /* The head must end left of the parity line: shrink it a little, then wrap. */
      const avail = xs(0) - 10 - x0;
      hn.size = Math.max(compact ? 13 : 16, Math.min(hn.size, Math.floor(hn.size * avail / tw('Less jagged frontier', hn))));
      const lines = { less: wrap('Less jagged frontier', avail, hn), jag: wrap('Jagged frontier', avail, hn) };
      const nl = Math.max(lines.less.length, lines.jag.length), lh = Math.round(hn.size * 1.15);
      const headW = Math.max(...lines.less.concat(lines.jag).map(l => tw(l, hn)));
      const headH = hn.size + (nl - 1) * lh + 6 + hs.size;
      /* Star box in R0 units over all ψ in the build: x −1.53…1.52, y −1.29…1.59 (SVG y down). */
      const bx0 = 1.53, bw = 3.05, by0 = 1.29, bh = 2.88;
      const gap = compact ? 8 : 14, cap = compact ? 48 : 76;
      const rA = Math.min(cap, (y1 - y0 - headH - gap) / bh, (x1 - x0) / bw);
      const rB = Math.min(cap, (y1 - y0) / bh, (x1 - x0 - gap - headW) / bw);
      let R0, cx, cy, hx, hy;
      if (rA >= rB) {
        R0 = rA; hx = x0; hy = y0 + hn.size; cx = x0 + bx0 * R0; cy = y0 + headH + gap + by0 * R0;
      } else {
        R0 = rB; cx = x0 + bx0 * R0; cy = y0 + by0 * R0; hx = x0 + bw * R0 + gap; hy = cy - headH / 2 + hn.size;
      }
      const hA = clamp((3 - t) / .5, 0, 1), hB = clamp((t - 2.5) / .5, 0, 1);
      const head = (ls, sub, o) => o > 0 ? `<g opacity="${fmt(o)}">${ls.map((l, i) => T(hx, hy + i * lh, l, Object.assign({ fill: C.ink, cls: 'halo' }, hn))).join('')}${T(hx, hy + (ls.length - 1) * lh + 6 + hs.size, sub, Object.assign({ fill: C.muted, cls: 'halo' }, hs))}</g>` : '';
      if (G) {
        sb = { cx, cy, R0, psi, H, aIn };
        s += `<g opacity="${fmt(aIn)}">${head(lines.less, 'high ψ', hA)}${head(lines.jag, 'low ψ', hB)}`
          + (fitA > 0 ? `<g opacity="${fmt(fitA)}"><g data-paint="fit"></g>${legend(g, true)}</g>` : '') + '</g>';
      } else s += `<g opacity="${fmt(aIn)}">${star(cx, cy, R0, psi)}${head(lines.less, 'high ψ', hA)}${head(lines.jag, 'low ψ', hB)}`
        + (fitA > 0 ? `<g opacity="${fmt(fitA)}">${curve(g, z => fitCount(z, D.psiRelease), C.ruleDark, 2.2)}</g>` : '')
        + curve(g, z => H * dens(z, psi), C.ink, 2.6)
        + (fitA > 0 ? `<g opacity="${fmt(fitA)}">${legend(g)}</g>` : '') + '</g>';
    }
    if (G) painted(ctx, g, sb);
    return s;
  });
})();
