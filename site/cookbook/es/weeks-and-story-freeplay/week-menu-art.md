---

title: Week menu art
category: Semanas e historia/juego libre
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Story menu items load art from `images/storymenu/<weekName>`. Mods can override or add these images.

## Prerequisites
- A week name and image file.

## Step-by-step
1. Place `mods/<mod>/images/storymenu/<weekName>.png`.
2. Ensure your week file uses the same `weekName`.

## Examples
```haxe
// funkin/visuals/objects/MenuItem.hx
loadGraphic(Paths.image('storymenu/' + weekName));
```

## Common pitfalls
- Mismatch between `weekName` and filename.

## Related pages
- [Story menu images](../ui-and-hud/story-menu-images.md)
