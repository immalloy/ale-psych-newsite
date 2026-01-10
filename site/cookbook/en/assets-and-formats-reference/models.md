---
title: Models (if used)
category: Assets & Formats Reference
---

## Overview
Model files can be loaded from `models/` using `Paths.model()`. This expects `.obj` files.

## Prerequisites
- A model file (`.obj`).

## Step-by-step
1. Place `mods/<mod>/models/<name>.obj`.
2. Reference it by base name in the code or script that loads models.

## Examples
```haxe
// utils/Paths.hx
public static function model(file:String, missingPrint:Bool = true):String {
  var path:String = 'models/' + file + '.obj';
  return getPath(path);
}
```

## Common pitfalls
- Models won’t appear unless some part of the game references them.

## Related pages
- [Assets folder mirror reference](./assets-folder-reference.md)
