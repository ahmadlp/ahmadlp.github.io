# AGENTS.md

This file records repo-specific guardrails for future agents working on
`/Users/ahmadlp/Downloads/webpage/www-lean`.

## Oracle Browser Preflight Rule

- Before updating global Oracle instructions or spending a costly GPT-5.4 Pro browser prompt, first run a minimal browser smoke test using the exact intended login strategy, model path, and Oracle mode.
- The smoke test should use a memorable slug, one small attached file, and a prompt that says `Reply with exactly: hi`.
- Treat the browser path as validated only if the saved Oracle session completes and the captured answer is exactly `hi`.
- If the `hi` smoke test fails, do not update `AGENTS.md` based on assumptions about profiles, cookies, model labels, or recovery steps. Debug the browser path first.

## Oracle Browser Auth Rule

- On this machine, do not assume Chrome cookie sync works just because a local Chrome profile contains ChatGPT/OpenAI cookies.
- As of March 28, 2026, Oracle browser runs using copied Chrome cookies failed with `No ChatGPT cookies were applied from your Chrome profile` even when `Profile 1` contained ChatGPT/OpenAI cookies.
- Prefer Oracle `--browser-manual-login` with the persistent Oracle browser profile for GPT-5.4 Pro browser runs unless a fresh `hi` smoke test shows that direct cookie sync works again.
- Use `--browser-keep-browser` while stabilizing browser runs so recovery and inspection remain possible.

## Oracle Model Selection Rule

- On this Oracle build, do not assume the ChatGPT model picker label for GPT-5.4 Pro is stable.
- As of March 28, 2026, `--browser-model-strategy select` failed because Oracle searched for `GPT-5.4 Pro` while the ChatGPT UI exposed `Extended Pro`.
- Prefer `--browser-model-strategy current` for manual-login GPT-5.4 Pro browser runs on this machine unless a fresh smoke test confirms that picker-based selection works again.
- If picker selection fails, treat it as a browser automation mismatch, not as evidence that the model itself is unavailable.

## Oracle Browser Recovery Rule

- Always set a memorable `--slug` for long browser GPT-5.4 Pro runs.
- If Oracle reports `Prompt did not appear in conversation before timeout`, treat it as a browser transport failure, not a model answer. Inspect the saved session and fix browser state before retrying.
- If Oracle captures only a short acknowledgement, progress note, or obviously partial answer, treat that as a capture problem, not a completed substantive response.
- Before any retry, inspect the existing session with `oracle status --hours 72` and `oracle session <slug> --render`, and attempt recovery or reattachment before creating a new run.
- Do not send `continue`, a reformulated duplicate prompt, or a fresh retry while the original browser conversation may still be live.

## Oracle Prompt Discipline Rule

- Before any GPT-5.4 Pro browser run, inspect the local files first and assemble the minimal file set that contains the full interface under review.
- Prefer narrow, issue-bounded prompts over broad review requests. State ground-truth facts explicitly and require evidence-backed findings with exact file-and-line support.
- If the local context is incomplete or browser/auth state is unstable, do not spend a Pro prompt yet. Fix the missing context or the browser path first.

## Canonical Paper Page Rule

- Treat `public/papers/*.html` as the canonical reading surface for papers.
- When changing paper pages, optimize first for on-screen reading quality and only then for crawlability or metadata.
- Do not assume that a successful LaTeX-to-HTML build implies an acceptable reading layout. Always inspect the generated HTML and CSS for layout artifacts introduced by TeX4ht.

## TeX4ht Timeout Rule

- Mistake to avoid: letting the shared paper build hang indefinitely on a `make4ht` pass just because the source tree eventually emits partial HTML.
- In this repo, `Trade_War_R2.tex` produced usable TeX4ht outputs but could stall the `make4ht` process instead of exiting cleanly. A stuck process is not a successful build.
- The shared LaTeX build pipeline should time-bound `make4ht` and `htlatex` invocations and treat a timeout as a recoverable compile failure.
- After a timeout or nonzero exit from `make4ht`, continue with the existing recovery logic:
  - use generated HTML/CSS if they already exist
  - otherwise try the `htlatex` fallback
  - only fail the paper if no usable HTML/CSS outputs exist after those recovery steps
