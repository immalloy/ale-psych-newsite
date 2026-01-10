---
title: Substate scripts (mods)
category: Scripts & Hooks
---

## Overview
Substates can be scripted via `scripts/substates/<name>.hx` or `.lua`, plus a global substate script.

## Prerequisites
- A substate that uses `CustomSubState`.

## Step-by-step
1. Create `mods/<mod>/scripts/substates/<name>.hx` or `.lua`.
2. (Optional) Create `mods/<mod>/scripts/substates/global.hx` or `.lua`.

## Examples
```haxe
// funkin/substates/CustomSubState.hx
loadScript('scripts/substates/' + scriptName, hsArguments, luaArguments);
loadScript('scripts/substates/global', hsArguments, luaArguments);
```

## Common pitfalls
- Substate scripts won’t run unless the substate is created via `CustomSubState`.

## Related pages
- [Script runtimes (HScript & Lua)](./script-runtimes.md)
