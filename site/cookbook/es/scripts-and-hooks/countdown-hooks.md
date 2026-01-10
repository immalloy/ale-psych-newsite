---

title: Countdown hooks
category: Scripts y hooks
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Countdown hooks allow scripts to modify or respond to the song countdown. The engine calls `onStartCountdown`, `onCountdownTick`, and `onCountdownStarted`.

## Prerequisites
- A PlayState script.

## Step-by-step
1. Implement `onStartCountdown()` to intercept the countdown.
2. Implement `onCountdownTick(count)` to respond to each tick.
3. Implement `onCountdownStarted()` to run logic once countdown begins.

## Examples
```haxe
// funkin/states/PlayState.hx
var ret:Array<Dynamic> = callOnScripts('onStartCountdown');
callOnScripts('onCountdownTick', [swagCounter]);
callOnScripts('onCountdownStarted', null);
```

## Common pitfalls
- Returning `Function_Stop` from `onStartCountdown` can prevent countdown from starting.

## Related pages
- [PlayState callbacks (hook list)](./playstate-callbacks.md)
