---
title: Where scripts live
category: Scripts & Hooks
---

## Overview
Script paths are hardcoded for various contexts: states, substates, events, note types, stage scripts, character scripts, and song scripts. All are loaded via `loadScript()`.

## Prerequisites
- None.

## Step-by-step
1. Place scripts under `scripts/` for state/substate hooks.
2. Place event and note-type scripts under `events/` and `noteTypes/`.
3. Place song scripts under `songs/<song>/scripts/`.

## Examples
PlayState loads scripts for songs, stages, note types, and events:

```haxe
// funkin/states/PlayState.hx
for (folder in [songRoute + '/scripts', 'scripts/songs'])
  if (Paths.exists(folder))
    for (file in Paths.readDirectory(folder))
      if (file.endsWith('.lua') || file.endsWith('.hx'))
        loadScript(folder + '/' + file);

loadScript('stages/' + curStage);
```

State scripts are loaded from `scripts/states/`:

```haxe
// funkin/states/CustomState.hx
loadScript('scripts/states/' + scriptName, hsArguments, luaArguments);
loadScript('scripts/states/global', hsArguments, luaArguments);
```

## Common pitfalls
- Putting scripts under `assets/scripts` instead of `mods/<mod>/scripts` when modding.

## Related pages
- [State scripts (mods)](./state-scripts.md)
- [Substate scripts (mods)](./substate-scripts.md)
