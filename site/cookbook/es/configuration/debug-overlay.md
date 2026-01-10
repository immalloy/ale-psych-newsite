---
title: Configuración del overlay debug.json
category: Configuración
---

# Configuración del overlay debug.json

El overlay de depuración siempre muestra FPS y estadísticas de Flixel integradas. Puedes agregar paneles extra al proporcionar un archivo `debug.json` dentro de tu mod.

## Ubicación del archivo

```
mods/<nombre-del-mod>/debug.json
```

Si falta el archivo, el motor usa `assets/debug.json`.

## Estructura del archivo

`debug.json` contiene un objeto con un arreglo `fields`. Cada entrada en `fields` es un panel representado por una lista de objetos de etiqueta.

```json
{
  "fields": [
    [
      {
        "lines": [
          { "type": "text", "value": "Gameplay" }
        ],
        "size": 18,
        "color": "#80FF80"
      }
    ]
  ]
}
```

### Campos de etiqueta

- `lines` (requerido): Arreglo de fragmentos que se unen en el texto de la etiqueta.
- `size` (opcional): Tamaño de fuente (predeterminado `15`).
- `color` (opcional): Cadena hex o entero ARGB.
- `offset` (opcional): Espaciado vertical extra.

### Tipos de línea

- `text`: Inserta una cadena estática (`value` requerido).
- `variable`: Resuelve un valor desde una clase o instancia (`path` y `variable` requeridos).

Ejemplo de línea `variable`:

```json
{ "type": "variable", "path": "funkin.states.PlayState", "variable": "instance.health" }
```

## Comportamiento en tiempo de ejecución

- Las etiquetas se actualizan cada frame y la pila se redimensiona según la etiqueta más larga.
- Activa o desactiva el overlay con la tecla asignada al Contador de FPS (por defecto `F3`).

## TODO

TODO: Esta página está incompleta; completa esta sección.
