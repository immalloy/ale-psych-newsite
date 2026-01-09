---
title: Building the Engine from Source
category: Engine Development
---

# Compiling the Engine

This page explains how to build **ALE Psych** from source.

---

## Requirements

Before you build, install the following:

- **Haxe** (latest stable release)
- **Git** (default install options are fine)
- **Visual Studio 2022** (Windows builds)

Then install the required Haxe libraries:

- Run: `setup/install-haxelibs.bat`

---

## Setup

1. Install **Haxe** (latest stable).
2. Install **Git** (default options).
3. Install **Visual Studio 2022**.
4. From the project root, install Haxe dependencies:

   ```bat
   setup\install-haxelibs.bat
````

---

## Building

You compile using **Lime**. From the project root:

```bash
lime test <platform>
```

### Examples

```bash
lime test windows
```

```bash
lime test html5
```

```bash
lime test linux
```

> Replace `<platform>` with the target you want to build for.

---

## Troubleshooting

* If the build complains about missing Haxe libraries, re-run:

  ```bat
  setup\install-haxelibs.bat
  ```

* If you recently updated Haxe or dependencies, try a clean rebuild:

  * Close and reopen your terminal
  * Re-run the build command

```
