---

title: Custom music and sounds
category: Audio y música
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Beyond song audio, you can override or add menu music and sound effects using `music/` and `sounds/` paths. The engine uses `Paths.music()` and `Paths.sound()`.

## Prerequisites
- A built-in asset you want to override, or a script/state that references a new sound.

## Step-by-step
1. To override a sound, place a file under `mods/<mod>/music/` or `mods/<mod>/sounds/` matching the relative filename.
2. To add a new sound, make sure a script or state references the same filename.

## Examples
```haxe
// utils/Paths.hx
public static function music(file:String, permanent:Bool = false, missingPrint:Bool = true):Sound
  return returnSound('music/' + file, permanent, missingPrint);

public static function sound(file:String, permanent:Bool = false, missingPrint:Bool = true):Sound
  return returnSound('sounds/' + file, permanent, missingPrint);
```

## Common pitfalls
- Using full file extensions when the engine expects just the base name.

## Related pages
- [Song audio structure](./song-audio-structure.md)
- [Audio format notes](./audio-format-notes.md)
