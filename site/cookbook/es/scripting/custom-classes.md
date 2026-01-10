---
title: Clases personalizadas
category: Scripting
---

# Clases personalizadas

RuleScript con HScript te permite crear clases y módulos reutilizables sin modificar el código fuente del motor. Organiza el código personalizado dentro de `scripts/classes/` igual que los paquetes de Haxe.

## Crea una clase

Coloca los archivos de clase en `scripts/classes/` usando carpetas de paquete cuando sea necesario:

```
mods/<nombre-del-mod>/scripts/classes/pack/MyClass.hx
```

Esto refleja cómo un proyecto Haxe estructura los archivos de `source/`.

## Extiende otras clases

Puedes extender:

- Clases listadas en `Extensible.hx` desde la API de scripting.
- Otras clases personalizadas que definas.

Importa la clase objetivo antes de extenderla:

```haxe
import scripting.haxe.ScriptSprite;

class MySprite extends ScriptSprite {
  public function new() {
    super();
    trace('This is My Custom Sprite');
  }
}
```

## Accede a una clase personalizada

Importa y usa tu clase en HScript como en un proyecto Haxe normal:

```haxe
import pack.MyClass;
```

## Notas para desarrolladores

- Mantén la lógica de gameplay en states o substates; guarda piezas reutilizables en clases.
- Haz coincidir la estructura de carpetas con los nombres de paquete (`scripts/classes/foo/Bar.hx` → `import foo.Bar`).
- Solo las clases extensibles interactúan de forma segura con los internos del motor.

## TODO

TODO: Esta página está incompleta; completa esta sección.
