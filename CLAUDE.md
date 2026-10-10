# CLAUDE.md

Upute za Claude Code (claude.ai/code) pri radu na ovom repozitoriju.

## Što je ovo

Web aplikacija za duhovnu samorefleksiju — **"Stablo života"** — za katoličke korisnike koji prolaze duhovnu obnovu *Be Healed* (dr. Bob Schuchts, HWP Workbook, pogl. 3 "Facing Our Brokenness"). Aplikacija je **dvojezična — hrvatski (zadano) i engleski**, a arhitektura je spremna za treći jezik.

Korisnik gradi svoje stablo: **smrtni grijeh = deblo**, **plodovi = krošnja**, **rane srca = korijenje**, **zavjeti i osude = duboko korijenje**.

**Objavljeno:** https://ground-hollow-symw.here.now/

## Datoteke

| Datoteka | Uloga |
|----------|-------|
| `index.html` | Aktivna aplikacija — React 18 + Babel inline, bez build koraka |
| `tree-data.hr.js` | Hrvatski: sadržaj, tekst sučelja i graditelji molitava (`window.JEZICI.hr`) |
| `tree-data.en.js` | Engleski — ista struktura i isti ID-evi (`window.JEZICI.en`) |
| `tree-bg.jpg` | Ilustracija stabla (desni panel i ispis) |
| `manifest.webmanifest`, `sw.js`, `icons/` | PWA — instalacija na početni zaslon + offline |
| `standalone/index.html` | ⚠️ **ZASTARJELO** — sadrži staru shemu (`unutarnjeZavjete`). Ne koristiti dok se ne regenerira. |
| `.github/workflows/static.yml` | Deploy na GitHub Pages + cache-busting |
| `docs/` | Izvori: HWP Workbook, Be Healed, Be Transformed, fotografije hrvatske skripte |

> **`docs/` je u `.gitignore` namjerno** (cijeli direktorij, `/docs/`) — to su autorske knjige. GitHub Actions workflow objavljuje **cijeli repo** (`path: '.'`), pa bi commit tih datoteka značio njihovo javno objavljivanje. Nikada ih ne dodavati u git.

## Objavljivanje

Dva puta, oba aktivna:

```bash
# GitHub Pages — automatski na svaki push u main (.github/workflows/static.yml)
# Workflow usput ubaci commit SHA u tree-data.<jezik>.js?v=… da probije predmemoriju.
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
node -e "global.window={};require('./tree-data.hr.js');require('./tree-data.en.js');console.log('OK')"
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
  vows: [id],        customVow,     // ID-evi iz unutarnjiZavjeti
  judgments: [id],   customJudgment, // ID-evi iz gorkeOsude
  godImages: [id],                  // ID-evi iz kriveSlikeBoga
  woundEvent,                       // rana iz djetinjstva, može biti višeredna
  priorities: {[id]: 1|2|3},
  step: 0-4, completed
}
```

Zavjeti, osude i slike Boga spremaju se kao **ID, ne tekst** — tekst ovisi o jeziku. Stari zapisi (tekst) prevode se u ID pri učitavanju (`migriraj()` u `load()`, idempotentno). Ono što se ne prepozna ostaje string i prikazuje se kakvo jest.

Prva verzija (v1, prvi commit) imala je i druge ID-eve plodova i grijeha (`gorčina`, `perfectionism_l`, `proždrljivost`…) te zavjete i osude formulirane drukčije nego danas (`"Život je opasan i nepravedan"`). `MIGRACIJA_V1` u `index.html` ih prevodi; jedan stari tekst smije pokriti dvije nove stavke. **Kad preformuliraš `tekst` zavjeta ili osude, stari tekst dodaj u `MIGRACIJA_V1`** — inače stabla koja ga još nose ostaju na hrvatskom i u engleskoj verziji. `fruits`/`wounds` i dalje nose `naziv` radi kompatibilnosti, ali se prikaz uvijek čita iz podataka aktivnog jezika (`nazivPloda`, `nazivRane`). Odabrani jezik je u `localStorage` pod `drvo_lang`.

