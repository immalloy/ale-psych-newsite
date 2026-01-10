---

title: Character troubleshooting
category: Personajes
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Character issues typically come from missing JSON files or image atlas paths. The engine falls back to the default character if it can’t find the target JSON.

## Prerequisites
- A character failing to load.

## Step-by-step
1. Confirm `mods/<mod>/characters/<id>.json` exists.
2. Check the `image` field in the JSON points to a valid atlas.
3. Verify the character ID matches what your chart uses.

## Examples
```haxe
// funkin/visuals/game/Character.hx
if (!Paths.exists(characterPath)) {
  characterPath = 'characters/' + DEFAULT_CHARACTER + '.json';
  color = FlxColor.BLACK;
  alpha = 0.6;
}
```

## Common pitfalls
- Incorrect JSON filenames or missing atlases.

## Related pages
- [Character JSON schema](./character-json-schema.md)
