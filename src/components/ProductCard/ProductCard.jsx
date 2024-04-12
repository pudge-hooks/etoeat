import './ProductCard.scss';
import 'swiper/swiper-bundle.css';

import { useCart } from '../../data/CartContext';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';

const ProductCard = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const { addToCart } = useCart();

  const handleAddToCart = productId => {
    addToCart(productId);
    setIsInCart(true);
  };

  const isVideoFile = url => {
    return /\.(mp4|mov|avi|wmv)$/i.test(url);
  };

  return (
    <li className="products__item">
      <div
        className={`products__container-inner ${isFlipped ? 'flipped' : ''}`}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          modules={[EffectFade, Pagination]}
          effect="fade"
          pagination={{
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet',
          }}
        >
          {product.media.map((content, index) => (
            <SwiperSlide key={index}>
              {isVideoFile(content) ? (
                <video
                  autoPlay
                  loop
                  muted
                  className={`products__image ${isFlipped ? '' : 'show'}`}
                >
                  <source src={content} type="video/mp4" />
                </video>
              ) : (
                <img
                  className={`products__image ${isFlipped ? '' : 'show'}`}
                  src={content}
                  alt={product.name}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`products__compound ${isFlipped ? 'show' : ''}`}>
          <h3>Назва:</h3>
          <p>{product.name}</p>
          <h3>Склад:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            accusantium voluptatum totam omnis consequuntur nisi tempora ab
            natus.
          </p>
          <h3>Ціна:</h3>
          <p>{product.price}</p>
          <h3>Вага:</h3>
          <p>{product.weight}</p>
        </div>
      </div>
      <div className="products__container">
        <button className="products__button" onClick={handleFlip}>
          Детальніше
        </button>
        {!isInCart && (
          <button
            className="products__button"
            onClick={() => handleAddToCart(product.id)}
          >
            У кошик
          </button>
        )}
        {isInCart && <p className="products__added-info">Додано</p>}
      </div>
    </li>
  );
};

export default ProductCard;
