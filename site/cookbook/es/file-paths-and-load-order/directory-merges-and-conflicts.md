---

title: Directory merges and conflicts
category: Rutas de archivos y orden de carga
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
When the engine reads a directory, it can merge entries from `mods/<active-mod>/` and `assets/`. The default behavior is to stop after the first match unless configured to merge.

## Prerequisites
- None.

## Step-by-step
1. If you want to list files from both mod and assets, use features that call `Paths.readDirectory()`.
2. For overrides, make sure the file exists in the mod folder; it will take priority when a direct path is requested.

## Examples
`readDirectory()` checks the mod folder and assets in order, and can stop early:

```haxe
// utils/Paths.hx
for (folder in [modFolder(), 'assets']) {
  var finalPath:String = folder + '/' + path;
  if (FileSystem.exists(finalPath)) {
    if (FileSystem.isDirectory(finalPath)) {
      result = result.concat(FileSystem.readDirectory(finalPath));
      if (type == UNIQUE)
        break;
    }
  }
}
```

## Common pitfalls
- Expecting directory listings to always include both mod and asset files (they may stop after the first match).

## Related pages
- [Path resolution rules](./path-resolution-rules.md)
- [Mod folder anatomy](../mods-basics/mod-folder-anatomy.md)
