---

title: Character images & atlases
category: Personajes
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Character JSON references an image atlas name; the engine loads the atlas from `images/` using `Paths.getAtlas()` or Animate atlas handling.

## Prerequisites
- A character JSON that references an image path.

## Step-by-step
1. Place your atlas under `mods/<mod>/images/<path>`.
2. Set `image` in the character JSON to match the atlas path.

## Examples
```haxe
// funkin/visuals/game/Character.hx
if(!isAnimateAtlas)
  frames = Paths.getAtlas(json.image);
```

## Common pitfalls
- Using a wrong atlas path (must be relative to `images/`).

## Related pages
- [Character JSON schema](./character-json-schema.md)
- [Image atlas formats (XML/JSON)](../assets-and-formats-reference/image-atlas-formats.md)
