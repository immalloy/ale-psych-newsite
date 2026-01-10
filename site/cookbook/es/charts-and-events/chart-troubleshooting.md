---

title: Chart troubleshooting
category: Charts y eventos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Most chart issues are caused by incorrect paths or missing difficulty files. The engine logs missing files when chart JSON cannot be found.

## Prerequisites
- A chart that fails to load.

## Step-by-step
1. Confirm the chart file exists under `songs/<song>/charts/<difficulty>.json`.
2. Verify the song folder name matches the chart name (normalized).
3. Check for missing-file logs if available.

## Examples
```haxe
// utils/cool/PlayStateUtil.hx
if (json == null)
  debugTrace(name + '/charts/' + difficulty + '.json', MISSING_FILE);
```

## Common pitfalls
- Difficulty mismatch (e.g., `normal.json` expected but file is `hard.json`).

## Related pages
- [Chart discovery rules](./chart-discovery-rules.md)
