# Repo Layout

- `public/` contains the deployable static site. Publish this directory.
- `authoring/` contains the content, LaTeX sources, build script, and build cache needed to regenerate `public/`.
- Repo root contains repository metadata and deployment guidance only.

## Build

Run the site build from the repo root:

```bash
python3 authoring/scripts/build_seo_site.py
```

The build reads inputs from `authoring/` and writes outputs into `public/`.
