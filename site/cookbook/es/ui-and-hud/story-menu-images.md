---

title: Story menu images
category: UI y HUD
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Story menu items load images from `images/storymenu/<weekName>`. You can override or add these images in mods.

## Prerequisites
- A week name you want to support (see Weeks section).

## Step-by-step
1. Create `mods/<mod>/images/storymenu/<weekName>.png`.
2. Ensure your week file references the same `weekName`.

## Examples
```haxe
// funkin/visuals/objects/MenuItem.hx
loadGraphic(Paths.image('storymenu/' + weekName));
```

## Common pitfalls
- Mismatch between `weekName` and story menu image filename.

## Related pages
- [Week file schema (from editor)](../weeks-and-story-freeplay/week-file-schema.md)
