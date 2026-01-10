---

title: Chart formats compatibility
category: Charts y eventos
---

> Nota: Esta página está pendiente de traducción completa; el contenido permanece en inglés por ahora.

## Overview
The engine can read charts in multiple formats. It includes special handling for `psych_v1` formats by adjusting note lanes.

## Prerequisites
- A chart JSON to convert or import.

## Step-by-step
1. If your chart is in `psych_v1` format, the engine will adjust note data automatically.
2. Verify the chart plays correctly after conversion.

## Examples
```haxe
// utils/cool/PlayStateUtil.hx
if (json.format == 'psych_v1_convert' || json.format == 'psych_v1') {
  for (section in cast(json.notes, Array<Dynamic>))
    if (section.sectionNotes != null && section.sectionNotes.length > 0)
      for (note in cast(section.sectionNotes, Array<Dynamic>))
        if (!section.mustHitSection)
          note[1] = note[1] > 3 ? note[1] % 4 : note[1] += 4;
} else {
  json = songJson.song;
}
```

## Common pitfalls
- Omitting `format` when importing from Psych charts; the engine may not run conversion.

## Related pages
- [Chart file structure](./chart-file-structure.md)
