# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A spiritual self-reflection web app ("Drvo života") for Catholic users going through the *Be Healed* retreat by Dr. Bob Schuchts. The app is entirely in **Croatian**.

**Live site:** https://ground-hollow-symw.here.now/

## File Overview

| File | Role |
|------|------|
| `index.html` | Active app — single-file React 18 + Babel inline, no build step |
| `tree-data.js` | All spiritual content — sins, wounds, prayers, vows, judgments |
| `tree-bg.jpg` | Tree illustration background image (used in right panel and print) |
| `standalone/index.html` | Samostalna inačica — sve ugrađeno (podaci + slika kao base64) |
| `docs/` | Izvori: HWP Workbook, Be Healed, Be Transformed, fotografije hrvatske skripte |

## Publish

```bash
~/.agents/skills/here-now/scripts/publish.sh "/Users/kmagdic/Projects/2026/behealed_tree" --slug ground-hollow-symw --client claude-code
```

## Architecture

The HTML file is a single-file React app (React loaded via CDN, transpiled in-browser with Babel). Key patterns:

**State**: Single `state` object persisted to `localStorage` under key `drvo_v3`. Shape:
```js
{ trees: [TreeObject] }
```
One `TreeObject` per deadly sin a user works through (see README for full shape).

**Layout**: Split-screen — left = form/content (`.left`), right = live tree visualization (`.tree-pane`, fixed 400px wide, hidden on mobile). On mobile the tree panel becomes a 260px strip below the form.

**Views / screens** rendered by the single root component based on `view` state:
- `welcome` — entry point
- `list` — grid of existing trees
- `guided` — 5-step flow for building one tree (steps: Grijeh → Plodovi → Rane → Zavjeti → Pregled)
- `prayer` — post-completion prayer screen with print support

**5-step guided flow** (`step` 0–4 on the tree object):
1. Sin selection (grid of 7 cards)
2. Fruits — free textarea + predefined chips (prvih 6, pa `+ Još N`)
3. Wounds — free textarea + predefined wound chips + per-wound lie text + comment textarea
4. Vows & Judgments — textareas + chip lists + childhood wound textarea
5. Summary — read-only view of all entered data

**Live tree panel**: Labels (`.lbl`) positioned absolutely over `tree-bg.jpg`. Fruits go in crown area (top 11–26%), sin in trunk (~57%), wounds in roots (73–89%), vows/judgments in deep roots (91–94%). Labels support 3 priority sizes (p1/p2/p3) and show a tooltip on click for truncated text.

**Priority system**: Each selected chip/wound can be cycled p1→p2→p3→p1 via a toggle button. Priority affects label size in the tree panel and sort order in the summary.

**Delete tree**: Each tree card shows a × button on hover. Clicking it calls `deleteTree(id)` which asks for confirmation via `window.confirm`, removes the tree from state, and shows a toast.

## Data (`tree-data.js`)

Sadržaj je usklađen sa **službenim hrvatskim prijevodom skripte** (Dodatak A — rane, Dodatak B — grijesi) i s HWP Workbookom, pogl. 3. Izvori su u `docs/`.

**Službena terminologija** (ID-evi su namjerno ostali stari radi spremljenih podataka u `localStorage`):

| ID | Prikazani naziv |
|----|-----------------|
| `ponos` | Oholost |
| `ljutnja` | Srditost |
| `pohlepa` | Škrtost |
| `prozdrljivost` | Neumjerenost u jelu i piću |
| `sramota` | Sram |
| `bespomoćnost` | Nemoć |

`window.TREE_DATA` sadrži:

