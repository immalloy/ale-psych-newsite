---
title: Stage JSON schema
category: Stages & Backgrounds
---

## Overview
Stages are defined by JSON files under `stages/`. The schema includes character positions, camera positions, zoom, and UI style.

## Prerequisites
- A stage JSON file.

## Step-by-step
1. Start from an existing stage JSON in `assets/stages/`.
2. Adjust position arrays and camera settings.
3. Place the new stage JSON in your mod folder.

## Examples
```haxe
// utils/StageData.hx
typedef StageFile = {
  var directory:String;
  var defaultZoom:Float;
  var isPixelStage:Bool;
  var stageUI:String;
  var boyfriend:Array<Dynamic>;
  var girlfriend:Array<Dynamic>;
  var opponent:Array<Dynamic>;
  var hide_girlfriend:Bool;
  var camera_boyfriend:Array<Float>;
  var camera_opponent:Array<Float>;
  var camera_girlfriend:Array<Float>;
  var camera_speed:Null<Float>;
}
```

## Common pitfalls
- Missing `stageUI` causes incorrect countdown assets.

## Related pages
- [Adding a new stage](./adding-a-new-stage.md)
