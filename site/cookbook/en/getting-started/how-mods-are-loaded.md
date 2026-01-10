---
title: How mods are loaded (high level)
category: Getting Started
---

## Overview
Mods are discovered from the `mods/` folder. The active mod is chosen either by a **forced mod** (`mods/UNIQUE_MOD.txt`) or by the selection stored in save data (set via the Mod Menu). Once selected, the engine looks for files in `mods/<active-mod>/` before it checks `assets/`.

## Prerequisites
- A `mods/` folder.
- At least one mod subfolder.

## Step-by-step
1. (Optional) To force a mod, create `mods/UNIQUE_MOD.txt` and put the mod folder name on the first line.
2. Otherwise, open the Mod Menu and select a mod. The choice is saved to the engine save data.
3. When the game loads assets, it checks the active mod folder first.

## Examples
The mods backend reads `UNIQUE_MOD.txt` if present, then falls back to save data:

```haxe
// core/backend/Mods.hx
if (FileSystem.exists('mods/UNIQUE_MOD.txt')) {
  UNIQUE_MOD = folder = sys.io.File.getContent('mods/UNIQUE_MOD.txt').split('
')[0].trim();
  return;
}

var save:FlxSave = new FlxSave();
save.bind('ALEEngineData', CoolUtil.getSavePath(false));
if (save != null)
  folder = save.data.currentMod;
```

The Mod Menu scans `mods/` and stores the selected folder name:

```haxe
// funkin/substates/ModsMenuSubState.hx
for (folder in FileSystem.readDirectory('mods'))
  if (FileSystem.isDirectory('mods/' + folder) && !ignoreFolders.contains(folder))
    options.push(folder);

save.data.currentMod = options[selInt] == 'Disable Mods' ? '' : options[selInt];
```

## Common pitfalls
- If `UNIQUE_MOD.txt` is present, the Mod Menu selection is ignored.
- Mods are disabled when `currentMod` is empty or set to “Disable Mods”.

## Related pages
- [Mod menu basics](./mod-menu-basics.md)
- [Unique mod override (UNIQUE_MOD.txt)](../mods-basics/unique-mod-override.md)
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
