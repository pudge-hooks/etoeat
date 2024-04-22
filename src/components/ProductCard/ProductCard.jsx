import './ProductCard.scss';
import 'swiper/swiper-bundle.css';

import { useCart } from '../../data/CartContext';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import productsMedia from '../../data/productsMedia';

const ProductCard = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const { addToCart } = useCart();

  const handleAddToCart = productId => {
    addToCart(productId);
    setIsInCart(true);
  };

  // const isVideoFile = url => {
  //   return /\.(mp4|mov|avi|wmv)$/i.test(url);
  // };

  return (
    <li className="products__item">
      <h3 className="products__compound--title">{product.Name}</h3>
      <div
        className={`products__container-inner ${isFlipped ? 'flipped' : ''}`}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet',
          }}
        >
          <SwiperSlide>
            <video
              autoPlay
              loop
              muted
              className={`products__image ${isFlipped ? '' : 'show'}`}
            >
              <source src={productsMedia[product.ID].video} type="video/mp4" />
            </video>
          </SwiperSlide>
          {productsMedia[product.ID].photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                className={`products__image ${isFlipped ? '' : 'show'}`}
                src={photo}
                alt={product.Name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`products__compound ${isFlipped ? '' : 'hide'}`}>
          <p className="products__compound--text">{product.Description}</p>
          <div className="products__compound--pricing">
            <p className="products__compound--text">{product.Price} грн</p>
            <p className="products__compound--text">{product.Weidth} гр</p>
          </div>
        </div>
      </div>
      <div className="products__container">
        <button className="products__button" onClick={handleFlip}>
          Детальніше
        </button>
        {!isInCart && (
          <button
            className="products__button"
            onClick={() => handleAddToCart(product.ID)}
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
