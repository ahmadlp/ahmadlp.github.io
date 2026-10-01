(() => {
  "use strict";

  const config = window.ROUND23_THEMES;

  const root = document.documentElement;
  const story = document.querySelector("[data-story]");
  const stage = document.querySelector("[data-stage]");
  const visual = document.querySelector("[data-visual]");
  const title = document.querySelector("[data-title]");
  const deck = document.querySelector("[data-deck]");
  const stageCopy = document.querySelector(".stage-copy");
  const panorama = document.querySelector("[data-panorama]");
  const panoramaMobile = document.querySelector("[data-panorama-mobile]");
  const panoramaCaption = document.querySelector("[data-panorama-caption]");
  const panoramaScene = document.querySelector("[data-panorama-scene]");
  const mechanismScene = document.querySelector("[data-mechanism-scene]");
  const horizontalGeometry = document.querySelector(".horizontal-geometry");
  const horizontalMachineAxis = document.querySelector("[data-horizontal-machine-axis]");
  const horizontalCutoff = document.querySelector("[data-horizontal-cutoff]");
  const horizontalHumanBracket = document.querySelector("[data-horizontal-human-bracket]");
  const curveGeometry = document.querySelector(".curve-geometry");
  const curveProfile = document.querySelector("[data-curve-profile]");
  const curveMachineProfile = document.querySelector("[data-curve-machine-profile]");
  const curveCutoff = document.querySelector("[data-curve-cutoff]");
  const curveCutoffCircle = curveCutoff?.querySelector("circle");
  const curveLaborShare = document.querySelector("[data-curve-labor-share]");
  const notationGeometry = document.querySelector("[data-notation-geometry]");
  const psiLeader = document.querySelector("[data-psi-leader]");
  const laborBracket = document.querySelector("[data-labor-bracket]");
  const wageBracket = document.querySelector("[data-wage-bracket]");
  const hourArrow = document.querySelector("[data-hour-arrow]");
  const modelKeys = {
    psi: document.querySelector('[data-model-key="psi"]'),
    labor: document.querySelector('[data-model-key="labor"]'),
    buys: document.querySelector('[data-model-key="buys"]'),
    wage: document.querySelector('[data-model-key="wage"]'),
  };
  const taskLayer = document.querySelector("[data-task-layer]");
  const workerLayer = document.querySelector("[data-worker-layer]");
  const workers = Array.from(document.querySelectorAll("[data-worker]"));
  const hourMark = document.querySelector("[data-hour-mark]");
  const goods = document.querySelector("[data-goods]");
  const query = new URLSearchParams(window.location.search);
  const example = window.ROUND23_THEME_KEY;
  const content = config[example];
  const beats = Array.from(document.querySelectorAll("[data-beat]"));
  // Beat order is the presentation sequence; scene IDs retain their animation clocks.
  const sceneOrder = beats.map(beat => Number(beat.dataset.beat));

  if (!story || !stage || !visual || !content || !horizontalGeometry || !curveGeometry) return;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const lerp = (start, end, progress) => start + (end - start) * progress;
  const smoothstep = (start, end, value) => {
    const progress = clamp((value - start) / (end - start), 0, 1);
    return progress * progress * (3 - 2 * progress);
  };

  const atlasPositions = ["0% 0%", "50% 0%", "100% 0%", "0% 100%", "50% 100%", "100% 100%"];
  const gridDesktop = [
    [17, 28],
    [50, 28],
    [83, 28],
    [17, 73],
    [50, 73],
    [83, 73],
  ];
  const gridMobile = [
    [25, 17],
    [75, 17],
    [25, 48],
    [75, 48],
    [25, 79],
    [75, 79],
  ];
  const horizontalTaskX = [145, 320, 495, 670, 845, 1020];
  const curveTaskFractions = [0.06, 0.23, 0.4, 0.57, 0.74, 0.91];
  const horizontalCutoffStart = 408;
  const horizontalCutoffEnd = 804;
  const horizontalWorkerStartDesktop = [
    [43, 71],
    [52, 71],
    [61, 71],
    [70, 71],
    [80, 71],
    [90, 71],
  ];
  const horizontalWorkerEndDesktop = [
    [74, 69],
    [74, 79],
    [82, 69],
    [82, 79],
    [90, 69],
    [90, 79],
  ];
  const horizontalWorkerStartMobile = [
    [42, 64],
    [52, 64],
    [62, 64],
    [72, 64],
    [82, 64],
    [91, 64],
  ];
  const horizontalWorkerEndMobile = [
    [66, 61],
    [66, 69],
    [77, 61],
    [77, 69],
    [88, 61],
    [88, 69],
  ];
  const hingeWorkerStartDesktop = [
    [38, 52],
    [49, 52],
    [59, 52],
    [70, 52],
    [80, 52],
    [90, 52],
  ];
  const hingeWorkerEndDesktop = [
    [69, 29],
    [77, 29],
    [85, 29],
    [69, 39],
    [77, 39],
    [85, 39],
  ];
  const hingeWorkerStartMobile = [
    [30, 43],
    [40, 43],
    [50, 43],
    [60, 43],
    [70, 43],
    [80, 43],
  ];
  const hingeWorkerEndMobile = [
    [55, 14],
    [66, 14],
    [77, 14],
    [55, 23],
    [66, 23],
    [77, 23],
  ];
  const workerThresholds = [0.02, 0.12, 0.23, 0.35, 0.48, 0.6];
  const goodPositionsDesktop = [
    [61, 74],
    [61, 63],
    [72, 74],
    [72, 63],
    [83, 74],
    [83, 63],
    [94, 74],
    [94, 63],
  ];
  const goodPositionsMobile = [
    [29, 71.5],
    [29, 62.5],
    [49, 71.5],
    [49, 62.5],
    [69, 71.5],
    [69, 62.5],
    [89, 71.5],
    [89, 62.5],
  ];
  let activeState = -1;
  const introTitleBottom = [];
  let frameRequested = false;
  let readingPosition = null;
  // Autoplay: a scroll forward reaches an exhibit, one graphic over several beats, and a playhead
  // plays it through to its last beat, one beat in 2.5 seconds, with the titles changing as they
  // would under the scroll. The page scrolls along, so the next scroll reaches the next exhibit.
  const BEAT_MS = 2500;
  // The beat an exhibit is entered at holds for 3 seconds, the time of its build.
  const HOLD_MS = 3000;
  // Scenes that start an exhibit although they follow the scene before: the mechanism (1), the
  // equation (11), the data module's frames (41 to 59), the second trade slide (31).
  const OPENS = new Set([1, 11, 41, 42, 48, 49, 51, 53, 55, 57, 59, 31]);
  // Idle scroll at the start of a beat, skipped when a scroll starts the beat (by scene). Exhibits
  // entered at 1 and 11 play in from the beat before; other exhibits start at rest. The horses'
  // opener (24) plays on into their chart (25 to 29).
  const LEAD_IN = { 1: 0.45, 8: 0.4, 9: 0.25, 10: 0.25, 11: 0.35, 25: 0.46, 38: 0.18 };
  // Beats that hold like an exhibit's first when the playhead reaches them: the horses' chart (25),
  // after their opener.
  const PAUSES = new Set([25]);
  // A graphic on a single beat has no hold; its own build runs up to 4.5 seconds, the validation
  // slide's timeline (48) 21.5 seconds.
  const BUILD_MS = 4500;
  const BUILD = { 48: 21500 };
  const build = frame => BUILD[sceneOrder[frame]] ?? BUILD_MS;
  // The mechanism (1 to 10) plays 25% faster, its beats and its hold alike.
  const PACE = { 1: 1.25 };
  let playhead = null;
  let target = 0;
  let scrollFrame = 0;
  let holdAt = null;
  let holdUntil = 0;
  let playTime = 0;
  let entered = { start: -1, time: 0 };

  document.title = `AI's Blind Spots: Comparative Advantage and Wage Growth under Jagged AGI`;
  const coverArt = document.querySelector("[data-cover-art]");
  coverArt.src = content.cover;
  coverArt.alt = content.coverAlt;
  document.querySelector("[data-cover-example]").textContent =
    content.exploreName;
  panorama.src = content.panorama;
  panorama.width = 1774;
  panorama.height = 887;
  panoramaCaption.textContent = content.panoramaCaption;
  panoramaMobile.querySelectorAll("span").forEach((panel) => {
    panel.style.backgroundImage = `url("${content.panoramaMobile || content.panorama}")`;
  });

  document.querySelectorAll("[data-example-link]").forEach((link) => {
    if (link.dataset.exampleLink === example) link.setAttribute("aria-current", "page");
  });

  content.tasks.forEach((label, index) => {
    const node = document.createElement("div");
    node.className = "task-node";
    node.dataset.task = String(index);
    node.dataset.assignment = "unassigned";
    node.style.setProperty("--task-atlas", `url("${content.taskImages?.[index] || content.atlas}")`);
    if (content.taskImages) node.classList.add("task-node--single-art");
    node.style.setProperty("--atlas-position", atlasPositions[index]);
    node.innerHTML = `<div class="task-art"></div><span class="task-label">${label}</span>`;
    taskLayer.append(node);
  });

  content.purchasingGoods.forEach((source, index) => {
    const unit = document.createElement("span");
    unit.className = `good-unit good-unit--${index + 1}`;
    unit.dataset.good = String(index);
    const image = document.createElement("img");
    image.src = source;
    image.alt = "";
    image.draggable = false;
    unit.append(image);
    goods.append(unit);
  });

  const tasks = Array.from(document.querySelectorAll("[data-task]"));
  const goodUnits = Array.from(document.querySelectorAll("[data-good]"));

  // Titles use the available width and wrap naturally at the inherited font size.
  function fitHeadline(heading) {
    if (!heading || heading.getBoundingClientRect().width === 0) return;
    heading.style.removeProperty("font-size");

  }

  function fitHeadlines() {
    document.querySelectorAll(".title-cover h1, .stage-title, .r12-opener h2, .trade-scene h2").forEach(fitHeadline);
  }

  window.round23FitHeadlines = fitHeadlines;

  function updateCopy(state) {
    if (state === activeState) return;
    activeState = state;
    stage.dataset.state = String(state);
    if (state >= 14) return;
    title.replaceChildren(...content.titles[state].split("\n").flatMap((line, index) => {
      const span = document.createElement("span");
      span.className = "headline-line";
      span.textContent = line;
      return index ? [document.createTextNode(" "), span] : [span];
    }));
    deck.textContent = content.decks[state];
    fitHeadline(title);
  }

  // Callouts share the chart's measured coordinates, including SVG letterboxing.
  // No independent arrow viewBox or guessed percentage is used for their targets.
  function layoutNotations(mobile) {
    const bounds = mechanismScene.getBoundingClientRect();
    const local = (x, y) => {
      const point = svgPointToPercent(curveGeometry, x, y);
      return { x: point.x * bounds.width / 100, y: point.y * bounds.height / 100 };
    };
    const place = (key, x, y) => {
      key.style.left = `${clamp(x, 6, bounds.width - key.offsetWidth - 6)}px`;
      key.style.top = `${y}px`;
    };
    notationGeometry.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);

    // The slope note sits above the curve's steep end, clear of the workers, with an arrow that
    // meets the curve square between the last two tasks, or at its top end where those tasks
    // overlap. On phones the note sits right of the top end with a short arrow.
    const note = modelKeys.psi;
    const length = curveProfile.getTotalLength();
    const onCurve = (fraction) => {
      const point = curveProfile.getPointAtLength(length * fraction);
      return local(point.x, point.y);
    };
    const [fifth, sixth] = tasks.slice(-2).map((task) => task.getBoundingClientRect());
    const taskGap =
      Math.hypot(sixth.left - fifth.left, sixth.top - fifth.top) - (fifth.width + sixth.width) / 2;
    if (mobile) {
      const end = onCurve(1);
      const left = end.x + 26;
      note.style.maxWidth = `${bounds.width - left - 6}px`;
      place(note, left, end.y - note.offsetHeight / 2);
      psiLeader.setAttribute(
        "d",
        `M${left - 5} ${end.y} H${end.x + 7} M${end.x + 13} ${end.y - 4} L${end.x + 7} ${end.y} L${end.x + 13} ${end.y + 4}`,
      );
    } else {
      const fraction = taskGap >= 20 ? 0.825 : 1;
      const target = onCurve(fraction);
      const before = onCurve(fraction - 0.01);
      const run = Math.hypot(target.x - before.x, target.y - before.y) || 1;
      const normal = { x: (target.y - before.y) / run, y: -(target.x - before.x) / run };
      const tip = { x: target.x + normal.x * 9, y: target.y + normal.y * 9 };
      const crowd = workers.map((worker) => worker.getBoundingClientRect());
      const crowdLeft = Math.min(...crowd.map((rect) => rect.left)) - bounds.left - 24;
      const crowdRight = Math.max(...crowd.map((rect) => rect.right)) - bounds.left + 24;
      const crowdTop = Math.min(...crowd.map((rect) => rect.top)) - bounds.top;
      const cutTop = curveCutoff.querySelector("line").getBoundingClientRect().top - bounds.top;
      note.style.maxWidth = `${Math.min(400, bounds.width - 12)}px`;
      const left = clamp(tip.x - 28, 6, bounds.width - note.offsetWidth - 6);
      const overCrowd = left < crowdRight && left + note.offsetWidth > crowdLeft;
      const bottom = Math.min(cutTop, sixth.top - bounds.top, overCrowd ? crowdTop : Infinity) - 30;
      place(note, left, bottom - note.offsetHeight);
      const from = { x: note.offsetLeft + 16, y: bottom + 8 };
      const bend = 0.4 * (tip.y - from.y);
      const control = { x: tip.x + normal.x * bend, y: tip.y + normal.y * bend };
      const reach = Math.hypot(tip.x - control.x, tip.y - control.y) || 1;
      const ux = (tip.x - control.x) / reach;
      const uy = (tip.y - control.y) / reach;
      psiLeader.setAttribute(
        "d",
        `M${from.x} ${from.y} Q${control.x} ${control.y} ${tip.x} ${tip.y} ` +
          `M${tip.x - ux * 8 - uy * 4.5} ${tip.y - uy * 8 + ux * 4.5} L${tip.x} ${tip.y} ` +
          `L${tip.x - ux * 8 + uy * 4.5} ${tip.y - uy * 8 - ux * 4.5}`,
      );
    }

    const axisEnd = local(676, 338);
    const axisStart = local(Number(curveLaborShare.getAttribute("x1")), 338);
    const bracketY = axisEnd.y + 10;
    laborBracket.setAttribute("d", `M${axisStart.x} ${bracketY} v8 H${axisEnd.x} v-8`);
    place(modelKeys.labor, (axisStart.x + axisEnd.x - modelKeys.labor.offsetWidth) / 2, bracketY + 16);

    const outputBounds = goodUnits.map((unit) => unit.getBoundingClientRect());
    const outputLeft = Math.min(...outputBounds.map((rect) => rect.left)) - bounds.left;
    const outputRight = Math.max(...outputBounds.map((rect) => rect.right)) - bounds.left;
    const outputBottom = Math.max(...outputBounds.map((rect) => rect.bottom)) - bounds.top;
    wageBracket.setAttribute("d", `M${outputLeft + 8} ${outputBottom + 8} v9 H${outputRight - 8} v-9`);
    place(modelKeys.wage, (outputLeft + outputRight - modelKeys.wage.offsetWidth) / 2, outputBottom + 30);

    // One hour of work, left of the basket, buys the basket: an arrow from the clock to the goods.
    const clock = hourMark.querySelector("svg").getBoundingClientRect();
    const arrowY = clock.top + clock.height / 2 - bounds.top;
    const arrowStart = clock.right - bounds.left + 10;
    const arrowEnd = outputLeft + goodUnits[0].offsetWidth * 0.22;
    hourArrow.setAttribute(
      "d",
      `M${arrowStart} ${arrowY} H${arrowEnd} M${arrowEnd - 7} ${arrowY - 5} L${arrowEnd} ${arrowY} L${arrowEnd - 7} ${arrowY + 5}`,
    );
    place(
      modelKeys.buys,
      (arrowStart + arrowEnd - modelKeys.buys.offsetWidth) / 2,
      arrowY - modelKeys.buys.offsetHeight - 3,
    );
  }

  function svgPointToPercent(svg, x, y) {
    const matrix = svg.getScreenCTM?.();
    const bounds = mechanismScene.getBoundingClientRect();
    if (!matrix || bounds.width <= 0 || bounds.height <= 0) return { x: 50, y: 50 };
    const point = svg.createSVGPoint();
    point.x = x;
    point.y = y;
    const screen = point.matrixTransform(matrix);
    return {
      x: ((screen.x - bounds.left) / bounds.width) * 100,
      y: ((screen.y - bounds.top) / bounds.height) * 100,
    };
  }

  function pointOnCurve(fraction) {
    const length = curveProfile.getTotalLength();
    const point = curveProfile.getPointAtLength(length * fraction);
    return {
      svg: point,
      css: svgPointToPercent(curveGeometry, point.x, point.y),
    };
  }

  function setTask(node, x, y, size, radius, labelOpacity, opacity = 1) {
    node.style.setProperty("--task-x", `${x}%`);
    node.style.setProperty("--task-y", `${y}%`);
    node.style.setProperty("--task-size", `${size}px`);
    node.style.setProperty("--task-radius", `${radius}px`);
    node.style.setProperty("--task-label-opacity", String(labelOpacity));
    node.style.setProperty("--task-node-opacity", String(opacity));
  }

  const joined = frame => sceneOrder[frame] - sceneOrder[frame - 1] === 1 && !OPENS.has(sceneOrder[frame]);
  function exhibitStart(frame) {
    while (frame > 0 && joined(frame)) frame -= 1;
    return frame;
  }
  function exhibitEnd(frame) {
    while (frame < beats.length - 1 && joined(frame + 1)) frame += 1;
    return frame;
  }
  const pace = frame => PACE[sceneOrder[exhibitStart(frame)]] ?? 1;
  // The first pause after the playhead, up to the exhibit's last beat.
  function pauseAfter(at) {
    for (let frame = Math.floor(at) + 1; frame <= target; frame += 1) if (PAUSES.has(sceneOrder[frame])) return frame;
    return null;
  }

  // The progress cue's clock. An exhibit entered by a scroll plays step by step, a step being a
  // beat's move in and its hold; steps[k] is the time played when step k ends, in ms.
  function playSteps(start, end) {
    if (start === end) return [build(start)];
    const steps = [(1 - (LEAD_IN[sceneOrder[start]] ?? 1)) * BEAT_MS + HOLD_MS];
    for (let frame = start + 1; frame <= end; frame += 1) {
      steps.push(steps.at(-1) + BEAT_MS + (PAUSES.has(sceneOrder[frame]) && frame < end ? HOLD_MS : 0));
    }
    return steps.map(step => step / pace(start));
  }
  // The time left to play, in ms: the hold under way, the beats to go and the holds ahead.
  function timeLeft(now) {
    if (playhead === null) return 0;
    const start = exhibitStart(target);
    if (exhibitEnd(target) === start) return start === entered.start ? Math.max(0, entered.time + build(start) - now) : 0;
    let left = Math.max(0, holdUntil - now) + (target - playhead) * BEAT_MS / pace(target);
    for (let frame = holdAt; frame !== null && frame < target; frame = pauseAfter(frame)) left += HOLD_MS / pace(target);
    return left;
  }

  // A scroll forward within the exhibit on screen plays on from the beat before; into another
  // exhibit it plays in or lands at rest, holds, and plays on; either way to the exhibit's last
  // beat. A scroll back lands at rest and stops.
  function playTo(scrolled, now) {
    if (playhead === null) {
      playhead = target = scrolled;
    } else if (scrolled > scrollFrame) {
      const scene = sceneOrder[scrolled];
      const start = exhibitStart(scrolled);
      holdAt = null;
      holdUntil = 0;
      if (start === exhibitStart(Math.round(playhead))) {
        playhead = Math.max(playhead, scrolled - 1 + (LEAD_IN[scene] || 0));
      } else {
        playhead = scrolled === start && scene in LEAD_IN ? scrolled - 1 + LEAD_IN[scene] : scrolled;
        holdAt = scrolled;
        entered = { start, time: now };
      }
      target = exhibitEnd(scrolled);
      holdAt ??= pauseAfter(playhead);
    } else if (scrolled < scrollFrame) {
      playhead = target = scrolled;
      holdAt = null;
      holdUntil = 0;
    } else {
      const elapsed = Math.max(0, now - Math.max(playTime, holdUntil));
      playhead = Math.min(holdAt ?? target, playhead + elapsed * pace(target) / BEAT_MS);
    }
    if (playhead === holdAt) {
      holdAt = pauseAfter(playhead);
      if (target > playhead) holdUntil = now + HOLD_MS / pace(target);
    }
    scrollFrame = scrolled;
    // The page follows the playhead, a beat at a time.
    if (Math.round(playhead) > scrollFrame) {
      scrollFrame = Math.round(playhead);
      scrollToPosition(scrollFrame);
    }
    playTime = now;
    if (playhead !== target) requestRender();
    return playhead;
  }

  // Round 31: the AI line, the curve and the labor share are painted with the chart brush
  // (gouache.js) at the screen scale, once per size, and clip paths reveal them up to the
  // cutoff. The crisp strokes stay wherever gouache.js is missing.
  const svgNS = "http://www.w3.org/2000/svg";
  function svgNode(parent, tag, attributes) {
    const node = document.createElementNS(svgNS, tag);
    Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, value));
    parent.append(node);
    return node;
  }
  let mechanismPaint = null;
  function paintMechanism() {
    const G = window.Gouache;
    const scale = curveGeometry.getScreenCTM()?.a;
    if (!G || !(scale > 0)) return;
    const marks = [horizontalMachineAxis, curveProfile, curveMachineProfile, curveLaborShare];
    const colors = marks.map(node => (getComputedStyle(node).stroke.match(/[\d.]+/g) || []).slice(0, 3).map(Number));
    if (colors.some(color => color.length < 3)) return;
    const key = [scale.toFixed(3), devicePixelRatio, ...colors].join(" ");
    if (mechanismPaint?.key === key) return;
    if (!mechanismPaint) {
      const layer = (crisp, clip) => {
        const image = document.createElementNS(svgNS, "image");
        image.setAttribute("preserveAspectRatio", "none");
        if (clip) image.setAttribute("clip-path", `url(#${clip})`);
        crisp.after(image);
        return image;
      };
      const reveal = (svg, id) => {
        const clip = svgNode(svg.querySelector("defs") || svgNode(svg, "defs", {}), "clipPath", { id });
        return { rect: svgNode(clip, "rect", {}), tip: svgNode(clip, "circle", {}) };
      };
      mechanismPaint = {
        axis: layer(horizontalMachineAxis, "mechanism-axis-reveal"),
        underlay: layer(curveProfile),
        curve: layer(curveMachineProfile, "mechanism-curve-reveal"),
        labor: layer(curveLaborShare, "mechanism-labor-reveal"),
        axisReveal: reveal(horizontalGeometry, "mechanism-axis-reveal"),
        curveReveal: reveal(curveGeometry, "mechanism-curve-reveal"),
        laborReveal: reveal(curveGeometry, "mechanism-labor-reveal"),
      };
      mechanismPaint.labor.setAttribute("class", "curve-labor-share-paint");
    }
    const length = curveProfile.getTotalLength();
    const steps = Math.ceil(length * scale / 22);
    const curve = Array.from({ length: steps + 1 }, (_, i) => {
      const point = curveProfile.getPointAtLength(length * i / steps);
      return [point.x, point.y];
    });
    const laborStart = curveProfile.getPointAtLength(length * 0.3).x;
    const radius = node => parseFloat(getComputedStyle(node).strokeWidth) / 2 + 0.7;
    // Each line in screen pixels, on a canvas over its own box in the viewBox.
    const paint = (image, points, node, color, seed) => {
      const r = radius(node), pad = (r + 4) / scale;
      const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
      const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
      const w = Math.max(...xs) + pad - x, h = Math.max(...ys) + pad - y;
      const canvas = document.createElement("canvas");
      const ctx = G.fit(canvas, w * scale, h * scale);
      G.stroke(ctx, points.map(([px, py]) => [(px - x) * scale, (py - y) * scale]), r, color, G.random(seed));
      Object.entries({ x, y, width: w, height: h, href: canvas.toDataURL() })
        .forEach(([name, value]) => image.setAttribute(name, value));
      // The radius of the round end, in the viewBox.
      return (r + 0.5) / scale;
    };
    mechanismPaint.axisTip = paint(mechanismPaint.axis, [[Number(horizontalMachineAxis.getAttribute("x1")), 338], [horizontalCutoffEnd, 338]], horizontalMachineAxis, colors[0], 810);
    // The same seed for the curve and its underlay, so the AI colour covers the lighter coat.
    paint(mechanismPaint.underlay, curve, curveProfile, colors[1], 811);
    mechanismPaint.curveTip = paint(mechanismPaint.curve, curve, curveMachineProfile, colors[2], 811);
    mechanismPaint.laborTip = paint(mechanismPaint.labor, [[laborStart, 338], [676, 338]], curveLaborShare, colors[3], 812);
    mechanismPaint.key = key;
    horizontalGeometry.classList.add("is-painted");
    curveGeometry.classList.add("is-painted");
  }
  // The painted lines show up to the cutoff, with a round end as the crisp strokes had.
  function revealMechanism(axisEnd, cutoffPoint, curveAngle, laborStart) {
    const set = (node, attributes) => Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, value));
    const { axisReveal, curveReveal, laborReveal, axisTip, curveTip, laborTip } = mechanismPaint;
    set(axisReveal.rect, { x: 0, y: 0, width: axisEnd, height: 650 });
    set(axisReveal.tip, { cx: axisEnd, cy: 338, r: axisTip });
    // The curve bends by less than a right angle, so everything behind the line through the
    // cutoff, square to the curve, comes before the cutoff.
    set(curveReveal.rect, { x: -2400, y: -2400, width: 2400, height: 4800, transform: `translate(${cutoffPoint.x} ${cutoffPoint.y}) rotate(${curveAngle})` });
    set(curveReveal.tip, { cx: cutoffPoint.x, cy: cutoffPoint.y, r: curveTip });
    set(laborReveal.rect, { x: laborStart, y: 0, width: 1200 - laborStart, height: 650 });
    set(laborReveal.tip, { cx: laborStart, cy: 338, r: laborTip });
  }

  function render(scrollPosition, now = performance.now()) {
    const mobile = window.innerWidth <= 760;
    root.dataset.coverVisible = String(!query.has("state") && story.getBoundingClientRect().top > 0);
    const reduced = query.has("state") || root.dataset.forceReduced === "true" || matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Reduced motion keeps the scroll-driven animation.
    let at = scrollPosition;
    if (reduced) playhead = null;
    else at = playTo(clamp(Math.round(scrollPosition), 0, beats.length - 1), now);
    const frame = clamp(Math.round(at), 0, beats.length - 1);
    const state = sceneOrder[frame];
    const position = state + at - frame;
    if (!query.has("state")) readingPosition = scrollPosition;
    stage.dataset.frame = String(frame);
    stage.dataset.scrollPosition = String(scrollPosition);
    updateCopy(state);
    stage.dataset.position = String(position);
    stage.dataset.chapter = beats[frame].dataset.chapter || (state < 14 ? "mechanism" : state < 24 ? "results" : state < 30 ? "horses" : "trade");
    const panoramaOut = smoothstep(0.55, 0.96, position);
    const tasksIn = smoothstep(0.68, 1.02, position);
    // On desktop, the opening painting and the task grid sit a fixed gap below the first two titles.
    const visualTop = mechanismScene.getBoundingClientRect().top;
    if (state <= 1) introTitleBottom[state] = stageCopy.getBoundingClientRect().bottom - visualTop;
    const introTarget = (frameState) => {
      const bottom = introTitleBottom[frameState] ?? introTitleBottom[1 - frameState];
      return bottom === undefined || mobile ? Infinity : bottom + 44;
    };
    const panoramaImage = panoramaScene.querySelector("img");
    const paintedHeight = Math.min(
      panoramaImage.offsetHeight,
      panoramaImage.offsetWidth * panoramaImage.naturalHeight / (panoramaImage.naturalWidth || 1),
    );
    const panoramaLift = Math.max(0, panoramaImage.offsetTop + (panoramaImage.offsetHeight - paintedHeight) / 2 - introTarget(0));
    const horizontalIn = smoothstep(1.55, 1.95, position);
    const curveTransition = smoothstep(3.38, 3.82, position);
    const mechanismOut = smoothstep(10.38, 10.62, position);
    const mechanismVisibility = 1 - mechanismOut;
    const horizontalOpacity = horizontalIn * (1 - curveTransition) * mechanismVisibility;
    const curveOpacity = curveTransition * mechanismVisibility;
    const horizontalSweep = smoothstep(2.18, 3.68, position);
    const curveSelection = smoothstep(4.28, 7.0, position);
    const mathEntered = smoothstep(7.5, 7.82, position);
    const plainLabelOpacity = 1 - mathEntered;

    panoramaScene.style.opacity = String(1 - panoramaOut);
    panoramaScene.style.transform = `translateY(${lerp(0, 7, panoramaOut) - panoramaLift}px) scale(${lerp(1, 0.988, panoramaOut)})`;
    mechanismScene.style.opacity = String(Math.max(tasksIn, horizontalIn, curveTransition));
    mechanismScene.style.setProperty("--horizontal-opacity", String(horizontalOpacity));
    mechanismScene.style.setProperty("--curve-opacity", String(curveOpacity));
    mechanismScene.style.setProperty("--task-opacity", String(tasksIn * mechanismVisibility));
    mechanismScene.style.setProperty("--plain-label-opacity", String(plainLabelOpacity));
    const curveLabelBase = curveOpacity * plainLabelOpacity;
    document.querySelector(".curve-label--ai").style.opacity = String(curveLabelBase);
    document.querySelector(".curve-label--human").style.opacity = String(
      curveLabelBase * smoothstep(3.65, 3.95, position),
    );
    document.querySelector(".curve-label--growth").style.opacity = String(
      curveLabelBase * smoothstep(3.65, 3.95, position),
    );

    const horizontalCutoffX = lerp(horizontalCutoffStart, horizontalCutoffEnd, horizontalSweep);
    horizontalMachineAxis.setAttribute("x2", horizontalCutoffX.toFixed(2));
    horizontalCutoff.setAttribute("transform", `translate(${horizontalCutoffX.toFixed(2)} 0)`);
    horizontalHumanBracket.setAttribute(
      "d",
      `M${horizontalCutoffX.toFixed(2)} 542 V528 H1108 V542`,
    );
    const horizontalCutoffCss = svgPointToPercent(horizontalGeometry, horizontalCutoffX, 338);
    const horizontalLabelCss = svgPointToPercent(horizontalGeometry, horizontalCutoffX, 174);
    const horizontalEndCss = svgPointToPercent(horizontalGeometry, 1108, 338);
    mechanismScene.style.setProperty("--horizontal-cutoff-left", `${horizontalCutoffCss.x}%`);
    mechanismScene.style.setProperty("--horizontal-cutoff-label-top", `${horizontalLabelCss.y}%`);
    mechanismScene.style.setProperty(
      "--horizontal-niche-left",
      `${(horizontalCutoffCss.x + horizontalEndCss.x) / 2}%`,
    );

    const profileLength = curveProfile.getTotalLength();
    const profileShare = lerp(0.3, 0.655, curveSelection);
    curveMachineProfile.style.setProperty("--curve-machine-length", String(profileShare));
    const cutoffPoint = curveProfile.getPointAtLength(profileLength * profileShare);
    curveCutoff.setAttribute("transform", `translate(${cutoffPoint.x.toFixed(2)} 0)`);
    const curveCutoffLabelCss = svgPointToPercent(curveGeometry, cutoffPoint.x, 86);
    mechanismScene.style.setProperty("--curve-cutoff-left", `${curveCutoffLabelCss.x}%`);
    mechanismScene.style.setProperty("--curve-cutoff-label-top", `${curveCutoffLabelCss.y}%`);
    if (curveCutoffCircle) curveCutoffCircle.setAttribute("cy", cutoffPoint.y.toFixed(2));
    curveLaborShare.setAttribute("x1", cutoffPoint.x.toFixed(2));
    curveLaborShare.setAttribute("x2", "676");
    curveCutoff.querySelector("line").setAttribute("y2", String(lerp(535, 338, mathEntered)));
    paintMechanism();
    if (mechanismPaint) {
      const cutoffLength = profileLength * profileShare;
      const behind = curveProfile.getPointAtLength(Math.max(0, cutoffLength - 1));
      const ahead = curveProfile.getPointAtLength(Math.min(profileLength, cutoffLength + 1));
      const curveAngle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180 / Math.PI;
      revealMechanism(horizontalCutoffX, cutoffPoint, curveAngle, cutoffPoint.x);
    }

    const grid = mobile ? gridMobile : gridDesktop;
    const gridSize = mobile
      ? clamp(window.innerWidth * 0.27, 88, 116)
      : clamp(Math.min(window.innerWidth * 0.125, window.innerHeight * 0.19), 122, 174);
    const orderedSize = mobile ? 46 : 74;
    const curveSize = mobile ? 36 : 68;
    const gridToHorizontal = smoothstep(1.15, 1.92, position);
    const horizontalToCurve = curveTransition;
    const labelsAtGrid = 1 - smoothstep(1.1, 1.42, position);
    const sceneHeight = mechanismScene.offsetHeight || 1;
    const gridLift = Math.max(0, grid[0][1] / 100 * sceneHeight - gridSize / 2 - introTarget(1)) / sceneHeight * 100;

    tasks.forEach((node, index) => {
      const horizontalPoint = svgPointToPercent(horizontalGeometry, horizontalTaskX[index], 338);
      const curvePoint = pointOnCurve(curveTaskFractions[index]).css;
      const orderedX = lerp(horizontalPoint.x, curvePoint.x, horizontalToCurve);
      const orderedY = lerp(horizontalPoint.y, curvePoint.y, horizontalToCurve);
      const orderedNodeSize = lerp(orderedSize, curveSize, horizontalToCurve);
      const x = lerp(grid[index][0], orderedX, gridToHorizontal);
      const y = lerp(grid[index][1] - gridLift, orderedY, gridToHorizontal);
      const size = lerp(gridSize, orderedNodeSize, gridToHorizontal);
      const radius = lerp(4, orderedNodeSize / 2, gridToHorizontal);
      setTask(node, x, y, size, radius, labelsAtGrid, 1);

      if (position < 1.5) {
        node.dataset.assignment = "unassigned";
      } else if (horizontalToCurve < 0.5) {
        node.dataset.assignment =
          horizontalTaskX[index] < horizontalCutoffX ? "machine" : "human";
      } else {
        node.dataset.assignment =
          curveTaskFractions[index] < profileShare ? "machine" : "human";
      }
    });

    const horizontalWorkerIn =
      smoothstep(2.08, 2.34, position) * (1 - smoothstep(3.5, 3.78, position));
    const curveWorkerIn =
      smoothstep(4.05, 4.3, position) * (1 - mechanismOut);
    const workerOpacity = Math.max(horizontalWorkerIn, curveWorkerIn);
    mechanismScene.style.setProperty("--worker-opacity", String(workerOpacity));
    const workerStart = mobile ? horizontalWorkerStartMobile : horizontalWorkerStartDesktop;
    const workerEnd = mobile ? horizontalWorkerEndMobile : horizontalWorkerEndDesktop;
    const hingeStart = mobile ? hingeWorkerStartMobile : hingeWorkerStartDesktop;
    const hingeEnd = mobile ? hingeWorkerEndMobile : hingeWorkerEndDesktop;

    workers.forEach((worker, index) => {
      let x;
      let y;
      if (position < 3.82) {
        x = lerp(workerStart[index][0], workerEnd[index][0], horizontalSweep);
        y = lerp(workerStart[index][1], workerEnd[index][1], horizontalSweep);
      } else {
        const localProgress = smoothstep(
          workerThresholds[index],
          Math.min(1, workerThresholds[index] + 0.4),
          curveSelection,
        );
        x = lerp(hingeStart[index][0], hingeEnd[index][0], localProgress);
        y = lerp(hingeStart[index][1], hingeEnd[index][1], localProgress);
      }
      worker.style.setProperty("--worker-x", `${x}%`);
      worker.style.setProperty("--worker-y", `${y}%`);
      worker.style.setProperty("--worker-size", `${mobile ? 40 : 64}px`);
    });

    const spreadCaption = horizontalWorkerIn * (1 - smoothstep(2.35, 2.75, position));
    const selectedCaption = horizontalWorkerIn * smoothstep(2.72, 3.1, position);
    workerLayer.querySelector(".worker-caption--spread").style.opacity = String(spreadCaption);
    workerLayer.querySelector(".worker-caption--selected").style.opacity = String(selectedCaption);

    const payOpacity = smoothstep(4.72, 5.02, position) * curveOpacity;
    mechanismScene.style.setProperty("--pay-opacity", String(payOpacity));
    hourMark.style.opacity = String(payOpacity);
    goods.style.opacity = String(payOpacity);
    document.querySelector(".curve-label--pay").style.opacity = String(
      payOpacity * plainLabelOpacity,
    );
    const positions = mobile ? goodPositionsMobile : goodPositionsDesktop;
    if (mobile) {
      hourMark.style.left = "10%";
      hourMark.style.top = "69%";
    } else {
      hourMark.style.left = "47%";
      hourMark.style.top = "70%";
    }
    goodUnits.forEach((unit, index) => {
      const start = 0.05 + (index - 1) * 0.1;
      const fill = index === 0 ? 1 : smoothstep(start, start + 0.29, curveSelection);
      unit.style.setProperty("--good-x", `${positions[index][0]}%`);
      unit.style.setProperty("--good-y", `${positions[index][1]}%`);
      unit.style.setProperty("--good-opacity", String(fill));
      unit.style.setProperty("--good-rotation", `${lerp(0, [-4, -1, 2, 4][Math.floor(index / 2)], curveSelection)}deg`);
    });

    const psiKey =
      smoothstep(7.55, 7.92, position) * (1 - smoothstep(8.35, 8.62, position));
    const laborKey =
      smoothstep(8.55, 8.92, position) * (1 - smoothstep(9.35, 9.62, position));
    const wageKey =
      smoothstep(9.55, 9.92, position) * (1 - smoothstep(10.35, 10.66, position));
    mechanismScene.style.setProperty("--psi-key", String(psiKey));
    mechanismScene.style.setProperty("--labor-key", String(laborKey));
    mechanismScene.style.setProperty("--wage-key", String(wageKey));
    if (position >= 7.3 && position <= 10.82) layoutNotations(mobile);

    // The exhibit playing, which a lead-in reaches before its first title shows.
    const start = exhibitStart(reduced ? frame : target);
    const end = exhibitEnd(start);
    // Publish after painting so every chapter receives the same completed frame.
    window.dispatchEvent(new CustomEvent("story:position", {
      detail: {
        frame, position, state, reduced,
        play: {
          start, end, to: reduced ? frame : target, steps: playSteps(start, end),
          left: reduced ? 0 : timeLeft(now), last: beats.length - 1,
        },
      },
    }));
  }

  function currentPosition() {
    if (query.has("state")) {
      return clamp(Number.parseFloat(query.get("state")) || 0, 0, beats.length - 1);
    }
    const readingLine = window.innerHeight * 0.5;
    const first = beats[0].getBoundingClientRect();
    const step = Math.max(first.height, 1);
    const firstCenter = first.top + first.height / 2;
    return clamp((readingLine - firstCenter) / step, 0, beats.length - 1);
  }

  // Scrolls the page so that the reading line is at the given position.
  function scrollToPosition(position) {
    const first = beats[0].getBoundingClientRect();
    const step = Math.max(first.height, 1);
    window.scrollTo(0, window.scrollY + first.top + first.height / 2 - window.innerHeight * 0.5 + position * step);
  }

  function requestRender() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame((now) => {
      frameRequested = false;
      render(currentPosition(), now);
    });
  }

  window.addEventListener("scroll", requestRender, { passive: true });
  // Beats are sized in viewport units, so a resize moves them under the reading
  // line; scroll back to the position the reader was on.
  window.addEventListener("resize", () => {
    fitHeadlines();
    if (readingPosition !== null && !query.has("state")) scrollToPosition(readingPosition);
    requestRender();
  });
  window.addEventListener("pageshow", requestRender);
  // gouache.js runs after this script; paint as soon as it is there.
  document.addEventListener("DOMContentLoaded", requestRender);
  matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", requestRender);
  if (document.fonts?.ready) document.fonts.ready.then(() => {
    fitHeadlines();
    requestRender();
  });
  render(currentPosition());
  fitHeadlines();
})();
