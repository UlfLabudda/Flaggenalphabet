/**
 * ICS Maritime Signal Flags
 * Alle 26 Buchstabenflaggen, 10 Zahlenwimpel,
 * 3 Ersatzflaggen und der Antwortwimpel.
 *
 * Farben (ICS-Standard):
 *   Blau   #003B8E   Rot    #CC0000
 *   Gelb   #F0C000   Schwarz #000000
 *   Weiß   #FFFFFF
 *
 * viewBox: "0 0 90 60" für Rechteck-Flaggen
 * Wimpel:  Dreieck-Form, Spitze rechts bei (90,30)
 */

const FLAGS = [

  /* ── BUCHSTABENFLAGGEN A–Z ──────────────────────────── */

  {
    id: 'A', phonetic: 'Alfa', type: 'letter', morse: '·–',
    meaning: 'Taucher im Wasser — Abstand halten, langsam fahren',
    description: 'Wird gesetzt, wenn Taucher der eigenen Besatzung unter Wasser sind. ' +
      'Andere Schiffe müssen großen Abstand halten und mit niedriger Geschwindigkeit fahren, ' +
      'um die Taucher nicht durch Sog oder Schraubenwirbel zu gefährden.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <polygon points="30,0 90,0 67,30 90,60 30,60" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'B', phonetic: 'Bravo', type: 'letter', morse: '–···',
    meaning: 'Gefährliche Güter — Laden, Löschen oder Befördern von Explosivstoffen',
    description: 'Dieses einfarbig rote Signal zeigt an, dass das Schiff gefährliche Güter ' +
      '(insbesondere Explosivstoffe oder entflammbare Ladung) lädt, löscht oder befördert. ' +
      'Andere Schiffe und Anlegestellen sind zur besonderen Vorsicht verpflichtet.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'C', phonetic: 'Charlie', type: 'letter', morse: '–·–·',
    meaning: 'Ja / Bejahung',
    description: 'Bestätigt eine Frage oder Aussage eines anderen Schiffes. ' +
      'Erkennbar an den fünf horizontalen Streifen in Blau–Weiß–Rot–Weiß–Blau, ' +
      'die von weitem gut sichtbar sind.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#003B8E"/>
      <rect y="12" width="90" height="12" fill="#FFFFFF"/>
      <rect y="24" width="90" height="12" fill="#CC0000"/>
      <rect y="36" width="90" height="12" fill="#FFFFFF"/>
      <rect y="48" width="90" height="12" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'D', phonetic: 'Delta', type: 'letter', morse: '–··',
    meaning: 'Halten Sie sich fern — manövrierunfähig',
    description: 'Das Schiff ist in seiner Manövrierfähigkeit eingeschränkt, ' +
      'z. B. durch Havarie, Schlepptau oder Unterwasserarbeiten. ' +
      'Andere Fahrzeuge müssen ausweichen und freie Fahrt lassen.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#F0C000"/>
      <rect x="30" width="30" height="60" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'E', phonetic: 'Echo', type: 'letter', morse: '·',
    meaning: 'Ich ändere meinen Kurs nach Steuerbord',
    description: 'Zeigt an, dass das Schiff eine Kursänderung nach rechts (Steuerbord) vornimmt. ' +
      'Das Signal ergänzt die Pfeiftöne gemäß KVR und wird vor allem in engen Fahrwassern eingesetzt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="45" height="60" fill="#003B8E"/>
      <rect x="45" width="45" height="60" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'F', phonetic: 'Foxtrot', type: 'letter', morse: '··–·',
    meaning: 'Manövrierunfähig — Hilfe erbeten',
    description: 'Das Schiff hat eine Havarie erlitten und ist manövrierunfähig oder in Not. ' +
      'Es bittet andere Schiffe um Hilfe. Die rote Raute auf weißem Grund ist auch bei schlechter Sicht gut erkennbar.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <polygon points="45,4 86,30 45,56 4,30" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'G', phonetic: 'Golf', type: 'letter', morse: '––·',
    meaning: 'Ich benötige einen Lotsen',
    description: 'Ein Schiff signalisiert Bedarf nach einem Lotsen, um sicher in den Hafen oder durch enge Fahrwasser geführt zu werden. ' +
      'Auf Fischereifahrzeugen: "Ich hole Netze ein." ' +
      'Die sechs senkrechten Streifen sind aus der Ferne gut erkennbar.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="0"  width="15" height="60" fill="#F0C000"/>
      <rect x="15" width="15" height="60" fill="#003B8E"/>
      <rect x="30" width="15" height="60" fill="#F0C000"/>
      <rect x="45" width="15" height="60" fill="#003B8E"/>
      <rect x="60" width="15" height="60" fill="#F0C000"/>
      <rect x="75" width="15" height="60" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'H', phonetic: 'Hotel', type: 'letter', morse: '····',
    meaning: 'Ein Lotse ist an Bord',
    description: 'Das Schiff führt einen Lotsen an Bord und ist damit unter Lotsenpflicht oder Lotsenweisung. ' +
      'Andere Schiffe sollen entsprechend Rücksicht nehmen. ' +
      'Die Flagge wird nach dem Übergang des Lotsen auf das Schiff gesetzt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="45" height="60" fill="#FFFFFF"/>
      <rect x="45" width="45" height="60" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'I', phonetic: 'India', type: 'letter', morse: '··',
    meaning: 'Ich ändere meinen Kurs nach Backbord',
    description: 'Zeigt an, dass das Schiff eine Kursänderung nach links (Backbord) vornimmt. ' +
      'Wird zusammen mit akustischen Signalen zur Ankündigung von Kursänderungen in engen Fahrwassern und in Sichtweite anderer Fahrzeuge gezeigt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#F0C000"/>
      <circle cx="45" cy="30" r="16" fill="#000000"/>
    </svg>`
  },

  {
    id: 'J', phonetic: 'Juliett', type: 'letter', morse: '·–––',
    meaning: 'Feuer an Bord mit gefährlicher Ladung — Abstand halten',
    description: 'Das Schiff hat Feuer an Bord und führt gefährliche Ladung (z. B. Explosivstoffe oder Flüssiggas). ' +
      'Andere Schiffe sollen großen Abstand halten, um bei einer Explosion nicht gefährdet zu werden. ' +
      'Signal auch für: "Ich leck und sinke".',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#003B8E"/>
      <rect y="20" width="90" height="20" fill="#FFFFFF"/>
    </svg>`
  },

  {
    id: 'K', phonetic: 'Kilo', type: 'letter', morse: '–·–',
    meaning: 'Ich wünsche mit Ihnen zu kommunizieren',
    description: 'Aufforderung an ein anderes Schiff zur Kommunikation, z. B. durch Flaggensignale, Funk oder Morsezeichen. ' +
      'Wird eingesetzt, wenn wichtige Informationen ausgetauscht werden sollen, ' +
      'z. B. Wetterwarnungen oder Hafeneinlaufanweisungen.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="45" height="60" fill="#F0C000"/>
      <rect x="45" width="45" height="60" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'L', phonetic: 'Lima', type: 'letter', morse: '·–··',
    meaning: 'Stoppen Sie sofort — ich habe eine wichtige Mitteilung',
    description: 'Im Hafen: "Stoppen Sie das Schiff und warten Sie auf Signale." ' +
      'Auf See: "Holen Sie Ihren Fang und Ihre Netze ein." ' +
      'Das schwarz-gelbe Schachbrettmuster aus vier Quadranten ist charakteristisch und aus jeder Entfernung erkennbar.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="0"  y="0"  width="45" height="30" fill="#000000"/>
      <rect x="45" y="0"  width="45" height="30" fill="#F0C000"/>
      <rect x="0"  y="30" width="45" height="30" fill="#F0C000"/>
      <rect x="45" y="30" width="45" height="30" fill="#000000"/>
    </svg>`
  },

  {
    id: 'M', phonetic: 'Mike', type: 'letter', morse: '––',
    meaning: 'Mein Schiff ist gestoppt — keine Fahrt durch das Wasser',
    description: 'Das Schiff liegt still im Wasser (keine Eigengeschwindigkeit relativ zum Wasser), ' +
      'ist aber nicht vor Anker. Warnt andere Schiffe, die Kollisionsgefahr einzuschätzen. ' +
      'Der blaue Andreasstern auf weißem Grund ist ein seltenes, auffälliges Muster.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <line x1="0"  y1="0"  x2="90" y2="60" stroke="#003B8E" stroke-width="14" stroke-linecap="square"/>
      <line x1="90" y1="0"  x2="0"  y2="60" stroke="#003B8E" stroke-width="14" stroke-linecap="square"/>
    </svg>`
  },

  {
    id: 'N', phonetic: 'November', type: 'letter', morse: '–·',
    meaning: 'Nein / Verneinung',
    description: 'Verneint eine Frage oder Aussage eines anderen Schiffes. ' +
      'Das blaue und weiße Schachbrettmuster — international bekannt — ist auf See von weitem eindeutig identifizierbar ' +
      'und kann nicht mit anderen Flaggen verwechselt werden.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <rect x="0"    y="0"  width="22.5" height="15" fill="#003B8E"/>
      <rect x="45"   y="0"  width="22.5" height="15" fill="#003B8E"/>
      <rect x="22.5" y="15" width="22.5" height="15" fill="#003B8E"/>
      <rect x="67.5" y="15" width="22.5" height="15" fill="#003B8E"/>
      <rect x="0"    y="30" width="22.5" height="15" fill="#003B8E"/>
      <rect x="45"   y="30" width="22.5" height="15" fill="#003B8E"/>
      <rect x="22.5" y="45" width="22.5" height="15" fill="#003B8E"/>
      <rect x="67.5" y="45" width="22.5" height="15" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'O', phonetic: 'Oscar', type: 'letter', morse: '–––',
    meaning: 'Mann über Bord!',
    description: 'Notfallsignal: Eine Person ist über Bord gegangen. ' +
      'Das Schiff muss Rettungsmaßnahmen einleiten. Andere Schiffe in der Nähe sollen helfen. ' +
      'Die diagonal gespaltene rot-gelbe Flagge ist eines der bekanntesten und wichtigsten maritimen Notsignale.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 90,0 0,60" fill="#CC0000"/>
      <polygon points="90,0 90,60 0,60" fill="#F0C000"/>
    </svg>`
  },

  {
    id: 'P', phonetic: 'Papa', type: 'letter', morse: '·––·',
    meaning: 'Im Hafen: Schiff läuft aus — alle Mann an Bord',
    description: 'Im Hafen (auch "Blauer Peter" genannt): Das Schiff macht sich zum Auslaufen bereit. ' +
      'Alle Besatzungsmitglieder und Passagiere sollen unverzüglich an Bord kommen. ' +
      'Auf See (Fischereifahrzeuge): "Meine Netze sind an einem Hindernis hängen geblieben."',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#003B8E"/>
      <rect x="20" y="15" width="50" height="30" fill="#FFFFFF"/>
    </svg>`
  },

  {
    id: 'Q', phonetic: 'Quebec', type: 'letter', morse: '––·–',
    meaning: 'Schiff ist seuchenfrei — bitte freie Verkehrserlaubnis',
    description: 'Das Schiff erklärt, dass keine Infektionskrankheiten an Bord sind, ' +
      'und bittet den Hafenarzt bzw. die Behörden um "Pratique libre" (freie Fahrt). ' +
      'Auch bekannt als "Gelbe Flagge" (Quarantäneflagge, historisch).',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#F0C000"/>
    </svg>`
  },

  {
    id: 'R', phonetic: 'Romeo', type: 'letter', morse: '·–·',
    meaning: '(Keine eigene Einzelbedeutung im ICS)',
    description: 'R ist im ICS-Code kein eigenständiges Einzelflaggensignal. ' +
      'Es wird jedoch in Verbindung mit anderen Flaggen in Kombinationssignalen verwendet. ' +
      'In verschiedenen nationalen Codes hat R unterschiedliche Bedeutungen.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#F0C000"/>
      <rect x="37" y="0"  width="16" height="60" fill="#CC0000"/>
      <rect x="0"  y="22" width="90" height="16" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'S', phonetic: 'Sierra', type: 'letter', morse: '···',
    meaning: 'Meine Maschinen laufen achteraus',
    description: 'Zeigt an, dass die Schiffsmaschinen auf Rückwärtsgang laufen. ' +
      'Wichtiges Manövriersignal in Häfen und engen Fahrwassern, ' +
      'damit andere Schiffe die Bewegungsrichtung korrekt einschätzen können.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <rect x="20" y="15" width="50" height="30" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'T', phonetic: 'Tango', type: 'letter', morse: '–',
    meaning: 'Halten Sie sich fern — Fahrzeug beim Schlepp- oder Paartrawlen',
    description: 'Das Fahrzeug ist mit Schleppnetzfischerei (Paar-Trawl) beschäftigt ' +
      'und hat ausgedehnte Netze und Seile im Wasser, die eine erhebliche Kollisionsgefahr darstellen. ' +
      'Andere Schiffe müssen ausreichend Abstand halten.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="0"  width="30" height="60" fill="#CC0000"/>
      <rect x="30" width="30" height="60" fill="#FFFFFF"/>
      <rect x="60" width="30" height="60" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'U', phonetic: 'Uniform', type: 'letter', morse: '··–',
    meaning: 'Sie laufen in Gefahr',
    description: 'Warnt ein anderes Schiff, dass es auf Kurs ist und in unmittelbare Gefahr läuft — ' +
      'z. B. auf ein Riff, eine Sandbank, ein Wrack oder in Treibminen. ' +
      'Das rot-weiße Schachbrettmuster signalisiert: "Achtung, Gefahrenstelle!"',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <rect x="0"    y="0"  width="22.5" height="15" fill="#CC0000"/>
      <rect x="45"   y="0"  width="22.5" height="15" fill="#CC0000"/>
      <rect x="22.5" y="15" width="22.5" height="15" fill="#CC0000"/>
      <rect x="67.5" y="15" width="22.5" height="15" fill="#CC0000"/>
      <rect x="0"    y="30" width="22.5" height="15" fill="#CC0000"/>
      <rect x="45"   y="30" width="22.5" height="15" fill="#CC0000"/>
      <rect x="22.5" y="45" width="22.5" height="15" fill="#CC0000"/>
      <rect x="67.5" y="45" width="22.5" height="15" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'V', phonetic: 'Victor', type: 'letter', morse: '···–',
    meaning: 'Ich benötige Hilfe',
    description: 'Allgemeines Hilfeersuchen: Das Schiff bittet um Unterstützung, ' +
      'ohne akute Lebensgefahr (für Notfälle mit Lebensgefahr wird Flagge N+C kombiniert). ' +
      'Kann auch als Einzelbuchstabe im Funk oder durch Licht signalisiert werden (Morsecode ···–).',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <rect x="37" y="0"  width="16" height="60" fill="#CC0000"/>
      <rect x="0"  y="22" width="90" height="16" fill="#CC0000"/>
    </svg>`
  },

  {
    id: 'W', phonetic: 'Whiskey', type: 'letter', morse: '·––',
    meaning: 'Ich benötige ärztliche Hilfe',
    description: 'Das Schiff hat medizinische Notfälle an Bord (Verletzte oder Erkrankte) ' +
      'und benötigt ärztliche Unterstützung — durch einen Arzt an Bord eines anderen Schiffes, ' +
      'einen Küstenarzt oder eine medizinische Evakuierung.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#CC0000"/>
      <rect x="12" y="8"  width="66" height="44" fill="#FFFFFF"/>
      <rect x="24" y="18" width="42" height="24" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'X', phonetic: 'X-Ray', type: 'letter', morse: '–··–',
    meaning: 'Stellen Sie Ihre Absicht ein und beachten Sie meine Signale',
    description: 'Das Schiff fordert ein anderes auf, seine geplante Aktion zu stoppen ' +
      'und stattdessen auf die folgenden Signale zu warten. ' +
      'Wird eingesetzt, wenn ein Schiff auf einen Kurs oder eine Handlung aufmerksam gemacht werden soll, ' +
      'die koordiniert werden muss.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="60" fill="#FFFFFF"/>
      <rect x="37" y="0"  width="16" height="60" fill="#003B8E"/>
      <rect x="0"  y="22" width="90" height="16" fill="#003B8E"/>
    </svg>`
  },

  {
    id: 'Y', phonetic: 'Yankee', type: 'letter', morse: '–·––',
    meaning: 'Ich treibe auf meinem Anker',
    description: 'Das Schiff liegt vor Anker, der Anker hält jedoch nicht und das Schiff treibt ab. ' +
      'Dies ist gefährlich in der Nähe von anderen Schiffen, Riffen oder Küsten. ' +
      'Andere Schiffe sollen Abstand halten und gegebenenfalls Hilfe anbieten.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="y-stripes" patternUnits="userSpaceOnUse" width="22" height="22"
                 patternTransform="rotate(33.69 45 30)">
          <rect width="11" height="22" fill="#F0C000"/>
          <rect x="11" width="11" height="22" fill="#CC0000"/>
        </pattern>
      </defs>
      <rect width="90" height="60" fill="url(#y-stripes)"/>
    </svg>`
  },

  {
    id: 'Z', phonetic: 'Zulu', type: 'letter', morse: '––··',
    meaning: 'Ich benötige einen Schlepper',
    description: 'Das Schiff hat einen Maschinenausfall oder ein anderes Problem und benötigt ' +
      'einen Schlepper (Bugsierschiff), um sicher in den Hafen oder aus der Gefahrenzone zu kommen. ' +
      'In Küstengewässern auch: "Ich werfe Fang für die Flotte ab."',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  90,0  45,30" fill="#000000"/>
      <polygon points="90,0 90,60 45,30" fill="#F0C000"/>
      <polygon points="90,60 0,60 45,30" fill="#CC0000"/>
      <polygon points="0,60 0,0  45,30" fill="#003B8E"/>
    </svg>`
  },

  /* ── ZAHLENWIMPEL 0–9 ──────────────────────────────────
   *  Wimpelform: Dreieck, Spitze bei (90,30)
   *  Drittelpunkte: oberes Drittel  (0,0)–(60,20)–(0,20)
   *                  mittleres      (0,20)–(60,20)–(90,30)–(60,40)–(0,40)
   *                  unteres        (0,40)–(60,40)–(0,60)
   * ─────────────────────────────────────────────────────*/

  {
    id: '0', phonetic: 'Null', type: 'numeral', morse: '–––––',
    meaning: 'Ziffer 0 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln, ' +
      'z. B. Schiffsnummern, Koordinaten oder Zeitangaben. ' +
      'Allein stehend hat der Wimpel keine festgelegte Bedeutung.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#CC0000"/>
      <polygon points="0,30 0,60 90,30" fill="#F0C000"/>
    </svg>`
  },

  {
    id: '1', phonetic: 'Eins', type: 'numeral', morse: '·––––',
    meaning: 'Ziffer 1 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "1" ist typischerweise in Gelb und Schwarz gehalten.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#F0C000"/>
      <polygon points="0,30 0,60 90,30" fill="#000000"/>
    </svg>`
  },

  {
    id: '2', phonetic: 'Zwei', type: 'numeral', morse: '··–––',
    meaning: 'Ziffer 2 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "2" ist in Blau und Weiß gehalten.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#003B8E"/>
      <polygon points="0,30 0,60 90,30" fill="#FFFFFF"/>
    </svg>`
  },

  {
    id: '3', phonetic: 'Drei', type: 'numeral', morse: '···––',
    meaning: 'Ziffer 3 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "3" zeigt drei horizontale Abschnitte in Rot–Weiß–Rot.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  0,20 60,20 90,30"          fill="#CC0000"/>
      <polygon points="0,20 0,40 60,40 90,30 60,20"    fill="#FFFFFF"/>
      <polygon points="0,40 0,60 90,30 60,40"           fill="#CC0000"/>
    </svg>`
  },

  {
    id: '4', phonetic: 'Vier', type: 'numeral', morse: '····–',
    meaning: 'Ziffer 4 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "4" ist in Rot (oben) und Weiß (unten) geteilt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#CC0000"/>
      <polygon points="0,30 0,60 90,30" fill="#FFFFFF"/>
    </svg>`
  },

  {
    id: '5', phonetic: 'Fünf', type: 'numeral', morse: '·····',
    meaning: 'Ziffer 5 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "5" ist in Blau (oben) und Gelb (unten) geteilt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#003B8E"/>
      <polygon points="0,30 0,60 90,30" fill="#F0C000"/>
    </svg>`
  },

  {
    id: '6', phonetic: 'Sechs', type: 'numeral', morse: '–····',
    meaning: 'Ziffer 6 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "6" ist in Weiß (oben) und Schwarz (unten) geteilt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#FFFFFF"/>
      <polygon points="0,30 0,60 90,30" fill="#000000"/>
    </svg>`
  },

  {
    id: '7', phonetic: 'Sieben', type: 'numeral', morse: '––···',
    meaning: 'Ziffer 7 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "7" ist in Gelb (oben) und Rot (unten) geteilt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#F0C000"/>
      <polygon points="0,30 0,60 90,30" fill="#CC0000"/>
    </svg>`
  },

  {
    id: '8', phonetic: 'Acht', type: 'numeral', morse: '–––··',
    meaning: 'Ziffer 8 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "8" zeigt drei Abschnitte in Weiß–Rot–Weiß.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  0,20 60,20 90,30"          fill="#FFFFFF"/>
      <polygon points="0,20 0,40 60,40 90,30 60,20"    fill="#CC0000"/>
      <polygon points="0,40 0,60 90,30 60,40"           fill="#FFFFFF"/>
    </svg>`
  },

  {
    id: '9', phonetic: 'Neun', type: 'numeral', morse: '––––·',
    meaning: 'Ziffer 9 — Teil von Zahlenkombinationssignalen',
    description: 'Zahlenwimpel werden in Kombination verwendet, um Nummern zu übermitteln. ' +
      'Der Wimpel für "9" ist in Schwarz (oben) und Gelb (unten) geteilt.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 0,30 90,30" fill="#000000"/>
      <polygon points="0,30 0,60 90,30" fill="#F0C000"/>
    </svg>`
  },

  /* ── ERSATZFLAGGEN (Wimpel) ──────────────────────────── */

  {
    id: '1. Ersatz', phonetic: '1. Ersatzflagge', type: 'special', morse: '',
    meaning: 'Wiederholt den ersten Buchstaben / die erste Zahl eines Signals',
    description: 'Ersatzflaggen (auch "Substituierende" oder "Repeater") ermöglichen es, ' +
      'denselben Buchstaben oder dieselbe Zahl zweimal oder dreimal in einem Signal zu zeigen, ' +
      'ohne zwei identische Flaggen mitzuführen. Die 1. Ersatzflagge wiederholt das erste Zeichen.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  0,20 60,20 90,30"          fill="#CC0000"/>
      <polygon points="0,20 0,40 60,40 90,30 60,20"    fill="#FFFFFF"/>
      <polygon points="0,40 0,60 90,30 60,40"           fill="#CC0000"/>
    </svg>`
  },

  {
    id: '2. Ersatz', phonetic: '2. Ersatzflagge', type: 'special', morse: '',
    meaning: 'Wiederholt den zweiten Buchstaben / die zweite Zahl eines Signals',
    description: 'Die 2. Ersatzflagge wiederholt das zweite Zeichen (Buchstabe oder Ziffer) ' +
      'in einem Signalzug. Damit können z. B. doppelte Buchstaben ohne zwei gleiche Flaggen dargestellt werden.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  0,20 60,20 90,30"          fill="#003B8E"/>
      <polygon points="0,20 0,40 60,40 90,30 60,20"    fill="#FFFFFF"/>
      <polygon points="0,40 0,60 90,30 60,40"           fill="#003B8E"/>
    </svg>`
  },

  {
    id: '3. Ersatz', phonetic: '3. Ersatzflagge', type: 'special', morse: '',
    meaning: 'Wiederholt den dritten Buchstaben / die dritte Zahl eines Signals',
    description: 'Die 3. Ersatzflagge wiederholt das dritte Zeichen in einem Signalzug. ' +
      'Damit können drei gleiche Zeichen in einem Signal ohne dreifaches Mitführen derselben Flagge dargestellt werden.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  0,20 60,20 90,30"          fill="#000000"/>
      <polygon points="0,20 0,40 60,40 90,30 60,20"    fill="#CC0000"/>
      <polygon points="0,40 0,60 90,30 60,40"           fill="#000000"/>
    </svg>`
  },

  /* ── ANTWORTWIMPEL ──────────────────────────────────── */

  {
    id: 'AW', phonetic: 'Antwortwimpel (Code)', type: 'special', morse: '',
    meaning: 'Signal empfangen und verstanden / Codezeichen',
    description: 'Auch bekannt als "Code- und Antwortwimpel". ' +
      'Zeigt an, dass ein Signal empfangen und verstanden wurde (Quittierung). ' +
      'Auf halbem Mast bedeutet er: "Signal empfangen, aber noch nicht vollständig entschlüsselt." ' +
      'Wird auch als Kennzeichen für ICS-Signale verwendet.',
    svg: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0  0,20 60,20 90,30"          fill="#CC0000"/>
      <polygon points="0,20 0,40 60,40 90,30 60,20"    fill="#FFFFFF"/>
      <polygon points="0,40 0,60 90,30 60,40"           fill="#CC0000"/>
      <!-- Diagonale Streifen als Unterscheidungsmerkmal -->
      <line x1="0"  y1="10" x2="55" y2="27" stroke="#F0C000" stroke-width="3" stroke-dasharray="6,4"/>
      <line x1="0"  y1="50" x2="55" y2="33" stroke="#F0C000" stroke-width="3" stroke-dasharray="6,4"/>
    </svg>`
  }

];
