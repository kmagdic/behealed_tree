
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

window.TREE_DATA = {

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
  // SKRIVENO u sučelju: CONFIG.showKriveSlikeBoga (index.html), zadano false.
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
    { id:"d_nisam_slavljen", tip:"A", tekst:"Nisam bio/bila njegovan/a i slavljen/a takav/takva kakav/kakva jesam", rane:["odbacenost","sramota"] },
    { id:"d_neshvacen",      tip:"A", tekst:"Nitko me nije istinski razumio", rane:["napustenost","zbunjenost"] },
    { id:"d_bez_granica",    tip:"A", tekst:"Nisam dobio/dobila granice ni primjerenu disciplinu", rane:["bespomoćnost","zbunjenost"] },
    { id:"d_bez_darova",     tip:"A", tekst:"Nisam smio/smjela razvijati svoje darove i sklonosti", rane:["bespomoćnost","beznade"] },
    { id:"d_srcem_odsutni",  tip:"A", tekst:"Roditelji su bili tjelesno prisutni, ali srcem odsutni", rane:["napustenost","odbacenost"] },
    { id:"d_bez_osjecaja",   tip:"A", tekst:"Osjećaji se u našoj kući nisu pokazivali ni spominjali", rane:["napustenost","sramota"] },
    { id:"d_samo_uspjeh",    tip:"A", tekst:"Bio/bila sam hvaljen/a samo za uspjeh, ne za to tko jesam", rane:["odbacenost","sramota"] },
    { id:"d_bez_utjehe",     tip:"A", tekst:"Nitko me nije tješio kad sam plakao/plakala", rane:["napustenost","bespomoćnost"] },
    { id:"d_prerano_odrastao",tip:"A",tekst:"Morao/morala sam prerano odrasti i brinuti se za druge", rane:["bespomoćnost","napustenost"] },

    { id:"d_odlazak_roditelja", tip:"B", tekst:"Roditelj je otišao ili su se razveli", rane:["napustenost","odbacenost"] },
    { id:"d_smrt",              tip:"B", tekst:"Smrt bliske osobe u mom djetinjstvu", rane:["napustenost","beznade"] },
    { id:"d_nasilje",           tip:"B", tekst:"Tjelesno nasilje u obitelji", rane:["strah","bespomoćnost"] },
    { id:"d_vrijedjanje",       tip:"B", tekst:"Vikanje, vrijeđanje i omalovažavanje", rane:["sramota","strah"] },
    { id:"d_zlostavljanje",     tip:"B", tekst:"Seksualno zlostavljanje ili povreda mojih granica", rane:["sramota","bespomoćnost","strah"] },
    { id:"d_svjedok",           tip:"B", tekst:"Gledao/gledala sam kako netko drugi biva povrijeđen", rane:["strah","bespomoćnost"] },
    { id:"d_vrsnjaci",          tip:"B", tekst:"Vršnjačko nasilje ili isključenost iz društva", rane:["odbacenost","sramota"] },
    { id:"d_ovisnost",          tip:"B", tekst:"Alkohol ili ovisnost u obitelji", rane:["strah","zbunjenost","bespomoćnost"] },
    { id:"d_bolest",            tip:"B", tekst:"Teška bolest — moja ili u obitelji", rane:["strah","bespomoćnost"] },
    { id:"d_usporedjivan",      tip:"B", tekst:"Stalno su me uspoređivali s bratom/sestrom ili drugima", rane:["odbacenost","sramota"] },
    { id:"d_nepredvidiv",       tip:"B", tekst:"Roditelj je bio nepredvidiv — nikad nisam znao/znala što slijedi", rane:["strah","zbunjenost"] },
    { id:"d_prekrsena_obecanja",tip:"B", tekst:"Obećanja su mi se stalno kršila", rane:["beznade","napustenost"] }
  ],

  smrtneRane: [
    {
      id: "napustenost",
      naziv: "Napuštenost",
      laz: "Sam/sama sam. Nitko me ne razumije. Nitko se ne brine za mene.",
      opis: "Rana nastaje kad onaj tko je trebao biti prisutan nije bio — fizički ili srcem. Ne mora biti odlazak; dovoljna je odsutnost.",
      osjecaj: "praznina, čežnja, osjećaj da si nevidljiv",
      znakIscjeljenja: "Povezanost i razumijevanje zamjenjuje napuštenost",
      sakrament: "Pričest",
      identitet: "Trajna prisutnost",
      poslanje: "Utjeloviti Kristovu prisutnost",
      vodiKaGrijesima: ["pohota", "prozdrljivost", "pohlepa"],
      lazi: "U ime Isusa Krista odričem se laži da sam sam i da me nitko ne razumije niti se brine za mene. U ime Isusa Krista odričem se laži da sam nezaštićen i da me Bog napustio.",
      istina: "U ime Isusa Krista proglašavam istinu koju mi je sam Isus obećao: 'Ne, neću te zapustiti i neću te ostaviti.' (Hebrejima 13,5); 'Ja ću uvijek biti s vama do svršetka vremena' (Matej 28). U ime Isusa Krista proglašavam istinu da sam povezan, da sam duboko shvaćen i da se za mene brine te naviještam istinu u svetoj pričesti da sam sjedinjen s Kristom i zajedništvom svetih. Oni su uvijek sa mnom, tako da nikada nisam sam/a.",
      molitva: "U ime Isusa Krista odričem se laži da sam sam i da me nitko ne razumije niti se brine za mene. U ime Isusa Krista odričem se laži da sam nezaštićen i da me Bog napustio.\n\nU ime Isusa Krista proglašavam istinu koju mi je sam Isus obećao: 'Ne, neću te zapustiti i neću te ostaviti.' (Hebrejima 13,5); 'Ja ću uvijek biti s vama do svršetka vremena' (Matej 28). U ime Isusa Krista proglašavam istinu da sam povezan, da sam duboko shvaćen i da se za mene brine te naviještam istinu u svetoj pričesti da sam sjedinjen s Kristom i zajedništvom svetih. Oni su uvijek sa mnom, tako da nikada nisam sam/a."
    },
    {
      id: "sramota",
      naziv: "Sram",
      laz: "Loš sam, prljav, ružan, glup, bezvrijedan, izopačen...",
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
      laz: "Ako se povjerim, progovorim ili se suprotstavim, bit ću povrijeđen/a ili ću umrijeti.",
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
      opis: "Napuštenost je odsutnost. Odbačenost je poruka: bio si tu, i nisi bio željen. Zato boli drukčije.",
      osjecaj: "potreba da zaslužiš mjesto, strah od isključenja",
      znakIscjeljenja: "Prihvaćen i cijenjen zamjenjuje odbačenost",
      sakrament: "Krštenje",
      identitet: "Očev ljubljeni",
      poslanje: "Nasljedovati Očevu ljubav",
      vodiKaGrijesima: ["zavist", "ponos", "pohota"],
      lazi: "U ime Isusa Krista odričem se laži da nisam voljen i da nisam vrijedan ljubavi. Odričem se laži da nisam poželjan, da nisam željen i da nisam dovoljno dobar.",
      istina: "U ime Isusa Krista proglašavam istinu da sam snagom svoga krštenja ljubljeni sin/kći Očeva. Objavljujem istinu da me toliko voli da je dao svoj život za mene i da nema veće ljubavi (Ivan 15). Proglašavam istinu da je Božja ljubav izlivena u moje srce po Duhu Svetom. U ime Isusa Krista proglašavam istinu da sam ljubljen, željen i da sam dragocjen u Očevim očima.",
      molitva: "U ime Isusa Krista odričem se laži da nisam voljen i da nisam vrijedan ljubavi. Odričem se laži da nisam poželjan, da nisam željen i da nisam dovoljno dobar.\n\nU ime Isusa Krista proglašavam istinu da sam snagom svoga krštenja ljubljeni sin/kći Očeva. Objavljujem istinu da me toliko voli da je dao svoj život za mene i da nema veće ljubavi (Ivan 15). Proglašavam istinu da je Božja ljubav izlivena u moje srce po Duhu Svetom. U ime Isusa Krista proglašavam istinu da sam ljubljen, željen i da sam dragocjen u Očevim očima."
    },
    {
      id: "beznade",
      naziv: "Beznađe",
      laz: "Ništa se nikada neće promijeniti... nema nade.",
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
      tekst: "Nikada neću biti ranjiv/ranjiva",
      rane: ["strah", "sramota"],
      grijesi: ["ponos", "ljenost"],
      zastita: "od toga da me netko vidi slabog/slabu",
      zamjena: "dopustiti da me vidiš i voliš takvog/takvu kakav/kakva jesam"
    },
    {
      id: "sam_za_sebe",
      tekst: "Uvijek ću se sam/sama pobrinuti za sebe",
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
      tekst: "Uvijek ću biti jak/jaka i neću pokazati slabost",
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
      tekst: "Moram biti savršen/savršena da bih bio/bila voljen/voljena",
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
      tekst: "Uvijek ću biti dostupan/dostupna drugima",
      rane: ["odbacenost", "napustenost"],
      grijesi: ["ponos", "prozdrljivost"],
      zastita: "od toga da me netko napusti ako kažem ne",
      zamjena: "postaviti zdrave granice i vjerovati da time ne gubim ljubav"
    },
    {
      id: "odlazim_prvi",
      tekst: "Otići ću prvi/prva, prije nego što mene ostave",
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
      tekst: "Moram sam/sama sve razumjeti i razriješiti",
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
      oprastam: "svojim roditeljima za sve u čemu nisu bili ono što sam trebao/trebala",
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
      osudio: "one koji me nisu čuli kad sam govorio/govorila",
      tekst: "Nitko me nikada neće razumjeti",
      rane: ["zbunjenost", "napustenost"],
      oprastam: "onima koji me nisu čuli kad sam govorio/govorila",
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
        primjeri: ["...osjećam da moram sam/sama preuzeti kontrolu", "...mislim da se moram boriti za pravdu", "...ne vjerujem da će Bog intervenirati"]
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
};

// ── IZVEDENI INDEKSI ────────────────────────────────────────
// Grade se jednom pri učitavanju; aplikacija ih koristi za personalizaciju.
(function(D){
  D.ranaById = Object.fromEntries(D.smrtneRane.map(r => [r.id, r]));
  D.grijehById = Object.fromEntries(D.smrtniGrijesi.map(g => [g.id, g]));

  // Rane grijeha razriješi iz ID-eva u pune objekte (aplikacija čita r.id / r.naziv / r.laz)
  D.smrtniGrijesi.forEach(function(g){
    g.rane = (g.rane||[]).map(function(x){ return typeof x === 'string' ? D.ranaById[x] : x; }).filter(Boolean);
  });

  // Kompatibilnost: stari naziv polja znakovi[]
  D.znakovi = D.smrtneRane.map(function(r){ return { rana: r.id, znak: r.znakIscjeljenja }; });

  // rana → zavjeti / osude koji iz nje izviru
  D.zavjetiPoRani = {};
  D.osudePoRani = {};
  D.smrtneRane.forEach(r => { D.zavjetiPoRani[r.id] = []; D.osudePoRani[r.id] = []; });
  D.unutarnjiZavjeti.forEach(z => (z.rane||[]).forEach(id => D.zavjetiPoRani[id] && D.zavjetiPoRani[id].push(z)));
  D.gorkeOsude.forEach(o => (o.rane||[]).forEach(id => D.osudePoRani[id] && D.osudePoRani[id].push(o)));

  // Migracija starih ID-eva plodova (spremljena stabla iz v1)
  D.migracijaPlodova = {
    "perfectionism_l": "perfekcionizam_l",
    "gorčina": "gorcina",
    "gorčina_z": "gorcina_z",
    "ogorčenost": "ogorcenost",
    "tračanje": "tracanje",
    "emocionalna_hladnoća": "emocionalna_hladnoca",
    "hvalisanje_z": "umanjivanje",
    "pušenje": "pusenje",
    "trošenje_ekscesivno": "trosenje_ekscesivno",
    "nedovršenost": "nedovrsenost",
    "bijeg_od_tišine": "bijeg_od_tisine"
  };

  // Molitva odricanja od krive slike Boga — slijedi Schuchtsov lanac:
  // rana → tiha osuda roditelja → projekcija na Boga → odricanje → istina
  D.molitvaSlikeBoga = function(k){
    if (typeof k === 'string') {
      return "U ime Isusovo odričem se krive slike Boga: \u201C" + k + "\u201D. " +
             "Oče, oprosti mi što sam Te takvim zamišljao/zamišljala i pokaži mi svoje pravo lice. Amen.";
    }
    var t = "Oče, priznajem da sam Te u srcu držao/držala ovakvim: " + k.opis + "\n\n";
    if (k.projekcija) {
      var koga = (k.projekcija === 'majka') ? "svoju majku" : "svoga oca";
      var kome = (k.projekcija === 'majka') ? "svojoj majci" : "svome ocu";
      t += "Priznajem da ta slika ne dolazi od Tebe, nego iz moje rane. U srcu sam osudio/osudila " + koga +
           " i tu sam osudu nesvjesno prenio/prenijela na Tebe. U ime Isusovo opraštam " + kome +
           " i povlačim tu osudu. ";
    }
    t += "U ime Isusovo odričem se ove krive slike Boga i svake laži o Tebi koju je moje ranjeno srce povjerovalo. ";
    if (k.istina) t += "Proglašavam istinu da " + k.istina + ". ";
    return t + "Pokaži mi svoje pravo lice, kako mi Te je Isus objavio. Amen.";
  };

  // Molitva odricanja od unutarnjeg zavjeta (HWP, Appendix 1 — "Renouncing: Inner Vows")
  D.molitvaZavjeta = function(z){
    var tekst = (typeof z === 'string') ? z : z.tekst;
    var t = "Oče, priznajem da sam pokušavao/pokušavala spasiti sebe umjesto da se oslonim na Tebe za svoje spasenje. " +
            "Oprosti mi grijehe ponosa i samodostatnosti. Priznajem da me je moj trud da zaštitim samoga sebe ostavio " +
            "zatvorenog/zatvorenu iza zidova koji me sprječavaju da slobodno dajem i primam ljubav. " +
            "Želim biti slobodan/slobodna od ovog ropstva koje je došlo kao posljedica mojih vlastitih izbora.\n\n" +
            "U ime Isusovo odričem se unutarnjeg zavjeta: \u201C" + tekst + "\u201D.";
    if (typeof z !== 'string') {
      if (z.zastita) t += " Sklopio/sklopila sam ga da me zaštiti " + z.zastita + ".";
      if (z.zamjena) t += " Odričem se te lažne zaštite i biram " + z.zamjena + ".";
    }
    return t + " Molim Te da me sada oslobodiš od ropstva ovog zavjeta. Hvala Ti. Amen.";
  };

  // Skupna molitva odricanja od zavjeta — uvod jednom, pa svaki zavjet
  D.molitvaZavjetaSkupno = function(list){
    var t = "Oče, priznajem da sam pokušavao/pokušavala spasiti sebe umjesto da se oslonim na Tebe za svoje spasenje. " +
            "Oprosti mi grijehe ponosa i samodostatnosti. Priznajem da me je moj trud da zaštitim samoga sebe ostavio " +
            "zatvorenog/zatvorenu iza zidova koji me sprječavaju da slobodno dajem i primam ljubav. " +
            "Želim biti slobodan/slobodna od ovog ropstva koje je došlo kao posljedica mojih vlastitih izbora.\n";
    list.forEach(function(z){
      var tekst = (typeof z === 'string') ? z : z.tekst;
      t += "\nU ime Isusovo odričem se unutarnjeg zavjeta: \u201C" + tekst + "\u201D.";
      if (typeof z !== 'string') {
        if (z.zastita) t += " Sklopio/sklopila sam ga da me zaštiti " + z.zastita + ".";
        if (z.zamjena) t += " Odričem se te lažne zaštite i biram " + z.zamjena + ".";
      }
    });
    return t + "\n\nMolim Te da me sada oslobodiš od ropstva ovih zavjeta. Hvala Ti. Amen.";
  };

  // Skupna molitva odricanja od gorkih osuda
  D.molitvaOsudeSkupno = function(list){
    var t = "Oče, priznajem da sam osuđivao/osuđivala. Shvaćam da sam to činio/činila kako bih se zaštitio/zaštitila " +
            "od osjećaja ranjivosti i nemoći, da ne bih bio/bila ponovno povrijeđen/povrijeđena. " +
            "Shvaćam također da je osuda grijeh i da me drži vezanim/vezanom.\n";
    list.forEach(function(o){
      var tekst = (typeof o === 'string') ? o : o.tekst;
      var bogu  = (typeof o !== 'string') && o.premaBogu;
      t += "\nU ime Isusovo odričem se osude: \u201C" + tekst + "\u201D.";
      if (typeof o !== 'string') {
        if (bogu) t += " Molim Te za oprost što sam Te optuživao/optuživala i povlačim tu presudu.";
        else if (o.oprastam) t += " Opraštam " + o.oprastam + " i molim Te da mi daš svoje srce suosjećanja prema njima.";
        if (o.istina) t += " Proglašavam istinu da " + o.istina + ".";
      }
    });
    return t + "\n\nMolim Te da oslobodiš i mene i njih od ropstva ovih osuda i izolacije. Amen.";
  };

  // Molitva odricanja od gorke osude (HWP, Appendix 1 — "Renouncing: Judgments")
  // Slijedi obrazac iz knjige: priznanje → zašto sam osudio → oprost → odricanje → molba za Božje srce
  D.molitvaOsude = function(o){
    var tekst = (typeof o === 'string') ? o : o.tekst;
    var koga  = (typeof o === 'string') ? null : (o.premaBogu ? null : o.oprastam);   // dativ: "opraštam ..."
    var kogaA = (typeof o === 'string') ? null : (o.premaBogu ? null : o.osudio);     // akuzativ: "osudio sam ..."
    var bogu  = (typeof o !== 'string') && o.premaBogu;

    var t = "Oče, priznajem da sam osudio/osudila " + (bogu ? "Tebe" : (kogaA || "one koji su me povrijedili")) + ". " +
            "Shvaćam da sam to učinio/učinila kako bih se zaštitio/zaštitila od osjećaja ranjivosti i bespomoćnosti, " +
            "da ne bih bio/bila ponovno povrijeđen/povrijeđena. " +
            "Shvaćam također da je ta osuda grijeh i da me drži vezanim/vezanom.\n\n";

    if (bogu) {
      t += "Molim Te za oprost što sam Te optuživao/optuživala i povlačim tu presudu. ";
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
      t += "\n\nZnam da ne mogu sam/sama promijeniti svoje srce, pa Te molim da mi daš svoje srce suosjećanja prema " +
           (koga || "njima") + ".";
    }
    return t + " Amen.";
  };

})(window.TREE_DATA);
