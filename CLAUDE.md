# CLAUDE.md

Upute za Claude Code (claude.ai/code) pri radu na ovom repozitoriju.

## Što je ovo

Web aplikacija za duhovnu samorefleksiju — **"Be Healed - Tree of Life"** — za katoličke korisnike koji prolaze duhovnu obnovu *Be Healed* (dr. Bob Schuchts, HWP Workbook, pogl. 3 "Facing Our Brokenness"). Aplikacija je **dvojezična — hrvatski (zadano) i engleski**, a arhitektura je spremna za treći jezik.

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

**Stanje**: jedan objekt u `localStorage` pod ključem `drvo_v3`, oblika `{ trees: [TreeObject], zvjezdice: [ključ] }` — jedno stablo po grijehu, a `zvjezdice` su molitve koje je korisnik označio (`'r:<rana>'`, `'g:<grijeh>'`, `'o:<opća molitva>'`, `'pecat'`). `migriraj()` starom zapisu doda `zvjezdice: []`. Svaki `setState` mora čuvati ostala polja (`{...s, …}`).

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
  step: 0-4, completed,
  zvjezdica                         // true = označeno na popisu stabala (stoji na vrhu)
}
```

Zavjeti, osude i slike Boga spremaju se kao **ID, ne tekst** — tekst ovisi o jeziku. Stari zapisi (tekst) prevode se u ID pri učitavanju (`migriraj()` u `load()`, idempotentno). Ono što se ne prepozna ostaje string i prikazuje se kakvo jest.

Prva verzija (v1, prvi commit) imala je i druge ID-eve plodova i grijeha (`gorčina`, `perfectionism_l`, `proždrljivost`…) te zavjete i osude formulirane drukčije nego danas (`"Život je opasan i nepravedan"`). `MIGRACIJA_V1` u `index.html` ih prevodi; jedan stari tekst smije pokriti dvije nove stavke. **Kad preformuliraš `tekst` zavjeta ili osude, stari tekst dodaj u `MIGRACIJA_V1`** — inače stabla koja ga još nose ostaju na hrvatskom i u engleskoj verziji. `fruits`/`wounds` i dalje nose `naziv` radi kompatibilnosti, ali se prikaz uvijek čita iz podataka aktivnog jezika (`nazivPloda`, `nazivRane`). Odabrani jezik je u `localStorage` pod `drvo_lang`.

**Raspored**: lijevo forma (`.left`), desno živa vizualizacija (`.tree-pane`, 400px, skriveno na mobitelu — ondje postaje traka od 260px ispod forme).

**Prikazi** (`view` u `App`): `welcome` → `list` → `guided` → `prayer`, plus `molitvenik` — opći molitvenik bez stabla. Ulaz je namjerno istaknut: na početnoj zlatna kartica `.w-mol` (križ `ICross` i naslov) ispod gumba za stablo, a u headeru zlatni križ `.hdr-mol` na svim ekranima osim samog molitvenika (na mobitelu samo ikona). `?view=molitve` ga otvara izravno; `App` drži URL usklađenim i šalje GA `molitvenik_otvoren`. **Poveznica na molitvu**: `?grijeh=srditost` / `?rana=sram` (en `?sin=anger` / `?wound=shame`) otvori molitvenik na toj kartici (`molitvaIzUrla` → `skokPriOtvaranju`). Čita se ID ili naziv na bilo kojem jeziku, bez obzira na dijakritiku i velika slova (`slug`), pa podijeljena poveznica radi i na drugom jeziku. Otvaranje kartice grijeha/rane u molitveniku upiše parametar u URL (`molitvaUUrl`, naziv aktivnog jezika), zatvaranje ga briše, izlazak iz molitvenika također.

**Komponente**: `TreeLabel`, `TreePanel`, `StepBar`, `PChip`, `GuidedFlow`, `PrintTree`, `PrayerScreen`, `Molitvenik`, `PopisStabala`, `App`, `Bogato`, `Redovi` + molitveni dijelovi `Molitva`, `TekstMolitve`, `Navodi`, `Sazetak`, `Odjeljak`, `KoraciOprosta` + pomoćne `t`, `pripremiPodatke`, `migriraj`, `imeStabla`, `getPriority`, `cyclePriority`.

### Molitve (`Molitvenik` i `PrayerScreen`)

Oba ekrana idu redom: **odricanje od grijeha → laži i istina → oprost → (unutarnje iscjeljenje) → pečat i blagoslov**. Molitvenik pokazuje sve; `PrayerScreen` samo ono što je u stablu, a za cijeli proces oprosta vodi u molitvenik (`skokPriOtvaranju`).

- `<Molitva dijelovi=[{oznaka, vrsta, tekst}] | tekst sklopljeno?/>` — jedna kartica. Rane se dijele na *Odričem se* (`lazi`) / *Proglašavam istinu* (`istina`), grijesi na prvi odlomak / ostatak (`dijeloviRane`, `dijeloviGrijeha`). `sklopljeno` → `<details>`; `beforeprint` ih sve otvori.
- `TekstMolitve` razbija tekst: `\n\n` = odlomak, a svaka nova izjava (`NOVA_IZJAVA`: *U ime…*, *Proglašavam…*, *I renounce…*) ide u novi redak. **Ne uvoditi zagrade bez broja u postojeće molitve** — `Navodi` (zagrada s brojem) prikaže kao biblijski navod, a (zagradu bez broja) kao mjesto za vlastiti upis.
- `<Sazetak/>` bez stabla: rana → laž, grijeh → idol (`idolatrija`), sedam želja srca. `<Sazetak tree/>`: lanac kao na slici (plodovi → grijeh → deblo → zavjeti/osude → rane) i ujedno zamjenjuje stari sažetak koji je bio samo za ispis.
- U ispisu se tabovi oprosta prikažu svi, umetnute molitve se sakriju, a `opceMolitve` se ispišu jednom ispod koraka.
- **Izbornik odjeljaka** (`<Izbornik stavke/>`, `.mol-toc`) zalijepljen je na vrhu i u molitveniku i u molitvama stabla: tanak, proziran, jedan red (na mobitelu se pomiče vodoravno), tiho ističe odjeljak koji se čita (zadnji čiji je naslov u gornjoj trećini). Neotkriveni odjeljci su prigušeni; klik ih otkrije. Mora stati u 680px — zato `iscjeljenjeKratko` („Unutarnje iscjeljenje“). Na mobitelu skrola cijela stranica, pa CSS pod `:has(.mol-skrol)` otpušta `overflow` na `.left`, `.split` i `body` — bez toga `position: sticky` ne radi. Sekcije i kartice imaju `scroll-margin-top`, da skok ne završi ispod izbornika.
- **Postupno otkrivanje** (`useOtkrivanje`): na početku se vide sažetak te prva dva numerirana odjeljka (odricanje od grijeha, laži i istina); gumb `<Dalje/>` otkriva sljedeći, uz *Prikaži sve*. Odjeljak se otkriva i kad se otvori molitva u njemu (događaj `otkrij-za`, prefiksi id-eva), te prije ispisa (`beforeprint`, `ispisi()` — tu je `flushSync`).
- **Poveznice na molitvu**: redovi sažetka (`naKlik(id)`) zovu `otvoriMolitvu(id)` — otkrije odjeljak, otvori `<details>`, skroluje i nakratko istakne karticu. Id-evi: `mol-r-<rana>`, `mol-g-<grijeh>` u molitveniku, `st-r-…`/`st-g-…` u stablu. Na dnu otvorene kartice je samo mala strelica ↑ u tihom krugu (`.mol-natrag`, title *Ukratko*) za povratak. Svaki takav red ima zlatnu strelicu **↓** desno (`td.mol-ide`, u lancu `span.mol-vodi::after`) da je jasno da vodi dolje; ikona i naziv grijeha stoje u `.ikona-naziv` (flex), da se dugi naziv („Neumjerenost u jelu i piću“) na mobitelu ne spusti ispod ikone.
- Zatvoreni natpisi za otvaranje (*Suprotne vrline*, *Iz evanđelja*, *Znak ozdravljenja i sakrament*) namjerno su **sitni i prigušeni**; zeleni okvir se pojavi tek kad se otvore. Vrline se ne smiju vidjeti unaprijed (ni u podnaslovu kartice). U sažetku molitvenika tablica grijeha ima zaglavlje *Grijeh | Idol*.
- Vrline se u sučelju svugdje zovu **Suprotne vrline** (`ui.molitvenik.krepost`) — korisnikov izbor; u knjizi je tablica naslovljena „Sedam živih vrlina“, a parovi (`krepost.par`) su doslovno iz nje.
- **Zvjezdice**: `ZvjezdiceCtx` (iz `App`), `<Zvjezdica k/>` u glavi kartice i u umetnutim općim molitvama. Označene molitve **nemaju svoj odjeljak** — na vrhu molitvenika su samo poveznice (`.mol-moje`, `ciljZvjezdice(k)`) koje otvore karticu; opća molitva iz oprosta prvo prebaci tab (`mol-o-<tab>-<molitva>`). U ispisu se ne pokazuju.
- **Sve se otvara postupno**: odjeljci (`useOtkrivanje`), kartice molitava (i u stablu), dijelovi sažetka (`details.mol-dio` — otvoreni su samo grijesi), koraci unutarnjeg iscjeljenja (`details.mol-korak`), Isusov primjer, žive vrline (`<Vrline/>`, i na kartici i u sažetku) i znak ozdravljenja. Natpisi za otvaranje (`details.znak>summary`) su sitni (10.5px); znak ozdravljenja i sakrament iste su veličine (12px), a **sakrament je druge boje** (`.znak-sak`, smeđa). `otvoriSveDetalje()` sve otvori za ispis.
- **Redoslijed**: **grijesi prije rana** i u sažetku i u molitvama — tako ide nauk (Be Healed pogl. 6 → 7, HWP C → E) i stablo odozgo prema dolje. JPII list i HWP Dodatak imaju obrnuto (prvo laži rana), ali korisnik je izričito odabrao grijeh prvi jer mu je logičnije.
- **Ne definirati komponente unutar komponenti** (`const Red = () => …` u renderu): remountaju djecu pri svakom renderu i zatvaraju otvorene `<details>` (npr. klik na zvjezdicu). Koristi pomoćne funkcije (`red()`, `korak()`).

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

**Traka koraka** (`StepBar`): klik na korak vodi na njega (`idiNa`) — naprijed kao `next()` (sprema `step`, GA), natrag kao `prev()`. Bez odabranog grijeha klikabilan je samo korak 1.

**Ime stabla** uređuje se na tri mjesta: u headeru (`.hdr-tree-name`), krupno na vrhu Pregleda i na vrhu molitvenog ekrana (`.ime-stabla`, skriveno u ispisu). Prazno ime se pri izlasku vraća na automatsko. `GuidedFlow` drži vlastitu kopiju stabla, pa `useEffect` u nju prepisuje `name`/`_autoName` iz propa — bez toga bi sljedeći `patch()` pregazio ime promijenjeno u headeru.

**Živi panel**: labeli (`.lbl`) apsolutno pozicionirani nad `tree-bg.jpg` — plodovi u krošnji (11–26%), grijeh u deblu (~57%), rane u korijenju (73–89%), zavjeti/osude duboko (91–94%). Tri veličine po prioritetu; klik na skraćeni tekst otvara tooltip.

**Prioriteti**: chip se ciklički mijenja p1→p2→p3→p1; utječe na veličinu labela i redoslijed u pregledu.

**Brisanje stabla**: × na kartici → `deleteTree(id)` → `window.confirm` → toast.

**Popis stabala** (`PopisStabala`, izvan `App`-a da se ne remounta): zvjezdica (☆/★) označi stablo i podigne ga na vrh. Redoslijed je redoslijed niza `trees` — `prebaciZvjezdicuStabla` i `poredajStabla` ga drže u redoslijedu prikaza (označena pa ostala). Premještanje je na **pointer eventima, ne HTML5 drag & drop** (ne radi na dodir): mišem se vuče cijela kartica (prag 6px, klik nakon povlačenja ne otvara stablo), prstom hvataljka ⠿ (`touch-action:none`), tipkovnicom strelice na hvataljci. Povlačenjem se ne prelazi između označenih i neoznačenih. Uz rub okvira koji skrola lista se sama pomiče. Na računalu se hvataljka i prazna zvjezdica pokažu tek na hover (`@media(hover:hover)`).

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
  - `krepost.naziv`/`opis` — jedna krjepost iz JPII molitve (korak 1, znakovi iscjeljenja)
  - `krepost.par` — **žive vrline** doslovno iz službenog hrvatskog izdanja *Be Healed*, tablica 8.1 „Sedam živih vrlina“ (npr. *Strpljivost i predanost*, *Čednost i samokontrola*, *Velikodušnost i upravljanje*). Knjiga kaže **vrline**, ne „krjeposti“ — u sučelju je oznaka *Suprotne vrline*
  - `krepost.evandjelje: [{tekst, navod}]` — kako je Isus tu vrlinu živio: **doslovni tekst evanđelja** (hr: Zagrebačka Biblija, en: RSV-CE) i navod koji `Navod` pretvara u poveznicu. Prizori prate Be Healed str. 102–103; same retke smo odabrali mi. U sučelju je sklopljeno kao *Iz evanđelja* unutar sklopljenih *Suprotnih vrlina* (`<Vrline evandjelje/>` → `<Evandjelje/>`)
  - `pojasnjenje` — „Što je ovaj grijeh?“: tri odlomka (što je dobro koje je izobličeno i koji je idol · što grijeh skriva i koji su mu plodovi · lijek). Temelj je Be Healed pogl. 6 (tabl. 6.1 i str. 77, gdje Schuchts za svaki grijeh kaže koju nesigurnost skriva: srdžba nemoć i strah, škrtost nesigurnost, bludnost bol odbačenosti, neumjerenost prazninu napuštenosti, lijenost umor od tuđih očekivanja, zavist nesigurnost u vrijednost i sram, oholost sram i nedostatnost). Tekst je naš, ne citat. U sučelju je sklopljen na vrhu kartice (`<Pojasnjenje x/>`, prop `uvod` u `<Molitva/>`, natpis `ui.molitvenik.staJe`)
  - **Rane nemaju vrlinu** — Schuchts je ne daje ni u jednoj knjizi. Uz ranu se, na klik, prikazuje `znakIscjeljenja` i `sakrament` (`<ZnakRane/>`). Ne izmišljati vrlinu po rani
- **`smrtneRane[].pojasnjenje`** — „Što je ova rana?“, isti oblik kao kod grijeha: kako nastaje i kako se osjeća · laž (Be Healed tabl. 7.1), tipičan zavjet i grijesi koje hrani (`vodiKaGrijesima`) · kako je Isus tu ranu nosio na križu (Be Healed pogl. 8) uz znak ozdravljenja i sakrament. Beznađe ima i blagu napomenu da se potraži pomoć ako se javljaju misli o smrti — ne micati je. Zagrade bez broja u opisima su obične zagrade (`<Navodi bezUpisa/>`), ne mjesta za upis. Popis grijeha **ne piše se u tekst** opisa — na dnu opisa je tihi redak poveznica („raste iz rana: …“ / „vodi u grijehe: …“), u stablu na ono čega u stablu nema vodi u molitvenik (`imaLokalno`, `naVan` → `onMolitvenik(id)`)
- **`smrtneRane[].znakIscjeljenja`** (hr) — doslovno „Sedam znakova ozdravljenja“ iz hrvatskog izdanja (npr. *Čistoća i vrijednost zamjenjuju sram*). Oznaka u sučelju: *Znak ozdravljenja*. Fotografije službenih izraza su u `docs/poveznice/`
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

`pripremiPodatke(J)` u `index.html` gradi ih jednom za svaki jezik: `ranaById`, `grijehById`, `zavjetById`, `osudaById`, `slikaById`, `plodById`, `zavjetiPoRani`, `osudePoRani`, `raneZaGrijeh`, `grijesiZaRanu`, `znakovi` (kompatibilnost), `migracijaPlodova`.

**Grijeh ↔ rana** je veza „više na više“ u oba smjera (HWP str. 30: *grijeh ne samo da nanosi rane, nego i raste iz rana*; str. 53 „krug grijeha i rana“; HWP str. 29: ranu obično nanese tuđi grijeh, a moj grijeh raste iz moje rane). `g.rane` i `r.vodiKaGrijesima` se ne poklapaju posve, pa **poveznice čitaj iz `raneZaGrijeh` / `grijesiZaRanu`** (unija, simetrično). `g.rane` ostaje netaknut jer daje 3 prijedloga u koraku 3. Veza Sram → Zavist dodana je prema Be Healed str. 77. Graditelje molitava iz `J.molitve` kopira u `DATA`.

### Graditelji molitava

`molitvaZavjeta(z)`, `molitvaZavjetaSkupno(list)`, `molitvaOsude(o)`, `molitvaOsudeSkupno(list)`, `molitvaSlikeBoga(k)`, `molitvaPecata(rane)` (bez rana ostaju mjesta za upis).

Skupne verzije izgovaraju dugi uvod **jednom** pa nabroje stavke — pojedinačne ga ponavljaju na svakoj kartici, što u ispisu izgleda loše. Molitveni ekran koristi skupne.

## Konvencije koje se lako prekrše

- **Postupno otvaranje**: nijedna lista se ne prikazuje cijela odjednom. Plodovi i sve liste u koraku 4 daju prvih `PRIKAZI` (6) pa `+ Još N`. Liste su prethodno sortirane po relevantnosti za odabrane rane, pa je prvih 6 ujedno najkorisnije. Već odabrane stavke ostaju vidljive i izvan reza. Pomoćnici: `dio(kljuc, list, jeOdabran)`, `<JosGumb kljuc ukupno/>`, stanje u `vidiSve`.

- **Personalizacija koraka 4**: prijedlozi zavjeta, osuda, krivih slika Boga i rana iz djetinjstva istaknuti su ako im `rane[]` presijeca rane odabrane u koraku 3; ostali su prigušeni (`opacity .55`) ali odabirljivi. Oznaka `◂ <Rana>` pokazuje vezu.

- **Višeredna slobodna polja** (`woundEvent`, `woundReflection`): HTML sažima prijelaze retka, pa ih renderiraj kroz `<Redovi text=… />`. Bez toga se svi retci slijepe u jednu liniju.

- **Ime PDF-a**: `ispisi()` u `PrayerScreen` postavi `document.title` prije `window.print()` pa ga vrati. Preglednik uzima naslov kao zadano ime datoteke. Format je `<naslov> - <ime stabla>`, npr. `Be Healed - Tree of Life - #3 Srditost 04.09.2026`. Koristi `tree.name` jer ga korisnik može preimenovati u headeru; `imeDatoteke()` miče samo znakove koje datotečni sustavi ne dopuštaju, dijakritika ostaje.

