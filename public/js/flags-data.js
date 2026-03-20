/* jshint esversion: 6 */
const FLAGS_DATA = [
  // ── LETTER FLAGS ──────────────────────────────────────────────────────────
  {
    id: 'A',
    phonetic: 'Alfa',
    type: 'letter',
    morse: '·–',
    meaning: 'Taucher im Wasser – Abstand halten, langsam fahren',
    description: 'Bedeutet: „Ich habe einen Taucher im Wasser." Andere Schiffe sollen großen Abstand halten und mit niedriger Geschwindigkeit fahren. Wird international überall anerkannt.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><polygon points="30,0 90,0 67,30 90,60 30,60" fill="#003B8E"/></svg>'
  },
  {
    id: 'B',
    phonetic: 'Bravo',
    type: 'letter',
    morse: '–···',
    meaning: 'Gefährliche Güter an Bord',
    description: 'Bedeutet: „Ich lade, entlade oder transportiere gefährliche Güter." Wird bei Tankschiffen mit Öl oder explosiven Stoffen gezeigt.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#CC0000"/></svg>'
  },
  {
    id: 'C',
    phonetic: 'Charlie',
    type: 'letter',
    morse: '–·–·',
    meaning: 'Ja / Bejahung',
    description: 'Allgemeines Bestätigungssignal. Im Mehrflaggensignal bedeutet es „Ja" oder bestätigt die vorangegangene Nachricht.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#003B8E"/><rect y="12" width="90" height="12" fill="white"/><rect y="24" width="90" height="12" fill="#CC0000"/><rect y="36" width="90" height="12" fill="white"/><rect y="48" width="90" height="12" fill="#003B8E"/></svg>'
  },
  {
    id: 'D',
    phonetic: 'Delta',
    type: 'letter',
    morse: '–··',
    meaning: 'Abstand halten – Manövrierbehinderung',
    description: 'Bedeutet: „Halten Sie sich von mir fern, ich manövriere mit Schwierigkeit." Das Schiff hat eingeschränkte Manövrierfähigkeit.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#F0C000"/><rect x="30" width="30" height="60" fill="#003B8E"/></svg>'
  },
  {
    id: 'E',
    phonetic: 'Echo',
    type: 'letter',
    morse: '·',
    meaning: 'Kursänderung nach Steuerbord',
    description: 'Bedeutet: „Ich ändere meinen Kurs nach Steuerbord (rechts)." Dient zur Ankündigung eines Kurswechsels.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="60" fill="#003B8E"/><rect x="45" width="45" height="60" fill="#CC0000"/></svg>'
  },
  {
    id: 'F',
    phonetic: 'Foxtrot',
    type: 'letter',
    morse: '··–·',
    meaning: 'Manövrierunfähig – Hilfe benötigt',
    description: 'Bedeutet: „Ich bin manövrierunfähig; bitte kommunizieren Sie mit mir." Das Schiff benötigt Unterstützung, ist aber nicht in unmittelbarer Seenot.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><polygon points="45,5 85,30 45,55 5,30" fill="#CC0000"/></svg>'
  },
  {
    id: 'G',
    phonetic: 'Golf',
    type: 'letter',
    morse: '––·',
    meaning: 'Lotse benötigt / Netze ausgebracht',
    description: 'Bedeutet: „Ich benötige einen Lotsen." Fischereifahrzeuge zeigen damit an, dass Schleppnetze ausgebracht sind.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect x="0" width="15" height="60" fill="#F0C000"/><rect x="15" width="15" height="60" fill="#003B8E"/><rect x="30" width="15" height="60" fill="#F0C000"/><rect x="45" width="15" height="60" fill="#003B8E"/><rect x="60" width="15" height="60" fill="#F0C000"/><rect x="75" width="15" height="60" fill="#003B8E"/></svg>'
  },
  {
    id: 'H',
    phonetic: 'Hotel',
    type: 'letter',
    morse: '····',
    meaning: 'Lotse an Bord',
    description: 'Bedeutet: „Ein Lotse ist an Bord." Das Schiff wird von einem ortskundigen Lotsen geführt.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="60" fill="white"/><rect x="45" width="45" height="60" fill="#CC0000"/></svg>'
  },
  {
    id: 'I',
    phonetic: 'India',
    type: 'letter',
    morse: '··',
    meaning: 'Kursänderung nach Backbord',
    description: 'Bedeutet: „Ich ändere meinen Kurs nach Backbord (links)." Dient zur Ankündigung eines Kurswechsels.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#F0C000"/><circle cx="45" cy="30" r="16" fill="#000000"/></svg>'
  },
  {
    id: 'J',
    phonetic: 'Juliett',
    type: 'letter',
    morse: '·–––',
    meaning: 'Feuer an Bord – gefährliche Ladung – Abstand halten',
    description: 'Bedeutet: „Ich habe Feuer an Bord und führe gefährliche Ladung; halten Sie sich von mir fern." Höchste Warnstufe.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#003B8E"/><rect y="20" width="90" height="20" fill="white"/></svg>'
  },
  {
    id: 'K',
    phonetic: 'Kilo',
    type: 'letter',
    morse: '–·–',
    meaning: 'Kommunikationsaufforderung',
    description: 'Bedeutet: „Ich wünsche mit Ihnen zu kommunizieren." Einladung zum Signalaustausch über jedes verfügbare Mittel.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="60" fill="#F0C000"/><rect x="45" width="45" height="60" fill="#003B8E"/></svg>'
  },
  {
    id: 'L',
    phonetic: 'Lima',
    type: 'letter',
    morse: '·–··',
    meaning: 'Schiff stoppen – wichtige Mitteilung',
    description: 'Bedeutet: „Sie sollen sofort stoppen." Im Hafen: warten Sie auf meine Anweisungen. Auf See: holen Sie Netze und Taue ein.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="30" fill="#000000"/><rect x="45" width="45" height="30" fill="#F0C000"/><rect y="30" width="45" height="30" fill="#F0C000"/><rect x="45" y="30" width="45" height="30" fill="#000000"/></svg>'
  },
  {
    id: 'M',
    phonetic: 'Mike',
    type: 'letter',
    morse: '––',
    meaning: 'Schiff gestoppt – keine Fahrt',
    description: 'Bedeutet: „Mein Schiff ist gestoppt und hat keine Fahrt durchs Wasser." Das Schiff liegt still.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><line x1="0" y1="0" x2="90" y2="60" stroke="#003B8E" stroke-width="16"/><line x1="90" y1="0" x2="0" y2="60" stroke="#003B8E" stroke-width="16"/></svg>'
  },
  {
    id: 'N',
    phonetic: 'November',
    type: 'letter',
    morse: '–·',
    meaning: 'Nein / Verneinung',
    description: 'Allgemeines Verneinungssignal. Im Mehrflaggensignal bedeutet es „Nein" oder verneint die vorangegangene Nachricht.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><rect x="0" y="0" width="22.5" height="15" fill="#003B8E"/><rect x="45" y="0" width="22.5" height="15" fill="#003B8E"/><rect x="22.5" y="15" width="22.5" height="15" fill="#003B8E"/><rect x="67.5" y="15" width="22.5" height="15" fill="#003B8E"/><rect x="0" y="30" width="22.5" height="15" fill="#003B8E"/><rect x="45" y="30" width="22.5" height="15" fill="#003B8E"/><rect x="22.5" y="45" width="22.5" height="15" fill="#003B8E"/><rect x="67.5" y="45" width="22.5" height="15" fill="#003B8E"/></svg>'
  },
  {
    id: 'O',
    phonetic: 'Oscar',
    type: 'letter',
    morse: '–––',
    meaning: 'Mann über Bord!',
    description: 'Notsignal: „Ein Mensch ist über Bord gefallen." Sofortiges Handeln aller in der Nähe befindlichen Schiffe erforderlich.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 90,0 0,60" fill="#CC0000"/><polygon points="90,0 90,60 0,60" fill="#F0C000"/></svg>'
  },
  {
    id: 'P',
    phonetic: 'Papa',
    type: 'letter',
    morse: '·––·',
    meaning: 'Auslaufen / Netze ausgelegt',
    description: 'Im Hafen: „Alle an Bord – Schiff läuft aus." Auf See (Fischereifahrzeuge): „Netze sind ausgelegt."',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#003B8E"/><rect x="20" y="15" width="50" height="30" fill="white"/></svg>'
  },
  {
    id: 'Q',
    phonetic: 'Quebec',
    type: 'letter',
    morse: '––·–',
    meaning: 'Freier Verkehr erbeten – Schiff gesund',
    description: 'Bedeutet: „Mein Schiff ist frei von Seuche und ich bitte um freie Verkehrserlaubnis (Pratique)." Wird beim Einlaufen in fremde Häfen gezeigt.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#F0C000"/></svg>'
  },
  {
    id: 'R',
    phonetic: 'Romeo',
    type: 'letter',
    morse: '·–·',
    meaning: '(Keine eigenständige ICS-Einzelbedeutung)',
    description: 'Der Buchstabe R (Romeo) hat im Internationalen Signalbuch keine eigenständige Einzelflaggenbedeutung. Er wird nur in Kombination mit anderen Flaggen verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#F0C000"/><rect x="37" width="16" height="60" fill="#CC0000"/><rect y="22" width="90" height="16" fill="#CC0000"/></svg>'
  },
  {
    id: 'S',
    phonetic: 'Sierra',
    type: 'letter',
    morse: '···',
    meaning: 'Maschinen laufen achteraus',
    description: 'Bedeutet: „Meine Maschinen laufen achteraus." Das Schiff bewegt sich rückwärts.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><rect x="20" y="15" width="50" height="30" fill="#003B8E"/></svg>'
  },
  {
    id: 'T',
    phonetic: 'Tango',
    type: 'letter',
    morse: '–',
    meaning: 'Abstand halten – Schleppnetzfischerei',
    description: 'Bedeutet: „Halten Sie sich von mir fern, ich betreibe Paar-Schleppnetzfischerei." Gefahr durch unter Wasser laufende Netze.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="60" fill="#CC0000"/><rect x="30" width="30" height="60" fill="white"/><rect x="60" width="30" height="60" fill="#003B8E"/></svg>'
  },
  {
    id: 'U',
    phonetic: 'Uniform',
    type: 'letter',
    morse: '··–',
    meaning: 'Gefahr! Sie laufen in Gefahr',
    description: 'Bedeutet: „Sie laufen in Gefahr." Warnung an ein anderes Schiff vor unmittelbar bevorstehender Gefahr.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><rect x="0" y="0" width="22.5" height="15" fill="#CC0000"/><rect x="45" y="0" width="22.5" height="15" fill="#CC0000"/><rect x="22.5" y="15" width="22.5" height="15" fill="#CC0000"/><rect x="67.5" y="15" width="22.5" height="15" fill="#CC0000"/><rect x="0" y="30" width="22.5" height="15" fill="#CC0000"/><rect x="45" y="30" width="22.5" height="15" fill="#CC0000"/><rect x="22.5" y="45" width="22.5" height="15" fill="#CC0000"/><rect x="67.5" y="45" width="22.5" height="15" fill="#CC0000"/></svg>'
  },
  {
    id: 'V',
    phonetic: 'Victor',
    type: 'letter',
    morse: '···–',
    meaning: 'Hilfe benötigt',
    description: 'Bedeutet: „Ich benötige Hilfe." Allgemeines Hilfeersuchen. Nicht zu verwechseln mit dem SOS-Notsignal.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><rect x="37" width="16" height="60" fill="#CC0000"/><rect y="22" width="90" height="16" fill="#CC0000"/></svg>'
  },
  {
    id: 'W',
    phonetic: 'Whiskey',
    type: 'letter',
    morse: '·––',
    meaning: 'Ärztliche Hilfe benötigt',
    description: 'Bedeutet: „Ich benötige ärztliche Hilfe." Dringender Hinweis auf einen medizinischen Notfall an Bord.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#CC0000"/><rect x="12" y="8" width="66" height="44" fill="white"/><rect x="24" y="16" width="42" height="28" fill="#003B8E"/></svg>'
  },
  {
    id: 'X',
    phonetic: 'X-ray',
    type: 'letter',
    morse: '–··–',
    meaning: 'Absicht aufgeben – auf Signale warten',
    description: 'Bedeutet: „Stellen Sie Ihre Absichten ein und achten Sie auf meine Signale." Aufforderung zur sofortigen Handlungsunterbrechung.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="white"/><rect x="37" width="16" height="60" fill="#003B8E"/><rect y="22" width="90" height="16" fill="#003B8E"/></svg>'
  },
  {
    id: 'Y',
    phonetic: 'Yankee',
    type: 'letter',
    morse: '–·––',
    meaning: 'Treibe auf dem Anker',
    description: 'Bedeutet: „Mein Anker treibt." Das Schiff hat keinen sicheren Halt am Ankergrund und driftet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="yp" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(33.69 45 30)"><rect width="10" height="20" fill="#F0C000"/><rect x="10" width="10" height="20" fill="#CC0000"/></pattern></defs><rect width="90" height="60" fill="url(#yp)"/></svg>'
  },
  {
    id: 'Z',
    phonetic: 'Zulu',
    type: 'letter',
    morse: '––··',
    meaning: 'Schlepper benötigt / Nachricht für Küstenstation',
    description: 'Bedeutet: „Ich benötige einen Schlepper." Fischereifahrzeuge: „Ich setze meine Fangmeldung ab."',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 90,0 45,30" fill="#000000"/><polygon points="90,0 90,60 45,30" fill="#F0C000"/><polygon points="90,60 0,60 45,30" fill="#CC0000"/><polygon points="0,60 0,0 45,30" fill="#003B8E"/></svg>'
  },

  // ── NUMERAL PENNANTS ──────────────────────────────────────────────────────
  {
    id: '0',
    phonetic: 'Null',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 0',
    description: 'Zahlenwimpel 0. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#CC0000"/><polygon points="0,30 0,60 90,30" fill="#F0C000"/></svg>'
  },
  {
    id: '1',
    phonetic: 'Eins',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 1',
    description: 'Zahlenwimpel 1. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#F0C000"/><polygon points="0,30 0,60 90,30" fill="#000000"/></svg>'
  },
  {
    id: '2',
    phonetic: 'Zwei',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 2',
    description: 'Zahlenwimpel 2. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#003B8E"/><polygon points="0,30 0,60 90,30" fill="white"/></svg>'
  },
  {
    id: '3',
    phonetic: 'Drei',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 3',
    description: 'Zahlenwimpel 3. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,20 0,20" fill="#CC0000"/><polygon points="0,20 60,20 90,30 60,40 0,40" fill="white"/><polygon points="0,40 60,40 0,60" fill="#CC0000"/></svg>'
  },
  {
    id: '4',
    phonetic: 'Vier',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 4',
    description: 'Zahlenwimpel 4. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#CC0000"/><polygon points="0,30 0,60 90,30" fill="white"/></svg>'
  },
  {
    id: '5',
    phonetic: 'Fünf',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 5',
    description: 'Zahlenwimpel 5. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#003B8E"/><polygon points="0,30 0,60 90,30" fill="#F0C000"/></svg>'
  },
  {
    id: '6',
    phonetic: 'Sechs',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 6',
    description: 'Zahlenwimpel 6. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="white"/><polygon points="0,30 0,60 90,30" fill="#000000"/></svg>'
  },
  {
    id: '7',
    phonetic: 'Sieben',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 7',
    description: 'Zahlenwimpel 7. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#F0C000"/><polygon points="0,30 0,60 90,30" fill="#CC0000"/></svg>'
  },
  {
    id: '8',
    phonetic: 'Acht',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 8',
    description: 'Zahlenwimpel 8. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,20 0,20" fill="white"/><polygon points="0,20 60,20 90,30 60,40 0,40" fill="#CC0000"/><polygon points="0,40 60,40 0,60" fill="white"/></svg>'
  },
  {
    id: '9',
    phonetic: 'Neun',
    type: 'numeral',
    morse: '',
    meaning: 'Zahlenwimpel 9',
    description: 'Zahlenwimpel 9. Wird in Kombination mit anderen Signalflaggen zur Bildung von Zahlencodes nach dem Internationalen Signalbuch (ICS) verwendet.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,30 90,30" fill="#000000"/><polygon points="0,30 0,60 90,30" fill="#F0C000"/></svg>'
  },

  // ── SUBSTITUTE PENNANTS ───────────────────────────────────────────────────
  {
    id: '1SUB',
    phonetic: 'Erster Vertreter',
    type: 'substitute',
    morse: '',
    meaning: 'Erster Vertreter – wiederholt die 1. Flagge des Signals',
    description: 'Vertreterflaggen werden verwendet, wenn ein Signal denselben Buchstaben mehrfach enthält, da ein Schiff jede Flagge nur einmal an Bord hat.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,20 0,20" fill="#CC0000"/><polygon points="0,20 60,20 90,30 60,40 0,40" fill="white"/><polygon points="0,40 60,40 0,60" fill="#CC0000"/></svg>'
  },
  {
    id: '2SUB',
    phonetic: 'Zweiter Vertreter',
    type: 'substitute',
    morse: '',
    meaning: 'Zweiter Vertreter – wiederholt die 2. Flagge des Signals',
    description: 'Vertreterflaggen werden verwendet, wenn ein Signal denselben Buchstaben mehrfach enthält, da ein Schiff jede Flagge nur einmal an Bord hat.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,20 0,20" fill="#003B8E"/><polygon points="0,20 60,20 90,30 60,40 0,40" fill="white"/><polygon points="0,40 60,40 0,60" fill="#003B8E"/></svg>'
  },
  {
    id: '3SUB',
    phonetic: 'Dritter Vertreter',
    type: 'substitute',
    morse: '',
    meaning: 'Dritter Vertreter – wiederholt die 3. Flagge des Signals',
    description: 'Vertreterflaggen werden verwendet, wenn ein Signal denselben Buchstaben mehrfach enthält, da ein Schiff jede Flagge nur einmal an Bord hat.',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,20 0,20" fill="#000000"/><polygon points="0,20 60,20 90,30 60,40 0,40" fill="#CC0000"/><polygon points="0,40 60,40 0,60" fill="#000000"/></svg>'
  },

  // ── ANSWER PENNANT ────────────────────────────────────────────────────────
  {
    id: 'ANS',
    phonetic: 'Antwortwimpel',
    type: 'answer',
    morse: '',
    meaning: 'Signal empfangen und verstanden',
    description: 'Der Antwortwimpel (auch Code-Wimpel) wird gehisst, um den Empfang eines Signals zu bestätigen. Auf halber Mast bedeutet: „Ich sehe Ihr Signal, habe es aber noch nicht vollständig entschlüsselt."',
    svg: '<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#CC0000"/><rect y="12" width="90" height="12" fill="white"/><rect y="24" width="90" height="12" fill="#CC0000"/><rect y="36" width="90" height="12" fill="white"/><rect y="48" width="90" height="12" fill="#CC0000"/></svg>'
  }
];
