---
title: Mod folder anatomy
category: Mods Basics
---

## Overview
A mod folder mirrors the `assets/` structure. Any file you place in `mods/<mod>/` can override the built-in asset at the same relative path.

## Prerequisites
- A mod folder inside `mods/`.

## Step-by-step
1. Create a mod folder (example: `mods/MyMod`).
2. Inside that folder, create subfolders that match `assets/` (for example: `images/`, `songs/`, `characters/`).
3. Copy or create files using the same names as the built-in assets you want to override.

## Examples
`Paths.getPath()` uses the relative path you pass, so your mod should mirror `assets/`:

```haxe
// utils/Paths.hx
if (exists(file, MODS))
  return modFolder() + '/' + file;
```

A typical mod layout:
```
mods/MyMod/
  images/
  songs/
  characters/
  stages/
  scripts/
```

## Common pitfalls
- Placing files in `mods/MyMod/assets/...` (extra `assets/` level).
- Expecting the mod to load if the Mod Menu is set to “Disable Mods”.

## Related pages
- [Override vs add (what’s possible)](./override-vs-add.md)
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
- [Assets folder mirror reference](../assets-and-formats-reference/assets-folder-reference.md)
