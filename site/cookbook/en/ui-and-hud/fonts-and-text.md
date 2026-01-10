---
title: Fonts and text
category: UI & HUD
---

## Overview
Fonts are loaded from `fonts/` via `Paths.font()`. Override fonts by placing a file with the same name in your mod.

## Prerequisites
- A font file (`.ttf` or `.otf`).

## Step-by-step
1. Place your font in `mods/<mod>/fonts/`.
2. Ensure the filename matches what the engine requests.

## Examples
```haxe
// utils/Paths.hx
public static function font(file:String, missingPrint:Bool = true):String
  return getPath('fonts/' + file);
```

PlayState uses `vcr.ttf` by default:

```haxe
// funkin/states/PlayState.hx
scoreTxt.setFormat(Paths.font("vcr.ttf"), 18, FlxColor.WHITE, CENTER, ...);
```

## Common pitfalls
- Using a different filename than the code expects.

## Related pages
- [Assets folder mirror reference](../assets-and-formats-reference/assets-folder-reference.md)
