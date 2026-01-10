---
title: Voice variants (Player/Opponent)
category: Audio & Music
---

## Overview
The engine can load alternate vocal tracks using a postfix (for example `VoicesPlayer` or `VoicesOpponent`). This is driven by character vocal settings in `PlayState`.

## Prerequisites
- A song with vocals and (optionally) multiple vocal files.

## Step-by-step
1. Add `Voices.ogg` for the default vocals.
2. Add `VoicesPlayer.ogg` or `VoicesOpponent.ogg` if your characters specify alternate vocal files.

## Examples
PlayState can request alternate voice files depending on character data:

```haxe
// funkin/states/PlayState.hx
var playerVocals = Paths.voices(songRoute, (boyfriend.vocalsFile == null || boyfriend.vocalsFile.length < 1) ? 'Player' : boyfriend.vocalsFile, true, false);
var oppVocals = Paths.voices(songRoute, (dad.vocalsFile == null || dad.vocalsFile.length < 1) ? 'Opponent' : dad.vocalsFile, true, false);
```

## Common pitfalls
- Forgetting to include the postfix in the filename (e.g., `VoicesPlayer.ogg`).

## Related pages
- [Character JSON schema](../characters/character-json-schema.md)
- [Song audio structure](./song-audio-structure.md)
