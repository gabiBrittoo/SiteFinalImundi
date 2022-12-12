/* Criando uma variável que contém os valores dos produtos de compra */
let produtoJson = [
  {
    id: 1, /* Valor de identificação */
    name: 'Falafel', /* Nome */
    img: 'img/EgitoFalafel.jpg', /* Link da imagem */
    price: [36.90, 36.90, 36.90], /* Preço de cada opção de embalagem */
    /* Valor de cada embalagem */
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    /* Descrição do produto | alimento */
    description: 'Bolinhos fritos de grão-de-bico e fava moída, misturados com condimentos como alho, cebolinha, salsa, coentro e cominho. Servidos com molho de queijo azul'
  },
  {
    id: 2,
    name: 'Shawarma',
    img: 'img/EgitoShawarma.jpg',
    price: [35.90, 35.90, 35.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Pão árabe servido com legumes, homus - molho de origem árabe -, labneh - coalhada seca - e fatias finas de carne, frango e carneiro. Acompanhados separadamente por batatas fritas, iogurte grego e molho agridoce'
  },
  {
    id: 3,
    name: 'Harira',
    img: 'img/MarrocosHarira.jpg',
    price: [39.90, 39.90, 39.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Guisado de carne de borrego - cordeiro jovem -, preparado lentamente com grão-de-bico, ervas aromáticas e especialidades do chefe'
  },
  {
    id: 4,
    name: 'Msemen Recheado',
    img: 'img/MarrocosStuffedMsemen.jpg',
    price: [30.90, 30.90, 30.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Massa de origem marroquina, recheada de pimentão, cebola e tomate, preparada na grelha e servida com mel'
  },
  {
    id: 5,
    name: 'Feijoada',
    img: 'img/BrasilFeijoada.jpg',
    price: [55.00, 55.00, 55.00],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Feijão preto preparado com toucinho, linguiça, carne-seca, calabresa e legumes durante o período de 12 horas. Acompanhado por fatias de laranja, arroz, couve refogada e farofa de bacon do chefe'
  },
  {
    id: 6,
    name: 'Feijao Tropeiro',
    img: 'img/BrasilFeijaoTropeiro.jpg',
    price: [52.00, 52.00, 52.00],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Mistura de toucinho, feijão, farinha, pimenta-do-reino, café, fubá e coité - um molho de vinagre com fruto cáustico espremido - com à farinha de mandioca'
  },
  {
    id: 7,
    name: 'Burrito',
    img: 'img/MexicoBurrito.jpg',
    price: [25.90, 25.90, 25.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Tortilla de farinha recheada de molho de queijo azul, guacamole, frango grelhado e queijo gorgonzola'
  },
  {
    id: 8,
    name: 'Nachos',
    img: 'img/MexicoNachos.jpg',
    price: [45.90, 45.90, 45.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Tortillas de milho crocante com formato triangular, cobertos por queijo cheddar, pimenta jalapeño, carne moída, molho de queijos e tomate'
  },
  {
    id: 9,
    name: 'Dakgangjeong',
    img: 'img/CoreiaDakgangjeong.jpg',
    price: [35.00, 35.00, 35.00],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Pedaços de frango empanado, cobertos por um molho apimentado e agridoce. Servidos juntamente com sementes de gergelim, amendoim, cebolinha e kimchi de pepino - acompanhamento base das refeições coreanas'
  },
  {
    id: 10,
    name: 'Gimbap',
    img: 'img/CoreiaGimbap.jpg',
    price: [30.00, 30.00, 30.00],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Arroz cozido e ingredientes como vegetais, peixes e carnes que são enrolados em gim - folhas secas de algas marinhas - e servidos em fatias pequenas.'
  },
  {
    id: 11,
    name: 'Frango Tikka Masala',
    img: 'img/IndiaFrangoTikkaMasala.jpg',
    price: [45.90, 45.90, 45.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Pedaços de frango assado marinados em molho curry temperado durante o período de 17 horas'
  },
  {
    id: 12,
    name: 'Samosa',
    img: 'img/IndiaSamosa.jpg',
    price: [40.00, 40.00, 40.00],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Massa frita indiana recheada de feijão, grão-de-bico, batata, carne, ervas aromáticas e vegetais'
  },
  {
    id: 13,
    name: 'Caracóis Escargots',
    img: 'img/FrancaEscargots.jpg',
    price: [230.00, 230.00, 230.00],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Caracóis preparados durante um período de 45 dias para o consumo, acrescentados ao molho de alho, manteiga, salsa e flores comestíveis'
  },
  {
    id: 14,
    name: 'Steak Tartare',
    img: 'img/FrancaSteakTartare.jpg',
    price: [79.90, 79.90, 79.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Carne bovina crua acompanhada por gema de ovo, cebola roxa, mostarda, molho inglês, salsinha, cebolinha e pimenta'
  },
  {
    id: 15,
    name: 'Pizza Marguerita',
    img: 'img/ItaliaPizza.jpg',
    price: [65.90, 65.90, 65.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Pizza de queijo mussarela e azul, tomate, manjericão fresco e massa caseira'
  },
  {
    id: 16,
    name: 'Spaghetti',
    img: 'img/ItaliaSpaghetti.jpg',
    price: [47.90, 47.90, 47.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Macarrão de massa caseira confeccionada à mão, molho de tomates frescos, queijo ralado, tomates cereja e manjericão'
  },
  {
    id: 17,
    name: 'Costela Barbecue',
    img: 'img/AustraliaCostelinhaBarbecue.jpg',
    price: [54.90, 54.90, 54.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Costela bovina defumada à brasa durante 72 horas, e coberta por um molho de barbecue agridoce caseiro'
  },
  {
    id: 18,
    name: 'Peixe e Batatas Fritas',
    img: 'img/AustraliaFish&Chips.jpg',
    price: [59.90, 59.90, 59.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Fatias de peixe empanado e frito, acompanhado por batatas fritas e limão'
  },
  {
    id: 19,
    name: 'Hangi',
    img: 'img/NovaZelandiaHangi.jpg',
    price: [59.90, 59.90, 59.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Carne de cordeiro e legumes cozidos lentamente - por 48 horas - em um forno subterrâneo'
  },
  {
    id: 20,
    name: 'Lagostins',
    img: 'img/NovaZelandiaLagostins.jpg',
    price: [120.90, 120.90, 120.90],
    sizes: [
      'Papel',
      'Isopor',
      'Folhas de Bananeira'
    ],
    description: 'Lagostins preparados no vapor e servidos por um molho de manteiga, alho, cebola, açafrão e salsinha'
  }
];