- **Prelamanje ispisa**: `.pcard` ima `break-inside: avoid`, naslovi `break-after: avoid`. Nakon zahvata u molitveni ekran uvijek pregledaj generirani PDF — kartice se ne smiju lomiti preko stranica.

- **Predmemorija za `tree-data.<jezik>.js`.** Svaka se učitava kao `tree-data.<jezik>.js?v=dev`; GitHub Actions pri deployu zamijeni `dev` commit SHA-om (korak *Cache-busting*, hvata sve jezike). Bez toga preglednici zauvijek serviraju staru kopiju i korisnici vide zastarjele molitve i nakon objave. **Ne miči `?v=dev` iz `index.html`** — to je sidro na koje `sed` cilja. Ako netko prijavi da vidi stari tekst, prvo provjeri predmemoriju, ne datoteku.

- **Molitve su u muškom rodu** (i u engleskom: *beloved son of the Father*). Sav tekst koji korisnik izgovara o sebi piše se muškim rodom — `bio`, `sam`, `voljen`, `slobodan`, `Sklopio` — nikad `bio/bila`. Prije je bilo pomiješano. Dvije iznimke ostaju s kosom crtom jer se **ne odnose na molitelja nego na druge ljude**: `sina/kćer kakvim/kakvom ga/ju je Bog stvorio` (molitva bludnosti). Pazi i na slaganje pridjeva pri promjeni — `sin/kći Očeva` mora postati `sin Očev`, ne `sin Očeva`.

