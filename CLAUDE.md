# CLAUDE.md

Upute za Claude Code (claude.ai/code) pri radu na ovom repozitoriju.

## Što je ovo

Web aplikacija za duhovnu samorefleksiju — **"Stablo života"** — za katoličke korisnike koji prolaze duhovnu obnovu *Be Healed* (dr. Bob Schuchts, HWP Workbook, pogl. 3 "Facing Our Brokenness"). Aplikacija je **u cijelosti na hrvatskom**.

Korisnik gradi svoje stablo: **smrtni grijeh = deblo**, **plodovi = krošnja**, **rane srca = korijenje**, **zavjeti i osude = duboko korijenje**.

**Objavljeno:** https://ground-hollow-symw.here.now/

## Datoteke

| Datoteka | Uloga |
|----------|-------|
| `index.html` | Aktivna aplikacija — React 18 + Babel inline, bez build koraka |
| `tree-data.js` | Sav duhovni sadržaj (`window.TREE_DATA`) |
| `tree-bg.jpg` | Ilustracija stabla (desni panel i ispis) |
| `standalone/index.html` | ⚠️ **ZASTARJELO** — sadrži staru shemu (`unutarnjeZavjete`). Ne koristiti dok se ne regenerira. |
| `docs/` | Izvori: HWP Workbook, Be Healed, Be Transformed, fotografije hrvatske skripte |

> **`docs/` je u `.gitignore` namjerno** — to su autorske knjige. GitHub Actions workflow objavljuje **cijeli repo** (`path: '.'`), pa bi commit tih datoteka značio njihovo javno objavljivanje. Nikada ih ne dodavati u git.

## Objavljivanje

Dva puta, oba aktivna:

```bash
# GitHub Pages — automatski na svaki push u main (.github/workflows/static.yml)
git push

# here.now
~/.agents/skills/here-now/scripts/publish.sh "/Users/kmagdic/Projects/2026/behealed_tree" --slug ground-hollow-symw --client claude-code
```

## Provjera izmjena

Nema build koraka ni testova, pa se greška u JSX-u vidi tek u pregledniku — i to kao prazan ekran. **Uvijek provjeri prije nego proglasiš gotovim.**

`@babel/core` nije u projektu (nema `package.json`), pa ga instaliraj u privremeni direktorij:

```bash
D=$(mktemp -d)
npm --prefix "$D" install --silent @babel/core @babel/preset-react
node -e "
const fs=require('fs');
const h=fs.readFileSync('index.html','utf8');
fs.writeFileSync('$D/app.jsx', h.match(/<script type=\"text\/babel\">([\s\S]*?)<\/script>/)[1]);
require('$D/node_modules/@babel/core').transformFileSync('$D/app.jsx',
  {presets:[require('$D/node_modules/@babel/preset-react')]});
console.log('OK');"
```

Podaci:

```bash
node -e "global.window={};require('./tree-data.js');console.log('OK')"
```

Ispis i prelamanje PDF-a:

```bash
python3 -m http.server 8901 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --virtual-time-budget=15000 --no-pdf-header-footer \
  --print-to-pdf=/tmp/ispis.pdf "http://localhost:8901/index.html"
```

Za korak 4 i molitveni ekran treba stablo u `localStorage` (ključ `drvo_v3`). Zasij ga kroz konzolu pa klikni karticu stabla — headless auto-klik zna zatajiti, pravi preglednik je pouzdaniji.

## Arhitektura

Jedna HTML datoteka: React preko CDN-a (unpkg, s SRI hashevima), Babel transpilira u pregledniku. Google Analytics `G-WX9RNFYH86`.

**Stanje**: jedan objekt u `localStorage` pod ključem `drvo_v3`, oblika `{ trees: [TreeObject] }` — jedno stablo po grijehu.

```js
{
  id, createdAt,                    // "dd.mm.yyyy hh:mm"
  name, _autoName, _ordinal, _shortDate,
  sinId,                            // npr. "ljutnja"
  fruits: [{id, naziv}],
  customFruitsText,                 // vlastiti plodovi, odvojeni \n
  wounds: [{id, naziv}],
  woundReflection,                  // slobodni tekst, može biti višeredan
  woundComments: {[woundId]: string},
  vows: [string],    customVow,
  judgments: [string], customJudgment,
  godImages: [string],              // nazivi krivih slika Boga
  woundEvent,                       // rana iz djetinjstva, može biti višeredna
  priorities: {[id]: 1|2|3},
  step: 0-4, completed
}
```

