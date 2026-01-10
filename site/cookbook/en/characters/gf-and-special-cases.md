---
title: GF and special cases
category: Characters
---

## Overview
The engine positions GF differently and can hide her based on stage data. Special cases (like characters starting with `gf`) are handled during initialization.

## Prerequisites
- A chart with `gfVersion` or special character IDs.

## Step-by-step
1. Set `gfVersion` in your chart if needed.
2. Use stage JSON `hide_girlfriend` to hide GF on a stage.

## Examples
GF positioning and visibility:

```haxe
// funkin/states/PlayState.hx
if (!stageData.hide_girlfriend) {
  gf = new Character(0, 0, SONG.gfVersion);
  gfGroup.add(gf);
}

if(dad.curCharacter.startsWith('gf')) {
  dad.setPosition(GF_X, GF_Y);
  if(gf != null) gf.visible = false;
}
```

## Common pitfalls
- Forgetting that GF is hidden by stage data, not the chart itself.

## Related pages
- [Stage JSON schema](../stages-and-backgrounds/stage-json-schema.md)
