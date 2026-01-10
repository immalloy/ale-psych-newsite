---
title: Countdown assets
category: UI & HUD
---

## Overview
Countdown sprites are loaded from `images/countdown/` or `images/<stageUI>UI/` depending on stage UI type. You can override these assets in your mod.

## Prerequisites
- A stage that sets `stageUI` or uses the default.

## Step-by-step
1. Determine the `stageUI` value from your stage JSON.
2. Override countdown images in `mods/<mod>/images/countdown/` or `mods/<mod>/images/<stageUI>UI/`.

## Examples
PlayState picks countdown assets based on `stageUI`:

```haxe
// funkin/states/PlayState.hx
var introImagesArray:Array<String> = switch(stageUI) {
  case "pixel": ['${stageUI}UI/ready-pixel', '${stageUI}UI/set-pixel', '${stageUI}UI/date-pixel'];
  case "normal": ["countdown/ready", "countdown/set" ,"countdown/go"];
  default: ['${stageUI}UI/ready', '${stageUI}UI/set', '${stageUI}UI/go'];
}
```

## Common pitfalls
- Overriding `countdown/*` but your stage uses a custom `stageUI`.

## Related pages
- [Stage JSON schema](../stages-and-backgrounds/stage-json-schema.md)
