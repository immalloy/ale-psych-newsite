---
title: Pico-speaker / mapped animations
category: Characters
---

## Overview
Certain characters can trigger special handling. For example, `pico-speaker` disables dance logic and loads mapped animations.

## Prerequisites
- A character ID named `pico-speaker` or similar special-case setup.

## Step-by-step
1. Use `pico-speaker` as your character ID.
2. Ensure your character data includes mapped animations.

## Examples
```haxe
// funkin/visuals/game/Character.hx
case 'pico-speaker':
  skipDance = true;
  loadMappedAnims();
  playAnim("shoot1");
```

## Common pitfalls
- Using this ID without providing required animations.

## Related pages
- [Animation definitions](./animation-definitions.md)
