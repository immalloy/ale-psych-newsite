---

title: Stage assignment from chart
category: Charts y eventos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Charts can specify a `stage` field. If it’s missing, the engine selects a default stage based on the song name.

## Prerequisites
- A chart JSON with a `stage` field.

## Step-by-step
1. Set `stage` to your stage ID in the chart JSON.
2. Provide a `stages/<stage>.json` file in your mod.

## Examples
`PlayState` applies the stage from the chart or falls back to defaults:

```haxe
// funkin/states/PlayState.hx
if(SONG.stage != null) {
  // uses stage
} else {
  SONG.stage = StageData.vanillaSongStage(SONG.song);
}
```

`StageData` reads the stage JSON:

```haxe
// utils/StageData.hx
var path:String = 'stages/' + stage + '.json';
if (Paths.exists(path))
  rawJson = Paths.getContent(path);
```

## Common pitfalls
- Stage name mismatch between chart and stage JSON filename.

## Related pages
- [Stage JSON schema](../stages-and-backgrounds/stage-json-schema.md)
