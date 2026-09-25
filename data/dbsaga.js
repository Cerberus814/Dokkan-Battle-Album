// data/dbsaga.js — datos de la Saga Niño (cartas, arte de sobres, promo).
// Se carga como <script> normal (NO con fetch), a propósito: así index.html sigue
// abriendo con doble click sin depender de ningún servidor, y el JSON deja de
// aparecer mezclado adentro del HTML.
//
// Para sumar una saga nueva a futuro:
//   1) copiá este archivo con otro nombre (ej. data/saga-freezer.js)
//   2) cambiá el nombre de la constante de acá abajo (ej. SAGA_FREEZER) y sus datos
//   3) en index.html: sumá <script src="data/saga-freezer.js"></script> junto a este,
//      y agregá esa constante nueva dentro del array SAGAS.
const SAGA_DB_SAGA =
{
  id: 'db-saga',
  nombre: 'Saga Niño',
  titulo: 'Álbum Dragon Ball · Saga Niño',
  promo: 'imagenes/promo.png',
  packs: {
    shop5: 'imagenes/sobredbsaga.png',
    shop10: 'imagenes/sobredbsaga2.png',
    shopE: 'imagenes/sobredbsagaE.png',
    legendary: 'imagenes/sobredbsagaL.png'
  },
  cards:
  [
    {
      "id": "0001",
      "nombre": "Goku (Niño)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Goku (Niño)",
          "cardId": "1015730",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015730/1015730.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Goku (Niño)",
          "cardId": "1031070",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031070/1031070.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Goku (Niño)",
          "cardId": "1031081",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031080/1031080.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0002",
      "nombre": "Bulma (Niña)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Bulma (Niña)",
          "cardId": "1019960",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1019960/1019960.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Bulma (Niña)",
          "cardId": "1026311",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026310/1026310.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0003",
      "nombre": "Goku (niño) y Bulma (niña)",
      "variantes": [
        {
          "rareza": "LR",
          "nombre": "Goku (niño) y Bulma (niña)",
          "cardId": "1017381",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1017380/1017380.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0004",
      "nombre": "Maestro Roshi",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Maestro Roshi",
          "cardId": "1000430",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000430/1000430.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Maestro Roshi",
          "cardId": "1000250",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000250/1000250.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0005",
      "nombre": "Ulong",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Ulong",
          "cardId": "1003160",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1003160/1003160.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0006",
      "nombre": "Yamcha",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Yamcha",
          "cardId": "1002330",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002330/1002330.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Yamcha",
          "cardId": "1015160",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015160/1015160.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Yamcha & Puar",
          "cardId": "1015171",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015170/1015170.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Yamcha & Puar",
          "cardId": "1015181",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015180/1015180.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0007",
      "nombre": "Chi-Chi (Niña)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Chi-Chi (Niña)",
          "cardId": "1031090",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031090/1031090.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Chi-Chi (Niña)",
          "cardId": "1031101",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031100/1031100.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0008",
      "nombre": "Ox Satán",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Ox Satán",
          "cardId": "1006080",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1006080/1006080.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0009",
      "nombre": "Bulma (conejo)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Bulma (conejo)",
          "cardId": "1004180",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1004180/1004180.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Bulma (conejo)",
          "cardId": "1029150",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029150/1029150.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Bulma (conejo)",
          "cardId": "1029161",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029160/1029160.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0010",
      "nombre": "Maestro Roshi (Máximo Poder)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Maestro Roshi (Máximo Poder)",
          "cardId": "1009310",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009310/1009310.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Maestro Roshi",
          "cardId": "1029130",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029130/1029130.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Maestro Roshi",
          "cardId": "1029141",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029140/1029140.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0011",
      "nombre": "Bulma (Niña)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Bulma (Niña)",
          "cardId": "1011420",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011420/1011420.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Bulma (Niña)",
          "cardId": "1011431",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011430/1011430.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0012",
      "nombre": "Bulma (niña)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Bulma (niña)",
          "cardId": "1003980",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1003980/1003980.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Bulma (niña)",
          "cardId": "1008490",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1008490/1008490.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0013",
      "nombre": "Rey Conejo",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Rey Conejo",
          "cardId": "1009800",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009800/1009800.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0014",
      "nombre": "Goku (Niño) (Gran Mono)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku (Niño) (Gran Mono)",
          "cardId": "4002820",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/4002820/4002820.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0015",
      "nombre": "Krilin (Niño)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Krilin (Niño)",
          "cardId": "9006910",
          "img": "https://glbes.dokkaninfo.com/assets/global/es/character/card/1006910/1006910.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0016",
      "nombre": "Goku (niño), Krilin (niño) y Bulma (niña)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku (niño)",
          "cardId": "1026980",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026980/1026980.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Goku (niño)",
          "cardId": "1027551",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1027550/1027550.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Nueva cartaGoku (niño), Krilin (niño) y Bulma (niña)",
          "cardId": "1028921",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1028920/1028920.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0017",
      "nombre": "Gokú (Niño) (Gran Mono)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Gokú (Niño) (Gran Mono)",
          "cardId": "1007670",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1007670/1007670.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Gokú (Niño) (Gran Mono)",
          "cardId": "1011111",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011110/1011110.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Gokú (Niño) (Gran Mono)",
          "cardId": "4011111",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/4011110/4011110.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0018",
      "nombre": "Lanch",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Lanch",
          "cardId": "1004190",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1004190/1004190.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Lanch",
          "cardId": "1016240",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016240/1016240.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Lanch",
          "cardId": "1016251",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016250/1016250.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0019",
      "nombre": "Ulong y Lanch",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Ulong y Lanch",
          "cardId": "1027930",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1027930/1027930.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Ulong y Lanch",
          "cardId": "1027940",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1027940/1027940.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0020",
      "nombre": "Yamcha",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Yamcha",
          "cardId": "1011230",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011230/1011230.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0021",
      "nombre": "Bacterian",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Bacterian",
          "cardId": "1005600",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1005600/1005600.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0022",
      "nombre": "Lan-Fan",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Lan-Fan",
          "cardId": "1011220",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011220/1011220.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Lan-Fan",
          "cardId": "1031630",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031630/1031630.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Lan-Fan",
          "cardId": "1031641",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031640/1031640.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0023",
      "nombre": "Giran",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Giran",
          "cardId": "1004660",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1004660/1004660.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0024",
      "nombre": "Nam",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Nam",
          "cardId": "1005590",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1005590/1005590.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0025",
      "nombre": "Jackie Chun",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Jackie Chun",
          "cardId": "2000210",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/2000210/2000210.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0026",
      "nombre": "Jackie Chun (Máximo Poder)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Jackie Chun (Máximo Poder)",
          "cardId": "1020041",
          "img": "https://glbes.dokkaninfo.com/assets/global/es/character/card/1020040/1020040.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0027",
      "nombre": "Goku (Niño)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku (Niño)",
          "cardId": "1020260",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1020260/1020260.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0028",
      "nombre": "Soldado de la Patrulla Roja",
      "variantes": [
        {
          "rareza": "N",
          "nombre": "Soldado de la Patrulla Roja",
          "cardId": "1000800",
          "img": "https://glbes.dokkaninfo.com/assets/global/es/character/card/1000800/1000800.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0029",
      "nombre": "Sargento Mayor Murasaki",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Sargento Mayor Murasaki",
          "cardId": "1002300",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002300/1002300.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0030",
      "nombre": "Robot pirata",
      "variantes": [
        {
          "rareza": "N",
          "nombre": "Robot pirata",
          "cardId": "1000770",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000770/1000770.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0031",
      "nombre": "Buyon",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Buyon",
          "cardId": "1028620",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1028620/1028620.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Buyon",
          "cardId": "1028631",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1028630/1028630.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0032",
      "nombre": "Octavio",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Octavio",
          "cardId": "1016960",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016960/1016960.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Octavio",
          "cardId": "1019681",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1019680/1019680.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0033",
      "nombre": "General Blue",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "General Blue",
          "cardId": "1002310",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002310/1002310.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "General Blue",
          "cardId": "1029230",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029230/1029230.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "General Blue",
          "cardId": "1031341",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031340/1031340.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0034",
      "nombre": "Tao Pai Pai",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Tao Pai Pai",
          "cardId": "1031290",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031290/1031290.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Tao Pai Pai",
          "cardId": "1031301",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031300/1031300.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0035",
      "nombre": "Tao Pai Pai",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Tao Pai Pai",
          "cardId": "1022320",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1022320/1022320.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Tao Pai Pai",
          "cardId": "1022331",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1022330/1022330.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Tao Pai Pai",
          "cardId": "1022341",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1022340/1022340.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0036",
      "nombre": "Intendente Black",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Intendente Black",
          "cardId": "1004670",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1004670/1004670.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0037",
      "nombre": "Dracula Man",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Dracula Man",
          "cardId": "1002380",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002380/1002380.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0038",
      "nombre": "Hombre Invisible",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Hombre Invisible",
          "cardId": "1018170",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1018170/1018170.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0039",
      "nombre": "La Momia",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "La Momia",
          "cardId": "1002370",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002370/1002370.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0040",
      "nombre": "Akkuman",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Akkuman",
          "cardId": "1002360",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002360/1002360.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Akkuman",
          "cardId": "1029320",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029320/1029320.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Akkuman",
          "cardId": "1029331",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029330/1029330.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0041",
      "nombre": "Abuelo Gohan",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Abuelo Gohan",
          "cardId": "2000090",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/2000090/2000090.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Abuelo Gohan",
          "cardId": "1018000",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1018000/1018000.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Abuelo Gohan",
          "cardId": "1019921",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1019920/1019920.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0042",
      "nombre": "Abuelo Gohan",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Abuelo Gohan",
          "cardId": "1029490",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029490/1029490.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Abuelo Gohan",
          "cardId": "1029501",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029500/1029500.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Abuelo Gohan",
          "cardId": "1029511",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029510/1029510.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0043",
      "nombre": "Mai",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Mai",
          "cardId": "1029190",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029190/1029190.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Mai",
          "cardId": "1029201",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1029200/1029200.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0044",
      "nombre": "Pilaf",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Pilaf",
          "cardId": "1000450",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1027560/1027560.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Pilaf",
          "cardId": "1027571",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1027570/1027570.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Pilaf, Shu y Mai",
          "cardId": "1027581",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1027580/1027580.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0045",
      "nombre": "Bulma (Niña)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Bulma (Niña)",
          "cardId": "1026590",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026590/1026590.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Bulma (Niña)",
          "cardId": "1026601",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026600/1026600.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Bulma (Niña)",
          "cardId": "1026611",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026610/1026610.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0046",
      "nombre": "Pasta (Película)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Pasta (Película)",
          "cardId": "1015350",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015350/1015350.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0047",
      "nombre": "Yamcha (Película)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Yamcha (Película)",
          "cardId": "1025240",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1025240/1025240.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Yamcha (Película)",
          "cardId": "1025251",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1025250/1025250.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0048",
      "nombre": "Octavio (Película)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Octavio (Película)",
          "cardId": "1025030",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1025030/1025030.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Octavio (Película)",
          "cardId": "1025041",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1025040/1025040.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0049",
      "nombre": "Goku (Niño) (Película)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku (Niño) (Película)",
          "cardId": "1025060",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1025060/1025060.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Goku (Niño) (Película)",
          "cardId": "1025071",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1025070/1025070.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0050",
      "nombre": "Gola",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Gola",
          "cardId": "1027560",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1006070/1006070.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0051",
      "nombre": "Mera",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Mera",
          "cardId": "1006060",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1006060/1006060.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0052",
      "nombre": "Shula",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Shula",
          "cardId": "1006050",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1006050/1006050.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0053",
      "nombre": "Rey Chappa",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Rey Chappa",
          "cardId": "1003150",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1003150/1003150.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0054",
      "nombre": "Lobo Hombre",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Lobo Hombre",
          "cardId": "1006140",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1006140/1006140.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0055",
      "nombre": "Krilin (Niño)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Krilin (Niño)",
          "cardId": "1002340",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002340/1002340.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Krilin (Niño)",
          "cardId": "1030300",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1030300/1030300.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Krilin (Niño)",
          "cardId": "1030311",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1030310/1030310.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0056",
      "nombre": "Yamcha",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Yamcha",
          "cardId": "1007310",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1007310/1007310.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Yamcha",
          "cardId": "1007321",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1007320/1007320.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0057",
      "nombre": "Chaos",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Chaos",
          "cardId": "1012560",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1012560/1012560.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Chaos",
          "cardId": "1031350",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031350/1031350.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Chaos",
          "cardId": "1031361",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031360/1031360.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0058",
      "nombre": "Pamputt",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Pamputt",
          "cardId": "1006150",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1006150/1006150.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0059",
      "nombre": "Maestro Tsuru",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Maestro Tsuru",
          "cardId": "1001380",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1001380/1001380.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0060",
      "nombre": "Tenshinhan",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Tenshinhan",
          "cardId": "1011260",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011260/1011260.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Tenshinhan",
          "cardId": "1017440",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1017440/1017440.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0061",
      "nombre": "Tenshinhan",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Tenshinhan",
          "cardId": "1031260",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031260/1031260.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Tenshinhan",
          "cardId": "1031271",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031270/1031270.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Tenshinhan",
          "cardId": "1031281",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1031280/1031280.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0062",
      "nombre": "Tambourine",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Tambourine",
          "cardId": "1000470",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000470/1000470.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0063",
      "nombre": "Yajirobe",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Yajirobe",
          "cardId": "1000560",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000560/1000560.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0064",
      "nombre": "Cimbal",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Cimbal",
          "cardId": "1000480",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000480/1000480.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0065",
      "nombre": "Gran Rey Demonio Piccolo (Anciano)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Gran Rey Demonio Piccolo (Anciano)",
          "cardId": "1017760",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1017760/1017760.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Gran Rey Demonio Piccolo (Anciano)",
          "cardId": "1017771",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1017770/1017770.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Gran Rey Demonio Piccolo (Anciano)",
          "cardId": "1017781",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1017780/1017780.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0066",
      "nombre": "Gran Rey Demonio Piccolo (Anciano)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Gran Rey Demonio Piccolo (Anciano)",
          "cardId": "1030770",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1030770/1030770.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Gran Rey Demonio Piccolo (Anciano)",
          "cardId": "1030781",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1030780/1030780.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Gran Rey Demonio Piccolo (Anciano)",
          "cardId": "1030791",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1030790/1030790.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0067",
      "nombre": "Maestro Roshi",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Maestro Roshi",
          "cardId": "1016640",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016640/1016640.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Maestro Roshi",
          "cardId": "1016651",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016650/1016650.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0068",
      "nombre": "Drum",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Drum",
          "cardId": "1000490",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000490/1000490.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0069",
      "nombre": "Gran Rey Demonio Piccolo",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Gran Rey Demonio Piccolo",
          "cardId": "1002270",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002270/1002270.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Gran Rey Demonio Piccolo",
          "cardId": "1007971",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1007970/1007970.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Gran Rey Demonio Piccolo",
          "cardId": "4017791",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/4017790/4017790.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0070",
      "nombre": "Goku (Niño)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku (Niño)",
          "cardId": "1016560",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016560/1016560.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Goku (Niño)",
          "cardId": "1016571",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016570/1016570.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0071",
      "nombre": "Mr Popo",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Mr Popo",
          "cardId": "1003440",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1003440/1003440.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0072",
      "nombre": "Kamisama",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Kamisama",
          "cardId": "1004950",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1004950/1004950.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Kamisama",
          "cardId": "1011101",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1011100/1011100.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0073",
      "nombre": "Mutaito",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Mutaito",
          "cardId": "1003450",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1003450/1003450.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0074",
      "nombre": "Goku",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku",
          "cardId": "1022260",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1022260/1022260.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Goku",
          "cardId": "1022271",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1022270/1022270.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0075",
      "nombre": "Tenshinhan",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Tenshinhan",
          "cardId": "1012110",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1012110/1012110.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Tenshinhan",
          "cardId": "1012121",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1012120/1012120.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0076",
      "nombre": "Yajirobe",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Yajirobe",
          "cardId": "1013140",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1013140/1013140.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0077",
      "nombre": "Tao Pai Pai Cíborg",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Tao Pai Pai Cíborg",
          "cardId": "2000070",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/2000070/2000070.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0078",
      "nombre": "Chi-chi",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Chi-chi",
          "cardId": "1013130",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1013130/1013130.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Chi-chi",
          "cardId": "1032200",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1032200/1032200.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Chi-chi",
          "cardId": "1032211",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1032210/1032210.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Chi-chi",
          "cardId": "1032221",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1032220/1032220.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0079",
      "nombre": "Krilin",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Krilin",
          "cardId": "1013310",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1013310/1013310.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0080",
      "nombre": "Yamcha",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Yamcha",
          "cardId": "1013350",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1013350/1013350.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0081",
      "nombre": "Shen",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Shen",
          "cardId": "1000460",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1000460/1000460.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Shen",
          "cardId": "1024680",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1024680/1024680.png",
          "alternativa": true
        },
        {
          "rareza": "SSR",
          "nombre": "Shen",
          "cardId": "1024691",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1024690/1024690.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0082",
      "nombre": "Goku",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku",
          "cardId": "1026520",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026520/1026520.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Goku",
          "cardId": "1026531",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026530/1026530.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Goku",
          "cardId": "4026541",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/4026540/4026540.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0083",
      "nombre": "Ma Junior",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Ma Junior",
          "cardId": "1002280",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1002280/1002280.png",
          "alternativa": false
        },
        {
          "rareza": "SSR",
          "nombre": "Ma Junior",
          "cardId": "1026550",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026550/1026550.png",
          "alternativa": true
        },
        {
          "rareza": "UR",
          "nombre": "Ma Junior",
          "cardId": "1026561",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1026560/1026560.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0084",
      "nombre": "Goku (niño) y Arale Norimaki (Crossover)",
      "variantes": [
        {
          "rareza": "SSR",
          "nombre": "Goku (niño) (Crossover)",
          "cardId": "1015430",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015430/1015430.png",
          "alternativa": false
        },
        {
          "rareza": "UR",
          "nombre": "Goku (niño) y Krilin (Niño) (Crossover)",
          "cardId": "1015951",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1015950/1015950.png",
          "alternativa": true
        },
        {
          "rareza": "LR",
          "nombre": "Goku (niño) y Arale Norimaki (Crossover)",
          "cardId": "1016231",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1016230/1016230.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0085",
      "nombre": "Tao Pai Pai (Crossover)",
      "variantes": [
        {
          "rareza": "SR",
          "nombre": "Tao Pai Pai",
          "cardId": "1009070",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009070/1009070.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0086",
      "nombre": "Goku (Gorra de Arale Niño) (Crossover)",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Goku (Gorra de Arale Niño) (Crossover)",
          "cardId": "1009020",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009020/1009020.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Goku (Gorra de Arale Niño) (Crossover)",
          "cardId": "1010611",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1010610/1010610.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0087",
      "nombre": "Arale Norimaki (Gi de Goku) (Crossover)",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Arale Norimaki (Gi de Goku) (Crossover)",
          "cardId": "1009010",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009010/1009010.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Arale Norimaki (Gi de Goku) (Crossover)",
          "cardId": "1010621",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1010620/1010620.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0088",
      "nombre": "Arale Norimaki FIS (Crossover)",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Arale Norimaki FIS (Crossover)",
          "cardId": "1008950",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1008950/1008950.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Arale Norimaki FIS (Crossover)",
          "cardId": "1008961",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1008960/1008960.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0089",
      "nombre": "Arale Norimaki FUE (Crossover)",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Arale Norimaki FUE (Crossover)",
          "cardId": "1008970",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1008970/1008970.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Arale Norimaki FUE (Crossover)",
          "cardId": "1008981",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1008980/1008980.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0090",
      "nombre": "Arale Norimaki INT (Crossover)",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Arale Norimaki INT (Crossover)",
          "cardId": "1009040",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009040/1009040.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Arale Norimaki INT (Crossover)",
          "cardId": "1009521",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009520/1009520.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0091",
      "nombre": "Arale Norimaki AGI (Crossover)",
      "variantes": [
        {
          "rareza": "R",
          "nombre": "Arale Norimaki AGI (Crossover)",
          "cardId": "1008990",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1008990/1008990.png",
          "alternativa": false
        },
        {
          "rareza": "SR",
          "nombre": "Arale Norimaki AGI (Crossover)",
          "cardId": "1009001",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009000/1009000.png",
          "alternativa": true
        }
      ]
    },
    {
      "id": "0092",
      "nombre": "Obotchaman (Crossover)",
      "variantes": [
        {
          "rareza": "N",
          "nombre": "Obotchaman (Crossover)",
          "cardId": "1009050",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009050/1009050.png",
          "alternativa": false
        }
      ]
    },
    {
      "id": "0093",
      "nombre": "Suppaman (Crossover)",
      "variantes": [
        {
          "rareza": "N",
          "nombre": "Suppaman",
          "cardId": "1009030",
          "img": "https://dokkaninfo.com/assets/global/en/character/card/1009030/1009030.png",
          "alternativa": false
        }
      ]
    }
  ]
};
