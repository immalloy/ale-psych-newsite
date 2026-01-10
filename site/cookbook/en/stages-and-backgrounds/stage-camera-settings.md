---
title: Stage camera settings
category: Stages & Backgrounds
---

## Overview
Stage JSON defines camera offsets and zoom values, which `PlayState` uses to set up the camera.

## Prerequisites
- A stage JSON file.

## Step-by-step
1. Set `defaultZoom` and camera position arrays in your stage JSON.
2. Run the stage and adjust values until the framing looks correct.

## Examples
```haxe
// funkin/states/PlayState.hx
if(stageData.camera_speed != null)
  cameraSpeed = stageData.camera_speed;

boyfriendCameraOffset = stageData.camera_boyfriend;
opponentCameraOffset = stageData.camera_opponent;
```

## Common pitfalls
- Omitting camera arrays results in null values; the engine falls back to `[0, 0]`.

## Related pages
- [Stage JSON schema](./stage-json-schema.md)
