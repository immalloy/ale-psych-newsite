---
title: Song audio structure
category: Audio & Music
---

## Overview
Songs are stored under `songs/<song-name>/song/` with **Inst** and optional **Voices** files. The engine loads these using `Paths.inst()` and `Paths.voices()`.

## Prerequisites
- A song folder name you plan to use.

## Step-by-step
1. Create `mods/<mod>/songs/<song-name>/song/`.
2. Add `Inst.ogg` (instrumental).
3. Add `Voices.ogg` if your chart requires vocals.
4. Ensure your chart JSON references the song name.

## Examples
The engine resolves audio with standardized filenames:

```haxe
// utils/Paths.hx
inline static public function voices(route:String, postfix:String = null, permanent:Bool = false, missingPrint:Bool = true)
  return returnSound(route + '/song/Voices' + (postfix ?? ''), permanent, missingPrint);

inline static public function inst(route:String, permanent:Bool = false, missingPrint:Bool = true)
  return returnSound(route + '/song/Inst', permanent, missingPrint);
```

Example built-in structure:
```
assets/songs/bopeebo/song/Inst.ogg
assets/songs/bopeebo/song/Voices.ogg
```

## Common pitfalls
- Using `voice.ogg` instead of `Voices.ogg` (name must match).
- Putting audio directly under `songs/<song-name>/` instead of `songs/<song-name>/song/`.

## Related pages
- [Adding a new song audio](./adding-song-audio.md)
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
