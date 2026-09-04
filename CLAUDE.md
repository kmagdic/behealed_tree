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
| `Drvo spoznaje.html` | Original prototype (stale — `index.html` is the source of truth) |

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
2. Fruits — free textarea + predefined chips + optional AI suggestions
3. Wounds — free textarea + predefined wound chips + per-wound lie text + comment textarea
4. Vows & Judgments — textareas + chip lists + childhood wound textarea
5. Summary — read-only view of all entered data

**Live tree panel**: Labels (`.lbl`) positioned absolutely over `tree-bg.jpg`. Fruits go in crown area (top 11–26%), sin in trunk (~57%), wounds in roots (73–89%), vows/judgments in deep roots (91–94%). Labels support 3 priority sizes (p1/p2/p3) and show a tooltip on click for truncated text.

**Priority system**: Each selected chip/wound can be cycled p1→p2→p3→p1 via a toggle button. Priority affects label size in the tree panel and sort order in the summary.

**Delete tree**: Each tree card shows a × button on hover. Clicking it calls `deleteTree(id)` which asks for confirmation via `window.confirm`, removes the tree from state, and shows a toast.

**AI integration**: `window.claude.complete()` (prototype helper). In production, replace with a server-side API route calling the Anthropic SDK to protect the API key. Controlled by `CONFIG.showAISuggestions`. Two modes:
- `"fruits"` (step 2): suggests 4 additional fruit manifestations, pipe-separated Croatian response
- `"wounds"` (step 3): suggests 3 likely wounds given selected fruits, pipe-separated

## Data (`tree-data.js`)

`window.TREE_DATA` contains:
- `smrtniGrijesi[]` — 7 deadly sins, each with `id`, `naziv`, `ikona`, `bojaBg`, `bojaLight`, `plodovi[]`, `rane[]`, `krepost`, `molitvaOdricanja`, `znakIscjeljenja`
- `smrtneRane[]` — 7 wounds: abandonment, shame, fear, powerlessness, rejection, hopelessness, confusion — each with `laz` (the lie) and full prayer text
- `unutarnjeZavjete[]` — inner vow suggestion strings
- `unutarnjeOsude[]` — bitter judgment suggestion strings
- `znakovi[]` — wound → healing sign mappings

## Design Tokens

All CSS custom properties defined on `:root`:
```
--cream: #F7F3EE   --warm: #FDFAF6    --bark: #8B6B4A   --bark-l: #C4A882
--bark-d: #5C4030  --leaf: #7A9E7E    --root: #B0A090   --txt: #2C1F14
--mid: #6B5040     --gold: #C49A3C    --gold-l: #E8C97A
```
Fonts: **Cormorant Garamond** (serif, headings/titles) and **Inter** (body/UI), both from Google Fonts.
