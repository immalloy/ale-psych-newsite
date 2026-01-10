---
title: Performance tips for heavy mods
category: Advanced & Engine Extension
---

## Overview
The engine caches graphics, sounds, and bytes via `Paths`. Large mods can use these caches efficiently, but also need to be mindful of memory.

## Prerequisites
- A mod with many assets.

## Step-by-step
1. Avoid loading unnecessary assets in scripts.
2. When possible, rely on cached assets.

## Examples
```haxe
// utils/Paths.hx
public static var cachedGraphics:StringMap<FlxGraphic> = new StringMap<FlxGraphic>();
public static function clearEngineCache(?clearPermanent:Bool = false) { ... }
```

## Common pitfalls
- Overusing permanent caches without clearing.

## Related pages
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
