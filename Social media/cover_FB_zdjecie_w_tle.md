# Facebook Cover Photo – Zdjęcie w tle fanpage'a

## Specyfikacja
- **Rozmiar:** 1640 × 624 px (2x dla retina) / lub 820×312 px podstawowy
- **Ważna strefa bezpieczna:** środek i prawa strona – lewa strona częściowo zakryta przez zdjęcie profilowe na desktopie
- **Zdjęcie referencyjne:** dłoń trzymająca czerwoną parasolkę nad drewnianymi figurkami ludzi

---

## Prompt do Figma AI

```
Design a Facebook cover photo (1640x624px) for a Polish employee training company called Educandis.

VISUAL REFERENCE / PHOTO BACKGROUND:
Use a photo-based composition inspired by this concept: a hand holding a red umbrella over a group of wooden human figurines standing on a grey table surface. The mood is warm, professional, protective — employer taking care of employees.

The photo should occupy the LEFT 55% of the frame as a slightly darkened/overlayed image (add dark overlay at 40% opacity so text is readable).

RIGHT 45% of the frame: clean dark background (#0f172a) with the following text layout:
- Line 1 (small, white, uppercase, letter-spaced): "KRAJOWY FUNDUSZ SZKOLENIOWY"
- Line 2 (large, bold, white, Poppins-style): "100% dofinansowania"
- Line 3 (medium, red #e34234, bold): "na szkolenia Twoich pracowników"
- Line 4 (small, white, muted): "Monitorujemy nabory KFS w całej Polsce"
- Line 5 (bottom, CTA button style): red rounded pill button shape with white text "Sprawdź swój powiat →"

TOP RIGHT corner: white "EDUCANDIS" wordmark/logo

DIVIDER between photo and text area: subtle red (#e34234) vertical line, 3px wide

Style: professional, corporate, dark mode feel. No gradients. Clean. Trustworthy.
Font feel: Poppins for headings, Inter/clean sans for body.

IMPORTANT: Keep the right side (text area) fully readable and uncluttered. This is a Facebook page cover — safe zone for the profile picture is bottom-left 170x170px area, so don't put critical text there.
```

---

## Alternatywny prompt (jeśli Figma AI nie obsługuje photo reference)

Jeśli generujesz grafikę w Canva lub nakładasz tekst ręcznie na zdjęcie:

**Krok 1 – wybierz zdjęcie:**
Użyj poziomego zdjęcia (drugie, szersze: dłoń + parasolka + figurki, format 4780×3166).
Przytnij do formatu 1640×624 – kadruj tak żeby figurki były po lewej, dłoń z parasolką lekko po środku.

**Krok 2 – overlay:**
Dodaj prostokąt na całe zdjęcie: kolor `#0f172a`, opacity 50–60%.

**Krok 3 – tekst (prawa strona, od środka w prawo):**
```
[mały, biały, uppercase]  KRAJOWY FUNDUSZ SZKOLENIOWY
[duży, bold, biały]       100% dofinansowania
[średni, czerwony]        na szkolenia Twoich pracowników
[mały, szary]             Monitorujemy nabory KFS w całej Polsce
[przycisk CTA]            ► Sprawdź swój powiat
```

**Krok 4 – logo:**
Logo EDUCANDIS (białe PNG) – prawy górny róg, padding 24px.

---

## Gotowe narzędzia (alternatywy do Figma)

| Narzędzie | Jak użyć |
|-----------|----------|
| **Canva** | Nowy design → Facebook Cover → wgraj zdjęcie → dodaj overlay + tekst |
| **Figma** | Frame 1640×624 → wgraj zdjęcie → Rectangle overlay → Text layers |
| **Adobe Express** | Facebook Cover template → zamień zdjęcie i tekst |

---

## Tekst finalny na cover (do wklejenia)

**Wersja A (z liczbą):**
> 100% dofinansowania na szkolenia Twoich pracowników
> Monitorujemy nabory KFS w całej Polsce — bezpłatnie.
> educandis.pl/powiat

**Wersja B (hasło):**
> Szkolimy. Dofinansowujemy. Rozliczamy.
> KFS – do 100% zwrotu kosztów szkoleń
> educandis.pl

---

## Uwagi techniczne Facebook

- Zdjęcie w tle wyświetla się różnie na desktop vs mobile
- Na **mobile**: kadrowane do środka (około 640×360px ze środka)
- Na **desktop**: pełna szerokość, ale lewy dół zakryty zdjęciem profilowym (170×170px)
- Wgraj plik PNG (nie JPG) dla ostrego tekstu
- Po wgraniu sprawdź podgląd mobile w FB Studio
