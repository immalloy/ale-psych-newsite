---
title: Asset missing issues
category: Troubleshooting & Debugging
---

## Overview
If an asset is missing, `Paths` may log a missing-file message. Confirm the asset path and extension.

## Prerequisites
- Missing asset behavior.

## Step-by-step
1. Validate the file exists under `mods/<mod>/` or `assets/`.
2. Check whether the engine expects a `.png`, `.json`, `.ogg`, etc.

## Examples
```haxe
// utils/Paths.hx
if (!exists(path)) {
  if (missingPrint)
    debugTrace(path, MISSING_FILE);
  return null;
}
```

## Common pitfalls
- Incorrect extension (e.g., `.wav` where `.ogg` is expected).

## Related pages
- [Missing files](../file-paths-and-load-order/missing-files.md)
