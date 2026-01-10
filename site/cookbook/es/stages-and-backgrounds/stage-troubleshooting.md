---

title: Stage troubleshooting
category: Escenarios y fondos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Stage errors are usually missing JSON or incorrect file paths. The engine returns `null` if the stage JSON is missing.

## Prerequisites
- A stage that fails to load.

## Step-by-step
1. Verify the stage JSON exists at `stages/<stage>.json`.
2. Confirm the chart’s `stage` field matches the filename.

## Examples
```haxe
// utils/StageData.hx
if (Paths.exists(path))
  rawJson = Paths.getContent(path);
else
  return null;
```

## Common pitfalls
- A missing stage JSON can cause the engine to fall back or disable stage directory overrides.

## Related pages
- [Adding a new stage](./adding-a-new-stage.md)
