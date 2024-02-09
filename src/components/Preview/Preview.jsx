import React from 'react';
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
            <span style={{fontSize: '60px'}}>e</span>
            <span style={{fontSize: '43px'}}>T</span>
            <span style={{fontSize: '60px'}}>o</span>
          </label>
        </div>
        <label className='preview__eat-label'>
          <span style={{fontSize: '60px'}}>e</span>
          <span style={{fontSize: '60px'}}>a</span>
          <span style={{fontSize: '43px'}}>T</span>
        </label>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Preview;