---

title: Default stage assignment
category: Escenarios y fondos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
If a chart doesn’t specify a stage, the engine maps the song name to a default stage using `StageData.vanillaSongStage()`.

## Prerequisites
- None.

## Step-by-step
1. If you want a custom stage, set `stage` in the chart JSON.
2. Otherwise, the engine will choose a default stage by song name.

## Examples
```haxe
// utils/StageData.hx
public static function vanillaSongStage(songName):String
{
  switch (CoolUtil.formatToSongPath(songName)) {
    case 'spookeez' | 'south' | 'monster':
      return 'spooky';
    // ...
  }
  return 'stage';
}
```

## Common pitfalls
- Expecting a custom stage to load without setting `stage` in the chart.

## Related pages
- [Stage assignment from chart](../charts-and-events/stage-assignment-from-chart.md)
