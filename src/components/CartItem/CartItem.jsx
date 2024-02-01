import { useCart } from "../../data/CartContext";
import Container from "../Container/Container";
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import './CartItem.scss';
import { useState } from "react";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  const [count, setCount] = useState(0);

  const handlePlus = () => {
    count<99 ? setCount(prev => prev + 1) : setCount(count);
  }

  const handleMinus = () => {
    count>0 ? setCount(prev => prev - 1): setCount(count);
  }

  return (
    <li className='cart-item'>
      <Container className='cart-item__container'>
        <div className='cart-item__photo-container'>
          <img className='cart-item__photo' src={item.img} alt='cart-item' />
        </div>
        <div className='cart-item__description'>
          <h3>{item.name}</h3>
          <div className='cart-item__inner-container'>
            <div>
              <p>Ціна: {item.price}грн</p>
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
            <button className='cart-item__remove' onClick={() => removeFromCart(item.id)}>Видалити</button>
          </div>
        </div>
      </Container>
    </li>
  );
};

export default CartItem;
