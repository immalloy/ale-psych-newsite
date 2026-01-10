---
title: Asset override order
category: File Paths & Load Order
---

## Overview
When both a mod file and an asset file exist for the same relative path, the mod file wins. This applies across images, sounds, JSON, and other data loaded via `Paths`.

## Prerequisites
- A mod file that matches an existing asset path.

## Step-by-step
1. Copy the original asset path from `assets/`.
2. Place your replacement file under `mods/<active-mod>/` using the same relative path.
3. Launch the engine and verify the override takes effect.

## Examples
```haxe
// utils/Paths.hx
if (FileSystem.exists(modFolder() + '/' + path))
  return true;
if (FileSystem.exists('assets/' + path))
  return true;
```

## Common pitfalls
- Attempting to override files that are not loaded via `Paths` (rare, but check usage).

## Related pages
- [Path resolution rules](./path-resolution-rules.md)
- [Missing files](./missing-files.md)
