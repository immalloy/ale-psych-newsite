---

title: Case-insensitive search rules
category: Rutas de archivos y orden de carga
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Some searches (especially song discovery) normalize names using `formatToSongPath`. This allows lookups to match even if casing or spacing differs.

## Prerequisites
- None.

## Step-by-step
1. Use lowercase and dashes for song folder names when possible.
2. Keep chart file names consistent with difficulty strings.

## Examples
```haxe
// utils/cool/FileUtil.hx
if (formatToSongPath(searchAsset) == formatToSongPath(file))
  return parent + (parent.length > 0 ? '/' : '') + searchAsset;
```

## Common pitfalls
- Assuming this normalization applies to **all** assets. It is specific to certain search paths (like song discovery).

## Related pages
- [Naming and case rules](../mods-basics/naming-and-case-rules.md)
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
