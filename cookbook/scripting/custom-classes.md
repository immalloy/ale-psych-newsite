---
title: Custom Classes
category: Scripting
---

# Custom Classes

RuleScript with HScript lets you create reusable classes and modules without modifying engine source. Organize custom code under `scripts/classes/` just like Haxe packages.

## Create a class

Place class files in `scripts/classes/` using package folders when needed:

```
mods/<mod-name>/scripts/classes/pack/MyClass.hx
```

This mirrors how a Haxe project structures `source/` files.

## Extend other classes

You can extend:

- Classes listed in `Extensible.hx` from the scripting API.
- Other custom classes you define.

Import the target class before extending it:

```haxe
import scripting.haxe.ScriptSprite;

class MySprite extends ScriptSprite {
  public function new() {
    super();
    trace('This is My Custom Sprite');
  }
}
```

## Access a custom class

Import and use your class in HScript like a normal Haxe project:

```haxe
import pack.MyClass;
```

## Developer notes

- Keep gameplay logic in states or substates; keep reusable pieces in classes.
- Match folder structure to package names (`scripts/classes/foo/Bar.hx` → `import foo.Bar`).
- Only extensible classes interact safely with engine internals.

## TODO

TODO: This page is unfinished - complete this section.
