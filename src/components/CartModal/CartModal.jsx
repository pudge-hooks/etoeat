import CartItem from '../CartItem/CartItem';
import { useCart } from '../../data/CartContext'; 
import { createPortal } from 'react-dom';
import './CartModal.scss';
import Container from '../Container/Container';
import close from '../../assets/svg/close.svg';
import products from '../../data/products';
import Form from '../Form/Form';
import { useState } from 'react';

const CartModal = ({isCartOpen, setIsCartOpen}) => {
  const { cartItems } = useCart();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const cartProducts = products.filter((product) => cartItems.includes(product.id))

  const handleClose = () => {
    if(isAnimationComplete){
      setIsAnimationComplete(false);
      setIsCartOpen(false);
    }
  }

  return createPortal(
    <div className={'cart'}>
      <div className={`cart__content ${isCartOpen ? 'open' : 'close'}`} onAnimationEnd={() => setIsAnimationComplete(true)}>
        <Container className='cart__container'>
          <h2 className='cart__title'>Кошик</h2>
          <ul className='cart__products-list'>
            {cartProducts.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <p className='cart__summ'>Разом до сплати: 942грн</p>
        </Container>
        <div className='cart__vertical-line'></div>
        <Container className='cart__container'>
          <h2>Замовити</h2>
          <button
            className='cart__close'
            onClick={handleClose}
          >
            <img src={close} alt='close-icon'/>
          </button>
          <Form />
        </Container>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default CartModal;
