/**
 * Australien – Länderdaten & Bundesstaaten/Territorien
 * Stand: 2025
 */

/* ── Ozeanische Länder ───────────────────────────────── */
const AUSTRALIA_COUNTRIES = [
  {
    name: 'Australien',
    code: 'au',
    capital: 'Canberra',
    founded: 1901,
    population: 26500000,
    president: 'Anthony Albanese (Premierminister); König Charles III. (Staatsoberhaupt)',
    languages: ['Englisch'],
    currency: 'Australischer Dollar (AUD)',
    area: 7692024,
    region: 'Australien',
    note: 'Sechstgrößtes Land der Welt nach Fläche; einziges Land, das einen gesamten Kontinent umfasst. Bekannt für einzigartige Tierwelt (Känguru, Koala, Schnabeltier) und das Great Barrier Reef.',
    hasSubview: true,
    subviewKey: 'australia_states',
    subviewLabel: '🏛 Alle Bundesstaaten & Territorien anzeigen'
  },
  {
    name: 'Neuseeland',
    code: 'nz',
    capital: 'Wellington',
    founded: 1907,
    population: 5100000,
    president: 'Christopher Luxon (Premierminister); König Charles III. (Staatsoberhaupt)',
    languages: ['Englisch', 'Māori', 'Neuseeland-Gebärdensprache'],
    currency: 'Neuseeland-Dollar (NZD)',
    area: 270467,
    region: 'Polynesien',
    note: 'Bekannt für atemberaubende Landschaften (Drehort der Herr-der-Ringe-Trilogie); Heimat der indigenen Māori-Kultur; erstes Land der Welt das Frauen das Wahlrecht gab (1893).'
  },
  {
    name: 'Papua-Neuguinea',
    code: 'pg',
    capital: 'Port Moresby',
    founded: 1975,
    population: 10000000,
    president: 'James Marape (Premierminister); König Charles III. (Staatsoberhaupt)',
    languages: ['Englisch', 'Tok Pisin', 'Hiri Motu'],
    currency: 'Kina (PGK)',
    area: 462840,
    region: 'Melanesien',
    note: 'Bevölkerungsreichstes Land Ozeaniens; Heimat von über 800 Sprachen (sprachlich vielfältigstes Land der Welt); große unberührte Regenwälder und reiche Biodiversität.'
  },
  {
    name: 'Fidschi',
    code: 'fj',
    capital: 'Suva',
    founded: 1970,
    population: 930000,
    president: 'Ratu Wiliame Katonivere (Präsident); Sitiveni Rabuka (Premierminister)',
    languages: ['Englisch', 'Fidschi', 'Hindi'],
    currency: 'Fidschi-Dollar (FJD)',
    area: 18274,
    region: 'Melanesien',
    note: 'Archipel aus 333 Inseln im Südpazifik; bedeutendes Touristenziel mit Traumstränden und Korallenriffen; multikulturelle Gesellschaft mit fidschiindischer und indigener Bevölkerung.'
  },
  {
    name: 'Salomonen',
    code: 'sb',
    capital: 'Honiara',
    founded: 1978,
    population: 740000,
    president: 'Jeremiah Manele (Premierminister); König Charles III. (Staatsoberhaupt)',
    languages: ['Englisch'],
    currency: 'Salomonen-Dollar (SBD)',
    area: 28400,
    region: 'Melanesien',
    note: 'Archipel aus über 900 Inseln; Schauplatz heftiger Kämpfe im Zweiten Weltkrieg (Guadalcanal); reiche Unterwasserwelt mit unberührten Korallenriffen; zunehmende chinesische Präsenz seit 2019.'
  },
  {
    name: 'Vanuatu',
    code: 'vu',
    capital: 'Port Vila',
    founded: 1980,
    population: 330000,
    president: 'Nikenike Vurobaravu (Präsident); Charlot Salwai (Premierminister)',
    languages: ['Bislama', 'Englisch', 'Französisch'],
    currency: 'Vatu (VUV)',
    area: 12189,
    region: 'Melanesien',
    note: 'Früher bekannt als Neue Hebriden; ehemalige britisch-französische Kondominium; Heimat von über 100 indigenen Sprachen; bekannt für aktive Vulkane und Bungee-Jumping (Ursprung auf Vanuatu).'
  },
  {
    name: 'Samoa',
    code: 'ws',
    capital: 'Apia',
    founded: 1962,
    population: 220000,
    president: 'Fiame Naomi Mataʻafa (Premierministerin); Tuimalealiʻifano Vaʻaletoʻo (Staatsoberhaupt)',
    languages: ['Samoanisch', 'Englisch'],
    currency: 'Tālā (WST)',
    area: 2831,
    region: 'Polynesien',
    note: 'Erstes polynesisches Land, das unabhängig wurde (1962); bekannt für Fa\'asamoa (samoanische Lebensweise), Fafine-Tradition und als Heimat von Schriftsteller Robert Louis Stevenson.'
  },
  {
    name: 'Tonga',
    code: 'to',
    capital: "Nukuʻalofa",
    founded: 1970,
    population: 100000,
    president: "König Tupou VI.; Siaosi Sovaleni (Premierminister)",
    languages: ['Tongaisch', 'Englisch'],
    currency: "Paʻanga (TOP)",
    area: 747,
    region: 'Polynesien',
    note: 'Einziges verbliebenes Königreich Polynesiens; wurde nie kolonisiert; berühmt für seine Rugby-Nationalmannschaft und die jährliche Humpback-Wal-Saison im Südpazifik.'
  },
  {
    name: 'Mikronesien',
    code: 'fm',
    capital: 'Palikir',
    founded: 1986,
    population: 115000,
    president: 'Wesley Simina (Präsident)',
    languages: ['Englisch'],
    currency: 'US-Dollar (USD)',
    area: 702,
    region: 'Mikronesien',
    note: 'Föderierte Staaten aus vier Hauptstaaten (Pohnpei, Chuuk, Yap, Kosrae); seit 1986 in freier Assoziation mit den USA; bekannt für die versunkene japanische Flotte in der Chuuk-Lagune (Tauchen).'
  },
  {
    name: 'Palau',
    code: 'pw',
    capital: 'Ngerulmud',
    founded: 1994,
    population: 18000,
    president: 'Surangel Whipps Jr. (Präsident)',
    languages: ['Palauisch', 'Englisch'],
    currency: 'US-Dollar (USD)',
    area: 459,
    region: 'Mikronesien',
    note: 'Bekannt als eines der besten Tauchdestinationen weltweit (Korallenriffe, Quallensee); seit 1994 in freier Assoziation mit den USA; Vorreiter im Meeresschutz.'
  },
  {
    name: 'Marshallinseln',
    code: 'mh',
    capital: 'Majuro',
    founded: 1986,
    population: 42000,
    president: 'Hilda Heine (Präsidentin)',
    languages: ['Marshallesisch', 'Englisch'],
    currency: 'US-Dollar (USD)',
    area: 181,
    region: 'Mikronesien',
    note: 'Atollstaat stark durch den Klimawandel bedroht (nur 2m über Meeresspiegel); Schauplatz der US-amerikanischen Atomtests 1946–1958 auf Bikini-Atoll; in freier Assoziation mit den USA.'
  },
  {
    name: 'Kiribati',
    code: 'ki',
    capital: 'Tarawa',
    founded: 1979,
    population: 120000,
    president: 'Taneti Maamau (Präsident)',
    languages: ['I-Kiribati', 'Englisch'],
    currency: 'Australischer Dollar (AUD)',
    area: 811,
    region: 'Mikronesien',
    note: 'Einziges Land das in allen vier Hemisphären liegt; durch den Klimawandel vom Untergang bedroht; erste Nation die einen neuen Tag begrüßt (östlichste Zeitzone); Schauplatz des Battle of Tarawa (1943).'
  },
  {
    name: 'Tuvalu',
    code: 'tv',
    capital: 'Funafuti',
    founded: 1978,
    population: 11000,
    president: 'Feleti Teo (Premierminister); König Charles III. (Staatsoberhaupt)',
    languages: ['Tuvaluisch', 'Englisch'],
    currency: 'Australischer Dollar (AUD)',
    area: 26,
    region: 'Polynesien',
    note: 'Viertkleinster Staat der Welt; liegt nur 3 Meter über dem Meeresspiegel und droht durch den Klimawandel vollständig zu versinken; finanziert sich u.a. durch Vergabe der Internet-Domain ".tv".'
  },
  {
    name: 'Nauru',
    code: 'nr',
    capital: 'Yaren (de facto)',
    founded: 1968,
    population: 10000,
    president: 'David Adeang (Präsident)',
    languages: ['Nauruisch', 'Englisch'],
    currency: 'Australischer Dollar (AUD)',
    area: 21,
    region: 'Mikronesien',
    note: 'Drittkleinster Staat der Welt (nach Vatikan und Monaco); ehemals reichstes Land Ozeaniens durch Phosphatabbau; nach Erschöpfung der Ressourcen heute stark verschuldet; betreibt ein australisches Asylbewerber-Lager.'
  }
];

