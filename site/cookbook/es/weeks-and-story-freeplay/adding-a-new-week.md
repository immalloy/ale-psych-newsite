---

title: Adding a new week (mods-only)
category: Semanas e historia/juego libre
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Week JSON files can be created via the editor and stored under `weeks/`. The runtime loader has not yet been located in this repo, so mod support for weeks needs verification.

## Prerequisites
- Week JSON created by the Week Editor.

## Step-by-step
1. Create a week JSON using the Week Editor.
2. Place it in `mods/<mod>/weeks/<week>.json`.
3. **Needs verification**: Confirm the runtime story/freeplay menus load weeks from `weeks/`.

## Examples
The editor saves week files as JSON:

```haxe
// funkin/editors/WeekEditorState.hx
var data:String = haxe.Json.stringify(weekFile, "	");
_file.save(data, weekFileName + ".json");
```

## Common pitfalls
- **Needs verification**: There is no confirmed runtime loader for week files yet.

## Related pages
- [Week file schema (from editor)](./week-file-schema.md)
