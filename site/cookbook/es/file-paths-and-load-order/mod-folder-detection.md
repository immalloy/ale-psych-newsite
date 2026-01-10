---

title: Mod folder detection and ignore list
category: Rutas de archivos y orden de carga
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
The Mod Menu scans the `mods/` directory and ignores certain folders that are reserved for asset types (like `songs`, `characters`, etc.). This keeps the menu focused on **mod root folders** only.

## Prerequisites
- A `mods/` directory with folders.

## Step-by-step
1. Create mod folders directly under `mods/` (example: `mods/MyMod`).
2. Avoid naming your mod folder like a content subfolder (`songs`, `characters`, etc.).

## Examples
The ignore list is hardcoded in the Mod Menu:

```haxe
// funkin/substates/ModsMenuSubState.hx
var ignoreFolders:Array<String> = [
  'characters','events','noteTypes','data','songs','music','sounds',
  'shaders','videos','images','stages','weeks','fonts','scripts','Disable Mods'
];
```

## Common pitfalls
- Naming a mod folder `songs` or `characters` will cause it to be ignored.

## Related pages
- [Installing mods (built engine)](../getting-started/installing-mods.md)
- [Mod menu basics](../getting-started/mod-menu-basics.md)
