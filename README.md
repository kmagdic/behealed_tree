# Drvo života

## Overview

A spiritual self-reflection web app based on the book *Be Healed* by Dr. Bob Schuchts and the HWP (Healing the Whole Person) Workbook — specifically Chapter 3 ("Facing Our Brokenness"). The app guides users through building their personal "Tree of Life" — a diagram connecting their primary deadly sin (trunk), its fruit/manifestations (branches/crown), and the underlying wounds of the heart (roots).

The app is in **Croatian language** and targets Catholic users going through the Be Healed retreat/workbook.

**Live site:** https://ground-hollow-symw.here.now/

---

## Files

| File | Description |
|------|-------------|
| `index.html` | Active app — complete single-file React app (React 18 + Babel inline) |
| `tree-data.js` | All spiritual content data (sins, wounds, prayers, etc.) |
| `tree-bg.jpg` | Tree illustration background image |
| `Drvo spoznaje.html` | Original prototype (stale — `index.html` is the source of truth) |

---

## Architecture

The app is a **single-page React app** with:
- `localStorage` persistence (key: `drvo_v3`)
- Split-screen layout: left = form/content, right = live tree visualization
- 5-step guided flow per "tree"
- Multiple trees supported (one per deadly sin)
- Print/PDF support
- Delete tree support (× button on hover in the trees list)

### Key data structures

```js
// One tree object (stored in localStorage as state.trees[])
{
  id: string,               // timestamp
  createdAt: string,        // "dd.mm.yyyy hh:mm"
  sinId: string,            // e.g. "ljutnja"
  fruits: [{id, naziv}],    // selected fruits
  customFruitsText: string, // user's own fruits (newline-separated)
  wounds: [{id, naziv}],    // selected wounds
  woundReflection: string,  // free text reflection on wounds
  woundComments: {[id]: string}, // comment per wound
  vows: string[],           // selected vow strings
  customVow: string,        // user's own vow
  judgments: string[],      // selected judgment strings
  customJudgment: string,   // user's own judgment
  woundEvent: string,       // childhood wound description
  priorities: {[id]: 1|2|3}, // priority per item
  step: 0-4,                // current step
  completed: boolean
}
```

---

## Screens / Views

### 1. Welcome Screen
Entry point. Start new tree or continue existing.

### 2. Trees List
Grid of all existing trees. Each card shows sin emoji, name, progress bar, and a × delete button (appears on hover, asks for confirmation).

### 3. Guided Flow (5 steps)

#### Step 1 — Sin Selection (Grijeh)
Grid of 7 sin cards.

#### Step 2 — Fruits (Plodovi)
- **Primary:** `<textarea>` for free input
- **Secondary:** "✦ Česti plodovi" predefined chips
- Prikazuje se prvih 6, ostatak na `+ Još N plodova s popisa`

**Priority chips:** Each chip cycles p1→p2→p3 on ●○○ button click. Size increases with priority.

#### Step 3 — Wounds (Rane)
- **Primary:** `<textarea>` for free reflection
- **Auto-shown:** Suggested wounds for the selected sin
- **Revealed:** "+ Ostale rane" → all 7 wounds
- **Per selected wound:** Shows lie text + `<textarea>` for personal comment

#### Step 4 — Vows & Judgments (Zavjeti)
- Textarea for own vow/judgment
- Revealed chip lists for suggested vows and judgments
- "Rana iz djetinjstva" textarea

#### Step 5 — Summary (Pregled)
Read-only view of all entered data, sorted by priority.

---

### 4. Prayer Screen (Molitve)
After completing a tree. Shows renunciation prayers per sin and wound, vow renunciation, and healing signs. Print button triggers `window.print()`.

---

### 5. Live Tree Panel (right side)

Always visible on desktop. Labels positioned absolutely over `tree-bg.jpg`:
- Fruit labels: crown area (top 11–26%)
- Sin label: trunk (~57%)
- Wound labels: roots (73–89%)
- Vow/judgment labels: deep roots (91–94%)

Truncated labels (>14 chars) show tooltip on click.

---

## Design Tokens

```
Colors:
  --cream:    #F7F3EE   (page bg)
  --warm:     #FDFAF6   (panel bg)
  --bark:     #8B6B4A   (primary, buttons)
  --bark-l:   #C4A882   (light bark, borders)
  --bark-d:   #5C4030   (dark bark, headings)
  --leaf:     #7A9E7E   (fruits/wounds green)
  --root:     #B0A090   (wounds/roots taupe)
  --txt:      #2C1F14   (body text)
  --mid:      #6B5040   (secondary text)
  --gold:     #C49A3C   (vows)

Typography:
  Headings/titles:  Cormorant Garamond (serif), weights 300/400/500/600
  Body/UI:          Inter, weights 300/400/500/600
```

---

## Data Model

All spiritual content is in `tree-data.js`:
- `smrtniGrijesi[]` — 7 deadly sins with fruits, wounds, prayers, virtues
- `smrtneRane[]` — 7 deadly wounds with lies, healing signs, prayers
- `unutarnjeZavjete[]` — inner vow suggestions
- `unutarnjeOsude[]` — bitter judgment suggestions
- `znakovi[]` — healing signs (wound → sign mapping)

---

## Publish

```bash
~/.agents/skills/here-now/scripts/publish.sh "/Users/kmagdic/Projects/2026/behealed_tree" --slug ground-hollow-symw --client claude-code
```