- **Biblijski navodi u hrvatskom** pišu se standardnim kraticama (Jeruzalemska Biblija): `(Fil 4,13)`, `(1 Kor 6,11)`, `(Iv 3,17-21; Rim 8,1)`, `(Ps 23; 27; 91)` — knjiga, razmak, `poglavlje,retci`, više navoda odvojeno s `; `. Nikad puno ime (`Filipljanima`, `1. Korinćanima`). Engleski ima isti oblik s dvotočkom: `(Phil 4:13)`, `(Ps 23; 27; 91)`. `Navod` u `index.html` svaki navod pretvori u poveznicu na Google pretragu (`<navod> <ui.molitvenik.pretraga>` → *Biblija* / *Bible*); što ne odgovara obrascu `NAVOD`, ostaje običan tekst.

- **Ton poticaja u poljima**: topao i pozivajući, nikad zapovjedan. Obrazac je *"Napiši… npr. …"* s trotočjem, a poziv na konkretnost dolazi kao blaga ponuda (*"Ako ti dođe neka konkretna situacija, slobodno je opiši"*), ne kao uputa (*"piši konkretno: kad, s kim"*). Ovo je duhovni dnevnik — korisnik piše o vlastitoj boli.

- **Podloga slike stabla**: `tree-bg.jpg` ima podlogu `#F8F8F8`, a `.tree-pane` je topla krem `#F2EDE6`. Bez `mix-blend-mode: multiply` na `.tree-bg` vidi se pravokutni šav ondje gdje slika staje. Ne mijenjaj paletu da se to riješi — multiply stapa bijelo, a crtež ostaje.

