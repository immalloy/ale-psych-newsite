---
title: JSON loading rules
category: Assets & Formats Reference
---

## Overview
JSON is loaded via `Paths.json()`, which appends `.json` to the path and resolves through mod + assets.

## Prerequisites
- A JSON file you want to load.

## Step-by-step
1. Place your JSON file in your mod with the same relative path.
2. Call or reference the JSON by its base path (without `.json`).

## Examples
```haxe
// utils/Paths.hx
public static function json(file:String, missingPrint:Bool = true):Dynamic {
  var path:String = file + '.json';
  if (!exists(path)) return null;
  return Json.parse(getContent(path));
}
```

## Common pitfalls
- Including `.json` twice when using helpers.

## Related pages
- [YAML loading rules](./yaml-loading-rules.md)
