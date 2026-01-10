---

title: Naming and case rules
category: Fundamentos de mods
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
The engine normalizes some lookups (especially song folders) by converting names to a lowercase, dash-separated form. This helps case-insensitive matching, but you should still use consistent naming.

## Prerequisites
- None.

## Step-by-step
1. For song folders, use lowercase and dashes when possible (e.g., `my-song`).
2. When in doubt, match the case and spacing of the original content.

## Examples
The engine uses `formatToSongPath()` to normalize names:

```haxe
// utils/cool/FileUtil.hx
public static function formatToSongPath(string:String):String
  return string.trim().toLowerCase().replace(' ', '-');
```

## Common pitfalls
- Using spaces or mixed case in folder names when you expect lookup by normalized name.

## Related pages
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
- [Song audio structure](../audio-and-music/song-audio-structure.md)
