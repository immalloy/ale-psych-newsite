---
title: options.json Configuration
category: Configuration
---

# options.json Configuration

Use `options.json` to add categories and settings to the Options menu without editing engine source.

## File location

```
mods/<mod-name>/options.json
```

If you want the base settings plus your additions, copy `assets/options.json` into your mod and extend it.

## Structure

```json
{
  "categories": [
    {
      "name": "Menu Title",
      "options": [
        { "name": "Setting Name", "type": "bool", "variable": "flashWarning", "initialValue": false }
      ]
    }
  ]
}
```

### Category fields

- `name`: Title shown in the menu.
- `options`: Array of option entries.

### Common option fields

- `name`: Display name.
- `description`: Helper text shown when highlighted.
- `type`: Option type (`bool`, `integer`, `float`, `string`, `state`, `substate`).
- `initialValue`: Default value.
- `platform` (optional): Restrict to `desktop` or `mobile`.

## Option types

### On/off toggle (`bool`)

```json
{ "type": "bool", "variable": "flashWarning", "initialValue": false }
```

### Whole number slider (`integer`)

```json
{ "type": "integer", "variable": "framerate", "min": 30, "max": 240, "change": 1, "initialValue": 60 }
```

### Decimal slider (`float`)

```json
{ "type": "float", "variable": "noteScale", "min": 0.5, "max": 1.5, "change": 0.05, "decimals": 2, "initialValue": 1.0 }
```

### Choose from a list (`string`)

```json
{ "type": "string", "variable": "laneColor", "strings": ["Classic", "Pastel", "Contrast"], "initialValue": "Classic" }
```

### Open a new menu (`state` or `substate`)

```json
{ "type": "state", "path": "PracticeMenuState", "scripted": true }
```

```json
{ "type": "substate", "path": "GraphicsPresetSubState", "scripted": false, "platform": "desktop" }
```

Use `scripted: true` to load a scripted menu from your mod. Use `scripted: false` to load a menu implemented in Haxe.

## Troubleshooting

- Setting does not appear: confirm the file has a `categories` array and each option includes the required fields.
- Value does nothing: your code must read and apply the setting; the engine does not automatically wire behavior.
- Wrong platform: use lowercase `desktop` or `mobile`.

## TODO

TODO: This page is unfinished - complete this section.