- **Stablo je uvijek svijetlo.** Neki mobilni preglednici (Chrome auto-dark, Samsung Internet) sami zatamne stranicu; tad bi `.tree-bg` s `multiply` na tamnoj podlozi postao gotovo nevidljiv. Zato `.tree-pane` ima `color-scheme: only light` — ostatak stranice namjerno smije potamnjeti (korisnikov izbor), samo stablo ne. Ne micati.

- **PWA.** Početna ima gumb *Instaliraj aplikaciju* (skriven kad je app već instalirana, `display-mode: standalone`). Chrome/Edge/Android → native dijalog (`beforeinstallprompt`); Safari/iOS → upute (Podijeli → Dodaj na početni zaslon). `sw.js` je **network-first za vlastite datoteke** — cache-first bi poništio cache-busting gore i korisnici bi vidjeli stare molitve; predmemorija služi samo offline. CDN (unpkg, fontovi) ide cache-first jer je verzioniran. Prvo učitavanje ide mimo SW-a, pa mu stranica nakon registracije pošalje popis dohvaćenih URL-ova (`predmemoriraj`). SW radi samo preko HTTPS-a ili `localhost`. Ako mijenjaš strategiju u `sw.js`, podigni `CACHE` (`stablo-v1` → `v2`). Ikone su generirane iz `ITree` glifa (`rsvg-convert`); manifest je samo hrvatski (ime aplikacije ne prati jezik).

