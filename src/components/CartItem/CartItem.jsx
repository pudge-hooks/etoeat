import { useCart } from "../../data/CartContext";
import Container from "../Container/Container";
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import './CartItem.scss';
import { useState } from "react";

const CartItem = ({ item, calculateTotalAmount, cartProducts }) => {
  const { removeFromCart } = useCart();

  const [count, setCount] = useState(1);

  const handlePlus = () => {
    if(count<99){
      item.count = item.count + 1;
      setCount(item.count);
      calculateTotalAmount(cartProducts);
    }
  }

  const handleMinus = () => {
    if(count>1){
      item.count = item.count - 1;
      setCount(item.count);
      calculateTotalAmount(cartProducts);
    }
  }

  return (
    <li className='cart-item'>
      <Container className='cart-item__container'>
        <div className='cart-item__photo-container'>
          <img className='cart-item__photo' src='https://i.postimg.cc/g0m8QJ6t/jpeg-optimizer-DSC-7039.jpg' alt='cart-item' />
        </div>
        <div className='cart-item__description'>
          <h3>{item.Name}</h3>
          <div className='cart-item__inner-container'>
            <div>
              <p>Ціна: {item.Price}грн</p>
              <div className='cart-item__count-container'>
                <button onClick={handlePlus}>
                  <img className='cart-item__plus' src={Plus} alt='plus'/>
                </button>
                <p>{count}</p>
                <button onClick={handleMinus}>
                  <img className='cart-item__minus' src={Minus} alt='minus'/>
                </button>
              </div>
            </div>
            <button className='cart-item__remove' onClick={() => removeFromCart(item.ID)}>Видалити</button>
          </div>
        </div>
      </Container>
    </li>
  );
};

export default CartItem;
