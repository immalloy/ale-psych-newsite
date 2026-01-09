---
title: Building the Engine from Source
category: Engine Development
---

# Building the Engine from Source

Use this guide to compile ALE Psych from source. You do not need to hardcode features to get started.

## Requirements

- Haxe (latest stable release).
- Git.
- Platform build tools:
  - Windows: Visual Studio 2022 with the C++ desktop workload.
  - macOS: Xcode Command Line Tools.
  - Linux: GCC/Clang and build essentials.

## Install Haxe libraries

From the project root, run the setup script:

```bat
setup\install-haxelibs.bat
```

## Build the engine

Use Lime from the project root:

```bash
lime test <platform>
```

Examples:

```bash
lime test windows
lime test android
lime test linux
```

Replace `<platform>` with the target you want to build.

## Troubleshooting

- Missing Haxe libs: re-run `setup\install-haxelibs.bat`.
- Odd build errors after updates: run a clean build and verify your Haxe version.

## TODO

TODO: This page is unfinished - complete this section.
