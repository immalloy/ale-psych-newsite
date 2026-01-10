---
title: Debug prints and error categories
category: Troubleshooting & Debugging
---

## Overview
Debug logging uses `PrintType` enums like `LOAD_SONG` and `LOAD_WEEK`. Understanding these categories helps interpret logs.

## Prerequisites
- Access to runtime logs.

## Step-by-step
1. Look for debug output grouped by `PrintType`.
2. Match the print type to the subsystem you’re debugging.

## Examples
```haxe
// core/enums/PrintType.hx
var LOAD_SONG = 'load_song';
var LOAD_WEEK = 'load_week';
```

## Common pitfalls
- Assuming a missing file isn’t logged; some paths may suppress prints with `missingPrint = false`.

## Related pages
- [Missing files](../file-paths-and-load-order/missing-files.md)
