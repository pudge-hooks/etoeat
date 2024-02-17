import './ProductCard.scss';

import { useCart } from '../../data/CartContext';

import { useRef, useState } from 'react';

import BurgerVideo from '../../assets/video/burgerVideo.mp4';

const ProductCard = ({ product }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const { addToCart } = useCart();

  const handleAddToCart = productId => {
    addToCart(productId);
    setIsInCart(true);
  }
  return (
    <li className='products__item'>
      <div className={`products__container-inner ${isFlipped ? 'flipped' : ''}`}>
        <img className={`products__image ${isFlipped ? '' : 'show'}`} src={product.img} alt={product.name}/>
        <video autoPlay loop muted className={`products__video ${isFlipped ? '' : 'show'}`}>
          <source src={BurgerVideo} type="video/mp4"/>
        </video>
        <div className={`products__compound ${isFlipped ? 'show' : ''}`}>
          <h3>Склад:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium voluptatum totam omnis consequuntur nisi tempora ab natus! Voluptas tempora repellat ut, deleniti facilis vel! Iste odit eligendi accusantium modi.</p>
        </div>
      </div>
      <div className='products__title-container'>
        <h2 className='products__name'>{product.name}</h2>
        <h2>{product.price}грн.</h2>
      </div>
      <div>
        <h3>Вага: {product.weight}г.</h3>
        <h3>Калорійність: {product.kkal}ккл.</h3>
      </div>
      <div className='products__container'>
        <button className='products__button' onClick={handleFlip}>Детальніше</button>
        {!isInCart && <button className='products__button' onClick={() => handleAddToCart(product.id)}>У кошик</button>}
        {isInCart && <p className='products__added-info'>Додано</p>}
      </div>
    </li>
  );
};

export default ProductCard;