**Raspored**: lijevo forma (`.left`), desno živa vizualizacija (`.tree-pane`, 400px, skriveno na mobitelu — ondje postaje traka od 260px ispod forme).

**Prikazi** (`view` u `App`): `welcome` → `list` → `guided` → `prayer`.

**Komponente**: `TreeLabel`, `TreePanel`, `StepBar`, `PChip`, `GuidedFlow`, `PrintTree`, `PrayerScreen`, `App` + pomoćne `slugHR`, `Redovi`, `getPriority`, `cyclePriority`.

**`CONFIG`** (unutar `EDITMODE` markera): `showKriveSlikeBoga` — prekidač za cijelu sekciju krivih slika Boga.

### Tijek u 5 koraka (`step` 0–4)

1. **Grijeh** — mreža od 7 kartica
2. **Plodovi** — slobodni textarea + chipovi (prvih 6, pa `+ Još N plodova s popisa`)
3. **Rane** — slobodni textarea + 3 predložene rane za taj grijeh + `+ Ostale rane` + po rani laž i komentar
4. **Zavjeti i osude** — zavjeti, gorke osude, *(sklopljeno)* krive slike Boga, rana iz djetinjstva
5. **Pregled** — sve uneseno, sortirano po prioritetu

**Živi panel**: labeli (`.lbl`) apsolutno pozicionirani nad `tree-bg.jpg` — plodovi u krošnji (11–26%), grijeh u deblu (~57%), rane u korijenju (73–89%), zavjeti/osude duboko (91–94%). Tri veličine po prioritetu; klik na skraćeni tekst otvara tooltip.

**Prioriteti**: chip se ciklički mijenja p1→p2→p3→p1; utječe na veličinu labela i redoslijed u pregledu.

**Brisanje stabla**: × na kartici → `deleteTree(id)` → `window.confirm` → toast.

## Podaci (`tree-data.js`)

Sadržaj je usklađen sa **službenim hrvatskim prijevodom skripte** (Dodatak A — rane, Dodatak B — grijesi) i s HWP Workbookom pogl. 3. Izvori su u `docs/`.

### Lanac koji model utjelovljuje

```
rana → laž → unutarnji zavjet + gorka osuda
     → bezbožno oslanjanje na sebe → smrtni grijeh → plodovi
```

### Službena terminologija

ID-evi su **namjerno ostali stari** radi spremljenih podataka u `localStorage`. Mijenjaj samo `naziv`, nikad `id`.

| ID | Prikazani naziv |
|----|-----------------|
| `ponos` | Oholost |
| `ljutnja` | Srditost |
| `pohlepa` | Škrtost |
| `prozdrljivost` | Neumjerenost u jelu i piću |
| `sramota` | Sram |
| `bespomoćnost` | Nemoć |

### `window.TREE_DATA`

- **`deblo`** — "Bezbožno oslanjanje na sebe", zajednički korijen svih sedam grijeha
- **`smrtneRane[]`** — 7 rana. Uz `laz` (kratka, za labele) i `molitva` još i `lazi` + `istina` razdvojeno kako je u skripti, te `sakrament`, `identitet`, `poslanje` (HWP str. 71) i `vodiKaGrijesima[]`
- **`smrtniGrijesi[]`** — `rane[]` (ID-evi, razriješe se u objekte pri učitavanju), `plodovi[]` gdje svaki plod ima `izRana[]`, `krepost`, `molitvaOdricanja`, `korijen`
- **`unutarnjiZavjeti[]`** — `{id, tekst, rane[], grijesi[], zastita, zamjena}`
- **`gorkeOsude[]`** — `{id, tekst, rane[], oprastam, osudio, premaBogu, istina}`
  - `oprastam` je **dativ** ("opraštam ocu"), `osudio` je **akuzativ** ("osudio sam oca") — hrvatski traži oba padeža
  - polja `istina` moraju se nastavljati na *"Proglašavam istinu da…"* → piši `"si Ti Otac koji…"`, ne `"Ti si Otac koji…"`
- **`kriveSlikeBoga[]`** — laži o Bogu
- **`raneDjetinjstva[]`** — `tip:"A"` (uskrata ljubavi) / `tip:"B"` (povreda granica), prema Be Healed pogl. 7

### Krive slike Boga — oprez s atribucijom

**Mehanizam** je doslovno Schuchtsov (Be Healed, pogl. 1: rana od roditelja → tiha osuda → nesvjesna projekcija na Boga). **Popis pojedinih slika nije njegov.** Zato polje `izvor`:

