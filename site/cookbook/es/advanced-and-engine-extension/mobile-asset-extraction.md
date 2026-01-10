---

title: Mobile asset extraction
category: Avanzado y extensión del motor
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
On mobile, `CopyState` can copy packaged assets into the filesystem, including `assets/` and `mods/` content bundled with the build.

## Prerequisites
- Mobile build context.

## Step-by-step
1. Ensure assets are packaged in the build.
2. Let `CopyState` extract content at runtime.

## Examples
```haxe
// core/config/CopyState.hx
var assets = locatedFiles.filter(folder -> folder.startsWith('assets/'));
var mods = locatedFiles.filter(folder -> folder.startsWith('mods/'));
locatedFiles = assets.concat(mods);
```

## Common pitfalls
- Assuming `CopyState` runs on desktop builds (it’s used as initial state on mobile).

## Related pages
- [Asset extraction on mobile](../file-paths-and-load-order/mobile-copy-state.md)