- Do not “fix” this by removing the timeout or by waiting indefinitely in interactive runs.
- Validate the behavior by checking that:
  - the site build completes without manual intervention
  - the affected paper records the recoverable `make4ht` failure in `generated/latex-build-report.json`
  - the canonical page still renders from the TeX4ht/Tufte pipeline rather than dropping back to OCR markdown

## Related Topics Placement Rule

- For SEO/AI-discovery support pages, do not surface topic links prominently on `Research.html`, in the top navigation, or near the top of canonical paper pages unless the user explicitly asks for that.
- The preferred placement is a very understated `Related topics` block at the bottom of each canonical paper page only.
- That block should be low-prominence:
  - small type
  - muted color
  - simple text links
  - no cards, pills, badges, or marketing-style labels
- The block should only render when the paper actually has related topic links.
- Keep `Markdown source` and `Reader view` links on the canonical paper page action line, but not on `Research.html`.

## Paper Top-Matter Rule

- Mistake to avoid: changing the canonical paper-page top matter away from the established subtitle-based format.
- On these paper pages, the preferred format is:
  - one author per line using the existing subtitle typography
  - each author shown as `Name (Affiliation)` when affiliation is known
  - a separate subtitle line below the authors for `Journal · Date`
- Do not add a visible one-sentence teaser or summary blurb between the venue/date line and the links/abstract. Paper summaries can remain in metadata, topic hubs, cards, and social previews, but not in the canonical paper-page top matter unless the user explicitly asks for it.
- Do not collapse all authors into a single custom line unless the user explicitly asks for that layout.
- Do not introduce extra status labels such as `Published paper` or `Working paper` into the visible top matter. The venue and date line should carry the publication context.
- Keep the older subtitle styling unless the user explicitly asks to change the font treatment or scale.
- If affiliations are not already clean in front matter, extract them from the local paper source or use a paper-level override map; do not hand-edit generated HTML pages.
- Validate the result after rebuild by checking the generated paper HTML:
  - authors render as separate subtitle paragraphs
  - each author line includes the affiliation in parentheses when available
  - the venue and date appear on the same line with a centered dot separator

## Tufte Width Rule

- Mistake to avoid: leaving TeX4ht's wrapper width constraints in place after switching the canonical paper pages to Tufte CSS.
- TeX4ht emits a wrapper rule like `.tex4ht-fragment { margin: 1em auto; max-width: 80ch; padding: 0 .62em; }`.
- That wrapper creates a nested narrow column inside the Tufte text column, which compresses the main paper body to well under the intended width after the abstract.
- On Tufte-style paper pages, explicitly reset the wrapper to full article width, e.g. `width: 100%; max-width: none; margin: 0; padding: 0;`, before applying paragraph-level width rules.
- Before declaring the layout correct, compare the post-abstract body width to the reference page at `http://www.jdingel.com/research/DingelNeiman2020/index.html`. The body text should behave like a normal Tufte column, not a column-inside-a-column.

## Footnote Sidenote Rule

- Mistake to avoid: keeping TeX4ht endnotes as a bottom-of-page footnote dump when the target layout is Tufte-style.
- On Tufte-style paper pages, footnotes must render as inline sidenotes, not as a terminal endnote block.
- TeX4ht sidecar footnotes or appended `.tex4ht-footnotes` sections are not acceptable as the final user-facing presentation when the page is intended to match the Tufte reference.
- Convert each inline footnote callout into Tufte's label/checkbox/sidenote markup:
  - `label.margin-toggle.sidenote-number`
  - `input.margin-toggle`
  - `span.sidenote`
- After sidenote conversion, remove the old endnote section so the page does not duplicate notes.
- Validate the result by checking that the generated paper HTML contains many `span.sidenote` nodes and zero remaining `.tex4ht-footnotes` or `.footnote-text` blocks.

## Table Alignment Rule

