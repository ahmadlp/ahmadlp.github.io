# DLL2025 Reproducible Package

This folder contains the minimal local source tree needed to build `DLL2025.pdf`
outside the original project.

## Build

From this folder, run:

```bash
latexmk -pdf -bibtex DLL2025.tex
```

## Notes

- `DLL2025.pdf` in this folder was built successfully from the copied sources.
- Only files inside this folder were modified.
- The copied `DLL2025.tex` and `ICIO data/Table_3.tex` include small
  compatibility fixes so the document builds cleanly on current TeX Live.
