---

title: HUD assets overview
category: UI y HUD
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
The HUD uses assets under `images/` (e.g., health bar, score text, countdown sprites). You can override these assets via your mod folder.

## Prerequisites
- A mod folder with `images/` overrides.

## Step-by-step
1. Identify the HUD asset path (e.g., `images/ui/healthBar.png`).
2. Place a replacement in `mods/<mod>/images/ui/healthBar.png`.
3. Launch a song to see the HUD update.

## Examples
PlayState creates HUD elements using image and font paths:

```haxe
// funkin/states/PlayState.hx
healthBar = new Bar(..., 'healthBar', ...);
scoreTxt.setFormat(Paths.font("vcr.ttf"), 18, ...);
```

## Common pitfalls
- Replacing the wrong asset path (HUD assets are under `images/` not `ui/` alone).

## Related pages
- [Health bar customization](./health-bar-customization.md)
- [Fonts and text](./fonts-and-text.md)
