---
title: Unique mod override (UNIQUE_MOD.txt)
category: Mods Basics
---

## Overview
`mods/UNIQUE_MOD.txt` forces a specific mod folder name and **overrides Mod Menu selection**. This is useful for releases that should always load a particular mod.

## Prerequisites
- Access to the `mods/` directory.

## Step-by-step
1. Create `mods/UNIQUE_MOD.txt`.
2. Put the mod folder name on the first line.
3. Launch the engine; it will load that mod automatically.

## Examples
The mod loader reads the first line of `UNIQUE_MOD.txt`:

```haxe
// core/backend/Mods.hx
if (FileSystem.exists('mods/UNIQUE_MOD.txt')) {
  UNIQUE_MOD = folder = sys.io.File.getContent('mods/UNIQUE_MOD.txt').split('
')[0].trim();
  return;
}
```

## Common pitfalls
- Typo in the mod folder name will result in mods being disabled.

## Related pages
- [How mods are loaded (high level)](../getting-started/how-mods-are-loaded.md)
- [Mod menu basics](../getting-started/mod-menu-basics.md)
