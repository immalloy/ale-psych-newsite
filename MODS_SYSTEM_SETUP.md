# Mods System Setup Guide

## Files added in this update
All requested files are included in the repository. No files are missing.

**Created/updated structure:**
- `mods/mods.html`
- `mods/mod-details.html`
- `mods/mods-data.json`
- `mods/descriptions/psychrush.md`
- `mods/thumbnails/psychrush.jpg` (text placeholder; replace with a real image when ready)

## Tutorial: How to use and expand the mod system

### 1) Add new mods
1. Open `mods/mods-data.json`.
2. Copy the existing mod object and paste it as a new entry in the array.
3. Update the fields:
   - `id`: unique slug for the mod
   - `title`: display name
   - `author`: author or team name
   - `tags`: only use `Featured`, `Original`, `Port`, or `Tool`
   - `platforms`: list of supported platforms (e.g., `Windows`, `Linux`)
   - `thumbnail`: point to a file in `mods/thumbnails/`
   - `markdown`: point to a file in `mods/descriptions/`
   - `comingSoon`: `true` or `false`
   - `downloads`: array of `{ "label", "url" }` objects

### 2) Add a description file
1. Create a markdown file inside `mods/descriptions/`.
2. Write your content using Markdown headings, bold text, and lists.
3. Update the `markdown` field in `mods-data.json` to point to the new file.

### 3) Add a thumbnail
1. Place an image inside `mods/thumbnails/`.
2. Update the `thumbnail` field in `mods-data.json` with the correct path.

### 4) Browse mods
1. Open `mods/mods.html` in your browser.
2. Use the search bar and filters to narrow results.
3. Scroll down to trigger infinite loading (10 mods per batch).

### 5) View mod details
1. Click **View Details** on any mod card.
2. The details page reads the `id` from the URL (for example: `mod-details.html?id=psychrush`).
3. The page loads Markdown descriptions, renders downloads, and hides downloads when `comingSoon` is `true`.

### 6) Notes
- The markdown parser is embedded in `mod-details.html` so the site works offline.
- The list page builds tag and platform filters automatically from the data file.
- To add more tags, update your data and also adjust any filter logic if you add new tag types.
