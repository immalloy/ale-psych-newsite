---

title: Quick troubleshooting checklist
category: Primeros pasos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Use this checklist to quickly isolate whether a mod issue is a path problem, a missing file, or an unsupported change.

## Prerequisites
- A mod that isn’t behaving as expected.

## Step-by-step
1. **Confirm mod selection**: open the Mod Menu and verify your mod is active.
2. **Check paths**: ensure your mod mirrors the `assets/` structure exactly.
3. **Test a simple override**: replace one image with an obvious change to confirm your mod is loading.
4. **Validate charts**: confirm `songs/<song>/charts/<difficulty>.json` exists in the mod.
5. **Check for forced mods**: remove `mods/UNIQUE_MOD.txt` if you need menu selection.

## Examples
The active mod folder is determined during initialization:

```haxe
// core/backend/Mods.hx
if (!FileSystem.exists(Paths.modFolder()))
  folder = '';
```

## Common pitfalls
- A missing mod folder will cause `Mods.folder` to reset to empty, disabling mods.

## Related pages
- [How mods are loaded (high level)](./how-mods-are-loaded.md)
- [Mod folder anatomy](../mods-basics/mod-folder-anatomy.md)
- [Missing files](../file-paths-and-load-order/missing-files.md)
