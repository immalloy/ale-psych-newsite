#!/usr/bin/env python3
"""Lightweight link/reference checker for local site files."""
from __future__ import annotations

import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable

REPO_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = REPO_ROOT / "site"


class LinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[tuple[str, int]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for key, value in attrs:
            if key in {"href", "src"} and value:
                self.links.append((value, self.getpos()[0]))


def is_external(link: str) -> bool:
    return link.startswith("http://") or link.startswith("https://") or link.startswith("mailto:")


def resolve_path(base: Path, link: str) -> Path:
    if link.startswith("/"):
        return REPO_ROOT / link.lstrip("/")
    return (base / link).resolve()


def iter_html_files(root: Path) -> Iterable[Path]:
    return root.rglob("*.html")


def iter_json_files(root: Path) -> Iterable[Path]:
    return root.rglob("*.json")


def check_html_file(path: Path) -> list[str]:
    issues: list[str] = []
    parser = LinkParser()
    content = path.read_text(encoding="utf-8")
    parser.feed(content)
    base = path.parent
    for link, line in parser.links:
        if not link or link.startswith("#") or is_external(link):
            continue
        target = resolve_path(base, link)
        if not target.exists():
            issues.append(f"{path.relative_to(REPO_ROOT)}:{line} missing {link}")
    return issues


def check_mods_data(path: Path) -> list[str]:
    issues: list[str] = []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [f"{path.relative_to(REPO_ROOT)}: invalid json ({exc})"]

    base = path.parent
    for entry in data:
        for key in ("thumbnail", "markdown"):
            value = entry.get(key)
            if not value or is_external(value):
                continue
            target = resolve_path(base, value)
            if not target.exists():
                issues.append(
                    f"{path.relative_to(REPO_ROOT)} missing {key} {value} (id={entry.get('id')})"
                )
    return issues


def check_cookbook_data(path: Path) -> list[str]:
    issues: list[str] = []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [f"{path.relative_to(REPO_ROOT)}: invalid json ({exc})"]

    if not isinstance(data, list):
        return [f"{path.relative_to(REPO_ROOT)}: expected a list of entries"]

    base = path.parent
    seen_slugs: set[str] = set()
    for entry in data:
        if not isinstance(entry, dict):
            issues.append(f"{path.relative_to(REPO_ROOT)}: entry is not an object")
            continue
        title = entry.get("title")
        slug = entry.get("slug")
        category = entry.get("category")
        doc_path = entry.get("path")
        missing = [key for key, value in (("title", title), ("slug", slug), ("category", category), ("path", doc_path)) if not value]
        if missing:
            issues.append(f"{path.relative_to(REPO_ROOT)}: missing {', '.join(missing)}")
            continue
        if isinstance(slug, str):
            if slug in seen_slugs:
                issues.append(f"{path.relative_to(REPO_ROOT)}: duplicate slug {slug}")
            seen_slugs.add(slug)
        if isinstance(doc_path, str) and not is_external(doc_path):
            target = resolve_path(base, doc_path)
            if not target.exists():
                issues.append(f"{path.relative_to(REPO_ROOT)} missing doc {doc_path}")
    return issues


def check_json_files(root: Path, *, include_cookbook: bool) -> list[str]:
    issues: list[str] = []
    for path in iter_json_files(root):
        if path.name == "mods-data.json":
            issues.extend(check_mods_data(path))
        if include_cookbook and path.name == "cookbook-data.json":
            issues.extend(check_cookbook_data(path))
    return issues


def main() -> int:
    issues: list[str] = []
    include_cookbook = "--include-cookbook" in sys.argv

    for html_path in iter_html_files(REPO_ROOT):
        issues.extend(check_html_file(html_path))

    issues.extend(check_json_files(SITE_ROOT, include_cookbook=include_cookbook))

    if issues:
        print("Reference issues found:")
        for issue in sorted(set(issues)):
            print(f"- {issue}")
        return 1

    print("No missing local references detected.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
