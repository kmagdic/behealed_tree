
// ============================================================
// DRVO SPOZNAJE DOBRA I ZLA — Prošireni podatkovni model
// Na temelju: HWP Workbook (Dr. Bob Schuchts) + Be Healed
// ============================================================

window.TREE_DATA = {

  smrtniGrijesi: [
    {
      id: "ponos",
      naziv: "Ponos",
      ikona: "👑",
      idolatrija: "Vlastito ja",
      opis: "Idolatrija samog sebe, samopravednost, samopromocija",
      bojaBg: "#8B6B4A",
      bojaLight: "#C4A882",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...osjećam da moram sve kontrolirati", "...ne tražim Božju pomoć", "...mislim da znam bolje od drugih"]
      },
      rane: [
        { id: "odbacenost", naziv: "Odbačenost", laz: "Nisam voljen, ne trebaju me, nisam dovoljno dobar/dobra" },
        { id: "sramota", naziv: "Sramota", laz: "Loš/loša sam, prljav/prljava, to je moja krivica" },
        { id: "strah", naziv: "Strah", laz: "Ako budem ranjiv/ranjiva, bit će mi loše" }
      ],
      plodovi: [
        { id: "samopravednost", naziv: "Samopravednost" },
        { id: "samoobmana", naziv: "Samoobmana" },
        { id: "samopromocija", naziv: "Samopromocija" },
        { id: "osudjivanje", naziv: "Osuđivanje drugih" },
        { id: "kontrola", naziv: "Potreba za kontrolom" },
        { id: "hvalisanje", naziv: "Hvalisanje" },
        { id: "netolerantnost", naziv: "Netolerantnost" },
        { id: "perfekcionizam", naziv: "Perfekcionizam" },
        { id: "kriticizam", naziv: "Pretjerani kriticizam" },
        { id: "neprihvacanje_kritike", naziv: "Ne prihvaćam kritiku" },
        { id: "usporedivanje", naziv: "Stalno se uspoređujem" },
        { id: "manipulacija", naziv: "Manipulacija drugima" },
        { id: "tvrdoglavost", naziv: "Tvrdoglavost/Samovolja" },
        { id: "distanciranost", naziv: "Emocionalna distanciranost" }
      ],
      krepost: { naziv: "Poniznost", opis: "Poniznost pobjeđuje ponos" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Ponosa i idolatrije samoga sebe. Odričem se samopravednosti, samoobmane i samopromocije. Molim Te za oprost, Gospodine, i umjesto toga biram da se ponizim pred Tobom.",
      znakIscjeljenja: "Poniznost i sloboda od potrebe da dokazujem svoju vrijednost"
    },
    {
      id: "zavist",
      naziv: "Zavist",
      ikona: "👁️",
      idolatrija: "Status ili posjedi",
      opis: "Idolatrija statusa, položaja ili onoga što drugi imaju",
      bojaBg: "#4A6B5A",
      bojaLight: "#82A892",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...uspoređujem se s drugima", "...osjećam se manje vrijednim", "...pokušavam dokazati svoju vrijednost"]
      },
      rane: [
        { id: "odbacenost", naziv: "Odbačenost", laz: "Nisam voljen, ne trebaju me, nisam dovoljno dobar/dobra" },
        { id: "beznade", naziv: "Beznađe", laz: "Ništa se nikada neće promijeniti, nema nade" },
        { id: "zbunjenost", naziv: "Zbunjenost", laz: "Ne razumijem što se događa sa mnom" }
      ],
      plodovi: [
        { id: "ljubomora", naziv: "Ljubomora" },
        { id: "zlovolja", naziv: "Zlovolja prema uspjehu drugih" },
        { id: "ogovaranje", naziv: "Ogovaranje" },
        { id: "podrivanje", naziv: "Podrivanje/Sabotaža drugih" },
        { id: "nezahvalnost", naziv: "Nezahvalnost" },
        { id: "usporedivanje_z", naziv: "Opsesivno uspoređivanje" },
        { id: "kopiranje", naziv: "Imitiranje tuđeg života" },
        { id: "pohlepa_status", naziv: "Pohlepa za statusom" },
        { id: "gorčina_z", naziv: "Gorčina prema uspješnima" },
        { id: "hvalisanje_z", naziv: "Umanjivanje tuđih dostignuća" },
        { id: "kompetitivnost", naziv: "Nezdrava kompetitivnost" },
        { id: "financijska_usporedba", naziv: "Uspoređivanje financija/imovine" }
      ],
      krepost: { naziv: "Ljubaznost", opis: "Ljubaznost pobjeđuje zavist" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Zavisti i idolatrije položaja i statusa. Odričem se pohlepe za onim što drugi imaju i povlačenja drugih dolje. Molim Te za oprost, Gospodine, i biram umjesto toga zadovoljstvo i ljubaznost prema bližnjima.",
      znakIscjeljenja: "Radost zbog tuđeg uspjeha, zahvalnost za vlastite darove"
    },
    {
      id: "ljutnja",
      naziv: "Ljutnja",
      ikona: "🔥",
      idolatrija: "Kontrola",
      opis: "Idolatrija kontrole, moći ili pravde",
      bojaBg: "#8B3A3A",
      bojaLight: "#C48282",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...osjećam da moram sam/sama preuzeti kontrolu", "...mislim da moram boriti za pravdu", "...ne vjerujem da će Bog intervenirati"]
      },
      rane: [
        { id: "odbacenost", naziv: "Odbačenost", laz: "Nisam voljen, nisam važan/važna" },
        { id: "strah", naziv: "Strah", laz: "Ako budem ranjiv/ranjiva, bit ću povrijeđen/a. Moram se zaštititi." },
        { id: "bespomoćnost", naziv: "Bespomoćnost", laz: "Osjećam se preplavljeno... sve je izvan kontrole" }
      ],
      plodovi: [
        { id: "samopravednost_l", naziv: "Samopravednost" },
        { id: "gorčina", naziv: "Gorčina" },
        { id: "ogorčenost", naziv: "Ogorčenost/Ogorčenje" },
        { id: "depresija", naziv: "Depresija" },
        { id: "pasivna_agresija", naziv: "Pasivna agresija" },
        { id: "tračanje", naziv: "Tračanje/Sarkazam" },
        { id: "osveta", naziv: "Osvetoljubivost" },
        { id: "nasilje_verbalno", naziv: "Verbalno nasilje" },
        { id: "izolacija", naziv: "Povlačenje/Izolacija" },
        { id: "kontroliranje", naziv: "Kontroliranje ponašanja" },
        { id: "emocionalna_hladnoća", naziv: "Emocionalna hladnoća" },
        { id: "perfectionism_l", naziv: "Perfekcionizam" },
        { id: "kriticizam_l", naziv: "Oštar kriticizam" },
        { id: "nestrpljivost", naziv: "Kronična nestrpljivost" },
        { id: "eksplozivnost", naziv: "Eksplozivni ispadi bijesa" }
      ],
      krepost: { naziv: "Strpljenje", opis: "Strpljenje pobjeđuje ljutnju" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Ljutnje i idolatrije moći, kontrole i pravde. Odričem se gorčine, osuđivanja i odmazde. Molim Te za oprost, Gospodine, i biram umjesto toga kreposti strpljenja i trpljenja, da blagoslivljam one koji su me povrijedili.",
      znakIscjeljenja: "Mir i sloboda od potrebe za kontrolom, sposobnost opraštanja"
    },
    {
      id: "pohota",
      naziv: "Bludnost",
      ikona: "💔",
      idolatrija: "Odnosi",
      opis: "Idolatrija seksa, romantike ili odnosa",
      bojaBg: "#7A3A6B",
      bojaLight: "#B882A8",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...tražim ljubav na pogrešnim mjestima", "...koristim druge za vlastito zadovoljstvo", "...ne vjerujem da Bog može ispuniti moju potrebu za ljubavlju"]
      },
      rane: [
        { id: "odbacenost", naziv: "Odbačenost", laz: "Nisam voljen, ne trebaju me, nisam poželjno/a" },
        { id: "sramota", naziv: "Sramota", laz: "Loš/loša sam, prljav/prljava, bezvrijedan/a" },
        { id: "napustenost", naziv: "Napuštenost", laz: "Sam/sama sam, nitko me ne razumije ni ne brine za mene" }
      ],
      plodovi: [
        { id: "bludnost", naziv: "Bludnost/Promiskuitet" },
        { id: "pornografija", naziv: "Pornografija" },
        { id: "opsesivni_odnosi", naziv: "Opsesivni romantični odnosi" },
        { id: "masturb", naziv: "Kompulzivna masturbacija" },
        { id: "emotionalni_aff", naziv: "Emocionalne afere" },
        { id: "seksualna_fantazija", naziv: "Seksualne fantazije/Maštanje" },
        { id: "preljub", naziv: "Preljub" },
        { id: "manipulacija_p", naziv: "Manipulacija u vezama" },
        { id: "ovisnost_o_ljubavi", naziv: "Ovisnost o ljubavi/odobravanju" },
        { id: "flert", naziv: "Pretjerani flert" },
        { id: "seks_kao_bijeg", naziv: "Seks kao bijeg od boli" },
        { id: "idolizacija_partnera", naziv: "Idolizacija partnera" }
      ],
      krepost: { naziv: "Čistoća", opis: "Čistoća pobjeđuje bludnost" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Pohote i idolatrije seksa i odnosa. Odričem se sveg nemoralnog ponašanja i pornografije. Molim Te za oprost, Gospodine, i biram umjesto toga kreposti čistoće.",
      znakIscjeljenja: "Čistoća srca, zdravi odnosi utemeljeni na ljubavi"
    },
    {
      id: "proždrljivost",
      naziv: "Proždrljivost",
      ikona: "🍷",
      idolatrija: "Hrana ili piće",
      opis: "Idolatrija hrane, pića ili droga",
      bojaBg: "#6B5A3A",
      bojaLight: "#A8926B",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...tješim se hranom ili pićem", "...izbjegavam bol kroz konzumaciju", "...hrana postaje moj 'bog'"]
      },
      rane: [
        { id: "napustenost", naziv: "Napuštenost", laz: "Sam/sama sam, nitko me ne razumije" },
        { id: "beznade", naziv: "Beznađe", laz: "Nema nade, ništa se neće promijeniti" },
        { id: "bespomoćnost", naziv: "Bespomoćnost", laz: "Ne mogu se promijeniti, zarobljen/a sam" }
      ],
      plodovi: [
        { id: "prejedanje", naziv: "Prejedanje" },
        { id: "alkoholizam", naziv: "Prekomjerno pijenje alkohola" },
        { id: "droge", naziv: "Ovisnost o drogama" },
        { id: "samoindulgencija", naziv: "Samoindulgencija" },
        { id: "emocionalno_jedenje", naziv: "Emocionalno jedenje" },
        { id: "dijete_ciklusi", naziv: "Ciklusi dijeta/prejedanja" },
        { id: "bulimija_an", naziv: "Poremećaji hranjenja" },
        { id: "kava_slatkisi", naziv: "Ovisnost o kavi/slatkišima" },
        { id: "pušenje", naziv: "Pušenje/nikotinska ovisnost" },
        { id: "ekrani", naziv: "Ovisnost o ekranima/internetu" },
        { id: "kupovanje", naziv: "Kompulzivno kupovanje" }
      ],
      krepost: { naziv: "Umjerenost", opis: "Umjerenost i post pobjeđuju proždrljivost" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Proždrljivosti i idolatrije hrane, pića i droga. Molim Te za oprost, Gospodine, i biram umjesto toga umjerenost i post.",
      znakIscjeljenja: "Sloboda od kompulzivnog jedenja/pijenja, tješenje u Bogu"
    },
    {
      id: "pohlepa",
      naziv: "Pohlepa",
      ikona: "💰",
      idolatrija: "Sigurnost ili bogatstvo",
      opis: "Idolatrija sigurnosti, bogatstva ili novca",
      bojaBg: "#4A5A3A",
      bojaLight: "#82926B",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...ne vjerujem da će Bog brinuti za mene", "...skupljam dobra kao zaštitu", "...novac postaje moja sigurnost"]
      },
      rane: [
        { id: "strah", naziv: "Strah", laz: "Neću biti zaštićen/a, moram se pobrinuti sam/sama za sebe" },
        { id: "bespomoćnost", naziv: "Bespomoćnost", laz: "Nemam kontrole, preplavljuje me osjećaj nemoći" },
        { id: "napustenost", naziv: "Napuštenost", laz: "Sam/sama sam, nitko se ne brine za mene" }
      ],
      plodovi: [
        { id: "skrtost", naziv: "Škrtost/Gomilanje" },
        { id: "kradja", naziv: "Krađa/Prijevara" },
        { id: "iskoristavanje", naziv: "Iskorištavanje drugih" },
        { id: "materijalizm", naziv: "Materijalizam" },
        { id: "workaholic", naziv: "Radoholizam radi novca" },
        { id: "rizik_financ", naziv: "Riskantne financijske odluke" },
        { id: "laganje_novac", naziv: "Laganje o financijama" },
        { id: "nezdrava_stednja", naziv: "Opsesivna štednja/kontrola" },
        { id: "trošenje_ekscesivno", naziv: "Ekscesivno trošenje" },
        { id: "statusni_simboli", naziv: "Opsesija statusnim simbolima" }
      ],
      krepost: { naziv: "Darežljivost", opis: "Darežljivost pobjeđuje pohlepu" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Pohlepe i idolatrije sigurnosti, bogatstva i novca. Molim Te za oprost, Gospodine, i biram umjesto toga darežljivost i povjerenje u Tvoju opskrbu.",
      znakIscjeljenja: "Sloboda od straha od nedostatka, radost u davanju"
    },
    {
      id: "ljenost",
      naziv: "Lijenost",
      ikona: "😴",
      idolatrija: "Ugoda",
      opis: "Idolatrija ugode i lakoće",
      bojaBg: "#4A4A6B",
      bojaLight: "#82829A",
      korijen: {
        naziv: "Bezbožno oslanjanje na sebe",
        opis: "Oslanjam se na sebe kada...",
        primjeri: ["...izbjegavam odgovornost", "...odustajem kad je teško", "...tražim lagodan put"]
      },
      rane: [
        { id: "beznade", naziv: "Beznađe", laz: "Ništa se neće promijeniti, trud nema smisla" },
        { id: "bespomoćnost", naziv: "Bespomoćnost", laz: "Ne mogu ništa promijeniti, zarobljen/a sam" },
        { id: "zbunjenost", naziv: "Zbunjenost", laz: "Ne znam što se događa sa mnom, ne razumijem" }
      ],
      plodovi: [
        { id: "prokrastinacija", naziv: "Prokrastinacija" },
        { id: "odustajanje", naziv: "Lako odustajem" },
        { id: "pasivnost", naziv: "Pasivnost" },
        { id: "duhovna_mlakost", naziv: "Duhovna mlakost" },
        { id: "izbjegavanje", naziv: "Izbjegavanje odgovornosti" },
        { id: "ekrani_l", naziv: "Gubljenje vremena na ekranima" },
        { id: "zanemarivanje_odnosa", naziv: "Zanemarivanje odnosa" },
        { id: "nedovršenost", naziv: "Nedovršeni projekti" },
        { id: "kasnjenje", naziv: "Kronično kašnjenje" },
        { id: "minimalan_napor", naziv: "Minimalan napor u svemu" },
        { id: "bijeg_od_tišine", naziv: "Bijeg od tišine i refleksije" }
      ],
      krepost: { naziv: "Marljivost", opis: "Marljivost i ustrajnost pobjeđuju lijenost" },
      molitvaOdricanja: "U ime Isusa Krista, odričem se grijeha Lijenosti i idolatrije ugode i lažnog odmora. Molim Te za oprost, Gospodine, i biram umjesto toga marljivost i ustrajnost.",
      znakIscjeljenja: "Energija i radost u služenju, sloboda od pasivnosti"
    }
  ],

  smrtneRane: [
    {
      id: "napustenost",
      naziv: "Napuštenost",
      laz: "Sam/sama sam. Nitko me ne razumije. Nitko se ne brine za mene.",
      znakIscjeljenja: "Povezanost i razumijevanje zamjenjuje napuštenost",
      molitva: "U ime Isusa Krista, odričem se laži da sam sam/sama, da me nitko ne razumije niti brine za mene. Odričem se laži da sam nezaštićen/nezaštićena i da me je Bog napustio.\n\nU Isusovo ime, proglašavam istinu da mi je sam Isus obećao: 'Nikada te neću ostaviti niti napustiti' (Heb 13,5); 'Ja sam s vama u sve dane do svršetka svijeta' (Mt 28). Proglašavam istinu da sam povezan/a i razumom shvaćen/a i duboko voljen/a. Proglašavam istinu da sam u svetoj pričesti sjedinjen/a s Kristom i zajednicom Svetih. Uvijek su sa mnom, tako da nikad nisam sam/sama."
    },
    {
      id: "sramota",
      naziv: "Sramota",
      laz: "Loš/loša sam, prljav/prljava, izopačen/a... to je moja krivica.",
      znakIscjeljenja: "Čisto i vrijedno zamjenjuje sramotu",
      molitva: "U ime Isusa Krista, odričem se laži da sam loš/loša, prljav/prljava, glup/glupa, bezvrijedan/bezvrijedna, izopačen/a...\n\nU Isusovo ime, proglašavam istinu da je Isus umro za moje grijehe i da sam oprošten/a, opran/a, čist/čista, opravdan/a i prihvaćen/a (1 Kor 6). Proglašavam istinu da Isus nije došao osuditi me nego spasiti me (Iv 3,17-21; Rim 8,1). Proglašavam istinu da sam čist/čista i vrijedan/vrijedna, ne zbog onoga što sam učinio/učinila, nego zbog onoga što je Isus učinio za mene."
    },
    {
      id: "strah",
      naziv: "Strah",
      laz: "Ako budem ranjiv/ranjiva, bit ću povrijeđen/a ili ću umrijeti.",
      znakIscjeljenja: "Sigurnost i zaštita zamjenjuje strah",
      molitva: "U ime Isusa Krista, odričem se laži da ću biti povrijeđen/a ako budem ranjiv/a. U Isusovo ime, odričem se svakog straha, tjeskobe, nepovjerenja i sumnje.\n\nU Isusovo ime, proglašavam istinu da je Bog moja stijena, moja tvrđava, moj izbavitelj i moj zaštitnik (Ps 23, 27, 91). Proglašavam istinu da savršena Božja ljubav istjeruje svaki strah (1 Iv 4,18). Proglašavam istinu da sam siguran/sigurna i zaštićen/zaštićena."
    },
    {
      id: "bespomoćnost",
      naziv: "Bespomoćnost",
      laz: "Osjećam se preplavljeno... ne znam što učiniti... sve je izvan kontrole.",
      znakIscjeljenja: "Osnažen i oslobođen zamjenjuje bespomoćnost",
      molitva: "U ime Isusa Krista, odričem se laži da sam nemoćan/nemoćna, slab/slaba, nesposoban/nesposobna za promjenu.\n\nU Isusovo ime, proglašavam istinu da mi je Isus obećao da je Njegova milost savršena u mojoj slabosti (2 Kor 12,8-10). Proglašavam istinu da 'sve mogu u Kristu koji me osnažuje' (Fil 4,13). Proglašavam istinu da sam osnažen/a po Kristu i oslobođen/a po Duhu Svetom."
    },
    {
      id: "odbacenost",
      naziv: "Odbačenost",
      laz: "Nisam voljen/a niti poželjan/a... nemam vrijednosti.",
      znakIscjeljenja: "Prihvaćen i cijenjen zamjenjuje odbačenost",
      molitva: "U ime Isusa Krista, odričem se laži da sam nevoljen/nevoljena i nevoljiv/nevoljiiva. Odričem se laži da me ne žele, ne trebaju i da nisam dovoljno dobar/dobra.\n\nU Isusovo ime, proglašavam istinu da sam na temelju svog krštenja ljubljeni sin/ljubljena kći Oca. Proglašavam istinu da me On toliko voli da je Isus dao svoj život za mene (Iv 15). Proglašavam istinu da sam voljen/a i cijenjen/a, poželjan/a i poželjno/a, i da sam drag/draga u Očevim očima."
    },
    {
      id: "beznade",
      naziv: "Beznađe",
      laz: "Ništa se nikada neće promijeniti... nema nade.",
      znakIscjeljenja: "Nada i ohrabrenje zamjenjuje beznađe",
      molitva: "U ime Isusa Krista, odričem se laži da se ništa nikada ne mijenja i da nikada neću imati ono što želim.\n\nU Isusovo ime, proglašavam istinu da je moja nada čvrsta u Kristu i da On čini sve stvari nove (Iv 21,5). Proglašavam istinu da se preobražavam od slave do slave u lik Kristov (2 Kor 3,18) i da Bog radi u meni — ono što On začne dovest će do kraja (Fil 1,6). Zato sam ispunjen/ispunjena nadom u dobra koja dolaze."
    },
    {
      id: "zbunjenost",
      naziv: "Zbunjenost",
      laz: "Ne znam što se događa sa mnom. Ne razumijem ništa.",
      znakIscjeljenja: "Razumijevanje i prosvjetljenje zamjenjuje zbunjenost",
      molitva: "U ime Isusa Krista, odričem se laži da je sve zbrkano, da ništa ne razumijem i da je na meni da sam/sama sve razriješim.\n\nU Isusovo ime, proglašavam istinu da imam Kristov um (1 Kor 2,16) i da Duh Sveti otkriva sve što trebam znati (1 Kor 1,7). Proglašavam istinu da Gospodin daje mudrost i razumijevanje svakome tko traži (Jak 1,5). Proglašavam istinu da imam razumijevanje i prosvjetljenje od Gospodina."
    }
  ],

  unutarnjeZavjete: [
    "Nikada neću biti kao moja majka/otac/brat/sestra/zlostavljač",
    "Neću nikome vjerovati niti biti ranjiv/a",
    "Uvijek ću se sam/sama pobrinuti za sebe",
    "Nikada više neću dopustiti da me netko povrijedi",
    "Uvijek ću biti jak/jaka i neću pokazivati slabost",
    "Nikada neću tražiti pomoć od nikoga",
    "Moram biti savršen/a da bih bio/bila voljen/a",
    "Neću nikad dopustiti da me netko kontrolira",
    "Uvijek ću biti dostupan/a drugima (neću imati vlastite granice)",
    "Nikad neću biti ranjiv/a u ljubavi",
    "Neću nikad pokazati da me nešto boli",
    "Ostalo (vlastito)"
  ],

  unutarnjeOsude: [
    "Muškarci su sebični/opasni",
    "Žene se ne može vjerovati",
    "Život je opasan i nepravedan",
    "Bog me je napustio/kaznio",
    "Bog je strog i kažnjavajući",
    "Ljubav uvijek boli i završava",
    "Uvijek ću biti sam/sama",
    "Nikad ne mogu dobiti ono što trebam",
    "Autoriteti uvijek zlouporabe moć",
    "Crkva je licemjerna",
    "Svi na kraju odlaze",
    "Ostalo (vlastito)"
  ],

  znakovi: [
    { rana: "napustenost", znak: "Povezanost i razumijevanje" },
    { rana: "sramota", znak: "Čisto i vrijedno" },
    { rana: "strah", znak: "Sigurno i zaštićeno" },
    { rana: "bespomoćnost", znak: "Osnažen i oslobođen" },
    { rana: "odbacenost", znak: "Prihvaćen i cijenjen" },
    { rana: "beznade", znak: "Nada i ohrabrenje" },
    { rana: "zbunjenost", naziv: "Zbunjenost", znak: "Razumijevanje i prosvjetljenje" }
  ]
};
