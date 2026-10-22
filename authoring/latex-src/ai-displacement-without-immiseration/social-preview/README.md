# AI’s Blind Spots: sharing image

- `blind-spots-mark.svg`: editable vector logo, based on the paper’s Figure 1.
- `share-card.html`: editable title, author, and layout.
- `share-preview-v1.png`: the published sharing image, 1200 × 630 pixels.

The logo uses the same 32 task quantiles, seed 915, and rounded-frontier
construction as `jaggedness-figure/make_figure.py`. Coral shows the AI frontier;
teal shows comparative blind spots within the circular human baseline.
The background is warm ivory; the typography follows the paper’s Baskerville
and Helvetica Neue treatment.

To render the card, serve this folder locally, open `share-card.html` in a
browser at a 1200 × 630 viewport, and save a PNG screenshot after fonts load.

Website source copies are in
`authoring/latex-src/ai-displacement-without-immiseration/social-preview/`.
The published PNG and SVG are in
`public/paper-assets/ai-displacement-without-immiseration/`.
The paper’s front matter selects the PNG for Open Graph, X/Twitter, and
article metadata.
