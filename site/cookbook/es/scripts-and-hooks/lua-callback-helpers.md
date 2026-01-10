---

title: Lua callback helpers
category: Scripts y hooks
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Lua scripts can access helper functions exposed by callback classes. These are defined under `source/scripting/lua/callbacks/`.

## Prerequisites
- A Lua script in your mod.

## Step-by-step
1. Review available callbacks in the Lua callback classes.
2. Use the exposed functions in your Lua scripts.

## Examples
`LuaPlayState` exposes play-state control helpers:

```haxe
// source/scripting/lua/callbacks/LuaPlayState.hx
set('endSong', function() playState.endSong());
set('restartSong', function() playState.restartSong());
set('exitSong', function() playState.exitSong());
```

`LuaConductor` exposes song timing helpers:

```haxe
// source/scripting/lua/callbacks/LuaConductor.hx
set('getSongPosition', function() return Conductor.songPosition);
```

## Common pitfalls
- Assuming a helper exists without checking its callback class. If unsure, add a “Needs verification” note and locate the function.

## Related pages
- [Script runtimes (HScript & Lua)](./script-runtimes.md)
