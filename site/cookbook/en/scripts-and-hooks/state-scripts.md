---
title: State scripts (mods)
category: Scripts & Hooks
---

## Overview
Custom states can load scripts from `scripts/states/<state>.hx` or `.lua` plus a global script. This allows mods to define scripted states without rebuilding.

## Prerequisites
- A custom state entry point that loads a `CustomState`.

## Step-by-step
1. Create `mods/<mod>/scripts/states/<state>.hx` or `.lua`.
2. (Optional) Create `mods/<mod>/scripts/states/global.hx` or `.lua` for shared logic.

## Examples
```haxe
// funkin/states/CustomState.hx
loadScript('scripts/states/' + scriptName, hsArguments, luaArguments);
loadScript('scripts/states/global', hsArguments, luaArguments);
```

## Common pitfalls
- Assuming scripts auto-load for any state without a `CustomState` entry point. 

## Related pages
- [Script runtimes (HScript & Lua)](./script-runtimes.md)
