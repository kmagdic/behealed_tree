
// ============================================================
// DRVO ŽIVOTA — Podatkovni model v2
// Na temelju: Be Healed + HWP Workbook, pogl. 3 (Dr. Bob Schuchts)
// ============================================================
//
// LANAC (Schuchts):
//   rana → laž → unutarnji zavjet + gorka osuda
//        → bezbožno oslanjanje na sebe → smrtni grijeh → plodovi
//
// Veze u ovom modelu:
//   smrtneRane[].id            — kanonski ID rane, koristi se svugdje
//   smrtniGrijesi[].rane[]     — rane koje tipično hrane taj grijeh
//   smrtniGrijesi[].plodovi[].izRana[]  — iz koje rane plod izvire
//   unutarnjiZavjeti[].rane[]  — rana na koju je zavjet odgovor
//   unutarnjiZavjeti[].grijesi[] — grijeh koji zavjet hrani
//   gorkeOsude[].rane[]        — rana iz koje osuda izvire
//
// ============================================================

window.JEZICI = window.JEZICI || {};
window.JEZICI.hr = {
  kod: "hr",
  oznaka: "HR",
  naslov: "Stablo života",

  // ── TEKST SUČELJA ───────────────────────────────────────────
  // Funkcije primaju brojeve/nazive za umetanje. **x** = podebljano, _x_ = kurziv,
  // \n = novi red (vidi <Bogato/> u index.html).
  ui: {
    koraci: ["Grijeh", "Plodovi", "Rane", "Zavjeti", "Pregled"],
    natrag: "Natrag",
    dalje: "Dalje →",
    uredi: "Uredi",
    josN: n => `+ Još ${n}`,
    odaberiPrepoznate: "Odaberi one koje prepoznaješ",
    izviruIzRane: v => `Izvire iz rane: ${v}`,
    prioritet: p => `Prioritet: ${p}/3 — klikni za promjenu`,

    zaglavlje: {
      podnaslov: "Healing the whole person",
      imeStabla: "Ime stabla",
      promijeniIme: "Klikni za promjenu imena",
      obrisiStablo: "Obriši stablo",
      svaStabla: "Sva stabla",
      novo: "Novo",
      jezik: "Jezik"
    },

    panel: {
      naslov: n => `Stablo — ${n}`,
      prazno: "Tvoje stablo raste ovdje...",
      uputa: "Popuni korake s lijeve strane\nda vidiš svoje drvo...",
      manje: "Smanji stablo",
      vece: "Povećaj stablo"
    },

    k1: {
      oznaka: "Korak 1 — Deblo",
      naslov: "Koji je tvoj primarni smrtni grijeh?",
      tijelo: "Razmisli o grijesima kojima se stalno vraćaš. Koji ti je najsnažniji obrazac ponašanja?",
      citat: "\"Svako se stablo poznaje po svom rodu.\"",
      citatIzvor: "— Luka 6,44"
    },

    k2: {
      oznaka: "Korak 2 — Plodovi (grane)",
      naslov: "Kako se ovaj grijeh manifestira u tvom životu?",
      tijelo: "Napiši svojim riječima što primjećuješ u sebi.",
      poticaj: "Napiši što primjećuješ u sebi... npr. povlačim se kad me netko ispravi pred drugima, koristim sarkazam, kontroliram druge... Ako ti dođe neka konkretna situacija, slobodno je opiši.",
      prijedlozi: "+ Pogledaj prijedloge",
      cestiPlodovi: n => `✦ Česti plodovi — ${n}`,
      josPlodova: n => `+ Još ${n} plodova s popisa`,
      oznaceno: n => `${n} označeno — klikni ●○○ za prioritet`
    },

    k3: {
      oznaka: "Korak 3 — Rane (korijenje)",
      naslov: "Koje rane kriju se iza ovog grijeha?",
      citat: "\"Kada Bog gleda grijeh, vidi bol u nama.\"",
      citatIzvor: "— Sveta Juliana iz Norwicha",
      tijelo: "Ako možeš, sjeti se **jednog konkretnog trenutka** — iscjeljenje obično dolazi kroz određeno sjećanje, a ne kroz opći dojam. Ali piši onoliko koliko ti je u ovom trenutku moguće.",
      poticaj: "Opiši svoju ranu... Koji bolan događaj ili iskustvo stoji iza ovog obrasca? Ako se sjećaš jednog određenog trenutka, počni od njega. Što si tada povjerovao/la o sebi?",
      najcesce: n => `✦ Najčešće rane — ${n}`,
      ostale: "+ Ostale rane",
      odabrane: "Odabrane rane — od najdublje",
      komentar: "Dodaj svoj komentar uz ovu ranu, npr. baš konkretnu situaciju (neobavezno)..."
    },

    k4: {
      oznaka: "Korak 4 — Duboki korijeni",
      naslov: "Zavjeti i gorke osude",
      tijelo: "U ranama donosimo odluke da se zaštitimo — **unutarnji zavjeti**. Također **osuđujemo** druge ili Boga kao odgovor na bol.",
      istaknuto: n => `Istaknuti su prijedlozi koji izviru iz tvojih rana: **${n}**. Ostali su prigušeni, ali ih možeš odabrati.`,
      zavjeti: "⛓ Unutarnji zavjeti",
      zavjetPoticaj: "Napiši vlastiti zavjet... npr. 'Nikad neću pokazati slabost', 'Uvijek ću se sam/a pobrinuti'... Možda se sjetiš i trenutka u kojem si ga donio/donijela.",
      prijedloziZavjeta: "+ Prijedlozi zavjeta",
      osude: "🪨 Gorke osude",
      osudaPoticaj: "Napiši vlastitu osudu... npr. 'Muškarci su sebični', 'Nikad ne mogu dobiti što trebam'... Možda se sjetiš i kome si je u sebi izrekao/izrekla.",
      prijedloziOsuda: "+ Prijedlozi osuda",
      slikaBoga: "🕊 Kriva slika Boga",
      slikaBogaUvod: "Iz rane u srcu osudimo roditelja — a tu osudu onda nesvjesno prenesemo na Boga. Prepoznaješ li ovakvog Boga u svom srcu, čak i ako znaš da nije istina?",
      djetinjstvo: "Rana iz djetinjstva (neobavezno)",
      djetinjstvoPoticaj: "Opiši događaj u kojemu si bio/bila ranjen/a. Što se dogodilo? Koliko si tada imao/imala godina, tko je bio uz tebe...",
      staSeDogodi: "+ Što se najčešće dogodi",
      tipA: "**Uskrata ljubavi** — ono što _nismo_ dobili. Najčešće je, a najlakše se previdi.",
      tipB: "**Povreda** — ono što nam se _dogodilo_.",
      dalje: "Pregled →"
    },

    k5: {
      oznaka: "Korak 5 — Pregled",
      naslov: n => `Stablo ${n}`,
      tijelo: "Sve što si unio/unijela — sortirano po prioritetu.",
      plodovi: "🌿 Plodovi",
      grijeh: "🌳 Grijeh",
      rane: "🌱 Rane",
      zavjeti: "⛓️ Zavjeti",
      osude: "🪨 Gorke osude",
      djetinjstvo: "📖 Rana iz djetinjstva",
      dalje: "Molitve ✝"
    },

    ispis: {
      grijeh: n => `🌳 Grijeh: ${n}`,
      osude: "🪨 Osude",
      slikaBoga: "🕊 Kriva slika Boga",
      molitve: "✝ Molitve iscjeljenja"
    },

    molitve: {
      naslov: "✝ Molitve iscjeljenja",
      naTemelju: n => `Na temelju tvog stabla — ${n}`,
      odricanje: n => `Odricanje: ${n}`,
      iscjeljenje: n => `Iscjeljenje: ${n}`,
      zavjeti: "Odricanje od zavjeta",
      osude: "Odricanje od gorkih osuda",
      slikaBoga: "Odricanje od krive slike Boga",
      znakovi: "Znakovi iscjeljenja",
      sakrament: (s, i, p) => `Sakrament: **${s}** · Identitet: ${i} · Poslanje: ${p}`,
      krepost: (n, o) => `Krepost: ${n} — ${o}`,
      ispisi: "Ispiši"
    },

    pocetna: {
      naslov: "Stablo\n_života_",
      opis: "Interaktivni duhovni dnevnik temeljen na knjizi _Be Healed_ dr. Boba Schuchtsa — s vodičem koji pomaže otkriti veze između grijeha i rana.",
      citat: "\"Svako se stablo poznaje po svom rodu. Jer ne beru smokve s trnja, ni grožđa s kupine.\"",
      citatIzvor: "— Luka 6,44",
      izgradi: "Izgradi novo stablo",
      mojaStablaN: n => `Moja stabla (${n})`
    },

    instalacija: {
      gumb: "Instaliraj aplikaciju",
      naslov: "Dodavanje na početni zaslon",
      ios: "**iPhone / iPad (Safari):** dodirni gumb _Podijeli_ (kvadratić sa strelicom prema gore) → _Dodaj na početni zaslon_.",
      ostali: "**Android / računalo (Chrome, Edge):** izbornik ⋮ → _Instaliraj aplikaciju_, ili ikona instalacije u adresnoj traci."
    },

    stabla: {
      naslov: "Moja stabla",
      opis: "Jedno stablo za svaki smrtni grijeh koji prepoznaješ.",
      novo: "Novo stablo",
      dovrseno: "✓ Dovršeno",
      korak: n => `Korak ${n}/5`
    },

    molitvenik: {
      gumb: "✝ Molitve",
      naslov: "Molitve iscjeljenja",
      podnaslov: "Prema molitvama John Paul II Healing Centera. Moli polako i naglas — ne žuri, zastani gdje te nešto dotakne.",
      sadrzaj: "Sadržaj",
      ispisi: "Ispiši",
      sazetak: "Ukratko",
      sazetakUvod: "Grijeh često raste iz rane — njime pokušavamo pobjeći od boli. Iza grijeha koji se ponavlja obično stoji rana koja treba iscjeljenje.",
      rana: "Rana",
      laz: "Laž koju srce vjeruje",
      grijeh: "Grijeh",
      idol: "Idol",
      zelje: "Sedam želja srca",
      zeljeUvod: "Ono za čim je svako ljudsko srce stvoreno.",
      lazi: "Laži i istina",
      laziUvod: "Za svaku ranu: odreci se laži, pa naglas proglasi istinu.",
      grijesi: "Odricanje od grijeha",
      grijesiUvod: "Odreci se grijeha i idola koji stoji iza njega, pa izaberi krepost.",
      oprost: "Oprost",
      oprostUvod: "Oprost je odluka, ne osjećaj. Prođi korake polako; molitve su umetnute ondje gdje ih trebaš.",
      oprostOsoba: "Oprostiti drugome",
      oprostSebi: "Oprostiti sebi",
      oprostBogu: "Oprostiti Bogu",
      oprostBoguNapomena: "Ne zato što Bog treba oprost — On je savršen i sav dobar — nego zato što ponekad prema Njemu nosimo ogorčenost koju trebamo otpustiti.",
      molitvaLazi: "Molitva odricanja od laži",
      molitvaOsudaOsobe: "Molitva odricanja od osude osobe",
      molitvaOsudaBoga: "Molitva odricanja od osude Boga",
      molitvaZavjeti: "Molitva odricanja od unutarnjeg zavjeta",
      naPecat: "↓ Pečat i blagoslov",
      iscjeljenje: "Moliti za unutarnje iscjeljenje",
      iscjeljenjeUvod: "Upute za vrijeme molitve — kad te nešto u sadašnjosti boli, potraži korijen.",
      pecat: "Pečat i blagoslov",
      pecatUvod: "Na kraju svake molitve iscjeljenja zamoli Boga da zapečati ono što je učinio.",
      odricemSe: "Odričem se",
      proglasavam: "Proglašavam istinu",
      biram: "Biram",
      tvojeStablo: "Tvoje stablo",
      deblo: "Korijen svakog grijeha",
      cijeliOprost: "Cijeli proces oprosta →"
    },

    obavijest: {
      potvrdiBrisanje: "Obrisati ovo stablo? Ova radnja se ne može poništiti.",
      obrisano: "Stablo obrisano",
      dovrseno: "Stablo dovršeno ✓"
    }
  },

  // ── SADRŽAJ ─────────────────────────────────────────────────
  data: {

    // ── ZAJEDNIČKO DEBLO ────────────────────────────────────────
    // Kod Schuchtsa svih sedam grijeha izvire iz istog korijena.
    deblo: {
      naziv: "Bezbožno oslanjanje na sebe",
      opis: "Ispod svakog smrtnog grijeha stoji ista odluka: spasit ću se sam. Kad je rana zaboljela, umjesto da se okrenem Ocu, okrenuo sam se sebi — svojoj snazi, svojoj kontroli, svojoj utjehi.",
      pitanje: "Oslanjam se na sebe umjesto na Boga kada..."
    },

    // ── SEDAM SMRTNIH RANA ──────────────────────────────────────
    // ── RANE IZ DJETINJSTVA ─────────────────────────────────────
    // Be Healed, pogl. 7: rane nastaju na dva načina —
    //   tip A = uskrata ljubavi (najčešće, lako se previde)
    //   tip B = nevoljna djela koja povrjeđuju naše granice (ono što obično zovemo traumom)
    // ── KRIVE SLIKE BOGA (LAŽI O BOGU) ──────────────────────────
    // Prekidač u sučelju: CONFIG.showKriveSlikeBoga (index.html). Sekcija je u koraku 4 sklopljena.
    //
    // Schuchtsov MEHANIZAM je doslovan (Be Healed, pogl. 1):
    //   rana od roditelja → tiha osuda tog roditelja → nesvjesna projekcija na Boga → laž o Bogu
    //   "Moja je teologija znala da je dobar, ali je moje ranjeno srce vjerovalo nekim lažima
    //    o njemu... Iz te rane sam sve to nesvjesno projicirao na Boga Oca."
    //
    // ALI popis pojedinih slika NIJE Schuchtsov popis. Oznake izvora:
    //   izvor:"schuchts"  — doslovno njegove riječi (samo dvije: "cruel taskmaster",
    //                       "He is never here for me")
    //   izvor:"izvedeno"  — izvedeno iz njegova teksta, ali on to tako ne naziva
    //   izvor:"tipologija"— vanjska katehetska tipologija, nije iz Schuchtsa
    // Nijedna oznaka izvora se NE prikazuje korisniku.
    kriveSlikeBoga: [
      { id:"kb_nadzornik", izvor:"schuchts", naziv:"Okrutni nadzornik", projekcija:"otac",
        opis:"Bog koji uvijek traži više i kojemu nikad nisam dovoljno dobar.",
        rane:["sramota","odbacenost"], istina:"je Tvoj jaram sladak i breme lako (Mt 11,30) i da ne moram zaslužiti Tvoju ljubav" },
      { id:"kb_nikad_tu", izvor:"schuchts", naziv:"Bog koji nikad nije tu za mene", projekcija:"otac",
        opis:"Kad Ga najviše trebam, Njega nema.",
        rane:["napustenost","beznade"], istina:"si blizu svima koji Te zazivaju (Ps 145,18) i da me nikada nećeš ostaviti (Heb 13,5)" },
      { id:"kb_okrenuo_se", izvor:"izvedeno", naziv:"Bog kojemu se ne može vjerovati", projekcija:"otac",
        opis:"Bio je dobar, pa se okrenuo — kao i onaj koji je otišao.",
        rane:["napustenost","strah"], istina:"si vjeran i da ostaješ vjeran čak i kad ja nisam (2 Tim 2,13)" },
      { id:"kb_zasluziti", izvor:"izvedeno", naziv:"Bog čiju ljubav moram zaslužiti", projekcija:"otac",
        opis:"Trudim se ugoditi Mu, ali nikad ne osjetim da je dosta.",
        rane:["odbacenost","sramota"], istina:"je Tvoja milost besplatan dar, a ne plaća za moja djela (Ef 2,8-9)" },

      { id:"kb_nemocni", izvor:"tipologija", naziv:"Nemoćni bog", projekcija:null,
        opis:"Bog koji ne može promijeniti ovaj svijet ni ostvariti svoje namjere.",
        rane:["bespomoćnost","beznade"], istina:"Tebi ništa nije nemoguće (Lk 1,37)" },
      { id:"kb_okrutni", izvor:"tipologija", naziv:"Nemilosrdni i okrutni bog", projekcija:null,
        opis:"Bog koji kažnjava bez milosrđa.",
        rane:["sramota","strah"], istina:"kažnjavaš zlo, ali si milosrdan i milostiv, spor na srdžbu (Ps 103,8)" },
      { id:"kb_nezainteresirani", izvor:"tipologija", naziv:"Nezainteresirani bog", projekcija:null,
        opis:"Bog koji nema vremena ni volje brinuti se za mene.",
        rane:["napustenost","odbacenost"], istina:"brineš za mene i da sve svoje brige mogu baciti na Tebe (1 Pt 5,7)" },
      { id:"kb_trgovacki", izvor:"tipologija", naziv:"Trgovački bog", projekcija:null,
        opis:"Bog s kojim se pogađa i kojemu se sve mora skupo platiti.",
        rane:["odbacenost","sramota"], istina:"daješ bez cjenkanja — milošću smo spašeni (Ef 2,8)" },
      { id:"kb_magijski", izvor:"tipologija", naziv:"Magijski bog", projekcija:null,
        opis:"Bog na kojeg se utječe formulama i ritualima.",
        rane:["strah","bespomoćnost"], istina:"si Osoba koja me ljubi, a ne sila kojom se upravlja" },
      { id:"kb_demonizirani", izvor:"tipologija", naziv:"Demonizirani bog", projekcija:null,
        opis:"Najrazornija slika — bog koji mrzi, laže i ubija.",
        rane:["sramota","strah"], istina:"si ljubav (1 Iv 4,8) i da je lažac i ubojica onaj drugi (Iv 8,44)" },
      { id:"kb_sekularizirani", izvor:"tipologija", naziv:"Sekularizirani bog", projekcija:null,
        opis:"Ovosvjetske stvarnosti dobivaju božanska svojstva.",
        rane:["beznade","napustenost"], istina:"Samo Ti možeš ispuniti srce koje si stvorio za sebe" },
      { id:"kb_cudljivi", izvor:"tipologija", naziv:"Nepouzdani i ćudljivi bog", projekcija:null,
        opis:"Biće koje nije uvijek dobro raspoloženo — ne znam na čemu sam.",
        rane:["strah","zbunjenost"], istina:"si isti jučer, danas i uvijeke (Heb 13,8)" },
      { id:"kb_moralizirajuci", izvor:"tipologija", naziv:"Moralizirajući bog", projekcija:null,
        opis:"Sitničavo bdije nad izvršavanjem zapovijedi.",
        rane:["sramota","strah"], istina:"gledaš srce, a ne samo djelo (1 Sam 16,7)" },
      { id:"kb_mrzovoljni", izvor:"tipologija", naziv:"Preozbiljni i mrzovoljni bog", projekcija:null,
        opis:"Dalek, nezadovoljan, bez radosti.",
        rane:["odbacenost","sramota"], istina:"se raduješ nada mnom i da kličeš od radosti zbog mene (Sef 3,17)" }
    ],

    raneDjetinjstva: [
      { id:"d_nisam_radost",   tip:"A", tekst:"Nitko mi nije dao do znanja da sam nekome radost", rane:["odbacenost","napustenost"] },
      { id:"d_nisam_slavljen", tip:"A", tekst:"Nisam bio njegovan i slavljen takav kakav jesam", rane:["odbacenost","sramota"] },
      { id:"d_neshvacen",      tip:"A", tekst:"Nitko me nije istinski razumio", rane:["napustenost","zbunjenost"] },
      { id:"d_bez_granica",    tip:"A", tekst:"Nisam dobio granice ni primjerenu disciplinu", rane:["bespomoćnost","zbunjenost"] },
      { id:"d_bez_darova",     tip:"A", tekst:"Nisam smio razvijati svoje darove i sklonosti", rane:["bespomoćnost","beznade"] },
      { id:"d_srcem_odsutni",  tip:"A", tekst:"Roditelji su bili tjelesno prisutni, ali srcem odsutni", rane:["napustenost","odbacenost"] },
      { id:"d_bez_osjecaja",   tip:"A", tekst:"Osjećaji se u našoj kući nisu pokazivali ni spominjali", rane:["napustenost","sramota"] },
      { id:"d_samo_uspjeh",    tip:"A", tekst:"Bio sam hvaljen samo za uspjeh, ne za to tko jesam", rane:["odbacenost","sramota"] },
      { id:"d_bez_utjehe",     tip:"A", tekst:"Nitko me nije tješio kad sam plakao", rane:["napustenost","bespomoćnost"] },
      { id:"d_prerano_odrastao",tip:"A",tekst:"Morao sam prerano odrasti i brinuti se za druge", rane:["bespomoćnost","napustenost"] },

      { id:"d_odlazak_roditelja", tip:"B", tekst:"Roditelj je otišao ili su se razveli", rane:["napustenost","odbacenost"] },
      { id:"d_smrt",              tip:"B", tekst:"Smrt bliske osobe u mom djetinjstvu", rane:["napustenost","beznade"] },
      { id:"d_nasilje",           tip:"B", tekst:"Tjelesno nasilje u obitelji", rane:["strah","bespomoćnost"] },
      { id:"d_vrijedjanje",       tip:"B", tekst:"Vikanje, vrijeđanje i omalovažavanje", rane:["sramota","strah"] },
      { id:"d_zlostavljanje",     tip:"B", tekst:"Seksualno zlostavljanje ili povreda mojih granica", rane:["sramota","bespomoćnost","strah"] },
      { id:"d_svjedok",           tip:"B", tekst:"Gledao sam kako netko drugi biva povrijeđen", rane:["strah","bespomoćnost"] },
      { id:"d_vrsnjaci",          tip:"B", tekst:"Vršnjačko nasilje ili isključenost iz društva", rane:["odbacenost","sramota"] },
      { id:"d_ovisnost",          tip:"B", tekst:"Alkohol ili ovisnost u obitelji", rane:["strah","zbunjenost","bespomoćnost"] },
      { id:"d_bolest",            tip:"B", tekst:"Teška bolest — moja ili u obitelji", rane:["strah","bespomoćnost"] },
      { id:"d_usporedjivan",      tip:"B", tekst:"Stalno su me uspoređivali s bratom/sestrom ili drugima", rane:["odbacenost","sramota"] },
      { id:"d_nepredvidiv",       tip:"B", tekst:"Roditelj je bio nepredvidiv — nikad nisam znao što slijedi", rane:["strah","zbunjenost"] },
      { id:"d_prekrsena_obecanja",tip:"B", tekst:"Obećanja su mi se stalno kršila", rane:["beznade","napustenost"] }
    ],

    // ── MOLITVENIK ──────────────────────────────────────────────
    // Izvori: JPII Healing Center — "Healing Prayers" (oprost, unutarnje iscjeljenje,
    // pečat i blagoslov, opće molitve) i "Seven Deadly Wounds" (sedam želja srca).
    // Prikazuje ih stranica Molitve (view 'molitvenik') i molitveni ekran stabla.

    // Sedam želja ljudskoga srca. Izvor ih NE povezuje s ranama, pa ni ovdje
    // nema polja rane[] — ne izmišljati vezu.
    zeljeSrca: [
      { id:"saslusan",  naziv:"Biti saslušan i shvaćen" },
      { id:"potvrden",  naziv:"Biti potvrđen", opis:"čuti da sam dobar" },
      { id:"blagoslovljen", naziv:"Biti blagoslovljen", opis:"primiti bezuvjetnu ljubav" },
      { id:"siguran",   naziv:"Biti siguran", opis:"tjelesno i emocionalno" },
      { id:"dodirnut",  naziv:"Biti dodirnut", opis:"zdrav znak nečije ljubavi — zagrljaj, blizina" },
      { id:"izabran",   naziv:"Biti izabran", opis:"osjećati se posebnim" },
      { id:"ukljucen",  naziv:"Biti uključen", opis:"biti dio nečega, pripadati zajednici" }
    ],

    // Proces oprosta. `molitva` je ključ molitve koja se moli na tom koraku:
    //   lazi | osudaOsobe | osudaBoga | zavjeti  → opceMolitve[ključ]
    //   pecat                                    → odjeljak Pečat i blagoslov
    // Koraci o duševnim vezama (soul ties) namjerno su izostavljeni.
    oprost: {
      osoba: [
        { tekst:"Zamoli Duha Svetoga da ti pokaže kome trebaš oprostiti — članu obitelji, prijatelju, onome tko te zlostavljao, Bogu ili sebi." },
        { tekst:"Zamisli tu osobu pred sobom i pazi što osjećaš." },
        { tekst:"Sastavi račun duga: što ti je uzela, kako te povrijedila? U redu je osjećati ljutnju." },
        { tekst:"Reci joj naglas što ti je učinila i kako je to utjecalo na tebe. Budi posve iskren." },
        { tekst:"Zamoli Duha Svetoga da ti objavi što, zbog tog događaja, vjeruješ o sebi — to je laž o identitetu." },
        { tekst:"Odreci se te laži.", molitva:"lazi" },
        { tekst:"Zamoli Duha Svetoga da ti objavi osude koje nosiš prema osobi koja te povrijedila." },
        { tekst:"Odreci se tih osuda.", molitva:"osudaOsobe" },
        { tekst:"Kratkom molitvom zamoli Isusa da oprosti toj osobi." },
        { tekst:"Oprosti joj: _„U ime Isusovo opraštam … za …“_ Možda ti pomogne da zamisliš sebe i nju zajedno podno križa." },
        { tekst:"Moli blagoslov nad njom — zamoli Boga da je blagoslovi upravo suprotno od onoga čime te povrijedila." },
        { tekst:"Je li iz te povrede nastao neki unutarnji zavjet? Odreci ga se sada.", molitva:"zavjeti" },
        { tekst:"Zamoli Isusa da zapečati ovaj oprost i iscijeli rane.", molitva:"pecat" },
        { tekst:"Zahvali Bogu za iscjeljenje." }
      ],
      sebe: [
        { tekst:"Sastavi račun: čime su tvoja djela ili propusti naštetili tebi ili drugima?" },
        { tekst:"Reci kako je to utjecalo na tebe ili na druge." },
        { tekst:"Zamoli Duha Svetoga da ti objavi što, zbog tog čina ili propusta, vjeruješ o sebi — to je laž o identitetu." },
        { tekst:"Odreci se te laži (npr. _„glup sam“, „sebičan sam“, „okrutan sam“_).", molitva:"lazi" },
        { tekst:"Kratkom molitvom zamoli Isusa da ti oprosti ono što se dogodilo i posljedice koje je to izazvalo." },
        { tekst:"Oprosti sebi." },
        { tekst:"Zamoli Boga da blagoslovi tebe i one koje je to povrijedilo te da preokrene posljedice tvojih grijeha ili propusta." },
        { tekst:"Je li iz toga nastao neki unutarnji zavjet? Odreci ga se sada.", molitva:"zavjeti" },
        { tekst:"Zamoli Isusa da zapečati ovaj oprost i iscijeli rane.", molitva:"pecat" },
        { tekst:"Zahvali Bogu za iscjeljenje." }
      ],
      bog: [
        { tekst:"Zamisli Isusa ili Boga Oca pred sobom i pazi što osjećaš." },
        { tekst:"Sastavi račun onoga za što vjeruješ da ti je Bog učinio ili da je učinio drugima." },
        { tekst:"Reci kako je to utjecalo na tebe ili na druge." },
        { tekst:"Zamoli Duha Svetoga da ti objavi što, zbog onoga što je Bog po tvom doživljaju učinio ili propustio, vjeruješ o sebi — to je laž o identitetu." },
        { tekst:"Odreci se te laži (npr. _„bezvrijedan sam“, „nisam voljen“, „nemoćan sam“_).", molitva:"lazi" },
        { tekst:"Zamoli Duha Svetoga da ti objavi osude koje nosiš prema Bogu." },
        { tekst:"Odreci se tih osuda.", molitva:"osudaBoga" },
        { tekst:"Zamoli Boga da te blagoslovi: da preokrene posljedice tvoje ogorčenosti ili grijeha prema Njemu i objavi ti istinu o svojoj ljubavi i brizi." },
        { tekst:"Je li iz toga nastao neki unutarnji zavjet prema Bogu? Odreci ga se sada.", molitva:"zavjeti" },
        { tekst:"Zamoli Isusa da zapečati ovaj oprost i iscijeli rane.", molitva:"pecat" },
        { tekst:"Zahvali Bogu za iscjeljenje." }
      ]
    },

    // Moliti za unutarnje iscjeljenje — upute, ne molitva
    iscjeljenje: [
      { naslov:"Prepoznaj ono što te sada muči", stavke:[
        "Što me sada muči? Što želim?",
        "Što je to potaknulo i što osjećam u toj situaciji?",
        "Što u srcu vjerujem o sebi? _(laž o identitetu)_",
        "Što u srcu vjerujem o drugoj osobi? _(osuda)_" ]},
      { naslov:"Zamoli Isusa (Oca ili Duha Svetoga) da ti pokaže korijen", stavke:[
        "Ne pokušavaj moliti ni dokučiti — samo slušaj i primaj.",
        "Korijen može biti jedno sjećanje, niz sjećanja ili osjećaj.",
        "Može biti i iskustvo iz majčine utrobe ili nešto naslijeđeno u obitelji." ]},
      { naslov:"Prepoznaj bolno iskustvo i laž koja mu pripada", stavke:[
        "Bol i laž trebaju odgovarati onome što te sada muči.",
        "Ako je sjećanja više, potraži zajedničku nit.",
        "Ako je korijen iz vremena prije nego što si znao govoriti, sjećanja možda nema — samo osjećaji.",
        "Ako je korijen obiteljsko nasljeđe, možda nema ni osjećaja." ]},
      { naslov:"Zamoli Isusa da ti objavi što želi da znaš", stavke:[
        "Neki vide sliku — npr. Isus se objavljuje djetetu.",
        "Neki prime istinu — _„Nisam ja kriv.“_",
        "Neki osjete kako bol odlazi — _„Više se ne osjećam sam.“_",
        "Neki imaju samo tiho, unutarnje znanje — _„Voljen sam.“_" ]},
      { naslov:"Ako ne primiš ništa — potraži prepreke", stavke:[
        "Prepreka može biti kontrola zbog unutarnjeg zavjeta ili osude.",
        "Može biti odvojenost od osjećaja zbog rane traume.",
        "Možda doživljavaš da te Bog napustio.",
        "Može biti zid ljutnje, straha, poricanja ili beznađa.",
        "Zamoli Gospodina da ti pokaže prepreku i njezin izvor te da ih dotakne." ]},
      { naslov:"Kad primiš iscjeljenje od Isusa", stavke:[
        "Pogledaj plod u sjećanju i u onome što te mučilo: zajedništvo, mir, radost.",
        "Provjeri što sada vjeruješ umjesto izvorne laži i osude.",
        "Zahvali Gospodinu i zapečati iscjeljenje u Njegovoj Krvi i Duhu." ]}
    ],

    // Opće molitve s mjestom za vlastiti upis — (zagrade) se prikazuju kao upis
    opceMolitve: {
      lazi: "U ime Isusa Krista odričem se laži da (npr. „sam sam“, „ružan sam“, „ništa se nikada neće promijeniti“, „nisam voljen“, „ako vjerujem, umrijet ću“).\n\nU ime Isusa Krista i snagom Duha Svetoga molim Te da mi objaviš istinu o mom identitetu pred Ocem, ondje gdje su se te laži ukorijenile u mom srcu. Amen.",
      osudaOsobe: "Oče, priznajem da sam osudio (ime). Shvaćam da sam to učinio kako bih se zaštitio od osjećaja ranjivosti i nemoći, da ne bih bio povrijeđen, ili zato što sam se smatrao boljim od njega/nje. Shvaćam također da je ta osuda grijeh i da me drži vezanim. Molim Te sada za oprost i da oslobodiš mene i (ime) od ropstva ove osude i izolacije.\n\nU ime Isusovo odričem se osude da je (ime) (konkretne osude).\n\nZnam da ne mogu sam promijeniti svoje srce, pa Te molim da mi daš svoje srce suosjećanja prema (ime). Amen.",
      osudaBoga: "Oče, priznajem da sam Te osudio. Shvaćam da sam to učinio kako bih se zaštitio od osjećaja ranjivosti i nemoći, da ne bih bio povrijeđen, ili zato što sam bio ljut. Shvaćam također da je ta osuda grijeh i da me drži vezanim. Molim Te sada za oprost i da me oslobodiš od ropstva ove osude i izolacije.\n\nU ime Isusovo odričem se osude da si Ti (konkretne osude).\n\nZnam da ne mogu sam promijeniti svoje srce, pa Te molim da ukloniš moju ogorčenost i dovedeš me do cjelovitosti. Amen.",
      zavjeti: "Oče, priznajem da sam pokušavao spasiti sebe umjesto da se oslonim na Tebe za svoje spasenje. Oprosti mi grijeh oholosti i samodostatnosti. Priznajem da me je moj trud da zaštitim samoga sebe ostavio zatvorenog iza zidova koji me sprječavaju da dajem i primam ljubav. Želim biti slobodan od ovog ropstva koje je došlo kao posljedica mojih vlastitih izbora.\n\nU ime Isusovo odričem se unutarnjeg zavjeta da (opis zavjeta, npr. „nikada više nikome neću vjerovati“).\n\nMolim Te da me sada oslobodiš od ropstva ovog zavjeta. Amen."
    },

    smrtneRane: [
      {
        id: "napustenost",
        naziv: "Napuštenost",
        laz: "Sam sam. Nitko me ne razumije. Nitko se ne brine za mene.",
        istinaKratko: "sam povezan, duboko shvaćen i da se netko brine za mene",
        opis: "Rana nastaje kad onaj tko je trebao biti prisutan nije bio — fizički ili srcem. Ne mora biti odlazak; dovoljna je odsutnost.",
        osjecaj: "praznina, čežnja, osjećaj da si nevidljiv",
        znakIscjeljenja: "Povezanost i razumijevanje zamjenjuje napuštenost",
        sakrament: "Pričest",
        identitet: "Trajna prisutnost",
        poslanje: "Utjeloviti Kristovu prisutnost",
        vodiKaGrijesima: ["pohota", "prozdrljivost", "pohlepa"],
        lazi: "U ime Isusa Krista odričem se laži da sam sam i da me nitko ne razumije niti se brine za mene. U ime Isusa Krista odričem se laži da sam nezaštićen i da me Bog napustio.",
        istina: "U ime Isusa Krista proglašavam istinu koju mi je sam Isus obećao: 'Ne, neću te zapustiti i neću te ostaviti.' (Hebrejima 13,5); 'Ja ću uvijek biti s vama do svršetka vremena' (Matej 28). U ime Isusa Krista proglašavam istinu da sam povezan, da sam duboko shvaćen i da se za mene brine te naviještam istinu u svetoj pričesti da sam sjedinjen s Kristom i zajedništvom svetih. Oni su uvijek sa mnom, tako da nikada nisam sam.",
        molitva: "U ime Isusa Krista odričem se laži da sam sam i da me nitko ne razumije niti se brine za mene. U ime Isusa Krista odričem se laži da sam nezaštićen i da me Bog napustio.\n\nU ime Isusa Krista proglašavam istinu koju mi je sam Isus obećao: 'Ne, neću te zapustiti i neću te ostaviti.' (Hebrejima 13,5); 'Ja ću uvijek biti s vama do svršetka vremena' (Matej 28). U ime Isusa Krista proglašavam istinu da sam povezan, da sam duboko shvaćen i da se za mene brine te naviještam istinu u svetoj pričesti da sam sjedinjen s Kristom i zajedništvom svetih. Oni su uvijek sa mnom, tako da nikada nisam sam."
      },
      {
        id: "sramota",
        naziv: "Sram",
        laz: "Loš sam, prljav, ružan, glup, bezvrijedan, izopačen...",
        istinaKratko: "sam čist i dostojan, ne zbog onoga što sam učinio, nego zbog onoga što je Isus učinio za mene",
        opis: "Krivnja kaže: učinio sam nešto loše. Sramota kaže: ja jesam loš. Rana ne napada djelo nego identitet.",
        osjecaj: "želja da se sakriješ, da te nitko ne vidi iznutra",
        znakIscjeljenja: "Čist i dostojan zamjenjuje sram",
        sakrament: "Ispovijed",
        identitet: "Čist i neokaljan",
        poslanje: "Prenositi Očevo milosrđe",
        vodiKaGrijesima: ["ponos", "pohota", "prozdrljivost"],
        lazi: "U ime Isusa Krista, odričem se laži da sam loš, prljav, ružan, glup, bezvrijedan, izopačen...",
        istina: "U ime Isusa Krista proglašavam istinu da je Isus umro za moje grijehe i da su moji grijesi oprošteni, da sam opran, očišćen, opravdan i prihvaćen (1. Korinćanima 6). U ime Isusa Krista objavljujem istinu da Isus nije došao da me osudi, već da me spasi (Ivan 3,17-21; Rimljanima 8,1; Ivan 8,10-11). U ime Isusa Krista proglašavam istinu da sam u sakramentu pomirenja oprošten i oslobođen. U ime Isusa Krista proglašavam istinu da sam čist i dostojan, ne zbog onoga što sam učinio, nego zbog onoga što je Isus učinio za mene.",
        molitva: "U ime Isusa Krista, odričem se laži da sam loš, prljav, ružan, glup, bezvrijedan, izopačen...\n\nU ime Isusa Krista proglašavam istinu da je Isus umro za moje grijehe i da su moji grijesi oprošteni, da sam opran, očišćen, opravdan i prihvaćen (1. Korinćanima 6). U ime Isusa Krista objavljujem istinu da Isus nije došao da me osudi, već da me spasi (Ivan 3,17-21; Rimljanima 8,1; Ivan 8,10-11). U ime Isusa Krista proglašavam istinu da sam u sakramentu pomirenja oprošten i oslobođen. U ime Isusa Krista proglašavam istinu da sam čist i dostojan, ne zbog onoga što sam učinio, nego zbog onoga što je Isus učinio za mene."
      },
      {
        id: "strah",
        naziv: "Strah",
        laz: "Ako se povjerim, progovorim ili se suprotstavim, bit ću povrijeđen ili ću umrijeti.",
        istinaKratko: "sam na sigurnom i zaštićen",
        opis: "Rana straha zatvara srce. Ono što je nekoć bilo zaštita postaje zid koji više ne znaš spustiti.",
        osjecaj: "napetost, budnost, nemogućnost opuštanja",
        znakIscjeljenja: "Sigurnost i zaštita zamjenjuje strah",
        sakrament: "Ženidba",
        identitet: "Vjerna Božja ljubav",
        poslanje: "Predstavljati Kristovu vjernu ljubav",
        vodiKaGrijesima: ["pohlepa", "ljutnja", "ljenost"],
        lazi: "U ime Isusa Krista, odričem se laži da ću, ako vjerujem, biti povrijeđen, razočaran ili ću umrijeti. U ime Isusa Krista odričem se svakog straha, tjeskobe, sumnje i nepovjerenja. U ime Isusa Krista, odričem se laži da nisam siguran i da nisam zaštićen.",
        istina: "U ime Isusa Krista proglašavam istinu da je Bog moja stijena, moja tvrđava, moj izbavitelj i moj zaštitnik (Psalam 23, 27, 91). U ime Isusa Krista proglašavam istinu da Božja savršena ljubav tjera svaki strah (1. Ivanova 4,18). U ime Isusa Krista proglašavam istinu da sam na sigurnom.",
        molitva: "U ime Isusa Krista, odričem se laži da ću, ako vjerujem, biti povrijeđen, razočaran ili ću umrijeti. U ime Isusa Krista odričem se svakog straha, tjeskobe, sumnje i nepovjerenja. U ime Isusa Krista, odričem se laži da nisam siguran i da nisam zaštićen.\n\nU ime Isusa Krista proglašavam istinu da je Bog moja stijena, moja tvrđava, moj izbavitelj i moj zaštitnik (Psalam 23, 27, 91). U ime Isusa Krista proglašavam istinu da Božja savršena ljubav tjera svaki strah (1. Ivanova 4,18). U ime Isusa Krista proglašavam istinu da sam na sigurnom."
      },
      {
        id: "bespomoćnost",
        naziv: "Nemoć",
        laz: "Nemoćan sam, slab, zaglavio i zarobljen... ne znam što da radim.",
        istinaKratko: "sam u Kristu osnažen i Duhom Svetim oslobođen",
        opis: "Rana nastaje ondje gdje si bio premalen ili preslab da promijeniš ono što ti se događalo. Tijelo to pamti i onda kad si odrastao.",
        osjecaj: "paraliza, preplavljenost, potreba da sve držiš u rukama",
        znakIscjeljenja: "Osnažen i oslobođen zamjenjuje nemoć",
        sakrament: "Potvrda",
        identitet: "Pomazan snagom",
        poslanje: "Služiti u snazi Duha",
        vodiKaGrijesima: ["ljutnja", "ljenost", "prozdrljivost"],
        lazi: "U ime Isusa Krista odričem se laži da sam nemoćan, slab, nesposoban da se promijenim ili da nisam sposoban; da sam zaglavio, zarobljen i da ne znam što da radim.",
        istina: "U ime Isusa Krista proglašavam istinu da je Isus obećao da je njegova milost usavršena u mojoj slabosti, tako da kad sam slab, tada sam jak (2. Korinćanima 12,8-10). U ime Isusa Krista proglašavam istinu da 'sve mogu po Kristu koji me jača' (Filipljanima 4,13). U ime Isusa Krista proglašavam istinu da 'gdje je Duh Sveti, ondje je sloboda' (2. Korinćanima 3,17), tako da prihvaćam istinu da sam u Kristu osnažen i oslobođen Duhom Svetim i proglašavam istinu da sam po sakramentu svete potvrde pomazan snagom Duha Svetoga, koji živi i prebiva u meni.",
        molitva: "U ime Isusa Krista odričem se laži da sam nemoćan, slab, nesposoban da se promijenim ili da nisam sposoban; da sam zaglavio, zarobljen i da ne znam što da radim.\n\nU ime Isusa Krista proglašavam istinu da je Isus obećao da je njegova milost usavršena u mojoj slabosti, tako da kad sam slab, tada sam jak (2. Korinćanima 12,8-10). U ime Isusa Krista proglašavam istinu da 'sve mogu po Kristu koji me jača' (Filipljanima 4,13). U ime Isusa Krista proglašavam istinu da 'gdje je Duh Sveti, ondje je sloboda' (2. Korinćanima 3,17), tako da prihvaćam istinu da sam u Kristu osnažen i oslobođen Duhom Svetim i proglašavam istinu da sam po sakramentu svete potvrde pomazan snagom Duha Svetoga, koji živi i prebiva u meni."
      },
      {
        id: "odbacenost",
        naziv: "Odbačenost",
        laz: "Nisam voljen i nisam vrijedan ljubavi... nisam dovoljno dobar.",
        istinaKratko: "sam ljubljen, željen i dragocjen u Očevim očima",
        opis: "Napuštenost je odsutnost. Odbačenost je poruka: bio si tu, i nisi bio željen. Zato boli drukčije.",
        osjecaj: "potreba da zaslužiš mjesto, strah od isključenja",
        znakIscjeljenja: "Prihvaćen i cijenjen zamjenjuje odbačenost",
        sakrament: "Krštenje",
        identitet: "Očev ljubljeni",
        poslanje: "Nasljedovati Očevu ljubav",
        vodiKaGrijesima: ["zavist", "ponos", "pohota"],
        lazi: "U ime Isusa Krista odričem se laži da nisam voljen i da nisam vrijedan ljubavi. Odričem se laži da nisam poželjan, da nisam željen i da nisam dovoljno dobar.",
        istina: "U ime Isusa Krista proglašavam istinu da sam snagom svoga krštenja ljubljeni sin Očev. Objavljujem istinu da me toliko voli da je dao svoj život za mene i da nema veće ljubavi (Ivan 15). Proglašavam istinu da je Božja ljubav izlivena u moje srce po Duhu Svetom. U ime Isusa Krista proglašavam istinu da sam ljubljen, željen i da sam dragocjen u Očevim očima.",
        molitva: "U ime Isusa Krista odričem se laži da nisam voljen i da nisam vrijedan ljubavi. Odričem se laži da nisam poželjan, da nisam željen i da nisam dovoljno dobar.\n\nU ime Isusa Krista proglašavam istinu da sam snagom svoga krštenja ljubljeni sin Očev. Objavljujem istinu da me toliko voli da je dao svoj život za mene i da nema veće ljubavi (Ivan 15). Proglašavam istinu da je Božja ljubav izlivena u moje srce po Duhu Svetom. U ime Isusa Krista proglašavam istinu da sam ljubljen, željen i da sam dragocjen u Očevim očima."
      },
      {
        id: "beznade",
        naziv: "Beznađe",
        laz: "Ništa se nikada neće promijeniti... nema nade.",
        istinaKratko: "sam ispunjen nadom u dobre stvari koje dolaze",
        opis: "Rana beznađa dolazi nakon što si se dovoljno puta nadao i razočarao. Srce zaključi da je jeftinije ne nadati se.",
        osjecaj: "umor, ravnodušnost, unaprijed odustajanje",
        znakIscjeljenja: "Nada i ohrabrenje zamjenjuje beznađe",
        sakrament: "Bolesničko pomazanje",
        identitet: "Uskrišen na život",
        poslanje: "Širiti Kristovu nadu i ozdravljenje",
        vodiKaGrijesima: ["ljenost", "prozdrljivost", "zavist"],
        lazi: "U ime Isusa Krista odričem se laži da se nikada ništa ne mijenja i da nikada neću imati ono što želim. U ime Isusa Krista, odričem se laži da je moj život besmislen i da nemam za što živjeti.",
        istina: "U ime Isusa Krista proglašavam istinu da je moja nada postojana u Kristu i da on sve čini novim (Ivan 21,5). U ime Isusa Krista proglašavam istinu da zato što je moja nada u Krista, neću biti razočaran (Rimljanima 5,5). U ime Isusa Krista, proglašavam istinu da se 'preobražavam iz slave u slavu na sliku Kristovu' (2. Korinćanima 3,18) i da Bog djeluje u meni, a ono što započinje, dovršit će (Filipljanima 1,6). U ime Isusa Krista proglašavam istinu da sam ispunjen nadom u dobre stvari koje dolaze.",
        molitva: "U ime Isusa Krista odričem se laži da se nikada ništa ne mijenja i da nikada neću imati ono što želim. U ime Isusa Krista, odričem se laži da je moj život besmislen i da nemam za što živjeti.\n\nU ime Isusa Krista proglašavam istinu da je moja nada postojana u Kristu i da on sve čini novim (Ivan 21,5). U ime Isusa Krista proglašavam istinu da zato što je moja nada u Krista, neću biti razočaran (Rimljanima 5,5). U ime Isusa Krista, proglašavam istinu da se 'preobražavam iz slave u slavu na sliku Kristovu' (2. Korinćanima 3,18) i da Bog djeluje u meni, a ono što započinje, dovršit će (Filipljanima 1,6). U ime Isusa Krista proglašavam istinu da sam ispunjen nadom u dobre stvari koje dolaze."
      },
      {
        id: "zbunjenost",
        naziv: "Zbunjenost",
        laz: "Ne znam što se događa sa mnom. Ne razumijem ništa.",
        istinaKratko: "imam razumijevanje i prosvjetljenje od Gospodina",
        opis: "Rana nastaje ondje gdje ti riječi i djela nisu se poklapali — gdje su ti govorili jedno, a činili drugo. Prestaneš vjerovati vlastitoj percepciji.",
        osjecaj: "magla, nesigurnost u vlastiti osjećaj, stalno preispitivanje",
        znakIscjeljenja: "Razumijevanje i prosvjetljenje zamjenjuje zbunjenost",
        sakrament: "Sveti red",
        identitet: "Očev autoritet",
        poslanje: "Obnavljati sveti autoritet",
        vodiKaGrijesima: ["ljenost", "zavist"],
        lazi: "U ime Isusa Krista, odričem se laži da je sve zbunjujuće, da ništa ne razumijem i da je na meni da sam shvatim stvari.",
        istina: "U ime Isusa Krista proglašavam istinu da imam Kristovu misao (1. Korinćanima 2,16) i da mi Duh Sveti objavljuje sve što trebam znati, kad trebam znati (1. Korinćanima 1,7). U ime Isusa Krista, proglašavam istinu da Gospodin daje mudrost i razumijevanje svakome tko pita (Jakovljeva 1,5), da je Bog dao svoju Crkvu da me vodi do sve istine i da imam razumijevanje i prosvjetljenje od Gospodina.",
        molitva: "U ime Isusa Krista, odričem se laži da je sve zbunjujuće, da ništa ne razumijem i da je na meni da sam shvatim stvari.\n\nU ime Isusa Krista proglašavam istinu da imam Kristovu misao (1. Korinćanima 2,16) i da mi Duh Sveti objavljuje sve što trebam znati, kad trebam znati (1. Korinćanima 1,7). U ime Isusa Krista, proglašavam istinu da Gospodin daje mudrost i razumijevanje svakome tko pita (Jakovljeva 1,5), da je Bog dao svoju Crkvu da me vodi do sve istine i da imam razumijevanje i prosvjetljenje od Gospodina."
      }
    ],

    // ── UNUTARNJI ZAVJETI ───────────────────────────────────────
    // Odluka koju srce donese u trenutku rane, da se više ne bi ponovila.
    // `zastita` — od čega me zavjet obećao zaštititi
    // `zamjena` — istina/izbor kojim ga zamjenjujem u molitvi odricanja
    unutarnjiZavjeti: [
      {
        id: "nikom_ne_vjerujem",
        tekst: "Nikada nikome neću vjerovati",
        rane: ["strah", "odbacenost"],
        grijesi: ["ponos", "ljutnja"],
        zastita: "od izdaje i razočaranja",
        zamjena: "vjerovati Tebi i, korak po korak, ljudima koje mi Ti daješ"
      },
      {
        id: "nikad_povrijedjen",
        tekst: "Nikada više neću dopustiti da me netko povrijedi",
        rane: ["strah", "odbacenost"],
        grijesi: ["ljutnja", "ponos"],
        zastita: "od nove boli",
        zamjena: "otvoriti srce, znajući da si Ti moja zaštita"
      },
      {
        id: "nikad_ranjiv",
        tekst: "Nikada neću biti ranjiv",
        rane: ["strah", "sramota"],
        grijesi: ["ponos", "ljenost"],
        zastita: "od toga da me netko vidi slabog",
        zamjena: "dopustiti da me vidiš i voliš takvog kakav jesam"
      },
      {
        id: "sam_za_sebe",
        tekst: "Uvijek ću se sam pobrinuti za sebe",
        rane: ["napustenost", "bespomoćnost"],
        grijesi: ["pohlepa", "ponos"],
        zastita: "od toga da ovisim o nekome tko me može iznevjeriti",
        zamjena: "primati skrb — od Tebe i od ljudi koje mi šalješ"
      },
      {
        id: "ne_trazim_pomoc",
        tekst: "Nikada neću tražiti pomoć",
        rane: ["napustenost", "sramota"],
        grijesi: ["ponos", "pohlepa"],
        zastita: "od poniženja odbijenice",
        zamjena: "tražiti i primati pomoć bez srama"
      },
      {
        id: "uvijek_jak",
        tekst: "Uvijek ću biti jak i neću pokazati slabost",
        rane: ["bespomoćnost", "sramota"],
        grijesi: ["ponos", "ljutnja"],
        zastita: "od toga da me netko iskoristi",
        zamjena: "priznati slabost, jer je Tvoja snaga savršena u njoj"
      },
      {
        id: "ne_pokazujem_bol",
        tekst: "Nikada neću pokazati da me nešto boli",
        rane: ["sramota", "napustenost"],
        grijesi: ["prozdrljivost", "ljutnja"],
        zastita: "od toga da mi bol bude odbačena ili ismijana",
        zamjena: "donositi svoju bol Tebi i onima kojima mogu vjerovati"
      },
      {
        id: "moram_savrsen",
        tekst: "Moram biti savršen da bih bio voljen",
        rane: ["odbacenost", "sramota"],
        grijesi: ["ponos", "ljutnja"],
        zastita: "od odbacivanja",
        zamjena: "primiti ljubav koju ne moram zaslužiti"
      },
      {
        id: "nikad_kao_roditelj",
        tekst: "Nikada neću biti kao moj otac / moja majka",
        rane: ["sramota", "strah"],
        grijesi: ["ponos", "ljutnja"],
        zastita: "od toga da ponovim njihovu ranu",
        zamjena: "oprostiti im i primiti svoj vlastiti identitet od Tebe"
      },
      {
        id: "nitko_me_ne_kontrolira",
        tekst: "Nikada neću dopustiti da me netko kontrolira",
        rane: ["bespomoćnost", "strah"],
        grijesi: ["ljutnja", "ponos"],
        zastita: "od ponovnog osjećaja nemoći",
        zamjena: "predati kontrolu Tebi i živjeti u poslušnosti iz ljubavi"
      },
      {
        id: "uvijek_dostupan",
        tekst: "Uvijek ću biti dostupan drugima",
        rane: ["odbacenost", "napustenost"],
        grijesi: ["ponos", "prozdrljivost"],
        zastita: "od toga da me netko napusti ako kažem ne",
        zamjena: "postaviti zdrave granice i vjerovati da time ne gubim ljubav"
      },
      {
        id: "odlazim_prvi",
        tekst: "Otići ću prvi, prije nego što mene ostave",
        rane: ["napustenost", "odbacenost"],
        grijesi: ["pohota", "ljenost"],
        zastita: "od boli napuštanja",
        zamjena: "ostati i vjerovati Tebi u odnosima koje si mi dao"
      },
      {
        id: "nikad_duboko",
        tekst: "Nikada se neću vezati tako duboko",
        rane: ["odbacenost", "strah"],
        grijesi: ["pohota", "ljenost"],
        zastita: "od gubitka",
        zamjena: "voljeti do kraja, kako si Ti volio"
      },
      {
        id: "necu_se_nadati",
        tekst: "Neću se više ni nadati",
        rane: ["beznade"],
        grijesi: ["ljenost", "prozdrljivost"],
        zastita: "od razočaranja",
        zamjena: "nadati se u Tebe, koji ne razočaravaš"
      },
      {
        id: "necu_ni_pokusati",
        tekst: "Neću ni pokušavati, ionako neću uspjeti",
        rane: ["beznade", "bespomoćnost"],
        grijesi: ["ljenost"],
        zastita: "od neuspjeha",
        zamjena: "krenuti, jer Ti dovršavaš ono što započneš u meni"
      },
      {
        id: "ne_ovisim",
        tekst: "Nikada neću ovisiti ni o kome",
        rane: ["napustenost", "strah"],
        grijesi: ["pohlepa", "ponos"],
        zastita: "od ranjivosti koju nosi potreba",
        zamjena: "priznati svoju potrebu i osloniti se na Tebe"
      },
      {
        id: "sve_pod_kontrolom",
        tekst: "Uvijek ću imati kontrolu nad situacijom",
        rane: ["bespomoćnost", "strah"],
        grijesi: ["ljutnja", "ponos"],
        zastita: "od kaosa i iznenađenja",
        zamjena: "otpustiti kontrolu u Tvoje ruke"
      },
      {
        id: "ne_isplati_se_pitati",
        tekst: "Ne isplati se pitati — ionako nitko ne razumije",
        rane: ["zbunjenost", "napustenost"],
        grijesi: ["ljenost", "zavist"],
        zastita: "od osjećaja da si sam čak i kad govoriš",
        zamjena: "pitati i vjerovati da me Ti razumiješ do dna"
      },
      {
        id: "sam_sve_razumjeti",
        tekst: "Moram sam sve razumjeti i razriješiti",
        rane: ["zbunjenost", "bespomoćnost"],
        grijesi: ["ponos", "ljenost"],
        zastita: "od zbunjenosti i osjećaja gubitka tla",
        zamjena: "primiti mudrost od Tebe i pustiti da neke stvari ostanu Tvoje"
      }
    ],

    // ── GORKE OSUDE ─────────────────────────────────────────────
    // Presuda koju srce izrekne nad osobom, skupinom ili Bogom.
    // `oprastam` — kome treba oprostiti (dativ; izostavljeno ako je osuda protiv Boga)
    // `premaBogu` — ako je osuda upravljena Bogu, molitva ide drugim putem
    gorkeOsude: [
      {
        id: "muskarci_opasni",
        osudio: "muškarce koji su me povrijedili, osobito svoga oca",
        tekst: "Muškarci su sebični i opasni",
        rane: ["strah", "odbacenost"],
        oprastam: "muškarcima koji su me povrijedili, i osobito svom ocu",
        istina: "u Tebi postoji očinstvo koje ne povređuje, i Ti si mi Otac"
      },
      {
        id: "zene_nepouzdane",
        osudio: "žene koje su me povrijedile, osobito svoju majku",
        tekst: "Ženama se ne može vjerovati",
        rane: ["napustenost", "odbacenost"],
        oprastam: "ženama koje su me povrijedile, i osobito svojoj majci",
        istina: "postoji majčinska ljubav koja ne izdaje, i Ti si mi je dao u Mariji"
      },
      {
        id: "roditelju_nije_stalo",
        osudio: "svoje roditelje",
        tekst: "Mojim roditeljima nije bilo istinski stalo do mene",
        rane: ["napustenost", "odbacenost"],
        oprastam: "svojim roditeljima za sve u čemu nisu bili ono što sam trebao",
        istina: "si me želio prije nego su me oni poznavali (Jr 1,5)"
      },
      {
        id: "bog_me_napustio",
        tekst: "Bog me je napustio",
        rane: ["napustenost", "beznade"],
        premaBogu: true,
        istina: "Ti nisi otišao — bio si u boli sa mnom, i nikada me nisi ostavio (Heb 13,5)"
      },
      {
        id: "bog_kaznjava",
        tekst: "Bog je strog i kažnjava",
        rane: ["sramota", "strah"],
        premaBogu: true,
        istina: "si Ti Otac koji trči ususret sinu koji se vraća (Lk 15,20)"
      },
      {
        id: "bogu_nije_stalo",
        tekst: "Bogu nije stalo do moje boli",
        rane: ["napustenost", "beznade"],
        premaBogu: true,
        istina: "Ti skupljaš svaku moju suzu u svoj mijeh (Ps 56,9)"
      },
      {
        id: "autoriteti_zlouporabe",
        osudio: "one koji su imali vlast nada mnom",
        tekst: "Autoriteti uvijek zloupotrijebe moć",
        rane: ["bespomoćnost", "strah"],
        oprastam: "onima koji su imali vlast nada mnom i zloupotrijebili je",
        istina: "si Ti vlast koja pere noge, a ne gazi (Iv 13,5)"
      },
      {
        id: "svi_odlaze",
        osudio: "one koji su otišli iz mog života",
        tekst: "Svi na kraju odlaze",
        rane: ["napustenost", "odbacenost"],
        oprastam: "onima koji su otišli iz mog života",
        istina: "Ti ostaješ u sve dane, do svršetka svijeta (Mt 28,20)"
      },
      {
        id: "ljubav_boli",
        osudio: "one s kojima je ljubav završila boli",
        tekst: "Ljubav uvijek boli i uvijek završi",
        rane: ["odbacenost", "strah"],
        oprastam: "onima s kojima je ljubav završila boli",
        istina: "ljubav nikad ne prestaje (1 Kor 13,8)"
      },
      {
        id: "zivot_nepravedan",
        tekst: "Život je nepravedan",
        rane: ["beznade", "bespomoćnost"],
        premaBogu: true,
        istina: "Ti izvodiš dobro iz svega, i onoga što je bilo nepravedno (Rim 8,28)"
      },
      {
        id: "nikad_ne_dobijem",
        tekst: "Nikad ne mogu dobiti ono što trebam",
        rane: ["beznade", "odbacenost"],
        premaBogu: true,
        istina: "Ti znaš što mi treba prije nego zaištem (Mt 6,8)"
      },
      {
        id: "crkva_licemjerna",
        osudio: "one u Crkvi koji su me povrijedili ili razočarali",
        tekst: "Crkva je licemjerna",
        rane: ["sramota", "odbacenost"],
        oprastam: "onima u Crkvi koji su me povrijedili ili razočarali",
        istina: "Crkva je Tvoje tijelo, ranjeno ali sveto, i u njoj imam svoje mjesto"
      },
      {
        id: "svijet_opasan",
        tekst: "Svijet je opasno mjesto",
        rane: ["strah", "bespomoćnost"],
        premaBogu: true,
        istina: "si Ti pobijedio svijet (Iv 16,33)"
      },
      {
        id: "nitko_ne_razumije",
        osudio: "one koji me nisu čuli kad sam govorio",
        tekst: "Nitko me nikada neće razumjeti",
        rane: ["zbunjenost", "napustenost"],
        oprastam: "onima koji me nisu čuli kad sam govorio",
        istina: "Ti me poznaješ do dna i razumiješ me potpuno (Ps 139)"
      }
    ],

    // ── SEDAM SMRTNIH GRIJEHA ───────────────────────────────────
    smrtniGrijesi: [
      {
        id: "ponos",
        naziv: "Oholost",
        ikona: "👑",
        idolatrija: "Sebe ili drugih",
        opis: "Idolatrija samog sebe, samopravednost, samopromocija",
        bojaBg: "#8B6B4A",
        bojaLight: "#C4A882",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...osjećam da moram sve kontrolirati", "...ne tražim Božju pomoć", "...mislim da znam bolje od drugih"]
        },
        rane: ["sramota", "odbacenost", "strah"],
        plodovi: [
          { id: "samopravednost", naziv: "Samopravednost", izRana: ["sramota"] },
          { id: "samoobmana", naziv: "Samoobmana", izRana: ["sramota"] },
          { id: "samopromocija", naziv: "Samopromocija", izRana: ["odbacenost"] },
          { id: "osudjivanje", naziv: "Osuđivanje drugih", izRana: ["sramota", "odbacenost"] },
          { id: "kontrola", naziv: "Potreba za kontrolom", izRana: ["bespomoćnost", "strah"] },
          { id: "hvalisanje", naziv: "Hvalisanje", izRana: ["odbacenost"] },
          { id: "netolerantnost", naziv: "Netolerantnost", izRana: ["strah"] },
          { id: "perfekcionizam", naziv: "Perfekcionizam", izRana: ["sramota", "odbacenost"] },
          { id: "kriticizam", naziv: "Pretjerani kriticizam", izRana: ["sramota"] },
          { id: "neprihvacanje_kritike", naziv: "Ne prihvaćam kritiku", izRana: ["sramota"] },
          { id: "usporedivanje", naziv: "Stalno se uspoređujem", izRana: ["odbacenost"] },
          { id: "manipulacija", naziv: "Manipulacija drugima", izRana: ["bespomoćnost"] },
          { id: "tvrdoglavost", naziv: "Tvrdoglavost/Samovolja", izRana: ["bespomoćnost", "strah"] },
          { id: "distanciranost", naziv: "Emocionalna distanciranost", izRana: ["strah", "napustenost"] }
        ],
        krepost: { naziv: "Poniznost", opis: "Poniznost pobjeđuje oholost" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha oholosti i bilo kakvog idolopoklonstva sebe ili drugih. U ime Isusa Krista odričem se samopravednosti, samozavaravanja i samopromocije.\n\nMolim te za oprost, Gospodine, i umjesto toga odlučujem se poniziti pred tobom.",
        znakIscjeljenja: "Poniznost i sloboda od potrebe da dokazujem svoju vrijednost"
      },
      {
        id: "zavist",
        naziv: "Zavist",
        ikona: "👁️",
        idolatrija: "Položaj ili status",
        opis: "Idolatrija statusa, položaja ili onoga što drugi imaju",
        bojaBg: "#4A6B5A",
        bojaLight: "#82A892",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...uspoređujem se s drugima", "...osjećam se manje vrijednim", "...pokušavam dokazati svoju vrijednost"]
        },
        rane: ["odbacenost", "beznade", "zbunjenost"],
        plodovi: [
          { id: "ljubomora", naziv: "Ljubomora", izRana: ["odbacenost"] },
          { id: "zlovolja", naziv: "Zlovolja prema uspjehu drugih", izRana: ["odbacenost", "beznade"] },
          { id: "ogovaranje", naziv: "Ogovaranje", izRana: ["odbacenost", "sramota"] },
          { id: "podrivanje", naziv: "Podrivanje/Sabotaža drugih", izRana: ["odbacenost"] },
          { id: "nezahvalnost", naziv: "Nezahvalnost", izRana: ["beznade"] },
          { id: "usporedivanje_z", naziv: "Opsesivno uspoređivanje", izRana: ["odbacenost", "sramota"] },
          { id: "kopiranje", naziv: "Imitiranje tuđeg života", izRana: ["odbacenost", "zbunjenost"] },
          { id: "pohlepa_status", naziv: "Pohlepa za statusom", izRana: ["odbacenost"] },
          { id: "gorcina_z", naziv: "Gorčina prema uspješnima", izRana: ["beznade", "odbacenost"] },
          { id: "umanjivanje", naziv: "Umanjivanje tuđih dostignuća", izRana: ["odbacenost", "sramota"] },
          { id: "kompetitivnost", naziv: "Nezdrava kompetitivnost", izRana: ["odbacenost"] },
          { id: "financijska_usporedba", naziv: "Uspoređivanje financija/imovine", izRana: ["odbacenost", "strah"] }
        ],
        krepost: { naziv: "Ljubaznost", opis: "Zadovoljstvo i ljubaznost pobjeđuju zavist" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha zavisti i svakog idolopoklonstva položaja ili statusa. Odričem se žudnje za onim što ima bilo tko drugi i ponižavanja zbog toga.\n\nMolim za tvoj oprost, Gospodine, i umjesto toga biram: zadovoljstvo i ljubaznost prema svojim bližnjima.",
        znakIscjeljenja: "Radost zbog tuđeg uspjeha, zahvalnost za vlastite darove"
      },
      {
        id: "ljutnja",
        naziv: "Srditost",
        ikona: "🔥",
        idolatrija: "Moć, kontrola ili pravda",
        opis: "Idolatrija kontrole, moći ili pravde",
        bojaBg: "#8B3A3A",
        bojaLight: "#C48282",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...osjećam da moram sam preuzeti kontrolu", "...mislim da se moram boriti za pravdu", "...ne vjerujem da će Bog intervenirati"]
        },
        rane: ["bespomoćnost", "odbacenost", "strah"],
        plodovi: [
          { id: "samopravednost_l", naziv: "Samopravednost", izRana: ["sramota"] },
          { id: "gorcina", naziv: "Gorčina", izRana: ["odbacenost", "beznade"] },
          { id: "ogorcenost", naziv: "Ogorčenost", izRana: ["beznade"] },
          { id: "depresija", naziv: "Depresija", izRana: ["beznade", "bespomoćnost"] },
          { id: "pasivna_agresija", naziv: "Pasivna agresija", izRana: ["bespomoćnost", "strah"] },
          { id: "tracanje", naziv: "Tračanje/Sarkazam", izRana: ["odbacenost", "bespomoćnost"] },
          { id: "osveta", naziv: "Osvetoljubivost", izRana: ["bespomoćnost", "odbacenost"] },
          { id: "nasilje_verbalno", naziv: "Verbalno nasilje", izRana: ["bespomoćnost"] },
          { id: "izolacija", naziv: "Povlačenje/Izolacija", izRana: ["odbacenost", "napustenost"] },
          { id: "kontroliranje", naziv: "Kontroliranje ponašanja", izRana: ["bespomoćnost", "strah"] },
          { id: "emocionalna_hladnoca", naziv: "Emocionalna hladnoća", izRana: ["strah", "napustenost"] },
          { id: "perfekcionizam_l", naziv: "Perfekcionizam", izRana: ["sramota"] },
          { id: "kriticizam_l", naziv: "Oštar kriticizam", izRana: ["sramota"] },
          { id: "nestrpljivost", naziv: "Kronična nestrpljivost", izRana: ["bespomoćnost"] },
          { id: "eksplozivnost", naziv: "Eksplozivni ispadi bijesa", izRana: ["bespomoćnost", "strah"] }
        ],
        krepost: { naziv: "Strpljivost i dugotrpnost", opis: "Strpljivost i dugotrpnost pobjeđuju srditost" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha gnjeva i svakog idolopoklonstva moći, kontrole ili pravde. U ime Isusa Krista odričem se svake gorčine, osude i osvete.\n\nMolim za tvoj oprost, Gospodine, i umjesto toga biram krepost strpljivosti i dugotrpnosti, da blagoslovim one koji su me povrijedili.",
        znakIscjeljenja: "Mir i sloboda od potrebe za kontrolom, sposobnost opraštanja"
      },
      {
        id: "pohota",
        naziv: "Bludnost",
        ikona: "💔",
        idolatrija: "Seks ili odnosi",
        opis: "Idolatrija seksa, romantike ili odnosa",
        bojaBg: "#7A3A6B",
        bojaLight: "#B882A8",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...tražim ljubav na pogrešnim mjestima", "...koristim druge za vlastito zadovoljstvo", "...ne vjerujem da Bog može ispuniti moju potrebu za ljubavlju"]
        },
        rane: ["napustenost", "odbacenost", "sramota"],
        plodovi: [
          { id: "bludnost", naziv: "Bludnost/Promiskuitet", izRana: ["odbacenost", "napustenost"] },
          { id: "pornografija", naziv: "Pornografija", izRana: ["napustenost", "sramota"] },
          { id: "opsesivni_odnosi", naziv: "Opsesivni romantični odnosi", izRana: ["napustenost", "odbacenost"] },
          { id: "masturb", naziv: "Kompulzivna masturbacija", izRana: ["napustenost", "sramota"] },
          { id: "emotionalni_aff", naziv: "Emocionalne afere", izRana: ["napustenost", "odbacenost"] },
          { id: "seksualna_fantazija", naziv: "Seksualne fantazije/Maštanje", izRana: ["napustenost", "beznade"] },
          { id: "preljub", naziv: "Preljub", izRana: ["odbacenost", "napustenost"] },
          { id: "manipulacija_p", naziv: "Manipulacija u vezama", izRana: ["bespomoćnost", "strah"] },
          { id: "ovisnost_o_ljubavi", naziv: "Ovisnost o ljubavi/odobravanju", izRana: ["odbacenost"] },
          { id: "flert", naziv: "Pretjerani flert", izRana: ["odbacenost"] },
          { id: "seks_kao_bijeg", naziv: "Seks kao bijeg od boli", izRana: ["sramota", "napustenost"] },
          { id: "idolizacija_partnera", naziv: "Idolizacija partnera", izRana: ["napustenost", "odbacenost"] }
        ],
        krepost: { naziv: "Čistoća", opis: "Čistoća pobjeđuje bludnost" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha požude i svakog idolopoklonstva seksa ili odnosa. U ime Isusa Krista, odričem se svakog nemorala, bluda, preljuba, pornografije...\n\nMolim za tvoj oprost, Gospodine, i umjesto toga biram krepost čistoće i da vidim svakoga u čistoći i kao sina/kćer kakvim/kakvom ga/ju je Bog stvorio.",
        znakIscjeljenja: "Čistoća srca, zdravi odnosi utemeljeni na ljubavi"
      },
      {
        id: "prozdrljivost",
        naziv: "Neumjerenost u jelu i piću",
        ikona: "🍷",
        idolatrija: "Hrana, piće ili droga",
        opis: "Idolatrija hrane, pića ili droga",
        bojaBg: "#6B5A3A",
        bojaLight: "#A8926B",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...tješim se hranom ili pićem", "...izbjegavam bol kroz konzumaciju", "...hrana postaje moj 'bog'"]
        },
        rane: ["napustenost", "beznade", "bespomoćnost"],
        plodovi: [
          { id: "prejedanje", naziv: "Prejedanje", izRana: ["napustenost", "sramota"] },
          { id: "alkoholizam", naziv: "Prekomjerno pijenje alkohola", izRana: ["napustenost", "beznade"] },
          { id: "droge", naziv: "Ovisnost o drogama", izRana: ["beznade", "bespomoćnost"] },
          { id: "samoindulgencija", naziv: "Samoindulgencija", izRana: ["napustenost"] },
          { id: "emocionalno_jedenje", naziv: "Emocionalno jedenje", izRana: ["napustenost", "odbacenost"] },
          { id: "dijete_ciklusi", naziv: "Ciklusi dijeta/prejedanja", izRana: ["sramota", "bespomoćnost"] },
          { id: "bulimija_an", naziv: "Poremećaji hranjenja", izRana: ["sramota", "bespomoćnost"] },
          { id: "kava_slatkisi", naziv: "Ovisnost o kavi/slatkišima", izRana: ["napustenost"] },
          { id: "pusenje", naziv: "Pušenje/nikotinska ovisnost", izRana: ["napustenost", "strah"] },
          { id: "ekrani", naziv: "Ovisnost o ekranima/internetu", izRana: ["napustenost", "beznade"] },
          { id: "kupovanje", naziv: "Kompulzivno kupovanje", izRana: ["napustenost", "odbacenost"] }
        ],
        krepost: { naziv: "Umjerenost i post", opis: "Umjerenost i post pobjeđuju neumjerenost" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha proždrljivosti i svakog idolopoklonstva hrane, pića ili droge. U ime Isusa Krista, odričem se svakog samozadovoljavanja i lažne utjehe kroz ono što uzimam u svoje tijelo.\n\nMolim tvoj oprost, Gospodine, i umjesto toga biram umjerenost i post kako bih se borio protiv samozadovoljavanja.",
        znakIscjeljenja: "Sloboda od kompulzivnog jedenja/pijenja, tješenje u Bogu"
      },
      {
        id: "pohlepa",
        naziv: "Škrtost",
        ikona: "💰",
        idolatrija: "Sigurnost, bogatstvo ili novac",
        opis: "Idolatrija sigurnosti, bogatstva ili novca",
        bojaBg: "#4A5A3A",
        bojaLight: "#82926B",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...ne vjerujem da će Bog brinuti za mene", "...skupljam dobra kao zaštitu", "...novac postaje moja sigurnost"]
        },
        rane: ["strah", "napustenost", "bespomoćnost"],
        plodovi: [
          { id: "skrtost", naziv: "Škrtost/Gomilanje", izRana: ["strah", "napustenost"] },
          { id: "kradja", naziv: "Krađa/Prijevara", izRana: ["strah", "bespomoćnost"] },
          { id: "iskoristavanje", naziv: "Iskorištavanje drugih", izRana: ["strah", "odbacenost"] },
          { id: "materijalizm", naziv: "Materijalizam", izRana: ["strah", "odbacenost"] },
          { id: "workaholic", naziv: "Radoholizam radi novca", izRana: ["strah", "odbacenost"] },
          { id: "rizik_financ", naziv: "Riskantne financijske odluke", izRana: ["bespomoćnost", "beznade"] },
          { id: "laganje_novac", naziv: "Laganje o financijama", izRana: ["sramota", "strah"] },
          { id: "nezdrava_stednja", naziv: "Opsesivna štednja/kontrola", izRana: ["strah", "bespomoćnost"] },
          { id: "trosenje_ekscesivno", naziv: "Ekscesivno trošenje", izRana: ["napustenost", "beznade"] },
          { id: "statusni_simboli", naziv: "Opsesija statusnim simbolima", izRana: ["odbacenost", "sramota"] }
        ],
        krepost: { naziv: "Velikodušnost", opis: "Velikodušnost pobjeđuje škrtost" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha pohlepe i svakog idolopoklonstva sigurnosti, bogatstva ili novca. U ime Isusa Krista, odričem se svih grijeha gomilanja, krađe ili iskorištavanja ljudi kako bih napredovao.\n\nMolim tvoj oprost, Gospodine, i umjesto toga biram velikodušnost i povjerenje u tvoju skrb za moj život.",
        znakIscjeljenja: "Sloboda od straha od nedostatka, radost u davanju"
      },
      {
        id: "ljenost",
        naziv: "Lijenost",
        ikona: "😴",
        idolatrija: "Lagodnost i lažna utjeha",
        opis: "Idolatrija lakoće i lažne utjehe",
        bojaBg: "#4A4A6B",
        bojaLight: "#82829A",
        korijen: {
          naziv: "Bezbožno oslanjanje na sebe",
          opis: "Oslanjam se na sebe kada...",
          primjeri: ["...izbjegavam odgovornost", "...odustajem kad je teško", "...tražim lagodan put"]
        },
        rane: ["beznade", "bespomoćnost", "zbunjenost"],
        plodovi: [
          { id: "prokrastinacija", naziv: "Prokrastinacija", izRana: ["strah", "beznade"] },
          { id: "odustajanje", naziv: "Lako odustajem", izRana: ["beznade", "bespomoćnost"] },
          { id: "pasivnost", naziv: "Pasivnost", izRana: ["bespomoćnost", "beznade"] },
          { id: "duhovna_mlakost", naziv: "Duhovna mlakost", izRana: ["beznade", "napustenost"] },
          { id: "izbjegavanje", naziv: "Izbjegavanje odgovornosti", izRana: ["strah", "bespomoćnost"] },
          { id: "ekrani_l", naziv: "Gubljenje vremena na ekranima", izRana: ["napustenost", "beznade"] },
          { id: "zanemarivanje_odnosa", naziv: "Zanemarivanje odnosa", izRana: ["odbacenost", "strah"] },
          { id: "nedovrsenost", naziv: "Nedovršeni projekti", izRana: ["beznade", "sramota"] },
          { id: "kasnjenje", naziv: "Kronično kašnjenje", izRana: ["bespomoćnost", "strah"] },
          { id: "minimalan_napor", naziv: "Minimalan napor u svemu", izRana: ["beznade"] },
          { id: "bijeg_od_tisine", naziv: "Bijeg od tišine i refleksije", izRana: ["strah", "zbunjenost"] }
        ],
        krepost: { naziv: "Marljivost i ustrajnost", opis: "Marljivost i ustrajnost pobjeđuju lijenost" },
        molitvaOdricanja: "U ime Isusa Krista odričem se grijeha lijenosti i svog idolopoklonstva lagodnosti i lažne utjehe. U ime Isusa Krista, odričem se lijenosti ili odustajanja kada stvari postanu teške.\n\nMolim te za oprost, Gospodine, i biram marljivost i ustrajnost.",
        znakIscjeljenja: "Energija i radost u služenju, sloboda od pasivnosti"
      }
    ]
  },

  // ── GRADITELJI MOLITAVA ─────────────────────────────────────
  // Gramatika je jezično specifična, pa svaki jezik ima svoje.
  molitve: {
    // Pečat i blagoslov (JPII — "Prayer for Sealing and Blessing").
    // rane: objekti iz smrtneRane; bez njih ostaju mjesta za vlastiti upis.
    molitvaPecata: function(rane){
      rane = rane || [];
      var t = "Oče, hvala Ti za ovo iscjeljenje po imenu Isusovu i snagom Duha Svetoga. " +
              "Slavim Te za Tvoju veliku ljubav, milosrđe i moć, i što si poslao Isusa u snazi Duha " +
              "da iscijeli naša slomljena srca i oslobodi nas od svakog ropstva.\n\n" +
              "Molim Te sada da zapečatiš ovo iscjeljenje i zatvoriš sva preostala vrata dragocjenom krvlju Isusovom " +
              "i blagim djelovanjem svoga Duha Svetoga. Blagoslovi me sada novim izljevom svoga Duha " +
              "i novim razumijevanjem i autoritetom moga identiteta u Isusu Kristu.\n\n";
      if (rane.length) {
        t += "Osobito blagoslovi ono što je u meni ranjeno: " +
             rane.map(function(r){ return r.naziv.toLowerCase(); }).join(", ") + ".";
        rane.forEach(function(r){ if (r.istinaKratko) t += " Priznajem da " + r.istinaKratko + "."; });
      } else {
        t += "Osobito blagoslovi (ono područje u kojemu sam ranjen). Priznajem da sam (istine koje si mi objavio u molitvi).";
      }
      return t + "\n\nZahvaljujem Ti i slavim Te za Tvoju dobrotu prema meni. Amen.";
    },

    // Molitva odricanja od krive slike Boga — slijedi Schuchtsov lanac:
    // rana → tiha osuda roditelja → projekcija na Boga → odricanje → istina
    molitvaSlikeBoga: function(k){
      if (typeof k === 'string') {
        return "U ime Isusovo odričem se krive slike Boga: \u201C" + k + "\u201D. " +
               "Oče, oprosti mi što sam Te takvim zamišljao i pokaži mi svoje pravo lice. Amen.";
      }
      var t = "Oče, priznajem da sam Te u srcu držao ovakvim: " + k.opis + "\n\n";
      if (k.projekcija) {
        var koga = (k.projekcija === 'majka') ? "svoju majku" : "svoga oca";
        var kome = (k.projekcija === 'majka') ? "svojoj majci" : "svome ocu";
        t += "Priznajem da ta slika ne dolazi od Tebe, nego iz moje rane. U srcu sam osudio " + koga +
             " i tu sam osudu nesvjesno prenio na Tebe. U ime Isusovo opraštam " + kome +
             " i povlačim tu osudu. ";
      }
      t += "U ime Isusovo odričem se ove krive slike Boga i svake laži o Tebi koju je moje ranjeno srce povjerovalo. ";
      if (k.istina) t += "Proglašavam istinu da " + k.istina + ". ";
      return t + "Pokaži mi svoje pravo lice, kako mi Te je Isus objavio. Amen.";
    },

    // Molitva odricanja od unutarnjeg zavjeta (HWP, Appendix 1 — "Renouncing: Inner Vows")
    molitvaZavjeta: function(z){
      var tekst = (typeof z === 'string') ? z : z.tekst;
      var t = "Oče, priznajem da sam pokušavao spasiti sebe umjesto da se oslonim na Tebe za svoje spasenje. " +
              "Oprosti mi grijehe ponosa i samodostatnosti. Priznajem da me je moj trud da zaštitim samoga sebe ostavio " +
              "zatvorenog iza zidova koji me sprječavaju da slobodno dajem i primam ljubav. " +
              "Želim biti slobodan od ovog ropstva koje je došlo kao posljedica mojih vlastitih izbora.\n\n" +
              "U ime Isusovo odričem se unutarnjeg zavjeta: \u201C" + tekst + "\u201D.";
      if (typeof z !== 'string') {
        if (z.zastita) t += " Sklopio sam ga da me zaštiti " + z.zastita + ".";
        if (z.zamjena) t += " Odričem se te lažne zaštite i biram " + z.zamjena + ".";
      }
      return t + " Molim Te da me sada oslobodiš od ropstva ovog zavjeta. Hvala Ti. Amen.";
    },

    // Skupna molitva odricanja od zavjeta — uvod jednom, pa svaki zavjet
    molitvaZavjetaSkupno: function(list){
      var t = "Oče, priznajem da sam pokušavao spasiti sebe umjesto da se oslonim na Tebe za svoje spasenje. " +
              "Oprosti mi grijehe ponosa i samodostatnosti. Priznajem da me je moj trud da zaštitim samoga sebe ostavio " +
              "zatvorenog iza zidova koji me sprječavaju da slobodno dajem i primam ljubav. " +
              "Želim biti slobodan od ovog ropstva koje je došlo kao posljedica mojih vlastitih izbora.\n";
      list.forEach(function(z){
        var tekst = (typeof z === 'string') ? z : z.tekst;
        t += "\nU ime Isusovo odričem se unutarnjeg zavjeta: \u201C" + tekst + "\u201D.";
        if (typeof z !== 'string') {
          if (z.zastita) t += " Sklopio sam ga da me zaštiti " + z.zastita + ".";
          if (z.zamjena) t += " Odričem se te lažne zaštite i biram " + z.zamjena + ".";
        }
      });
      return t + "\n\nMolim Te da me sada oslobodiš od ropstva ovih zavjeta. Hvala Ti. Amen.";
    },

    // Skupna molitva odricanja od gorkih osuda
    molitvaOsudeSkupno: function(list){
      var t = "Oče, priznajem da sam osuđivao. Shvaćam da sam to činio kako bih se zaštitio " +
              "od osjećaja ranjivosti i nemoći, da ne bih bio ponovno povrijeđen. " +
              "Shvaćam također da je osuda grijeh i da me drži vezanim.\n";
      list.forEach(function(o){
        var tekst = (typeof o === 'string') ? o : o.tekst;
        var bogu  = (typeof o !== 'string') && o.premaBogu;
        t += "\nU ime Isusovo odričem se osude: \u201C" + tekst + "\u201D.";
        if (typeof o !== 'string') {
          if (bogu) t += " Molim Te za oprost što sam Te optuživao i povlačim tu presudu.";
          else if (o.oprastam) t += " Opraštam " + o.oprastam + " i molim Te da mi daš svoje srce suosjećanja prema njima.";
          if (o.istina) t += " Proglašavam istinu da " + o.istina + ".";
        }
      });
      return t + "\n\nMolim Te da oslobodiš i mene i njih od ropstva ovih osuda i izolacije. Amen.";
    },

    // Molitva odricanja od gorke osude (HWP, Appendix 1 — "Renouncing: Judgments")
    // Slijedi obrazac iz knjige: priznanje → zašto sam osudio → oprost → odricanje → molba za Božje srce
    molitvaOsude: function(o){
      var tekst = (typeof o === 'string') ? o : o.tekst;
      var koga  = (typeof o === 'string') ? null : (o.premaBogu ? null : o.oprastam);   // dativ: "opraštam ..."
      var kogaA = (typeof o === 'string') ? null : (o.premaBogu ? null : o.osudio);     // akuzativ: "osudio sam ..."
      var bogu  = (typeof o !== 'string') && o.premaBogu;

      var t = "Oče, priznajem da sam osudio " + (bogu ? "Tebe" : (kogaA || "one koji su me povrijedili")) + ". " +
              "Shvaćam da sam to učinio kako bih se zaštitio od osjećaja ranjivosti i bespomoćnosti, " +
              "da ne bih bio ponovno povrijeđen. " +
              "Shvaćam također da je ta osuda grijeh i da me drži vezanim.\n\n";

      if (bogu) {
        t += "Molim Te za oprost što sam Te optuživao i povlačim tu presudu. ";
      } else {
        t += "Molim Te sada za oprost i da oslobodiš mene i " + (kogaA || "njih") +
             " od ropstva ove osude i izolacije. ";
        t += "U ime Isusovo opraštam " + (koga || "njima") + ". ";
      }

      t += "U ime Isusovo odričem se osude: \u201C" + tekst + "\u201D.";

      if (typeof o !== 'string' && o.istina) {
        t += " Proglašavam istinu da " + o.istina + ".";
      }

      if (!bogu) {
        t += "\n\nZnam da ne mogu sam promijeniti svoje srce, pa Te molim da mi daš svoje srce suosjećanja prema " +
             (koga || "njima") + ".";
      }
      return t + " Amen.";
    }
  }
};
