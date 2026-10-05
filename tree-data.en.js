// ============================================================
// TREE OF LIFE — engleski sadržaj
// Ista struktura i ISTI ID-evi kao tree-data.hr.js; mijenjaju se samo tekstovi.
// Terminologija prema HWP Workbooku (Schuchts): Seven Deadly Wounds,
// Ungodly Self-Reliance, Inner Vows, Bitter Root Judgments, Seven Signs of Healing.
// Molitve su vjerna parafraza, ne doslovni tekst workbooka.
// ============================================================

window.JEZICI = window.JEZICI || {};
window.JEZICI.en = {
  kod: "en",
  oznaka: "EN",
  naslov: "Tree of Life",

  // ── TEKST SUČELJA ───────────────────────────────────────────
  ui: {
    koraci: ["Sin", "Fruit", "Wounds", "Vows", "Review"],
    natrag: "Back",
    dalje: "Next →",
    uredi: "Edit",
    josN: n => `+ ${n} more`,
    odaberiPrepoznate: "Choose the ones you recognize",
    izviruIzRane: v => `Springs from the wound: ${v}`,
    prioritet: p => `Priority: ${p}/3 — click to change`,

    zaglavlje: {
      podnaslov: "Healing the whole person",
      imeStabla: "Tree name",
      promijeniIme: "Click to rename",
      obrisiStablo: "Delete tree",
      svaStabla: "All trees",
      novo: "New",
      jezik: "Language"
    },

    panel: {
      naslov: n => `Tree — ${n}`,
      prazno: "Your tree grows here...",
      uputa: "Fill in the steps on the left\nto see your tree...",
      manje: "Smaller tree",
      vece: "Larger tree"
    },

    k1: {
      oznaka: "Step 1 — Trunk",
      naslov: "What is your primary deadly sin?",
      tijelo: "Think about the sins you keep returning to. Which pattern is strongest in your life?",
      citat: "\"Every tree is known by its own fruit.\"",
      citatIzvor: "— Luke 6:44"
    },

    k2: {
      oznaka: "Step 2 — Fruit (branches)",
      naslov: "How does this sin show itself in your life?",
      tijelo: "Write in your own words what you notice in yourself.",
      poticaj: "Write what you notice in yourself... e.g. I withdraw when someone corrects me in front of others, I use sarcasm, I try to control people... If a particular situation comes to mind, feel free to describe it.",
      prijedlozi: "+ See suggestions",
      cestiPlodovi: n => `✦ Common fruit — ${n}`,
      josPlodova: n => `+ ${n} more from the list`,
      oznaceno: n => `${n} selected — click ●○○ to set priority`
    },

    k3: {
      oznaka: "Step 3 — Wounds (roots)",
      naslov: "Which wounds lie behind this sin?",
      citat: "\"When God looks at sin, He sees the pain within us.\"",
      citatIzvor: "— St. Julian of Norwich",
      tijelo: "If you can, recall **one specific moment** — healing usually comes through a particular memory rather than a general impression. But write only as much as you are able to right now.",
      poticaj: "Describe your wound... What painful event or experience lies behind this pattern? If you remember one particular moment, start there. What did you come to believe about yourself then?",
      najcesce: n => `✦ Most common wounds — ${n}`,
      ostale: "+ Other wounds",
      odabrane: "Selected wounds — deepest first",
      komentar: "Add a note about this wound, e.g. a specific situation (optional)..."
    },

    k4: {
      oznaka: "Step 4 — Deep roots",
      naslov: "Vows and bitter judgments",
      tijelo: "In our wounds we make decisions to protect ourselves — **inner vows**. We also **judge** others, or God, in response to the pain.",
      istaknuto: n => `Suggestions that spring from your wounds are highlighted: **${n}**. The others are dimmed, but you can still choose them.`,
      zavjeti: "⛓ Inner vows",
      zavjetPoticaj: "Write your own vow... e.g. 'I'll never show weakness', 'I'll always take care of myself'... You may also remember the moment you made it.",
      prijedloziZavjeta: "+ Suggested vows",
      osude: "🪨 Bitter judgments",
      osudaPoticaj: "Write your own judgment... e.g. 'Men are selfish', 'I can never get what I need'... You may also remember who it was spoken against in your heart.",
      prijedloziOsuda: "+ Suggested judgments",
      slikaBoga: "🕊 False images of God",
      slikaBogaUvod: "From a wound in the heart we judge a parent — and then unknowingly transfer that judgment onto God. Do you recognize a God like this in your heart, even if you know it isn't true?",
      djetinjstvo: "A childhood wound (optional)",
      djetinjstvoPoticaj: "Describe an event in which you were wounded. What happened? How old were you, and who was with you...",
      staSeDogodi: "+ What most often happens",
      tipA: "**Love withheld** — what we did _not_ receive. It is the most common, and the easiest to overlook.",
      tipB: "**Harm** — what _happened_ to us.",
      dalje: "Review →"
    },

    k5: {
      oznaka: "Step 5 — Review",
      naslov: n => `Tree of ${n}`,
      tijelo: "Everything you entered — sorted by priority.",
      plodovi: "🌿 Fruit",
      grijeh: "🌳 Sin",
      rane: "🌱 Wounds",
      zavjeti: "⛓️ Vows",
      osude: "🪨 Bitter judgments",
      djetinjstvo: "📖 Childhood wound",
      dalje: "Prayers ✝"
    },

    ispis: {
      grijeh: n => `🌳 Sin: ${n}`,
      osude: "🪨 Judgments",
      slikaBoga: "🕊 False images of God",
      molitve: "✝ Prayers for healing"
    },

    molitve: {
      naslov: "✝ Prayers for healing",
      naTemelju: n => `Based on your tree — ${n}`,
      odricanje: n => `Renouncing: ${n}`,
      iscjeljenje: n => `Healing: ${n}`,
      zavjeti: "Renouncing inner vows",
      osude: "Renouncing bitter judgments",
      slikaBoga: "Renouncing a false image of God",
      znakovi: "Signs of healing",
      sakrament: (s, i, p) => `Sacrament: **${s}** · Identity: ${i} · Mission: ${p}`,
      krepost: (n, o) => `Virtue: ${n} — ${o}`,
      ispisi: "Print"
    },

    pocetna: {
      naslov: "Tree\n_of Life_",
      opis: "An interactive spiritual journal based on _Be Healed_ by Dr. Bob Schuchts — with a guide that helps you discover the connections between sin and wounds.",
      citat: "\"Every tree is known by its own fruit. For figs are not gathered from thorns, nor are grapes picked from a bramble bush.\"",
      citatIzvor: "— Luke 6:44",
      izgradi: "Grow a new tree",
      mojaStablaN: n => `My trees (${n})`
    },

    stabla: {
      naslov: "My trees",
      opis: "One tree for each deadly sin you recognize.",
      novo: "New tree",
      dovrseno: "✓ Completed",
      korak: n => `Step ${n}/5`
    },

    obavijest: {
      potvrdiBrisanje: "Delete this tree? This cannot be undone.",
      obrisano: "Tree deleted",
      dovrseno: "Tree completed ✓"
    }
  },

  // ── SADRŽAJ ─────────────────────────────────────────────────
  data: {

    deblo: {
      naziv: "Ungodly self-reliance",
      opis: "Beneath every deadly sin lies the same decision: I will save myself. When the wound hurt, instead of turning to the Father, I turned to myself — to my own strength, my own control, my own comfort.",
      pitanje: "I rely on myself instead of God when..."
    },

    // `istina` se nastavlja na "I proclaim the truth that…"
    kriveSlikeBoga: [
      { id:"kb_nadzornik", izvor:"schuchts", naziv:"The cruel taskmaster", projekcija:"otac",
        opis:"A God who always demands more, and for whom I am never good enough.",
        rane:["sramota","odbacenost"], istina:"Your yoke is easy and Your burden light (Mt 11:30), and that I do not have to earn Your love" },
      { id:"kb_nikad_tu", izvor:"schuchts", naziv:"A God who is never there for me", projekcija:"otac",
        opis:"When I need Him most, He is not there.",
        rane:["napustenost","beznade"], istina:"You are near to all who call on You (Ps 145:18) and that You will never leave me (Heb 13:5)" },
      { id:"kb_okrenuo_se", izvor:"izvedeno", naziv:"A God who cannot be trusted", projekcija:"otac",
        opis:"He was good, and then He turned — just like the one who left.",
        rane:["napustenost","strah"], istina:"You are faithful and remain faithful even when I am not (2 Tim 2:13)" },
      { id:"kb_zasluziti", izvor:"izvedeno", naziv:"A God whose love I must earn", projekcija:"otac",
        opis:"I try hard to please Him, but it never feels like enough.",
        rane:["odbacenost","sramota"], istina:"Your grace is a free gift and not a wage for my works (Eph 2:8-9)" },

      { id:"kb_nemocni", izvor:"tipologija", naziv:"A powerless god", projekcija:null,
        opis:"A God who cannot change this world or carry out His purposes.",
        rane:["bespomoćnost","beznade"], istina:"nothing is impossible for You (Lk 1:37)" },
      { id:"kb_okrutni", izvor:"tipologija", naziv:"A merciless and cruel god", projekcija:null,
        opis:"A God who punishes without mercy.",
        rane:["sramota","strah"], istina:"You punish evil, yet You are merciful and gracious, slow to anger (Ps 103:8)" },
      { id:"kb_nezainteresirani", izvor:"tipologija", naziv:"An indifferent god", projekcija:null,
        opis:"A God who has neither the time nor the will to care for me.",
        rane:["napustenost","odbacenost"], istina:"You care for me and that I can cast all my cares on You (1 Pet 5:7)" },
      { id:"kb_trgovacki", izvor:"tipologija", naziv:"A bargaining god", projekcija:null,
        opis:"A God you have to haggle with, and for whom everything comes at a high price.",
        rane:["odbacenost","sramota"], istina:"You give without bargaining — by grace we have been saved (Eph 2:8)" },
      { id:"kb_magijski", izvor:"tipologija", naziv:"A magical god", projekcija:null,
        opis:"A God who is moved by formulas and rituals.",
        rane:["strah","bespomoćnost"], istina:"You are a Person who loves me, not a force to be managed" },
      { id:"kb_demonizirani", izvor:"tipologija", naziv:"A demonized god", projekcija:null,
        opis:"The most destructive image — a god who hates, lies and kills.",
        rane:["sramota","strah"], istina:"You are love (1 Jn 4:8), and that the liar and murderer is the other one (Jn 8:44)" },
      { id:"kb_sekularizirani", izvor:"tipologija", naziv:"A secularized god", projekcija:null,
        opis:"Worldly things take on divine qualities.",
        rane:["beznade","napustenost"], istina:"only You can fill the heart You created for Yourself" },
      { id:"kb_cudljivi", izvor:"tipologija", naziv:"An unreliable and moody god", projekcija:null,
        opis:"A being who is not always in a good mood — I never know where I stand.",
        rane:["strah","zbunjenost"], istina:"You are the same yesterday, today and forever (Heb 13:8)" },
      { id:"kb_moralizirajuci", izvor:"tipologija", naziv:"A moralizing god", projekcija:null,
        opis:"Keeps a petty watch over the keeping of the commandments.",
        rane:["sramota","strah"], istina:"You look at the heart, not only at the deed (1 Sam 16:7)" },
      { id:"kb_mrzovoljni", izvor:"tipologija", naziv:"An overly serious and sullen god", projekcija:null,
        opis:"Distant, displeased, without joy.",
        rane:["odbacenost","sramota"], istina:"You rejoice over me and exult over me with singing (Zeph 3:17)" }
    ],

    raneDjetinjstva: [
      { id:"d_nisam_radost",   tip:"A", tekst:"No one let me know that I was a joy to them", rane:["odbacenost","napustenost"] },
      { id:"d_nisam_slavljen", tip:"A", tekst:"I was not cherished and celebrated for who I am", rane:["odbacenost","sramota"] },
      { id:"d_neshvacen",      tip:"A", tekst:"No one truly understood me", rane:["napustenost","zbunjenost"] },
      { id:"d_bez_granica",    tip:"A", tekst:"I was not given boundaries or proper discipline", rane:["bespomoćnost","zbunjenost"] },
      { id:"d_bez_darova",     tip:"A", tekst:"I wasn't allowed to develop my gifts and interests", rane:["bespomoćnost","beznade"] },
      { id:"d_srcem_odsutni",  tip:"A", tekst:"My parents were physically present but absent in heart", rane:["napustenost","odbacenost"] },
      { id:"d_bez_osjecaja",   tip:"A", tekst:"Feelings were never shown or talked about in our home", rane:["napustenost","sramota"] },
      { id:"d_samo_uspjeh",    tip:"A", tekst:"I was praised only for achievement, not for who I am", rane:["odbacenost","sramota"] },
      { id:"d_bez_utjehe",     tip:"A", tekst:"No one comforted me when I cried", rane:["napustenost","bespomoćnost"] },
      { id:"d_prerano_odrastao",tip:"A",tekst:"I had to grow up too early and take care of others", rane:["bespomoćnost","napustenost"] },

      { id:"d_odlazak_roditelja", tip:"B", tekst:"A parent left, or my parents divorced", rane:["napustenost","odbacenost"] },
      { id:"d_smrt",              tip:"B", tekst:"The death of someone close to me in childhood", rane:["napustenost","beznade"] },
      { id:"d_nasilje",           tip:"B", tekst:"Physical violence in the family", rane:["strah","bespomoćnost"] },
      { id:"d_vrijedjanje",       tip:"B", tekst:"Yelling, insults and belittling", rane:["sramota","strah"] },
      { id:"d_zlostavljanje",     tip:"B", tekst:"Sexual abuse or violation of my boundaries", rane:["sramota","bespomoćnost","strah"] },
      { id:"d_svjedok",           tip:"B", tekst:"I watched someone else being hurt", rane:["strah","bespomoćnost"] },
      { id:"d_vrsnjaci",          tip:"B", tekst:"Bullying or being excluded by peers", rane:["odbacenost","sramota"] },
      { id:"d_ovisnost",          tip:"B", tekst:"Alcohol or addiction in the family", rane:["strah","zbunjenost","bespomoćnost"] },
      { id:"d_bolest",            tip:"B", tekst:"Serious illness — my own or in the family", rane:["strah","bespomoćnost"] },
      { id:"d_usporedjivan",      tip:"B", tekst:"I was constantly compared with a sibling or others", rane:["odbacenost","sramota"] },
      { id:"d_nepredvidiv",       tip:"B", tekst:"A parent was unpredictable — I never knew what was coming", rane:["strah","zbunjenost"] },
      { id:"d_prekrsena_obecanja",tip:"B", tekst:"Promises made to me were constantly broken", rane:["beznade","napustenost"] }
    ],

    smrtneRane: [
      {
        id: "napustenost",
        naziv: "Abandonment",
        laz: "I am all alone. No one understands me. No one cares for me.",
        opis: "This wound forms when the one who should have been present was not — physically or in heart. It doesn't take a departure; absence is enough.",
        osjecaj: "emptiness, longing, feeling invisible",
        znakIscjeljenja: "Connected and understood replaces abandonment",
        sakrament: "Holy Communion",
        identitet: "Abiding presence",
        poslanje: "Incarnating Christ's presence",
        vodiKaGrijesima: ["pohota", "prozdrljivost", "pohlepa"],
        lazi: "In the name of Jesus Christ, I renounce the lie that I am alone and that no one understands me or cares for me. In the name of Jesus Christ, I renounce the lie that I am unprotected and that God has abandoned me.",
        istina: "In the name of Jesus Christ, I proclaim the truth that Jesus Himself promised me: 'I will never fail you nor forsake you' (Heb 13:5); 'I am with you always, to the close of the age' (Mt 28:20). In the name of Jesus Christ, I proclaim the truth that I am connected, deeply understood and cared for, and I proclaim the truth that in Holy Communion I am united with Christ and the communion of saints. They are always with me, so I am never alone.",
        molitva: "In the name of Jesus Christ, I renounce the lie that I am alone and that no one understands me or cares for me. In the name of Jesus Christ, I renounce the lie that I am unprotected and that God has abandoned me.\n\nIn the name of Jesus Christ, I proclaim the truth that Jesus Himself promised me: 'I will never fail you nor forsake you' (Heb 13:5); 'I am with you always, to the close of the age' (Mt 28:20). In the name of Jesus Christ, I proclaim the truth that I am connected, deeply understood and cared for, and I proclaim the truth that in Holy Communion I am united with Christ and the communion of saints. They are always with me, so I am never alone."
      },
      {
        id: "sramota",
        naziv: "Shame",
        laz: "I am bad, dirty, ugly, stupid, worthless, perverted...",
        opis: "Guilt says: I did something bad. Shame says: I am bad. The wound attacks not the deed but the identity.",
        osjecaj: "a wish to hide, so that no one can see inside",
        znakIscjeljenja: "Pure and worthy replaces shame",
        sakrament: "Reconciliation",
        identitet: "Pure and undefiled",
        poslanje: "Extending the Father's mercy",
        vodiKaGrijesima: ["ponos", "pohota", "prozdrljivost"],
        lazi: "In the name of Jesus Christ, I renounce the lie that I am bad, dirty, ugly, stupid, worthless, perverted...",
        istina: "In the name of Jesus Christ, I proclaim the truth that Jesus died for my sins and that my sins are forgiven; that I am washed, cleansed, justified and accepted (1 Cor 6:11). In the name of Jesus Christ, I proclaim the truth that Jesus did not come to condemn me but to save me (Jn 3:17-21; Rom 8:1; Jn 8:10-11). In the name of Jesus Christ, I proclaim the truth that in the sacrament of Reconciliation I am forgiven and set free. In the name of Jesus Christ, I proclaim the truth that I am pure and worthy — not because of what I have done, but because of what Jesus has done for me.",
        molitva: "In the name of Jesus Christ, I renounce the lie that I am bad, dirty, ugly, stupid, worthless, perverted...\n\nIn the name of Jesus Christ, I proclaim the truth that Jesus died for my sins and that my sins are forgiven; that I am washed, cleansed, justified and accepted (1 Cor 6:11). In the name of Jesus Christ, I proclaim the truth that Jesus did not come to condemn me but to save me (Jn 3:17-21; Rom 8:1; Jn 8:10-11). In the name of Jesus Christ, I proclaim the truth that in the sacrament of Reconciliation I am forgiven and set free. In the name of Jesus Christ, I proclaim the truth that I am pure and worthy — not because of what I have done, but because of what Jesus has done for me."
      },
      {
        id: "strah",
        naziv: "Fear",
        laz: "If I trust, speak up or stand my ground, I will be hurt or I will die.",
        opis: "The wound of fear closes the heart. What was once protection becomes a wall you no longer know how to lower.",
        osjecaj: "tension, hypervigilance, inability to relax",
        znakIscjeljenja: "Safe and secure replaces fear",
        sakrament: "Matrimony",
        identitet: "God's faithful love",
        poslanje: "Representing Christ's faithful love",
        vodiKaGrijesima: ["pohlepa", "ljutnja", "ljenost"],
        lazi: "In the name of Jesus Christ, I renounce the lie that if I trust, I will be hurt, disappointed or die. In the name of Jesus Christ, I renounce all fear, anxiety, doubt and distrust. In the name of Jesus Christ, I renounce the lie that I am not safe and not protected.",
        istina: "In the name of Jesus Christ, I proclaim the truth that God is my rock, my fortress, my deliverer and my protector (Ps 23, 27, 91). In the name of Jesus Christ, I proclaim the truth that God's perfect love casts out all fear (1 Jn 4:18). In the name of Jesus Christ, I proclaim the truth that I am safe.",
        molitva: "In the name of Jesus Christ, I renounce the lie that if I trust, I will be hurt, disappointed or die. In the name of Jesus Christ, I renounce all fear, anxiety, doubt and distrust. In the name of Jesus Christ, I renounce the lie that I am not safe and not protected.\n\nIn the name of Jesus Christ, I proclaim the truth that God is my rock, my fortress, my deliverer and my protector (Ps 23, 27, 91). In the name of Jesus Christ, I proclaim the truth that God's perfect love casts out all fear (1 Jn 4:18). In the name of Jesus Christ, I proclaim the truth that I am safe."
      },
      {
        id: "bespomoćnost",
        naziv: "Powerlessness",
        laz: "I am powerless, weak, stuck and trapped... I don't know what to do.",
        opis: "This wound forms where you were too small or too weak to change what was happening to you. The body remembers it even after you have grown up.",
        osjecaj: "paralysis, being overwhelmed, a need to hold everything in your own hands",
        znakIscjeljenja: "Empowered and liberated replaces powerlessness",
        sakrament: "Confirmation",
        identitet: "Anointed with power",
        poslanje: "Ministering in the power of the Spirit",
        vodiKaGrijesima: ["ljutnja", "ljenost", "prozdrljivost"],
        lazi: "In the name of Jesus Christ, I renounce the lie that I am powerless, weak, unable to change or incapable; that I am stuck, trapped and don't know what to do.",
        istina: "In the name of Jesus Christ, I proclaim the truth that Jesus promised that His grace is made perfect in my weakness, so that when I am weak, then I am strong (2 Cor 12:8-10). In the name of Jesus Christ, I proclaim the truth that 'I can do all things in Him who strengthens me' (Phil 4:13). In the name of Jesus Christ, I proclaim the truth that 'where the Spirit of the Lord is, there is freedom' (2 Cor 3:17); so I accept the truth that in Christ I am empowered and set free by the Holy Spirit, and I proclaim the truth that through the sacrament of Confirmation I am anointed with the power of the Holy Spirit, who lives and dwells in me.",
        molitva: "In the name of Jesus Christ, I renounce the lie that I am powerless, weak, unable to change or incapable; that I am stuck, trapped and don't know what to do.\n\nIn the name of Jesus Christ, I proclaim the truth that Jesus promised that His grace is made perfect in my weakness, so that when I am weak, then I am strong (2 Cor 12:8-10). In the name of Jesus Christ, I proclaim the truth that 'I can do all things in Him who strengthens me' (Phil 4:13). In the name of Jesus Christ, I proclaim the truth that 'where the Spirit of the Lord is, there is freedom' (2 Cor 3:17); so I accept the truth that in Christ I am empowered and set free by the Holy Spirit, and I proclaim the truth that through the sacrament of Confirmation I am anointed with the power of the Holy Spirit, who lives and dwells in me."
      },
      {
        id: "odbacenost",
        naziv: "Rejection",
        laz: "I am not loved and not worthy of love... I am not good enough.",
        opis: "Abandonment is absence. Rejection is a message: you were there, and you were not wanted. That is why it hurts differently.",
        osjecaj: "a need to earn your place, fear of being left out",
        znakIscjeljenja: "Accepted and valued replaces rejection",
        sakrament: "Baptism",
        identitet: "The Father's beloved",
        poslanje: "Imitating the Father's love",
        vodiKaGrijesima: ["zavist", "ponos", "pohota"],
        lazi: "In the name of Jesus Christ, I renounce the lie that I am unloved and unlovable. I renounce the lie that I am not desirable, not wanted and not good enough.",
        istina: "In the name of Jesus Christ, I proclaim the truth that by the power of my baptism I am the beloved son of the Father. I proclaim the truth that He loves me so much that He gave His life for me, and that there is no greater love (Jn 15:13). I proclaim the truth that God's love has been poured into my heart through the Holy Spirit. In the name of Jesus Christ, I proclaim the truth that I am loved, wanted and precious in the Father's eyes.",
        molitva: "In the name of Jesus Christ, I renounce the lie that I am unloved and unlovable. I renounce the lie that I am not desirable, not wanted and not good enough.\n\nIn the name of Jesus Christ, I proclaim the truth that by the power of my baptism I am the beloved son of the Father. I proclaim the truth that He loves me so much that He gave His life for me, and that there is no greater love (Jn 15:13). I proclaim the truth that God's love has been poured into my heart through the Holy Spirit. In the name of Jesus Christ, I proclaim the truth that I am loved, wanted and precious in the Father's eyes."
      },
      {
        id: "beznade",
        naziv: "Hopelessness",
        laz: "Nothing is ever going to change... there is no hope.",
        opis: "The wound of hopelessness comes after you have hoped and been disappointed enough times. The heart decides it is cheaper not to hope.",
        osjecaj: "weariness, indifference, giving up in advance",
        znakIscjeljenja: "Hopeful and encouraged replaces hopelessness",
        sakrament: "Anointing of the Sick",
        identitet: "Raised to life",
        poslanje: "Spreading Christ's hope and healing",
        vodiKaGrijesima: ["ljenost", "prozdrljivost", "zavist"],
        lazi: "In the name of Jesus Christ, I renounce the lie that nothing ever changes and that I will never have what I long for. In the name of Jesus Christ, I renounce the lie that my life is meaningless and that I have nothing to live for.",
        istina: "In the name of Jesus Christ, I proclaim the truth that my hope is steadfast in Christ and that He makes all things new (Rev 21:5). In the name of Jesus Christ, I proclaim the truth that because my hope is in Christ, I will not be disappointed (Rom 5:5). In the name of Jesus Christ, I proclaim the truth that I am 'being changed into His likeness from one degree of glory to another' (2 Cor 3:18), and that God is at work in me and will bring to completion what He has begun (Phil 1:6). In the name of Jesus Christ, I proclaim the truth that I am filled with hope in the good things to come.",
        molitva: "In the name of Jesus Christ, I renounce the lie that nothing ever changes and that I will never have what I long for. In the name of Jesus Christ, I renounce the lie that my life is meaningless and that I have nothing to live for.\n\nIn the name of Jesus Christ, I proclaim the truth that my hope is steadfast in Christ and that He makes all things new (Rev 21:5). In the name of Jesus Christ, I proclaim the truth that because my hope is in Christ, I will not be disappointed (Rom 5:5). In the name of Jesus Christ, I proclaim the truth that I am 'being changed into His likeness from one degree of glory to another' (2 Cor 3:18), and that God is at work in me and will bring to completion what He has begun (Phil 1:6). In the name of Jesus Christ, I proclaim the truth that I am filled with hope in the good things to come."
      },
      {
        id: "zbunjenost",
        naziv: "Confusion",
        laz: "I don't know what is happening to me. I don't understand anything.",
        opis: "This wound forms where words and actions did not match — where you were told one thing and shown another. You stop trusting your own perception.",
        osjecaj: "fog, distrust of your own feelings, constant second-guessing",
        znakIscjeljenja: "Understanding and enlightenment replaces confusion",
        sakrament: "Holy Orders",
        identitet: "The Father's authority",
        poslanje: "Restoring holy authority",
        vodiKaGrijesima: ["ljenost", "zavist"],
        lazi: "In the name of Jesus Christ, I renounce the lie that everything is confusing, that I don't understand anything, and that it is up to me to figure things out on my own.",
        istina: "In the name of Jesus Christ, I proclaim the truth that I have the mind of Christ (1 Cor 2:16) and that the Holy Spirit reveals to me whatever I need to know, when I need to know it (1 Cor 1:7). In the name of Jesus Christ, I proclaim the truth that the Lord gives wisdom and understanding to anyone who asks (Jas 1:5), that God has given His Church to lead me into all truth, and that I have understanding and enlightenment from the Lord.",
        molitva: "In the name of Jesus Christ, I renounce the lie that everything is confusing, that I don't understand anything, and that it is up to me to figure things out on my own.\n\nIn the name of Jesus Christ, I proclaim the truth that I have the mind of Christ (1 Cor 2:16) and that the Holy Spirit reveals to me whatever I need to know, when I need to know it (1 Cor 1:7). In the name of Jesus Christ, I proclaim the truth that the Lord gives wisdom and understanding to anyone who asks (Jas 1:5), that God has given His Church to lead me into all truth, and that I have understanding and enlightenment from the Lord."
      }
    ],

    // `zastita` se nastavlja na "I made it to protect myself…",
    // `zamjena` na "…and choose…" (zato počinje s "to …")
    unutarnjiZavjeti: [
      { id: "nikom_ne_vjerujem", tekst: "I will never trust anyone",
        rane: ["strah", "odbacenost"], grijesi: ["ponos", "ljutnja"],
        zastita: "from betrayal and disappointment",
        zamjena: "to trust You and, step by step, the people You give me" },
      { id: "nikad_povrijedjen", tekst: "I will never let anyone hurt me again",
        rane: ["strah", "odbacenost"], grijesi: ["ljutnja", "ponos"],
        zastita: "from new pain",
        zamjena: "to open my heart, knowing that You are my protection" },
      { id: "nikad_ranjiv", tekst: "I will never be vulnerable",
        rane: ["strah", "sramota"], grijesi: ["ponos", "ljenost"],
        zastita: "from being seen as weak",
        zamjena: "to let You see me and love me just as I am" },
      { id: "sam_za_sebe", tekst: "I will always take care of myself",
        rane: ["napustenost", "bespomoćnost"], grijesi: ["pohlepa", "ponos"],
        zastita: "from depending on someone who might let me down",
        zamjena: "to receive care — from You and from the people You send me" },
      { id: "ne_trazim_pomoc", tekst: "I will never ask for help",
        rane: ["napustenost", "sramota"], grijesi: ["ponos", "pohlepa"],
        zastita: "from the humiliation of being refused",
        zamjena: "to ask for and receive help without shame" },
      { id: "uvijek_jak", tekst: "I will always be strong and never show weakness",
        rane: ["bespomoćnost", "sramota"], grijesi: ["ponos", "ljutnja"],
        zastita: "from being taken advantage of",
        zamjena: "to admit my weakness, because Your strength is made perfect in it" },
      { id: "ne_pokazujem_bol", tekst: "I will never show that something hurts me",
        rane: ["sramota", "napustenost"], grijesi: ["prozdrljivost", "ljutnja"],
        zastita: "from having my pain dismissed or mocked",
        zamjena: "to bring my pain to You and to those I can trust" },
      { id: "moram_savrsen", tekst: "I must be perfect in order to be loved",
        rane: ["odbacenost", "sramota"], grijesi: ["ponos", "ljutnja"],
        zastita: "from rejection",
        zamjena: "to receive a love I do not have to earn" },
      { id: "nikad_kao_roditelj", tekst: "I will never be like my father / my mother",
        rane: ["sramota", "strah"], grijesi: ["ponos", "ljutnja"],
        zastita: "from repeating their wound",
        zamjena: "to forgive them and receive my own identity from You" },
      { id: "nitko_me_ne_kontrolira", tekst: "I will never let anyone control me",
        rane: ["bespomoćnost", "strah"], grijesi: ["ljutnja", "ponos"],
        zastita: "from feeling powerless again",
        zamjena: "to surrender control to You and live in obedience out of love" },
      { id: "uvijek_dostupan", tekst: "I will always be available to others",
        rane: ["odbacenost", "napustenost"], grijesi: ["ponos", "prozdrljivost"],
        zastita: "from being abandoned if I say no",
        zamjena: "to set healthy boundaries and trust that I will not lose love by doing so" },
      { id: "odlazim_prvi", tekst: "I will leave first, before they leave me",
        rane: ["napustenost", "odbacenost"], grijesi: ["pohota", "ljenost"],
        zastita: "from the pain of being left",
        zamjena: "to stay, and to trust You in the relationships You have given me" },
      { id: "nikad_duboko", tekst: "I will never get that attached again",
        rane: ["odbacenost", "strah"], grijesi: ["pohota", "ljenost"],
        zastita: "from loss",
        zamjena: "to love to the end, as You loved" },
      { id: "necu_se_nadati", tekst: "I won't even hope anymore",
        rane: ["beznade"], grijesi: ["ljenost", "prozdrljivost"],
        zastita: "from disappointment",
        zamjena: "to hope in You, who never disappoint" },
      { id: "necu_ni_pokusati", tekst: "I won't even try — I'll fail anyway",
        rane: ["beznade", "bespomoćnost"], grijesi: ["ljenost"],
        zastita: "from failure",
        zamjena: "to begin, because You complete what You start in me" },
      { id: "ne_ovisim", tekst: "I will never depend on anyone",
        rane: ["napustenost", "strah"], grijesi: ["pohlepa", "ponos"],
        zastita: "from the vulnerability that comes with need",
        zamjena: "to admit my need and lean on You" },
      { id: "sve_pod_kontrolom", tekst: "I will always be in control of the situation",
        rane: ["bespomoćnost", "strah"], grijesi: ["ljutnja", "ponos"],
        zastita: "from chaos and surprises",
        zamjena: "to release control into Your hands" },
      { id: "ne_isplati_se_pitati", tekst: "It's not worth asking — no one understands anyway",
        rane: ["zbunjenost", "napustenost"], grijesi: ["ljenost", "zavist"],
        zastita: "from feeling alone even when I speak",
        zamjena: "to ask, trusting that You understand me completely" },
      { id: "sam_sve_razumjeti", tekst: "I have to understand and resolve everything myself",
        rane: ["zbunjenost", "bespomoćnost"], grijesi: ["ponos", "ljenost"],
        zastita: "from confusion and the feeling of losing my footing",
        zamjena: "to receive wisdom from You and let some things remain Yours" }
    ],

    // U engleskom `oprastam` ("I forgive …") i `osudio` ("I have judged …") traže isti
    // oblik; polja ostaju odvojena radi iste sheme kao u hrvatskom.
    // `istina` se nastavlja na "I proclaim the truth that…"
    gorkeOsude: [
      { id: "muskarci_opasni",
        osudio: "the men who hurt me, especially my father",
        tekst: "Men are selfish and dangerous",
        rane: ["strah", "odbacenost"],
        oprastam: "the men who hurt me, and especially my father",
        istina: "in You there is a fatherhood that does not wound, and You are my Father" },
      { id: "zene_nepouzdane",
        osudio: "the women who hurt me, especially my mother",
        tekst: "Women can't be trusted",
        rane: ["napustenost", "odbacenost"],
        oprastam: "the women who hurt me, and especially my mother",
        istina: "there is a motherly love that does not betray, and You have given it to me in Mary" },
      { id: "roditelju_nije_stalo",
        osudio: "my parents",
        tekst: "My parents never truly cared about me",
        rane: ["napustenost", "odbacenost"],
        oprastam: "my parents for every way in which they were not what I needed",
        istina: "You wanted me before they ever knew me (Jer 1:5)" },
      { id: "bog_me_napustio",
        tekst: "God has abandoned me",
        rane: ["napustenost", "beznade"],
        premaBogu: true,
        istina: "You did not leave — You were in the pain with me, and You have never forsaken me (Heb 13:5)" },
      { id: "bog_kaznjava",
        tekst: "God is harsh and punishing",
        rane: ["sramota", "strah"],
        premaBogu: true,
        istina: "You are the Father who runs to meet the son who returns (Lk 15:20)" },
      { id: "bogu_nije_stalo",
        tekst: "God doesn't care about my pain",
        rane: ["napustenost", "beznade"],
        premaBogu: true,
        istina: "You keep every one of my tears in Your bottle (Ps 56:8)" },
      { id: "autoriteti_zlouporabe",
        osudio: "those who had authority over me",
        tekst: "People in authority always abuse their power",
        rane: ["bespomoćnost", "strah"],
        oprastam: "those who had authority over me and abused it",
        istina: "Yours is an authority that washes feet rather than trampling them (Jn 13:5)" },
      { id: "svi_odlaze",
        osudio: "those who left my life",
        tekst: "Everyone leaves in the end",
        rane: ["napustenost", "odbacenost"],
        oprastam: "those who left my life",
        istina: "You remain with me always, to the end of the age (Mt 28:20)" },
      { id: "ljubav_boli",
        osudio: "those with whom love ended in pain",
        tekst: "Love always hurts and always ends",
        rane: ["odbacenost", "strah"],
        oprastam: "those with whom love ended in pain",
        istina: "love never ends (1 Cor 13:8)" },
      { id: "zivot_nepravedan",
        tekst: "Life is unfair",
        rane: ["beznade", "bespomoćnost"],
        premaBogu: true,
        istina: "You bring good out of everything, even out of what was unjust (Rom 8:28)" },
      { id: "nikad_ne_dobijem",
        tekst: "I can never get what I need",
        rane: ["beznade", "odbacenost"],
        premaBogu: true,
        istina: "You know what I need before I ask (Mt 6:8)" },
      { id: "crkva_licemjerna",
        osudio: "those in the Church who hurt or disappointed me",
        tekst: "The Church is hypocritical",
        rane: ["sramota", "odbacenost"],
        oprastam: "those in the Church who hurt or disappointed me",
        istina: "the Church is Your body, wounded but holy, and I have my place in it" },
      { id: "svijet_opasan",
        tekst: "The world is a dangerous place",
        rane: ["strah", "bespomoćnost"],
        premaBogu: true,
        istina: "You have overcome the world (Jn 16:33)" },
      { id: "nitko_ne_razumije",
        osudio: "those who did not hear me when I spoke",
        tekst: "No one will ever understand me",
        rane: ["zbunjenost", "napustenost"],
        oprastam: "those who did not hear me when I spoke",
        istina: "You know me through and through and understand me completely (Ps 139)" }
    ],

    smrtniGrijesi: [
      {
        id: "ponos",
        naziv: "Pride",
        ikona: "👑",
        idolatrija: "Self or others",
        opis: "Idolatry of self, self-righteousness, self-promotion",
        bojaBg: "#8B6B4A",
        bojaLight: "#C4A882",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I feel I have to control everything", "...I don't ask God for help", "...I think I know better than others"]
        },
        rane: ["sramota", "odbacenost", "strah"],
        plodovi: [
          { id: "samopravednost", naziv: "Self-righteousness", izRana: ["sramota"] },
          { id: "samoobmana", naziv: "Self-deception", izRana: ["sramota"] },
          { id: "samopromocija", naziv: "Self-promotion", izRana: ["odbacenost"] },
          { id: "osudjivanje", naziv: "Judging others", izRana: ["sramota", "odbacenost"] },
          { id: "kontrola", naziv: "Need for control", izRana: ["bespomoćnost", "strah"] },
          { id: "hvalisanje", naziv: "Boasting", izRana: ["odbacenost"] },
          { id: "netolerantnost", naziv: "Intolerance", izRana: ["strah"] },
          { id: "perfekcionizam", naziv: "Perfectionism", izRana: ["sramota", "odbacenost"] },
          { id: "kriticizam", naziv: "Excessive criticism", izRana: ["sramota"] },
          { id: "neprihvacanje_kritike", naziv: "Can't accept criticism", izRana: ["sramota"] },
          { id: "usporedivanje", naziv: "Constantly comparing myself", izRana: ["odbacenost"] },
          { id: "manipulacija", naziv: "Manipulating others", izRana: ["bespomoćnost"] },
          { id: "tvrdoglavost", naziv: "Stubbornness/Self-will", izRana: ["bespomoćnost", "strah"] },
          { id: "distanciranost", naziv: "Emotional detachment", izRana: ["strah", "napustenost"] }
        ],
        krepost: { naziv: "Humility", opis: "Humility overcomes pride" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of pride and any idolatry of myself or of others. In the name of Jesus Christ, I renounce self-righteousness, self-deception and self-promotion.\n\nI ask for Your forgiveness, Lord, and I choose instead to humble myself before You.",
        znakIscjeljenja: "Humility and freedom from needing to prove my worth"
      },
      {
        id: "zavist",
        naziv: "Envy",
        ikona: "👁️",
        idolatrija: "Position or status",
        opis: "Idolatry of status, position or what others have",
        bojaBg: "#4A6B5A",
        bojaLight: "#82A892",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I compare myself with others", "...I feel less valuable", "...I try to prove my worth"]
        },
        rane: ["odbacenost", "beznade", "zbunjenost"],
        plodovi: [
          { id: "ljubomora", naziv: "Jealousy", izRana: ["odbacenost"] },
          { id: "zlovolja", naziv: "Resentment at others' success", izRana: ["odbacenost", "beznade"] },
          { id: "ogovaranje", naziv: "Gossip", izRana: ["odbacenost", "sramota"] },
          { id: "podrivanje", naziv: "Undermining/Sabotaging others", izRana: ["odbacenost"] },
          { id: "nezahvalnost", naziv: "Ingratitude", izRana: ["beznade"] },
          { id: "usporedivanje_z", naziv: "Obsessive comparison", izRana: ["odbacenost", "sramota"] },
          { id: "kopiranje", naziv: "Imitating someone else's life", izRana: ["odbacenost", "zbunjenost"] },
          { id: "pohlepa_status", naziv: "Craving status", izRana: ["odbacenost"] },
          { id: "gorcina_z", naziv: "Bitterness toward the successful", izRana: ["beznade", "odbacenost"] },
          { id: "umanjivanje", naziv: "Belittling others' achievements", izRana: ["odbacenost", "sramota"] },
          { id: "kompetitivnost", naziv: "Unhealthy competitiveness", izRana: ["odbacenost"] },
          { id: "financijska_usporedba", naziv: "Comparing finances/possessions", izRana: ["odbacenost", "strah"] }
        ],
        krepost: { naziv: "Kindness", opis: "Contentment and kindness overcome envy" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of envy and any idolatry of position or status. I renounce coveting what anyone else has, and tearing them down because of it.\n\nI ask for Your forgiveness, Lord, and I choose instead contentment and kindness toward my neighbors.",
        znakIscjeljenja: "Joy in others' success, gratitude for my own gifts"
      },
      {
        id: "ljutnja",
        naziv: "Anger",
        ikona: "🔥",
        idolatrija: "Power, control or justice",
        opis: "Idolatry of control, power or justice",
        bojaBg: "#8B3A3A",
        bojaLight: "#C48282",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I feel I have to take control myself", "...I think I have to fight for justice", "...I don't believe God will step in"]
        },
        rane: ["bespomoćnost", "odbacenost", "strah"],
        plodovi: [
          { id: "samopravednost_l", naziv: "Self-righteousness", izRana: ["sramota"] },
          { id: "gorcina", naziv: "Bitterness", izRana: ["odbacenost", "beznade"] },
          { id: "ogorcenost", naziv: "Resentment", izRana: ["beznade"] },
          { id: "depresija", naziv: "Depression", izRana: ["beznade", "bespomoćnost"] },
          { id: "pasivna_agresija", naziv: "Passive aggression", izRana: ["bespomoćnost", "strah"] },
          { id: "tracanje", naziv: "Gossip/Sarcasm", izRana: ["odbacenost", "bespomoćnost"] },
          { id: "osveta", naziv: "Vindictiveness", izRana: ["bespomoćnost", "odbacenost"] },
          { id: "nasilje_verbalno", naziv: "Verbal abuse", izRana: ["bespomoćnost"] },
          { id: "izolacija", naziv: "Withdrawal/Isolation", izRana: ["odbacenost", "napustenost"] },
          { id: "kontroliranje", naziv: "Controlling behavior", izRana: ["bespomoćnost", "strah"] },
          { id: "emocionalna_hladnoca", naziv: "Emotional coldness", izRana: ["strah", "napustenost"] },
          { id: "perfekcionizam_l", naziv: "Perfectionism", izRana: ["sramota"] },
          { id: "kriticizam_l", naziv: "Harsh criticism", izRana: ["sramota"] },
          { id: "nestrpljivost", naziv: "Chronic impatience", izRana: ["bespomoćnost"] },
          { id: "eksplozivnost", naziv: "Explosive outbursts of rage", izRana: ["bespomoćnost", "strah"] }
        ],
        krepost: { naziv: "Patience and long-suffering", opis: "Patience and long-suffering overcome anger" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of anger and any idolatry of power, control or justice. In the name of Jesus Christ, I renounce all bitterness, judgment and retaliation.\n\nI ask for Your forgiveness, Lord, and I choose instead the virtue of patience and long-suffering, to bless those who have hurt me.",
        znakIscjeljenja: "Peace and freedom from the need for control, the ability to forgive"
      },
      {
        id: "pohota",
        naziv: "Lust",
        ikona: "💔",
        idolatrija: "Sex or relationships",
        opis: "Idolatry of sex, romance or relationships",
        bojaBg: "#7A3A6B",
        bojaLight: "#B882A8",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I look for love in the wrong places", "...I use others for my own pleasure", "...I don't believe God can meet my need for love"]
        },
        rane: ["napustenost", "odbacenost", "sramota"],
        plodovi: [
          { id: "bludnost", naziv: "Fornication/Promiscuity", izRana: ["odbacenost", "napustenost"] },
          { id: "pornografija", naziv: "Pornography", izRana: ["napustenost", "sramota"] },
          { id: "opsesivni_odnosi", naziv: "Obsessive romantic relationships", izRana: ["napustenost", "odbacenost"] },
          { id: "masturb", naziv: "Compulsive masturbation", izRana: ["napustenost", "sramota"] },
          { id: "emotionalni_aff", naziv: "Emotional affairs", izRana: ["napustenost", "odbacenost"] },
          { id: "seksualna_fantazija", naziv: "Sexual fantasy/Daydreaming", izRana: ["napustenost", "beznade"] },
          { id: "preljub", naziv: "Adultery", izRana: ["odbacenost", "napustenost"] },
          { id: "manipulacija_p", naziv: "Manipulation in relationships", izRana: ["bespomoćnost", "strah"] },
          { id: "ovisnost_o_ljubavi", naziv: "Dependence on love/approval", izRana: ["odbacenost"] },
          { id: "flert", naziv: "Excessive flirting", izRana: ["odbacenost"] },
          { id: "seks_kao_bijeg", naziv: "Sex as an escape from pain", izRana: ["sramota", "napustenost"] },
          { id: "idolizacija_partnera", naziv: "Idolizing a partner", izRana: ["napustenost", "odbacenost"] }
        ],
        krepost: { naziv: "Chastity", opis: "Chastity overcomes lust" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of lust and any idolatry of sex or relationships. In the name of Jesus Christ, I renounce all immorality, fornication, adultery, pornography...\n\nI ask for Your forgiveness, Lord, and I choose instead the virtue of chastity, and to see everyone in purity, as the son or daughter God created them to be.",
        znakIscjeljenja: "Purity of heart, healthy relationships grounded in love"
      },
      {
        id: "prozdrljivost",
        naziv: "Gluttony",
        ikona: "🍷",
        idolatrija: "Food, drink or drugs",
        opis: "Idolatry of food, drink or drugs",
        bojaBg: "#6B5A3A",
        bojaLight: "#A8926B",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I comfort myself with food or drink", "...I avoid pain by consuming", "...food becomes my 'god'"]
        },
        rane: ["napustenost", "beznade", "bespomoćnost"],
        plodovi: [
          { id: "prejedanje", naziv: "Overeating", izRana: ["napustenost", "sramota"] },
          { id: "alkoholizam", naziv: "Excessive drinking", izRana: ["napustenost", "beznade"] },
          { id: "droge", naziv: "Drug addiction", izRana: ["beznade", "bespomoćnost"] },
          { id: "samoindulgencija", naziv: "Self-indulgence", izRana: ["napustenost"] },
          { id: "emocionalno_jedenje", naziv: "Emotional eating", izRana: ["napustenost", "odbacenost"] },
          { id: "dijete_ciklusi", naziv: "Diet/binge cycles", izRana: ["sramota", "bespomoćnost"] },
          { id: "bulimija_an", naziv: "Eating disorders", izRana: ["sramota", "bespomoćnost"] },
          { id: "kava_slatkisi", naziv: "Dependence on coffee/sweets", izRana: ["napustenost"] },
          { id: "pusenje", naziv: "Smoking/nicotine addiction", izRana: ["napustenost", "strah"] },
          { id: "ekrani", naziv: "Screen/internet addiction", izRana: ["napustenost", "beznade"] },
          { id: "kupovanje", naziv: "Compulsive shopping", izRana: ["napustenost", "odbacenost"] }
        ],
        krepost: { naziv: "Temperance and fasting", opis: "Temperance and fasting overcome gluttony" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of gluttony and any idolatry of food, drink or drugs. In the name of Jesus Christ, I renounce all self-indulgence and false comfort through what I take into my body.\n\nI ask for Your forgiveness, Lord, and I choose instead temperance and fasting to fight against self-indulgence.",
        znakIscjeljenja: "Freedom from compulsive eating/drinking, finding comfort in God"
      },
      {
        id: "pohlepa",
        naziv: "Greed",
        ikona: "💰",
        idolatrija: "Security, wealth or money",
        opis: "Idolatry of security, wealth or money",
        bojaBg: "#4A5A3A",
        bojaLight: "#82926B",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I don't trust that God will provide for me", "...I hoard possessions as protection", "...money becomes my security"]
        },
        rane: ["strah", "napustenost", "bespomoćnost"],
        plodovi: [
          { id: "skrtost", naziv: "Stinginess/Hoarding", izRana: ["strah", "napustenost"] },
          { id: "kradja", naziv: "Theft/Fraud", izRana: ["strah", "bespomoćnost"] },
          { id: "iskoristavanje", naziv: "Using other people", izRana: ["strah", "odbacenost"] },
          { id: "materijalizm", naziv: "Materialism", izRana: ["strah", "odbacenost"] },
          { id: "workaholic", naziv: "Workaholism for money", izRana: ["strah", "odbacenost"] },
          { id: "rizik_financ", naziv: "Risky financial decisions", izRana: ["bespomoćnost", "beznade"] },
          { id: "laganje_novac", naziv: "Lying about finances", izRana: ["sramota", "strah"] },
          { id: "nezdrava_stednja", naziv: "Obsessive saving/control", izRana: ["strah", "bespomoćnost"] },
          { id: "trosenje_ekscesivno", naziv: "Excessive spending", izRana: ["napustenost", "beznade"] },
          { id: "statusni_simboli", naziv: "Obsession with status symbols", izRana: ["odbacenost", "sramota"] }
        ],
        krepost: { naziv: "Generosity", opis: "Generosity overcomes greed" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of greed and any idolatry of security, wealth or money. In the name of Jesus Christ, I renounce all sins of hoarding, stealing or using people to get ahead.\n\nI ask for Your forgiveness, Lord, and I choose instead generosity and trust in Your provision for my life.",
        znakIscjeljenja: "Freedom from the fear of lack, joy in giving"
      },
      {
        id: "ljenost",
        naziv: "Sloth",
        ikona: "😴",
        idolatrija: "Ease and false comfort",
        opis: "Idolatry of ease and false comfort",
        bojaBg: "#4A4A6B",
        bojaLight: "#82829A",
        korijen: {
          naziv: "Ungodly self-reliance",
          opis: "I rely on myself when...",
          primjeri: ["...I avoid responsibility", "...I give up when it gets hard", "...I look for the easy way"]
        },
        rane: ["beznade", "bespomoćnost", "zbunjenost"],
        plodovi: [
          { id: "prokrastinacija", naziv: "Procrastination", izRana: ["strah", "beznade"] },
          { id: "odustajanje", naziv: "Giving up easily", izRana: ["beznade", "bespomoćnost"] },
          { id: "pasivnost", naziv: "Passivity", izRana: ["bespomoćnost", "beznade"] },
          { id: "duhovna_mlakost", naziv: "Spiritual lukewarmness", izRana: ["beznade", "napustenost"] },
          { id: "izbjegavanje", naziv: "Avoiding responsibility", izRana: ["strah", "bespomoćnost"] },
          { id: "ekrani_l", naziv: "Wasting time on screens", izRana: ["napustenost", "beznade"] },
          { id: "zanemarivanje_odnosa", naziv: "Neglecting relationships", izRana: ["odbacenost", "strah"] },
          { id: "nedovrsenost", naziv: "Unfinished projects", izRana: ["beznade", "sramota"] },
          { id: "kasnjenje", naziv: "Chronic lateness", izRana: ["bespomoćnost", "strah"] },
          { id: "minimalan_napor", naziv: "Minimal effort in everything", izRana: ["beznade"] },
          { id: "bijeg_od_tisine", naziv: "Running from silence and reflection", izRana: ["strah", "zbunjenost"] }
        ],
        krepost: { naziv: "Diligence and perseverance", opis: "Diligence and perseverance overcome sloth" },
        molitvaOdricanja: "In the name of Jesus Christ, I renounce the sin of sloth and my idolatry of ease and false comfort. In the name of Jesus Christ, I renounce laziness and giving up when things get difficult.\n\nI ask for Your forgiveness, Lord, and I choose diligence and perseverance.",
        znakIscjeljenja: "Energy and joy in serving, freedom from passivity"
      }
    ]
  },

  // ── GRADITELJI MOLITAVA ─────────────────────────────────────
  molitve: {
    // Molitva odricanja od krive slike Boga — rana → tiha osuda roditelja →
    // projekcija na Boga → odricanje → istina
    molitvaSlikeBoga: function(k){
      if (typeof k === 'string') {
        return "In Jesus' name I renounce the false image of God: “" + k + "”. " +
               "Father, forgive me for imagining You this way, and show me Your true face. Amen.";
      }
      var t = "Father, I confess that in my heart I have held You to be like this: " + k.opis + "\n\n";
      if (k.projekcija) {
        var koga = (k.projekcija === 'majka') ? "my mother" : "my father";
        t += "I acknowledge that this image does not come from You but from my wound. In my heart I judged " + koga +
             " and unknowingly carried that judgment over onto You. In Jesus' name I forgive " + koga +
             " and withdraw that judgment. ";
      }
      t += "In Jesus' name I renounce this false image of God and every lie about You that my wounded heart has believed. ";
      if (k.istina) t += "I proclaim the truth that " + k.istina + ". ";
      return t + "Show me Your true face, as Jesus has revealed You to me. Amen.";
    },

    // Molitva odricanja od unutarnjeg zavjeta (HWP, Appendix 1 — "Renouncing: Inner Vows")
    molitvaZavjeta: function(z){
      var tekst = (typeof z === 'string') ? z : z.tekst;
      var t = "Father, I acknowledge that I have tried to save myself instead of relying on You for my salvation. " +
              "Forgive me for my sins of pride and self-sufficiency. I acknowledge that my effort to protect myself " +
              "has left me shut in behind walls that keep me from freely giving and receiving love. " +
              "I want to be free of this bondage, which came as a result of my own choices.\n\n" +
              "In Jesus' name I renounce the inner vow: “" + tekst + "”.";
      if (typeof z !== 'string') {
        if (z.zastita) t += " I made it to protect myself " + z.zastita + ".";
        if (z.zamjena) t += " I renounce that false protection and choose " + z.zamjena + ".";
      }
      return t + " I ask You to release me now from the bondage of this vow. Thank You. Amen.";
    },

    // Skupna molitva odricanja od zavjeta — uvod jednom, pa svaki zavjet
    molitvaZavjetaSkupno: function(list){
      var t = "Father, I acknowledge that I have tried to save myself instead of relying on You for my salvation. " +
              "Forgive me for my sins of pride and self-sufficiency. I acknowledge that my effort to protect myself " +
              "has left me shut in behind walls that keep me from freely giving and receiving love. " +
              "I want to be free of this bondage, which came as a result of my own choices.\n";
      list.forEach(function(z){
        var tekst = (typeof z === 'string') ? z : z.tekst;
        t += "\nIn Jesus' name I renounce the inner vow: “" + tekst + "”.";
        if (typeof z !== 'string') {
          if (z.zastita) t += " I made it to protect myself " + z.zastita + ".";
          if (z.zamjena) t += " I renounce that false protection and choose " + z.zamjena + ".";
        }
      });
      return t + "\n\nI ask You to release me now from the bondage of these vows. Thank You. Amen.";
    },

    // Skupna molitva odricanja od gorkih osuda
    molitvaOsudeSkupno: function(list){
      var t = "Father, I acknowledge that I have judged. I realize that I did this to protect myself " +
              "from feelings of vulnerability and powerlessness, so that I would not be hurt again. " +
              "I also realize that judgment is sin and that it keeps me bound.\n";
      list.forEach(function(o){
        var tekst = (typeof o === 'string') ? o : o.tekst;
        var bogu  = (typeof o !== 'string') && o.premaBogu;
        t += "\nIn Jesus' name I renounce the judgment: “" + tekst + "”.";
        if (typeof o !== 'string') {
          if (bogu) t += " I ask Your forgiveness for accusing You, and I withdraw that verdict.";
          else if (o.oprastam) t += " I forgive " + o.oprastam + ", and I ask You to give me Your heart of compassion toward them.";
          if (o.istina) t += " I proclaim the truth that " + o.istina + ".";
        }
      });
      return t + "\n\nI ask You to set both me and them free from the bondage of these judgments and from isolation. Amen.";
    },

    // Molitva odricanja od gorke osude (HWP, Appendix 1 — "Renouncing: Judgments")
    // priznanje → zašto sam osudio → oprost → odricanje → molba za Božje srce
    molitvaOsude: function(o){
      var tekst = (typeof o === 'string') ? o : o.tekst;
      var koga  = (typeof o === 'string') ? null : (o.premaBogu ? null : o.oprastam);
      var kogaA = (typeof o === 'string') ? null : (o.premaBogu ? null : o.osudio);
      var bogu  = (typeof o !== 'string') && o.premaBogu;

      var t = "Father, I acknowledge that I have judged " + (bogu ? "You" : (kogaA || "those who hurt me")) + ". " +
              "I realize that I did this to protect myself from feelings of vulnerability and powerlessness, " +
              "so that I would not be hurt again. " +
              "I also realize that this judgment is sin and that it keeps me bound.\n\n";

      if (bogu) {
        t += "I ask Your forgiveness for accusing You, and I withdraw that verdict. ";
      } else {
        t += "I ask You now for forgiveness, and to set me and " + (kogaA || "them") +
             " free from the bondage of this judgment and from isolation. ";
        t += "In Jesus' name I forgive " + (koga || "them") + ". ";
      }

      t += "In Jesus' name I renounce the judgment: “" + tekst + "”.";

      if (typeof o !== 'string' && o.istina) {
        t += " I proclaim the truth that " + o.istina + ".";
      }

      if (!bogu) {
        t += "\n\nI know I cannot change my own heart, so I ask You to give me Your heart of compassion for " +
             (koga || "them") + ".";
      }
      return t + " Amen.";
    }
  }
};
