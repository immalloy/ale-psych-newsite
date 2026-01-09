---
title: Scripting de substates
category: Scripting
---

# Scripting de substates

Los substates alimentan overlays como pausa, game over y transiciones. Usa HScript para control total o Lua con un workaround de override.

## Substates en HScript

### Crear un substate

Agrega un script `.hx` en `scripts/substates/`.

```
mods/<nombre-del-mod>/scripts/substates/MySubState.hx
```

### Modificar un substate

- Copia el substate objetivo desde `assets/scripts/substates` a la carpeta `scripts/substates/` de tu mod.
- Edita la copia; el motor cargará la tuya primero.
- Usa el contador de FPS para confirmar qué substate está activo mientras pruebas.

### Abrir un substate

```haxe
CoolUtil.openSubState(new CustomSubState('ScriptName'));
```

## Substates en Lua

### Crear un substate

Coloca un script `.lua` en `scripts/substates/`:

```
mods/<nombre-del-mod>/scripts/substates/MySubState.lua
```

### Modificar un substate

Los substates base están escritos en HScript. Para sobrescribirlos con Lua, combina tu script Lua con un archivo `.hx` vacío del mismo nombre para que ambos se ejecuten juntos.

### Abrir un substate

```lua
openSubState('funkin.substates.CustomSubState', {'ScriptName'})
```

## Notas para desarrolladores

- Los substates corren encima del state padre; ciérralos para reanudar el gameplay.
- Usa `close()` en HScript o `closeSubState()` en Lua cuando tu overlay termine.
- Mantén la lógica eficiente porque tanto el substate como el state padre se actualizan mientras está abierto.

## TODO

TODO: Esta página está incompleta; completa esta sección.
