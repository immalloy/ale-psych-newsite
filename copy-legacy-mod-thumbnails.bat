@echo off
setlocal

set "OLD_SITE=OLD SITE SOURCE\mods"
set "NEW_SITE=mods\thumbnails"

if not exist "%OLD_SITE%" (
  echo Old site mods directory not found: %OLD_SITE%
  exit /b 1
)

if not exist "%NEW_SITE%" (
  mkdir "%NEW_SITE%"
)

copy "%OLD_SITE%\trap-4-silly-kids\modbanner.png" "%NEW_SITE%\trap-4-silly-kids.png" /Y
copy "%OLD_SITE%\vs-guy-named-laumber-mobile\modbanner.jpg" "%NEW_SITE%\vs-guy-named-laumber-mobile.jpg" /Y
copy "%OLD_SITE%\ale-modidregistry\modbanner.png" "%NEW_SITE%\ale-modidregistry.png" /Y
copy "%OLD_SITE%\vs-memstar\modbanner.png" "%NEW_SITE%\vs-memstar.png" /Y
copy "%OLD_SITE%\friday-night-calvin\modbanner.png" "%NEW_SITE%\friday-night-calvin.png" /Y
copy "%OLD_SITE%\vs-roaring-knight\modbanner.png" "%NEW_SITE%\vs-roaring-knight.png" /Y
copy "%OLD_SITE%\rappin-every-friday\modbanner.png" "%NEW_SITE%\rappin-every-friday.png" /Y
copy "%OLD_SITE%\secret-exit-the-lost-levels\modbanner.png" "%NEW_SITE%\secret-exit-the-lost-levels.png" /Y

echo Legacy mod thumbnails copied into %NEW_SITE%.
endlocal
