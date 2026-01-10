---

title: Override vs add (what’s possible)
category: Fundamentos de mods
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Mods can **override** existing assets or **add** new content as long as the engine knows how to discover it (for example, new songs or character files referenced by name in charts or scripts).

## Prerequisites
- Understanding of the asset type you’re adding.

## Step-by-step
1. To override, copy an existing asset path into your mod and replace the file.
2. To add, place new files in the appropriate folder and reference them from data (like chart JSON or scripts).
3. Validate that the engine looks up the asset by name (ex: song names or character IDs).

## Examples
Paths resolution always checks the active mod first:

```haxe
// utils/Paths.hx
if (FileSystem.exists(modFolder() + '/' + path))
  return true;
if (FileSystem.exists('assets/' + path))
  return true;
```

Song charts are loaded by searching both mod and assets folders with name normalization:

```haxe
// utils/cool/FileUtil.hx
if (formatToSongPath(searchAsset) == formatToSongPath(file))
  return parent + (parent.length > 0 ? '/' : '') + searchAsset;
```

## Common pitfalls
- Adding new content without any references (charts, stages, scripts) will not automatically appear in menus.
- Overrides must use **exact** relative paths.

## Related pages
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
- [Character JSON schema](../characters/character-json-schema.md)
- [Stage JSON schema](../stages-and-backgrounds/stage-json-schema.md)