**Raspored**: lijevo forma (`.left`), desno živa vizualizacija (`.tree-pane`, 400px, skriveno na mobitelu — ondje postaje traka od 260px ispod forme).

**Prikazi** (`view` u `App`): `welcome` → `list` → `guided` → `prayer`, plus `molitvenik` — opći molitvenik bez stabla, dostupan s početne (gumb *✝ Molitve*) i iz headera. `?view=molitve` ga otvara izravno; `App` drži URL usklađenim i šalje GA `molitvenik_otvoren`.

**Komponente**: `TreeLabel`, `TreePanel`, `StepBar`, `PChip`, `GuidedFlow`, `PrintTree`, `PrayerScreen`, `Molitvenik`, `App`, `Bogato`, `Redovi` + molitveni dijelovi `Molitva`, `TekstMolitve`, `Navodi`, `Sazetak`, `Odjeljak`, `KoraciOprosta` + pomoćne `t`, `pripremiPodatke`, `migriraj`, `imeStabla`, `getPriority`, `cyclePriority`.

### Molitve (`Molitvenik` i `PrayerScreen`)

Oba ekrana slijede redoslijed JPII Healing Centera: **laži i istina → odricanje od grijeha → oprost → (unutarnje iscjeljenje) → pečat i blagoslov**. Molitvenik pokazuje sve; `PrayerScreen` samo ono što je u stablu, a za cijeli proces oprosta vodi u molitvenik (`skokPriOtvaranju`).

- `<Molitva dijelovi=[{oznaka, vrsta, tekst}] | tekst sklopljeno?/>` — jedna kartica. Rane se dijele na *Odričem se* (`lazi`) / *Proglašavam istinu* (`istina`), grijesi na prvi odlomak / ostatak (`dijeloviRane`, `dijeloviGrijeha`). `sklopljeno` → `<details>`; `beforeprint` ih sve otvori.
- `TekstMolitve` razbija tekst: `\n\n` = odlomak, a svaka nova izjava (`NOVA_IZJAVA`: *U ime…*, *Proglašavam…*, *I renounce…*) ide u novi redak. **Ne uvoditi zagrade bez broja u postojeće molitve** — `Navodi` (zagrada s brojem) prikaže kao biblijski navod, a (zagradu bez broja) kao mjesto za vlastiti upis.
- `<Sazetak/>` bez stabla: rana → laž, grijeh → idol (`idolatrija`), sedam želja srca. `<Sazetak tree/>`: lanac kao na slici (plodovi → grijeh → deblo → zavjeti/osude → rane) i ujedno zamjenjuje stari sažetak koji je bio samo za ispis.
- U ispisu se tabovi oprosta prikažu svi, umetnute molitve se sakriju, a `opceMolitve` se ispišu jednom ispod koraka.

### Jezici

- Svaka `tree-data.<kod>.js` puni `window.JEZICI[kod] = { kod, oznaka, naslov, ui, data, molitve }`. `data` je struktura opisana dolje, `ui` je sav tekst sučelja, a `molitve` su graditelji molitava (gramatika je jezična).
- U `index.html`: `PODRZANI = ['hr','en']`, `ZADANI = 'hr'`. Jezik se bira redom: `?lang=xx` → `localStorage.drvo_lang` → zadani.
- Prekidač u headeru (`.jezik`) renderira se iz `PODRZANI`. Promjena je **živa**, bez reloada (`promijeniJezik` → `postaviJezik` zamijeni globalne `LANG` i `DATA`), a `history.replaceState` upiše `?lang=` u URL.
- Sav tekst ide kroz `t('k2.naslov')` / `t('k2.josPlodova', n)`. Ključ koji nedostaje pada na zadani jezik i ispisuje `console.warn`. Tekst s naglascima renderira `<Bogato text=…/>` (`**podebljano**`, `_kurziv_`, `\n`).
- Auto-ime stabla (`_autoName`) gradi `imeStabla()` uživo, pa se prevodi. Ime koje je korisnik sam upisao ostaje kakvo jest.
- GA: `naziv_koraka` šalje uvijek hrvatske nazive (`KORACI_GA`) da se povijest ne raspadne. Eventovi nose `jezik`.

