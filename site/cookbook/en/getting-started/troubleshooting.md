---
title: Troubleshooting Install Issues
category: Getting Started
---

# Troubleshooting Install Issues

Use this page to resolve common setup and launch problems.

## Missing dependencies

- Confirm Haxe is installed and available on your PATH.
- Re-run the Haxe library installation script from the repository.
- Make sure your terminal can run `haxelib list` without errors.

## Build tools not found

- Windows: install Visual Studio 2022 with the C++ desktop workload.
- macOS: install Xcode Command Line Tools.
- Linux: install `build-essential` (or your distro equivalent).

## Launch errors

- Delete cached builds and re-run the build command.
- Remove older mods to check for a mod-specific conflict.
- Check the console for the first error message; it usually points to the missing asset or script.

## TODO

TODO: This page is unfinished - complete this section.
