---

title: Source build (advanced only)
category: Avanzado y extensión del motor
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Source builds are only required when you need engine-level changes (new loaders, new runtime systems). Mods can do most content work without rebuilding.

## Prerequisites
- Haxe/OpenFL/HaxeFlixel setup (advanced).

## Step-by-step
1. Review `Project.xml` for build configuration.
2. Identify the entry point in `core/Main.hx` if you need to adjust initial state.
3. Make changes and build only if necessary.

## Examples
```xml
<!-- Project.xml (build config) -->
<project>
  <!-- build configuration here -->
</project>
```

```haxe
// core/Main.hx
private static var game = {
  initialState: #if mobile CopyState #else MainState #end,
};
```

## Common pitfalls
- Editing engine code for changes that are already possible via mods.

## Related pages
- [When mods are not enough](./when-mods-are-not-enough.md)