**Dodavanje trećeg jezika** (npr. `de`):
1. kopiraj `tree-data.en.js` u `tree-data.de.js`, promijeni `kod`/`oznaka`/`naslov` i prevedi sve tekstove (**ID-eve i relacije ne diraj**)
2. u `<head>` dodaj `<script src="tree-data.de.js?v=dev"></script>`
3. dodaj `'de'` u `PODRZANI`

Workflow i prekidač ne treba dirati. Prije objave provjeri da se strukture poklapaju s `hr`: isti ID-evi, iste `rane[]`/`izRana[]`/`tip`/`premaBogu` i svi `ui` ključevi.

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

## Podaci (`tree-data.<jezik>.js`)

Hrvatski sadržaj je usklađen sa **službenim hrvatskim prijevodom skripte** (Dodatak A — rane, Dodatak B — grijesi) i s HWP Workbookom pogl. 3. Izvori su u `docs/`.

Engleski koristi terminologiju HWP Workbooka (*Seven Deadly Wounds*, *Ungodly Self-Reliance*, *Inner Vows*, *Bitter Root Judgments*, *Seven Signs of Healing*, grijesi Pride/Envy/Anger/Lust/Gluttony/Greed/Sloth). Molitve su vjerna parafraza, ne doslovni tekst workbooka. Engleski se piše iz izvornika, **ne prevodi se s hrvatskog**.

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

### `JEZICI[kod].data`

- **`deblo`** — "Bezbožno oslanjanje na sebe", zajednički korijen svih sedam grijeha
- **`smrtneRane[]`** — 7 rana. Uz `laz` (kratka, za labele) i `molitva` još i `lazi` + `istina` razdvojeno kako je u skripti, te `sakrament`, `identitet`, `poslanje` (HWP str. 71) i `vodiKaGrijesima[]`
- **`smrtniGrijesi[]`** — `rane[]` (ID-evi, razriješe se u objekte pri učitavanju), `plodovi[]` gdje svaki plod ima `izRana[]`, `krepost`, `molitvaOdricanja`, `korijen`
- **`unutarnjiZavjeti[]`** — `{id, tekst, rane[], grijesi[], zastita, zamjena}`
- **`gorkeOsude[]`** — `{id, tekst, rane[], oprastam, osudio, premaBogu, istina}`
  - `oprastam` je **dativ** ("opraštam ocu"), `osudio` je **akuzativ** ("osudio sam oca") — hrvatski traži oba padeža
  - polja `istina` moraju se nastavljati na *"Proglašavam istinu da…"* → piši `"si Ti Otac koji…"`, ne `"Ti si Otac koji…"`
  - u engleskom oba polja imaju isti oblik ("I forgive / I have judged *my father*"), a `istina` se nastavlja na *"I proclaim the truth that…"*. U `unutarnjiZavjeti` polje `zamjena` počinje s `to …` jer se nastavlja na *"…and choose"*
- **`kriveSlikeBoga[]`** — laži o Bogu
- **`raneDjetinjstva[]`** — `tip:"A"` (uskrata ljubavi) / `tip:"B"` (povreda granica), prema Be Healed pogl. 7
- **`smrtneRane[].istinaKratko`** — istina iz JPII izjave, za *Pečat i blagoslov*. U hrvatskom se nastavlja na *"Priznajem da…"* (`"sam na sigurnom…"`), u engleskom je cijela rečenica (`"I am safe and secure"`)
- **`zeljeSrca[]`** — sedam želja srca (JPII *Seven Deadly Wounds*). **Izvor ih ne povezuje s ranama** — ne dodavati `rane[]`
- **`oprost.{osoba,sebe,bog}[]`** — koraci `{tekst, molitva?}`; `molitva` je ključ iz `opceMolitve` ili `'pecat'`. Koraci o duševnim vezama (*soul ties*) namjerno su izostavljeni
- **`iscjeljenje[]`** — 6 koraka *Praying for Inner Healing*, `{naslov, stavke[]}` — upute, ne molitva
- **`opceMolitve`** — `lazi`, `osudaOsobe`, `osudaBoga`, `zavjeti` s (mjestima za upis)

