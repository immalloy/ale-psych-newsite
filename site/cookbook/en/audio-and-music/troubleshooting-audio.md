---
title: Troubleshooting audio loads
category: Audio & Music
---

## Overview
Most audio issues are caused by incorrect filenames or missing `song/` subfolders. Use the engine’s path rules to verify your setup.

## Prerequisites
- A song that fails to play audio.

## Step-by-step
1. Confirm the file is located under `songs/<song>/song/`.
2. Ensure the base name matches (`Inst` / `Voices`).
3. Check whether the build expects `.ogg` or `.mp3`.

## Examples
The engine composes audio paths directly:

```haxe
// utils/Paths.hx
return returnSound(route + '/song/Inst', permanent, missingPrint);
```

## Common pitfalls
- Wrong base name (e.g., `Instrumental.ogg`).

## Related pages
- [Song audio structure](./song-audio-structure.md)
- [Audio format notes](./audio-format-notes.md)
