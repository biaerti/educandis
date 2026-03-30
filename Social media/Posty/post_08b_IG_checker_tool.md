# Post 08b – Instagram | Screenshot checkera naborów KFS | KARUZELA

## Format
- Platforma: **Instagram**
- Typ: **Karuzela (4 slajdy)** + wersja pionowa 1-slajdowa
- Rozmiar: **1080 × 1350 px** (4:5 pionowy) — każdy slajd
- Cel: pokazać działający checker + konwersja na educandis.pl/powiat

---

## Caption (opis posta)

Nie wiesz kiedy w Twoim powiecie jest nabór KFS? Masz 30 sekund?

Stworzyliśmy narzędzie — wpisz powiat, dostajesz datę. Bezpłatnie.

Wrocław, Warszawa, Kraków, Gdańsk — monitorujemy każdy z 380 powiatów.

Szkolenia dla branży medycznej mogą być finansowane do 100%.

Sprawdź → link w bio 👆

---

**Hashtagi (w komentarzu):**
#KFS #naborKFS #dofinansowanie #szkolenia #pracodawca #placówkamedyczna #Educandis #bezpłatnie #HR #szkoleniadlafirm

---

## Karuzela – 4 slajdy

### SLAJD 1 – Hook (bez screenshota)
> Duże białe: "Wiesz kiedy w Twoim powiecie"
> Duże czerwone: "jest nabór KFS?"
> Małe: "Przesuń → żeby to sprawdzić"

### SLAJD 2 – Screenshot narzędzia
> Górny tekst: "Wystarczy wpisać powiat..."
> CENTRUM: screenshot z powiat.html (wynik dla Wrocławia — zielona karta "Nabór nadchodzi")
> Czerwona strzałka wskazująca na kartę z wynikiem
> Dolny tekst: "...i widzisz datę naboru w kilka sekund"

### SLAJD 3 – Wartość
> "Szkolenia dla personelu medycznego"
> Lista z checkmarks:
> ✓ Pielęgniarki i położne
> ✓ Lekarze i diagności
> ✓ Fizjoterapeuci
> ✓ Cały personel pomocniczy
> Duże czerwone: "Do 100% dofinansowania z KFS"

### SLAJD 4 – CTA (czerwone tło)
> Białe duże: "Sprawdź nabór w swoim powiecie"
> URL: "educandis.pl/powiat"
> Małe: "Bezpłatnie · Bez zobowiązań · W 30 sekund"

---

## Jak użyć screenshota w Figmie (karuzela IG)

### Krok 1 – przygotuj screenshot
1. Wejdź na **educandis.pl/powiat** na telefonie lub w przeglądarce (okno ~375px szerokości — symulacja mobile)
2. Wpisz "Wrocław" → "Sprawdź terminy naboru" → zaczekaj na zielony wynik
3. Zrób screenshot tylko karty wynikowej (bez górnego menu strony)
4. Najlepiej zrób screenshot na telefonie — bardziej autentyczny wygląd
5. Zapisz jako **screenshot_checker_mobile.png**

### Krok 2 – wgraj do Figmy
1. Przeciągnij PNG na slajd 2 w Figmie
2. Zmień rozmiar: szerokość **680px**, zachowaj proporcje
3. Wyśrodkuj poziomo na slajdzie
4. Corner radius: **16px** (bardziej mobile feel)
5. Drop shadow: Y:12, Blur:30, kolor czarny 25%
6. Opcjonalnie: dodaj ciemną ramkę telefonu wokół (Figma ma gotowe phone frames w zasobach)

### Krok 3 – Figma AI prompt dla slajdu 2

```
Design slide 2 of an Instagram carousel (1080x1350px) for Educandis. A mobile screenshot of the website tool is already placed in the center of the canvas — it shows a green result card with KFS grant dates for Wrocław. Build the layout around this screenshot.

Brand: dark navy (#0f172a) background, red (#e34234) accents, white text. Poppins bold.

Layout:
- TOP (~20%):
    - Top left: small white "EDUCANDIS" wordmark
    - Centered bold white text: "Wystarczy wpisać powiat..."
- CENTER (~55%):
    - The mobile screenshot is already placed here — do NOT move it
    - Add a subtle phone frame around the screenshot: thin rounded dark border (#1e293b), width 10px, corner radius 32px
    - Add a red curved arrow pointing down from the top text to the screenshot
    - Add a small red label next to the result card: "← Tak wygląda wynik"
- BOTTOM (~25%):
    - Centered white text: "...i widzisz datę naboru w kilka sekund"
    - Small muted grey: "2/4"
    - Subtle right swipe hint "›"

Style: product demo feel, clean, trust-building. Screenshot is the hero element.
```

---

## Prompt do Figma AI – cała karuzela 4 slajdy (bez screenshota, flat design)

Jeśli nie chcesz używać screenshota, użyj tego prompta:

