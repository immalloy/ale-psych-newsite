---
title: Lua Modules
category: Lua Modules
---

# Lua Modules

Have you ever wanted your own list of functions without copy-pasting them everywhere? <br>
Does it bother you that you cannot use Lua objects or functions when using `registerGlobalLuaFunction`? <br>
For these and other issues, we added support for **Lua Modules**.

> [!NOTE]
> We know they have many uses and are not limited to this, but we present this example because we do not have many other uses when working in the Engine. <br> If you want more information, visit [this page](https://www.lua.org/manual/2.4/node37.html)

---

## Usage Example

Suppose you have a set of functions you want to reuse across multiple scripts. Instead of writing them in every script, you can put them in a module and import them, as shown below:

`scripts/modules/MyUtil.lua`

```lua
local MyUtil = {}

-- Create a Sprite with Certain Properties and Add it Quickly

function MyUtil.coolSprite(tag, image, x, y, scale, alpha)
    makeLuaSprite(tag, image, x or 0, y or 0)
    setProperties(tag, { scale = { x = scale or 1, y = scale or 1 }, alpha = alpha or 1 })
    updateHitbox(tag)
    add(tag)
end

-- Make a Sprite (or anything that inherits it) follow the Mouse with a Grid

function MyUtil.followMouseOnGrid(tag, cellSize, camera)
    camera = camera or 'camGame'

    setProperties(tag, {
        x = MyUtil.quantize(getMouseX(camera), cellSize),
        y = MyUtil.quantize(getMouseY(camera), cellSize)
    })
end

-- Quantize a Number

function MyUtil.quantize(value, factor)
    return math.floor(value / factor) * factor
end

return MyUtil
```

Once your module is created, import it with `require` and use your custom functions:

`scripts/states/YourState.lua`

```lua
-- Import the Module with your Functions

local MyUtil = require('MyUtil')

-- Create and Add your Sprite

MyUtil.coolSprite('oso', 'ui/menuBG', 100, 100, 0.25, 0.5)

-- Make your Sprite follow the Cursor using a Grid (100 x 100 px cells)

function onUpdate(elapsed)
    MyUtil.followMouseOnGrid('oso', 100)
end
```
