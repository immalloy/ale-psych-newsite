---
title: Configuración de options.json
category: Configuración
---

# Configuración de options.json

Usa `options.json` para agregar categorías y ajustes al menú de Opciones sin editar el código fuente del motor.

## Ubicación del archivo

```
mods/<nombre-del-mod>/options.json
```

Si quieres los ajustes base más tus adiciones, copia `assets/options.json` dentro de tu mod y extiéndelo.

## Estructura

```json
{
  "categories": [
    {
      "name": "Título del menú",
      "options": [
        { "name": "Nombre del ajuste", "type": "bool", "variable": "flashWarning", "initialValue": false }
      ]
    }
  ]
}
```

### Campos de categoría

- `name`: Título mostrado en el menú.
- `options`: Arreglo de entradas de opciones.

### Campos comunes de opción

- `name`: Nombre mostrado.
- `description`: Texto de ayuda mostrado al seleccionar.
- `type`: Tipo de opción (`bool`, `integer`, `float`, `string`, `state`, `substate`).
- `initialValue`: Valor predeterminado.
- `platform` (opcional): Restringe a `desktop` o `mobile`.

## Tipos de opción

### Toggle encendido/apagado (`bool`)

```json
{ "type": "bool", "variable": "flashWarning", "initialValue": false }
```

### Deslizador de número entero (`integer`)

```json
{ "type": "integer", "variable": "framerate", "min": 30, "max": 240, "change": 1, "initialValue": 60 }
```

### Deslizador decimal (`float`)

```json
{ "type": "float", "variable": "noteScale", "min": 0.5, "max": 1.5, "change": 0.05, "decimals": 2, "initialValue": 1.0 }
```

### Elegir de una lista (`string`)

```json
{ "type": "string", "variable": "laneColor", "strings": ["Classic", "Pastel", "Contrast"], "initialValue": "Classic" }
```

### Abrir un nuevo menú (`state` o `substate`)

```json
{ "type": "state", "path": "PracticeMenuState", "scripted": true }
```

```json
{ "type": "substate", "path": "GraphicsPresetSubState", "scripted": false, "platform": "desktop" }
```

Usa `scripted: true` para cargar un menú por script desde tu mod. Usa `scripted: false` para cargar un menú implementado en Haxe.

## Solución de problemas

- El ajuste no aparece: confirma que el archivo tenga un arreglo `categories` y que cada opción incluya los campos requeridos.
- El valor no hace nada: tu código debe leer y aplicar el ajuste; el motor no conecta el comportamiento automáticamente.
- Plataforma incorrecta: usa `desktop` o `mobile` en minúsculas.

## TODO

TODO: Esta página está incompleta; completa esta sección.
