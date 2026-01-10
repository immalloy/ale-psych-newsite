---
title: Configuración de data.json
category: Configuración
---

# Configuración de data.json

`data.json` permite que un mod sobrescriba los valores predeterminados del motor sin editar el código fuente. Incluye solo las claves que quieras cambiar; todo lo demás usa los valores predeterminados del motor.

## Ubicación del archivo

```
mods/<nombre-del-mod>/data.json
```

## Ejemplo

```json
{
  "developerMode": false,
  "mobileDebug": false,
  "scriptsHotReloading": false,
  "verbose": false,
  "allowDebugPrint": true,
  "initialState": "TitleState",
  "freeplayState": "FreeplayState",
  "storyMenuState": "StoryMenuState",
  "masterEditorState": "MasterEditorState",
  "mainMenuState": "MainMenuState",
  "optionsState": "OptionsState",
  "pauseSubState": "PauseSubState",
  "gameOverScreen": "GameOverSubState",
  "transition": "FadeTransition",
  "loadDefaultWeeks": true,
  "title": "My ALE Psych Mod",
  "icon": "appIcon",
  "width": 1280,
  "height": 720,
  "bpm": 102.0,
  "discordID": "1309982575368077416",
  "discordButtons": [
    {
      "label": "ALE Psych Website",
      "url": "https://ale-psych-crew.github.io/ALE-Psych-Website/"
    },
    {
      "label": "Mod Page",
      "url": "https://example.com/my-mod"
    }
  ],
  "modID": "modtemplate"
}
```

## Grupos de claves

### Desarrollo y depuración

- `developerMode` (bool): Activa atajos del editor y herramientas de depuración.
- `mobileDebug` (bool): Simula controles táctiles en compilaciones de escritorio.
- `scriptsHotReloading` (bool): Recarga automáticamente scripts Lua en modo desarrollador.
- `verbose` (bool): Emite registros adicionales del motor.
- `allowDebugPrint` (bool): Permite registros en la ventana Debug Print del juego.

### Flujo de menús

- `initialState` define el estado de inicio.
- `freeplayState`, `storyMenuState`, `masterEditorState`, `mainMenuState`, `optionsState` definen el destino de los menús correspondientes.
- `loadDefaultWeeks` habilita o deshabilita las semanas vanilla.

### Subestados

- `pauseSubState`, `gameOverScreen` y `transition` definen las clases usadas para esos overlays.

### Ventana y presentación

- `title` e `icon` definen la presentación de la ventana.
- `width` y `height` fijan el tamaño de la ventana en píxeles.
- `bpm` define un BPM predeterminado para menús y transiciones.

### Integraciones

- `discordID` define el ID de la aplicación de Discord Rich Presence.
- `discordButtons` agrega hasta dos enlaces en Rich Presence (las URLs deben incluir `http://` o `https://`).

### Datos guardados e identidad del mod

- `modID` crea un espacio de nombres para los datos guardados y evita que renombrar la carpeta rompa los guardados.

## TODO

TODO: Esta página está incompleta; completa esta sección.
