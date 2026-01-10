---
title: Custom states via scripts
category: Advanced & Engine Extension
---

## Overview
Custom states can be scripted using `CustomState`, which loads scripts from `scripts/states/`.

## Prerequisites
- A mod with script files.

## Step-by-step
1. Create `mods/<mod>/scripts/states/<name>.hx` or `.lua`.
2. Ensure a state is instantiated using `CustomState` with your script name.

## Examples
```haxe
// funkin/states/CustomState.hx
loadScript('scripts/states/' + scriptName, hsArguments, luaArguments);
```

## Common pitfalls
- Assuming all states are scriptable without using `CustomState`.

## Related pages
- [State scripts (mods)](../scripts-and-hooks/state-scripts.md)
