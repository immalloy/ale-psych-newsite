---

title: Health bar customization
category: UI y HUD
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Health bar visuals come from the `healthBar` image and character health colors. You can override the bar image or change character health colors.

## Prerequisites
- A character JSON (for color changes) or HUD image replacement.

## Step-by-step
1. Override the `images/healthBar.png` asset.
2. Adjust character `healthbar_colors` in your character JSON if needed.

## Examples
```haxe
// funkin/states/PlayState.hx
healthBar = new Bar(..., 'healthBar', function() return health, 0, 2);
healthBar.setColors(FlxColor.fromRGB(dad.healthColorArray[0], ...), FlxColor.fromRGB(boyfriend.healthColorArray[0], ...));
```

## Common pitfalls
- Forgetting to update character health colors in JSON.

## Related pages
- [Character JSON schema](../characters/character-json-schema.md)
