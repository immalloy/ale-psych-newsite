---
title: Substate Scripting
category: Scripting
---

# Substate Scripting

Substates power overlays like pause, game over, and transitions. Use HScript for full control or Lua with an override workaround.

## HScript substates

### Create a substate

Add a `.hx` script to `scripts/substates/`.

```
mods/<mod-name>/scripts/substates/MySubState.hx
```

### Modify a substate

- Copy the target substate from `assets/scripts/substates` into your mod's `scripts/substates/` folder.
- Edit the copy; the engine will load yours first.
- Use the FPS counter to confirm which substate is active while testing.

### Open a substate

```haxe
CoolUtil.openSubState(new CustomSubState('ScriptName'));
```

## Lua substates

### Create a substate

Place a `.lua` script under `scripts/substates/`:

```
mods/<mod-name>/scripts/substates/MySubState.lua
```

### Modify a substate

Base substates are written in HScript. To override them with Lua, pair your Lua script with an empty `.hx` file of the same name so both run together.

### Open a substate

```lua
openSubState('funkin.substates.CustomSubState', {'ScriptName'})
```

## Developer notes

- Substates run on top of the parent state; close them to resume gameplay.
- Use `close()` in HScript or `closeSubState()` in Lua when your overlay is done.
- Keep logic efficient because both the substate and parent state update while open.

## TODO

TODO: This page is unfinished - complete this section.
