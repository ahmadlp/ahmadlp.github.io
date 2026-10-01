/* Round 27: approved medicine artwork with the current paper calibration. */
(() => {
  "use strict";

  window.MEDICINE_PRODUCTS = {
    capsule: {
      name: "Output 01",
      singular: "unit",
      plural: "units",
      output: "./assets/medicine-output-capsule-v1.png",
    },
  };
  const selected = document.documentElement.dataset.product;
  const product = window.MEDICINE_PRODUCTS[selected] || window.MEDICINE_PRODUCTS.capsule;
  const theme = {
    ...product,
    // The opening illustration ends with eight items across six medicine forms.
    purchasingGoods: [
      "./assets/medicine-output-capsule-v1.png",
      "./assets/medicine-variety-liquid-v1.png",
      "./assets/medicine-variety-tablet-v1.png",
      "./assets/medicine-variety-drops-v1.png",
      "./assets/medicine-variety-inhaler-v1.png",
      "./assets/medicine-variety-cream-v1.png",
      "./assets/medicine-output-capsule-v1.png",
      "./assets/medicine-variety-liquid-v1.png",
    ],
    name: product.name,
    exploreName: "Scroll down",
    cover: "./assets/title-gouache-future-v8.png",
    coverAlt: "Many workers fear AI is coming for their jobs.",
    panorama: "./assets/medicine-panorama.png",
    panoramaAlt: "Producing medicine involves many tasks.",
    panoramaCaption: "A sequence of tasks",
    atlas: "./assets/medicine-task-atlas.png",
    // An illustrative relative-cost ordering, not a development timeline.
    tasks: ["Drug discovery", "Manufacturing", "Lab testing", "Clinical trials", "Sales", "Regulatory filing"],
    titles: [
      "Producing medicine involves many tasks",
      "Each task can be handled by humans or agentic AI",
      "Each task goes to whoever produces it at lower cost",
      "AI first takes the tasks where its cost advantage is greatest",
      "Workers take up tasks that fall in the AI’s blind spots",
      "Fewer tasks, but the ones where workers are most exceptional",
      "Specialization raises the marginal product of labor",
      "Each niche task buys a growing basket of AI-produced goods",
      "Jaggedness of AI capabilities",
      "Worker task share",
      "The real wage grows",
      "The real wage rises as the worker task share falls"
],
    decks: [
      "Tasks such as R&D, manufacturing, sales and marketing.",
      "Human and AI output are indistinguishable apart from cost.",
      "Unit cost is the factor’s price divided by its productivity.",
      "Cost parity shifts as AI improves.",
      "Even if AI is better at everything, its relative advantage is smaller in these tasks.",
      "No task is reserved for humans.",
      "An hour of work produces more.",
      "AI makes the goods workers buy cheaper.",
      "A steeper slope means the AI capability frontier is more jagged, with more blind spots.",
      "The fraction of tasks produced by workers.",
      "What an hour of work buys.",
      "The more jagged AI’s capabilities, the larger the rise."
],
  };
  window.ROUND23_THEMES = { medicine: theme };
  window.ROUND23_THEME = theme;
  window.ROUND23_THEME_KEY = "medicine";

  const aliases = {
    "horse-opener-dockside-landscape-v2.png": "./assets/horse-opener-landscape-r17.png",
    "horse-opener-dockside-mobile-v2.png": "./assets/horse-opener-mobile-r17.png",
    "horse-workday-panorama-neutral-v2.png": "./assets/horse-workday-panorama-r20.png",
    "engine-workday-panorama-cobalt-v2.png": "./assets/engine-workday-panorama-r20.png",
  };
  window.round14Asset = filename => aliases[filename] || `./assets/${filename}`;
})();
