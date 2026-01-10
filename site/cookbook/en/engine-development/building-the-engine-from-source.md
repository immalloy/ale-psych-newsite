---
title: Compiling the Engine
category: Engine Development

---

# Compiling the Engine

This page explains how to compile **ALE Psych** from scratch, including its dependencies and some possible errors along with their solutions, using its [Source Code](https://github.com/ALE-Engine-Crew/ALE-Psych).

> [!NOTE]
> It is not necessary to use the Source Code, as ALE Psych includes tools that make this unnecessary. This is more oriented toward those who are interested in [Contributing to the Project]()

---

## Requirements

Before compiling, you must install the following programs:

- [Haxe](https://haxe.org/download/)
- [Git](https://git-scm.com/install/)
- [Visual Studio](https://visualstudio.microsoft.com/downloads/)
    - Make sure to select the “Game development with C++” workload

---

## Setup

From the source code folder, run the file

- `setup/install-haxelibs.bat`

> [!NOTE]
> This may take more or less time depending on your Internet connection

If this is your first time, run the following commands:

- `lime setup`
- `lime setup <platform>`

---

## Compilation

After completing the previous steps, all that remains is to run the command

- `lime test <platform>`

> [!NOTE]
> The first time you run this command it may take several minutes, ranging from 15 minutes up to 1 hour, depending on the platform and the power of your computer

---

## Troubleshooting

Compilation may fail for one reason or another, but you have several options to troubleshoot issues if something goes wrong

1. Reinstall the libraries
    - Simply re-run `setups/install-haxelibs.bat`

2. Reinstall the dependencies
    - Go back to [Requirements](#requirements)

3. Compile from scratch
    - Run the command `lime test <platform> -clean`