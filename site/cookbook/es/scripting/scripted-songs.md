---
title: Canciones con scripts
category: Scripting
---

# Canciones con scripts

Las canciones con scripts te permiten enganchar comportamientos específicos de la canción como efectos de cámara, modificadores de gameplay o eventos temporizados.

## Ubicación de scripts

- Coloca archivos Lua o HScript en `mods/<nombre-del-mod>/songs/<NombreDeCancion>/scripts/`.
- Mantén el nombre del script consistente con cómo lo referencias en charts o lógica de eventos.

## Hooks comunes

- `onCreate` y `onCreatePost` para trabajo de configuración.
- `onSongStart` para lógica única al inicio de la canción.
- `onUpdate` o `onUpdatePost` para lógica por frame.
- `onEvent` para reaccionar a eventos personalizados.

## Depuración de scripts

- Usa la consola de depuración (F2 en Windows) para logs.
- Agrega prints temporales para confirmar el orden de ejecución de hooks.

## TODO

TODO: Esta página está incompleta; completa esta sección.
