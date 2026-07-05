#!/usr/bin/env python3
"""Replace real names/CPF with fictional data in SESI portfolio screenshots."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ASSETS = Path(
    "/Users/luanscerqueira/.cursor/projects/Users-luanscerqueira-Projects-prodgius/assets"
)

FAKE_NAME = "MARIA SILVA SANTOS"
FAKE_CPF = "123.456.789-00"
NAVY = "#1a3a5c"
DARK = "#1d1f2a"
MUTED = "#6b7280"


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
        if bold
        else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def cover_text(
    draw: ImageDraw.ImageDraw,
    im: Image.Image,
    box: tuple[int, int, int, int],
    text: str,
    text_xy: tuple[int, int],
    *,
    text_color: str = NAVY,
    font_size: int = 16,
    bold: bool = True,
    bg: tuple[int, int, int] | str | None = None,
) -> None:
    x1, y1, x2, y2 = box
    fill = bg if bg is not None else im.getpixel((min(x1 + 6, im.width - 1), min(y1 + 6, im.height - 1)))
    draw.rectangle(box, fill=fill)
    font = load_font(font_size, bold=bold)
    draw.text(text_xy, text, fill=text_color, font=font)


def crop_phone(im: Image.Image, width: int) -> Image.Image:
    return im.crop((0, 0, width, im.height))


TEAL = "#00b8d4"


def redact_payment_approved(im: Image.Image) -> Image.Image:
    im = crop_phone(im, 560)
    draw = ImageDraw.Draw(im)
    card_bg = (255, 255, 255)

    draw.rectangle((100, 124, 552, 206), fill=card_bg)

    font_name = load_font(13, bold=True)
    font_meta = load_font(11, bold=False)
    font_sesi = load_font(12, bold=True)

    draw.text((110, 128), FAKE_NAME, fill=NAVY, font=font_name)
    draw.text((110, 152), f"CPF/CNPJ: {FAKE_CPF}", fill=MUTED, font=font_meta)
    draw.text((110, 176), "SESI", fill=TEAL, font=font_sesi)
    return im


def redact_identity(im: Image.Image) -> Image.Image:
    im = crop_phone(im, 400)
    draw = ImageDraw.Draw(im)
    card_bg = (255, 255, 255)

    draw.rectangle((16, 512, 388, 668), fill=card_bg)

    font_label = load_font(11, bold=False)
    font_name = load_font(13, bold=True)
    font_cpf = load_font(13, bold=False)

    draw.text((96, 520), "Nome", fill=MUTED, font=font_label)
    draw.text((96, 538), FAKE_NAME, fill=NAVY, font=font_name)
    draw.text((96, 592), "CPF", fill=MUTED, font=font_label)
    draw.text((96, 610), FAKE_CPF, fill=NAVY, font=font_cpf)
    return im


def redact_titulos(im: Image.Image) -> Image.Image:
    im = crop_phone(im, 400)
    draw = ImageDraw.Draw(im)
    page_bg = (255, 255, 255)

    draw.rectangle((0, 84, 400, 122), fill=page_bg)

    font_label = load_font(12, bold=True)
    font_name = load_font(13, bold=True)
    draw.text((16, 86), "Cliente", fill=NAVY, font=font_label)
    draw.text((16, 106), FAKE_NAME, fill=DARK, font=font_name)
    return im


def redact_carrinho(im: Image.Image) -> Image.Image:
    return redact_titulos(im)


def redact_maquineta(im: Image.Image) -> Image.Image:
    draw = ImageDraw.Draw(im)
    screen_bg = (248, 248, 248)

    draw.rectangle((48, 350, 416, 402), fill=screen_bg)

    font_label = load_font(12, bold=True)
    font_name = load_font(11, bold=True)
    draw.text((56, 354), "Cliente", fill=NAVY, font=font_label)
    draw.text((56, 374), FAKE_NAME, fill=DARK, font=font_name)
    return im


JOBS = [
    (
        ASSETS / "Captura_de_Tela_2026-06-28_a_s_11.50.01-e9947277-c9c5-4c74-a6ee-1274f725e766.png",
        PUBLIC / "sesi-pagamento.png",
        redact_payment_approved,
    ),
    (
        ASSETS / "Captura_de_Tela_2026-07-05_a_s_12.42.39-a7a174d6-2b38-4fd7-9f99-ec29f28c2d7b.png",
        PUBLIC / "sesi-identidade.png",
        redact_identity,
    ),
    (
        ASSETS / "Captura_de_Tela_2026-07-05_a_s_12.45.59-0afdc6d4-e153-4521-b90a-2521e040f9f8.png",
        PUBLIC / "sesi-titulos.png",
        redact_titulos,
    ),
    (
        ASSETS / "Captura_de_Tela_2026-07-05_a_s_12.46.16-f956a8ab-8c80-4863-9eac-c05c7e38b96e.png",
        PUBLIC / "sesi-carrinho.png",
        redact_carrinho,
    ),
    (
        PUBLIC / "sesi-maquineta-original.png",
        PUBLIC / "sesi-maquineta.png",
        redact_maquineta,
    ),
]


def main() -> None:
    for src, dst, fn in JOBS:
        im = Image.open(src).convert("RGB")
        out = fn(im)
        out.save(dst, optimize=True)
        print(f"saved {dst} ({out.size[0]}x{out.size[1]})")


if __name__ == "__main__":
    main()
