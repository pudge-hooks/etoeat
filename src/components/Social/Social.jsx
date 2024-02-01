import Instagram from '../../assets/svg/instagram.svg';
import Telegram from '../../assets/svg/telegram.svg';
import Facebook from '../../assets//svg/facebook.svg';
import './Social.scss';

const Social = () => {
  return (
    <div className="social">
      <p className="social__subtitle">Ми в соцмережах</p>
      <div className="social__container">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href="https://telegram.org/" target="_blank" rel="noreferrer">
          <img src={Telegram} alt="telegram" />
        </a>
        <a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
          <img src={Facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Social;
