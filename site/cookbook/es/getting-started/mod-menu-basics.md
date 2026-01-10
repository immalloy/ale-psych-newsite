---

title: Mod menu basics
category: Primeros pasos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
The Mod Menu lists detected mod folders, allows you to select one, and stores the selection in save data. A special option, **Disable Mods**, clears the active mod.

## Prerequisites
- At least one mod folder inside `mods/`.

## Step-by-step
1. Launch the engine and open the Mod Menu.
2. Use up/down controls to select a mod.
3. Press accept to save the selection.
4. The engine restarts or returns to apply the mod.

## Examples
The menu saves the selected mod name in save data, or clears it for “Disable Mods”:

```haxe
// funkin/substates/ModsMenuSubState.hx
save.data.currentMod = options[selInt] == 'Disable Mods' ? '' : options[selInt];
save.flush();
CoolUtil.resetEngine();
```

## Common pitfalls
- If `mods/UNIQUE_MOD.txt` exists, the selection you make here is ignored.

## Related pages
- [How mods are loaded (high level)](./how-mods-are-loaded.md)
- [Disabling mods](../mods-basics/disabling-mods.md)
- [Unique mod override (UNIQUE_MOD.txt)](../mods-basics/unique-mod-override.md)
