---

title: YAML loading rules
category: Referencia de recursos y formatos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
YAML is supported via `Paths.yaml()` and the `yaml` library. Like JSON, the engine appends `.yaml` and resolves through mods first.

## Prerequisites
- A YAML file you want to load.

## Step-by-step
1. Place your YAML file under the appropriate mod path.
2. Reference it by base name (no extension).

## Examples
```haxe
// utils/Paths.hx
public static function yaml(file:String, missingPrint:Bool = true):Dynamic {
  var path:String = file + '.yaml';
  if (!exists(path)) return null;
  return Yaml.parse(getContent(path));
}
```

## Common pitfalls
- Using `.yml` instead of `.yaml` (the engine expects `.yaml`).

## Related pages
- [JSON loading rules](./json-loading-rules.md)