- **Naslov aplikacije je `Be Healed - Tree of Life` u svim jezicima** — `JEZICI[kod].naslov`, `pocetna.naslov`, `<title>` i `name` u manifestu. Ne prevodi se. Ispod ikone na početnom zaslonu stoji skraćeno **`Be Healed - Tree`** (`short_name` u manifestu i `apple-mobile-web-app-title` za iOS). U headeru se na uskom zaslonu skraćuje s „…“ (`.hdr-title`), da gumbi i prekidač jezika ostanu vidljivi.

- **Nema AI integracije.** `window.claude.complete()` je uklonjen jer ne postoji ni na objavljenoj stranici — gumb je vodio u prazno. Ako se ikad vraća, mora ići preko serverske rute i imati vidljivo stanje greške.

## Miro ploča „HWP Trees“ (vizualni pregled i unos sadržaja)

https://miro.com/app/board/uXjVEaEmAMQ=/ — stabla sedam grijeha i svi tekstovi iz `tree-data.hr.js`. Ploča je **alat za unos**: korisnik uređuje u Miru, a Claude čita ploču (Miro MCP, `canvas_read_as_svg`), pokaže razlike prema `tree-data.hr.js` i tek nakon potvrde upisuje. Zato sve veze moraju biti tekst ili broj, nikad samo boja ili položaj. Uvoz još nije napisan; postoji samo dogovoreni oblik.