- Mistake to avoid: letting TeX4ht table floats stay centered inside the paper body.
- TeX4ht commonly emits tables as `div.table > figure.float > .tabular > table.tabular`, and some papers add extra wrappers such as `.center`, `.ajdustwidth`, or `.adjustwidth`.
- The TeX4ht CSS then centers those blocks with rules such as `figure.float { margin-left: auto; margin-right: auto; }` and `table.tabular { margin-left: auto; margin-right: auto; }`.
- On a Tufte-style canonical paper page, that centering is wrong for ordinary tables. It pushes the table block to the right so it no longer shares the same left edge as the text column.
- The fix is to override the table wrappers in the paper-page stylesheet, not in the generated paper HTML:
  - set `div.table` to the text-column width
  - set `div.table > figure.float` to `display: block`, `width: 100%`, `max-width: none`, `margin-left: 0`, `margin-right: 0`
  - set top-level `.tabular`, `.center`, `.ajdustwidth`, and `.adjustwidth` wrappers inside the table float to full width, left-aligned, and horizontally scrollable when needed
  - set the top-level `table.tabular` to `width: max-content`, `min-width: 100%`, `margin-left: 0`, `margin-right: 0`
- Do not apply those full-width rules to nested tables inside table cells. Nested helper tables should remain `width: auto` and `min-width: 0`.
- Table captions need their own reset:
  - remove the generic figure prefix from table captions
  - remove TeX4ht hanging-indent rules such as `text-indent: -2em` and extra caption margins
  - align the caption to the left edge of the table block
- Validate the result in a browser by comparing the first paragraph column and the first table block. Their left edges should match exactly. If the paragraph starts around `left: 180px`, the table block and caption should start there too.

## Nested Table Wrapper Rule

- Mistake to avoid: assuming TeX4ht table wrappers are only one level deep.
- In this repo, some papers use chains such as `div.table > figure.float > .ajdustwidth > .center > .tabular > table.tabular`.
- If the stylesheet only targets immediate-child patterns such as `.ajdustwidth > .tabular > table.tabular`, the outer wrappers may look correct while the real top-level table collapses to a narrow strip or only part of the final table is visible.
- This failure already occurred on `public/papers/the-cost-of-a-global-tariff-war.html`, where the last table (`#TBL-8`) rendered at a much narrower width than its wrapper.
- Do not patch these cases by hand in generated HTML. Fix them in the shared paper-page stylesheet.
- The correct fix is:
  - normalize `.tabular`, `.center`, `.ajdustwidth`, and `.adjustwidth` wrappers at multiple nesting depths inside `div.table > figure.float`
  - apply the full-width and overflow rules to those wrapper chains, not only to one exact hierarchy
  - keep nested helper tables inside `td` and `th` exempt so header sub-tables and similar constructs can remain `width: auto`
- Validate the result in a browser:
  - compare the top-level `table.tabular` width to its immediate wrapper width
  - check both desktop and mobile
  - confirm that a table like `#TBL-8` no longer collapses inside a correctly sized outer wrapper

## Figure Aspect Ratio Rule

- Mistake to avoid: trusting TeX4ht-generated image `width` and `height` attributes on exported paper figures.
- In this repo, TeX4ht emitted bogus square dimensions such as `width="32"` and `height="32"` on wide PNG figures, which made the browser render them as vertically compressed and unreadable.
- The source image files themselves may be correct. Check the real pixel dimensions before blaming the asset.
- Do not fix this by hand-editing individual generated HTML pages. Fix it in the shared pipeline and shared stylesheet.
- The correct fix has two parts:
  - in the shared asset-rewrite step inside `authoring/scripts/build_seo_site.py`, strip TeX4ht-generated `width` and `height` attributes from paper-body `<img>` tags
  - in the shared paper stylesheet, ensure figure images use `height: auto` so the browser preserves the natural aspect ratio when width is constrained
- Keep the override scoped to paper-body figures so unrelated site images are unaffected.
- Validate the result after rebuild:
  - inspect generated paper HTML and confirm figure `<img>` tags no longer carry bogus `width=` or `height=` attributes
  - compare the rendered figure to the source file's real aspect ratio
  - confirm wide charts remain readable and are not vertically squashed

