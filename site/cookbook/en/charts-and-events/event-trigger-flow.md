---
title: Event trigger flow
category: Charts & Events
---

## Overview
Event notes are sorted by time and triggered during gameplay. The engine processes queued events and calls the relevant event logic.

## Prerequisites
- A chart with events.

## Step-by-step
1. Ensure event notes are in the chart or in `events.json`.
2. Provide the matching event script.
3. Run the song and observe the event timing.

## Examples
Events are queued and processed during gameplay:

```haxe
// funkin/states/PlayState.hx
for (event in eventNotes) event.strumTime -= eventEarlyTrigger(event);
eventNotes.sort(sortByTime);

while(eventNotes.length > 0) {
  var leStrumTime:Float = eventNotes[0].strumTime;
  triggerEvent(eventNotes[0].event, value1, value2, leStrumTime);
  eventNotes.shift();
}
```

## Common pitfalls
- Event script not found (event name and filename mismatch).

## Related pages
- [Event scripts (mods)](./event-scripts.md)
