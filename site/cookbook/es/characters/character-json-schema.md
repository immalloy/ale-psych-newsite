---

title: Character JSON schema
category: Personajes
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Character files live under `characters/<id>.json` and define animations, sprite image paths, offsets, camera positions, and metadata (health icon, vocals file).

## Prerequisites
- A character JSON file.

## Step-by-step
1. Start from an existing character JSON (e.g., `assets/characters/bf.json`).
2. Adjust `image`, `animations`, `position`, and `camera_position`.
3. Place the JSON and related images in your mod folder.

## Examples
Schema (partial):

```haxe
// funkin/visuals/game/Character.hx
typedef CharacterFile = {
  var animations:Array<AnimArray>;
  var image:String;
  var scale:Float;
  var sing_duration:Float;
  var healthicon:String;
  var position:Array<Float>;
  var camera_position:Array<Float>;
  var flip_x:Bool;
  var no_antialiasing:Bool;
  var healthbar_colors:Array<Int>;
  var vocals_file:String;
}
```

## Common pitfalls
- Forgetting to include required `animations` entries.

## Related pages
- [Adding a new character](./adding-a-new-character.md)
- [Character images & atlases](./character-images-and-atlases.md)
