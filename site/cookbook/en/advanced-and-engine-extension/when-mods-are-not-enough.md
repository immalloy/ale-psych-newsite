---
title: When mods are not enough
category: Advanced & Engine Extension
---

## Overview
Mods can override and add a large amount of content, but certain changes require engine source edits (e.g., new loaders, new file formats). Use this page to decide when you’ve hit the limits.

## Prerequisites
- A clear understanding of what your mod needs to change.

## Step-by-step
1. Check whether the feature is already supported by the mod loader (`Paths` and `ScriptState`).
2. If not, consider a script-based workaround.
3. If still not possible, you may need a source build (advanced).

## Evidence-based limits
- **Single active mod** only (no merging) due to `Mods.folder` selection.
- **Only assets loaded via `Paths`** are overridable; anything not using `Paths` may require source changes.
- **New file formats** require loader code changes.

## Common pitfalls
- Assuming you can add new systems without a loader. If a path isn’t referenced in code, it won’t be loaded.

## Related pages
- [Script runtimes (HScript & Lua)](../scripts-and-hooks/script-runtimes.md)
- [Source build (advanced only)](./source-build-notes.md)
