---
title: Week unlocking rules (as defined)
category: Weeks & Story/Freeplay
---

## Overview
Week JSON defines unlock conditions like `weekBefore`, `startUnlocked`, and `hiddenUntilUnlocked`. These are editor-level definitions; runtime usage needs verification.

## Prerequisites
- A week JSON file.

## Step-by-step
1. Set `weekBefore` to another week’s filename if you want unlock chaining.
2. Use `startUnlocked` and `hiddenUntilUnlocked` for gating.
3. **Needs verification**: Confirm runtime menus use these fields.

## Examples
```haxe
// funkin/editors/WeekEditorState.hx
weekFile.weekBefore = weekBeforeInputText.text.trim();
weekFile.startUnlocked = !lockedCheckbox.checked;
weekFile.hiddenUntilUnlocked = hiddenUntilUnlockCheckbox.checked;
```

## Common pitfalls
- **Needs verification**: No runtime loader found yet.

## Related pages
- [Week file schema (from editor)](./week-file-schema.md)
