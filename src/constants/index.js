import product9 from "../assets/images/product2.jpg";
import product8 from "../assets/images/product3.jpg";
import product7 from "../assets/images/product4.jpg";

export const categories = [
  {
    id: 1,
    imgURL: product9,
    name: "Maquillage",
    slug: "maquillage",
  },
  {
    id: 2,
    imgURL: product8,
    name: "Soins de visage",
    slug: "soins-de-visage",
  },
  {
    id: 3,
    imgURL: product7,
    name: "Cheveux",
    slug: "cheveux",
  },
  {
    id: 4,
    imgURL: product9,
    name: "Parfum",
    slug: "parfum",
  },
  {
    id: 5,
    imgURL: product7,
    name: "Teins",
    slug: "teins",
  },
  {
    id: 6,
    imgURL: product8,
    name: "Savons",
    slug: "Savons",
  },
  {
    id: 7,
    imgURL: product9,
    name: "Massage",
    slug: "massage",
  },
];

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jfif";
import product3 from "../assets/images/product3.jfif";
import product4 from "../assets/images/product4.jfif";

export const products = [
  // 💄 Maquillage
  {
    id: 1,
    name: "Rouge à lèvres glamour",
    category: "Maquillage",
    slug: "maquillage",
    imgURL: product1,
    price: 14.99,
  },
  {
    id: 2,
    name: "Palette d'ombres à paupières",
    category: "Maquillage",
    slug: "maquillage",
    imgURL: product2,
    price: 29.0,
  },
  {
    id: 3,
    name: "Fond de teint matifiant",
    category: "Maquillage",
    slug: "maquillage",
    imgURL: product3,
    price: 24.5,
  },
  {
    id: 4,
    name: "Eyeliner liquide noir",
    category: "Maquillage",
    slug: "maquillage",
    imgURL: product4,
    price: 13.99,
  },

  // 🌸 Soins de visage
  {
    id: 5,
    name: "Crème hydratante jour",
    category: "Soins de visage",
    slug: "soins-de-visage",
    imgURL: product1,
    price: 23.99,
  },
  {
    id: 6,
    name: "Masque purifiant",
    category: "Soins de visage",
    slug: "soins-de-visage",
    imgURL: product2,
    price: 19.5,
  },
  {
    id: 7,
    name: "Sérum éclat",
    category: "Soins de visage",
    slug: "soins-de-visage",
    imgURL: product3,
    price: 27.9,
  },
  {
    id: 8,
    name: "Gel nettoyant doux",
    category: "Soins de visage",
    slug: "soins-de-visage",
    imgURL: product4,
    price: 14.75,
  },

  // 💇‍♀️ Cheveux
  {
    id: 9,
    name: "Shampooing revitalisant",
    category: "Cheveux",
    slug: "cheveux",
    imgURL: product1,
    price: 14.99,
  },
  {
    id: 10,
    name: "Masque capillaire",
    category: "Cheveux",
    slug: "cheveux",
    imgURL: product2,
    price: 18.99,
  },
  {
    id: 11,
    name: "Huile pour cheveux secs",
    category: "Cheveux",
    slug: "cheveux",
    imgURL: product3,
    price: 21.0,
  },
  {
    id: 12,
    name: "Spray anti-frisottis",
    category: "Cheveux",
    slug: "cheveux",
    imgURL: product4,
    price: 15.75,
  },

  // 🌺 Parfum
  {
    id: 13,
    name: "Parfum floral Vanessa",
    category: "Parfum",
    slug: "parfum",
    imgURL: product1,
    price: 49.99,
  },
  {
    id: 14,
    name: "Eau de toilette légère",
    category: "Parfum",
    slug: "parfum",
    imgURL: product2,
    price: 39.5,
  },
  {
    id: 15,
    name: "Parfum oriental",
    category: "Parfum",
    slug: "parfum",
    imgURL: product3,
    price: 55.0,
  },
  {
    id: 16,
    name: "Brume corporelle",
    category: "Parfum",
    slug: "parfum",
    imgURL: product4,
    price: 27.0,
  },

  // 🎨 Teint
  {
    id: 17,
    name: "Fond de teint couvrant",
    category: "Teint",
    slug: "teint",
    imgURL: product1,
    price: 25.0,
  },
  {
    id: 18,
    name: "BB crème légère",
    category: "Teint",
    slug: "teint",
    imgURL: product2,
    price: 21.99,
  },
  {
    id: 19,
    name: "Poudre compacte",
    category: "Teint",
    slug: "teint",
    imgURL: product3,
    price: 19.99,
  },
  {
    id: 20,
    name: "Highlighter doré",
    category: "Teint",
    slug: "teint",
    imgURL: product4,
    price: 22.0,
  },

  // 🧼 Savons
  {
    id: 21,
    name: "Savon au miel",
    category: "Savons",
    slug: "savons",
    imgURL: product1,
    price: 8.5,
  },
  {
    id: 22,
    name: "Savon au charbon",
    category: "Savons",
    slug: "savons",
    imgURL: product2,
    price: 9.99,
  },
  {
    id: 23,
    name: "Savon à la lavande",
    category: "Savons",
    slug: "savons",
    imgURL: product3,
    price: 7.5,
  },
  {
    id: 24,
    name: "Savon hydratant coco",
    category: "Savons",
    slug: "savons",
    imgURL: product4,
    price: 8.75,
  },

  // 💆 Massage
  {
    id: 25,
    name: "Huile de massage relaxante",
    category: "Massage",
    slug: "massage",
    imgURL: product1,
    price: 19.99,
  },
  {
    id: 26,
    name: "Crème de massage chauffante",
    category: "Massage",
    slug: "massage",
    imgURL: product2,
    price: 21.0,
  },
  {
    id: 27,
    name: "Bougie de massage",
    category: "Massage",
    slug: "massage",
    imgURL: product3,
    price: 27.5,
  },
  {
    id: 28,
    name: "Huile coco douce",
    category: "Massage",
    slug: "massage",
    imgURL: product4,
    price: 22.25,
  },
];
