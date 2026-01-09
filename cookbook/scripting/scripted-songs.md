---
title: Scripted Songs
category: Scripting
---

# Scripted Songs

Scripted songs let you hook into song-specific behavior such as camera effects, gameplay modifiers, or timed events.

## Script locations

- Place Lua or HScript files in `mods/<mod-name>/songs/<SongName>/scripts/`.
- Keep the script name consistent with how you reference it in charts or event logic.

## Common hooks

- `onCreate` and `onCreatePost` for setup work.
- `onSongStart` for one-time song intro logic.
- `onUpdate` or `onUpdatePost` for per-frame logic.
- `onEvent` for reacting to custom events.

## Debugging scripts

- Use the debug console (F2 on Windows) for logs.
- Add temporary prints to confirm hook execution order.

## TODO

TODO: This page is unfinished - complete this section.
