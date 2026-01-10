---
title: Week file schema (from editor)
category: Weeks & Story/Freeplay
---

## Overview
Week files are JSON structures used by the Week Editor. This schema defines week name, songs list, characters, and unlock rules.

## Prerequisites
- JSON editing.

## Step-by-step
1. Start from an existing week JSON in `assets/weeks/`.
2. Edit fields like `weekCharacters`, `songs`, `storyName`, `weekName`.

## Examples
Schema from the editor:

```haxe
// funkin/editors/WeekEditorState.hx
typedef WeekFile = {
  var songs:Array<Dynamic>;
  var weekCharacters:Array<String>;
  var weekBackground:String;
  var weekBefore:String;
  var storyName:String;
  var weekName:String;
  var startUnlocked:Bool;
  var hideStoryMode:Bool;
  var hideFreeplay:Bool;
  var hiddenUntilUnlocked:Bool;
  var difficulties:String;
}
```

## Common pitfalls
- **Needs verification**: Runtime loading of week JSON is not located yet; ensure the build actually reads week files outside the editor before relying on them.

## Related pages
- [Week menu art](./week-menu-art.md)
