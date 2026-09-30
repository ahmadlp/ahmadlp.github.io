/* Theory Meets Data frames (Round 28, prototype D). Each returns {html, steps, cls, ...}.
   Prose is main-text wording from the paper; every number comes from the macros. */
(function () {
  const psi = '<span class="m">\u{1D713}</span>';
  const st = (from, tag, cls, html) => `<${tag} class="${cls ? cls + ' ' : ''}st" style="--from:${from}">${html}</${tag}>`;
  const chart = (name, label, attrs = '') => `<div class="chart" data-chart="${name}" data-label="${label}"${attrs}></div>`;

  /* Results scene: title, deck sentences (one per step), chart, conclusion and scope. */
  function scene({ title, deck, chartHtml, concl, conclFrom, scope, steps }) {
    const paras = deck.map((s, i) => !s ? '' : i ? st(i, 'p', '', s) : `<p>${s}</p>`).join('');
    const conclHtml = concl ? (conclFrom ? st(conclFrom, 'p', 'r-concl', concl) : `<p class="r-concl">${concl}</p>`) : '';
    return {
      steps, cls: 'results',
      html: `<div class="results-scene">
  <div class="r-caption"><h2 class="r-title">${title}</h2><div class="r-deck">${paras}</div></div>
  <div class="r-chart">${chartHtml}</div>
  <div class="r-foot">${conclHtml}${scope ? `<p class="r-scope">${scope}</p>` : ''}</div>
</div>`
    };
  }

  /* Math typeset by tools/make_math.py (XeLaTeX, STIX Two Math); width in em of the CSS font size. */
  const tex = (name, cls = '') => `<img class="tex${cls ? ' ' + cls : ''}" src="${TEX[name].src}" style="width:${TEX[name].w}em" alt="" draggable="false">`;

  const eqHtml = `<div class="eq" role="img" aria-label="Change in log wage equals one over psi times change in log of one over the labor share; jaggedness ${M.EmpInversePsiLow} to ${M.EmpInversePsiHigh}">${tex('eq-wide', 'tex-wide')}${tex('eq-narrow', 'tex-narrow')}</div>`;

  const F = {
    painting() {
      return {
        steps: 1, cls: 'paint',
        html: `<div class="paint"><picture><source media="(max-aspect-ratio: 6/5)" srcset="assets/theory-data-02-portrait-v1.png"><img class="theory-data-art" src="assets/theory-data-02-v1.png" width="1586" height="992" alt="The model and historical data." draggable="false"></picture><h2>Theory Meets Data</h2></div>`
      };
    },

    /* Cost slide D, "Numbers in place" (prototypes/costs): c_L(i) and c_M(i) appear with their pictures and travel
       into D(i); each count sits under what it counts, and the data points count up with their release dates. */
    costs() {
      const T = COST_TEX, R = COSTS.dates.length, cum = [];
      COSTS.points.reduce((a, v, k) => (cum[k] = a + v), 0);
      const sym = name => `<img class="cs-sym" src="${T[name].src}" style="width:${T[name].w}em;--d:${T[name].d}" alt="" draggable="false">`;
      const ratio = T.ratio.svg
        .replace("<g fill='#1d315a'>", "<g class='rest' fill='#1d315a'>")
        .replace('<rect ', "<rect class='rest' ")
        .replace("<g fill='#80526f'>", "<g class='num' fill='#80526f'>")
        .replace("<g fill='#435586'>", "<g class='den' fill='#435586'>");
      const art = (side, alt) => `<div class="cs-art cs-art--${side}"><img src="assets/evidence-cost-art.png" alt="${alt}" draggable="false"></div>`;
      const tag = (name, label, text) => `<div class="cs-tag">${chart(name, label)}<p>${text}</p></div>`;

      /* n = release dates shown so far: the count adds each date's data points. */
      const show = (el, n) => { el.querySelector('[data-count]').textContent = n >= R ? M.EmpTaskDateObs : (n ? cum[n - 1] : 0).toLocaleString('en-US'); };
      /* With the entrance off, measure how far c_L(i) and c_M(i) travel from their headings into D(i).
         The count keeps its final width while it counts up, so the columns beside it stay still. */
      let ready, raf = 0;
      function layout(el) {
        cancelAnimationFrame(raf);
        el.classList.add('done');
        const count = el.querySelector('[data-count]');
        count.style.width = '';
        show(el, R);
        count.style.width = count.getBoundingClientRect().width + 'px';
        const svg = el.querySelector('.cs-eq svg'), k = svg.getScreenCTM().a;
        for (const [g, from] of [['.num', '.cs-side--human .cs-sym'], ['.den', '.cs-side--ai .cs-sym']]) {
          const node = svg.querySelector(g), a = el.querySelector(from).getBoundingClientRect(), b = node.getBoundingClientRect();
          node.style.setProperty('--dx', (a.left - b.left) / k + 'px');
          node.style.setProperty('--dy', (a.top - b.top) / k + 'px');
          node.style.setProperty('--s', a.width / b.width);
        }
      }

      return {
        steps: 1, cls: 'evidence',
        html: `<div class="ev-slide cs">
  <header><h2>Worker and AI costs task by task</h2><p>We estimate ${psi} using data on ${M.EmpTasks} software engineering tasks drawn from ${M.EmpRepositories} open-source repositories in SWE-bench Verified.</p></header>
  <div class="ev-body"><div class="cs-scene">
    <div class="cs-side cs-side--human">
      <h3 class="human">Human cost${sym('cost-cl')}</h3>${art('human', 'A software developer at a laptop.')}
      <p><span>Time needed to complete the task</span> <span>× hourly wage of a software developer</span></p>
      ${tag('cost-tasks', `${M.EmpTasks} tasks, one square each`, `<strong>${M.EmpTasks}</strong> tasks from <strong>${M.EmpRepositories}</strong> repositories`)}
    </div>
    <div class="cs-ratio">
      <h3>Relative cost</h3>
      <div class="cs-eq" role="img" aria-label="D of i equals human cost over AI cost" style="width:${T.ratio.w}em">${ratio}</div>
      ${tag('cost-points', `Data points at each of ${M.EmpReleaseDates} release dates`, `<strong data-count>${M.EmpTaskDateObs}</strong> data points at <strong>${M.EmpReleaseDates}</strong> release dates`)}
    </div>
    <div class="cs-side cs-side--ai">
      <h3 class="machine">AI cost${sym('cost-cm')}</h3>${art('ai', 'An AI system at a computer.')}
      <p><span>API charge for the tokens used in a successful attempt</span> <span>× ${M.EmpIntangibleFactor} for deployment costs beyond tokens</span></p>
      ${tag('cost-systems', `${M.EmpConfigurations} AI systems, one dot each`, `<strong>${M.EmpConfigurations}</strong> AI systems evaluated by <span class="epoch">Epoch AI</span>`)}
    </div>
  </div></div>
</div>`,
        /* The entrance waits for the fonts and pictures, since the travel is measured on them; a resize shows the end state. */
        init(el) {
          el.classList.add('done');
          ready = Promise.all([document.fonts.ready, ...[...el.querySelectorAll('img')].map(img => img.decode().catch(() => {}))]);
          let size = innerWidth + 'x' + innerHeight;
          ready.then(() => addEventListener('resize', () => {
            if (size === innerWidth + 'x' + innerHeight) return;
            size = innerWidth + 'x' + innerHeight;
            layout(el);
          }));
        },
        /* Each time the frame becomes active: the human side, the AI side, the travel into D(i), then the count. */
        enter(el) {
          ready.then(() => {
            if (!el.classList.contains('is-active')) return;
            layout(el);
            if (document.documentElement.dataset.forceReduced === 'true' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            void el.offsetWidth;
            el.classList.remove('done');
            const cs = getComputedStyle(el.querySelector('.cs'));
            const td = parseFloat(cs.getPropertyValue('--t-data')), dt = parseFloat(cs.getPropertyValue('--dt')), t0 = performance.now();
            const tick = now => {
              const n = Math.max(0, Math.min(R, Math.floor(((now - t0) / 1000 - td) / dt) + 1));
              show(el, n);
              if (n < R) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
          });
        }
      };
    },

    /* Model validation on one beat: its own timeline (src/charts/validation.js) plays the calendar,
       the sectors and the test each time the frame becomes active; still, it shows the end. */
    validation() {
      const caps = ['May 2022: a national survey records wages in 61 sectors.', 'November 2022: ChatGPT is released.',
        'May 2025: more businesses use AI, and the survey records wages again.',
        'Each dot is one of 61 sectors: how much its wages grew between the two surveys.',
        'Wages grew less in the sectors more exposed to AI growth.', 'Given only AI growth, the model predicts nearly the same slope.',
        'The effects of AI growth on sectoral wages were not targeted in the calibration.'];
      const span = (from, until, tag, html) => `<${tag} class="st" style="--from:${from};--until:${until}">${html}</${tag}>`;
      const still = () => new URLSearchParams(location.search).has('state') || document.documentElement.dataset.forceReduced === 'true' || matchMedia('(prefers-reduced-motion: reduce)').matches;
      return {
        steps: 1, cls: 'evidence',
        html: `<div class="ev-slide ev-slide--validation" style="--step:6" data-step="6">
  <header>
    <div class="swap">${span(0, 3, 'h2', 'Historical validation')}${span(3, 99, 'h2', 'The model explains 2022–25 labor market effects')}</div>
    <div class="swap">${caps.map((c, i) => span(i, i < 6 ? i + 1 : 99, 'p', c)).join('')}</div>
  </header>
  <div class="ev-body stage">
    <canvas class="brush" aria-hidden="true"></canvas>
    <div class="chart story" data-chart="validation" data-label="Timeline from January 2022 to September 2025 with the two wage surveys, the release of ChatGPT and the share of businesses using AI; then wage growth by sector against exposure to AI growth, with the data and the model prediction"></div>
    <div class="chart results" data-chart="fig5" data-label="Model validation"></div>
  </div>
</div>`,
        init(el) { el.classList.add('done'); Validation.rest(el.querySelector('.ev-slide')); },
        enter(el) {
          const slide = el.querySelector('.ev-slide');
          if (still()) Validation.rest(slide); else Validation.play(slide, el);
        }
      };
    },

    r6() {
      return scene({
        steps: 2, title: 'AI token costs continue to fall',
        deck: [`The annual rate of decline slows from ${M.CfAnnualCostDeclinePct} percent initially to about ${M.CfTaperFiveYearInstantaneousDeclinePct} percent after five years.`,
          `Task costs fall by ${M.CfTaperFiveYearCostDeclinePct} percent after five years.`],
        chartHtml: chart('fig6', 'AI token costs continue to fall')
      });
    },

    r7() {
      return scene({
        steps: 2, title: 'Model’s 5-year Prediction:<br>Real wage rises, labor share falls',
        deck: ['The model’s prediction for the next five years.',
          'With an AI frontier five times less jagged, real wages barely change.'],
        chartHtml: chart('fig7', 'Model’s 5-year prediction: real wage rises, labor share falls')
      });
    },

    r8a() {
      return scene({
        steps: 2, title: 'Jagged adoption is better for workers with mobility',
        deck: ['', 'If AI adoption is jagged, mobile workers will retreat to lagging sectors and demand higher wages.'],
        chartHtml: chart('fig8a', 'Annual growth of average real wages')
      });
    },

    r8b() {
      return scene({
        steps: 2, title: 'Jagged adoption can trigger the Baumol effect',
        deck: ['Workers in fast-adopting sectors lose purchasing power with respect to lagging sectors.'],
        chartHtml: chart('fig8b', 'Five-year change in sector real wages')
      });
    },

    r9a() {
      return scene({
        steps: 2, title: 'Every education group gains',
        deck: ['Even when workers face large mobility frictions.'],
        chartHtml: chart('fig9a', 'Five-year real wage gains by education')
      });
    },

    r9b() {
      return scene({
        steps: 1, title: 'Within-sector reassignment',
        deck: ['Workers simply sort into niche tasks without leaving their sector.'],
        chartHtml: chart('fig9b', `Among the ${M.CfMobilityTailSectorCount} sectors with the highest AI exposure`),
        concl: 'Even the most AI-exposed sectors retain human tasks.'
      });
    }
  };

  /* One chart that builds from the data to the theory curve, the fits and the equation. */
  function build() {
    const s = (from, until, html, tag = 'p') => `<${tag} class="st" style="--from:${from};--until:${until}">${html}</${tag}>`;
    const lead = `By the end of the sample, AI completes ${M.EmpHeadlineAssignmentPercent} percent of the tasks below human cost, and for the median such task, human cost is ${M.EmpHeadlineMedianAdvantageInteger} times AI cost.`;
    const est = `Our two estimation methods yield ${psi}&nbsp;=&nbsp;${M.EmpPsiShareMedian} and ${psi}&nbsp;=&nbsp;${M.EmpPsiTaskLevel}, so each percent decline in labor’s share of GDP raises the real wage by ${M.EmpInversePsiLow} to ${M.EmpInversePsiHigh} percent.`;
    const fitSentence = `The fit implied by each estimate of ${psi} closely mimics the empirical distribution.`;
    return {
      steps: 6, cls: 'evidence',
      html: `<div class="ev-slide ev-slide--build">
  <header>
    <div class="swap">${s(0, 1, 'Distribution of the human-to-AI cost ratio', 'h2')}${s(1, 5, 'Estimating the jaggedness of the AI frontier', 'h2')}${s(5, 99, 'Estimation results', 'h2')}</div>
    <div class="swap">${s(0, 1, lead)}${s(1, 4, `A smaller ${psi} means greater differences in labor-vs-AI productivity profiles.`)}${s(4, 5, fitSentence)}${s(5, 99, est)}</div>
  </header>
  <div class="ev-body"><div class="build-stage">${chart('fig3build', 'Distribution of the human-to-AI cost ratio')}<div class="eq-card st" style="--from:5">${eqHtml}</div></div></div>
  <footer>${M.EmpTasks} tasks · ${M.EmpReleaseDates} release dates · ${M.EmpTaskDateObs} data points</footer>
</div>`,
      scrub(el, p) { Charts.setT(el.querySelector('.chart[data-chart="fig3build"]'), p); }
    };
  }

  window.R28_FRAMES = () => [F.painting(), F.costs(), build(), F.validation(), F.r6(), F.r7(), F.r8a(), F.r8b(), F.r9a(), F.r9b()];
})();
