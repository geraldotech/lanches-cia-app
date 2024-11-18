const MENU = [
  {
    title: "Lanches",
    data: [
      {
        id: "1",
        title: "X-Burger",
        price: 24.9,
        description:
          "Clássico X-Burger com carne bovina, queijo e molho especial.",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão com gergelim;",
          "Hambúrguer bovino;",
          "Queijo;",
          "Molho especial;",
          "Alface;",
          "Tomate;",
        ],
      },
      {
        id: "2",
        title: "X-Salada",
        price: 27.9,
        description:
          "O famoso X-Salada com ingredientes frescos e carne saborosa.",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão com gergelim;",
          "Hambúrguer bovino;",
          "Queijo;",
          "Alface;",
          "Tomate;",
          "Maionese;",
        ],
      },
      {
        id: "3",
        title: "X-Bacon",
        price: 30.9,
        description:
          "X-Bacon crocante com carne suculenta e queijo derretido.",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "Hambúrguer bovino;",
          "Queijo cheddar;",
          "Bacon;",
          "Maionese;",
        ],
      },
      {
        id: "4",
        title: "X-Egg",
        price: 29.9,
        description:
          "X-Egg com ovo e carne suculenta, um clássico.",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão com gergelim;",
          "Hambúrguer bovino;",
          "Queijo;",
          "Ovo;",
          "Alface;",
          "Maionese;",
        ],
      },
      {
        id: "5",
        title: "Misto Quente",
        price: 12.5,
        description:
          "Sanduíche clássico com queijo e presunto.",
        cover: require("../../assets/products/cover/misto.png"),
        thumbnail: require("../../assets/products/cover/misto.png"),
        ingredients: ["Pão de forma;", "Presunto;", "Queijo;"],
      },
      {
        id: "6",
        title: "Bauru",
        price: 22.9,
        description:
          "Lanche popular com queijo, tomate, presunto e carne.",
        cover: require("../../assets/products/cover/bauru.jpg"),
        thumbnail: require("../../assets/products/cover/bauru.jpg"),
        ingredients: [
          "Pão francês;",
          "Queijo derretido;",
          "Presunto;",
          "Tomate;",
          "Carne;",
        ],
      },
      {
        id: "7",
        title: "Cachorro-Quente",
        price: 15.9,
        description:
          "Cachorro-quente tradicional com molhos variados.",
        cover: require("../../assets/products/cover/hotdog.webp"),
        thumbnail: require("../../assets/products/cover/hotdog.webp"),
        ingredients: [
          "Pão de hot dog;",
          "Salsicha;",
          "Molho de tomate;",
          "Maionese;",
          "Batata palha;",
        ],
      },
      {
        id: "8",
        title: "X-Tudo",
        price: 35.9,
        description:
          "Um X-Tudo completo com tudo que tem direito.",
        cover: require("../../assets/products/cover/x_tudo.png"),
        thumbnail: require("../../assets/products/cover/x_tudo.png"),
        ingredients: [
          "Pão com gergelim;",
          "Hambúrguer bovino;",
          "Queijo;",
          "Bacon;",
          "Ovo;",
          "Presunto;",
          "Alface;",
          "Tomate;",
          "Maionese;",
        ],
      },
      {
        id: "10",
        title: "X-Calabresa",
        price: 28.9,
        description:
          "X-Calabresa com sabor marcante e ingredientes frescos.",
        cover: require("../../assets/products/cover/7.png"),
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        ingredients: [
          "Pão francês;",
          "Linguiça calabresa;",
          "Queijo;",
          "Cebola;",
          "Maionese;",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "11",
        title: "X-Burguer R$ 19.90 corre =)",
        price: 19.9,
        description:
          "Os ingredientes desse hambúrguer mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      // Outros itens promocionais...
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Sorvete com Brownie",
        price: 18.9,
        description:
          "Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      // Outras sobremesas...
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "100",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
      {
        id: "101",
        title: "Hmmm, Guavavita!",
        price: 2.9,
        thumbnail: require("../../assets/products/cover/101.png"),
        cover: require("../../assets/products/cover/101.png"),
        description:
          "O Guaraná Natural mais famoso de todo Brasil",
        ingredients: [
          " Copo - 290ML"
        ],
      },
    ],
  },
];


const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

// envia as props baseado no tipo de cada item
type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
