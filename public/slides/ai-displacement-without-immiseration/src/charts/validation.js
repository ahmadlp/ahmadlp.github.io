/* Model validation (Round 31, prototypes/validation-retrospective/e-combined.html). A playhead
   runs over the calendar from January 2022 to the second wage survey, drawing the share of
   businesses using AI. The calendar then folds into a strip, and the 61 sectors appear below it:
   wage growth between the surveys against exposure to AI growth, the trend in the data, and the
   model's prediction from AI growth alone. At the last step the goodness-of-fit test (fig5)
   takes their place. Lines and dots are painted on a canvas under the chart's text. */
(() => {
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  /* Progress of an animation that starts at a and lasts d seconds. */
  const prog = (t, a, d) => clamp((t - a) / d);
  const ease = p => 1 - Math.pow(1 - p, 3);
  const inout = p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
  const lerp = (a, b, p) => a + (b - a) * p;
  const { paint, random, circle, fit } = Gouache;
  const R = window.RETRO, S = R.sectors;
  const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  const day = s => Date.parse(s + 'T00:00:00Z') / 864e5;
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const D0 = day('2022-01-01'), D1 = day('2025-09-01');
  const MAY22 = day('2022-05-15'), GPT = day('2022-11-30'), MAY25 = day('2025-05-15');
  const AI = R.ai.map(([d, v]) => [day(d), v]);
  const TEST = ['Goodness-of-fit test', '(Adão, Costinot, Donaldson, 2025)'];
  const BRUSH = { rough: 0.05, rounds: 3, light: 0.06, bare: 0.12 };

  /* n points evenly spaced along a polyline, so a painted edge keeps its shape as the line moves. */
  function even(pts, n) {
    const len = [0];
    for (let i = 1; i < pts.length; i++) len.push(len[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const L = len[len.length - 1];
    let j = 0;
    return Array.from({ length: n }, (_, k) => {
      const s = L * k / (n - 1);
      while (j < pts.length - 2 && len[j + 1] < s) j++;
      const f = clamp((s - len[j]) / (len[j + 1] - len[j] || 1));
      return [lerp(pts[j][0], pts[j + 1][0], f), lerp(pts[j][1], pts[j + 1][1], f)];
    });
  }
  /* A band of half-width r around a line of points, with round ends (as in singularity.js). */
  function band(pts, r) {
    const n = pts.length, q = Math.PI / 2;
    const dir = i => { const [x0, y0] = pts[Math.max(0, i - 1)], [x1, y1] = pts[Math.min(n - 1, i + 1)]; return Math.atan2(y1 - y0, x1 - x0); };
    const at = (i, a) => [pts[i][0] + r * Math.cos(a), pts[i][1] + r * Math.sin(a)];
    const cap = (i, a) => Array.from({ length: 7 }, (_, k) => at(i, a - Math.PI * k / 6)).slice(1, -1);
    return [...pts.map((_, i) => at(i, dir(i) + q)), ...cap(n - 1, dir(n - 1) + q),
      ...pts.map((_, i) => at(n - 1 - i, dir(n - 1 - i) - q)), ...cap(0, dir(0) - q)];
  }

  /* The paint layer: one canvas under the chart's text, and painted strokes kept as sprites
     until the layout changes. */
  let P = null;
  function layer(el, w, h) {
    const cv = el.parentNode.querySelector('canvas.brush');
    if (!P || P.w !== w || P.h !== h) P = { w, h, ctx: fit(cv, w, h), cv, sprites: new Map() };
    P.ctx.clearRect(0, 0, w, h);
    return P.ctx;
  }
  function sprite(slot, key, draw) {
    let s = P.sprites.get(slot);
    if (!s) {
      s = document.createElement('canvas');
      s.width = P.cv.width; s.height = P.cv.height;
      P.sprites.set(slot, s);
    }
    if (s.key !== key) {
      const g = s.getContext('2d');
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, s.width, s.height);
      g.setTransform(P.ctx.getTransform());
      draw(g);
      s.key = key;
    }
    return s;
  }
  /* Show a sprite through a band around the part of the line drawn so far. */
  function reveal(ctx, s, shown, r, alpha = 1, pad = 4) {
    if (shown.length < 2 || alpha <= 0.004) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    band(shown, r + pad).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(s, 0, 0, P.w, P.h);
    ctx.restore();
  }
  function rule(ctx, x0, x1, y, color, width, alpha = 1) {
    if (alpha <= 0.004) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.restore();
  }

  Charts.add('validation', ({ w, h, t, compact, el }) => {
    const ctx = layer(el, w, h);
    const cs = getComputedStyle(el);
    const strip = parseFloat(cs.getPropertyValue('--strip')) || 190;
    let s = '', top = '';

    /* ---- The calendar ---- */
    const legs = [[0.1, 1.3, D0, MAY22], [3, 1.3, MAY22, GPT], [6, 2, GPT, MAY25]];
    let cur = D0;
    for (const [a, d, f, to] of legs) if (t >= a) cur = lerp(f, to, inout(prog(t, a, d)));
    const k = inout(prog(t, 9, 0.8));
    const fs = {
      pin: lerp(compact ? 13 : 17, compact ? 12.5 : 15, k), tick: lerp(compact ? 12 : 14, compact ? 11.5 : 13, k),
      ai: lerp(compact ? 13 : 15, compact ? 12.5 : 14, k), tag: compact ? 12 : 14
    };
    const Hf = Math.min(h, compact ? 440 : 600), oy = (h - Hf) / 2;
    const L = {
      label: lerp(oy + fs.pin + 2, fs.pin + 1, k),
      track0: lerp(oy + (compact ? 92 : 104), fs.pin + (compact ? 30 : 36), k),
      axis: lerp(oy + Hf - fs.tick - 34, strip - fs.tick - 14, k)
    };
    L.track1 = L.axis - lerp(compact ? 40 : 52, 14, k);
    const padL = 4, padR = tw('10%', { size: fs.tick }) + 14;
    const x = lin(D0, D1, padL, w - padR);
    const yA = lin(0, 10, L.track1, L.track0);

    /* The share of businesses using AI: gridlines that appear as the playhead nears the first
       data, then the painted line up to the playhead. */
    const gA = prog(cur, day('2023-06-01'), 90), g = gA * (1 - k);
    for (const v of [0, 5, 10]) {
      rule(ctx, padL, w - padR, yA(v), C.rule, v ? .75 : 1, v ? g : gA);
      if (g > 0.01) s += `<g opacity="${fmt(g)}">` + T(w - padR + 8, yA(v) + fs.tick * 0.35, v + '%', { size: fs.tick }) + '</g>';
    }
    const shown = AI.filter(p => p[0] <= cur);
    if (shown.length) {
      const nxt = AI[shown.length];
      if (nxt) {
        const last = shown[shown.length - 1], f = (cur - last[0]) / (nxt[0] - last[0]);
        shown.push([cur, lerp(last[1], nxt[1], f)]);
      }
      const r = lerp(compact ? 3.2 : 4.2, compact ? 2.8 : 3.6, k);
      const full = AI.map(([d, v]) => [x(d), yA(v)]);
      const art = sprite('ai', fmt(k), gg => paint(gg, band(even(full, 70), r), rgb(C.machineMark), random(11), BRUSH));
      const line = shown.map(([d, v]) => [x(d), yA(v)]);
      reveal(ctx, art, line, r);
      const [x0, y0] = line[0], [xe, ye] = line[line.length - 1];
      const title = 'Share of businesses using AI';
      top += compact
        ? T(lerp(x0, Math.min(x0, x(MAY25) - 12 - tw(title, { size: fs.ai, w: 600 })), k), lerp(L.track0 - 10, L.axis - 7, k), title, { size: fs.ai, w: 600, fill: C.machine, cls: 'halo' })
        : T(x0 - 12, y0 + fs.ai * 0.35, title, { size: fs.ai, w: 600, fill: C.machine, anchor: 'end', cls: 'halo' });
      const tip = shown[shown.length - 1][1];
      s += T(Math.max(xe, x(cur)) + r + 8, ye + fs.ai * 0.35, tip.toFixed(1) + '%', { size: fs.ai, w: 600, fill: C.machine, cls: 'halo' });
    }

    /* The calendar axis with month ticks and year labels. */
    const axis = [[padL, L.axis], [w - padR, L.axis]];
    reveal(ctx, sprite('axis', fmt(k), gg => paint(gg, band(even(axis, 60), 1.3), rgb(C.ruleDark), random(5), BRUSH)), axis, 1.3);
    const ph = 1 - k, tagW = tw('May 2025', { size: fs.tag, w: 600 }) + 16, px = x(cur);
    for (let y = 2022; y <= 2025; y++) for (let m = 0; m < 12; m++) {
      const d = day(`${y}-${String(m + 1).padStart(2, '0')}-01`);
      if (d > D1) break;
      s += `<line x1="${fmt(x(d))}" x2="${fmt(x(d))}" y1="${fmt(L.axis)}" y2="${fmt(L.axis + (m ? 3 : 8))}" stroke="${C.ruleDark}" stroke-width="${m ? .75 : 1}"/>`;
      if (!m) {
        const lx = x(d), lw = tw(String(y), { size: fs.tick });
        const near = ph > 0.5 && Math.abs(lx + (y === 2022 ? lw / 2 : 0) - px) < tagW / 2 + lw / 2 + 6;
        if (!near) s += T(lx, L.axis + 10 + fs.tick, String(y), { size: fs.tick, fill: C.copy, anchor: y === 2022 ? 'start' : 'middle' });
      }
    }
    /* The playhead and its date tag, gone once the calendar folds. */
    if (ph > 0.01) {
      const dt = new Date(cur * 864e5), txt = `${MON[dt.getUTCMonth()]} ${dt.getUTCFullYear()}`;
      const tx = Math.min(Math.max(px, padL + tagW / 2), w - tagW / 2 - 2), ty = L.axis + 8;
      s += `<g opacity="${fmt(ph)}"><line x1="${fmt(px)}" x2="${fmt(px)}" y1="${fmt(L.track0 - 14)}" y2="${fmt(L.axis)}" stroke="${C.ink}" stroke-width="1.5"/>`
        + `<rect x="${fmt(tx - tagW / 2)}" y="${fmt(ty)}" width="${fmt(tagW)}" height="${fmt(fs.tag + 12)}" rx="4" fill="${C.ink}"/>`
        + T(tx, ty + fs.tag + 3, txt, { size: fs.tag, w: 600, fill: C.paperLight, anchor: 'middle' }) + '</g>';
    }
    /* Event pins drop in when the playhead reaches them. */
    const pins = [
      { d: MAY22, at: 1.4, text: 'Wage survey', color: C.human },
      { d: GPT, at: 4.3, text: 'ChatGPT released', color: C.machine },
      { d: MAY25, at: 8.1, text: 'Wage survey', color: C.human }
    ];
    /* Pins are painted: a stroke from the label down to a dot on the axis. */
    const lh = fs.pin * 1.3, rp = compact ? 1.7 : 2.1, rd = compact ? 5.5 : 7;
    let prevR = -Infinity;
    pins.forEach(p => {
      const px2 = x(p.d), pw = tw(p.text, { size: fs.pin, w: 600 });
      p.cx = Math.min(Math.max(px2, padL + pw / 2), w - pw / 2 - 4);
      p.ly = L.label + (p.cx - pw / 2 < prevR + 12 ? lh : 0);
      p.x = px2; p.y0 = p.ly + 7;
      prevR = Math.max(prevR, p.cx + pw / 2);
    });
    const pinArt = sprite('pins', fmt(k), gg => pins.forEach((p, i) => {
      const rand = random(41 + i);
      paint(gg, band(even([[p.x, p.y0], [p.x, L.axis]], 30), rp), rgb(p.color), rand, BRUSH);
      paint(gg, circle(p.x, L.axis, rd, 14), rgb(p.color), rand, { ...BRUSH, rounds: 2 });
    }));
    for (const p of pins) {
      const a = ease(prog(t, p.at - 0.1, 0.45));
      if (!a) continue;
      reveal(ctx, pinArt, [[p.x, p.y0], [p.x, lerp(p.y0, L.axis, a)]], rp, Math.min(1, a * 1.4), rd - rp + 3);
      s += `<g opacity="${fmt(Math.min(1, a * 1.4))}">` + T(p.cx, p.ly, p.text, { size: fs.pin, w: 600, fill: p.color, anchor: 'middle' }) + '</g>';
    }

    /* ---- The sectors, below the strip ---- */
    const on = prog(t, 9.5, 0.5) * (1 - prog(t, 18.5, 0.5));
    const fz = compact ? { tick: 12, lab: 13, title: 14 } : { tick: 14, lab: 16, title: 17 };
    const y0S = strip + (parseFloat(cs.getPropertyValue('--gap')) || 72);
    const testA = prog(t, 18.9, 0.5);
    if (testA) {
      /* The test's name, then its authors in a quieter gray, on a second line if they do not fit. */
      const tx = compact ? 0 : tw('20%', { size: fz.tick }) + 10, ty = y0S + fz.title;
      const nw = tw(TEST[0] + ' ', { size: fz.title, w: 600 }), cite = { size: fz.title, fill: C.ruleDark };
      const one = tx + nw + tw(TEST[1], cite) <= w - 4;
      s += `<g opacity="${fmt(testA)}">` + T(tx, ty, TEST[0], { size: fz.title, w: 600, fill: C.ink })
        + T(one ? tx + nw : tx, one ? ty : ty + fz.title * 1.3, TEST[1], cite) + '</g>';
    }
    if (on > 0.004) {
      const tags = ['Data', 'Model prediction'];
      const side = !compact;
      const pl = tw('20%', { size: fz.tick }) + 10;
      const pr = side ? Math.max(...tags.map(g => tw(g, { size: fz.lab, w: 600 }))) + 24 : 8;
      const topS = y0S + fz.title + 26, bot = h - fz.tick - 22;
      const z0 = S[0].z, z1 = S[S.length - 1].z, dz = (z1 - z0) * 0.03;
      const xs = lin(z0 - dz, z1 + dz, pl, w - pr), ys = lin(0, 20, bot, topS);
      const r = compact ? 5 : 7;
      let q = '';

      for (const v of [0, 5, 10, 15, 20]) {
        rule(ctx, pl, w - pr, ys(v), C.rule, v ? .75 : 1, on);
        q += T(pl - 8, ys(v) + fz.tick * 0.35, v + '%', { size: fz.tick, anchor: 'end' });
      }
      q += T(pl, topS - 18, 'Wage growth, May 2022 to May 2025', { size: fz.title, w: 600, fill: C.ink });
      const xl = bot + 12 + fz.tick;
      if (!compact) q += T(pl, xl, '← Less exposed to AI growth', { size: fz.tick, fill: C.copy });
      q += T(w - pr, xl, 'More exposed to AI growth →', { size: fz.tick, fill: C.copy, anchor: 'end' });

      /* Painted dots appear left to right, then step back behind the lines. Six dot shapes,
         painted once, are shared among the sectors. */
      const dim = lerp(1, 0.42, ease(prog(t, 12.5, 0.6)));
      const D = Math.ceil(2 * r + 8), dpr = P.cv.width / w;
      P.dots ||= Array.from({ length: 6 }, (_, v) => {
        const c = document.createElement('canvas');
        c.width = c.height = Math.round(D * dpr);
        const gg = c.getContext('2d');
        gg.setTransform(dpr, 0, 0, dpr, 0, 0);
        paint(gg, circle(D / 2, D / 2, r, 14), Gouache.mix(rgb(C.ruleDark), rgb(C.paper), 0.18), random(300 + v), { rough: 0.1, rounds: 2, light: 0.08, bare: 0.1 });
        return c;
      });
      const dots = P.dots;
      const named = new Set(compact ? ['722', '622'] : ['722', '23', '622', '5411', '524']);
      let labels = '';
      S.forEach((o, i) => {
        const a = ease(prog(t, 9.8 + i * 0.022, 0.3));
        if (!a) return;
        const cx = xs(o.z), cy = ys(o.g), d = D * a;
        ctx.globalAlpha = dim * on;
        ctx.drawImage(dots[i % 6], cx - d / 2, cy - d / 2, d, d);
        ctx.globalAlpha = 1;
        if (named.has(o.id)) {
          const left = o.z > 0.1;
          labels += `<g opacity="${fmt(a * lerp(1, 0.75, 1 - dim))}">` + T(cx + (left ? -r - 6 : r + 6), cy + fz.lab * 0.35, o.short,
            { size: fz.lab - 1, fill: C.copy, anchor: left ? 'end' : 'start', cls: 'halo' }) + '</g>';
        }
      });
      q += labels;

      /* The higher of the two lines at xx, for a tag that must sit above both. */
      const yTop = xx => Math.min(...Object.values(R.lines).map(([[a0, b0], [a1, b1]]) => lerp(ys(b0), ys(b1), (xx - xs(a0)) / (xs(a1) - xs(a0)))));
      /* A painted line drawn from left to right, with a tag at its right end; the model's
         line is painted in dashes. */
      /* The model's line is a wide stroke painted under the trend in the data, so the
         trend shows running inside it. */
      const rl = compact ? 2.2 : 2.8, rm = compact ? 5.5 : 8;
      function line(key, t0, color, r, tag, above, fill) {
        const p = ease(prog(t, t0, 1.1));
        if (!p) return '';
        const [[a0, b0], [a1, b1]] = R.lines[key];
        const A = [xs(a0), ys(b0)], B = [xs(a1), ys(b1)];
        const art = sprite(key, '', gg => paint(gg, band(even([A, B], 40), r), fill, random(key === 'model' ? 23 : 17), BRUSH));
        reveal(ctx, art, [A, [lerp(A[0], B[0], p), lerp(A[1], B[1], p)]], r, on);
        const ta = prog(t, t0 + 0.8, 0.4);
        if (!ta) return '';
        return `<g opacity="${fmt(ta)}">` + (side
          ? T(B[0] + rm + 8, B[1] + (above ? -rm - 2 : fz.lab * 0.7 + rm + 4), tag, { size: fz.lab, w: 600, fill: color })
          : T(B[0] - 4, above ? yTop(B[0] - 4 - tw(tag, { size: fz.lab, w: 600 })) - rm - 6 : B[1] + rm + 12 + fz.lab * 0.7, tag, { size: fz.lab, w: 600, fill: color, anchor: 'end', cls: 'halo' })) + '</g>';
      }
      q += line('model', 15.6, C.machineMark, rm, tags[1], true, Gouache.mix(rgb(C.machineMark), rgb(C.paper), 0.45));
      q += line('actual', 12.6, C.ink, rl, tags[0], false, rgb(C.ink));
      s += `<g opacity="${fmt(on)}">${q}</g>`;
    }
    return s + top;
  });

  /* The timeline: seven steps start at fixed times (seconds); the step sets the titles and
     captions, the chart is redrawn at time t, and the test results sweep in at the last step.
     Still, the slide shows its end. */
  const STARTS = [0, 3, 6, 9, 12.5, 15.5, 18.5], LAST = STARTS.length - 1, END = STARTS[LAST] + 3;
  let raf = 0;
  function show(slide, t, playing) {
    const s = STARTS.filter(x => x <= t).length - 1, results = slide.querySelector('.results');
    if (slide.dataset.step !== String(s)) {
      slide.style.setProperty('--step', s);
      slide.dataset.step = s;
      results.classList.remove('sweep');
      if (playing && s === LAST) { void results.offsetWidth; results.classList.add('sweep'); }
    }
    Charts.setT(slide.querySelector('.story'), t);
  }
  window.Validation = {
    rest(slide) { cancelAnimationFrame(raf); show(slide, Infinity, false); },
    play(slide, frame) {
      cancelAnimationFrame(raf);
      const t0 = performance.now();
      const tick = now => {
        if (!frame.classList.contains('is-active')) return;
        const t = Math.min((now - t0) / 1000, END);
        show(slide, t, true);
        if (t < END) raf = requestAnimationFrame(tick);
      };
      show(slide, 0, true);
      raf = requestAnimationFrame(tick);
    }
  };
})();
