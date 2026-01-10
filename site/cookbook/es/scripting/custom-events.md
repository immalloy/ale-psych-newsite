---
title: Eventos personalizados
category: Scripting
---

# Eventos personalizados

Los eventos personalizados te permiten agregar comportamientos disparados por charts sin editar el código fuente del motor. ALE Psych carga scripts de eventos desde la carpeta `events/` de tu mod.

## Estructura de directorios

```
mods/<nombre-del-mod>/events/
  MyEvent.lua
  MyEvent.hx
  MyEvent.txt
```

Usa un lenguaje de script por nombre de evento. Los archivos `.txt` opcionales proporcionan descripciones en el Chart Editor.

## Descripciones del Chart Editor

El archivo `.txt` debe explicar qué hace el evento y cómo se interpretan `Value 1` y `Value 2`.

## Callbacks disponibles

Cuando un script de evento coincide con un nombre de evento del chart, el motor llama:

- `onEventPushed(name, value1, value2, strumTime)`
- `eventEarlyTrigger(name, value1, value2, strumTime)`
- `onEvent(name, value1, value2, strumTime)`

`value1` y `value2` son strings; conviértelos a números si es necesario.

## Ejemplo en Lua

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

## Ejemplo en HScript

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

TODO: Esta página está incompleta; completa esta sección.
