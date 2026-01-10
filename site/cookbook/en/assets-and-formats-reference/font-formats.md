---
title: Fonts and typography
category: Assets & Formats Reference
---

## Overview
Fonts are loaded from `fonts/` and passed to UI text setup. Supported font files are `.ttf` and `.otf`.

## Prerequisites
- A font file.

## Step-by-step
1. Put the font in `mods/<mod>/fonts/`.
2. Use the exact filename in code or override the default font asset.

## Examples
```haxe
// utils/Paths.hx
public static function font(file:String, missingPrint:Bool = true):String {
  var path = 'fonts/' + file;
  return getPath(path);
}
```

## Common pitfalls
- Incorrect filename or forgetting to include the extension.

## Related pages
- [Fonts and text](../ui-and-hud/fonts-and-text.md)
