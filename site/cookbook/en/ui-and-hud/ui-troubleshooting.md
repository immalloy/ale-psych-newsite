---
title: UI troubleshooting
category: UI & HUD
---

## Overview
UI issues are usually missing or misnamed image assets. Verify the relative path and filename used by the code.

## Prerequisites
- A UI asset that isn’t loading.

## Step-by-step
1. Confirm the asset path matches the `Paths.image()` call.
2. Check your mod folder mirrors `assets/images/`.

## Examples
```haxe
// utils/Paths.hx
public static function image(file:String, permanent:Bool = false, missingPrint:Bool = true):FlxGraphic
  var path = 'images/' + file + '.' + IMAGE_EXT;
```

## Common pitfalls
- Forgetting `.png` as the expected image extension.

## Related pages
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
