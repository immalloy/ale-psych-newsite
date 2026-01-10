---

title: PlayState callbacks (hook list)
category: Scripts y hooks
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
PlayState triggers multiple script callbacks during gameplay. These hooks are available to both HScript and Lua scripts loaded for the play session.

## Prerequisites
- A PlayState script in `songs/<song>/scripts/` or `scripts/songs/`.

## Step-by-step
1. Create a script file for your song or global scripts.
2. Implement any of the callbacks below.

## Callback list (evidence-based)
- `onCreate` / `postCreate` — fired during PlayState creation.
- `onUpdate` / `postUpdate` — fired each frame (via ScriptState update loop).
- `onStepHit` / `postStepHit` — fired each step (MusicBeatState hooks).
- `onBeatHit` / `postBeatHit` — fired each beat.
- `onSectionHit` / `postSectionHit` — fired each section.
- `onStartCountdown`, `onCountdownTick`, `onCountdownStarted` — countdown flow hooks.
- `onSongStart` — called when the song begins.
- `onEndSong` — called when ending a song.

## Examples
Callbacks fired in PlayState:

```haxe
// funkin/states/PlayState.hx
callOnScripts('onCreate');
callOnScripts('postCreate');
callOnScripts('onSongStart');
var ret:Array<Dynamic> = callOnScripts('onStartCountdown');
callOnScripts('onCountdownTick', [swagCounter]);
callOnScripts('onCountdownStarted', null);
var ret:Array<Dynamic> = callOnScripts('onEndSong');
```

ScriptState forwards update hooks:

```haxe
// funkin/states/CustomState.hx
callOnScripts('onUpdate', [elapsed]);
callOnScripts('postUpdate', [elapsed]);
```

## Common pitfalls
- Forgetting to place the script where PlayState loads it (see [Where scripts live](./where-scripts-live.md)).

## Related pages
- [Where scripts live](./where-scripts-live.md)
- [Countdown hooks](./countdown-hooks.md)
- [Song lifecycle hooks](./song-lifecycle-hooks.md)
