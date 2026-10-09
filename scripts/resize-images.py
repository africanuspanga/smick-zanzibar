#!/usr/bin/env python3
"""Create responsive WebP variants for every image in public/img.

For each `name.webp` this writes `name-384.webp`, `name-640.webp` and `name-1080.webp`
(never upscaled). `lib/image-loader.ts` picks the right one for each srcset width.

Usage: python3 scripts/resize-images.py   (needs Pillow: pip install pillow)
"""
from pathlib import Path
import re

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "public" / "img"
WIDTHS = (384, 640, 1080)
VARIANT = re.compile(r"-(?:" + "|".join(map(str, WIDTHS)) + r")$")

for src in sorted(ROOT.rglob("*.webp")):
    if src.parent.name == "brand" or VARIANT.search(src.stem):
        continue
    im = Image.open(src).convert("RGB")
    for w in WIDTHS:
        out = src.with_name(f"{src.stem}-{w}.webp")
        if out.exists() and out.stat().st_mtime >= src.stat().st_mtime:
            continue
        v = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        v.save(out, "WEBP", quality=76, method=6)
        print(out.relative_to(ROOT))
