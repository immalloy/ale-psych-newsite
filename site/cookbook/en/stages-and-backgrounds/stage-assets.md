---
title: Stage assets and images
category: Stages & Backgrounds
---

## Overview
Stage JSON typically references images under `images/`. Place stage artwork in your mod under the same paths used by your stage setup code or scripts.

## Prerequisites
- A stage JSON file.

## Step-by-step
1. Place stage images under `mods/<mod>/images/`.
2. Match the asset paths used by your stage scripts or default stage setup.

## Examples
`Paths.image()` loads from `images/<name>.png`:

```haxe
// utils/Paths.hx
public static function image(file:String, permanent:Bool = false, missingPrint:Bool = true):FlxGraphic {
  var path = 'images/' + file + '.' + IMAGE_EXT;
}
```

## Common pitfalls
- Missing image files referenced by stage scripts.

## Related pages
- [Image atlas formats (XML/JSON)](../assets-and-formats-reference/image-atlas-formats.md)
