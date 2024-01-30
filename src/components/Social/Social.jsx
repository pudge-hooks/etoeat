import Instagram from '../../assets/svg/instagram.svg';
import Telegram from '../../assets/svg/telegram.svg';
import Facebook from '../../assets//svg/facebook.svg';
import './Social.scss';

const Social = () => {
  return (
    <div className="social">
      <p>Ми в соцмережах</p>
      <div className='social__container'>
        <a href="#">
          <img src={Instagram} alt='instagram'/>
        </a>
        <a href="#">
          <img src={Telegram} alt='telegram'/>
        </a>
        <a href="#">
          <img src={Facebook} alt='facebook'/>
        </a>
      </div>
    </div>
  );
};

export default Social;