### Krive slike Boga — oprez s atribucijom

**Mehanizam** je doslovno Schuchtsov (Be Healed, pogl. 1: rana od roditelja → tiha osuda → nesvjesna projekcija na Boga). **Popis pojedinih slika nije njegov.** Zato polje `izvor`:

| `izvor` | Broj | Značenje |
|---------|------|----------|
| `"schuchts"` | 2 | doslovno njegove riječi |
| `"izvedeno"` | 2 | izvedeno iz teksta, on to tako ne naziva |
| `"tipologija"` | 10 | vanjska katehetska tipologija |

`izvor` se **nikada ne prikazuje korisniku** — zbunilo bi ga. Sekcija je u koraku 4 sklopljena (collapse) i gasi se s `CONFIG.showKriveSlikeBoga`.

### Izvedeni indeksi

`pripremiPodatke(J)` u `index.html` gradi ih jednom za svaki jezik: `ranaById`, `grijehById`, `zavjetById`, `osudaById`, `slikaById`, `plodById`, `zavjetiPoRani`, `osudePoRani`, `znakovi` (kompatibilnost), `migracijaPlodova`. Graditelje molitava iz `J.molitve` kopira u `DATA`.

### Graditelji molitava

`molitvaZavjeta(z)`, `molitvaZavjetaSkupno(list)`, `molitvaOsude(o)`, `molitvaOsudeSkupno(list)`, `molitvaSlikeBoga(k)`, `molitvaPecata(rane)` (bez rana ostaju mjesta za upis).

Skupne verzije izgovaraju dugi uvod **jednom** pa nabroje stavke — pojedinačne ga ponavljaju na svakoj kartici, što u ispisu izgleda loše. Molitveni ekran koristi skupne.

## Konvencije koje se lako prekrše

- **Postupno otvaranje**: nijedna lista se ne prikazuje cijela odjednom. Plodovi i sve liste u koraku 4 daju prvih `PRIKAZI` (6) pa `+ Još N`. Liste su prethodno sortirane po relevantnosti za odabrane rane, pa je prvih 6 ujedno najkorisnije. Već odabrane stavke ostaju vidljive i izvan reza. Pomoćnici: `dio(kljuc, list, jeOdabran)`, `<JosGumb kljuc ukupno/>`, stanje u `vidiSve`.

- **Personalizacija koraka 4**: prijedlozi zavjeta, osuda, krivih slika Boga i rana iz djetinjstva istaknuti su ako im `rane[]` presijeca rane odabrane u koraku 3; ostali su prigušeni (`opacity .55`) ali odabirljivi. Oznaka `◂ <Rana>` pokazuje vezu.

- **Višeredna slobodna polja** (`woundEvent`, `woundReflection`): HTML sažima prijelaze retka, pa ih renderiraj kroz `<Redovi text=… />`. Bez toga se svi retci slijepe u jednu liniju.

- **Ime PDF-a**: `ispisi()` u `PrayerScreen` postavi `document.title` prije `window.print()` pa ga vrati. Preglednik uzima naslov kao zadano ime datoteke. Format je `Stablo života - <ime stabla>`, npr. `Stablo života - #3 Srditost 04.09.2026`. Koristi `tree.name` jer ga korisnik može preimenovati u headeru; `imeDatoteke()` miče samo znakove koje datotečni sustavi ne dopuštaju, dijakritika ostaje.

