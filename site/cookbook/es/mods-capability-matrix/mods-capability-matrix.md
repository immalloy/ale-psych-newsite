---

title: Mods Capability Matrix (canonical)
category: Matriz de capacidades de mods
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
This page lists what **mods can override or add** based on the engine’s actual loading logic. Each claim maps to a concrete loader or file resolver in the codebase.

## Prerequisites
- None.

## What mods can override
- **Any asset resolved through `Paths`** (images, sounds, music, fonts, videos, JSON/YAML data) because `Paths.getPath()` checks `mods/<active-mod>` first. 
- **Songs and charts** by placing files under `songs/<song>/` (resolved via `FileUtil.searchComplexFile()` and `PlayStateUtil.loadPlayStateSong()`).
- **Stages** by providing `stages/<stage>.json` (`StageData.getStageFile()`).
- **Characters** by providing `characters/<id>.json` (`Character.loadCharacterFile()`).
- **Scripts** (HScript/Lua) by placing `.hx` or `.lua` scripts in supported script paths (events, note types, stage scripts, character scripts, song scripts).

## What mods can add (if referenced)
- **New songs**: add `songs/<song>/charts/<difficulty>.json` and `songs/<song>/song/Inst.ogg` (plus `Voices.ogg` if needed).
- **New characters**: add `characters/<id>.json` and referenced sprite assets, then reference the ID from a chart or event.
- **New stages**: add `stages/<stage>.json` and reference the stage from a chart or song data.
- **New event/note-type scripts**: add `events/<name>.hx` or `noteTypes/<name>.hx` and reference the name from charts.

## Discovery rules (evidence-based)
- **Active mod folder** is set via `mods/UNIQUE_MOD.txt` or save data (`Mods.folder`).
- **Path priority** is always `mods/<active-mod>/` first, then `assets/`.
- **Case-insensitive song lookup**: `FileUtil.searchFile()` compares normalized names (`formatToSongPath`).

## Priority rules
1. If `mods/UNIQUE_MOD.txt` exists, it **forces** the mod folder.
2. Otherwise the Mod Menu selection sets `Mods.folder`.
3. `Paths` and `FileUtil` resolve assets by checking the active mod folder before `assets/`.

## Limits / edge cases
- Only **one mod** is active at a time (no merge of multiple mods).
- If a file is not found in the mod folder, it falls back to `assets/`.
- **Needs verification**: Week JSON runtime loading (the editor defines `WeekFile`, but runtime loaders are not located yet). Check for week loading code beyond the editor before claiming mod support for weeks in story/freeplay.

## Examples
### Mods-first file resolution
```haxe
// utils/Paths.hx
if (exists(file, MODS))
  return modFolder() + '/' + file;
if (exists(file, ASSETS))
  return 'assets/' + file;
```

### Song file discovery
```haxe
// utils/cool/PlayStateUtil.hx
var json = FileUtil.searchComplexFile('songs/' + name + '/charts/' + difficulty + '.json');
```

### Script discovery (events/note types)
```haxe
// funkin/states/PlayState.hx
for (notetype in noteTypes)
  loadScript('noteTypes/' + notetype);
for (event in eventsPushed)
  loadScript('events/' + event);
```

## Related pages
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
- [Script runtimes (HScript & Lua)](../scripts-and-hooks/script-runtimes.md)
