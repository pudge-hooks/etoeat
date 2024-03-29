const products = [
  {
    id: 't0vKFs',
    name: 'СОЛЯНКА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 100,
    kkal: 118,
    img: 'https://daba.rest/wp-content/uploads/2024/01/IMG_0418-scaled-e1706007582734.jpeg',
    count: 1
  },
  {
    id: 'EbbABY',
    name: 'БУЛЬЙОН',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 110,
    kkal: 118,
    img: 'https://img.tsn.ua/cached/836/tsn-6e978378ae92c65695fd0f636310ff71/thumbs/1200x630/b8/91/064a7cc90580222f9b4ad0dd8da291b8.jpeg',
    count: 1
  },
  {
    id: 'uOntAK',
    name: 'ЧИИРТМА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 160,
    kkal: 118,
    img: 'https://i.obozrevatel.com/food/recipemain/2019/7/26/14023934466.jpg?size=636x424',
    count: 1
  },
  {
    id: 'TFyd1X',
    name: 'БОРЩ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 135,
    kkal: 118,
    img: 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
    count: 1
  },
  {
    id: 'B5pP5Q',
    name: 'СУП',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 120,
    kkal: 118,
    img: 'https://daba.rest/wp-content/uploads/2024/01/IMG_0418-scaled-e1706007582734.jpeg',
    count: 1
  },
  {
    id: 'tGpyx2',
    name: 'МІВІНА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 60,
    kkal: 118,
    img: 'https://daba.rest/wp-content/uploads/2024/01/IMG_0418-scaled-e1706007582734.jpeg',
    count: 1
  },
  {
    id: 'ciBLkx',
    name: 'СУП',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 140,
    kkal: 118,
    img: 'https://klopotenko.com/wp-content/uploads/2018/03/garbuzovyi-sup-z-imbyrem-sitewebukr-1-1000x600.jpg?v=1662545851',
    count: 1
  },
  {
    id: 'W6EVpT',
    name: 'ВОДА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 10,
    kkal: 118,
    img: 'https://cdnn1.inosmi.ru/img/24719/67/247196749_0:146:1920:1226_1920x0_80_0_0_73afe69ece36f1c1a186968855bb886d.jpg',
    count: 1
  },
  {
    id: '3R9UeF',
    name: 'ЮШКА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 40,
    kkal: 118,
    img: 'https://daba.rest/wp-content/uploads/2024/01/IMG_0418-scaled-e1706007582734.jpeg',
    count: 1
  },
  {
    id: 'YE09KE',
    name: 'УХА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 300,
    price: 130,
    kkal: 118,
    img: 'https://www.gastronom.ru/binfiles/images/20221107/b2b4aae9.jpg',
    count: 1
  },
  {
    id: 'QWEGG2',
    name: 'ТАРТАЛЕТКИ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 100,
    price: 125,
    kkal: 118,
    img: 'https://img1.russianfood.com/dycontent/images_upl/253/big_252968.jpg',
    count: 1
  },
  {
    id: 'QWEGG3',
    name: 'МЛИНЦІ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 100,
    price: 105,
    kkal: 118,
    img: 'https://img1.russianfood.com/dycontent/images_upl/457/big_456172.jpg',
    count: 1
  },
  {
    id: 'QWEGG5',
    name: 'СЕНДВІЧ ШИНКА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 100,
    price: 185,
    kkal: 118,
    img: 'https://www.myvin.com.ua/uploads/article/img_large/8674/236515060ec3e12dcc0c83709e74c8b5.jpeg',
    count: 1
  },
  {
    id: 'QWEGG7',
    name: 'САЛАТ З КУРКОЮ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 150,
    price: 285,
    kkal: 118,
    img: 'https://img.delo-vcusa.ru/2019/11/masherovskiy-salat-1.jpg',
    count: 1
  },
  {
    id: 'QWEGG9',
    name: 'САЛАТ РОТЕРДАМ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 150,
    price: 255,
    kkal: 118,
    img: 'https://gotovimop.com/wp-content/uploads/2021/12/salat-novogodnij.jpg',
    count: 1
  },
  {
    id: 'QWEG19',
    name: 'ПЮРЕ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 150,
    price: 58,
    kkal: 118,
    img: 'https://img.tsn.ua/cached/238/tsn-671b840e81dae5015bc4c6345e63d1d0/thumbs/1200x630/49/11/bcb4400cc9416f6a22c16bd930a21149.jpeg',
    count: 1
  },
  {
    id: 'QWEG29',
    name: 'МОРОЗИВО',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 50,
    price: 78,
    kkal: 118,
    img: 'https://novy.tv/wp-content/uploads/sites/96/2019/09/istock-855447930.jpg',
    count: 1
  },
  {
    id: 'QWEG39',
    name: 'ВАФЛЯ БЕЛЬГІЙСЬКА',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 90,
    price: 98,
    kkal: 118,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gaufre_liege.jpg/640px-Gaufre_liege.jpg',
    count: 1
  },
  {
    id: 'QWEG49',
    name: 'КОКТЕЙЛЬ ПОЛУНИЦЯ',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 400,
    price: 88,
    kkal: 118,
    img: 'https://img1.russianfood.com/dycontent/images_upl/604/big_603195.jpg',
    count: 1
  },
  {
    id: 'QWEG89',
    name: 'КОКТЕЙЛЬ МАУС',
    compound:
      'Мисливські ковбаски, куряче стегно, свинина, шинка, бочок, солений огірок. Подають зі сметаною, лимоном та шоті.',
    weight: 400,
    price: 114,
    kkal: 118,
    img: 'https://zira.uz/wp-content/uploads/2018/05/quadro-kokteyl-4.jpg',
    count: 1
  }
];

export default products;