## Asset Extension Detection Rule

- Mistake to avoid: assuming a copied paper asset is valid just because the file exists and the HTML path resolves.
- In this repo, some Tariff War figures were copied with `.svg` filenames even though their actual bytes were PNG image data. The browser then failed to render them as SVG, making the figures appear missing even though the paths were correct.
- Do not diagnose this as a missing-file problem until you verify the real file type.
- Do not fix this by hand-renaming generated files or patching individual paper pages. Fix it in the shared asset-rewrite step inside `authoring/scripts/build_seo_site.py`.
- The correct fix is:
  - inspect the source asset header or magic bytes when copying TeX4ht assets
  - detect the real format for common exported asset types such as PNG, JPEG, GIF, PDF, and SVG
  - if the real format does not match the filename suffix, rewrite the public asset filename to the correct extension
  - update the generated paper HTML to point to the corrected public filename
- Validate the result after rebuild:
  - inspect representative paper HTML and confirm figure `src` values use extensions consistent with the actual asset type
  - run `file` or an equivalent content check on suspicious assets, especially TeX4ht-exported `.svg` figures
  - confirm that previously invisible figures render once the extension matches the actual file format

## Duplicate Abstract Rule

- Mistake to avoid: showing the abstract twice on canonical paper pages.
- The canonical page template already renders the curated abstract in the dedicated `#abstract` block near the top of the page.
- TeX4ht output may still begin with the paper's original abstract paragraph, even after `div.maketitle` or `section.abstract` has been removed.
- Do not patch this by editing the generated paper HTML directly. Fix it in the LaTeX post-processing step inside the generator.
- The safe pattern is:
  - normalize both the curated abstract text and the leading TeX4ht body paragraph
  - compare them with a tolerant match that handles punctuation, whitespace, HTML entities, and small formatting differences
  - remove the leading body paragraph only if it substantially matches the curated abstract
- Do not blindly remove the first paragraph of the body. Some papers begin immediately with the introduction text rather than an explicit heading.
- Validate the result by checking that:
  - the page still has exactly one visible abstract block at the top
  - the paper body starts with the first true section heading or first introduction paragraph
  - no second abstract paragraph appears before the introduction

## Duplicate Heading Number Rule

- Mistake to avoid: showing the section number twice before a heading.
- This duplication can come from two independent sources:
  - TeX4ht may emit a standalone number-only paragraph immediately before the real heading, for example a paragraph containing only `2`, `2.1`, or `6.3.1`
  - the paper-page stylesheet may add its own counter-based `::before` numbering on top of the heading's built-in TeX4ht `span.titlemark`
- On canonical paper pages, keep only one source of heading numbering. The simplest rule is to trust the heading's existing `titlemark` and remove all extra numbering layers.
- Do not fix this by hand-editing generated HTML files. Fix it in the shared pipeline:
  - remove counter-generated section numbering from the paper stylesheet
  - add a LaTeX post-processing pass that scans paragraphs before headings and deletes a paragraph only when its normalized text exactly matches the next heading's `titlemark`
- The cleanup pass must be conservative:
  - inspect all paragraph tags, not only `.indent` or `.noindent`, because TeX4ht may emit plain `<p>` tags for these number-only fragments
  - skip whitespace-only nodes and empty anchor nodes when checking the next sibling heading
  - do not remove a paragraph unless it is only the duplicated heading number
- Validate the result by checking representative section, subsection, and subsubsection headings. There should be no standalone number-only paragraph immediately before the heading, and there should be no extra CSS-generated number before the heading text.

## Duplicate Caption Label Rule

