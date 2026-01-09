---
title: Resumen de modding
category: Modding
---

# Resumen de modding

Este resumen explica cómo ALE Psych organiza los mods y cómo encajan assets, charts y scripts.

## Conceptos básicos de la carpeta del mod

Cada mod vive en su propia carpeta dentro de `mods/`. Un mod típico incluye:

- `data.json` para sobrescribir configuración a nivel de mod.
- Metadatos en `pack.json` (nombre, descripción, autor, versión).
- Carpetas de assets como `images/`, `characters/`, `stages/`, y otras.
- Carpetas `songs/<NombreDeCancion>/` que contienen charts, audio y scripts.

## El flujo de trabajo del mod

1. Empieza con metadatos y configuración.
2. Agrega assets (personajes, fondos, UI).
3. Agrega canciones y charts.
4. Scriptea cualquier comportamiento personalizado.
5. Prueba en el juego con el overlay de depuración y los editores.

## Buenas prácticas

- Mantén nombres de archivos consistentes y sensibles a mayúsculas/minúsculas.
- Evita editar el código del motor a menos que estés contribuyendo upstream.
- Usa scripting para menús, eventos y comportamientos de gameplay.

## TODO

TODO: Esta página está incompleta; completa esta sección.
