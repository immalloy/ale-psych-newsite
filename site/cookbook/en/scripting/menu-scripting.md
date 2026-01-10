---
title: Menu Scripting
category: Scripting
---

# Menu Scripting

Create new menus or replace existing ones without touching engine source. ALE Psych supports HScript for full control and Lua for scripted menus.

## HScript menus

### Create a menu

Add a `.hx` script to `scripts/states/`. The filename becomes the menu identifier.

```
mods/<mod-name>/scripts/states/MyMenu.hx
```

### Modify a menu

- Copy the desired menu from `assets/scripts/states` into your mod's `scripts/states/` folder.
- Edit the copy; the engine prefers your version.
- Enable the FPS counter to see the current state name while testing.

### Load a menu

Use `CoolUtil.switchState` to load a scripted state:

```haxe
CoolUtil.switchState(new CustomState('ScriptName'));
```

## Lua menus

### Create a menu

Place a `.lua` script in `scripts/states/`:

```
mods/<mod-name>/scripts/states/MyMenu.lua
```

### Modify a menu

Base menus are HScript-only. To override them with Lua, create an empty `.hx` file with the same name and add your Lua script; both will execute together.

### Load a menu

Use the Lua helper to switch states:

```lua
switchState('funkin.states.CustomState', {'ScriptName'})
```

## Notes

- HScript can create and modify menus; Lua can create menus and piggyback on the empty `.hx` override trick.
- Keep filenames consistent; the engine resolves states by script name.

## TODO

TODO: This page is unfinished - complete this section.
