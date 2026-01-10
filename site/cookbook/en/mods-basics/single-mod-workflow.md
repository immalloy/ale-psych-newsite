---
title: Single-mod workflow
category: Mods Basics
---

## Overview
This engine uses **one active mod folder** at a time. The mod is chosen either by the Mod Menu or by `UNIQUE_MOD.txt`.

## Prerequisites
- Two or more mod folders to test with.

## Step-by-step
1. Open the Mod Menu and select a mod.
2. Restart or return to the menu as needed.
3. Only the selected mod is considered for overrides.

## Examples
The active mod folder is stored in save data:

```haxe
// funkin/substates/ModsMenuSubState.hx
save.data.currentMod = options[selInt] == 'Disable Mods' ? '' : options[selInt];
```

## Common pitfalls
- Expecting multiple mods to merge. The engine only checks `mods/<active-mod>`.

## Related pages
- [How mods are loaded (high level)](../getting-started/how-mods-are-loaded.md)
- [Asset override order](../file-paths-and-load-order/asset-override-order.md)
