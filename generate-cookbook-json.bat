@echo off
setlocal

powershell -NoProfile -ExecutionPolicy Bypass -Command "& {
  $root = Join-Path $PSScriptRoot 'cookbook'
  $items = Get-ChildItem -Path $root -Recurse -Filter *.md | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    $title = ''
    $category = ''
    if ($content -match '(?s)^---\s*(.*?)\s*---') {
      $frontmatter = $matches[1]
      foreach ($line in $frontmatter -split "`n") {
        if ($line -match '^\s*title\s*:\s*(.+)$') { $title = $matches[1].Trim() }
        if ($line -match '^\s*category\s*:\s*(.+)$') { $category = $matches[1].Trim() }
      }
    }
    $title = $title -replace '[\"\r\n]', ''
    $category = $category -replace '[\"\r\n]', ''
    $slug = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
    $relativePath = $_.FullName.Substring($root.Length + 1).Replace('\\', '/')
    [pscustomobject]@{
      title = $title
      slug = $slug
      category = $category
      path = $relativePath
    }
  }
  $sorted = $items | Sort-Object category, title
  $json = $sorted | ConvertTo-Json -Compress
  $outPath = Join-Path $root 'cookbook-data.json'
  [System.IO.File]::WriteAllText($outPath, $json)
}"

endlocal