**Raspored** (odozgo prema dolje, kao stablo):

| Red | Što | Oblik |
|---|---|---|
| Stabla | okvir „Stablo N - <Grijeh>“ (1168×1341) s `tree-bg.jpg`; stabla jedno do drugoga | plodovi u luku krošnje, grijeh na deblu, rane u korijenju |
| Ispod svakog stabla | „<Grijeh> – tekstovi“ | tablica „<Grijeh> – plodovi“ (Plod · Rane · Kratki opis) + dokument (`# Grijeh`, `### Ukratko`, Što je ovaj grijeh?, Molitva odricanja, Iz evanđelja) |
| Lijevo gore | „Legenda“ | boje rana, kako čitati, kako uređivati |
| Korijenje – rane | 7 okvira „Rana – <naziv>“ | zaglavlje u boji rane, „Vodi u grijehe“, dokument (`### Ukratko` + Što je ova rana?, Odričem se, Proglašavam istinu) |
| Duboko korijenje | „Unutarnji zavjeti“, „Gorke osude“, „Rane iz djetinjstva“ | po jedna tablica |

Rane, zavjeti, osude i rane iz djetinjstva **zajednički su svim stablima** — postoje jednom, ne po stablu.

**Pravila koja korisnik želi:**
- Na karticama stabla **samo nazivi**, bez kodova. Rane ploda biraju se u tablici (stupac Rane, višestruki izbor). Kartice rana na stablu su poveznice na okvir rane (plavo i podcrtano je u redu).
- **Broj na crti** grijeh–plod i grijeh–rana (0–100) je izveden, **nije statistika** (tako piše i u legendi): rana = `60 · udio plodova s tom ranom + 25 (rana u g.rane) + 15 (grijeh u r.vodiKaGrijesima)`, plod = zbroj jačina njegovih rana skaliran na najviše 100. Veličina kartice prati broj (≥70 / 40–69 / <40, kao p1–p3 u aplikaciji); najčešći plodovi na vrhu krošnje, najjače rane najdublje.
- **Boje rana** su svijetli tonovi iz Miro palete (7 nijansi = 7 rana), iste na svim stablima i u tablicama: Napuštenost plava `#C6DCFF`, Sram crvena `#FFC6C6`, Strah narančasta `#F8D3AF`, Nemoć zelena `#ADF0C7`, Odbačenost ljubičasta `#DEDAFF`, Beznađe siva `#E7E7E7`, Zbunjenost žuta `#FFF6B6`; plod `#E3EDE0`, grijeh `#F0DDCF`. Miro select-opcije ne primaju proizvoljan hex: pri dodavanju stupca kroz MCP boje se zanemare, pa se biraju ručno u tablici (Fields → olovka → kružić uz opciju). Tamo je i prekidač *Wrap content* za prijelom teksta u ćeliji.
- **Tablica za „puno stavki, malo polja“** (plodovi, zavjeti, osude, djetinjstvo), **dokument za „jedna stavka, puno polja“** (grijeh, rana). U dokumentu su naslovi `###` i oznake prije dvotočke u bloku „Ukratko“ ključevi polja — ne mijenjaju se. `molitva` rane se ne uređuje: to je `lazi + "\n\n" + istina`.
- **Ograničenje Miro tablica:** širinu stupca i prijelom teksta u ćeliji nije moguće postaviti kroz MCP; korisnik ih širi mišem, a klik na red otvara cijeli zapis. Korisnik je odlučio da tablice ostaju.

