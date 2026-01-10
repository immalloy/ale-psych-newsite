---

title: NDLL loading (native)
category: Avanzado y extensión del motor
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Native NDLLs can be loaded through `Paths.ndll()`, which searches `ndlls/` for a platform-specific NDLL.

## Prerequisites
- A compiled NDLL file.

## Step-by-step
1. Place `mods/<mod>/ndlls/<name>-<target>.ndll`.
2. Call `Paths.ndll(name, funcName)` from scripts or code.

## Examples
```haxe
// utils/Paths.hx
var path = 'ndlls/' + fileName + '-' + CoolVars.BUILD_TARGET + '.ndll';
return lime.system.CFFI.load(Paths.getPath(path), funcName, args);
```

## Common pitfalls
- Using the wrong build target suffix in the filename.

## Related pages
- [When mods are not enough](./when-mods-are-not-enough.md)