- **Prelamanje ispisa**: `.pcard` ima `break-inside: avoid`, naslovi `break-after: avoid`. Nakon zahvata u molitveni ekran uvijek pregledaj generirani PDF — kartice se ne smiju lomiti preko stranica.

- **Predmemorija za `tree-data.<jezik>.js`.** Svaka se učitava kao `tree-data.<jezik>.js?v=dev`; GitHub Actions pri deployu zamijeni `dev` commit SHA-om (korak *Cache-busting*, hvata sve jezike). Bez toga preglednici zauvijek serviraju staru kopiju i korisnici vide zastarjele molitve i nakon objave. **Ne miči `?v=dev` iz `index.html`** — to je sidro na koje `sed` cilja. Ako netko prijavi da vidi stari tekst, prvo provjeri predmemoriju, ne datoteku.

- **Molitve su u muškom rodu** (i u engleskom: *beloved son of the Father*). Sav tekst koji korisnik izgovara o sebi piše se muškim rodom — `bio`, `sam`, `voljen`, `slobodan`, `Sklopio` — nikad `bio/bila`. Prije je bilo pomiješano. Dvije iznimke ostaju s kosom crtom jer se **ne odnose na molitelja nego na druge ljude**: `sina/kćer kakvim/kakvom ga/ju je Bog stvorio` (molitva bludnosti). Pazi i na slaganje pridjeva pri promjeni — `sin/kći Očeva` mora postati `sin Očev`, ne `sin Očeva`.

- **Ton poticaja u poljima**: topao i pozivajući, nikad zapovjedan. Obrazac je *"Napiši… npr. …"* s trotočjem, a poziv na konkretnost dolazi kao blaga ponuda (*"Ako ti dođe neka konkretna situacija, slobodno je opiši"*), ne kao uputa (*"piši konkretno: kad, s kim"*). Ovo je duhovni dnevnik — korisnik piše o vlastitoj boli.

- **Podloga slike stabla**: `tree-bg.jpg` ima podlogu `#F8F8F8`, a `.tree-pane` je topla krem `#F2EDE6`. Bez `mix-blend-mode: multiply` na `.tree-bg` vidi se pravokutni šav ondje gdje slika staje. Ne mijenjaj paletu da se to riješi — multiply stapa bijelo, a crtež ostaje.

- **PWA.** Početna ima gumb *Instaliraj aplikaciju* (skriven kad je app već instalirana, `display-mode: standalone`). Chrome/Edge/Android → native dijalog (`beforeinstallprompt`); Safari/iOS → upute (Podijeli → Dodaj na početni zaslon). `sw.js` je **network-first za vlastite datoteke** — cache-first bi poništio cache-busting gore i korisnici bi vidjeli stare molitve; predmemorija služi samo offline. CDN (unpkg, fontovi) ide cache-first jer je verzioniran. Prvo učitavanje ide mimo SW-a, pa mu stranica nakon registracije pošalje popis dohvaćenih URL-ova (`predmemoriraj`). SW radi samo preko HTTPS-a ili `localhost`. Ako mijenjaš strategiju u `sw.js`, podigni `CACHE` (`stablo-v1` → `v2`). Ikone su generirane iz `ITree` glifa (`rsvg-convert`); manifest je samo hrvatski (ime aplikacije ne prati jezik).

- **Nema AI integracije.** `window.claude.complete()` je uklonjen jer ne postoji ni na objavljenoj stranici — gumb je vodio u prazno. Ako se ikad vraća, mora ići preko serverske rute i imati vidljivo stanje greške.

## Dizajnerski tokeni

CSS custom properties na `:root`:

```
--cream: #F7F3EE   --warm: #FDFAF6    --bark: #8B6B4A   --bark-l: #C4A882
--bark-d: #5C4030  --leaf: #7A9E7E    --root: #B0A090   --txt: #2C1F14
--mid: #6B5040     --gold: #C49A3C    --gold-l: #E8C97A
```

Pisma: **Cormorant Garamond** (serif, naslovi) i **Inter** (tekst/UI), oba s Google Fonts.
