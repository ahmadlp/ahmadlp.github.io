/* Selected Figure 1 and retained review alternatives share the equation source. */
(() => {
  "use strict";
  const option = Number(document.documentElement.dataset.equationArrows);
  const panel = document.querySelector('.eq-iteration--b');
  if (!panel || ![1, 2, 3].includes(option)) return;
  const figure = panel.querySelector('.eq-profile');
  const equation = panel.querySelector('.eq-equation');
  const rows = [...panel.querySelectorAll('.eq-reading-point')];
  const terms = ['wage', 'dispersion', 'tasks'];
  const notes = rows.map((row, i) => `<div class="arrow-note arrow-note--${terms[i]}" data-arrow-note="${terms[i]}" data-reveal="${i + 2}">${row.querySelector('div').innerHTML}</div>`).join('');
  panel.classList.add('eq-arrow-study', `eq-arrow-study--${option}`);
  panel.querySelector('.eq-study-body').innerHTML = `<div class="arrow-composition">${figure.outerHTML}<div class="arrow-equation" data-reveal="1">${equation.outerHTML}</div>${notes}<svg class="arrow-leaders" aria-hidden="true"><defs>${terms.map(term => `<marker id="arrow-head-${term}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M1 1L8 5L1 9" class="arrow-head arrow-head--${term}"/></marker>`).join('')}</defs>${terms.map(term => `<path class="arrow-leader arrow-leader--${term}" data-arrow="${term}" marker-end="url(#arrow-head-${term})"/>`).join('')}${option === 3 ? '<path class="arrow-leader arrow-leader--dispersion arrow-figure-link" data-arrow="profile" marker-end="url(#arrow-head-dispersion)"/><path class="arrow-leader arrow-leader--tasks arrow-figure-link" data-arrow="share" marker-end="url(#arrow-head-tasks)"/>' : ''}</svg></div>`;
  const composition = panel.querySelector('.arrow-composition');
  const svg = composition.querySelector('.arrow-leaders');
  if (document.documentElement.hasAttribute('data-equation-arrow-review')) {
    panel.querySelector('.eq-study-footer p:first-child').innerHTML = `<a href="./equation-arrow-designs.html?v=arrows-1">Figure</a><span class="arrow-review-links">${[1,2,3].map(n => `<a href="./equation-arrows-0${n}.html?v=arrows-1#equation"${n === option ? ' aria-current="page"' : ''}>${n}</a>`).join('')}</span>`;
  }
  const narrow = () => innerWidth <= 900;
  const box = element => {
    const r = element.getBoundingClientRect(), c = composition.getBoundingClientRect();
    return { x:r.left-c.left, y:r.top-c.top, width:r.width, height:r.height,
      right:r.right-c.left, bottom:r.bottom-c.top, cx:r.left-c.left+r.width/2, cy:r.top-c.top+r.height/2 };
  };
  const point = (r, side, gap = 8) => side === 'top' ? {x:r.cx,y:r.y-gap} : side === 'bottom' ? {x:r.cx,y:r.bottom+gap} : side === 'left' ? {x:r.x-gap,y:r.cy} : {x:r.right+gap,y:r.cy};
  function connect(key, start, end, curved) {
    const path = svg.querySelector(`[data-arrow="${key}"]`);
    if (!curved) {
      const y = (start.y + end.y) / 2;
      path.setAttribute('d', `M${start.x} ${start.y}V${y}H${end.x}V${end.y}`);
    } else {
      const bend = Math.max(22, Math.abs(start.y-end.y)*.58);
      const direction = end.y > start.y ? 1 : -1;
      path.setAttribute('d', `M${start.x} ${start.y}C${start.x} ${start.y+direction*bend} ${end.x} ${end.y-direction*bend} ${end.x} ${end.y}`);
    }
  }
  function draw() {
    if (!composition.offsetWidth) return;
    const b = composition.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${b.width} ${b.height}`);
    const targets = {
      wage: composition.querySelector('.eq-equation .eq-wage mi:last-child'),
      dispersion: composition.querySelector('.eq-equation .eq-dispersion mfrac'),
      tasks: composition.querySelector('.eq-equation .eq-tasks msub'),
    };
    for (const term of terms) {
      const n = box(composition.querySelector(`[data-arrow-note="${term}"]`)), t = box(targets[term]);
      const above = n.cy < t.cy;
      connect(term, point(n, above ? 'bottom' : 'top'), point(t, above ? 'top' : 'bottom', 12), option !== 1);
    }
    if (option === 3 && !narrow()) {
      const graph = box(composition.querySelector('.eq-profile > svg'));
      const p = (x,y) => ({x:graph.x+x*graph.width/660,y:graph.y+y*graph.height/456});
      const psi = box(composition.querySelector('[data-arrow-note="dispersion"]'));
      const pi = box(composition.querySelector('[data-arrow-note="tasks"]'));
      const q = .98;
      const endpoint = p(44+568*q,292-224*(.13*q+.87*q**2.1));
      const start = {x:psi.right+10,y:psi.cy};
      svg.querySelector('[data-arrow="profile"]').setAttribute('d', `M${start.x} ${start.y}C${start.x+90} ${start.y} ${endpoint.x+35} ${endpoint.y-80} ${endpoint.x+5} ${endpoint.y-8}`);
      const share = point(box(composition.querySelector('.eq-profile .ei-symbol.ei-pi')), 'right', 12);
      svg.querySelector('[data-arrow="share"]').setAttribute('d', `M${pi.x-10} ${pi.cy}C${pi.x-65} ${pi.cy} ${share.x+100} ${share.y} ${share.x} ${share.y}`);
    }
  }
  new ResizeObserver(draw).observe(composition);
  document.fonts.ready.then(draw);
  window.addEventListener('story:position', () => requestAnimationFrame(draw));
  requestAnimationFrame(draw);
})();
