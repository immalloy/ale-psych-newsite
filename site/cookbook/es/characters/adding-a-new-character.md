---

title: Adding a new character
category: Personajes
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Add a character by placing a JSON file in `characters/` and referencing the character ID in your chart or script. The engine loads it dynamically.

## Prerequisites
- A character JSON and image atlas.

## Step-by-step
1. Create `mods/<mod>/characters/<id>.json`.
2. Add the character’s image atlas under `mods/<mod>/images/`.
3. Reference the character ID in a chart’s `player1`, `player2`, or `gfVersion` fields.

## Examples
Character loading uses the JSON filename:

```haxe
// funkin/visuals/game/Character.hx
var characterPath:String = 'characters/$curCharacter.json';
if (!Paths.exists(characterPath)) {
  characterPath = 'characters/' + DEFAULT_CHARACTER + '.json';
}
loadCharacterFile(Paths.json(characterPath.substring(0, characterPath.length - 5)));
```

## Common pitfalls
- Character ID mismatch between chart and JSON filename.

## Related pages
- [Character JSON schema](./character-json-schema.md)
- [Chart file structure](../charts-and-events/chart-file-structure.md)
