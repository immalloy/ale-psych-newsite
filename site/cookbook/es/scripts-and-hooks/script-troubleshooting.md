---

title: Script troubleshooting
category: Scripts y hooks
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
Script issues usually come from missing files or syntax errors. The engine only loads scripts if the file exists and matches the expected extension.

## Prerequisites
- A script that fails to run.

## Step-by-step
1. Verify the script path matches the expected folder.
2. Confirm the extension is `.hx` or `.lua`.
3. Check for parse errors in the console output if available.

## Examples
```haxe
// core/backend/ScriptState.hx
if (Paths.exists(path + '.hx')) {
  var script:HScript = new HScript(Paths.getPath(path + '.hx'), hScriptsContext, args, STATE, path, hsCustomCallbacks);
}
```

## Common pitfalls
- Wrong file extension or script location.

## Related pages
- [Where scripts live](./where-scripts-live.md)
