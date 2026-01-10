---

title: Common pitfalls (mods only)
category: Primeros pasos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Most mod issues come from mismatched paths or missing files. The engine resolves mod files by **relative path** and will fall back to `assets/` when a mod file is not found.

## Prerequisites
- A mod folder to test with.

## Step-by-step
1. Verify your mod folder name matches what you selected in the Mod Menu.
2. Ensure your mod mimics the `assets/` folder structure.
3. Check the exact filename (including case) and extension.
4. If the engine can’t find a file, confirm the relative path with `Paths.getPath()` rules.

## Examples
The engine checks `mods/<active-mod>/` first and falls back to `assets/`:

```haxe
// utils/Paths.hx
if (FileSystem.exists(modFolder() + '/' + path))
  return true;

if (FileSystem.exists('assets/' + path))
  return true;
```

## Common pitfalls
- **Wrong folder level**: `mods/MyMod/assets/images/...` is wrong; it should be `mods/MyMod/images/...`.
- **Mismatched song name casing**: chart lookup uses a normalized, case-insensitive match.

## Related pages
- [Naming and case rules](../mods-basics/naming-and-case-rules.md)
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
