/* Cost slide: the small chart under each part of the scene, from data/costs-data.js. */
(function () {
  const D = window.COSTS;
  /* Round 31: with gouache.js the marks are painted. Squares, dots and bars keep their class and
     --i, so the entrance still runs; the squares stay rects (the entrance selects them by tag). */
  let uid = 0;

  /* 484 = 44 × 11 squares, one per task, filled column by column; repositories alternate in shade. */
  Charts.add('cost-tasks', ({ w, h }) => {
    const cols = 44, rows = D.tasks.length / cols;
    const p = Math.min(w / cols, h / rows), s = p * .8, x0 = (w - cols * p) / 2, y0 = h - rows * p;
    const G = window.Gouache, m = G ? (p - s) / 2 : 0;
    /* Painted: each square is a rect one cell wide, filled with one of eight painted squares per shade. */
    let defs = '', ids = null, pick = null;
    if (G) {
      const id = 'cs-sq' + (++uid);
      ids = [C.human, '#b08aa2'].map((hex, a) => Array.from({ length: 8 }, (_, k) => {
        const cv = document.createElement('canvas');
        G.box(G.fit(cv, p, p), m, m, s, s, G.rgb(hex), G.random(360 + 10 * a + k));
        defs += `<pattern id="${id}-${a}-${k}" patternContentUnits="objectBoundingBox" width="1" height="1"><image width="1" height="1" preserveAspectRatio="none" href="${cv.toDataURL()}"/></pattern>`;
        return `${id}-${a}-${k}`;
      }));
      pick = G.random(380);
    }
    let out = '', t = 0;
    D.repos.forEach(([, n], b) => {
      let g = '';
      for (let j = 0; j < n; j++, t++) {
        const fill = ids ? ` style="fill:url(#${ids[b % 2][Math.floor(pick() * 8)]})"` : '';
        g += `<rect x="${fmt(x0 + Math.floor(t / rows) * p - m)}" y="${fmt(y0 + (t % rows) * p - m)}" width="${fmt(s + 2 * m)}" height="${fmt(s + 2 * m)}"${fill}/>`;
      }
      out += `<g class="${b % 2 ? 'alt' : ''}" style="--i:${b}">${g}</g>`;
    });
    return (defs ? `<defs>${defs}</defs>` : '') + `<g class="wf">${out}</g>`;
  });

  /* 32 = 16 × 2 dots, one per AI system, in order of release. */
  Charts.add('cost-systems', ({ w, h }) => {
    const n = +M.EmpConfigurations, cols = n / 2;
    const p = Math.min(w / cols, h / 2), r = p * .34, x0 = (w - cols * p) / 2, y0 = h - 2 * p;
    const G = window.Gouache;
    let s = '';
    for (let i = 0; i < n; i++) {
      const cx = x0 + (i % cols) * p + p / 2, cy = y0 + Math.floor(i / cols) * p + p / 2, e = r + 2;
      s += G ? G.layer(cx - e, cy - e, 2 * e, 2 * e, ctx => G.dot(ctx, cx, cy, r, G.rgb(C.machine), G.random(390 + i)), ` class="tl-dot" style="--i:${i}"`)
        : `<circle class="tl-dot" style="--i:${i}" cx="${fmt(cx)}" cy="${fmt(cy)}" r="${fmt(r)}"/>`;
    }
    return s;
  });

  /* One bar per release date, as tall as the data points it adds. */
  Charts.add('cost-points', ({ w, h }) => {
    const slot = w / D.dates.length, bw = slot * .6, max = Math.max(...D.points);
    const G = window.Gouache;
    return D.points.map((v, k) => {
      const x = k * slot + (slot - bw) / 2, y = h - v / max * h;
      /* Painted: the image reaches 1.5 px past the bar's top and sides and ends on its base, where it grows from. */
      return G ? G.layer(x - 1.5, y - 1.5, bw + 3, h - y + 1.5, ctx => G.box(ctx, x, y, bw, h - y, G.rgb(C.ink), G.random(430 + k)), ` class="sp-bar" style="--i:${k}"`)
        : `<rect class="sp-bar" style="--i:${k}" x="${fmt(x)}" y="${fmt(y)}" width="${fmt(bw)}" height="${fmt(v / max * h)}"/>`;
    }).join('');
  });
})();
