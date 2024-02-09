import { createPortal } from 'react-dom';
import preViewLogo from '../../assets/img/preview-logo.png';
import './Preview.scss';

const Preview = () => {

  return createPortal(
    <div className='preview'>
      <div className='preview__container'>
        <div className='preview__container-inner'>
          <img className='preview__logo' src={preViewLogo} alt='preview'/>
          <label className='preview__eto-label'>
            <span className='preview__small-leter'>e</span>
            <span className='preview__big-leter'>T</span>
            <span className='preview__small-leter'>o</span>
          </label>
        </div>
        <label className='preview__eat-label'>
          <span className='preview__small-leter'>e</span>
          <span className='preview__small-leter'>a</span>
          <span className='preview__big-leter'>T</span>
        </label>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Preview;