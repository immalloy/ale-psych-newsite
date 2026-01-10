---

title: Your first mod folder
category: Primeros pasos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Your first mod can be as simple as overriding a single asset. The engine will look in `mods/<your-mod>/` before it checks `assets/`.

## Prerequisites
- A built engine install with a `mods/` directory.

## Step-by-step
1. Create a folder `mods/MyFirstMod`.
2. Pick a built-in asset to override (for example an image in `assets/images/`).
3. Copy the file into `mods/MyFirstMod/images/` with the same relative path and filename.
4. Select **MyFirstMod** in the Mod Menu.
5. Launch the relevant menu or gameplay screen to confirm the override.

## Examples
Path resolution checks the mod folder first:

```haxe
// utils/Paths.hx
if (exists(file, MODS))
  return modFolder() + '/' + file;

if (exists(file, ASSETS))
  return 'assets/' + file;
```

## Common pitfalls
- Using the wrong folder name in `mods/` (must match the Mod Menu selection).
- Changing filenames or subfolder structure; overrides must match the **exact** `assets/` layout.

## Related pages
- [Mod folder anatomy](../mods-basics/mod-folder-anatomy.md)
- [Asset override order](../file-paths-and-load-order/asset-override-order.md)
- [Common pitfalls (mods only)](./common-pitfalls.md)
