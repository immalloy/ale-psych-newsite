---

title: Installing mods (built engine)
category: Primeros pasos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Installing a mod is as simple as dropping a folder into `mods/`. The Mod Menu lists each subfolder (except for certain reserved folders) and lets you activate one mod at a time.

## Prerequisites
- A mod folder from a mod author.

## Step-by-step
1. Copy the mod folder into `mods/`.
2. Launch the engine.
3. Open the Mod Menu and select the new mod folder.
4. Restart or return to the menu if required by the engine to apply the selection.

## Examples
The Mod Menu enumerates subfolders and filters out common asset folder names:

```haxe
// funkin/substates/ModsMenuSubState.hx
for (folder in FileSystem.readDirectory('mods'))
  if (FileSystem.isDirectory('mods/' + folder) && !ignoreFolders.contains(folder))
    options.push(folder);
```

## Common pitfalls
- Placing a mod **inside** another mod folder (nested mods won’t be detected).
- Naming a mod folder `characters`, `songs`, `scripts`, etc. — these are ignored by the Mod Menu’s folder filter.

## Related pages
- [Mod menu basics](./mod-menu-basics.md)
- [Mod folder detection and ignore list](../file-paths-and-load-order/mod-folder-detection.md)
- [Single-mod workflow](../mods-basics/single-mod-workflow.md)
