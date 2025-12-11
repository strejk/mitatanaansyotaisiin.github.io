const recipes = {
  kana: [
    {
      name: "Kana-pestopasta",
      ingredients: [
        { item: "pasta", amount: "300 g" },
        { item: "pinjansiemenet", amount: "1 dl" },
        { item: "rypsiöljy", amount: "1 rkl" },
        { item: "broilerin fileesuikaleet", amount: "300 g" },
        { item: "suola", amount: "0.5 tl" },
        { item: "sitruuna", amount: "0.5 kpl" },
        { item: "pesto", amount: "1 dl" },
        { item: "basilika", amount: "1 dl" },
        { item: "parmesaani", amount: "30 g" }
      ],
      instructions: "Paista broileri öljyssä, mausta suolalla ja sitruunalla. Keitä pasta, sekoita pesto ja broileri joukkoon. Viimeistele pinjansiemenillä, basilikan lehdillä ja parmesanilla.",
      url: "https://kotiliesi.fi/resepti/kana-pestopasta/"
    },
    {
      name: "Kana-makaronilaatikko",
      ingredients: [
        { item: "kierremakaroni", amount: "3 dl" },
        { item: "broilerin jauheliha", amount: "250 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "porkkana", amount: "1 kpl" },
        { item: "herneet", amount: "1 dl" },
        { item: "suola", amount: "1 tl" },
        { item: "paprikajauhe", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.25 tl" },
        { item: "kevytmaito", amount: "2.5 dl" },
        { item: "kananmuna", amount: "5 kpl" }
      ],
      instructions: "Keitä makaroni. Paista jauheliha, sipuli ja porkkana. Lisää herneet. Sekoita munamaito ja mausteet, kaada pannulle makaronien ja jauhelihan päälle, anna hyytyä.",
      url: "https://kotiliesi.fi/resepti/kana-makaronilaatikko/"
    },
    {
      name: "Tomaattinen kanapasta",
      ingredients: [
        { item: "fusillipasta", amount: "400 g" },
        { item: "aurinkokuivatut tomaatit", amount: "190 g" },
        { item: "tomaattimurska", amount: "400 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "öljy", amount: "2 rkl" },
        { item: "broilerin fileesuikaleet", amount: "400 g" },
        { item: "suola", amount: "1 tl" },
        { item: "sokeri", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "basilikan lehdet", amount: "10 kpl" },
        { item: "vuohenjuusto", amount: "150 g" }
      ],
      instructions: "Paista broileri ja sipulit öljyssä. Lisää tomaattimurska ja aurinkokuivatut tomaatit. Mausta ja sekoita pasta joukkoon, viimeistele vuohenjuustolla ja basilikalla.",
      url: "https://kotiliesi.fi/resepti/kanapasta/"
    },
    {
      name: "Kerma-kanapasta",
      ingredients: [
        { item: "pasta", amount: "300 g" },
        { item: "broilerin fileesuikaleet", amount: "300 g" },
        { item: "kerma", amount: "2 dl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "juusto", amount: "50 g" }
      ],
      instructions: "Keitä pasta. Paista kana ja sipulit, lisää kerma ja juusto. Sekoita pasta joukkoon.",
      url: "https://kotiliesi.fi/resepti/kerma-kanapasta/"
    },
    {
      name: "Kana-riisivuoka",
      ingredients: [
        { item: "riisi", amount: "3 dl" },
        { item: "broilerin fileesuikaleet", amount: "300 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "paprika", amount: "150 g" },
        { item: "kerma", amount: "2 dl" },
        { item: "juusto", amount: "100 g" }
      ],
      instructions: "Keitä riisi. Paista kana ja vihannekset, lisää kerma. Yhdistä riisi ja kana, ripottele juusto päälle ja gratinoi.",
      url: "https://kotiliesi.fi/resepti/kana-riisivuoka/"
    },
    {
      name: "Kana-nuudelikeitto",
      ingredients: [
        { item: "nuudelit", amount: "200 g" },
        { item: "broilerin fileesuikaleet", amount: "200 g" },
        { item: "porkkana", amount: "2 kpl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "1 kpl" },
        { item: "kanafondi", amount: "1 rkl" },
        { item: "vesi", amount: "1 l" }
      ],
      instructions: "Keitä vesi ja fondi, lisää kana ja vihannekset. Keitä nuudelit ja yhdistä keittoon.",
      url: "https://kotiliesi.fi/resepti/kana-nuudelikeitto/"
    },
    {
      name: "Kana-kasviswok",
      ingredients: [
        { item: "broilerin fileesuikaleet", amount: "300 g" },
        { item: "paprika", amount: "150 g" },
        { item: "kesäkurpitsa", amount: "1 kpl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "soijakastike", amount: "3 rkl" },
        { item: "öljy", amount: "2 rkl" }
      ],
      instructions: "Paista kana öljyssä, lisää vihannekset. Mausta soijakastikkeella ja tarjoa riisin kanssa.",
      url: "https://kotiliesi.fi/resepti/kana-kasviswok/"
    },
    {
      name: "Kana-piirakka",
      ingredients: [
        { item: "piirakkapohja", amount: "1 kpl" },
        { item: "broilerin fileesuikaleet", amount: "250 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "paprika", amount: "150 g" },
        { item: "kerma", amount: "2 dl" },
        { item: "juusto", amount: "100 g" }
      ],
      instructions: "Paista kana ja vihannekset, lisää kerma. Kaada täyte pohjalle, ripottele juusto ja paista uunissa.",
      url: "https://kotiliesi.fi/resepti/kana-piirakka/"
    },
    {
      name: "Kana-salaatti",
      ingredients: [
        { item: "broilerin fileesuikaleet", amount: "200 g" },
        { item: "salaatti", amount: "1 kerä" },
        { item: "kurkku", amount: "1 kpl" },
        { item: "tomaatti", amount: "200 g" },
        { item: "fetajuusto", amount: "100 g" },
        { item: "kastike", amount: "2 rkl" }
      ],
      instructions: "Paista kana, anna jäähtyä. Sekoita vihannekset ja feta, lisää kana ja kastike.",
      url: "https://kotiliesi.fi/resepti/kana-salaatti/"
    }
  ],

  kala: [
    {
      name: "Sitruunalohi uunissa",
      ingredients: [
        { item: "kirjolohifilee", amount: "1 kg" },
        { item: "sitruuna", amount: "2 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "oliiviöljy", amount: "2 rkl" },
        { item: "hunaja", amount: "1 rkl" },
        { item: "suola", amount: "1.5 tl" },
        { item: "parsakaali", amount: "500 g" },
        { item: "peruna", amount: "1.5 kg" }
      ],
      instructions: "Mausta lohi sitruunalla, valkosipulilla, öljyllä ja hunajalla. Paista uunissa, tarjoa perunoiden ja parsakaalin kanssa.",
      url: "https://kotiliesi.fi/resepti/sitruunalohi-uunissa/"
    },
    {
      name: "Inkiväärilohi",
      ingredients: [
        { item: "lohifilee", amount: "600 g" },
        { item: "inkivääri", amount: "2 rkl" },
        { item: "soijakastike", amount: "3 rkl" },
        { item: "hunaja", amount: "1 rkl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "lime", amount: "1 kpl" }
      ],
      instructions: "Sekoita marinadi inkivääristä, soijasta, hunajasta ja valkosipulista. Marinoi lohi ja paista uunissa. Viimeistele limellä.",
      url: "https://kotiliesi.fi/ruoka/inkivaarilohi/"
    },
    {
      name: "Lohikeitto",
      ingredients: [
        { item: "lohifilee", amount: "400 g" },
        { item: "peruna", amount: "500 g" },
        { item: "porkkana", amount: "2 kpl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "kalaliemi", amount: "1 l" },
        { item: "kerma", amount: "2 dl" },
        { item: "tilli", amount: "1 ruukku" }
      ],
      instructions: "Keitä perunat ja porkkanat liemessä, lisää lohi ja sipuli. Lopuksi kerma ja tilli.",
      url: "https://kotiliesi.fi/ruoka/uunilohi-ja-muut-helpot-lohiruoat/"
    },
    {
      name: "Kylmäsavulohipasta",
      ingredients: [
        { item: "pasta", amount: "300 g" },
        { item: "kylmäsavulohi", amount: "200 g" },
        { item: "kerma", amount: "2 dl" },
        { item: "sitruuna", amount: "0.5 kpl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "basilika", amount: "1 dl" }
      ],
      instructions: "Keitä pasta, lisää kerma ja kylmäsavulohi. Mausta sitruunalla ja pippurilla, viimeistele basilikalla.",
      url: "https://kotiliesi.fi/ruoka/taydellinen-lohipasta-kotilieden-helpolla-ja-nopealla-ohjeella-onnistut/"
    },
    {
      name: "Thaimaalainen lohicurry",
      ingredients: [
        { item: "lohifilee", amount: "400 g" },
        { item: "curry-tahna", amount: "2 rkl" },
        { item: "kookosmaito", amount: "4 dl" },
        { item: "limetti", amount: "1 kpl" },
        { item: "korianteri", amount: "1 ruukku" },
        { item: "sipuli", amount: "1 kpl" }
      ],
      instructions: "Paista sipuli ja curry-tahna, lisää kookosmaito ja lohi. Hauduta ja viimeistele limellä ja korianterilla.",
      url: "https://kotiliesi.fi/ruoka/helppo-kalaruoka-valmistuu-yhden-padan-taktiikalla-poimi-6-maukasta-kalareseptia/"
    },
    {
      name: "Lohi airfryerissa",
      ingredients: [
        { item: "lohifilee", amount: "400 g" },
        { item: "suola", amount: "4 rkl" }
      ],
      instructions: "Suolaa lohi kevyesti, anna levätä. Paista airfryerissa 180 °C noin 10 minuuttia, tarjoa perunoiden kanssa.",
      url: "https://kotiliesi.fi/resepti/lohi-airfryerissa/"
    }
  ],

  nauta: [
    {
      name: "Perunalasagne",
      ingredients: [
        // Perunaviipaleet
        { item: "perunaviipaleet (pakaste)", amount: "2 ps (à 500 g)" },

        // Jauhelihakastike
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "sipuli", amount: "2 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "tomaattisose", amount: "2 rkl" },
        { item: "tomaattimurska", amount: "500 g" },
        { item: "vesi", amount: "1 dl" },
        { item: "suola", amount: "2 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "oregano", amount: "2 tl" },
        { item: "timjami", amount: "1 tl" },

        // Juustokastike
        { item: "voi", amount: "40 g" },
        { item: "vehnäjauhot", amount: "1 dl" },
        { item: "täysmaito", amount: "1 l" },
        { item: "suola", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.1 tl" },
        { item: "parmesaani", amount: "50 g" },
        { item: "emmental-mozzarellajuustoraaste", amount: "200 g" }
      ],
      instructions: `Jauhelihakastike: Kuori ja hienonna sipulit. Ruskista jauheliha paistokasarissa.
Lisää sipulit ja kuullota hetki. Lisää tomaattisose ja kuumenna. Lisää tomaattimurska, vesi, suola ja pippuri. Anna kiehua kannen alla noin 20 min. Mausta oreganolla ja timjamilla.
<br><br>
Juustokastike: Sulata voi kattilassa ja sekoita joukkoon vehnäjauhot. Lisää osa maidosta, kuumenna kiehuvaksi, lisää loppu maito ja kuumenna. Keitä pari minuuttia ja lisää suola, pippuri ja juustoraasteet.
<br><br>
Kokoaminen: Voitele uunivuoka (32 x 23 cm). Lado pohjalle jauhelihakastiketta, perunaviipaleita, juustokastiketta. Toista kerrokset. Viimeisen kerroksen päälle vain juustokastiketta ja pinnalle juustoraaste. Paista 175 °C noin 1 h. Anna vetäytyä 10 min ennen tarjoamista.`,
      url: "https://www.k-ruoka.fi/reseptit/perunalasagne"
    },
    {
      name: "Nachovuoka",
      ingredients: [
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "tacomausteseos", amount: "1 ps" },
        { item: "vesi", amount: "1 dl" },
        { item: "tortillachipsit", amount: "200 g" },
        { item: "salsadippi (vahva)", amount: "315 g" },
        { item: "maustamaton tuorejuusto", amount: "180 g" },
        { item: "emmental-mozzarellajuustoraaste", amount: "150 g" }
      ],
      instructions: `
Ruskista jauheliha omassa rasvassaan.
Lisää joukkoon hienonnettu sipuli kuullottumaan. Mausta tacomausteseoksella ja lisää vesi. Hauduta 5–10 minuuttia.
Levitä maissilastut laakealle uunivadille. Lisää päälle jauhelihaseos.
Sekoita salsadippi ja tuorejuusto keskenään. Lusikoi seos jauhelihan päälle. Ripottele pinnalle juustoraaste.
Gratinoi 225 asteessa uunin yläosassa 10–15 minuuttia, kunnes juusto on sulanut ja saanut hieman väriä. Tarjoa lisäksi salaattia ja guacamolea.
  `,
      url: "https://www.k-ruoka.fi/reseptit/nachovuoka"
    },
    {
      name: "Pestolihapullat tomaattikastikkeessa",
      ingredients: [
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "punainen pesto", amount: "92 g" },
        { item: "kananmuna", amount: "1 kpl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "tomaattimurska", amount: "500 g" },
        { item: "punainen pesto", amount: "92 g" },
        { item: "kaprikset", amount: "35 g" },
        { item: "parmesaani", amount: "50 g" },
        { item: "basilika", amount: "2 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "spagetti", amount: "350 g" },
        { item: "parmesaani", amount: "50 g" }
      ],
      instructions: `
Sekoita tomaattikastikkeen ainekset uunivuoassa, mukaan lukien kaprikset liemineen.
Sekoita lihapullien ainekset tasaiseksi massaksi. Muotoile massa pulliksi tomaattikastikkeen päälle.
Kypsennä lihapullia 225-asteisessa uunissa noin 20 minuuttia, kunnes pullat ovat kypsiä.
Tarjoa keitetyn spagetin ja raastetun parmesaanin kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/pestolihapullat-tomaattikastikkeessa"
    },

    {
      name: "Jauhelihapasta",
      ingredients: [
        { item: "spagetti", amount: "300 g" },
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "sipuli", amount: "2 kpl" },
        { item: "suola", amount: "0.75 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "pizzamauste", amount: "2 tl" },
        { item: "yrttitomaattimurska", amount: "390 g" },
        { item: "vesi", amount: "2 dl" },
        { item: "maustekurkkuviipaleet", amount: "150 g" },
        { item: "parmesaani", amount: "50 g" }
      ],
      instructions: `
Keitä spagetti pakkauksen ohjeen mukaan. 
Ruskista jauheliha omassa rasvassaan, lisää hienonnettu sipuli ja kuullota. 
Mausta suolalla, pippurilla ja pizzamausteella. Lisää tomaattimurska ja vesi, anna hautua. 
Kuutioi maustekurkut ja lisää kastikkeeseen. Tarjoa parmesaaniraasteen kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/jauhelihapasta"
    },
    {
      name: "Helppo makaronilaatikko",
      ingredients: [
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "margariini", amount: "0.5 rkl" },
        { item: "tuorejuusto", amount: "180 g" },
        { item: "tomaattisose", amount: "3 rkl" },
        { item: "oregano", amount: "3 tl" },
        { item: "timjami", amount: "2 tl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "vesi", amount: "1.5 l" },
        { item: "sipulikeittoainekset", amount: "57 g" },
        { item: "makaroni", amount: "400 g" }
      ],
      instructions: `
Ruskista jauheliha rasvassa. Sekoita joukkoon tuorejuusto, tomaattisose ja mausteet. 
Kiehauta vesi, lisää sipulikeittoainekset ja makaronit, keitä noin 6 minuuttia sekoittaen. 
Lisää jauhelihaseos ja sekoita. Kaada uunivuokaan ja paista 200 °C noin 30 min. Anna vetäytyä 10 min ennen tarjoamista.
  `,
      url: "https://www.k-ruoka.fi/reseptit/helppo-makaronilaatikko"
    },
    {
      name: "Täytetyt tomaatit",
      ingredients: [
        { item: "tomaatti", amount: "1.2 kg" },
        { item: "suola", amount: "0.5 tl" },
        { item: "valkosipulinkynsi", amount: "1 kpl" },
        { item: "oliiviöljy", amount: "3 rkl" },
        { item: "voi", amount: "20 g" },
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "korppujauhot", amount: "0.25 dl" },
        { item: "maito", amount: "0.75 dl" },
        { item: "parmesaani", amount: "75 g" },
        { item: "basilika", amount: "2 tl" },
        { item: "oregano", amount: "2 tl" },
        { item: "mustapippuri", amount: "0.5 tl" }
      ],
      instructions: `
Leikkaa tomaateista hatut ja koverra sisus sekä siemenet. Ripauta 0.25 tl suolaa päälle. Viipaloi valkosipuli.
Sekoita korppujauhot ja maito turpoamaan 5 min. Lisää jauheliha ja muut täytteen ainekset, sekoita tasaiseksi. 
Täytä tomaatit seoksella, nosta hatut päälle. Valuta oliiviöljy ja aseta voi nokare jokaisen tomaatin päälle. Kaada tomaattien neste vuokaan. 
Paista 200 °C 20 min, laske 175 °C ja jatka 10–15 min. Tarjoa kuumana tai hieman jäähtyneenä.
  `,
      url: "https://www.k-ruoka.fi/reseptit/taytetyt-tomaatit"
    },

    {
      name: "Helppo meksikonpata",
      ingredients: [
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "paprika", amount: "200 g" },
        { item: "kirsikkatomaatit", amount: "250 g" },
        { item: "rypsiöljy", amount: "1 rkl" },
        { item: "vesi", amount: "7 dl" },
        { item: "pitkäjyväinen riisi", amount: "3 dl" },
        { item: "tacomausteseos", amount: "1 ps" },
        { item: "paprikajauhe", amount: "1 tl" },
        { item: "juustokumina", amount: "1 tl" },
        { item: "kidneypavut suolaliemessä", amount: "1 tlk" },
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "suola", amount: "0.5 tl" }
      ],
      instructions: `
Kuori ja hienonna sipuli ja valkosipuli. Kuutioi paprika ja puolita tomaatit. 
Kuullota sipuli ja valkosipuli öljyssä kattilassa. Lisää vesi, riisi, tacomauste, paprikajauhe ja juustokumina. Keitä kannen alla 15 min välillä sekoittaen. 
Lisää paprika, tomaatit, valutetut pavut sekä soijarouhe tai ruskistettu jauheliha (tarvittaessa lisää 1½ dl vettä soijarouheen kanssa). Hauduta vielä 10 min kannen alla. 
Mausta tarvittaessa suolalla ja ripottele pinnalle persiljaa tai korianteria. Tarjoa limetinlohkojen ja ranskankerman kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/helppo-meksikonpata"
    },

    {
      name: "Jauhelihakiusaus",
      ingredients: [
        { item: "naudan jauheliha", amount: "400 g" },
        { item: "peruna-sipulisekoitus (pakaste)", amount: "1 kg" },
        { item: "paprika", amount: "170 g" },
        { item: "suola", amount: "1.25 tl" },
        { item: "paprikajauhe", amount: "1 tl" },
        { item: "timjami", amount: "1 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "laktoositon ruokakerma", amount: "4 dl" }
      ],
      instructions: `
Paloittele paprika. Ruskista jauheliha pannulla. Lisää paprika ja paista kunnes se hieman pehmenee. Mausta ½ tl suolaa ja muut mausteet.
Kaada yksi pussillinen peruna-sipulisekoitusta laakeaan uunivuokaan ja mausta ½ tl suolaa. Levitä päälle jauheliha-paprikaseos. Kaada toinen pussillinen peruna-sipulisekoitusta, mausta ½ tl suolaa ja kaada päälle ruokakerma.
Kypsennä uunin alatasolla 225 asteessa 30 min, laske lämpö 200 asteeseen ja kypsennä vielä noin 30 min. Halutessasi lisää pinnalle juustoraastetta loppupaistossa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/jauhelihakiusaus"
    }



  ],


  sika: [
    {
      name: "Italialainen pasta carbonara",
      ingredients: [
        { item: "spagetti", amount: "400 g" },
        { item: "suomalainen pekoni", amount: "150 g" },
        { item: "kananmuna", amount: "2 kpl" },
        { item: "mustapippuri", amount: "1 tl" },
        { item: "parmesaani", amount: "100 g" },
        { item: "suola", amount: "maun mukaan" }
      ],
      instructions: `
Suikaloi pekoni ja paista miedolla lämmöllä, kunnes rasva irtoaa ja pekoni on kypsää. 
Keitä spagetti suolalla maustetussa vedessä pakkauksen ohjeen mukaan. 
Vatkaa kananmunat rikki ja mausta mustapippurilla. Raasta juusto. 
Lisää spagettiin pekoni ja sekoita. Kaada kananmunaseos joukkoon koko ajan vatkaten ja lisää puolet juustosta. Tarvittaessa lisää keitinvettä. 
Lisää loput juustosta sekoittaen. Mausta lopuksi mustapippurilla ja suolalla, tarjoa heti.
  `,
      url: "https://www.k-ruoka.fi/reseptit/italialainen-pasta-carbonara"
    },
    {
      name: "Pekonipyttipannu",
      ingredients: [
        { item: "grillimakkara", amount: "360 g" },
        { item: "suomalainen pekoni", amount: "150 g" },
        { item: "uuni- ja grillikasvikset (pakaste)", amount: "500 g" },
        { item: "kananmuna", amount: "4 kpl" },
        { item: "öljy", amount: "1 rkl" },
        { item: "suola", amount: "0.1 tl" },
        { item: "ruohosipuli", amount: "0.25 dl" },
        { item: "turkkilainen jogurtti", amount: "200 g" },
        { item: "Dijon-sinappi", amount: "3 rkl" },
        { item: "sokeri", amount: "0.1 tl" },
        { item: "mustapippuri", amount: "0.1 tl" }
      ],
      instructions: `
Puolita grillimakkarat ja leikkaa vinoviipaleiksi. Leikkaa pekonit neljään osaan.
Kypsennä pekonit pannulla. Ruskista makkarapalat pekonin rasvassa ja siirrä sivuun.
Paista kasvikset pannulla, lisää pekonit ja makkarat takaisin. 
Paista kananmunat öljyssä ja nosta pyttipannun päälle, mausta suolalla ja koristele ruohosipulilla.
Sekoita kastikkeen ainekset keskenään ja tarjoa pyttipannun kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/pekonipyttipannu"
    },

    {
      name: "Kinkkukiusaus pannulla",
      ingredients: [
        { item: "saunapalvikinkku", amount: "400 g" },
        { item: "peruna", amount: "900 g" },
        { item: "salottisipuli", amount: "70 g" },
        { item: "kana- tai lihafondi", amount: "2 tl" },
        { item: "vesi", amount: "2 dl" },
        { item: "rypsiöljy", amount: "2 rkl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "maustettu ruokakerma (cheddar ja paahdettu sipuli)", amount: "2 dl" },
        { item: "suola", amount: "0.1 tl" },
        { item: "lehtipersilja", amount: "1 ruukku" }
      ],
      instructions: `
Suikaloi kinkku. Pese, kuori ja suikaloi perunat. Hienonna sipulit. Sekoita fondi veden joukkoon.
Kuumenna öljy pannulla, kuullota sipulit ja lisää perunasuikaleet. Paista käännellen muutama minuutti, lisää liemi ja pippuri, peitä kannella ja kypsennä 10 min.
Lisää kinkkusuikaleet, kerma ja suola. Kypsennä ilman kantta, kunnes kerma hieman paksuuntuu ja perunat ovat kypsiä. Hienonna lopuksi persilja ja sekoita joukkoon.
  `,
      url: "https://www.k-ruoka.fi/reseptit/kinkkukiusaus-pannulla"
    },
    {
      name: "Kaalikeitto",
      ingredients: [
        { item: "sika-nautajauheliha", amount: "400 g" },
        { item: "valkokaali", amount: "800 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "3 kpl" },
        { item: "paprikajauhe", amount: "1 tl" },
        { item: "suola", amount: "1 tl" },
        { item: "porkkana", amount: "10 kpl" },
        { item: "vesi", amount: "1.3 l" },
        { item: "lihaliemikuutio", amount: "2 kpl" },
        { item: "kokonainen maustepippuri", amount: "10 kpl" },
        { item: "laakerinlehti", amount: "2 kpl" },
        { item: "meirami", amount: "2 tl" },
        { item: "persilja", amount: "0.25 tl" }
      ],
      instructions: `
Suikaloi kaali. Kuori ja hienonna sipuli ja valkosipulinkynnet. Kuori ja paloittele porkkanat.
Ruskista jauheliha kattilassa. Lisää sipuli, valkosipuli ja porkkanat, kuullota hetki. Mausta suolalla ja paprikajauheella.
Kaada vesi, kiehauta ja lisää lihaliemikuutiot, pippurit ja laakerinlehdet. Sekoita joukkoon kaali.
Anna kiehua kannen alla noin 30 min. Mausta meiramiilla ja tarkista maku. Ripottele pinnalle persiljaa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/kaalikeitto"
    },
    {
      name: "Siskonmakkarakeitto",
      ingredients: [
        { item: "siskonmakkara", amount: "600 g" },
        { item: "vesi", amount: "1 l" },
        { item: "kasvisliemikuutio", amount: "1 kpl" },
        { item: "maustepippuri", amount: "15 kpl" },
        { item: "peruna", amount: "350 g" },
        { item: "keittojuurekset (pakaste)", amount: "500 g" },
        { item: "persilja", amount: "0.25 tl" }
      ],
      instructions: `
Kiehauta vesi, lisää kasvisliemikuutio ja pippurit. 
Kuori ja kuutioi perunat, pane kiehumaan 10–15 min. Lisää jäiset keittojuurekset, odota kiehumista.
Purista siskonmakkara kuorestaan pieniksi paloiksi keittoon, keitä noin 10 min. Tarkista perunoiden kypsyys ja ripottele pinnalle persiljaa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/siskonmakkarakeitto"
    },
    {
      name: "Tomaattinen uunimakkara",
      ingredients: [
        { item: "uunimakkara", amount: "400 g" },
        { item: "paprika", amount: "300 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "öljy", amount: "1 rkl" },
        { item: "tomaattimurska", amount: "500 g" },
        { item: "suola", amount: "0.5 tl" },
        { item: "basilika", amount: "0.75 tl" },
        { item: "mustapippuri", amount: "0.1 tl" },
        { item: "emmentaljuustoraaste", amount: "200 g" },
      ],
      instructions: `
Poista makkarasta kuori ja tee viiltoja. Puhdista ja paloittele paprikat. 
Hienonna sipuli ja valkosipuli, kuullota öljyssä. Lisää tomaattimurska ja mausteet. 
Sekoita paprikat tomaattiseokseen, nosta makkarat päälle ja ripottele juustoraaste. 
Kypsennä 200 °C noin 25 min. Viimeistele tuoreella basilikalla.
  `,
      url: "https://www.k-ruoka.fi/reseptit/tomaattinen-uunimakkara"
    },

    {
      name: "Kinkkupiirakka, pellillinen",
      ingredients: [
        { item: "piirakkataikina", amount: "800 g" },
        { item: "saunapalvikinkku", amount: "400 g" },
        { item: "punasipuli", amount: "120 g" },
        { item: "ruokakerma", amount: "400 ml" },
        { item: "crème fraîche", amount: "150 g" },
        { item: "kananmuna", amount: "3 kpl" },
        { item: "suola", amount: "0.75 tl" },
        { item: "mustapippuri", amount: "0.25 tl" },
        { item: "cayennepippuri", amount: "0.25 tl" },
        { item: "emmental-mozzarellajuustoraaste", amount: "150 g" },
        { item: "basilika", amount: "1 dl" }
      ],
      instructions: `
Ota taikina sulamaan huoneenlämpöön. Kuutioi kinkku ja viipaloi sipuli. 
Vatkaa ruokakerma, crème fraîche ja munat yhteen mausteiden kanssa. 
Kauli taikina pellille. Levitä juuston puolet pohjalle, lisää kinkku ja sipuli. Ripottele yrtit ja loput juustosta pinnalle. Kaada kermaseos päälle ja levitä tasaisesti. 
Paista 200 °C uunissa 35-45 min, hieman keskitasoa alemmalla tasolla. Anna jäähtyä ennen tarjoamista.
  `,
      url: "https://www.k-ruoka.fi/reseptit/kinkkupiirakka-pellillinen"
    },

    {
      name: "Makkarastroganoff",
      ingredients: [
        { item: "lenkkimakkara", amount: "540 g" },
        { item: "oliiviöljy", amount: "1 rkl" },
        { item: "sipulikuutiot", amount: "1 dl" },
        { item: "tomaattisose", amount: "70 ml" },
        { item: "vehnäjauhot", amount: "2 rkl" },
        { item: "vesi", amount: "3 dl" },
        { item: "pippurikerma", amount: "2 dl" },
        { item: "maustekurkku", amount: "120 g" }
      ],
      instructions: `
Kuori ja kuutioi makkara. Paista ruskeaksi pannulla öljyssä. Lisää sipulikuutiot ja kuulota muutama minuutti. 
Lisää tomaattisose ja vehnäjauhot, sekoita ja paista hetki. Kaada päälle vesi ja kerma, sekoita koko ajan. 
Kiehauta ja anna kypsyä miedolla lämmöllä 5 minuuttia. Lisää maustekurkut ja sekoita. Tarjoa keitettyjen perunoiden kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/makkarastroganoff"
    },

    {
      name: "Chorizo-kikhernepata",
      ingredients: [
        { item: "Snellman Chorizo All Natural -makkara", amount: "230 g" },
        { item: "valkosipulinkynsi", amount: "1 kpl" },
        { item: "savupaprikajauhe", amount: "1 tl" },
        { item: "chilitomaattisose", amount: "3 rkl" },
        { item: "kikherneet suolaliemessä", amount: "1 tlk" },
        { item: "Pirkka lehtikaalisuikaleet", amount: "125 g" },
        { item: "tomaattimurska", amount: "500 g" },
        { item: "vesi", amount: "3 dl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "sokeri", amount: "0.25 tl" }
      ],
      instructions: `
Viipaloi makkarat ja ruskista ne kattilassa omassa rasvassaan. Lisää valkosipuli, savupaprika ja chilitomaattisose, kuullota hetki. 
Lisää valutetut ja huuhdotut kikherneet sekä lehtikaalisuikaleet, pyöräytä hetki. 
Lisää tomaattimurska, vesi ja mausteet. Anna hautua miedolla lämmöllä 10–15 minuuttia. Tarjoa keitetyn riisin kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/chorizo-kikhernepata"
    },

    {
      name: "Dandan-nuudelit",
      ingredients: [
        { item: "sian jauheliha", amount: "400 g" },
        { item: "kevätsipuli", amount: "100 g" },
        { item: "kuoritut maapähkinät paahdettuna", amount: "1 dl" },
        { item: "rypsiöljy", amount: "0.5 dl" },
        { item: "chilirouhe", amount: "1 tl" },
        { item: "kiinalainen soijakastike", amount: "4 rkl" },
        { item: "paahdettu seesamiöljy", amount: "1 rkl" },
        { item: "riisiviinietikka", amount: "2 tl" },
        { item: "munanuudelit", amount: "250 g" }
      ],
      instructions: `
Ota jauheliha huoneenlämpöön. Suikaloi kevätsipuli, ota valkoiset osat erikseen.
Paahda maapähkinät wokissa ruskeiksi ja siirrä sivuun.
Kuumenna öljy ja chilirouhe wokissa matalalla lämmöllä muutama minuutti. Lisää jauheliha ja murustele puulastalla. Lisää kevätsipulin valkoiset osat.
Paista kovalla lämmöllä, kunnes jauheliha on tummanruskeaa ja rapeaa. Lisää 2 rkl soijakastiketta ja pidä lämpimänä.
Keitä nuudelit pakkauksen ohjeen mukaan.
Rouhi maapähkinät muruiksi ja sekoita loput 2 rkl soijakastiketta, seesamiöljy ja riisiviinietikka kastikkeeksi.
Valuta nuudelit, sekoita kastike joukkoon ja kumoa nuudelit wokkiin. Lisää kevätsipulit ja maapähkinärouhe. Nostele sekaisin ja tarjoa heti.
  `,
      url: "https://www.k-ruoka.fi/reseptit/dandan-nuudelit"
    },
    {
      name: "Lihakeitto",
      ingredients: [
        { item: "luutonta naudan etuselkää, lapaa tai ulkopaistia", amount: "1 kg" },
        { item: "vesi", amount: "1,5 l" },
        { item: "suola", amount: "1,5 tl" },
        { item: "kokonainen maustepippuri", amount: "10 kpl" },
        { item: "laakerinlehti", amount: "2 kpl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "peruna", amount: "600 g" },
        { item: "porkkana", amount: "4 kpl" },
        { item: "lanttu", amount: "200 g" },
        { item: "palsternakka", amount: "150 g" },
        { item: "selleri", amount: "100 g" },
        { item: "purjo", amount: "150 g" },
        { item: "persilja", amount: "1 dl" }
      ],
      instructions: `
Pane liha kylmään veteen kattilassa ja kuumenna kiehuvaksi. Poista vaahto pinnalta.
Lisää suola, pippurit, laakerinlehdet ja kuorittu, paloiteltu sipuli.
Keitä liha kypsäksi miedolla lämmöllä kannen alla 1,5–2 tuntia.
Paloittele perunat, porkkanat, lanttu, palsternakka ja selleri. Suikaloi purjo.
Nosta liha liemestä ja lisää sinne kaikki kasvikset paitsi perunat. Keitä 10 minuuttia, lisää perunat ja jatka kypsentämistä 20 minuuttia.
Leikkaa liha kuutioiksi ja lisää keittoon. Tarkista maku ja lisää persilja. Tarjoa ruisleivän kanssa.
  `,
      url: "https://www.k-ruoka.fi/reseptit/lihakeitto"
    }
  ],
  tofu: [
    {
      name: "Tofu-tacopelti",
      ingredients: [
        { item: "luomu tofu", amount: "250 g" },
        { item: "bataatti", amount: "500 g" },
        { item: "parsakaali", amount: "400 g" },
        { item: "miniluumutomaatit", amount: "250 g" },
        { item: "vihreitä pitkät pavut", amount: "250 g" },
        { item: "tacomausteseos", amount: "1 ps" },
        { item: "ekstra-neitsytoliiviöljy", amount: "4 rkl" },
        { item: "vaahterasiirappia", amount: "2 rkl" },
        { item: "vesi", amount: "2 rkl" }
      ],
      instructions: `
Kuivaa tofu keittiöpyyhkeellä ja revi noin sentin palasiksi. Pese ja kuori bataatti, leikkaa tikkuiksi. Paloittele parsakaalin varsi ja kukinnot.
Levitä bataatit, parsakaalin varsi ja tofu pellille leivinpaperin päälle. Valuta päälle 2 rkl öljyä. Paista 200 °C uunissa 15 min.
Pese tomaatit ja pavut, lisää pellille. Lisää parsakaalin kukinnot.
Sekoita tacomauste, 2 rkl oliiviöljyä, vaahterasiirappi ja vesi kastikkeeksi. Valuta kastike tofuille ja sekoita. Valuta loppu kastike kasviksille.
Paista vielä noin 15 min tai kunnes kasvikset saavat väriä.
  `,
      url: "https://www.k-ruoka.fi/reseptit/tofu-tacopelti"
    },
    {
      name: "Tofuwokki",
      ingredients: [
        { item: "maustamaton kiinteä tofu", amount: "250 g" },
        { item: "öljy", amount: "2 rkl" },
        { item: "wok-vihannessekoitus (pakaste) tai itämaisia wokvihanneksia (pakaste)", amount: "450 g" },
        { item: "makea chilikastike", amount: "0.5 dl" },
        { item: "mustapippuri", amount: "0.25 tl" },

        // Marinadi
        { item: "soijakastike", amount: "0.75 dl" },
        { item: "valkosipulinkynsi", amount: "3 kpl" },
        { item: "öljy", amount: "3 rkl" },
        { item: "hunaja", amount: "2 rkl" }
      ],
      instructions: `Huuhdo tofu juoksevalla vedellä ja kuivaa talouspaperilla. Leikkaa tofu noin 1 1/2 sentin kuutioiksi ja lado tasapohjaisen astian pohjalle. Sekoita soijakastikkeesta, valkosipulista, öljystä ja hunajasta marinadi ja valele tofukuutiot marinadilla. Anna maustua kylmässä muutama tunti.
<br><br>
Siivilöi tofukuutiot marinadista ja säästä 1–2 rkl marinadia. Paista kuutiot kuumassa öljyssä käännellen, kunnes niihin tulee hiukan paistoväriä. Siirrä sivuun ja pidä kuumana.
<br><br>
Vokkaa vihannekset pakkauksen ohjeen mukaan 6–7 minuuttia ahkerasti käännellen. Lisää paistetut tofukuutiot joukkoon. Mausta chilikastikkeella, jäljellä olevalla marinadilla ja pippurilla. Kuumenna hyvin. Lisää tarvittaessa tilkka vettä, jos seos tuntuu liian kuivalta. Tarjoa riisin kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/tofuwokki"
    },
    {
      name: "Hoisintofu",
      ingredients: [
        { item: "luomu tofu", amount: "500 g" },
        { item: "paahdettua seesamiöljyä", amount: "2 rkl" },

        // Kastike
        { item: "inkivääri", amount: "3 rkl" },
        { item: "valkosipulinkynsi", amount: "3 kpl" },
        { item: "punainen chili", amount: "1 kpl" },
        { item: "hoisinkastike", amount: "1.5 dl" },
        { item: "vesi", amount: "1 dl" },
        { item: "soijakastike", amount: "2 rkl" },
        { item: "paahdettua seesamiöljyä", amount: "2 rkl" },
        { item: "sokeri", amount: "2 rkl" },

        // Lisukkeet
        { item: "riisinuudelit", amount: "180 g" },
        { item: "kevätsipuli", amount: "50 g" },
        { item: "limetti", amount: "1 kpl" }
      ],
      instructions: `Tee kastike: hienonna inkivääri, valkosipuli ja chili kulhoon ja sekoita loput ainekset joukkoon.
<br><br>
Puristele tofua talouspaperin välissä, niin että irtoava neste imeytyy paperiin, ja kuutioi tofu. Kuumenna öljy kasarissa ja paista tofua muutama minuutti. Lisää kastike joukkoon, kiehauta ja nosta kasari liedeltä.
<br><br>
Keitä nuudelit pakkauksen ohjeen mukaan ja huuhtele kylmällä vedellä, etteivät takerru toisiinsa. Tarjoa tofu nuudelien, hienonnetun kevätsipulin ja limetinlohkojen kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/hoisintofu"
    },
    {
      name: "Marinoitu tofu",
      ingredients: [
        { item: "maustamatonta kiinteää tofua", amount: "250 g" },
        { item: "valkosipulinkynsi", amount: "1 kpl" },
        { item: "öljy", amount: "2 rkl" },
        { item: "soijakastike", amount: "1 rkl" },
        { item: "balsamiviinietikka", amount: "1 rkl" },
        { item: "suola", amount: "0.1 tl" },
        { item: "sokeri", amount: "0.1 tl" },
        { item: "mustapippuri", amount: "0.1 tl" }
      ],
      instructions: `Viipaloi tai kuutioi tofu. Hienonna valkosipulinkynsi. Sekoita öljy, soijakastike, balsamiviinietikka ja mausteet keskenään marinadiksi. Kääntele tofupalat marinadissa ja anna marinoitua kylmässä muutama tunti.
<br><br>
Valuta tofupalat paperin päällä kuiviksi ja grillaa tai paista kuumalla pannulla. Halutessasi voit pyöritellä tofupalat maissitärkkelysjauhoissa, jotta pinta tulee rapeaksi.`,
      url: "https://www.k-ruoka.fi/reseptit/marinoitu-tofu"
    },
    {
      name: "Ruskea tofukastike",
      ingredients: [
        { item: "luomu tofu", amount: "250 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "margariini", amount: "3 rkl" },
        { item: "soijakastike", amount: "1 rkl" },
        { item: "vehnäjauhot", amount: "0.5 dl" },
        { item: "vesi", amount: "4 dl" },
        { item: "kaura kasvirasvasekoite", amount: "1 dl" },
        { item: "Dijon-sinappi", amount: "2 tl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.25 tl" },
        { item: "persilja", amount: "4 rkl" },
        { item: "peruna", amount: "500 g" }
      ],
      instructions: `Kääri tofu talouspaperiin ja laita lautanen painoksi. Hienonna sipuli. Kuumenna 1 rkl margariinia pannussa ja murenna tofu mukaan. Paista sekoittaen muutama minuutti. Lisää sipuli ja jatka paistamista vielä 5 minuuttia. Mausta seos soijakastikkeella ja siirrä sivuun.
<br><br>
Pyyhi pannu puhtaaksi, lisää 2 rkl margariinia. Kun rasva kiehuu, lisää vehnäjauhot ja ruskista keskilämmöllä sekoittaen kullanruskeaksi. Lisää vesi pienissä erissä samalla hyvin sekoittaen ja kiehauta. Lisää kauravalmiste ja jatka kypsentämistä muutama minuutti. Mausta sinapilla, suolalla ja pippurilla. Lisää lopuksi tofu-sipuliseos ja ripottele persilja. Tarjoa keitettyjen perunoiden kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/ruskea-tofukastike"
    },

    {
      name: "Tofukeitto",
      ingredients: [
        { item: "purjo", amount: "200 g" },
        { item: "peruna", amount: "600 g" },
        { item: "porkkana", amount: "3 kpl" },
        { item: "vesi", amount: "1 l" },
        { item: "maustepippuri", amount: "10 kpl" },
        { item: "suola", amount: "1 tl" },
        { item: "kylmäsavutofu", amount: "300 g" },
        { item: "rypsiöljy", amount: "1.5 rkl" },
        { item: "kaura kasvirasvasekoite", amount: "2 dl" },
        { item: "sitruunankuori", amount: "1 tl" },
        { item: "tilli", amount: "1 ruukku" },
        { item: "sitruunalohkoja", amount: "tarjoiluun" }
      ],
      instructions: `Halkaise purjo pitkittäin ja huuhtele se. Viipaloi purjo. Kuori ja kuutioi perunat. Kuori porkkanat ja leikkaa puolen sentin kiekoiksi. Laita kattilaan paloitellut kasvikset, vesi, pippurit ja suola. Kuumenna kiehuvaksi ja keitä kannen alla 10 minuuttia.
<br><br>
Pyyhi tofu kuivaksi talouspaperilla ja leikkaa noin sentin kuutioiksi. Paista tofu pannulla öljyssä kauniin väriseksi. Lisää paistetut tofukuutiot kattilaan ja keitä keittoa vielä noin 5 minuuttia, kunnes kasvikset ovat kypsiä.
<br><br>
Lisää keittoon kaura-kasvirasvasekoite ja raastettu sitruunankuori. Kuumenna vielä kiehuvaksi. Lisää lopuksi hienonnettu tilli. Tarjoa keitto sitruunalohkojen kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/tofukeitto"
    }




  ],
  vege: [
    {
      name: "Linssibolognese",
      ingredients: [
        { item: "punaiset linssit", amount: "2 dl" },
        { item: "porkkana", amount: "2 kpl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "punainen chili", amount: "1 kpl" },
        { item: "ekstra-neitsytoliiviöljy", amount: "1 rkl" },
        { item: "tomaattisose", amount: "2 rkl" },
        { item: "juustokumina", amount: "1 tl" },
        { item: "kaneli", amount: "0.25 tl" },
        { item: "savupaprikajauhe", amount: "0.1 tl" },
        { item: "yrttitomaattimurska", amount: "390 g" },
        { item: "vesi", amount: "2 dl" },
        { item: "basilika", amount: "1 dl" },
        { item: "balsamiviinietikka", amount: "1 rkl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "mustapippuri", amount: "0.5 tl" }
      ],
      instructions: `Valuta linssit ja huuhtele kylmällä vedellä. Kuori porkkanat ja raasta karkeaksi raasteeksi. Kuori ja hienonna sipuli ja valkosipuli. Halkaise chili, poista siemenet ja hienonna se. Kuullota sipulia, valkosipulia ja chiliä hetki öljyssä kasarissa. Lisää myös porkkanat kuullottumaan. Lisää tomaattisose, juustokumina, kaneli ja savupaprika ja kuullota vielä hetki.
<br><br>
Lisää tomaattimurska. Mausta basilikalla, etikalla, suolalla ja pippurilla. Huuhtele tomaattimurskapurkki vedellä (2 dl) ja kaada pannulle. Lisää valutetut linssit ja hauduta kastiketta 5–10 minuuttia kannen alla. Tarjoa kastike esimerkiksi pastan kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/linssibolognese"
    },
    {
      name: "Kasviscurry",
      ingredients: [
        { item: "kukkakaali", amount: "1 kpl" },
        { item: "rypsiöljy", amount: "1 rkl" },
        { item: "paprikajauhe", amount: "1 tl" },
        { item: "kurkuma", amount: "1 tl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "punaiset linssit", amount: "2 dl" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "3 kpl" },
        { item: "rypsiöljy", amount: "1 rkl" },
        { item: "inkivääri", amount: "1.5 tl" },
        { item: "keltainen currytahna", amount: "1 rkl" },
        { item: "tomaattisose", amount: "1 rkl" },
        { item: "kaneli", amount: "0.5 tl" },
        { item: "tomaattimurska", amount: "500 g" },
        { item: "vesi", amount: "3 dl" },
        { item: "kaura kasvirasvasekoite", amount: "2 dl" },
        { item: "maapähkinävoi", amount: "0.5 dl" },
        { item: "limetinmehu", amount: "2 rkl" },
        { item: "maustamaton kauragurtti", amount: "1 dl" },
        { item: "korianteri", amount: "0.5 ruukku" },
        { item: "mantelilastut", amount: "0.5 dl" }
      ],
      instructions: `Irrota kukkakaalista kanta ja paloittele kaali nupuiksi. Hienonna kanta. Sekoita öljy ja mausteet kulhossa. Pyörittele kukkakaali mausteöljyssä. Levitä kukkakaalit leivinpaperilla peitetylle uunipellille ja paahda 200-asteisessa uunissa 20 minuuttia.
<br><br>
Huuhtele linssit siivilässä. Kuori ja hienonna sipuli ja valkosipuli. Kuumenna öljy paksupohjaisessa kattilassa. Lisää sipulit, inkivääri, currytahna, kaneli ja tomaattisose. Kuullota pari minuuttia.
<br><br>
Lisää linssit ja tomaattimurska pannulle. Huuhtele tomaattimurskatölkki vedellä ja lisää myös vesi. Jatka kypsentämistä kannen alla miedolla lämmöllä 10 minuuttia. Lisää kaurakasvirasvavalmiste, maapähkinävoi ja limetinmehu.
<br><br>
Nosta paahdetut kukkakaalit curryn päälle ja tarjoa kauragurtin, paahdettujen mantelilastujen ja korianterin kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/kasviscurry"
    },
    {
      name: "Vegewokki",
      ingredients: [
        { item: "vegefileesuikaleet", amount: "320 g" },
        { item: "salaattiherneet", amount: "150 g" },
        { item: "kevätsipuli", amount: "50 g" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "inkivääri", amount: "2 rkl" },
        { item: "rypsiöljy", amount: "2 rkl" },
        { item: "soijakastike", amount: "3 rkl" },
        { item: "riisiviinietikka", amount: "1 rkl" },
        { item: "vaahterasiirappi", amount: "1 rkl" },
        { item: "rapeaa valkosipulia", amount: "maun mukaan" }
      ],
      instructions: `Ota fileesuikaleet huoneenlämpöön. Huuhdo herneet ja leikkaa muutamaan palaan. Hienonna kevätsipulit. Kuori ja suikaloi valkosipulinkynnet ja inkivääri.
<br><br>
Kuumenna öljy wokkipannussa ja lisää valkosipulit sekä inkivääri. Paista sekoitellen 1/2 minuuttia ja lisää fileesuikaleet. Wokkaa muutama minuutti ja lisää herneet, soijakastike, riisiviinietikka ja vaahterasiirappi. Jatka paistamista, kunnes fileesuikaleet ovat täysin kuumenneet, noin 5 minuuttia. Viimeistele rapealla valkosipulilla makusi mukaan. Tarjoa keitetyn riisin kanssa.`,
      url: "https://www.k-ruoka.fi/reseptit/vegewokki"
    },
    {
      name: "Papu-kasvispelti",
      ingredients: [
        { item: "myskikurpitsa", amount: "1 kg" },
        { item: "ruusukaali", amount: "300 g" },
        { item: "valkoiset pavut", amount: "1 tlk" },
        { item: "oliiviöljy", amount: "2.5 rkl" },
        { item: "suola", amount: "1.25 tl" },
        { item: "mustapippuri", amount: "0.25 tl" },
        { item: "pekaanipähkinät", amount: "1 dl" },
        { item: "lehtipersilja", amount: "0.5 ruukku" },
        { item: "korianteri", amount: "0.5 ruukku" },
        { item: "chilirouhe", amount: "0.5 tl" },
        { item: "soijavalmiste", amount: "150 g" },
        { item: "sitruunanmehu", amount: "1 rkl" },
        { item: "sitruunankuori", amount: "1 tl" }
      ],
      instructions: `Leikkaa myskikurpitsa halki ja koverra siemenet pois lusikalla. Viipaloi kurpitsanpuolikkaat ja laita uunipellille leivinpaperin päälle. Siisti ruusukaalien kannat, poista tarvittaessa huonokuntoiset lehdet ja leikkaa kaalit puoliksi. Lisää ne pellille yhdessä valutettujen papujen kanssa. Valuta päälle öljy ja mausta suolalla sekä pippurilla. Paahda kasviksia 200-asteisessa uunissa 25 minuuttia. Ota pelti uunista ja lisää pekaanipähkinät. Laita pelti vielä uuniin 5 minuutiksi.

Sekoita vihreän yrttikastikkeen ainekset keskenään. Sekoita toisessa kulhossa sitruunainen kastike. Valuta yrttikastike paahdettujen kasvisten pinnalle. Tarjoa lisäksi jogurttikastiketta.`,
      url: "https://www.k-ruoka.fi/reseptit/papu-kasvispelti"
    },
    {
      name: "Punajuuripata",
      ingredients: [
        { item: "punajuuri", amount: "1 kg" },
        { item: "palsternakka", amount: "200 g" },
        { item: "juuriselleri", amount: "200 g" },
        { item: "sipuli", amount: "1 kpl" },
        { item: "valkosipulinkynsi", amount: "2 kpl" },
        { item: "rypsiöljy", amount: "1 rkl" },
        { item: "kasvisfondi", amount: "2 rkl" },
        { item: "timjami", amount: "1 tl" },
        { item: "mustapippuri", amount: "0.5 tl" },
        { item: "suola", amount: "0.5 tl" },
        { item: "vesi", amount: "1 l" },
        { item: "punaiset linssit", amount: "2 dl" },
        { item: "balsamiviinietikka", amount: "1 rkl" },
        { item: "chavre levite", amount: "150 g" },
        { item: "tuore timjami", amount: "koristeluun" }
      ],
      instructions: `Pese ja kuori juurekset. Leikkaa punajuuret ohuiksi pieniksi paloiksi. Kuutioi palsternakka ja selleri. Hienonna sipuli ja valkosipuli. Kuumenna öljy padassa ja kuullota sipuleita ja juureksia muutaman minuutin ajan. Lisää pataan fondi, mausteet ja kiehautettu vesi (8 dl). Kuumenna kiehuvaksi liedellä ja nosta 200-asteiseen uuniin puoleksi tunniksi ilman kantta.
<br><br>
Huuhtele linssit kylmällä vedellä. Lisää pataan linssit sekä 2 dl vettä, sekoita. Jatka kypsennystä kannen alla noin pari tuntia, kunnes punajuuri on pehmeää. Sekoita muutaman kerran hauduttamisen aikana.
<br><br>
Mausta lopuksi balsamiviinietikalla. Tarjoa pata sellaisenaan, perunasoseen tai täysjyväriisin kanssa. Lisää annosten pinnalle nokare chavre-levitettä ja koristele tuoreella timjamilla.`,
      url: "https://www.k-ruoka.fi/reseptit/punajuuripata"
    }
  ]

};
