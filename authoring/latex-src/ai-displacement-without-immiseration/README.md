# AI Displacement without Immiseration

This folder contains the self-contained HTML source for the September 2026
paper. It uses the site's existing TeX4ht, MathJax, and Tufte pipeline.
Rebuild from the repository root with:

```sh
python3 authoring/scripts/build_seo_site.py
```

`paper.tex` preserves the body of the posted PDF. Its preamble omits print-only
layout and title matter, which the page template supplies. Numerical macros
are expanded so MathJax can render the values. Appendix references link to
the corresponding pages of the online appendix.

Figures are PNG renders of the original PDF figures. The frontier diagram
comes from page 8 of the posted paper. Table notes sit below the table, and
long equations in sidenotes use display math so they remain within the margin.
The shared site stylesheets are unchanged.
