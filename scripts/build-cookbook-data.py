#!/usr/bin/env python3
"""Generate cookbook-data.json from markdown frontmatter."""
from __future__ import annotations

import json
from pathlib import Path
from typing import Iterable

REPO_ROOT = Path(__file__).resolve().parents[1]
COOKBOOK_ROOT = REPO_ROOT / "site" / "cookbook"


def iter_markdown_files(root: Path) -> Iterable[Path]:
    return sorted(path for path in root.rglob("*.md") if path.is_file())


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---"):
        return {}
    lines = text.splitlines()
    data: dict[str, str] = {}
    for line in lines[1:]:
        if line.strip() == "---":
            break
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        data[key.strip()] = value.strip().strip('"')
    return data


def build_entries(lang_root: Path) -> list[dict[str, str]]:
    entries: list[dict[str, str]] = []
    for md_path in iter_markdown_files(lang_root):
        text = md_path.read_text(encoding="utf-8")
        fm = parse_frontmatter(text)
        title = fm.get("title")
        category = fm.get("category")
        if not title or not category:
            raise ValueError(f"Missing title/category in {md_path.relative_to(REPO_ROOT)}")
        rel_path = md_path.relative_to(lang_root)
        slug = "-".join(rel_path.with_suffix("").parts)
        entries.append(
            {
                "title": title,
                "slug": slug,
                "category": category,
                "path": f"{lang_root.name}/{rel_path.as_posix()}",
            }
        )
    return sorted(entries, key=lambda item: (item["category"].lower(), item["title"].lower()))


def main() -> int:
    for lang_dir in COOKBOOK_ROOT.iterdir():
        if not lang_dir.is_dir():
            continue
        data = build_entries(lang_dir)
        output_path = lang_dir / "cookbook-data.json"
        output_path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
