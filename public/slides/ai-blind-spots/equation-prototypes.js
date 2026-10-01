/* Four review alternatives for the equation frame; the approved decks are untouched. */
(() => {
  "use strict";
  const option = Number(document.documentElement.dataset.equationOption);
  if (![1, 2, 3, 4].includes(option)) return;
  const stage = document.querySelector("[data-story-stage]");
  const psi = Number(window.R28.macros.EmpPsiTaskLevel);
  const M = (content, className = "") => `<math class="${className}" aria-hidden="true">${content}</math>`;
  const wage = `<mrow><mo>Δ</mo><mi mathvariant="normal">ln</mi><mspace width="0.15em"/><mi>w</mi></mrow>`;
  const dispersion = `<mfrac><mn>1</mn><mi>ψ</mi></mfrac>`;
  const tasks = `<mrow><mo>Δ</mo><mi mathvariant="normal">ln</mi><mspace width="0.15em"/><msub><mi>π</mi><mi>L</mi></msub></mrow>`;
  const equation = (extra = "") => `<div class="eq-equation ${extra}" role="math" aria-label="AI-driven growth raises the real wage in inverse proportion to labor’s share of economic tasks, with elasticity 1/ψ."><math display="block" aria-hidden="true"><mrow><mrow class="eq-wage">${wage}</mrow><mo>=</mo><mo>−</mo><mrow class="eq-dispersion">${dispersion}</mrow><mo>×</mo><mrow class="eq-tasks">${tasks}</mrow></mrow></math></div>`;
  const workers = () => `<div class="eq-workers" role="img" aria-label="The same six workers"><span class="eq-person" style="--col:0;--row:0"></span><span class="eq-person" style="--col:1;--row:0"></span><span class="eq-person" style="--col:2;--row:0"></span><span class="eq-person" style="--col:0;--row:1"></span><span class="eq-person" style="--col:1;--row:1"></span><span class="eq-person" style="--col:2;--row:1"></span></div>`;
  const products = ["medicine-output-capsule-v1.png", "medicine-variety-liquid-v1.png", "medicine-variety-tablet-v1.png", "medicine-variety-drops-v1.png", "medicine-variety-inhaler-v1.png", "medicine-variety-cream-v1.png", "medicine-output-capsule-v1.png", "medicine-variety-liquid-v1.png"];
  const medicines = () => `<div class="eq-medicines" role="img" aria-label="Eight medicines in six forms">${products.map((name, i) => `<img src="./assets/${name}" alt="" style="--item:${i}" />`).join("")}</div>`;
  const clock = `<svg class="eq-clock" viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="24"/><path d="M30 12v18l12 7"/><path class="eq-clock-tick" d="M30 7v4M53 30h-4M30 53v-4M7 30h4"/></svg>`;
  const taskStrip = (count = 16) => `<div class="eq-task-strip" aria-hidden="true">${Array.from({ length: count }, (_, i) => `<i class="${i >= count * .75 ? "is-human" : "is-ai"}" style="--item:${i}"></i>`).join("")}</div>`;
  const titles = [
    ["Fewer tasks can mean", "more purchasing power."],
    ["A smaller niche.", "A stronger relative advantage."],
    ["The same people.", "A more valuable niche."],
    ["How much more", "can the same hour buy?"],
  ];
  const subtitles = [
    "Three terms connect task specialization to what workers can afford.",
    "AI takes more tasks. People concentrate where their relative advantage is greatest.",
    "The equation describes the reallocation you just watched.",
    "Read the mechanism through one concrete example.",
  ];
  const bodies = {
    1: `<div class="eq-anatomy" role="group" aria-label="The log change in real wage equals one over psi times the log change in the inverse human task share.">
      <div class="eq-term eq-term--wage" data-reveal="1">${M(wage, "eq-wage")}<div class="eq-term-reading"><h3>Purchasing power rises</h3><p>The increase in what<br>an hour of work can buy.</p></div></div>
      <span class="eq-join" data-reveal="2">= −</span>
      <div class="eq-term eq-term--psi" data-reveal="2">${M(dispersion, "eq-dispersion")}<div class="eq-term-reading"><h3>The size of the gain</h3><p>Smaller ψ means more<br>variation in relative advantage.</p></div></div>
      <span class="eq-join" data-reveal="2">×</span>
      <div class="eq-term eq-term--tasks" data-reveal="3">${M(tasks, "eq-tasks")}<div class="eq-term-reading"><h3>The human niche shrinks</h3><p>As the human task share π<sub>L</sub><br>falls, its inverse rises.</p></div></div>
      <div class="eq-anatomy-reading" data-reveal="4"><img src="./assets/medicine-output-capsule-v1.png" alt="A painted capsule"/><p>People perform fewer tasks.<br><strong>Specialization makes their work buy more.</strong></p></div>
    </div>`,
    2: `<div class="eq-mechanism">
      <figure class="eq-profile" data-reveal="1">
        <svg viewBox="0 0 640 390" role="img" aria-label="Tasks ordered by relative human advantage. As the AI cutoff moves right, the human task niche narrows.">
          <text x="32" y="30" class="eq-svg-heading">Relative human advantage</text>
          <path class="eq-axis" d="M44 65V293H611"/>
          <path class="eq-old-cutoff" d="M330 155V293"/>
          <path class="eq-cost-profile" d="M44 270C198 261 320 221 421 170S554 86 606 58" pathLength="1"/>
          <path class="eq-cutoff" d="M462 146V293"/>
          <circle class="eq-cutoff-dot" cx="462" cy="146" r="6"/>
          <path class="eq-cutoff-arrow" d="M342 243H445m-8-6 8 6-8 6"/>
          <text x="387" y="226" text-anchor="middle" class="eq-svg-note">AI improves</text>
          <path class="eq-human-band" d="M462 293H610"/>
          <text x="150" y="327" text-anchor="middle" class="eq-svg-ai">AI performs these tasks</text>
          <text x="536" y="327" text-anchor="middle" class="eq-svg-human">Human niche</text>
          <text x="606" y="367" text-anchor="end" class="eq-svg-small">Tasks ordered by relative advantage →</text>
        </svg>
        <div class="eq-profile-people">${workers()}<p>The same six people specialize.</p></div>
      </figure>
      <div class="eq-mechanism-reading">
        <div data-reveal="2">${equation()}</div>
        <div class="eq-reading-point" data-reveal="2"><span class="eq-point-mark eq-tasks">01</span><div><h3>The human task share falls.</h3><p>AI takes more of the work, so π<sub>L</sub> gets smaller.</p></div></div>
        <div class="eq-reading-point" data-reveal="3"><span class="eq-point-mark eq-wage">02</span><div><h3>Purchasing power rises.</h3><p>Workers select the tasks where their relative advantage is strongest.</p></div></div>
        <div class="eq-reading-point" data-reveal="4"><span class="eq-point-mark eq-dispersion">03</span><div><h3>Dispersion determines how much.</h3><p>A smaller ψ gives a larger gain for the same fall in the task share.</p></div></div>
      </div>
    </div>`,
    3: `<div class="eq-story">
      <div class="eq-story-flow">
        <div class="eq-story-workers" data-reveal="1"><p class="eq-small-label">THE WORKFORCE</p>${workers()}${taskStrip()}<h3>Same people, fewer tasks.</h3><p>A smaller human task share,<br>within the same sector.</p></div>
        <div class="eq-story-link" data-reveal="2"><svg viewBox="0 0 240 82" aria-hidden="true"><path d="M8 58C70 12 170 12 229 57m-2-18 3 19-19-1"/></svg>${M(dispersion, "eq-dispersion")}<h3>Specialization</h3><p>People concentrate where<br>their relative edge is strongest.</p></div>
        <div class="eq-story-goods" data-reveal="3"><p class="eq-small-label">ONE HOUR’S PAY</p><div class="eq-clock-row">${clock}<span>The same hour</span></div>${medicines()}<h3>More medicine. More variety.</h3><p>A higher real wage,<br>measured in what work can buy.</p></div>
      </div>
      <div class="eq-story-equation" data-reveal="4">${equation()}<p>More variation in relative advantage means a larger gain from the same task-share decline.</p></div>
    </div>`,
    4: `<div class="eq-example">
      <div class="eq-example-rule" data-reveal="1">${equation()}<p>Use the paper’s task-level estimate: <span class="eq-dispersion">ψ = ${psi.toFixed(2)}</span>.</p></div>
      <div class="eq-example-body">
        <div class="eq-example-input" data-reveal="2"><p class="eq-small-label">HUMAN TASK SHARE RETAINED</p><div class="eq-big-number eq-tasks"><span data-share>50</span><span class="eq-number-unit">%</span></div><p class="eq-stat-caption">of the original human task share</p><div class="eq-example-tasks">${taskStrip(20)}</div><label class="eq-slider-label" for="eq-task-share">Change the size of the human niche</label><input id="eq-task-share" type="range" min="25" max="100" step="5" value="50" aria-valuetext="50 percent of the original human task share"/><div class="eq-range-labels"><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div></div>
        <div class="eq-example-calc" data-reveal="3"><svg viewBox="0 0 180 40" aria-hidden="true"><path d="M5 20H170m-10-8 10 8-10 8"/></svg><p><span data-share-ratio>2</span><sup>1/ψ</sup> = <strong data-factor>1.67</strong></p><span>real-wage multiplier</span></div>
        <div class="eq-example-result" data-reveal="4"><p class="eq-small-label">PURCHASING POWER</p><div class="eq-big-number eq-wage"><span class="eq-number-plus">+</span><span data-gain>66.5</span><span class="eq-number-unit">%</span></div><p class="eq-stat-caption">more for the same hour of work</p><div class="eq-example-medicines" data-example-medicines></div><p class="eq-example-unit">1 unit before → <strong data-factor>1.67</strong> after</p></div>
      </div>
      <p class="eq-example-interpretation" data-reveal="4" data-interpretation>Halving the human task share raises purchasing power by about two-thirds.</p>
    </div>`,
  };
  const panel = document.createElement("section");
  panel.className = `eq-study eq-study--${option}`;
  panel.dataset.eqStudy = String(option);
  panel.dataset.deckModule = "equation";
  panel.setAttribute("aria-labelledby", "eq-study-title");
  panel.innerHTML = `<header class="eq-study-header"><h2 id="eq-study-title">${titles[option - 1].map(line => `<span>${line}</span>`).join("")}</h2><p>${subtitles[option - 1]}</p></header><div class="eq-study-body">${bodies[option]}</div>`;
  stage.append(panel);
  function show({ state }) {
    const active = Number(state) === 11;
    panel.hidden = !active;
    panel.setAttribute("aria-hidden", String(!active));
    // Leaving cancels the reveal immediately, including during reverse scroll.
    panel.classList.toggle("is-playing", active);
  }
  window.addEventListener("story:position", event => show(event.detail));
  show({ state: stage.dataset.state });
  if (option === 4) {
    const input = panel.querySelector("input");
    const update = () => {
      const share = Number(input.value) / 100;
      const factor = Math.pow(1 / share, 1 / psi);
      const gain = (factor - 1) * 100;
      panel.querySelector("[data-share]").textContent = String(Math.round(share * 100));
      panel.querySelector("[data-gain]").textContent = gain.toFixed(1);
      panel.querySelectorAll("[data-factor]").forEach(node => node.textContent = factor.toFixed(2));
      panel.querySelector("[data-share-ratio]").textContent = Number((1 / share).toFixed(2)).toString();
      input.style.setProperty("--range-progress", `${(Number(input.value) - 25) / 75 * 100}%`);
      input.setAttribute("aria-valuetext", `${input.value} percent of the original human task share; ${gain.toFixed(1)} percent more purchasing power`);
      panel.querySelectorAll(".eq-example-tasks i").forEach((node, i) => { node.className = i >= 20 * (1 - share) ? "is-human" : "is-ai"; });
      panel.querySelector("[data-example-medicines]").innerHTML = Array.from({ length: Math.ceil(factor) }, (_, i) => {
        const fraction = Math.min(1, factor - i);
        return `<span style="--fraction:${fraction}"><img src="./assets/medicine-output-capsule-v1.png" alt=""/></span>`;
      }).join("");
      panel.querySelector("[data-example-medicines]").setAttribute("aria-label", `${factor.toFixed(2)} units of purchasing power`);
      panel.querySelector("[data-interpretation]").textContent = share === .5 ? "Halving the human task share raises purchasing power by about two-thirds." : share === 1 ? "With no change in the task share, this mechanism leaves purchasing power unchanged." : `Retaining ${Math.round(share * 100)}% of the human task share raises purchasing power by ${gain.toFixed(1)}%.`;
    };
    input.addEventListener("input", update);
    update();
  }
})();
