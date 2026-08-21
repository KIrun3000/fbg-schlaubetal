#!/usr/bin/env python3
"""Legt das FBG-Logo in den Kopf der ersten Seite eines vorhandenen PDFs.

Der Inhalt des Originaldokuments bleibt unverändert — es wird lediglich eine
Ebene mit dem Logo darübergelegt. So behalten offizielle Dokumente (Satzung,
Verträge) ihren Wortlaut und ihr Layout und bekommen trotzdem das neue Branding.

    python3 scripts/add-logo-to-pdf.py public/downloads/satzung.pdf

Ohne --output wird die Datei an Ort und Stelle ersetzt.
"""

import argparse
import io
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
LOGO = Path(__file__).resolve().parent / "logo-fbg.png"

# Abstand vom oberen bzw. linken Seitenrand und Höhe des Logos, jeweils in Punkt
# (72 pt = 1 Zoll). 46 pt entsprechen gut 16 mm — groß genug, um erkennbar zu
# sein, klein genug, um nicht in den Fließtext zu ragen.
MARGIN_TOP = 38
MARGIN_LEFT = 57
LOGO_HEIGHT = 46


def build_overlay(width: float, height: float) -> PdfReader:
    """Erzeugt eine einseitige PDF-Ebene, die nur das Logo enthält."""
    logo = ImageReader(str(LOGO))
    logo_width, logo_height = logo.getSize()
    scaled_width = LOGO_HEIGHT * logo_width / logo_height

    buffer = io.BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=(width, height))
    pdf.drawImage(
        logo,
        MARGIN_LEFT,
        height - MARGIN_TOP - LOGO_HEIGHT,
        width=scaled_width,
        height=LOGO_HEIGHT,
        mask="auto",
    )
    pdf.save()
    buffer.seek(0)
    return PdfReader(buffer)


def add_logo(source: Path, output: Path) -> None:
    reader = PdfReader(str(source))
    writer = PdfWriter()

    first = reader.pages[0]
    overlay = build_overlay(float(first.mediabox.width), float(first.mediabox.height))
    first.merge_page(overlay.pages[0])

    for page in reader.pages:
        writer.add_page(page)

    with open(output, "wb") as handle:
        writer.write(handle)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path, help="PDF, das das Logo bekommen soll")
    parser.add_argument("--output", type=Path, help="Zieldatei (Standard: überschreiben)")
    args = parser.parse_args()

    source = args.pdf if args.pdf.is_absolute() else ROOT / args.pdf
    if not source.exists():
        raise SystemExit(f"Nicht gefunden: {source}")
    if not LOGO.exists():
        raise SystemExit(f"Logo fehlt: {LOGO}")

    output = args.output or source
    add_logo(source, output if output.is_absolute() else ROOT / output)
    print(f"Logo ergänzt: {output}")


if __name__ == "__main__":
    main()
