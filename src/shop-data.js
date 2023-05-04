const SHOP_DATA = [
  {
    id: 1,
    title: "Topplistan",
    items: [
      {
        id: 1,
        name: "1984",
        author: "George Orwell",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9783730609767_383/1984",
        price: 149,
        position: 1,
      },
      {
        id: 2,
        name: "Brott och straff",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174290882_766",
        price: 199,
        position: 2,
      },
      {
        id: 3,
        name: "Jane Eyre",
        author: "Charlotte Bronte",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789188680501_383/roda-rummet",
        price: 199,
        position: 3,
      },
      {
        id: 4,
        name: "Orlando",
        author: "Virginia Wolf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9780241284643_383/orlando",
        price: 179,
        position: 4,
      },
      {
        id: 5,
        name: "Gösta Berglings Saga",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296051_383/gosta-berlings-saga",
        price: 189,
        position: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Alla Böcker",
    items: [
      {
        id: 1,
        name: "Arma människor",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789177424857_383/arma-manniskor",
        price: 190,
      },
      {
        id: 2,
        name: "Brott och straff",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174290882_766",
        price: 199,
      },
      {
        id: 3,
        name: "Den allvarsamma leken",
        author: "Hjalmar Söderberg",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174291957_383/den-allvarsamma-leken",
        price: 149,
      },
      {
        id: 4,
        name: "Döda huset",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789186629144_383/doda-huset",
        price: 219,
      },
      {
        id: 5,
        name: "En herrgårdssägen",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296150_383/en-herrgardssagen",
        price: 199,
      },
      {
        id: 6,
        name: "Ett eget rum",
        author: "Virginia Wolf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174996210_383/ett-eget-rum",
        price: 219,
      },
      {
        id: 7,
        name: "Flugornas herre",
        author: "William Golding",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174291285_383/flugornas-herre",
        price: 165,
      },
      {
        id: 8,
        name: "Gösta Berglings Saga",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296051_383/gosta-berlings-saga",
        price: 189,
      },
      {
        id: 9,
        name: "Iliaden",
        author: "Homeros",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789173535502_383/iliaden",
        price: 189,
      },
      {
        id: 10,
        name: "Jane Eyre",
        author: "Charlotte Bronte",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789188680501_383/roda-rummet",
        price: 199,
      },
      {
        id: 11,
        name: "Jerusalem",
        author: "Selma Lagerlöf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9789174296044_383/jerusalem",
        price: 185,
      },
      {
        id: 12,
        name: "Kejsaren av Portugalien",
        author: "Selma Lagerlöf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9789174296006_383/kejsarn-av-portugallien",
        price: 199,
      },
      {
        id: 13,
        name: "Lolita",
        author: "Vladimir Nabokov",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789176455784_383/lolita",
        price: 189,
      },
      {
        id: 14,
        name: "Löwensköldska ringen",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296013_383/lowenskoldska-ringen-charlotte-lowenskold-anna-svard",
        price: 179,
      },
      {
        id: 15,
        name: "Mot fyren",
        author: "Virginia Wolf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789173272582_383/mot-fyren",
        price: 189,
      },
      {
        id: 16,
        name: "Mrs Dalloway",
        author: "Virginia Wolf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9780241468647_383/mrs-dalloway",
        price: 189,
      },
      {
        id: 17,
        name: "Mästaren och Margarita",
        author: "Michail Bulgakov",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789113023120_383/mastaren-och-margarita",
        price: 185,
      },
      {
        id: 18,
        name: "Nils Holgerssons underbara resa genom Sverige",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789176631874_383/nils-holgerssons-underbara-resa-genom-sverige",
        price: 199,
      },
      {
        id: 19,
        name: "Nybyggarna",
        author: "Vilhelm Moberg",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174293104_383/nybyggarna",
        price: 179,
      },
      {
        id: 20,
        name: "Och så var det bara en",
        author: "Agatha Christie",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789188745989_383/och-sa-var-de-bara-en",
        price: 179,
      },
      {
        id: 21,
        name: "Onda Andar",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174990270_200/onda-andar",
        price: 189,
      },
      {
        id: 22,
        name: "Orlando",
        author: "Virginia Wolf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9780241284643_383/orlando",
        price: 179,
      },
      {
        id: 23,
        name: "Processen",
        author: "Franz Kafka",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174996197_383/processen",
        price: 189,
      },
      {
        id: 24,
        name: "Röda rummet",
        author: "August Strindberg",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789188680501_383/roda-rummet",
        price: 189,
      },
      {
        id: 25,
        name: "Vita Nätter",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789198669213_383/vita-natter",
        price: 169,
      },
      {
        id: 26,
        name: "Äcklet",
        author: "Jean-Paul Sartre",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174292367_383/acklet",
        price: 199,
      },
      {
        id: 27,
        name: "1984",
        author: "George Orwell",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9783730609767_383/1984",
        price: 149,
      },
    ],
  },
  {
    id: 3,
    title: "Fjodor Dostrojevskij",
    items: [
      {
        id: 1,
        name: "Brott och straff",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174290882_766",
        price: 199,
      },
      {
        id: 2,
        name: "Onda Andar",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174990270_200/onda-andar",
        price: 189,
      },
      {
        id: 3,
        name: "Vita Nätter",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789198669213_383/vita-natter",
        price: 169,
      },
      {
        id: 4,
        name: "Döda huset",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789186629144_383/doda-huset",
        price: 219,
      },
      {
        id: 5,
        name: "Arma människor",
        author: "Fjodor Dostrojevskij",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789177424857_383/arma-manniskor",
        price: 190,
      },
    ],
  },
  {
    id: 4,
    title: "Virginia Wolf",
    items: [
      {
        id: 1,
        name: "Mrs Dalloway",
        author: "Virginia Wolf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9780241468647_383/mrs-dalloway",
        price: 189,
      },
      {
        id: 2,
        name: "Ett eget rum",
        author: "Virginia Wolf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174996210_383/ett-eget-rum",
        price: 219,
      },
      {
        id: 3,
        name: "Mot fyren",
        author: "Virginia Wolf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789173272582_383/mot-fyren",
        price: 189,
      },
      {
        id: 4,
        name: "Orlando",
        author: "Virginia Wolf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9780241284643_383/orlando",
        price: 179,
      },
    ],
  },
  {
    id: 5,
    title: "Selma Lagerlöf",
    items: [
      {
        id: 1,
        name: "Kejsaren av Portugalien",
        author: "Selma Lagerlöf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9789174296006_383/kejsarn-av-portugallien",
        price: 199,
      },
      {
        id: 2,
        name: "Gösta Berglings Saga",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296051_383/gosta-berlings-saga",
        price: 189,
      },
      {
        id: 3,
        name: "Jerusalem",
        author: "Selma Lagerlöf",
        imageUrl:
          "	https://bilder.akademibokhandeln.se/images_akb/9789174296044_383/jerusalem",
        price: 185,
      },
      {
        id: 4,
        name: "En herrgårdssägen",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296150_383/en-herrgardssagen",
        price: 199,
      },
      {
        id: 5,
        name: "Löwensköldska ringen",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789174296013_383/lowenskoldska-ringen-charlotte-lowenskold-anna-svard",
        price: 179,
      },
      {
        id: 6,
        name: "Nils Holgerssons underbara resa genom Sverige",
        author: "Selma Lagerlöf",
        imageUrl:
          "https://bilder.akademibokhandeln.se/images_akb/9789176631874_383/nils-holgerssons-underbara-resa-genom-sverige",
        price: 199,
      },
    ],
  },
];

export default SHOP_DATA;
