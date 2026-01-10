---

title: Event scripts (mods)
category: Charts y eventos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Event scripts live under `events/` and can be written in HScript (`.hx`) or Lua (`.lua`). The engine loads them dynamically when the event appears in the chart.

## Prerequisites
- Events defined in your chart.

## Step-by-step
1. Add an event in your chart (event name must match the script filename).
2. Create `mods/<mod>/events/<EventName>.hx` or `.lua`.
3. Run the song and verify the event triggers.

## Examples
`PlayState` loads scripts for each unique event name:

```haxe
// funkin/states/PlayState.hx
for (event in eventsPushed)
  loadScript('events/' + event);
```

Script loading supports HScript and Lua:

```haxe
// core/backend/ScriptState.hx
if (path.endsWith('.hx')) loadHScript(path.substring(0, path.length - 3), haxeArgs);
if (path.endsWith('.lua')) loadLuaScript(path.substring(0, path.length - 4), luaArgs);
```

## Common pitfalls
- Filename mismatch (event name must exactly match the script file base name).

## Related pages
- [Script runtimes (HScript & Lua)](../scripts-and-hooks/script-runtimes.md)
- [Events in charts](./events-in-charts.md)
