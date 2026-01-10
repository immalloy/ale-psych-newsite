---
title: Animation definitions
category: Characters
---

## Overview
Character animations are defined by `AnimArray` entries in the character JSON. Each animation can use prefix or indices.

## Prerequisites
- A character atlas and list of animation names.

## Step-by-step
1. Add `animations` entries for each animation you want.
2. Use `indices` when you need to map specific frames.

## Examples
Animation schema:

```haxe
// funkin/visuals/game/Character.hx
typedef AnimArray = {
  var anim:String;
  var name:String;
  var fps:Int;
  var loop:Bool;
  var indices:Array<Int>;
  var offsets:Array<Int>;
}
```

The loader uses prefix or indices depending on `indices`:

```haxe
// funkin/visuals/game/Character.hx
if(animIndices != null && animIndices.length > 0)
  animation.addByIndices(animAnim, animName, animIndices, "", animFps, animLoop);
else
  animation.addByPrefix(animAnim, animName, animFps, animLoop);
```

## Common pitfalls
- Missing offsets array or wrong length; the engine expects `[x, y]`.

## Related pages
- [Character JSON schema](./character-json-schema.md)
