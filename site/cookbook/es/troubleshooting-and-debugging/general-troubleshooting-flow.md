---

title: General troubleshooting flow
category: Solución de problemas y depuración
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Use this flow to narrow down issues with mods: verify paths first, then confirm discovery rules, then check runtime loaders.

## Prerequisites
- A mod that isn’t behaving correctly.

## Step-by-step
1. Confirm the mod is active (Mod Menu or `UNIQUE_MOD.txt`).
2. Check the relative path under `mods/<mod>/` matches `assets/`.
3. If the issue is a chart or song, validate chart discovery rules.
4. If it’s a script issue, verify the script path and extension.

## Examples
Chart loading logs missing files when not found:

```haxe
// utils/cool/PlayStateUtil.hx
if (json == null)
  debugTrace(name + '/charts/' + difficulty + '.json', MISSING_FILE);
```

## Common pitfalls
- Confusing `mods/<mod>/assets/` with `mods/<mod>/`.

## Related pages
- [Path resolution rules](../file-paths-and-load-order/path-resolution-rules.md)
- [Script troubleshooting](../scripts-and-hooks/script-troubleshooting.md)