- Mistake to avoid: showing figure or table labels twice, such as `Figure 1. Figure 1` or `Table 2. Table 2`.
- In this repo, TeX4ht already emits the caption label inside the HTML, typically as `figcaption.caption > span.id` with values like `Figure 1:` or `Table A.4:`.
- Do not add a second label in CSS using `::before`, custom counters, or generated `content:` rules on `figcaption`, `.caption`, or `caption`.
- On canonical paper pages, trust the TeX4ht-provided label and style it, but do not regenerate it.
- If a future paper ever lacks a caption label entirely, fix that case in the shared HTML pipeline with a targeted fallback. Do not reintroduce global CSS caption counters.
- Validate the result by inspecting rebuilt paper HTML and shared styles:
  - `figcaption.caption .id` should already contain the label text
  - there should be no shared `::before` rule adding `Figure` or `Table` prefixes
  - rendered captions should show each label exactly once

## Description List Width Rule

- Mistake to avoid: compressing TeX4ht description/list environments such as `Proposal 1`, `Proposal 2`, `Members`, and `Non-members`.
- These environments often arrive as `dl.description` or `dl.list*` blocks with `dt` labels and `dd` bodies.
- Two separate layout bugs can happen:
  - the browser default `dd { margin-left: 40px; }` narrows the content block relative to the paper text column
  - a shared `p { width: 55%; }` rule can shrink the paragraph inside `dd` a second time, producing an extremely narrow body
- A second mistake to avoid is overcorrecting by making `dt` and `dd` full-width block elements. That forces an unwanted line break between the label and the text, producing `Proposal 1:` on one line and the body on the next.
- The correct fix belongs in the shared paper-page stylesheet:
  - keep the outer `dl.description` / `dl.list*` block at the normal text-column width
  - reset `dd` margins to zero
  - prevent the nested paragraph inside `dd` from re-applying the global paragraph width constraint
  - render `dt`, `dd`, and `dd > p` inline so the label and the sentence stay on the same line
  - add block separation after each `dd` so entries still stack cleanly
- Validate the result in the browser:
  - the environment should share the same left edge and overall width as normal body text
  - the label and the definition text should appear on the same line when space permits
  - the block should not collapse to a visibly narrower column than surrounding paragraphs

## Small-Caps Noun Rule

- Mistake to avoid: losing the LaTeX noun/small-caps styling for terms such as `KYOTO PROTOCOL` or `PARIS CLIMATE ACCORD`.
- In the TeX4ht HTML for these papers, this pattern often appears as a full-size initial letter followed by a nested `.small-caps` span, for example `K` + `YOTO` or `P` + `ARIS`.
- Two different failures can happen:
  - missing spaces between adjacent small-caps wrappers, producing strings like `KYOTOPROTOCOL` or removing the space before a following word such as `and`
  - visually incorrect styling where the trailing `.small-caps` letters render at the same size as the initial letter, so the output no longer resembles the LaTeX noun environment
- The fix has two parts:
  - in the generator/post-processing step, restore missing spaces around adjacent small-caps wrappers and between a wrapper and following plain text when TeX4ht drops them
  - in the shared paper-page stylesheet, style `.small-caps` spans so they are smaller than the initial letter, uppercase, slightly letter-spaced, and aligned on the baseline
- Do not rely only on browser `font-variant-caps: small-caps` defaults. In practice, you need an explicit size reduction for the trailing letters to visually match the LaTeX output.
- Validate the result in the browser:
  - the phrase should have normal word spacing, e.g. `KYOTO PROTOCOL` rather than `KYOTOPROTOCOL`
  - the initial letter of each word should remain full size
  - the following letters should be visibly smaller small caps, not full-size capitals

## Inline Reference Spacing Rule

- Mistake to avoid: allowing adjacent inline TeX4ht nodes to collapse prose around cross-references.
- A recurring failure mode in this repo is generated HTML like `Proposition 4involves`, `Appendix Dpresents`, or `Appendix Dand ...`, where the reference number is wrapped in a link and the surrounding text sits in neighboring inline spans with no actual whitespace node between them.
- Do not fix this by hand-editing generated paper HTML. Fix it in the shared LaTeX HTML post-processing pipeline.
- The correct fix is:
  - inspect adjacent inline siblings such as `span`, `a`, `cite`, and other inline wrappers
  - insert a real space only when the left node ends with readable text and the right node begins with readable text
  - keep the rule conservative so it does not introduce spaces before commas, periods, closing parentheses, or other punctuation-sensitive cases
  - keep the repair separate from small-caps spacing logic; reference-spacing bugs occur even when small-caps markup is not involved
