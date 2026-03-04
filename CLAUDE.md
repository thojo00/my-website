# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

A static personal website called **RetroRide Aarhus** — a vintage bicycle collection showcase. It is plain HTML/CSS/JS with no build tools, no package manager, and no server. To preview it, simply open any `.html` file directly in a browser, or run a local server:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## Site Structure

| File/Folder | Purpose |
|---|---|
| `index.html` | Homepage — hero, featured bikes, about section |
| `categories.html` | Full collection grouped by category (Mountainbikes, Racercykler) |
| `gallery.html` | Photo grid of all bikes |
| `bikes/bike-1.html` … `bike-5.html` | Individual bike detail pages |
| `css/styles.css` | Single shared stylesheet for all pages |
| `js/main.js` | Mobile nav toggle + active link highlighting |
| `photos/` | Converted JPG images used in the site |
| `bikes/bike photos/` | Original HEIC/JPG source photos (not served directly) |

## Design System

All visual tokens are CSS custom properties defined at the top of `css/styles.css`:

- `--accent` — deep rust/terracotta (`#7B3120`), used for buttons, highlights, active links
- `--gold` — vintage gold (`#9C7A2A`), used for labels and section tags
- `--bg` — warm cream (`#F5F0E8`), the main background
- `--font-heading` — Playfair Display (serif, loaded from Google Fonts)
- `--font-body` — Inter (sans-serif)

The aesthetic is a vintage cycling magazine. Maintain this when making design changes.

## Language

The site content is written in **Danish**. User-facing text should stay in Danish unless the owner explicitly asks to change it.

## Adding a New Bike

1. Copy an existing `bikes/bike-N.html` as a template for the new detail page
2. Add a card `<article class="bike-card">` to the appropriate category section in `categories.html`
3. Add the card to `index.html` in the featured bikes grid if desired
4. Add gallery items to `gallery.html`
5. Add photos to `photos/` (JPG format; source HEICs go in `bikes/bike photos/`)

The bike detail page uses a two-column layout: main content on the left (history, modifications) and a specs sidebar on the right (sticky on desktop, stacks above content on mobile).

## Current Bikes (bike file mapping)

| File | Bike |
|---|---|
| `bike-1.html` | GT (Mountainbike) |
| `bike-2.html` | Cannondale #1 (Mountainbike) |
| `bike-3.html` | Specialized (Mountainbike) |
| `bike-4.html` | Nishiki (Racercykel) |
| `bike-5.html` | Cannondale #2 (Mountainbike) |

## Placeholder Text

Many content fields still contain placeholder text like "Skriv en kort beskrivelse her" (Danish for "Write a short description here"). These are intentional — the owner fills them in over time. HTML comments above each placeholder explain what should go there.
