---

title: Videos
category: Referencia de recursos y formatos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Video assets are loaded from `videos/` using `Paths.video()` and the engine’s `VIDEO_EXT` (MP4).

## Prerequisites
- A video file in MP4 format.

## Step-by-step
1. Place `mods/<mod>/videos/<name>.mp4`.
2. Reference it by base name in the relevant script or state.

## Examples
```haxe
// utils/Paths.hx
public static function video(file:String, missingPrint:Bool = true):String {
  var path = 'videos/' + file + '.' + VIDEO_EXT;
  return getPath(path);
}
```

## Common pitfalls
- Using a non-MP4 format.

## Related pages
- [Assets folder mirror reference](./assets-folder-reference.md)
