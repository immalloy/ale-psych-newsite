---
title: Custom substates via scripts
category: Advanced & Engine Extension
---

## Overview
`CustomSubState` loads scripts under `scripts/substates/` for scripted substates.

## Prerequisites
- A substate created with `CustomSubState`.

## Step-by-step
1. Create `mods/<mod>/scripts/substates/<name>.hx` or `.lua`.
2. Ensure the substate is instantiated using `CustomSubState`.

## Examples
```haxe
// funkin/substates/CustomSubState.hx
loadScript('scripts/substates/' + scriptName, hsArguments, luaArguments);
```

## Common pitfalls
- Substates won’t auto-load scripts unless they use `CustomSubState`.

## Related pages
- [Substate scripts (mods)](../scripts-and-hooks/substate-scripts.md)
