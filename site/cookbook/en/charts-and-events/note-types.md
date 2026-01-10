---
title: Note types (mods)
category: Charts & Events
---

## Overview
Note types are scripts that run when a note type is encountered. Like events, they live under `noteTypes/` and load dynamically.

## Prerequisites
- A chart using a custom `noteType`.

## Step-by-step
1. Assign a note type in your chart (string value).
2. Create `mods/<mod>/noteTypes/<NoteType>.hx` or `.lua`.
3. Run the chart to ensure the script loads.

## Examples
`PlayState` collects note types during chart generation and loads scripts:

```haxe
// funkin/states/PlayState.hx
if(!noteTypes.contains(swagNote.noteType)) {
  noteTypes.push(swagNote.noteType);
}

for (notetype in noteTypes)
  loadScript('noteTypes/' + notetype);
```

## Common pitfalls
- Using an integer note type in the chart; strings are expected for script lookup.

## Related pages
- [Script runtimes (HScript & Lua)](../scripts-and-hooks/script-runtimes.md)
- [Chart file structure](./chart-file-structure.md)