- Validate the result on rebuilt paper HTML by checking concrete cases like `Appendix D` and `Proposition 4` in prose, and by scanning for collapsed link/text patterns around other appendix, theorem, and proposition references.

## Display Equation Size Rule

- Mistake to avoid: rendering standalone equations smaller than inline equations.
- On these paper pages, inline MathJax often inherits the paragraph font size, while standalone/display math may inherit the smaller body or container font size if the wrapper is not styled explicitly.
- The fix belongs in the shared paper-page stylesheet, not in per-paper HTML:
  - set the display-math wrappers to the same text scale as the paragraph column
  - explicitly include the common TeX4ht display containers such as `.mathjax-block`, `.mathjax-env`, `.displaymath`, `table.equation`, `table.equation-star`, `div.equation`, and `div.equation-star`
  - force `mjx-container[display='true']` to inherit that wrapper size, for example with `font-size: 1em !important`
- Do not change inline math sizing to solve this. The target is parity: display equations should match the reading scale of inline equations, not vice versa.
- Validate the result in a browser by comparing computed font sizes:
  - inline math inside a paragraph and a representative standalone equation should be visually equivalent in scale
  - if inline math is around the paragraph size, display math should be essentially the same size, not the smaller body default

## MathJax Overflow Fitting Rule

- Mistake to avoid: deciding that display equations fit just because the outer `.mathjax-env`, `.mathjax-block`, or `.displaymath` wrapper reports no overflow.
- In this repo, the real overflow can live inside MathJax’s generated descendants such as `mjx-container[display='true']`, `mjx-math`, `mjx-mtable`, `mjx-table`, or `mjx-itable`, even when the wrapper’s own `clientWidth` and `scrollWidth` look fine.
- This failure already caused an incomplete fix: many front-facing papers still had clipped display equations, including `public/papers/the-cost-of-a-global-tariff-war.html`, because the fitter measured only the outer wrapper layer.
- Do not patch individual equations in generated HTML. Fix this in the shared MathJax fitting logic inside `authoring/scripts/build_seo_site.py`.
- The correct fix is:
  - compute required width from the rendered inner MathJax descendants, not only from the wrapper’s `scrollWidth`
  - compare that required width to the owning text column or theorem block width
  - rerun the fit pass after MathJax startup, page load, font readiness, pageshow, and resize, because late font metrics can change equation width
  - keep sidenotes and margin notes out of the main fit pass unless you are intentionally changing margin-note math
- Validate the result in a browser using actual rendered overflow:
  - inspect `mjx-container[display='true']` elements, not only wrapper metrics
  - verify at both desktop and mobile widths
  - confirm that previously bad pages no longer have overwide display MathJax outside sidenotes

## Math Normalization Rule

- Mistake to avoid: assuming every TeX4ht-emitted math string is already safe for MathJax after extraction.
- Two concrete failure modes already occurred in this repo:
  - empty text wrappers such as `\text{}` collapsing into broken command chains like `\text\frac`
  - text-mode wrappers around bold math such as `\textrm{\textbf{T}}` being normalized into MathJax-hostile hybrids like `\textrm{\mathbf{T}}`
- These failures can leave equations visibly broken even when the surrounding HTML and CSS are correct.
- Do not patch broken equations by hand in generated paper HTML. Fix them in the shared math-normalization step inside `authoring/scripts/build_seo_site.py`.
- The correct fix is:
  - when normalizing `\text{...}`-style wrappers, return an empty string for empty arguments rather than leaving a stray text command behind
  - normalize `\textrm{...}` through the same wrapper logic used for `\text{...}` so text-only content stays text and math-heavy content sheds the unnecessary text-mode shell
  - keep these rewrites conservative and local to the math sanitizer
- Validate the result after rebuild:
  - search the generated paper HTML for broken command chains such as `\text\frac`
  - search for MathJax-hostile hybrids such as `\textrm{\mathbf{...}}`
  - inspect the specific equations that previously failed, not just the page generally

