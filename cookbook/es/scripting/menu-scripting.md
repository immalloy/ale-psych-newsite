---
title: Scripting de menús
category: Scripting
---

# Scripting de menús

Crea nuevos menús o reemplaza los existentes sin tocar el código fuente del motor. ALE Psych soporta HScript para control total y Lua para menús con scripts.

## Menús en HScript

### Crear un menú

Agrega un script `.hx` en `scripts/states/`. El nombre del archivo se vuelve el identificador del menú.

```
mods/<nombre-del-mod>/scripts/states/MyMenu.hx
```

### Modificar un menú

- Copia el menú deseado desde `assets/scripts/states` a la carpeta `scripts/states/` de tu mod.
- Edita la copia; el motor prefiere tu versión.
- Activa el contador de FPS para ver el nombre del state actual mientras pruebas.

### Cargar un menú

Usa `CoolUtil.switchState` para cargar un state con script:

```haxe
CoolUtil.switchState(new CustomState('ScriptName'));
```

## Menús en Lua

### Crear un menú

Coloca un script `.lua` en `scripts/states/`:

```
mods/<nombre-del-mod>/scripts/states/MyMenu.lua
```

### Modificar un menú

Los menús base son solo HScript. Para sobrescribirlos con Lua, crea un archivo `.hx` vacío con el mismo nombre y agrega tu script Lua; ambos se ejecutarán juntos.

### Cargar un menú

Usa el helper de Lua para cambiar de state:

```lua
switchState('funkin.states.CustomState', {'ScriptName'})
```

## Notas

- HScript puede crear y modificar menús; Lua puede crear menús y aprovechar el truco del `.hx` vacío.
- Mantén los nombres de archivo consistentes; el motor resuelve states por nombre de script.

## TODO

TODO: Esta página está incompleta; completa esta sección.
