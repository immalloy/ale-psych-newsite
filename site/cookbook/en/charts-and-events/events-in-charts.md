---
title: Events in charts
category: Charts & Events
---

## Overview
Event notes are collected from the chart’s `events` data or generated from negative note entries. They are processed in `PlayState` and can trigger scripts.

## Prerequisites
- A chart with events.

## Step-by-step
1. Add event entries to the chart’s `events` array or use negative note entries (depending on chart format).
2. Provide scripts for the event names under `events/`.

## Examples
`PlayState` loads `events.json` when available:

```haxe
// funkin/states/PlayState.hx
if (Paths.exists(songRoute + '/charts/events.json'))
  var eventsData:Array<Dynamic> = CoolUtil.loadPlayStateSong(SONG.song, 'events').json.events;
```

`PlayStateUtil` converts negative notes into events when `events` is missing:

```haxe
// utils/cool/PlayStateUtil.hx
if (json.events == null) {
  json.events = [];
  // negative note indexes become events
}
```

## Common pitfalls
- Forgetting to include an event script with the same name as the event.

## Related pages
- [Event scripts (mods)](./event-scripts.md)
- [Event trigger flow](./event-trigger-flow.md)
