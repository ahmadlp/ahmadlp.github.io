/* Three figure-led refinements of equation option 02. Profiles are illustrative. */
(() => {
  "use strict";
  const variant = document.documentElement.dataset.equationIteration;
  if (!["a", "b", "c"].includes(variant)) return;
  const panel = document.querySelector(".eq-study--2");
  const figure = panel.querySelector(".eq-profile");
  panel.classList.add("eq-iteration", `eq-iteration--${variant}`);
  const pi = `π<tspan class="ei-sub" dy="6">L</tspan><tspan dy="-6">​</tspan>`;
  const x = q => 44 + 568 * q;
  const y = (q, flatter = false) => 292 - (flatter ? 112 : 224) * (.13 * q + .87 * q ** 2.1);
  const curve = (flatter = false) => Array.from({length:101}, (_, i) => `${i ? "L" : "M"}${x(i / 100).toFixed(2)} ${y(i / 100, flatter).toFixed(2)}`).join(" ");
  const bracket = (q, at) => `M${x(q)} ${at-6}V${at}H${x(1)}V${at-6}`;
  const axis = `<text x="44" y="26" class="ei-axis-title">Worker productivity relative to AI</text><path class="eq-axis" d="M44 54V292H612"/>`;
  const baseCurve = `<path class="eq-cost-profile" d="${curve()}" pathLength="1"/>`;
  const cutoff = q => `<path class="eq-cutoff" d="M${x(q)} ${y(q)}V292"/><circle class="eq-cutoff-dot" cx="${x(q)}" cy="${y(q)}" r="5.5"/>`;
  const share = (q, label) => `<g data-reveal="3"><path class="eq-human-band" d="M${x(q)} 292H612"/><path class="ei-share-bracket" d="${bracket(q,324)}"/><text x="${(x(q)+612)/2}" y="359" text-anchor="middle" class="ei-symbol ei-pi">${pi}</text><text x="${(x(q)+612)/2}" y="400" text-anchor="middle" class="ei-note ei-pi">${label}</text></g>`;
  const order = `<text x="612" y="434" text-anchor="end" class="ei-order">Tasks indexed by i ∈ [0,1]</text>`;
  const psiAnnotation = () => `<g class="ei-psi-annotation" data-reveal="2"><text x="79" y="87" class="ei-symbol ei-psi">ψ</text><text x="123" y="78" class="ei-label ei-psi">Dispersion parameter</text><text x="123" y="107" class="ei-note">Productivity profiles</text><path class="ei-leader" d="M258 121Q303 153 ${x(.54)} ${y(.54)-8}"/><circle class="ei-psi-dot" cx="${x(.54)}" cy="${y(.54)}" r="4"/></g>`;
  // Frame 11: AI growth moves the cutoff from q0 to q1; worker productivity at the cutoff rises,
  // The less jagged profile shows only its curve. Old levels stay dashed, as in Round 30's generic GIF.
  const q0 = .7, q1 = .86;
  const flat = q => y(q, true);
  const rise = `<g data-ei-markers><path class="ei-was-level ei-steep" d="M44 ${y(q0)}H${x(q0)}"/><path class="ei-level ei-steep" data-ei-level="steep"/><path class="ei-rise ei-steep" data-ei-rise="steep"/><path class="eq-cutoff" data-ei-cutoff/><circle class="ei-was-dot ei-steep" cx="${x(q0)}" cy="${y(q0)}" r="5"/><circle class="eq-cutoff-dot" data-ei-dot="steep" r="5.5"/></g><text class="ei-rise-tag ei-steep" data-ei-tag x="78" y="${(y(q0)+y(q1))/2+7}">Labor productivity</text>`;
  const diagrams = {
    a: `${axis}${baseCurve}${cutoff(.72)}${psiAnnotation()}<text x="233" y="328" text-anchor="middle" class="ei-note ei-ai">Tasks assigned to AI</text>${share(.72,"Worker task share")}${order}`,
    b: `${axis}<path class="ei-flatter-profile" d="${curve(true)}" pathLength="1"/><path class="eq-cost-profile ei-steeper-profile" d="${curve()}" pathLength="1"/><g data-reveal="2"><text x="390" y="74" class="ei-label ei-psi">More jaggedness</text><text x="390" y="103" class="ei-note ei-psi">smaller ψ</text><text x="628" y="${y(1,true)+6}" class="ei-label ei-context">Less jagged</text><text x="628" y="${y(1,true)+33}" class="ei-note ei-context">larger ψ</text></g>${rise}<text data-ei-ai y="328" text-anchor="middle" class="ei-note ei-ai">Tasks assigned to AI</text><g data-reveal="3"><path class="eq-human-band" data-ei-band/><path class="ei-share-bracket" data-ei-bracket/><text data-ei-center y="359" text-anchor="middle" class="ei-symbol ei-pi">${pi}</text><text data-ei-center y="400" text-anchor="middle" class="ei-note ei-pi">Worker task share</text></g>`,
    c: `${axis}${baseCurve}${psiAnnotation()}<path class="ei-before-cutoff" d="M${x(.6)} ${y(.6)}V292"/><circle class="ei-before-dot" cx="${x(.6)}" cy="${y(.6)}" r="4.5"/><path class="eq-cutoff" data-ei-cutoff/><circle class="eq-cutoff-dot" data-ei-dot r="5.5"/><path class="eq-human-band" data-ei-band/><path class="ei-move-arrow" d="M${x(.6)+8} 259H${x(.8)-8}m-8-6 8 6-8 6"/><text x="${x(.7)}" y="241" text-anchor="middle" class="ei-note ei-move-label">AI growth</text><text x="190" y="326" text-anchor="middle" class="ei-note ei-ai">Tasks assigned to AI</text><path class="ei-before-bracket" d="${bracket(.6,330)}"/><text x="${(x(.6)+612)/2}" y="359" text-anchor="middle" class="ei-before-label">${pi} before = 40%</text><path class="ei-share-bracket" data-ei-bracket/><text x="${(x(.8)+612)/2}" y="419" text-anchor="middle" class="ei-after-label" data-ei-after-label>${pi} after = <tspan data-ei-share>20%</tspan></text>`,
  };
  // Wording is excerpted from main.lyx's main text; see the source map in qa/.
  const piReading = ['<math class="eq-tasks" display="block"><msub><mi>π</mi><mi>L</mi></msub></math>',"eq-tasks","Worker task share","The fraction of tasks produced by workers."];
  const psiReading = ['<math class="eq-dispersion" display="block"><mfrac><mn>1</mn><mi>ψ</mi></mfrac></math>',"eq-dispersion","Jaggedness of AI capabilities","From the joint distribution of human and AI productivity across tasks."];
  const wageReading = ['<math class="eq-wage" display="block"><mi>w</mi></math>',"eq-wage","Real wage",""];
  const descriptions = {
    a: "A task is assigned to workers whenever worker productivity relative to AI productivity exceeds the relative wage–rental ratio.",
    b: "AI growth moves the cutoff to the right: the worker task share falls and worker productivity relative to AI rises at the cutoff. More jaggedness, smaller ψ: a larger rise. Less jagged, larger ψ: a smaller rise.",
    c: "The joint distribution determines which tasks workers continue to perform. As AI becomes more productive, it takes over the tasks on which it has the greatest cost advantage.",
  };
  figure.innerHTML = `<svg viewBox="0 0 ${variant === "b" ? 780 : 660} 456" role="img" aria-label="${descriptions[variant]}">${diagrams[variant]}</svg>`;
  const subtitles = {
    a: "The joint distribution determines which tasks workers continue to perform.",
    b: "The more jagged AI’s capabilities, the larger the rise.",
    c: "Task assignment responds to technology and factor prices.",
  };
  panel.querySelector("h2").textContent = "The real wage rises as the worker task share falls";
  panel.querySelector(".eq-study-header > p").textContent = subtitles[variant];
  const readings = {
    a: [piReading, psiReading, wageReading],
    b: [wageReading, psiReading, piReading],
    c: [piReading, psiReading, wageReading],
  };
  const reading = panel.querySelector(".eq-mechanism-reading");
  reading.querySelectorAll(".eq-reading-point").forEach(node => node.remove());
  reading.insertAdjacentHTML("beforeend", readings[variant].map(([symbol,color,heading,copy], i) => `<div class="eq-reading-point" data-reveal="${Math.min(i+2,4)}"><span class="eq-point-mark ei-point-symbol ${color}" aria-hidden="true">${symbol}</span><div><h3>${heading}</h3>${copy ? `<p>${copy}</p>` : ""}</div></div>`).join(""));
  const equationDescription = "The real wage paid to workers grows with the decline of π_L,t at an elasticity 1/ψ.";
  panel.querySelector(".eq-equation").setAttribute("aria-label", equationDescription);
  document.querySelector("ol.sr-only").children[11].innerHTML = [descriptions[variant], psiReading[3], piReading[3], equationDescription, "Δln w = −(1/ψ) Δln π_L."].join(" ");
  if (variant === "b") {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const still = () => motion.matches || new URLSearchParams(location.search).get("motion") === "reduced" || document.documentElement.dataset.forceReduced === "true";
    const rising = (from, to) => from - to > 14 ? `M62 ${from - 3}V${to + 2}m-5.5 8.5 5.5-8.5 5.5 8.5` : "";
    let animation = 0;
    let shown = null;
    // Round 31: the two profiles and the worker task share are painted with the chart brush
    // (gouache.js); clip paths follow the steeper profile's draw-in and the cutoff. The crisp
    // strokes stay wherever gouache.js is missing.
    const points = flatter => Array.from({ length: 101 }, (_, i) => [x(i / 100), y(i / 100, flatter)]);
    const steeper = points(), flatter = points(true);
    const lengths = pts => pts.map((p, i) => i ? Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0);
    const steeperLengths = lengths(steeper);
    const steeperLength = steeperLengths.reduce((sum, d) => sum + d, 0);
    function paint(svg) {
      const G = window.Gouache;
      const crisp = [".ei-flatter-profile", ".ei-steeper-profile", "[data-ei-band]"].map(selector => svg.querySelector(selector));
      const colors = crisp.map(node => (getComputedStyle(node).stroke.match(/[\d.]+/g) || []).slice(0, 3).map(Number));
      if (!G || colors.some(color => color.length < 3)) return false;
      const key = colors.join(" ");
      if (svg.dataset.paint === key) return true;
      svg.querySelectorAll("[data-ei-paint]").forEach(node => node.remove());
      const [rf, rs, rb] = crisp.map(node => parseFloat(getComputedStyle(node).strokeWidth) / 2 + 0.5);
      const layer = (pts, r, color, seed, attributes, options) => {
        const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), pad = r + 4;
        const x0 = Math.min(...xs) - pad, y0 = Math.min(...ys) - pad;
        return G.layer(x0, y0, Math.max(...xs) + pad - x0, Math.max(...ys) + pad - y0,
          ctx => G.stroke(ctx, pts, r, color, G.random(seed), options), ` data-ei-paint${attributes}`);
      };
      // The dashes keep the crisp pattern: .018 of the length painted, .014 bare.
      const flatterLength = lengths(flatter).reduce((sum, d) => sum + d, 0);
      crisp[0].insertAdjacentHTML("afterend", layer(flatter, rf, colors[0], 821, "", { dash: [.018 * flatterLength - 2 * rf, .014 * flatterLength] }));
      crisp[1].insertAdjacentHTML("afterend", layer(steeper, rs, colors[1], 822, ' clip-path="url(#ei-steeper-reveal)"'));
      crisp[2].insertAdjacentHTML("afterend", layer([[x(q0), 292], [612, 292]], rb, colors[2], 823, ' clip-path="url(#ei-band-reveal)"'));
      svg.insertAdjacentHTML("afterbegin", `<defs data-ei-paint><clipPath id="ei-steeper-reveal"><rect/><circle data-r="${rs + .4}"/></clipPath><clipPath id="ei-band-reveal"><rect/><circle r="${rb + .4}"/></clipPath></defs>`);
      svg.dataset.paint = key;
      svg.classList.add("is-painted");
      return true;
    }
    // The steeper profile shows as far as its crisp stroke's draw-in has reached; the band from
    // the cutoff on, with round ends as the crisp strokes had.
    function reveal(svg, q) {
      const set = (selector, values) => Object.entries(values).forEach(([name, value]) => svg.querySelector(selector).setAttribute(name, value));
      const drawn = 1 - (parseFloat(getComputedStyle(svg.querySelector(".ei-steeper-profile")).strokeDashoffset) || 0);
      let left = drawn * steeperLength, i = 1;
      while (i < steeper.length - 1 && left > steeperLengths[i]) left -= steeperLengths[i++];
      const [ax, ay] = steeper[i - 1], [bx, by] = steeper[i], t = Math.min(1, left / steeperLengths[i]);
      const tip = [ax + (bx - ax) * t, ay + (by - ay) * t];
      // The profile bends by less than a right angle, so everything behind the line through the
      // tip, square to the profile, is already drawn.
      set("#ei-steeper-reveal rect", { x: -1600, y: -1600, width: drawn > 0 ? (drawn < 1 ? 1600 : 3200) : 0, height: 3200, transform: `translate(${tip[0]} ${tip[1]}) rotate(${Math.atan2(by - ay, bx - ax) * 180 / Math.PI})` });
      const dot = svg.querySelector("#ei-steeper-reveal circle");
      Object.entries({ cx: tip[0], cy: tip[1], r: drawn > 0 ? dot.dataset.r : 0 }).forEach(([name, value]) => dot.setAttribute(name, value));
      set("#ei-band-reveal rect", { x: x(q), y: 0, width: 780 - x(q), height: 456 });
      set("#ei-band-reveal circle", { cx: x(q), cy: 292 });
    }
    let last = [1, 1, 1];
    // The arrows script later rebuilds the figure from a copy, so each draw looks it up again.
    function draw(progress, markers = 1, tags = 1) {
      last = [progress, markers, tags];
      const svg = panel.querySelector(".eq-profile svg");
      const set = (selector, values) => svg.querySelectorAll(selector).forEach(node => Object.entries(values).forEach(([name, value]) => node.setAttribute(name, value)));
      const q = q0 + (q1 - q0) * progress;
      set("[data-ei-cutoff]", { d: `M${x(q)} ${y(q)}V292` });
      set('[data-ei-level="steep"]', { d: `M44 ${y(q)}H${x(q)}` });
      set('[data-ei-rise="steep"]', { d: rising(y(q0), y(q)) });
      set('[data-ei-dot="steep"]', { cx: x(q), cy: y(q) });
      set("[data-ei-markers]", { opacity: markers });
      set("[data-ei-tag]", { opacity: tags });
      set("[data-ei-band]", { d: `M${x(q)} 292H612` });
      set("[data-ei-bracket]", { d: bracket(q, 324) });
      set("[data-ei-center]", { x: (x(q) + 612) / 2 });
      set("[data-ei-ai]", { x: (44 + x(q)) / 2 });
      if (paint(svg)) reveal(svg, q);
    }
    // After the figure and the curve (1.9 s): the markers, the cutoff's move, then the tags.
    function play() {
      cancelAnimationFrame(animation);
      if (still()) return draw(1);
      draw(0, 0, 0);
      const start = performance.now();
      const ease = (t, from, to) => { const u = Math.min(1, Math.max(0, (t - from) / (to - from))); return u * u * (3 - 2 * u); };
      const tick = now => {
        const t = now - start;
        draw(ease(t, 2000, 4200), ease(t, 1500, 1900), ease(t, 3500, 4200));
        if (t < 4200) animation = requestAnimationFrame(tick);
      };
      animation = requestAnimationFrame(tick);
    }
    function show(state) {
      state = Number(state);
      if (state === shown) return;
      if (state === 11) play();
      else { cancelAnimationFrame(animation); draw(1); }
      shown = state;
    }
    window.addEventListener("story:position", event => show(event.detail.state));
    motion.addEventListener("change", () => { if (still()) { cancelAnimationFrame(animation); draw(1); } });
    // Safari can run this before the stylesheets apply; paint again once they have.
    addEventListener("load", () => draw(...last));
    show(document.querySelector("[data-story-stage]").dataset.state);
  }
  if (variant !== "c") return;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let animation = 0;
  let active = false;
  function draw(progress) {
    const q = .6 + .2 * progress;
    figure.querySelector("[data-ei-cutoff]").setAttribute("d", `M${x(q)} ${y(q)}V292`);
    const dot = figure.querySelector("[data-ei-dot]");
    dot.setAttribute("cx",x(q)); dot.setAttribute("cy",y(q));
    figure.querySelector("[data-ei-band]").setAttribute("d",`M${x(q)} 292H612`);
    figure.querySelector("[data-ei-bracket]").setAttribute("d",bracket(q,387));
    figure.querySelector("[data-ei-after-label]").setAttribute("x",(x(q)+612)/2);
    figure.querySelector("[data-ei-share]").textContent = `${Math.round((1-q)*100)}%`;
    panel.dataset.iterationProgress = progress.toFixed(3);
  }
  function show(state) {
    const next = Number(state) === 11;
    if (next && !active) {
      cancelAnimationFrame(animation);
      if (motion.matches || new URLSearchParams(location.search).get("motion") === "reduced") draw(1);
      else {
        const start = performance.now() + 500;
        draw(0);
        function tick(now) {
          const t = Math.min(1,Math.max(0,(now-start)/2200));
          draw(t*t*(3-2*t));
          if (t<1) animation=requestAnimationFrame(tick);
        }
        animation=requestAnimationFrame(tick);
      }
    }
    if (!next) cancelAnimationFrame(animation);
    active=next;
  }
  window.addEventListener("story:position",event=>show(event.detail.state));
  motion.addEventListener("change",()=>{if(motion.matches){cancelAnimationFrame(animation);draw(1);}});
  show(document.querySelector("[data-story-stage]").dataset.state);
})();
