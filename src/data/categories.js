import mainDish from '../assets/svg/main-dish.svg';
import soup from '../assets/svg/soup.svg';
import snack from '../assets/svg/snacks.svg';
import salad from '../assets/svg/salad.svg';
import burger from '../assets/svg/burger.svg';
import garnish from '../assets/svg/garnish.svg';
import softDrink from '../assets/svg/soft-drink.svg';
import alcoholDrink from '../assets/svg/alcohol-drink.svg';
import dessert from '../assets/svg/dessert.svg';
import cocktail from '../assets/svg/cocktail.svg';

const categories = [
  {
    id: 'BY1Af0',
    name: 'Перші страви',
    img: 'https://1.bp.blogspot.com/-9dAxH0yTxxU/WvSlOS-Au_I/AAAAAAAAAN0/V93LCRg8i18sUTufVZSL6WiXbvDL6SNQACLcBGAs/s1600/Alexey_Lobur_big_287.jpg',
    icon: soup,
    productsList: ['t0vKFs', 'EbbABY', 'W6EVpT', 'ciBLkx', 'YE09KE'],
  },
  {
    id: 'BY1Af1',
    name: 'Основні страви',
    img: 'https://www.southernliving.com/thmb/XIHmbOagRrWxoOOrYnQih5VEV9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2548301_QFSHe_646_0_0_0-fbd2a27e126942c8b33dbc3d696b0501.jpg',
    icon: mainDish,
    productsList: ['tGpyx2', 'ciBLkx'],
  },
  {
    id: 'BY1Af2',
    name: 'Закуски',
    img: 'https://lady-day.com.ua/wp-content/uploads/2023/12/preview_preview_image-n2mnlytgnjjo-e-vu6_tcruiu_g3b1uda.jpg',
    icon: snack,
    productsList: [],
  },
  {
    id: 'BY1Af3',
    name: 'Сендвічі',
    img: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.webp',
    icon: burger,
    productsList: [],
  },
  {
    id: 'BY1Af4',
    name: 'Салати',
    img: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Bowl-of-Salad.png',
    icon: salad,
    productsList: [],
  },
  {
    id: 'BY1Af5',
    name: 'Гарніри',
    img: 'https://static.1000.menu/img/content-v2/18/ca/14461/kartoshka-fri-na-skovorode_1581661860_11_max.jpg',
    icon: garnish,
    productsList: [],
  },
  {
    id: 'BY1Af6',
    name: 'Десерти',
    img: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Cherry-Cheesecake-with-Berry-Sauce.png',
    icon: dessert,
    productsList: [],
  },
  {
    id: 'BY1Af7',
    name: 'Безалкогольні напої',
    img: 'https://cdna.artstation.com/p/assets/images/images/001/952/940/large/irapoan-junior-latas-colorgrade.jpg?1455069773',
    icon: softDrink,
    productsList: ['W6EVpT', '3R9UeF'],
  },
  {
    id: 'BY1Af8',
    name: 'Алкогольні напої',
    img: 'https://shuba.life/static/content/thumbs/1905x1016/8/8e/ni2pds---c1905x1016x50px50p-up--e6cee4d6e03b646ce252f280a09988e8.jpg',
    icon: alcoholDrink,
    productsList: [],
  },
  {
    id: 'BY1Af9',
    name: 'Коктейлі',
    img: 'https://bistrobadia.de/wp-content/uploads/2020/04/Shikaf-libanesischer-Fruchtcocktail.jpg',
    icon: cocktail,
    productsList: [],
  },
];

export default categories;
