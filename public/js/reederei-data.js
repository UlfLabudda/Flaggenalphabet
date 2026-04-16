/**
 * Reedereien-Daten – Top-15-Containerreedereien weltweit
 * Stand: 2025 – Angaben können sich geändert haben
 */

const REEDEREIEN = [
  {
    id: 'msc',
    name: 'Mediterranean Shipping Company',
    shortName: 'MSC',
    country: 'Schweiz',
    countryCode: 'ch',
    headquarters: 'Genf',
    founded: 1970,
    ceo: 'Soren Toft',
    fleetSize: 840,
    ships: [
      { type: 'Containerschiff', count: 819 },
      { type: 'Kreuzfahrtschiff', count: 21 }
    ],
    flagStates: ['Panama', 'Liberia', 'Marshall Islands', 'Italien'],
    mainFlagCode: 'ch',
    region: 'Europa',
    specialization: 'Container',
    note: 'MSC ist die weltgrößte Containerreederei nach Kapazität (TEU). Sie wurde 1970 vom Kapitän Gianluigi Aponte gegründet, der mit einem einzigen Frachtschiff begann. Das Familienunternehmen betreibt außerdem die Kreuzfahrtlinie MSC Cruises.'
  },
  {
    id: 'maersk',
    name: 'A.P. Møller-Mærsk',
    shortName: 'Maersk',
    country: 'Dänemark',
    countryCode: 'dk',
    headquarters: 'Kopenhagen',
    founded: 1904,
    ceo: 'Vincent Clerc',
    fleetSize: 697,
    ships: [
      { type: 'Containerschiff', count: 650 },
      { type: 'Tanker', count: 30 },
      { type: 'Massengutfrachter', count: 17 }
    ],
    flagStates: ['Dänemark', 'Marshall Islands', 'Liberia', 'Singapur'],
    mainFlagCode: 'dk',
    region: 'Europa',
    specialization: 'Container',
    note: 'Maersk ist eine der ältesten Reedereien der Welt und hat seinen Hauptsitz in Kopenhagen. Das Unternehmen wurde 1904 von Arnold Peter Møller gegründet. Neben dem Containertransport betreibt Maersk auch Häfen, Logistik und Lagerhaltung weltweit.'
  },
  {
    id: 'cma-cgm',
    name: 'CMA CGM Group',
    shortName: 'CMA CGM',
    country: 'Frankreich',
    countryCode: 'fr',
    headquarters: 'Marseille',
    founded: 1978,
    ceo: 'Rodolphe Saadé',
    fleetSize: 620,
    ships: [
      { type: 'Containerschiff', count: 590 },
      { type: 'Ro-Ro-Schiff', count: 15 },
      { type: 'Sonstiges', count: 15 }
    ],
    flagStates: ['Frankreich', 'Malta', 'Liberia', 'Marshall Islands'],
    mainFlagCode: 'fr',
    region: 'Europa',
    specialization: 'Container',
    note: 'CMA CGM wurde 1978 durch die Fusion der Compagnie Maritime d\'Affrètement und der Compagnie Générale Maritime gegründet. Das Unternehmen kaufte 2017 die Singapurer Reederei APL und ist heute der drittgrößte Containerreeder der Welt.'
  },
  {
    id: 'cosco',
    name: 'COSCO Shipping Lines',
    shortName: 'COSCO',
    country: 'China',
    countryCode: 'cn',
    headquarters: 'Shanghai',
    founded: 1961,
    ceo: 'Wan Min',
    fleetSize: 490,
    ships: [
      { type: 'Containerschiff', count: 350 },
      { type: 'Massengutfrachter', count: 80 },
      { type: 'Tanker', count: 40 },
      { type: 'Sonstiges', count: 20 }
    ],
    flagStates: ['China', 'Hongkong', 'Panama', 'Marshall Islands'],
    mainFlagCode: 'cn',
    region: 'Asien',
    specialization: 'Gemischt',
    note: 'COSCO (China Ocean Shipping Company) ist ein staatlicher chinesischer Konzern, der 1961 gegründet wurde. Nach der Fusion mit China Shipping im Jahr 2016 ist COSCO einer der größten Schifffahrtskonzerne der Welt und betreibt auch Häfen in Europa, Afrika und Asien.'
  },
  {
    id: 'hapag-lloyd',
    name: 'Hapag-Lloyd AG',
    shortName: 'Hapag-Lloyd',
    country: 'Deutschland',
    countryCode: 'de',
    headquarters: 'Hamburg',
    founded: 1970,
    ceo: 'Rolf Habben Jansen',
    fleetSize: 260,
    ships: [
      { type: 'Containerschiff', count: 258 },
      { type: 'Sonstiges', count: 2 }
    ],
    flagStates: ['Deutschland', 'Liberia', 'Marshall Islands', 'Bahamas'],
    mainFlagCode: 'de',
    region: 'Europa',
    specialization: 'Container',
    note: 'Hapag-Lloyd entstand 1970 aus der Fusion der Hamburg-Amerika-Linie (gegr. 1847) und des Norddeutschen Lloyd (gegr. 1857). Das Hamburger Unternehmen ist die fünftgrößte Containerreederei der Welt und bekannt für hohe Qualitätsstandards.'
  },
  {
    id: 'evergreen',
    name: 'Evergreen Marine Corporation',
    shortName: 'Evergreen',
    country: 'Taiwan',
    countryCode: 'tw',
    headquarters: 'Luzhu, Taoyuan',
    founded: 1968,
    ceo: 'Eric Hsieh',
    fleetSize: 210,
    ships: [
      { type: 'Containerschiff', count: 210 }
    ],
    flagStates: ['Taiwan', 'Panama', 'Liberia', 'Bahamas'],
    mainFlagCode: 'tw',
    region: 'Asien',
    specialization: 'Container',
    note: 'Evergreen wurde 1968 von Chang Yung-fa gegründet und ist für seine grünen Schiffe bekannt. Das Unternehmen betreibt auch Evergreen International Airlines. Im März 2021 blockierte das Schiff Ever Given sechs Tage lang den Suezkanal – es gehört zu einem von Evergreen gecharterten Schiff.'
  },
  {
    id: 'one',
    name: 'Ocean Network Express',
    shortName: 'ONE',
    country: 'Japan',
    countryCode: 'jp',
    headquarters: 'Singapur',
    founded: 2017,
    ceo: 'Kenichi Watanabe',
    fleetSize: 240,
    ships: [
      { type: 'Containerschiff', count: 240 }
    ],
    flagStates: ['Japan', 'Panama', 'Marshall Islands', 'Singapur'],
    mainFlagCode: 'jp',
    region: 'Asien',
    specialization: 'Container',
    note: 'ONE wurde 2017 durch die Zusammenführung der Containertransportsparten von MOL, NYK Line und K Line gegründet. Trotz des Hauptsitzes in Singapur ist das Unternehmen japanisch. Die Schiffe von ONE sind charakteristisch in Magenta (Pink) lackiert.'
  },
  {
    id: 'yang-ming',
    name: 'Yang Ming Marine Transport',
    shortName: 'Yang Ming',
    country: 'Taiwan',
    countryCode: 'tw',
    headquarters: 'Keelung',
    founded: 1972,
    ceo: 'Clarence Liu',
    fleetSize: 98,
    ships: [
      { type: 'Containerschiff', count: 98 }
    ],
    flagStates: ['Taiwan', 'Panama', 'Liberia'],
    mainFlagCode: 'tw',
    region: 'Asien',
    specialization: 'Container',
    note: 'Yang Ming wurde 1972 als staatlich kontrollierte Reederei gegründet und hat seinen Sitz in Keelung, Taiwan. Das Unternehmen ist Mitglied der THE Alliance (zusammen mit Hapag-Lloyd und ONE) und einer der bedeutendsten Containerreeder Asiens.'
  },
  {
    id: 'hmm',
    name: 'HMM Co., Ltd.',
    shortName: 'HMM',
    country: 'Südkorea',
    countryCode: 'kr',
    headquarters: 'Seoul',
    founded: 1976,
    ceo: 'Kim Kyung-bae',
    fleetSize: 74,
    ships: [
      { type: 'Containerschiff', count: 74 }
    ],
    flagStates: ['Südkorea', 'Panama', 'Marshall Islands'],
    mainFlagCode: 'kr',
    region: 'Asien',
    specialization: 'Container',
    note: 'HMM (früher Hyundai Merchant Marine) ist die größte südkoreanische Reederei und wurde 1976 gegründet. Das Unternehmen betreibt einige der weltweit größten Containerschiffe mit einer Kapazität von bis zu 24.000 TEU. HMM ist Mitglied der THE Alliance.'
  },
  {
    id: 'zim',
    name: 'ZIM Integrated Shipping Services',
    shortName: 'ZIM',
    country: 'Israel',
    countryCode: 'il',
    headquarters: 'Haifa',
    founded: 1945,
    ceo: 'Eli Glickman',
    fleetSize: 148,
    ships: [
      { type: 'Containerschiff', count: 148 }
    ],
    flagStates: ['Israel', 'Marshall Islands', 'Liberia', 'Panama'],
    mainFlagCode: 'il',
    region: 'Asien',
    specialization: 'Container',
    note: 'ZIM wurde 1945 noch vor der Staatsgründung Israels gegründet und hat seinen Hauptsitz in Haifa. Das Unternehmen ist bekannt für seine Flexibilität und chartert einen Großteil seiner Flotte. ZIM war 2021 das IPO-Highlight an der New Yorker Börse.'
  },
  {
    id: 'pil',
    name: 'Pacific International Lines',
    shortName: 'PIL',
    country: 'Singapur',
    countryCode: 'sg',
    headquarters: 'Singapur',
    founded: 1967,
    ceo: 'Lars Kastrup',
    fleetSize: 95,
    ships: [
      { type: 'Containerschiff', count: 90 },
      { type: 'Massengutfrachter', count: 5 }
    ],
    flagStates: ['Singapur', 'Panama', 'Hong Kong'],
    mainFlagCode: 'sg',
    region: 'Asien',
    specialization: 'Container',
    note: 'PIL wurde 1967 von Chang Yun Chung gegründet und ist auf Routen in Asien, Afrika und dem Nahen Osten spezialisiert. Das Unternehmen durchlief 2020 eine finanzielle Restrukturierung und konzentriert sich seitdem auf profitable Handelsrouten.'
  },
  {
    id: 'wan-hai',
    name: 'Wan Hai Lines',
    shortName: 'Wan Hai',
    country: 'Taiwan',
    countryCode: 'tw',
    headquarters: 'Taipei',
    founded: 1965,
    ceo: 'Richard Chen',
    fleetSize: 103,
    ships: [
      { type: 'Containerschiff', count: 103 }
    ],
    flagStates: ['Taiwan', 'Panama', 'Liberia'],
    mainFlagCode: 'tw',
    region: 'Asien',
    specialization: 'Container',
    note: 'Wan Hai Lines wurde 1965 gegründet und ist auf den innerasiatischen Containerverkehr spezialisiert, insbesondere auf Routen zwischen Nordostasien und Südostasien. Das Unternehmen hat sich in den letzten Jahren auf internationale Routen ausgeweitet.'
  },
  {
    id: 'nyk',
    name: 'Nippon Yusen Kaisha',
    shortName: 'NYK Line',
    country: 'Japan',
    countryCode: 'jp',
    headquarters: 'Tokio',
    founded: 1885,
    ceo: 'Takaya Soga',
    fleetSize: 820,
    ships: [
      { type: 'Autotransporter', count: 120 },
      { type: 'Massengutfrachter', count: 250 },
      { type: 'Tanker', count: 200 },
      { type: 'Containerschiff', count: 200 },
      { type: 'Sonstiges', count: 50 }
    ],
    flagStates: ['Japan', 'Panama', 'Bahamas', 'Marshall Islands'],
    mainFlagCode: 'jp',
    region: 'Asien',
    specialization: 'Gemischt',
    note: 'NYK Line (Nippon Yusen Kaisha) ist eine der ältesten und größten japanischen Reedereien, gegründet 1885. Das Unternehmen betreibt eine der weltgrößten Flotten für Autotransporter (Fahrzeugträger) und ist Teil eines großen Logistikkonzerns.'
  },
  {
    id: 'mol',
    name: 'Mitsui O.S.K. Lines',
    shortName: 'MOL',
    country: 'Japan',
    countryCode: 'jp',
    headquarters: 'Tokio',
    founded: 1884,
    ceo: 'Takeshi Hashimoto',
    fleetSize: 810,
    ships: [
      { type: 'Tanker', count: 280 },
      { type: 'Massengutfrachter', count: 200 },
      { type: 'Autotransporter', count: 110 },
      { type: 'Containerschiff', count: 150 },
      { type: 'LNG-Tanker', count: 70 }
    ],
    flagStates: ['Japan', 'Panama', 'Marshall Islands', 'Bahamas'],
    mainFlagCode: 'jp',
    region: 'Asien',
    specialization: 'Gemischt',
    note: 'MOL (Mitsui O.S.K. Lines) wurde 1884 gegründet und ist einer der größten Schifffahrtskonzerne der Welt. Neben Containern transportiert MOL vor allem Flüssiggas (LNG), Rohöl und Autos. MOL ist bekannt für seinen Fokus auf umweltfreundliche Schifffahrt.'
  },
  {
    id: 'aida',
    name: 'AIDA Cruises',
    shortName: 'AIDA',
    country: 'Deutschland',
    countryCode: 'de',
    headquarters: 'Rostock',
    founded: 1960,
    ceo: 'Jens Koch',
    fleetSize: 14,
    ships: [
      { type: 'Kreuzfahrtschiff', count: 14 }
    ],
    flagStates: ['Deutschland', 'Italien', 'Niederlande'],
    mainFlagCode: 'de',
    region: 'Europa',
    specialization: 'Kreuzfahrt',
    note: 'AIDA Cruises ist die größte deutsche Kreuzfahrtreederei und gehört zum Carnival-Konzern. Das Unternehmen wurde 1960 als Deutsche Seereederei gegründet und fokussiert sich auf den deutschen Markt. AIDA-Schiffe sind an ihrem markanten Mund-Nase-Motiv erkennbar.'
  }
];
