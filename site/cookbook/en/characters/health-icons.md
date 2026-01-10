---
title: Health icons
category: Characters
---

## Overview
Health icons are driven by the `healthicon` field in character JSON. The HUD creates `HealthIcon` objects using these IDs.

## Prerequisites
- A character JSON with `healthicon`.

## Step-by-step
1. Set `healthicon` in your character JSON.
2. Provide matching icon assets in your mod (if overriding).

## Examples
```haxe
// funkin/visuals/game/Character.hx
healthIcon = json.healthicon;
```

```haxe
// funkin/states/PlayState.hx
iconP1 = new HealthIcon(boyfriend.healthIcon, true);
iconP2 = new HealthIcon(dad.healthIcon, false);
```

## Common pitfalls
- Health icon name mismatch with available assets.

## Related pages
- [HUD assets overview](../ui-and-hud/hud-assets-overview.md)