```
Design a 4-slide Instagram carousel (1080x1350px each) for Educandis. The topic: showing a website tool that checks KFS grant windows by county.

BRAND SYSTEM:
- Background: #0f172a (dark navy), except slide 4
- Accent: #e34234 (red)
- Text: white headings, #94a3b8 muted small text
- Font: Poppins bold headings, Inter regular body
- Top left every slide: small white "EDUCANDIS" wordmark
- Bottom right slides 2–3: white slide counter

---

SLIDE 1 — Hook (typography only, no counter):
- Large bold white: "Wiesz kiedy w Twoim powiecie"
- Large bold red: "jest nabór KFS?"
- Small muted bottom: "Przesuń → żeby to sprawdzić"
- Right edge: subtle "›" swipe hint

SLIDE 2 — Tool demo:
- Small white top: "Wystarczy wpisać powiat..."
- Center: flat UI mockup of the tool interface:
    - White search input field with "Wrocław" text, red search button with magnifying glass
    - Below input: green result card (#064e3b background, white text):
        "📅 Wrocław — Nabór nadchodzi"
        "13.04.2026 – 17.04.2026"
        Small muted: "Zacznij przygotowania wcześniej"
    - Red arrow pointing at the result card
- Small white bottom: "...i widzisz datę w kilka sekund"

SLIDE 3 — Value: medical training coverage:
- Small red badge top: "BRANŻA MEDYCZNA"
- Bold white heading: "Szkolenia dla personelu medycznego"
- 4 rounded dark cards (#1e293b), each with red checkmark + white text:
    "Pielęgniarki i położne"
    "Lekarze i diagności"
    "Fizjoterapeuci"
    "Cały personel pomocniczy"
- Large red bold bottom: "Do 100% dofinansowania z KFS"

SLIDE 4 — CTA (red background, no counter):
- Background: #e34234
- EDUCANDIS wordmark centered top, larger, white
- Bold white large: "Sprawdź nabór w swoim powiecie"
- White URL: "educandis.pl/powiat"
- Outlined pill button: "Sprawdź teraz →"
- Small bottom: "Bezpłatnie · Bez zobowiązań · W 30 sekund"
```

---

## Wersja 1-slajdowa pionowa (1080 × 1350 px)

Prompt do Figma AI dla pojedynczego posta z mockupem narzędzia:

```
Design a vertical single Instagram post (1080x1350px) for Educandis. Use a phone mockup to showcase the website tool educandis.pl/powiat.

Brand: dark navy (#0f172a) background, red (#e34234) accents, white text.

Layout:
- TOP (~20%):
    - "EDUCANDIS" wordmark left
    - Bold white heading: "Sprawdź nabory KFS w swoim powiecie"
    - Small red: "Bezpłatnie · W 30 sekund"

- CENTER (~55%):
    - Flat illustration of a modern smartphone (dark frame, rounded corners)
    - Inside phone screen: the website UI showing:
        - Search field with "Twój powiat" placeholder
        - Red CTA button "Sprawdź terminy naboru"
        - Green result card: "Nabór nadchodzi · 13.04 – 17.04.2026"
    - Subtle glow/shadow under phone
    - Small floating badge top-right of phone: red circle "380 powiatów"

- BOTTOM (~25%, red #e34234):
    - Bold white: "Szkolenia dla branży medycznej"
    - White: "Dofinansowanie do 100%"
    - "educandis.pl/powiat"

Style: app showcase / product marketing feel. Clean, professional, trustworthy.
```

---

## Ustawienia reklamy – post 08 (uzupełnienie do post_08_FB)

### A/B test: dwa warianty do przetestowania
| | Wariant A | Wariant B |
|---|---|---|
| Creative | Karuzela 4 slajdy | Pojedynczy obraz pionowy |
| Cel | Ruch na stronę | Ruch na stronę |
| Budżet | 30 zł/dzień | 30 zł/dzień |
| Czas testu | 5 dni | 5 dni |

**Po 5 dniach:** zostaw wariant z niższym CPL (cost per lead), wyłącz drugi.

### Headline reklamy (tekst pod grafiką w FB Ads)
- Wersja A: "Sprawdź kiedy w Twoim powiecie jest nabór KFS"
- Wersja B: "Nabory KFS – sprawdź daty dla swojego powiatu"

### Primary text reklamy
```
Większość pracodawców nie wie, że nabory KFS trwają tylko kilka dni – i przegapia okno.

Stworzyliśmy bezpłatny checker: wpisujesz powiat, dostajesz datę. Żadnych rejestracji, żadnych formularzy.

Szkolenia dla personelu medycznego mogą być dofinansowane do 100%.

Sprawdź swój powiat → educandis.pl/powiat
```

### CTA button
**"Sprawdź"** (jeśli dostępny) lub **"Dowiedz się więcej"**

---

## Wskazówki do publikacji
- Czas organiczny: **piątek 10:00** (koniec tygodnia, HR planuje następny)
- Karuzela na IG zazwyczaj 2–3x więcej zasięgu organicznego niż single post
- Slajd 1 = miniatura feedu — testuj 2 warianty tekstu na slajdzie 1
- Ostatni slajd (CTA) można wyeksportować osobno jako Story z link sticker
