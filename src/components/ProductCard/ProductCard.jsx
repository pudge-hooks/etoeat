import './ProductCard.scss';

import { useCart } from '../../data/CartContext';

import { useState } from 'react';

const ProductCard = ({ product, setSelectedProducts }) => {

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
      <h2 className='products__name'>{product.name}</h2>
      <div className={`products__container-inner ${isFlipped ? 'flipped' : ''}`}>
        <img className={`products__image ${isFlipped ? '' : 'show'}`} src={product.img} alt={product.name}/>
        <div className={`products__compound ${isFlipped ? 'show' : ''}`}>
          <h3>Склад:</h3>
          <p>NNWQnekqjwenr kjqwneq kqwe njwenkqwjwq nkejwj jwnqjke kke ke kkqwe kek wkqe wkekweekw kewe</p>
        </div>
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
