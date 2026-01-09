---
title: Compilar el motor
category: Desarrollo del motor

---

# Compilar el motor

Esta página explica cómo compilar **ALE Psych** desde cero, incluyendo sus dependencias y algunos errores posibles junto con sus soluciones, usando su [Código Fuente](https://github.com/ALE-Engine-Crew/ALE-Psych).

> [!NOTE]
> No es necesario usar el Código Fuente, ya que ALE Psych incluye herramientas que lo hacen innecesario. Esto está más orientado a quienes estén interesados en [Contribuir al Proyecto]().

---

## Requisitos

Antes de compilar, debes instalar los siguientes programas:

- [Haxe](https://haxe.org/download/)
- [Git](https://git-scm.com/install/)
- [Visual Studio](https://visualstudio.microsoft.com/downloads/)
    - Asegúrate de seleccionar la carga de trabajo “Desarrollo de juegos con C++”

---

## Configuración

Desde la carpeta del código fuente, ejecuta el archivo

- `setup/install-haxelibs.bat`

> [!NOTE]
> Esto puede tardar más o menos dependiendo de tu conexión a Internet

Si es tu primera vez, ejecuta los siguientes comandos:

- `lime setup`
- `lime setup <platform>`

---

## Compilación

Después de completar los pasos anteriores, solo queda ejecutar el comando

- `lime test <platform>`

> [!NOTE]
> La primera vez que ejecutes este comando puede tardar varios minutos, desde 15 minutos hasta 1 hora, dependiendo de la plataforma y la potencia de tu computadora

---

## Solución de problemas

La compilación puede fallar por una u otra razón, pero tienes varias opciones para solucionar problemas si algo sale mal

1. Reinstalar las librerías
    - Simplemente vuelve a ejecutar `setups/install-haxelibs.bat`

2. Reinstalar las dependencias
    - Regresa a [Requisitos](#requisitos)

3. Compilar desde cero
    - Ejecuta el comando `lime test <platform> -clean`
