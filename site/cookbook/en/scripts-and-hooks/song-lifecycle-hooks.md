---
title: Song lifecycle hooks
category: Scripts & Hooks
---

## Overview
Use these hooks to respond to the start and end of songs. They’re called directly in PlayState.

## Prerequisites
- A PlayState script.

## Step-by-step
1. Implement `onSongStart` to run logic when the song begins.
2. Implement `onEndSong` to run logic before leaving the song.

## Examples
```haxe
// funkin/states/PlayState.hx
callOnScripts('onSongStart');
var ret:Array<Dynamic> = callOnScripts('onEndSong');
```

## Common pitfalls
- Assuming `onEndSong` always runs; it may depend on state transitions.

## Related pages
- [PlayState callbacks (hook list)](./playstate-callbacks.md)
