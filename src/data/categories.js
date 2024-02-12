import mainDish from '../assets/svg/main-dish.svg';
import soup from '../assets/svg/soup.svg';
import salad from '../assets/svg/salad.svg';
import burger from '../assets/svg/burger.svg';
import garnish from '../assets/svg/garnish.svg';
import softDrink from '../assets/svg/soft-drink.svg';
// import dessert from '../assets/svg/dessert.svg';

const categories = [
  {
    id: 'BY1Af0',
    name: 'Перші страви',
    img: 'https://1.bp.blogspot.com/-9dAxH0yTxxU/WvSlOS-Au_I/AAAAAAAAAN0/V93LCRg8i18sUTufVZSL6WiXbvDL6SNQACLcBGAs/s1600/Alexey_Lobur_big_287.jpg',
    icon: soup,
    productsList: ['t0vKFs', 'EbbABY', 'ciBLkx', 'YE09KE'],
  },
  {
    id: 'BY1Af1',
    name: 'Основні страви',
    img: 'https://vyhuhol.com.ua/wp-content/uploads/2023/04/SAM_0810-scaled-e1682513924480.jpg',
    icon: mainDish,
    productsList: ['tGpyx2', 'ciBLkx'],
  },
  {
    id: 'BY1Af3',
    name: 'Сендвічі',
    img: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.webp',
    icon: burger,
    productsList: ['QWEGG5'],
  },
  {
    id: 'BY1Af4',
    name: 'Салати',
    img: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Bowl-of-Salad.png',
    icon: salad,
    productsList: ['QWEGG9'],
  },
  {
    id: 'BY1Af5',
    name: 'Гарніри',
    img: 'https://static.1000.menu/img/content-v2/18/ca/14461/kartoshka-fri-na-skovorode_1581661860_11_max.jpg',
    icon: garnish,
    productsList: ['QWEG19'],
  },
  // {
  //   id: 'BY1Af6',
  //   name: 'Десерти',
  //   img: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Cherry-Cheesecake-with-Berry-Sauce.png',
  //   icon: dessert,
  //   productsList: ['QWEG29', 'QWEG39'],
  // },
  {
    id: 'BY1Af7',
    name: 'Напої',
    img: 'https://cdna.artstation.com/p/assets/images/images/001/952/940/large/irapoan-junior-latas-colorgrade.jpg?1455069773',
    icon: softDrink,
    productsList: ['W6EVpT', '3R9UeF'],
  },
];

export default categories;
