import React, { CSSProperties, useEffect, useState } from 'react';
import EarthAventure from './EarthComponent/EarthAventure';
import { AiOutlineSound } from 'react-icons/ai'; // Ícone de som
import br from '../../assets/brasil.png';
import us from '../../assets/eua.png';
import es from '../../assets/espanha.png';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/hook/UseLanguage';

function HomeHero() {
  const [text, setText] = useState('');
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

useEffect(() => {
  const helloText = t('home.hello');
  let index = 0;
  let timeoutId: NodeJS.Timeout;

  const animateText = () => {
    setText(helloText.substring(0, index + 1) + '...');
    index++;

    if (index < helloText.length) {
      timeoutId = setTimeout(animateText, 90);
    } else {
      // Quando terminar, espera 1s e reinicia a animação
      timeoutId = setTimeout(() => {
        index = 0;
        animateText();
      }, 1000);
    }
  };

  animateText();

  return () => {
    clearTimeout(timeoutId);
  };
}, [t]);


  const shadowStyle: CSSProperties = {
    // position: 'absolute' as 'absolute',
    // transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    zIndex: -1,
  };

  const AudioAmong = new Audio('/assets/key.mp3');

  const handleAudio = () => {
    AudioAmong.currentTime = 0;
    AudioAmong.play();
  };

  const handleLanguageChange = (event: React.MouseEvent, lng: string) => {
    event.preventDefault();
    changeLanguage(lng);
  };

  return (
    <div className='xs:grid xs:grid-cols-1 w-screen mt-24 xs:h-[100vh] md:h-screen md:pt-0 lg:grid lg:grid-cols-5 '>
      <div
        id='apresentation'
        className='xs:flex xs:flex-col xs:items-center xs:justify-between xs:w-screen xs:h-[25vh] sm:h-[20vh] md:w-screen xs:gap-2 sm:gap-20 lg:grid lg:col-span-2 lg:ml-24 lg:mt-28 '
      >
        <div className='md:mr-56 lg:relative lg:right-24'>
          <div className='flex gap-12 md:ml-60 '>
            <button className='flex flex-col gap-2'
              onClick={(event) => handleLanguageChange(event, 'pt')}
            >
              <img src={br} width={30} alt='Pt-Br' />
              <span className='text-slate-50 font-mono'>Pt-Br</span>
            </button>

            <button className='flex flex-col gap-2'
              onClick={(event) => handleLanguageChange(event, 'en')}
            >
              <img src={us} width={30} alt='En-Us' />
              <span className='text-slate-50 font-mono'>En-Us</span>
            </button>

            <button className='flex flex-col gap-2'
              onClick={(event) => handleLanguageChange(event, 'es')}
            >
              <img src={es} width={30} alt='Es-Es' />
              <span className='text-slate-50 font-mono'>Es-Es</span>
            </button>
          </div>
        </div>


        <div className='flex items-start xs:min-h-16 sm:min-h-32 xs:w-[300px] sm:w-[500px] md:w-full'>
          <p className='text-slate-50 xs:text-left xs:text-xl sm:text-4xl xs:w-[300px] sm:w-[450px]'>
            {text} 
          </p>
          <AiOutlineSound
            color='#FFFF'
            size={30}
            className='-rotate-45 cursor-pointer relative xs:max-sm:top-2'
            onClick={handleAudio}
          />
        </div>
      </div>

      <div
        id="earthAventure"
        className="flex items-center justify-center lg:col-span-3 lg:relative lg:bottom-20 lg:left-16"
      >
        <EarthAventure />
        <div
          className="absolute xs:w-[150px] xs:h-[150px] md:w-[300px] md:h-[300px]
            xs:shadow-[0_0_150px_150px_rgba(30,58,138,0.8)] lg:shadow-[0_0_500px_150px_rgba(30,58,138,1.5)]"
          style={shadowStyle}
        ></div>
      </div>
    </div>
  );
}

export default HomeHero;
