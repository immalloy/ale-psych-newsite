---

title: Chart discovery rules
category: Charts y eventos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Charts are discovered using a normalized, case-insensitive search. The engine expects `songs/<song>/charts/<difficulty>.json` and searches both mod and assets folders.

## Prerequisites
- A song folder name and difficulty label.

## Step-by-step
1. Create `mods/<mod>/songs/<song>/charts/<difficulty>.json`.
2. Use consistent song naming; lookup normalizes by lowercase and replacing spaces with dashes.

## Examples
Chart lookup uses `searchComplexFile()` and `formatToSongPath()`:

```haxe
// utils/cool/PlayStateUtil.hx
var json = FileUtil.searchComplexFile('songs/' + name + '/charts/' + difficulty + '.json');
```

```haxe
// utils/cool/FileUtil.hx
if (formatToSongPath(searchAsset) == formatToSongPath(file))
  return parent + (parent.length > 0 ? '/' : '') + searchAsset;
```

## Common pitfalls
- Difficulty string not matching the chart filename (e.g., `Hard.json` vs `hard.json`).

## Related pages
- [Difficulty naming](./difficulty-naming.md)
- [Song audio structure](../audio-and-music/song-audio-structure.md)
