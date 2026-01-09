---
title: Adding Songs and Charts
category: Modding
---

# Adding Songs and Charts

ALE Psych expects each song to live in a dedicated folder that contains charts, audio, and optional scripts. Keeping everything together avoids pathing errors and makes songs portable across mods.

## Folder structure

Place songs at `mods/<mod-name>/songs/<SongName>/` with this layout:

```
mods/
  <mod-name>/
    songs/
      <SongName>/
        charts/
          easy.json
          normal.json
          hard.json
        song/
          Inst.ogg
          Voices.ogg
        scripts/
          song-script.lua
          song-script.hx
```

## Notes

- Keep all difficulty charts inside `charts/`.
- Put instrumental and vocal audio in `song/`.
- Store Lua or HScript files in `scripts/`.
- Folder names are case-sensitive; match chart references exactly.

## TODO

TODO: This page is unfinished - complete this section.
