---

title: Freeplay/week visibility flags
category: Semanas e historia/juego libre
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Week JSON includes flags to hide a week in story mode or freeplay. These fields are defined by the editor, but runtime behavior needs verification.

## Prerequisites
- A week JSON file.

## Step-by-step
1. Set `hideStoryMode` or `hideFreeplay` in your week JSON.
2. **Needs verification**: Confirm runtime menus respect these flags.

## Examples
```haxe
// funkin/editors/WeekEditorState.hx
weekFile.hideStoryMode = hideCheckbox.checked;
weekFile.hideFreeplay = hideFreeplayCheckbox.checked;
```

## Common pitfalls
- **Needs verification**: Runtime usage of these flags is not located yet.

## Related pages
- [Week file schema (from editor)](./week-file-schema.md)