- `deblo` — "Bezbožno oslanjanje na sebe", zajednički korijen svih sedam grijeha
- `smrtneRane[]` — 7 rana; uz `laz`/`molitva` još i `lazi` + `istina` (razdvojeno kako je u skripti), `sakrament`, `identitet`, `poslanje` (HWP str. 71) i `vodiKaGrijesima[]`
- `smrtniGrijesi[]` — `rane[]` (ID-evi rana), `plodovi[]` gdje svaki plod ima `izRana[]`, `krepost`, `molitvaOdricanja`
- `unutarnjiZavjeti[]` — `{id, tekst, rane[], grijesi[], zastita, zamjena}` *(prije: `unutarnjeZavjete`, ravna lista stringova)*
- `gorkeOsude[]` — `{id, tekst, rane[], oprastam, osudio, premaBogu, istina}` *(prije: `unutarnjeOsude`)*
  - `oprastam` je **dativ** ("opraštam ocu"), `osudio` je **akuzativ** ("osudio sam oca") — oba trebaju jer hrvatski traži različite padeže
- `kriveSlikeBoga[]` — laži o Bogu. **Mehanizam** je doslovno Schuchtsov (Be Healed, pogl. 1: rana od roditelja → tiha osuda → projekcija na Boga), ali **popis pojedinih slika nije njegov**. Oznake: `izvor:"schuchts"` (2 — doslovno njegove riječi), `izvor:"izvedeno"` (2), `izvor:"tipologija"` (10 — vanjska katehetska tipologija). **`izvor` se nikad ne prikazuje korisniku.** Sekcija je u koraku 4 **sklopljena** (collapse) i dodatno se može posve ugasiti s `CONFIG.showKriveSlikeBoga`.
- `raneDjetinjstva[]` — `tip:"A"` (uskrata ljubavi) / `tip:"B"` (povreda granica), prema Be Healed pogl. 7

**Izvedeni indeksi** (grade se pri učitavanju): `ranaById`, `grijehById`, `zavjetiPoRani`, `osudePoRani`, `znakovi` (kompatibilnost).

**Graditelji molitava**: `molitvaZavjeta(z)`, `molitvaZavjetaSkupno(list)`, `molitvaOsude(o)`, `molitvaOsudeSkupno(list)`, `molitvaSlikeBoga(k)`. Skupne verzije izgovaraju dugi uvod **jednom**, pa nabroje stavke — inače se uvod ponavlja na svakoj kartici.

**Personalizacija koraka 4**: prijedlozi zavjeta, osuda, krivih slika Boga i rana iz djetinjstva istaknuti su ako im `rane[]` presijeca rane odabrane u koraku 3; ostali su prigušeni, ali odabirljivi.

**Višeredna slobodna polja** (`woundEvent`, `woundReflection`): HTML sažima prijelaze retka, pa se renderiraju kroz `<Redovi text=… />` koji svaki redak stavlja u svoj blok — inače se sve slijepi u jednu liniju.

**Ime PDF-a**: `ispisi()` u `PrayerScreen` postavi `document.title` na `Stablo-<Grijeh>-<datum stabla>` prije `window.print()` pa ga vrati. Preglednik uzima naslov kao zadano ime datoteke. `slugHR()` miče hrvatsku dijakritiku.

**Postupno otvaranje**: nijedna lista se ne prikazuje cijela odjednom. Plodovi (korak 2) i sve liste u koraku 4 prikazuju prvih `PRIKAZI` (6) pa gumb `+ Još N`. Kako su liste prethodno sortirane po relevantnosti za odabrane rane, prvih 6 su najkorisniji prijedlozi. Već odabrane stavke ostaju vidljive i kad su izvan reza. Pomoćnici: `dio(kljuc, list, jeOdabran)` i `<JosGumb kljuc ukupno/>`, stanje u `vidiSve`.

## Design Tokens

All CSS custom properties defined on `:root`:
```
--cream: #F7F3EE   --warm: #FDFAF6    --bark: #8B6B4A   --bark-l: #C4A882
--bark-d: #5C4030  --leaf: #7A9E7E    --root: #B0A090   --txt: #2C1F14
--mid: #6B5040     --gold: #C49A3C    --gold-l: #E8C97A
```
Fonts: **Cormorant Garamond** (serif, headings/titles) and **Inter** (body/UI), both from Google Fonts.