## Reader Math Preservation Rule

- Mistake to avoid: trying to improve `reader view` equations only by swapping MathJax output modes such as `chtml` to `svg`.
- In this repo, that renderer swap can be visually irrelevant if `public/paper-reader-data/*/paper.xml` has already lost the math structure during generation.
- The failure mode already seen here was:
  - canonical LaTeX-backed paper pages preserved math in the compiled TeX4ht HTML
  - `build_modernpapers_xml_document(...)` rebuilt `paper.xml` from flattened `body_markdown`
  - the resulting reader XML contained no `<MATH>` or `<FULL_LINE_EQUATION>` tags, so MathJax had nothing meaningful to improve
- The correct fix belongs in the shared build pipeline:
  - for papers with `body_source: latex`, build `public/paper-reader-data/<slug>/paper.xml` from `compiled_body_html`, not from flattened markdown
  - preserve inline math as `<MATH>...</MATH>`
  - preserve display math as `<FULL_LINE_EQUATION ...><MATH>...</MATH></FULL_LINE_EQUATION>`
  - only after math survives into `paper.xml` should you tune MathJax output mode, spacing, or CSS
- Do not declare the reader math fix complete until you validate the intermediate data, not just the browser view:
  - inspect the generated `paper.xml` and confirm nonzero counts of `<MATH>` and `<FULL_LINE_EQUATION>` for math-heavy LaTeX papers
  - inspect a sample equation in the XML and confirm the TeX is still present
  - then check the served reader page under `http://localhost`, since `file://` mode can fail for unrelated fetch reasons

## Theorem Block Typography Rule

- Mistake to avoid: allowing theorem-like environments such as definitions, lemmas, propositions, and theorems to drop to a smaller font after a display equation.
- In TeX4ht output, these environments often appear as `div.newtheorem` blocks.
- A common TeX4ht pattern is:
  - the opening theorem statement appears inside a normal paragraph
  - a display equation follows as a sibling block
  - the continuation text after the equation is emitted as bare sibling spans rather than a new paragraph
- When that happens, the continuation text can inherit TeX4ht font wrappers such as `cm*`, `ppl*`, `ptm*`, or `x-x-*` instead of the normal body text scale, making the text after the equation visibly smaller than the rest of the theorem.
- Do not fix this by hand-editing generated paper HTML. Fix it in the shared paper-page stylesheet.
- The correct fix is to normalize `div.newtheorem` as a body-text container:
  - give `.newtheorem` the normal text-column width, font size, and line height
  - make direct child paragraphs, lists, tables, and math/display blocks fill that width
  - force generated TeX4ht span wrappers inside `.newtheorem` to inherit the theorem block’s font size and line height
- Keep this override scoped to theorem-like blocks so ordinary body typography is unaffected.
- Validate the result in the browser:
  - text before and after a display equation inside a theorem-like environment should render at the same reading scale
  - the theorem body should align with the normal text column
  - the fix should apply to both Palatino-style and Computer-Modern-style TeX4ht class families

## Bibliography Width Rule

- Mistake to avoid: letting the references section render in a narrower column than the rest of the paper body.
- TeX4ht emits bibliographies in multiple formats, including:
  - `dl.thebibliography > dd.thebibliography`
  - `div.thebibliography > p.bibitem`
  - Pandoc-style `div.csl-bib-body` / `.hanging-indent div.csl-entry`
- A common failure mode is to keep TeX4ht's hanging-indent layout based on `margin-left` and `text-indent` inside an already constrained Tufte text column.
- That double indentation compresses the usable width of each reference entry so the bibliography no longer matches the body text column.
- Do not fix this by hand-editing generated paper HTML. Fix it in the shared paper-page stylesheet.
- The correct fix is:
  - give the bibliography container the normal text-column width
  - reset TeX4ht's outer bibliography margins to zero
  - keep the hanging indent by moving it into internal padding, e.g. `padding-left: 2em` with `text-indent: -2em`, rather than shrinking the whole block with left margins
  - cover all bibliography markup variants used in the repo, not just one paper's format
