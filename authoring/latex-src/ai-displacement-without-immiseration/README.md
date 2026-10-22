# AI's Blind Spots: Comparative Advantage and Wage Growth under Jagged AGI

This folder contains the self-contained HTML source for the September 2026
paper, matching the split-document PDF built on October 8, 2026 and posted on
October 22, 2026. It uses the site's existing
TeX4ht, MathJax, and Tufte pipeline.
Rebuild from the repository root with:

```sh
python3 authoring/scripts/build_seo_site.py
```

`paper.tex` preserves the body of the posted PDF. Its preamble omits print-only
layout and title matter, which the page template supplies. Numerical macros
are expanded so MathJax can render the values. Appendix references link to
the corresponding pages of the online appendix. Single-line numbered displays
use `equation` so TeX4ht references and MathJax equation numbers agree.

Figures are PNG renders of the vector figures embedded in the posted PDF,
including the two-panel comparison in Figure 4. Table 1 reports software
engineering and six other domains, with panels stacked for online reading.
Table notes sit below the table, and
long equations in sidenotes use display math so they remain within the margin.
The shared site stylesheets are unchanged.
