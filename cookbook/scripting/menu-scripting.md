---
title: Menu Scripting
category: Scripting
---

 Menu Scripting

Create new menus or replace existing ones without touching engine source. ALE Psych supports HScript for full control and Lua for creating scripted menus.
HScript
Creating a Menu

Add a .hx script to scripts/states/ . The filename becomes the menu identifier.

mods/modName/scripts/states/MyMenu.hx
    

TEXT
Modifying a Menu

    Copy the desired menu from assets/scripts/states into your mod’s scripts/states/ .
    Edit the copy; the engine prefers your version.
    Enable the FPS counter to see the current state name while testing.

Accessing a Menu

Use CoolUtil.switchState to load a scripted state:

CoolUtil.switchState(new CustomState('ScriptName'));
    

HAXE
Lua
Creating a Menu

Place a .lua script in scripts/states/ to register a new menu:

mods/modName/scripts/states/MyMenu.lua
    

TEXT
Modifying a Menu

Base menus are HScript-only. To override them with Lua, create an empty .hx file with the same name and add your Lua script; both will execute together.
Accessing a Menu

Use the Lua helper to switch states:

switchState('funkin.states.CustomState', {'ScriptName'})
    

LUA
Notes

    HScript can create and modify menus; Lua creates menus and can piggyback on the empty .hx override trick.
    Keep filenames consistent; the engine resolves states by script name.
