---
title: data.json Configuration
category: Configuration
---

# data.json Configuration

`data.json` lets a mod override engine defaults without editing source code. Only include keys you want to change; everything else falls back to engine defaults.

## File location

```
mods/<mod-name>/data.json
```

## Example

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

## Key groups

### Development and debug

- `developerMode` (bool): Enables editor shortcuts and debug tooling.
- `mobileDebug` (bool): Simulates touch controls on desktop builds.
- `scriptsHotReloading` (bool): Auto-reloads Lua scripts in developer mode.
- `verbose` (bool): Emits extra engine logs.
- `allowDebugPrint` (bool): Allows logs in the in-game Debug Print window.

### Menu flow

- `initialState` sets the boot entry state.
- `freeplayState`, `storyMenuState`, `masterEditorState`, `mainMenuState`, `optionsState` set destinations for the respective menus.
- `loadDefaultWeeks` toggles inclusion of vanilla weeks.

### Substates

- `pauseSubState`, `gameOverScreen`, and `transition` define the classes used for those overlays.

### Window and presentation

- `title` and `icon` define the window presentation.
- `width` and `height` set the window size in pixels.
- `bpm` sets a default BPM for menus and transitions.

### Integrations

- `discordID` sets the Discord Rich Presence application ID.
- `discordButtons` adds up to two links in Rich Presence (URLs must include `http://` or `https://`).

### Save data and mod identity

- `modID` namespaces save data so mod folder renames do not break saves.

## TODO

TODO: This page is unfinished - complete this section.
