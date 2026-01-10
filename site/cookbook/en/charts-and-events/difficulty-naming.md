---
title: Difficulty naming
category: Charts & Events
---

## Overview
Difficulty names map directly to filenames (`<difficulty>.json`). The engine passes the difficulty string into the path resolution.

## Prerequisites
- A known difficulty label.

## Step-by-step
1. Use lowercase difficulty names (example: `easy`, `normal`, `hard`).
2. Match the filename with the difficulty string you pass to `loadSong()` or menu selection.

## Examples
```haxe
// utils/cool/PlayStateUtil.hx
var json = FileUtil.searchComplexFile('songs/' + name + '/charts/' + difficulty + '.json');
```

## Common pitfalls
- Using `Hard.json` while the engine requests `hard`.

## Related pages
- [Chart discovery rules](./chart-discovery-rules.md)