**Stanje ploče (14.10.2026.):** svih 7 stabala je na ploči redom slijeva nadesno: Stablo 1 Oholost (x −882) … Stablo 7 Lijenost (x 8718), s korakom od 1600. Ispod svakog stabla je okvir „<Grijeh> – tekstovi“ s tablicom plodova i dokumentom. Tablica plodova nije dijete okvira jer je šira od njega, pa se pri premještanju okvira mora premjestiti zasebno. Stabla 1–6 generira `gen.js` iz `tree-data.hr.js`: raspored plodova u luku s provjerom preklapanja i crta, a broj na crti po formuli gore. Pozadinska slika dodaje se s `image_create` (središte 554,662, širina 1000) i zatim ručno šalje u pozadinu (Arrange → Send to back), jer se slika dodana nakon kartica crta iznad njih.

**Kratki opisi plodova** (svih 85, za 7 grijeha) su u `opisi-plodova.hr.json`: `{grijehId: {plodId: {naziv, opis, navod?}}}`, a ključevi su ID-evi iz `tree-data.hr.js`. Opis je u prvom licu i muškom rodu, po obrascu „… Npr. …“. `navod` je odlomak iz Svetog pisma, dodan samo gdje stvarno govori o tom plodu (74 od 85). Na Miru stoji u istoj ćeliji, u zagradi na kraju opisa. Aplikacija ovu datoteku još ne čita. Ako se opisi uvedu u aplikaciju, ide u polje `plodovi[].opis` i treba ih napisati i na engleskom.

