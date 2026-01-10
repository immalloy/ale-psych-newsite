---
title: Modding Overview
category: Modding
---

# Modding Overview

This overview explains how ALE Psych organizes mods and how assets, charts, and scripts fit together.

## Mod folder basics

Each mod lives in its own folder under `mods/`. A typical mod includes:

- `data.json` for mod-level configuration overrides.
- `pack.json` metadata (name, description, author, version).
- `images/`, `characters/`, `stages/`, and other asset folders.
- `songs/<SongName>/` folders containing charts, audio, and scripts.

## The mod pipeline

1. Start with metadata and configuration.
2. Add assets (characters, backgrounds, UI).
3. Add songs and charts.
4. Script any custom behavior.
5. Test in-game with the debug overlay and editors.

## Best practices

- Keep file names consistent and case-sensitive.
- Avoid editing engine source unless you are contributing upstream.
- Use scripting for menus, events, and gameplay behaviors.

## TODO

TODO: This page is unfinished - complete this section.
