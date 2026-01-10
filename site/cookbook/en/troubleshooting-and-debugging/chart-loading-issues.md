---
title: Chart loading issues
category: Troubleshooting & Debugging
---

## Overview
Chart loading failures are reported by `PlayStateUtil` when it can’t find a chart JSON.

## Prerequisites
- A chart that doesn’t load.

## Step-by-step
1. Ensure the chart path is `songs/<song>/charts/<difficulty>.json`.
2. Verify the song name matches the folder name (normalized).

## Examples
```haxe
// utils/cool/PlayStateUtil.hx
if (json == null)
  debugTrace(name + '/charts/' + difficulty + '.json', MISSING_FILE);
```

## Common pitfalls
- Difficulty filename mismatch.

## Related pages
- [Chart discovery rules](../charts-and-events/chart-discovery-rules.md)