- Validate the result in the browser:
  - the references block should share the same left edge and overall width as normal paragraphs
  - hanging indents should still work within each entry
  - both `dl.thebibliography` and `p.bibitem` style outputs should render correctly

## Sidenote Content Rule

- Most paper notes are short prose and should be inserted directly into the sidenote.
- Some notes include display math or other block content. These must not be dropped.
- If a note contains block math, convert it into a sidenote-compatible inline block rather than leaving it behind as an endnote.
- Add local sidenote styling for math-heavy notes so they remain legible in the margin and do not overflow uncontrollably.

## Sidenote Font Size Rule

- Mistake to avoid: assuming the Tufte sidenote container size is enough to guarantee correct margin-note typography.
- In TeX4ht output, the actual note text often carries generated font-size classes such as `pplr8t-x-x-90`, `cmr-9`, `cmti-9`, `cmbx-9`, `ecrm-0900`, `ecti-0900`, `ectt-0900`, `t1xtt-`, or other family-specific wrappers.
- When those classes remain active inside `.sidenote` or `.marginnote`, they shrink the note text to footnote scale even though the outer Tufte sidenote box is sized correctly.
- Do not fix this by increasing the global Tufte sidenote size. The problem is usually the nested TeX4ht span classes, not the container.
- The correct fix belongs in the shared paper-page stylesheet:
  - inside `.sidenote` and `.marginnote`, force generated TeX4ht font-size wrappers to inherit the sidenote font size
  - do not rely on a narrow allowlist of class prefixes only; newly promoted papers may emit different TeX4ht font families
  - prefer a broad sidenote-scoped normalization rule such as `span[class] { font-size: inherit !important; line-height: inherit; }` inside `.sidenote` and `.marginnote`
  - keep the override local to margin notes so the rest of the paper's typography is unaffected
- Validate the result against the Dingel reference page:
  - sidenote text should read at normal Tufte margin-note scale, not shrunken footnote scale
  - the note container and the actual note text should match visually
  - inspect the actual classes nested inside `.sidenote` for each newly promoted paper before declaring the issue solved
  - both prose notes and math-containing notes should remain legible in the margin

## Reference Parity Rule

- When the user asks for a paper page to resemble a specific reference page, inspect that reference directly before making structural decisions.
- For the Dingel/Neiman reference, the important cues are:
  - local `tufte.css`
  - minimalist top matter
  - no heavy site chrome around the article
  - abstract at the same text-column width as the body
  - sidenotes in the margin rather than endnotes below the paper
- Do not approximate these traits from memory when the reference is available.

## Paper Layout Verification Rule

- Mistake to avoid: declaring a shared paper-layout fix complete after spot-checking only one or two papers or only one viewport.
- In this repo, a change can fix the sampled page while many other front-facing papers linked from `public/Research.html` still have clipped equations or collapsed tables.
- For shared paper-page layout fixes, verify the full front-facing set at both desktop and mobile after MathJax has settled.
- At minimum, the browser audit should check:
  - overwide display `mjx-container[display='true']` nodes outside sidenotes and margin notes
  - collapsed top-level tables where the wrapper is much wider than the actual `table.tabular`
- Treat `public/papers/the-cost-of-a-global-tariff-war.html` as a regression canary, because it previously exposed both lingering display-math overflow and a collapsed final table after an earlier “fix”.
- Do not rely only on a successful cache-backed rebuild, a CSS diff, or one representative page. Use rendered-browser evidence before telling the user the problem is fixed.

## SEO Separation Rule

- Mistake to avoid: surfacing SEO support pages as visible clutter on the main research landing page.
- SEO or AI-discovery support pages can exist without being front-facing on `Research.html`.
- Do not add visible "Topic Hubs" or "Direct-Answer Pages" sections to the main research landing page unless the user explicitly asks for them to be front-facing.
- Prefer back-facing discovery through sitemap, schema, `llms.txt`, and contextual internal links instead of visible landing-page clutter.
