---
title: Agregar canciones y charts
category: Modding
---

# Agregar canciones y charts

ALE Psych espera que cada canción viva en una carpeta dedicada que contenga charts, audio y scripts opcionales. Mantener todo junto evita errores de rutas y hace que las canciones sean portables entre mods.

## Estructura de carpetas

Coloca las canciones en `mods/<nombre-del-mod>/songs/<NombreDeCancion>/` con este diseño:

```
mods/
  <nombre-del-mod>/
    songs/
      <NombreDeCancion>/
        charts/
          easy.json
          normal.json
          hard.json
        song/
          Inst.ogg
          Voices.ogg
        scripts/
          song-script.lua
          song-script.hx
```

## Notas

- Mantén todas las dificultades dentro de `charts/`.
- Coloca el instrumental y las voces en `song/`.
- Guarda archivos Lua o HScript en `scripts/`.
- Los nombres de carpeta distinguen mayúsculas/minúsculas; haz que coincidan exactamente con las referencias de charts.

## TODO

TODO: Esta página está incompleta; completa esta sección.