| `izvor` | Broj | Značenje |
|---------|------|----------|
| `"schuchts"` | 2 | doslovno njegove riječi |
| `"izvedeno"` | 2 | izvedeno iz teksta, on to tako ne naziva |
| `"tipologija"` | 10 | vanjska katehetska tipologija |

`izvor` se **nikada ne prikazuje korisniku** — zbunilo bi ga. Sekcija je u koraku 4 sklopljena (collapse) i gasi se s `CONFIG.showKriveSlikeBoga`.

### Izvedeni indeksi

Grade se jednom pri učitavanju: `ranaById`, `grijehById`, `zavjetiPoRani`, `osudePoRani`, `znakovi` (kompatibilnost), `migracijaPlodova`.

### Graditelji molitava

`molitvaZavjeta(z)`, `molitvaZavjetaSkupno(list)`, `molitvaOsude(o)`, `molitvaOsudeSkupno(list)`, `molitvaSlikeBoga(k)`.

Skupne verzije izgovaraju dugi uvod **jednom** pa nabroje stavke — pojedinačne ga ponavljaju na svakoj kartici, što u ispisu izgleda loše. Molitveni ekran koristi skupne.

## Konvencije koje se lako prekrše

- **Postupno otvaranje**: nijedna lista se ne prikazuje cijela odjednom. Plodovi i sve liste u koraku 4 daju prvih `PRIKAZI` (6) pa `+ Još N`. Liste su prethodno sortirane po relevantnosti za odabrane rane, pa je prvih 6 ujedno najkorisnije. Već odabrane stavke ostaju vidljive i izvan reza. Pomoćnici: `dio(kljuc, list, jeOdabran)`, `<JosGumb kljuc ukupno/>`, stanje u `vidiSve`.

- **Personalizacija koraka 4**: prijedlozi zavjeta, osuda, krivih slika Boga i rana iz djetinjstva istaknuti su ako im `rane[]` presijeca rane odabrane u koraku 3; ostali su prigušeni (`opacity .55`) ali odabirljivi. Oznaka `◂ <Rana>` pokazuje vezu.

- **Višeredna slobodna polja** (`woundEvent`, `woundReflection`): HTML sažima prijelaze retka, pa ih renderiraj kroz `<Redovi text=… />`. Bez toga se svi retci slijepe u jednu liniju.

- **Ime PDF-a**: `ispisi()` u `PrayerScreen` postavi `document.title` prije `window.print()` pa ga vrati. Preglednik uzima naslov kao zadano ime datoteke. Format je `Stablo života - <ime stabla>`, npr. `Stablo života - #3 Srditost 04.09.2026`. Koristi `tree.name` jer ga korisnik može preimenovati u headeru; `imeDatoteke()` miče samo znakove koje datotečni sustavi ne dopuštaju, dijakritika ostaje.

- **Prelamanje ispisa**: `.pcard` ima `break-inside: avoid`, naslovi `break-after: avoid`. Nakon zahvata u molitveni ekran uvijek pregledaj generirani PDF — kartice se ne smiju lomiti preko stranica.

- **Ton poticaja u poljima**: topao i pozivajući, nikad zapovjedan. Obrazac je *"Napiši… npr. …"* s trotočjem, a poziv na konkretnost dolazi kao blaga ponuda (*"Ako ti dođe neka konkretna situacija, slobodno je opiši"*), ne kao uputa (*"piši konkretno: kad, s kim"*). Ovo je duhovni dnevnik — korisnik piše o vlastitoj boli.

- **Podloga slike stabla**: `tree-bg.jpg` ima podlogu `#F8F8F8`, a `.tree-pane` je topla krem `#F2EDE6`. Bez `mix-blend-mode: multiply` na `.tree-bg` vidi se pravokutni šav ondje gdje slika staje. Ne mijenjaj paletu da se to riješi — multiply stapa bijelo, a crtež ostaje.

- **Nema AI integracije.** `window.claude.complete()` je uklonjen jer ne postoji ni na objavljenoj stranici — gumb je vodio u prazno. Ako se ikad vraća, mora ići preko serverske rute i imati vidljivo stanje greške.

## Dizajnerski tokeni

CSS custom properties na `:root`:

```
--cream: #F7F3EE   --warm: #FDFAF6    --bark: #8B6B4A   --bark-l: #C4A882
--bark-d: #5C4030  --leaf: #7A9E7E    --root: #B0A090   --txt: #2C1F14
--mid: #6B5040     --gold: #C49A3C    --gold-l: #E8C97A
```

Pisma: **Cormorant Garamond** (serif, naslovi) i **Inter** (tekst/UI), oba s Google Fonts.
