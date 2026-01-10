---
title: Path resolution rules
category: File Paths & Load Order
---

## Overview
When the engine loads files, it uses `Paths.getPath()` and related helpers to resolve the **mod file first**, then falls back to the built-in `assets/` directory.

## Prerequisites
- None.

## Step-by-step
1. Identify the relative asset path (for example `images/ui/healthBar.png`).
2. Place a file at the same relative path under `mods/<active-mod>/` to override it.
3. If no mod file exists, the engine will load from `assets/`.

## Examples
```haxe
// utils/Paths.hx
public static inline function getPath(file:String, missingPrint:Bool = true):String
{
  #if MODS_ALLOWED
  if (exists(file, MODS))
    return modFolder() + '/' + file;
  #end

  if (exists(file, ASSETS))
    return 'assets/' + file;

  if (missingPrint)
    debugTrace(file, MISSING_FILE);

  return null;
}
```

## Common pitfalls
- Adding an extra `assets/` level inside your mod.
- Using the wrong relative path (the engine does **not** auto-search subfolders).

## Related pages
- [Asset override order](./asset-override-order.md)
- [Directory merges and conflicts](./directory-merges-and-conflicts.md)
- [Mod folder anatomy](../mods-basics/mod-folder-anatomy.md)