**Što od baze još nije na Miru:**
- **Stabla 2–6**: pozadinska slika je dodana, ali još nije poslana u pozadinu (u Stablu 1 jest).
- **Stablo Lijenosti**: crte prema ranama još imaju stare boje (npr. Nemoć `#8fcbc2`, Sram `#e0a8c6`).
- **Okviri rana i legenda** još imaju stare pastelne boje rana.
- **`deblo`** (naziv, opis, pitanje) i po grijehu **`korijen`** (`opis`, `primjeri` „Oslanjam se na sebe kada…“).
- **`kriveSlikeBoga`** (14 stavki; polje `izvor` se nikad ne prikazuje).
- **`zeljeSrca`** (7).
- **`oprost`**: koraci `osoba` (14), `sebe` (10) i `bog` (11), s ključem `molitva`.
- **`iscjeljenje`** (6 koraka `{naslov, stavke[]}`).
- **`opceMolitve`**: `lazi`, `osudaOsobe`, `osudaBoga`, `zavjeti`.
- **`smrtneRane[].istinaKratko`** (za Pečat i blagoslov), **`ikona`**, **`bojaBg`** i **`bojaLight`** grijeha.
- **Sav engleski** (`tree-data.en.js`) i tekstovi sučelja (`ui`), za koje Miro vjerojatno nije potreban.
- **Stalni ID-evi** stavki (tihi redak `id:` ili stupac ID), potrebni za uvoz i engleski.
- **Uvoz** s ploče u `tree-data.hr.js` još nije napisan.

**Engleski (plan):** struktura (brojevi, rane ploda, rane zavjeta) uređuje se samo na hrvatskoj ploči. Engleski ide na zasebnu ploču „HWP Trees – EN“ s istim rasporedom i samo tekstovima iz `tree-data.en.js`, pisanima iz izvornika. Prije toga svaka stavka treba stalni ID (tihi redak `id: …` u dokumentu, stupac ID u tablici), jer se sada stavke prepoznaju po hrvatskom nazivu. Uvoz označava engleske stavke čiji se hrvatski tekst promijenio.

**Rad s pločom:** Claude ostavlja karticu s pločom otvorenu u pregledniku (Brave, Claude in Chrome) radi vizualnih provjera. Canvas Composer traži svjež `data-baseline-hash`; dok korisnik istodobno uređuje isto područje, izmjene se odbijaju — tada pričekati, ne forsirati.

## Dizajnerski tokeni

CSS custom properties na `:root`:

```
--cream: #F7F3EE   --warm: #FDFAF6    --bark: #8B6B4A   --bark-l: #C4A882
--bark-d: #5C4030  --leaf: #7A9E7E    --root: #B0A090   --txt: #2C1F14
--mid: #6B5040     --gold: #C49A3C    --gold-l: #E8C97A
```

Pisma: **Cormorant Garamond** (serif, naslovi) i **Inter** (tekst/UI), oba s Google Fonts.
