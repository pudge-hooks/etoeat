import { createPortal } from 'react-dom';
import preView from '../../assets/img/preview.png';
import './Preview.scss';
import sound from '../../assets/sound/sound.mp3';
import { useEffect, useRef } from 'react';

const Preview = () => {

  const audioRef = useRef(new Audio(sound));

  useEffect(() => {
    const audio = audioRef.current;
    audio.play().then(() => {
      // Аудио воспроизводится успешно
    }).catch(error => {
      // Ошибка воспроизведения аудио
      console.error('Ошибка воспроизведения аудио:', error);
    });
  }, []);

  return createPortal(
    <div className='preview'>
      <img className='preview__image' src={preView} alt="preview"/>
    </div>,
    document.querySelector('#modal')
  );
};

export default Preview;