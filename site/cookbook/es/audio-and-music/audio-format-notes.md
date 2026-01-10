---

title: Audio format notes
category: Audio y música
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Audio extensions are determined by platform. The engine uses OGG on most builds, and MP3 on web builds.

## Prerequisites
- None.

## Step-by-step
1. For desktop builds, use `.ogg` for song audio.
2. For web builds, verify `.mp3` behavior if you target web.

## Examples
```haxe
// utils/Paths.hx
public static inline final SOUND_EXT = #if web 'mp3' #else 'ogg' #end;
```

## Common pitfalls
- Shipping only `.ogg` files for a web build (may require `.mp3`).

## Related pages
- [Song audio structure](./song-audio-structure.md)
