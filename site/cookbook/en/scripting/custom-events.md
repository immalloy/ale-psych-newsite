---
title: Custom Events
category: Scripting
---

# Custom Events

Custom events let you add chart-triggered behaviors without editing engine source. ALE Psych loads event scripts from your mod's `events/` folder.

## Directory structure

```
mods/<mod-name>/events/
  MyEvent.lua
  MyEvent.hx
  MyEvent.txt
```

Use one script language per event name. Optional `.txt` files provide Chart Editor descriptions.

## Chart Editor descriptions

The `.txt` file should explain what the event does and how `Value 1` and `Value 2` are interpreted.

## Available callbacks

When an event script matches a charted event name, the engine calls:

- `onEventPushed(name, value1, value2, strumTime)`
- `eventEarlyTrigger(name, value1, value2, strumTime)`
- `onEvent(name, value1, value2, strumTime)`

`value1` and `value2` are strings; convert them to numbers if needed.

## Lua example

```lua
function onEventPushed(name, value1, value2, strumTime)
  if name == 'MyEvent' then
    precacheImage('my-event/effect')
  end
end

function eventEarlyTrigger(name, value1, value2, strumTime)
  if name == 'MyEvent' and value1 == 'fast' then
    return 150
  end
  return 0
end

function onEvent(name, value1, value2, strumTime)
  if name ~= 'MyEvent' then return end

  local speed = tonumber(value1) or 1
  local duration = tonumber(value2) or 0.5

  cameraFlash('game', 'FFFFFF', duration)
  setProperty('songSpeed', speed)
end

triggerEvent('MyEvent', '1.5', '0.25')
```

## HScript example

```haxe
import funkin.states.PlayState;
import flixel.FlxG;
import flixel.util.FlxColor;

function onEventPushed(name:String, value1:String, value2:String, strumTime:Float) {
  if (name == 'MyEvent') {
    precacheImage('my-event/effect');
  }
}

function eventEarlyTrigger(name:String, value1:String, value2:String, strumTime:Float) {
  if (name == 'MyEvent' && value1 == 'fast') return 150;
  return 0;
}

function onEvent(name:String, value1:String, value2:String, strumTime:Float) {
  if (name != 'MyEvent') return;

  var speed = Std.parseFloat(value1);
  if (Math.isNaN(speed)) speed = 1;

  var duration = Std.parseFloat(value2);
  if (Math.isNaN(duration)) duration = 0.5;

  FlxG.camera.flash(FlxColor.WHITE, duration);
  PlayState.instance.songSpeed = speed;
}

PlayState.instance.triggerEvent('MyEvent', '1.0', '0.5', Conductor.songPosition);
```

## TODO

TODO: This page is unfinished - complete this section.
