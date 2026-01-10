---
title: First Launch and Shortcuts
category: Getting Started
---

# First Launch and Shortcuts

This page covers the first run experience and the default keyboard shortcuts you can use while testing a build. Most shortcuts can be remapped in the Options menu or in `Controls.json`.

## First launch checklist

- Confirm the title screen loads and audio plays.
- Open the Mods menu to ensure your install can read the `mods/` directory.
- Toggle the debug overlay to verify developer tools are available.

## Default shortcuts

| Shortcut | Context | Description |
| --- | --- | --- |
| `Ctrl + Shift + M` | Anywhere except gameplay | Opens the Mods Menu so you can swap mods without restarting. |
| `Ctrl + Shift + N` | Anywhere except gameplay | Fully resets the engine, clearing scripts, tweens, and audio. |
| `F2` (Windows) | Anywhere | Opens the native Windows console for live logging. |
| `F3` | Anywhere | Cycles debug overlay modes (FPS-only, full stats, hidden). |
| `7` (developer mode) | Gameplay | Opens the Chart Editor when not paused or in cutscenes. |
| `8` (developer mode) | Gameplay | Opens the Character Editor. |
| `7` (developer mode) | Main Menu | Opens the master editor state set in `data.json`. |
| `R` / `F5` | Gameplay | Restarts the current song. |

## Notes

- The debug overlay reads its layout from `debug.json` when provided by a mod.
- Developer mode must be enabled to access editor shortcuts.

## TODO

TODO: This page is unfinished - complete this section.
