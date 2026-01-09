---
title: Menu Scripting
category: Scripting
---
 Substate Scripting

Substates power overlays like pause, game over, and transition screens. Use HScript for full control or Lua with an override workaround.
HScript
Creating a Substate

Add a .hx script to scripts/substates/ . The filename becomes the submenu identifier.

mods/modName/scripts/substates/MySubMenu.hx
    

TEXT
Modifying a Substate

    Copy the target substate from assets/scripts/substates into your mod’s scripts/substates/ .
    Edit the copy; the engine will load yours first.
    Use the FPS counter to confirm which submenu is active while testing.

Accessing a Substate

Open a scripted substate from code:

CoolUtil.openSubState(new CustomSubState('ScriptName'));
    

HAXE
Lua
Creating a Substate

Place a .lua script under scripts/substates/ :

mods/modName/scripts/substates/MySubMenu.lua
    

TEXT
Modifying a Substate

Base substates are written in HScript. To override them with Lua, pair your Lua script with an empty .hx file of the same name so both run together.
Accessing a Substate

Use the Lua helper to open a submenu:

openSubState('funkin.substates.CustomSubState', {'ScriptName'})
    

LUA
Developer Notes

    Substates run on top of the parent state; close them to resume underlying logic.
    Use close() in HScript or closeSubState() in Lua when your overlay is done.
    Keep logic efficient because both the substate and parent state update while the submenu is open.
