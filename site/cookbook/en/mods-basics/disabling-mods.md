---
title: Disabling mods
category: Mods Basics
---

## Overview
Disabling mods simply clears the active mod folder. The engine will then load everything from `assets/`.

## Prerequisites
- None.

## Step-by-step
1. Open the Mod Menu.
2. Select **Disable Mods**.
3. Accept the selection to clear the active mod.

## Examples
The Mod Menu saves an empty string for “Disable Mods”:

```haxe
// funkin/substates/ModsMenuSubState.hx
save.data.currentMod = options[selInt] == 'Disable Mods' ? '' : options[selInt];
```

## Common pitfalls
- Forgetting that a mod may still be forced by `mods/UNIQUE_MOD.txt`.

## Related pages
- [Mod menu basics](../getting-started/mod-menu-basics.md)
- [Unique mod override (UNIQUE_MOD.txt)](./unique-mod-override.md)
