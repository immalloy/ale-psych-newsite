---
title: Adding a new song audio
category: Audio & Music
---

## Overview
To add song audio via mods, create the same folder structure the engine expects and reference the song in a chart file. The engine uses `PlayStateUtil.loadPlayStateSong()` to locate the song route.

## Prerequisites
- A song chart JSON created for your song name.

## Step-by-step
1. Create `mods/<mod>/songs/<song-name>/song/`.
2. Add `Inst.ogg` and (optionally) `Voices.ogg`.
3. Add `mods/<mod>/songs/<song-name>/charts/<difficulty>.json`.
4. Launch the game and load the chart to verify audio plays.

## Examples
The song route is discovered via search across mod + assets folders:

```haxe
// utils/cool/PlayStateUtil.hx
var json = FileUtil.searchComplexFile('songs/' + name + '/charts/' + difficulty + '.json');
return { route: FileUtil.searchComplexFile('songs/' + name), json: jsonData };
```

## Common pitfalls
- Forgetting to include the `song/` subfolder.
- Mismatched song names between the folder and chart JSON.

## Related pages
- [Song audio structure](./song-audio-structure.md)
- [Chart file structure](../charts-and-events/chart-file-structure.md)
