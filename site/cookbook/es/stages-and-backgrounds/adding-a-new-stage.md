---

title: Adding a new stage
category: Escenarios y fondos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Add a stage by creating `stages/<name>.json` and referencing it from your chart. The engine reads stage JSON via `StageData.getStageFile()`.

## Prerequisites
- A chart that sets `stage`.

## Step-by-step
1. Create `mods/<mod>/stages/<stage>.json`.
2. Set `stage` in your chart JSON to the same stage name.
3. Provide any referenced images in `mods/<mod>/images/`.

## Examples
```haxe
// utils/StageData.hx
var path:String = 'stages/' + stage + '.json';
if (Paths.exists(path))
  rawJson = Paths.getContent(path);
```

## Common pitfalls
- Stage name mismatch between chart and JSON filename.

## Related pages
- [Stage assignment from chart](../charts-and-events/stage-assignment-from-chart.md)
