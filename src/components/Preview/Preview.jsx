import { createPortal } from 'react-dom';
import preView from '../../assets/img/preview.png';
import './Preview.scss';

const Preview = () => {

  return createPortal(
    <div className='preview'>
      <img className='preview__image' src={preView} alt="preview"/>
    </div>,
    document.querySelector('#modal')
  );
};

export default Preview;