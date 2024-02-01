import CartItem from '../CartItem/CartItem';
import { useCart } from '../../data/CartContext'; 
import { createPortal } from 'react-dom';
import './CartModal.scss';
import Container from '../Container/Container';
import close from '../../assets/svg/close.svg';
import products from '../../data/products';
import Form from '../Form/Form';

const CartModal = ({isCartOpen, setIsCartOpen}) => {
  const { cartItems, totalAmount, calculateTotalAmount } = useCart();

  const cartProducts = products.filter((product) => cartItems.includes(product.id))

  calculateTotalAmount(cartProducts);

  return createPortal(
    <div className={'cart'}>
      {cartProducts.length>0 && 
      <div className={`cart__content ${isCartOpen ? 'open-modal' : ''}`}>
        <Container className='cart__container'>
          <h2 className='cart__title'>Кошик</h2>
          <ul className='cart__products-list'>
            {cartProducts.map((item) => (
              <CartItem key={item.id} item={item} calculateTotalAmount={calculateTotalAmount} cartProducts={cartProducts}/>
            ))}
          </ul>
          <p className='cart__summ'>Разом до сплати: {totalAmount}грн</p>
        </Container>
        <div className='cart__vertical-line'></div>
        <Container className='cart__container'>
          <h2>Замовити</h2>
          <button
            className='cart__close'
            onClick={() => setIsCartOpen(false)}
          >
            <img src={close} alt='close-icon'/>
          </button>
          <Form />
        </Container>
      </div>}
      {cartProducts.length===0 && 
      <div className={`cart__content ${isCartOpen ? 'open-modal' : ''} empty`}>
        <button
          className='cart__close'
          onClick={() => setIsCartOpen(false)}
        >
          <img src={close} alt='close-icon'/>
        </button>
        <h2>Кошик порожній</h2>
      </div>
      }
    </div>,
    document.querySelector('#modal')
  );
};

export default CartModal;
