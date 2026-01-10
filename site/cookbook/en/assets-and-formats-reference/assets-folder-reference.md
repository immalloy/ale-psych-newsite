---
title: Assets folder mirror reference
category: Assets & Formats Reference
---

## Overview
To mod the engine, mirror the `assets/` folder structure inside `mods/<mod>/`. Any file resolved via `Paths` can be overridden.

## Prerequisites
- None.

## Step-by-step
1. Browse `assets/` to find the file you want to override.
2. Create the same relative path under `mods/<mod>/`.

## Examples
Paths resolves content under `assets/` if not found in the mod:

```haxe
// utils/Paths.hx
if (exists(file, ASSETS))
  return 'assets/' + file;
```

Key asset folders:
```
assets/
  characters/
  songs/
  stages/
  images/
  fonts/
  sounds/
  music/
  scripts/
  events/
  noteTypes/
  videos/
```

## Common pitfalls
- Adding a new folder that the engine never references.

## Related pages
- [Mod folder anatomy](../mods-basics/mod-folder-anatomy.md)
