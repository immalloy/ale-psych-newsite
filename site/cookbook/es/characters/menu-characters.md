---

title: Menu characters
category: Personajes
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Menu characters use JSON files under `images/menucharacters/`. These can be overridden or added via mods.

## Prerequisites
- A menu character JSON and atlas.

## Step-by-step
1. Create `mods/<mod>/images/menucharacters/<id>.json`.
2. Add the referenced atlas to `mods/<mod>/images/menucharacters/`.

## Examples
```haxe
// funkin/visuals/objects/MenuCharacter.hx
var characterPath:String = 'images/menucharacters/' + character + '.json';
var charFile:MenuCharacterFile = cast Json.parse(rawJson);
frames = Paths.getSparrowAtlas('menucharacters/' + charFile.image);
```

## Common pitfalls
- Wrong atlas path in the JSON.

## Related pages
- [Image atlas formats (XML/JSON)](../assets-and-formats-reference/image-atlas-formats.md)
