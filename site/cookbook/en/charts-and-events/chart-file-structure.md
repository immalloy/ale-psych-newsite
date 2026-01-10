---
title: Chart file structure
category: Charts & Events
---

## Overview
Charts are parsed into a `SwagSong` structure. This schema includes song metadata, note sections, events, character IDs, and stage references.

## Prerequisites
- Basic JSON editing.

## Step-by-step
1. Start from an existing chart JSON in `assets/songs/<song>/charts/`.
2. Keep required fields like `song`, `notes`, `bpm`, `needsVoices`, `speed`.
3. Use `player1`, `player2`, `gfVersion`, and `stage` to select content.

## Examples
Core chart schema:

```haxe
// utils/Song.hx
typedef SwagSong = {
  var song:String;
  var notes:Array<SwagSection>;
  var events:Array<Dynamic>;
  var bpm:Float;
  var needsVoices:Bool;
  var speed:Float;
  var player1:String;
  var player2:String;
  var gfVersion:String;
  var stage:String;
  @:optional var gameOverChar:String;
  @:optional var arrowSkin:String;
  @:optional var splashSkin:String;
}
```

## Common pitfalls
- Missing required fields leads to null values and runtime issues.

## Related pages
- [Chart discovery rules](./chart-discovery-rules.md)
- [Stage assignment from chart](./stage-assignment-from-chart.md)
- [Character JSON schema](../characters/character-json-schema.md)
