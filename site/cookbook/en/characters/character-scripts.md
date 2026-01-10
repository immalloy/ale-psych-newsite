---
title: Character scripts (mods)
category: Characters
---

## Overview
Characters can have scripts loaded from `scripts/characters/<name>.hx` or `.lua`. These scripts are loaded when the character is initialized.

## Prerequisites
- A character ID used in a chart.

## Step-by-step
1. Create `mods/<mod>/scripts/characters/<character-id>.hx` or `.lua`.
2. Select the character in your chart or via events.
3. Run the song to verify the script loads.

## Examples
```haxe
// funkin/states/PlayState.hx
function startCharacterScripts(name:String) {
  loadScript('characters/$name');
}
```

## Common pitfalls
- Script filename mismatch with the character ID.

## Related pages
- [Script runtimes (HScript & Lua)](../scripts-and-hooks/script-runtimes.md)
