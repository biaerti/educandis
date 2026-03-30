# Post 08 – Facebook | Screenshot checkera naborów KFS

## Format
- Platforma: **Facebook**
- Typ: Post organiczny + **reklama płatna** (głównie reklama)
- Rozmiar grafiki: **1080 × 1080 px** (kwadrat)
- Cel: pokazać że mamy działające narzędzie, konwersja na educandis.pl/powiat

---

## Treść posta

Wiesz kiedy w Twoim powiecie zaczyna się nabór KFS?

Stworzyliśmy bezpłatny checker — wpisujesz powiat, dostajesz datę naboru w ciągu kilku sekund.

Wrocław: nabór **13.04–17.04.2026**.
To za mniej niż 3 tygodnie.

Szkolenia dla personelu medycznego mogą być finansowane z KFS do 100%. Wniosek składamy za Ciebie.

Sprawdź swój powiat → educandis.pl/powiat

---

## Hashtagi
#KFS #naborKFS #dofinansowanie #szkolenia #pracodawca #placówkamedyczna #Educandis #bezpłatnie #checker

---

## Jak użyć screenshota strony w Figmie

### Krok 1 – zrób screenshot
1. Wejdź na **educandis.pl/powiat**, wpisz "Wrocław", kliknij "Sprawdź terminy naboru"
2. Poczekaj aż pojawi się karta z wynikiem (zielona, "Nabór nadchodzi")
3. Zrób screenshot całej karty z wynikiem — najlepiej narzędziem systemowym (Win+Shift+S) albo przeglądarka → prawy klik → "Zrób zrzut ekranu"
4. Zapisz jako **screenshot_powiat_wroclaw.png**

### Krok 2 – wgraj do Figmy
1. W Figmie: **Assets → Import** lub po prostu przeciągnij PNG na płótno
2. Zmień rozmiar obrazka tak żeby był proporcjonalny (nie rozciągaj) — ustaw szerokość ok. 520px dla formatu FB kwadrat
3. Delikatnie zaokrąglij rogi: w panelu po prawej "Corner radius" → **12px**
4. Dodaj cień: **Effects → Drop shadow** → X:0, Y:8, Blur:24, kolor czarny 20% opacity

### Krok 3 – wklej prompt do Figma AI i uzupełnij layout wokół screenshota

---

## Prompt do Figma AI – układ wokół screenshota (1080 × 1080 px)

Najpierw wgraj screenshot powiat.html do Figmy (instrukcja wyżej). Potem wklej ten prompt:

```
Design a square Facebook post (1080x1080px) for Educandis. A screenshot of the website tool "educandis.pl/powiat" is already placed in the design — it shows a green result card with text about an upcoming KFS grant application window. Do not move or resize the screenshot. Build the layout around it.

Brand: dark navy (#0f172a) background, red (#e34234) accents, white text. Poppins bold headings, Inter regular body.

Layout:
- Background: solid dark navy (#0f172a)
- TOP SECTION (~30%):
    - Top left: small white "EDUCANDIS" wordmark
    - Bold white heading, 2 lines: "Wiesz kiedy w Twoim powiecie"
    - Red bold continuation: "jest nabór KFS?"
    - Small muted grey text: "Sprawdź w kilka sekund — bezpłatnie"

- CENTER SECTION (~45%):
    - The screenshot of the website tool is positioned here, centered, with rounded corners (12px) and a subtle drop shadow
    - The screenshot should look like a phone/browser mockup — add a subtle phone frame or thin rounded border (#1e293b) around it if it helps
    - Red arrow pointing down to the screenshot with label: "Tak wygląda wynik"

- BOTTOM SECTION (~25%, red #e34234):
    - Bold white: "Sprawdź swój powiat"
    - White URL: "educandis.pl/powiat"
    - Small white muted: "Szkolenia dla branży medycznej · dofinansowanie do 100%"

Style: clean, product-showcase feeling. The tool/screenshot is the hero. Dark and professional.
```

---

## Prompt do Figma AI – wariant FLAT (bez screenshota, 1080 × 1080 px)

Jeśli nie chcesz używać screenshota — wersja flat:

```
Design a square Facebook post (1080x1080px) for Educandis, a Polish training subsidy company.

Brand: dark navy (#0f172a) background, red (#e34234) accents, white text. Poppins bold, Inter regular.

Layout:
- TOP LEFT: small white "EDUCANDIS" wordmark
- TOP CENTER: small red pill badge "NOWE NARZĘDZIE"
- CENTER LEFT (55%):
    - Bold white heading: "Sprawdź kiedy w Twoim powiecie jest nabór KFS"
    - Small white below: "Wpisz nazwę powiatu — wynik w kilka sekund"
    - Flat mockup of a search input field: white rounded rectangle with "Wrocław" text inside, red search button right with magnifying glass icon
    - Below mockup: green result card (dark green background #064e3b, rounded corners):
        "📅 Wrocław — Nabór nadchodzi"
        "13.04.2026 – 17.04.2026"
        Small green dot with "Aktywny" label
- RIGHT (45%): simple flat map of Poland with one red pin/dot on Wrocław area. White outline, minimal.
- BOTTOM red bar (#e34234): white bold "educandis.pl/powiat · Bezpłatnie"

Style: clean, product UI mockup feel. Trustworthy, tool-focused.
```

---

## Ustawienia reklamy FB/IG (kampania lead gen)

### Cel kampanii
**Ruch (Traffic)** → Strona internetowa → **educandis.pl/powiat**

Alternatywnie **Leady** jeśli chcesz formularz bezpośrednio w FB — ale ruch na stronę daje lepszą jakość leadów bo użytkownik widzi działający checker.

### Budżet
- Start testowy: **40–60 zł/dzień**
- Czas testu: **5–7 dni**
- Następnie: zostaw lepszy creative, wyłącz gorszy, skaluj do 80–100 zł/dzień

### Grupa docelowa
| Parametr | Ustawienie |
|---|---|
| Lokalizacja | Polska (cały kraj) |
| Wiek | 30–60 |
| Płeć | Wszystkie |
| Język | Polski |

**Zainteresowania (warstwuj — wybierz 3–4 z listy):**
- Zarządzanie zasobami ludzkimi
- Szkolenia i rozwój zawodowy
- Ochrona zdrowia / Healthcare
- Zarządzanie małą firmą
- BHP i bezpieczeństwo pracy

**Stanowiska (Detailed Targeting → Job titles):**
- Dyrektor
- Kierownik
- Manager HR
- Właściciel firmy
- Koordynator szkoleń
- Pielęgniarka oddziałowa / kierownik działu pielęgniarskiego

**Wyklucz:** osoby, które już odwiedziły educandis.pl (jeśli masz Pixel zainstalowany)

### Placementy
- **Automatyczne placementy** na start (Meta sam optymalizuje)
- Po 3–4 dniach sprawdź wyniki i wyłącz słabe placementy
- Zazwyczaj najlepiej działa: Facebook Feed + Instagram Feed + Instagram Stories

### Format reklamy
- Pojedynczy obraz (Single Image) — kwadrat 1080x1080
- **NIE karuzela** na start — testuj prosty format
- Headline (pod grafiką): "Sprawdź czy Twój powiat ma nabór KFS"
- Primary text: "Nabory KFS zaczynają się od marca. Sprawdź bezpłatnie kiedy jest nabór w Twoim powiecie i nie przegap szansy na dofinansowanie szkoleń."
- CTA button: **"Dowiedz się więcej"** lub **"Sprawdź"**
- URL: educandis.pl/powiat
- Display link: educandis.pl/powiat

### Pixel i śledzenie
- Zainstaluj Meta Pixel na stronie (jeśli nie ma)
- Ustaw zdarzenie konwersji: wypełnienie formularza kontaktowego po wyniku checkera
- Po 3 tygodniach z Pixelem zmień cel kampanii na **Konwersje** zamiast Ruch

### Harmonogram
- Uruchom: **poniedziałek rano** (budżety resetują się w poniedziałek, algo ma cały tydzień do optymalizacji)
- Czas emisji: 24/7 (nie ograniczaj godzin na start)
- Czas trwania: min. 7 dni bez przerw (algo potrzebuje czasu)

---

## Wskazówki do publikacji organicznej
- Czas: **środa 11:00** lub **czwartek 10:00**
- Caption napisz w 1. osobie, jakbyś opowiadał o narzędziu które właśnie stworzyłeś
- Możesz dać w komentarzu przykład dla kilku powiatów (Warszawa, Kraków, Gdańsk) żeby ludzie zobaczyli że narzędzie działa dla całej Polski