/* ── Australische Bundesstaaten & Territorien ─────────── */
const AUSTRALIA_STATES = [
  {
    name: 'New South Wales',
    capital: 'Sydney',
    founded: 1788,
    population: 8300000,
    premier: 'Chris Minns (Labor)',
    area: 809444,
    region: 'Ostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_South_Wales.svg',
    note: 'Bevölkerungsreichster Bundesstaat Australiens. Heimat der Oper Sydney, der Harbour Bridge und des Blue Mountains-Nationalparks. Als erste britische Kolonie 1788 gegründet.'
  },
  {
    name: 'Victoria',
    capital: 'Melbourne',
    founded: 1851,
    population: 7000000,
    premier: 'Jacinta Allan (Labor)',
    area: 237629,
    region: 'Südostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Victoria_(Australia).svg',
    note: 'Melbourne gilt als Kulturhauptstadt Australiens und wurde mehrfach zur lebenswertesten Stadt der Welt gekürt. Kleinster Festlandstaat nach Fläche; Heimat des Melbourne Cup Pferderennens.'
  },
  {
    name: 'Queensland',
    capital: 'Brisbane',
    founded: 1859,
    population: 5500000,
    premier: 'David Crisafulli (Liberal National Party)',
    area: 1852642,
    region: 'Nordostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Queensland.svg',
    note: 'Zweitgrößter Bundesstaat nach Fläche. Heimat des Great Barrier Reef, des größten Korallenriffs der Welt, und des Daintree-Regenwalds – einem der ältesten tropischen Regenwälder der Erde.'
  },
  {
    name: 'South Australia',
    capital: 'Adelaide',
    founded: 1836,
    population: 1900000,
    premier: 'Peter Malinauskas (Labor)',
    area: 1044353,
    region: 'Südaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Australia.svg',
    note: 'Bekannt als „Festival State" dank zahlreicher internationaler Kulturveranstaltungen. Berühmte Weinregionen wie das Barossa Valley und McLaren Vale; Heimat der antiken Flindersberg-Kette.'
  },
  {
    name: 'Western Australia',
    capital: 'Perth',
    founded: 1829,
    population: 3000000,
    premier: 'Roger Cook (Labor)',
    area: 2529875,
    region: 'Westaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Western_Australia.svg',
    note: 'Flächengrößter Bundesstaat – mit 2,5 Mio. km² größer als Westeuropa. Heimat des Ningaloo Riffs, der Kimberley-Schluchten und bedeutender Eisenerz- und Goldvorkommen.'
  },
  {
    name: 'Tasmania',
    capital: 'Hobart',
    founded: 1825,
    population: 570000,
    premier: 'Jeremy Rockliff (Liberal)',
    area: 90758,
    region: 'Inselstaat',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tasmania.svg',
    note: 'Einziger australischer Inselstaat; liegt 240 km südlich des Festlandes über die Bass-Straße. Bekannt für unberührte Wildnis, den Tasmanischen Teufel und hochwertige Lebensmittel- und Weinproduktion.'
  },
  {
    name: 'Australian Capital Territory',
    capital: 'Canberra',
    founded: 1911,
    population: 470000,
    premier: 'Andrew Barr (Labor, Chief Minister)',
    area: 2358,
    region: 'Südostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Australian_Capital_Territory.svg',
    note: 'Heimat der Bundeshauptstadt Canberra, die 1913 als Kompromiss zwischen Sydney und Melbourne gegründet wurde. Beherbergt das Parlament, zahlreiche Nationalmuseen und die Australian National University.'
  },
  {
    name: 'Northern Territory',
    capital: 'Darwin',
    founded: 1911,
    population: 260000,
    premier: 'Lia Finocchiaro (Country Liberal Party, Chief Minister)',
    area: 1349129,
    region: 'Nordaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Northern_Territory.svg',
    note: 'Heimat von Uluru (Ayers Rock), dem heiligen Felsen der Anangu. Über 30 % der Bevölkerung sind Indigene Australier – einer der höchsten Anteile in ganz Australien. Noch kein vollwertiger Bundesstaat.'
  }
];
