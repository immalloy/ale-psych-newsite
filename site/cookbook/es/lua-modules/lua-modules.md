---
title: Módulos Lua
category: Módulos Lua
---

# Módulos Lua

¿Alguna vez has querido tener tu propia lista de funciones y no tener que hacer copia y pega de las mismas? <br>
¿Se te es molesto el no poder usar objetos ni funciones Lua al usar `registerGlobalLuaFunction`? <br>
Para este y otros inconvenientes añadimos soporte de **Módulos Lua**

> [!NOTE]
> Somos consientes de que tienen varios usos y que no se limitan a esto, pero presentamos este ejemplo al no tener muchos otros usos a la hora de usar el Engine <br> Si quiere más información, visite [esta página](https://www.lua.org/manual/2.4/node37.html)

---

## Ejemplo de Uso

Supongamos que tienes una serie de funciones que vas a usar en varios scripts, en lugar de escribirlas en cada script, puedes ponerlas en un módulo para luego importarlas, como se mostrará en el siguiente ejemplo:

`scripts/modules/MyUtil.lua`

```lua
local MyUtil = {}

-- Crear un Sprite con Ciertas Propiedades y Añadirlo Rapidamente

function MyUtil.coolSprite(tag, image, x, y, scale, alpha)
    makeLuaSprite(tag, image, x or 0, y or 0)
    setProperties(tag, { scale = { x = scale or 1, y = scale or 1 }, alpha = alpha or 1 })
    updateHitbox(tag)
    add(tag)
end

-- Hace que un Sprite (o cualquier objeto que lo herede) siga al Mouse, teniendo en cuenta una Cuadricula

function MyUtil.followMouseOnGrid(tag, cellSize, camera)
    camera = camera or 'camGame'

    setProperties(tag, {
        x = MyUtil.quantize(getMouseX(camera), cellSize),
        y = MyUtil.quantize(getMouseY(camera), cellSize)
    })
end

-- Cuantiza un Número

function MyUtil.quantize(value, factor)
    return math.floor(value / factor) * factor
end

return MyUtil
```

Una vez con tu módulo creado, ahora solo queda importarlo usando `require` y usar tus funciones personalizadas:

`scripts/states/YourState.lua`

```lua
-- Importas el Modulo con tus Funciones

local MyUtil = require('MyUtil')

-- Creas y Añades tu Sprite

MyUtil.coolSprite('oso', 'ui/menuBG', 100, 100, 0.25, 0.5)

-- Haces que tu Sprite siga al Cursor teniendo en cuenta la Cuadricula (Con celdas de 100 x 100 px)

function onUpdate(elapsed)
    MyUtil.followMouseOnGrid('oso', 100)
end
```
