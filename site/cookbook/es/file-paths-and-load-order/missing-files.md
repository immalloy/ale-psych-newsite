---

title: When missing files are reported
category: Rutas de archivos y orden de carga
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
When a file is missing, `Paths` can log a missing-file debug trace if `missingPrint` is true. Knowing this helps you diagnose wrong paths quickly.

## Prerequisites
- None.

## Step-by-step
1. If something doesn’t load, verify the relative path first.
2. Check for missing-file debug output if you’re running a build with logging.

## Examples
```haxe
// utils/Paths.hx
if (!exists(path)) {
  if (missingPrint)
    debugTrace(path, MISSING_FILE);
  return null;
}
```

## Common pitfalls
- Passing the wrong base path (e.g., `images/` prefix already included or not). Follow the API’s expectation.

## Related pages
- [Path resolution rules](./path-resolution-rules.md)
- [Common pitfalls (mods only)](../getting-started/common-pitfalls.md)
