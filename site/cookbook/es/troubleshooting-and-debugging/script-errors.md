---

title: Script errors and failures
category: Solución de problemas y depuración
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
HScript and Lua scripts load only if the file exists. Parsing errors may be caught and logged (Lua) or silently ignored (HScript) depending on implementation.

## Prerequisites
- A failing script.

## Step-by-step
1. Verify the script file exists in the right folder.
2. Check for parse errors in logs.

## Examples
Lua load catches exceptions:

```haxe
// core/backend/ScriptState.hx
try {
  var script:LuaScript = new LuaScript(Paths.getPath(path + '.lua'), STATE, args, luaCustomCallbacks);
} catch (error:Exception) {
  debugTrace(error.message, ERROR);
}
```

HScript loads only when parsing succeeds:

```haxe
// core/backend/ScriptState.hx
if (!script.failedParsing)
  hScripts.push(script);
```

## Common pitfalls
- Assuming scripts auto-load without matching file names.

## Related pages
- [Script troubleshooting](../scripts-and-hooks/script-troubleshooting.md)
