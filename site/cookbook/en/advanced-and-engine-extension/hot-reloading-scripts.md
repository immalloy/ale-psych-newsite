---
title: Hot-reloading scripts (developer mode)
category: Advanced & Engine Extension
---

## Overview
When developer mode and script hot-reloading are enabled, `CustomState` can watch script files and reset the state when they change.

## Prerequisites
- Developer mode enabled and `scriptsHotReloading` set in engine data.

## Step-by-step
1. Enable developer mode in engine config.
2. Enable `scriptsHotReloading` in data config.
3. Modify scripts while the state is running to trigger reload.

## Examples
```haxe
// funkin/states/CustomState.hx
@:unreflective private var reloadThread:Bool = CoolVars.data.developerMode && CoolVars.data.scriptsHotReloading;
```

Engine config fields:

```haxe
// core/structures/DataJSON.hx
var developerMode:Bool;
var scriptsHotReloading:Bool;
```

## Common pitfalls
- This feature only applies to `CustomState` and developer builds.

## Related pages
- [Script runtimes (HScript & Lua)](../scripts-and-hooks/script-runtimes.md)
