---
title: debug.json Overlay Configuration
category: Configuration
---

# debug.json Overlay Configuration

The debug overlay always shows built-in FPS and Flixel stats. You can add extra panels by providing a `debug.json` file inside your mod.

## File location

```
mods/<mod-name>/debug.json
```

If the file is missing, the engine falls back to `assets/debug.json`.

## File structure

`debug.json` contains a top-level object with a `fields` array. Each entry in `fields` is a panel represented by a list of label objects.

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

### Label fields

- `lines` (required): Array of snippets joined into the label text.
- `size` (optional): Font size (default `15`).
- `color` (optional): Hex string or ARGB integer.
- `offset` (optional): Extra vertical spacing.

### Line types

- `text`: Inserts a static string (`value` required).
- `variable`: Resolves a value from a class or instance (`path` and `variable` required).

Example `variable` line:

```json
{ "type": "variable", "path": "funkin.states.PlayState", "variable": "instance.health" }
```

## Runtime behavior

- Labels refresh every frame and the stack resizes to the longest label.
- Toggle the overlay with the key bound to the FPS Counter (default `F3`).

## TODO

TODO: This page is unfinished - complete this section.
