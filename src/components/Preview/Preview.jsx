import { createPortal } from 'react-dom';
import './Preview.scss';

const Preview = () => {
  return createPortal(
    <div className="preview">
      <div className="preview__logo"></div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Preview;
