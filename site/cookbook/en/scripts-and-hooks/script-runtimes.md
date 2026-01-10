---
title: Script runtimes (HScript & Lua)
category: Scripts & Hooks
---

## Overview
The engine supports **HScript** (`.hx`) and **Lua** (`.lua`) for mods. Scripts are loaded through `ScriptState.loadScript()` and can be used in states, events, note types, and character/stage scripts.

## Prerequisites
- A mod folder with a script file.

## Step-by-step
1. Create a script in your mod using `.hx` or `.lua`.
2. Place it in a supported scripts folder (see [Where scripts live](./where-scripts-live.md)).
3. Trigger it through the appropriate system (state, event, note type, character, or song script).

## Examples
Script loader dispatches based on extension:

```haxe
// core/backend/ScriptState.hx
if (path.endsWith('.hx')) loadHScript(path.substring(0, path.length - 3), haxeArgs);
if (path.endsWith('.lua')) loadLuaScript(path.substring(0, path.length - 4), luaArgs);
```

## Common pitfalls
- Using an unsupported extension or wrong folder path.

## Related pages
- [Where scripts live](./where-scripts-live.md)
- [Event scripts (mods)](../charts-and-events/event-scripts.md)
