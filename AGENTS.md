# Zakończenia Zygmunta — Project Guide

## What This Is

An interactive Polish-language narrative game ("Zygmunt's Endings") built as a single-page vanilla JS application. The player answers questions about a character named Zygmunt, which collect tags determining which story endings are available. The player then picks an ending via a tarot card carousel, triggering a cinematic zoom transition into the ending screen (video background + overlaid text).

Dark academia / gothic / mystical aesthetic. Fonts: Cinzel (headings) + Cormorant Garamond (body). Colors: near-black background, gold accents, burgundy hover states.

## File Structure

```
index.html              — Single HTML file with all 5 screens as overlay divs
css/style.css           — All styling, responsive breakpoint at 600px
js/data.js              — Questions, endings, tags, ALWAYS_UNLOCKED list
js/app.js               — Game logic IIFE: state, carousel, transitions, markdown
texts/*-ending.js       — Long ending texts registered on window.TEXTS['key']
Cards-jpg/              — 81 tarot card images (22 major arcana + 56 minor + back)
videos/                 — 6 ending videos (some shared between endings)
```

## Screen Flow

```
Intro → Questions (as many as needed) → Tarot Carousel → Zoom Transition → Ending (video or image) → "Again?" → Questions
```

Screens toggle via `showScreen(key)` which swaps the `.active` CSS class:
- `screen-intro` — Title, game explanation, "Rozpocznij" button
- `screen-questions` — One question at a time with fade animation between them
- `screen-tarot` — Carousel of matched tarot cards, left/right nav buttons
- `screen-ending-video` — Fullscreen looping video bg + text overlay
- `screen-ending-image` — Side-by-side image + text layout (unused by current endings, all are video)
- `zoom-overlay` — Transition layer: card image scales 3x and fades out

## Tag System & Ending Selection

Each answer adds tags to `collectedTags[]`. After all 4 questions, `selectEndings()` runs:

1. Include any ending whose `requiredTags` are ALL present in `collectedTags`
2. Guarantee 3 always-unlocked endings: `at-peace-with-himself`, `remain-in-czarna-wazka`, `pursue-lazarz-kiselew`

Result: `matchedEndings[]` with at least 3 endings, fed into the carousel.

### Questions → Tags

| Q# | Question (short) | Possible Tags |
|----|-----------------|---------------|
| 1 | Was Zygmunt insane? | `insane` or `sane` |
| 2 | Who was Durand? | `durand-enemy`, `durand-mirror`, `durand-nobody`, `durand-mentor` |
| 3 | Keys of Enoch? | `anti-esoteric`, `klucze-henocha`, `procedural` |
| 4 | First De Profundis letter to? | `lina`, `alistair`, `elzbieta` |

### Endings (7 total)

| ID | Required Tags | Tarot Card | Always Unlocked? |
|----|--------------|------------|------------------|
| `ninth-gate` | durand-mentor + klucze-henocha | 15-TheDevil | No |
| `czarna-wazka` | insane + durand-mirror | 15-TheDevil | No |
| `pursue-lazarz-kiselew` | sane + durand-enemy | 07-TheChariot | Yes |
| `lina-keller` | lina | 18-TheMoon | No |
| `remain-in-czarna-wazka` | sane | 04-TheEmperor | Yes |
| `at-peace-with-himself` | sane | 09-TheHermit | Yes |
| `alistair-mckinnon` | *(none)* | 19-TheSun | No (but always matches) |

## Carousel (js/app.js `updateCarousel()`)

Fan layout showing ALL matched cards simultaneously. The selected card (`carouselIndex`) is front-center at full size; other cards spread left/right with decreasing scale, opacity, and brightness based on distance. Circular wrapping via modulo arithmetic. Only the front card (`.is-front`) is clickable.

Desktop: 110px card spacing, 700px container (max 80vw).
Mobile (<=600px): 70px spacing, 90vw container, smaller cards (130×220 vs 200×340).

Navigation: left/right buttons cycle `carouselIndex`. Click front card → `pickCard()`.

## Key Functions in app.js

| Function | Purpose |
|----------|---------|
| `showScreen(key)` | Toggle active screen |
| `renderQuestion()` | Display current question with fade animation |
| `pickAnswer(answer)` | Collect tags, advance question or trigger ending selection |
| `selectEndings()` | Match endings by tags, build carousel DOM |
| `updateCarousel()` | Position all cards in fan layout based on `carouselIndex` |
| `pickCard()` | Zoom transition → `showEnding()` |
| `showEnding(ending)` | Display video/image ending, mark discovered |
| `renderMarkdown(text)` | Basic markdown→HTML (bold, italic, paragraphs, line breaks) |
| `resetGame()` | Clear state, return to questions |
| `getDiscoveredEndings()` | Read discovered ending IDs from localStorage |
| `markEndingDiscovered(id)` | Persist ending ID to localStorage |
| `updateEndingsCounter()` | Update "Odkryto X z Y zakończeń" counter (top-right) |

## Ending Text Sources

Short endings have inline `text` in data.js. Longer ones use `textKey` which maps to `window.TEXTS['key']` set by `texts/*-ending.js` files loaded before app.js.

## Persistence

`localStorage['discoveredEndings']` — JSON array of ending IDs the player has seen. Survives across sessions. Displayed as a counter in the top-right corner of every screen.

## CSS Architecture

- CSS custom properties on `:root` for theming (--bg, --gold, --burgundy, etc.)
- All screens are fixed overlays (inset:0) with opacity/visibility transitions
- Each screen has a `::after` vignette (radial gradient darkening edges)
- Single responsive breakpoint at 600px
- Carousel cards use inline `transform/opacity/filter` set by JS, with CSS `transition: 0.6s ease`
- Zoom overlay animates via `.active` (fade in) and `.zoomed` (scale 3x + fade out) classes
