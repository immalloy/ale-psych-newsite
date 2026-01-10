---
title: Save paths and mod IDs
category: Mods Basics
---

## Overview
Save data is scoped to a mod-aware path. The engine can add a mod ID to the save path so different mods don’t overwrite each other’s data.

## Prerequisites
- None.

## Step-by-step
1. Keep mod IDs consistent with your mod folder name unless your build sets a custom mod ID.
2. If you distribute multiple mods, keep them in distinct folders to avoid shared save data.

## Examples
The save path includes an optional mod segment:

```haxe
// utils/cool/FileUtil.hx
return FlxG.stage.application.meta.get('company') + '/' +
  flixel.util.FlxSave.validate(FlxG.stage.application.meta.get('file')) +
  (modSupport ? ((Mods.folder.trim() == '' ? '' : '/' + (CoolVars.data.modID ?? Mods.folder))) : '');
```

## Common pitfalls
- Reusing the same mod folder name for different mods will share save data.

## Related pages
- [Single-mod workflow](./single-mod-workflow.md)
- [How mods are loaded (high level)](../getting-started/how-mods-are-loaded.md)
