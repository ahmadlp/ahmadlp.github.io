/* Shared chart helpers: palette, SVG text, scales and the chart registry. */
(function () {
  const C = {
    paper: '#f2f6f8', paperLight: '#f8fafb', ink: '#1d315a', copy: '#545e74', muted: '#6f7d92',
    rule: '#cdd3df', ruleDark: '#7f8ba2', context: '#abb5c9',
    machine: '#435586', machineMark: '#586ba5', machineWash: '#dfe4ef',
    human: '#80526f', humanMark: '#a56883', humanWash: '#ecdee6',
    coral: '#b94d3a', coralMark: '#d96045', coralWash: '#f3ddd5',
    fillHuman: '#d2bac7', fillMachine: '#b8c1d8', coralLight: '#e4a496', plumLight: '#c8a8b8',
    /* Muted gouache tones sampled from the paintings: ink for text, fill for marks. */
    denim: '#45598b', denimFill: '#8295c0', rose: '#824865', roseFill: '#b48198'
  };
  const FAM = { sans: 'var(--sans)', serif: 'var(--serif)', math: 'var(--math)', pagella: 'var(--pagella)' };
  const NAME = { sans: '"Libre Franklin"', serif: '"Source Serif 4"', math: '"STIX Two Math"', pagella: '"TeX Gyre Pagella Math"' };
  const f = v => Math.round(v * 100) / 100;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const PSI = '<tspan style="font-family:var(--math)">\u{1D713}</tspan>';

  /* SVG text. o: {size, w, fam, fill, anchor, base, cls, ls, raw}. ψ is set in the math font. */
  function T(x, y, s, o = {}) {
    const a = [`x="${f(x)}"`, `y="${f(y)}"`,
      `style="font:${o.w || 400} ${o.size || 13}px/1 ${FAM[o.fam || 'sans']}${o.ls ? ';letter-spacing:' + o.ls : ''}"`,
      `fill="${o.fill || C.copy}"`];
    if (o.anchor) a.push(`text-anchor="${o.anchor}"`);
    if (o.base) a.push(`dominant-baseline="${o.base}"`);
    if (o.cls) a.push(`class="${o.cls}"`);
    const body = o.raw ? s : esc(s).replace(/ψ|\u{1D713}/gu, PSI);
    return `<text ${a.join(' ')}>${body}</text>`;
  }

  const canvas = document.createElement('canvas').getContext('2d');
  /* Text width in px for the same options T takes. */
  function tw(s, o = {}) {
    canvas.font = `${o.w || 400} ${o.size || 13}px ${NAME[o.fam || 'sans']}`;
    return canvas.measureText(String(s)).width;
  }
  /* Greedy word wrap into lines no wider than maxW. */
  function wrap(s, maxW, o = {}) {
    const lines = [];
    let line = '';
    for (const word of String(s).split(/\s+/)) {
      const next = line ? line + ' ' + word : word;
      if (line && tw(next, o) > maxW) { lines.push(line); line = word; } else line = next;
    }
    if (line) lines.push(line);
    return lines;
  }
  function lin(d0, d1, r0, r1) {
    const s = v => r0 + (v - d0) * (r1 - r0) / (d1 - d0);
    s.inv = p => d0 + (p - r0) * (d1 - d0) / (r1 - r0);
    return s;
  }
  function logS(d0, d1, r0, r1) {
    const l = lin(Math.log(d0), Math.log(d1), r0, r1);
    const s = v => l(Math.log(v));
    s.inv = p => Math.exp(l.inv(p));
    return s;
  }
  const pathD = pts => pts.length ? 'M' + pts.map(p => f(p[0]) + ',' + f(p[1])).join('L') : '';

  /* Chart registry. A chart is a function ctx -> SVG inner markup (string).
     ctx = {w, h, el, d: el.dataset, compact: w < 520, t}. Step reveals use <g class="st" style="--from:1">. */
  const reg = {}, live = new Set();
  function render(el) {
    const fn = reg[el.dataset.chart];
    const w = el.clientWidth, h = el.clientHeight;
    if (!fn || !w || !h) return;
    const ctx = { w, h, el, d: el.dataset, compact: w < 520, t: el._t || 0 };
    el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(el.dataset.label || '')}">${fn(ctx)}</svg>`;
  }
  const ro = new ResizeObserver(entries => entries.forEach(e => render(e.target)));
  const Charts = {
    add(name, fn) { reg[name] = fn; },
    mount(root) {
      root.querySelectorAll('.chart[data-chart]').forEach(el => {
        if (live.has(el)) return;
        live.add(el); ro.observe(el); render(el);
      });
    },
    redrawAll() { live.forEach(render); },
    setT(el, t) { if (el._t === t) return; el._t = t; render(el); },
    render
  };

  Object.assign(window, { C, M: window.R28.macros, T, tw, wrap, lin, logS, pathD, esc, fmt: f, Charts });
})();
