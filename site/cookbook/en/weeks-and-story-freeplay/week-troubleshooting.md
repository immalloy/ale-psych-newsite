---
title: Week troubleshooting
category: Weeks & Story/Freeplay
---

## Overview
If week files aren’t showing up, you need to confirm whether the runtime actually loads week JSONs from `weeks/`. The editor clearly reads and writes them, but runtime code wasn’t located in the current scan.

## Prerequisites
- A week file that does not appear in menus.

## Step-by-step
1. Confirm your week JSON is valid and saved under `weeks/`.
2. **Needs verification**: Search for runtime week loading in the engine to confirm support.

## Examples
The editor checks for valid week JSON fields:

```haxe
// funkin/editors/WeekEditorState.hx
if(loadedWeek.weekCharacters != null && loadedWeek.weekName != null) // Make sure it's really a week
```

## Common pitfalls
- Assuming week files are loaded in runtime without verifying the loader.

## Related pages
- [Week file schema (from editor)](./week-file-schema.md)
