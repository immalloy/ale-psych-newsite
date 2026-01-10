---
title: Image atlas formats (XML/JSON)
category: Assets & Formats Reference
---

## Overview
Image atlases can use XML (`.xml`) or JSON (`.json`) sidecar files, and are resolved via `Paths.xml()` or `Paths.imageJson()`.

## Prerequisites
- An image atlas exported with XML/JSON data.

## Step-by-step
1. Place atlas PNGs under `images/`.
2. Place matching `.xml` or `.json` alongside the PNG (same base name).

## Examples
```haxe
// utils/Paths.hx
public static function xml(file:String, missingPrint:Bool = true):String
  return getContent('images/' + file + '.xml');

public static function imageJson(file:String, missingPrint:Bool = true):String
  return getContent('images/' + file + '.json');
```

## Common pitfalls
- Inconsistent base name between PNG and atlas metadata.

## Related pages
- [Character images & atlases](../characters/character-images-and-atlases.md)
