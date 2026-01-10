---

title: Engine overview (mods-first)
category: Primeros pasos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
This engine is built to run **mods from the `mods/` folder**. You select one active mod at a time, and the engine resolves files from that mod before falling back to built-in assets. The engine bootstraps a normal HaxeFlixel game, but for modders the key point is: you can ship a complete mod without rebuilding the engine.

## Prerequisites
- A built copy of the engine (no source build required).
- Basic file management (create folders and copy files).

## Step-by-step
1. Locate the game’s install folder and confirm there is a `mods/` directory.
2. Create a new mod folder inside `mods/` (for example `mods/MyMod`).
3. Mirror the built-in `assets/` structure inside your mod folder.
4. Use the in-game Mod Menu to select your mod.
5. Launch gameplay to verify the mod loads before assets.

## Examples
This engine initializes its main game state in `core/Main.hx`, and mod selection happens separately via the mods backend and menu. The important concept is that **mods are resolved at runtime** without rebuilding.

```haxe
// core/Main.hx (bootstraps the game state)
class Main extends Sprite {
  private static var game = {
    width: 1280,
    height: 720,
    initialState: #if mobile CopyState #else MainState #end,
    framerate: 60
  };
}
```

## Common pitfalls
- Expecting mods to stack: the engine uses **one active mod folder at a time**.
- Placing files next to `assets/` instead of inside a mod folder. Only the active mod is prioritized.

## Related pages
- [How mods are loaded (high level)](./how-mods-are-loaded.md)
- [Mod folder anatomy](../mods-basics/mod-folder-anatomy.md)
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
