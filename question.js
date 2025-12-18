// Otázky pro všechny týmy
// Každý tým při startu dostane "personalizovanou" trasu
const questionPool = [
  // 1️⃣ Programování / Python
  {
    q: "Najdi chybu v tomto Python kódu a oprav ji:\nfor i in range(5)\n    print('Číslo:', i)",
    type: "text",
    a: "for i in range(5): print('Číslo:', i)",
    clue: "Další QR kód najdeš u hlavního vchodu."
  },

  // 2️⃣ Matematika / geometrie
  {
    q: "Nakresli trojúhelník se stranami 5 cm, 7 cm a 8 cm a vyznač výšku na stranu 7 cm. Pošli fotku učiteli.",
    type: "photo",
    a: "",
    clue: "Další QR kód najdeš u šatny."
  },

  // 3️⃣ Chemie
  {
    q: "Nakresli izomer butanu (strukturní vzorec).",
    type: "photo",
    a: "",
    clue: "Další QR kód je u chemické laboratoře."
  },

  // 4️⃣ Technické kreslení / CAD
  {
    q: "Nakresli kvádr v perspektivě podle pravidel technického kreslení. Fotku pošli učiteli.",
    type: "photo",
    a: "",
    clue: "Další QR kód je u učebny technického kreslení."
  },

  // 5️⃣ Literatura + dějepis
  {
    q: "Krátce napiš, co si pamatuješ o významné historické události probírané v hodině.",
    type: "text",
    a: "",
    clue: "Další QR kód je v učebně dějepisu."
  },

  // 6️⃣ Brněnský hantec
  {
    q: "Přelož větu 'Jdu na kafe' do brněnského hantecu.",
    type: "text",
    a: "",
    clue: "Další QR kód je u hlavního schodiště."
  },

  // 7️⃣ Tělocvik – pravidla
  {
    q: "Dokonči pravidlo volejbalu: každý tým má ... hráčů.",
    type: "text",
    a: "6",
    clue: "Další QR kód je u tělocvičny."
  },

  // 8️⃣ Tělocvik – cviky
  {
    q: "Na obrázku identifikuj cviky: předpažení, upažení, dřep, kliky. Pošli fotku nebo nakresli.",
    type: "photo",
    a: "",
    clue: "Další QR kód je na hřišti."
  }
];
