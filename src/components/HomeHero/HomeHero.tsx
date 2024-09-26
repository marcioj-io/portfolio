import React, { CSSProperties, useEffect, useState } from 'react';
import EarthAventure from './EarthComponent/EarthAventure';
import { AiOutlineSound } from 'react-icons/ai'; // Ícone de som

function HomeHero() {
  const [text, setText] = useState('');
  const [isPortuguese, setIsPortuguese] = useState(false);

  useEffect(() => {
    // Detectando a linguagem do navegador
    const userLang = navigator.language || navigator.languages[0];
    if (userLang === 'pt-BR') {
      setIsPortuguese(true);
    }

    const helloTextEN = `Hello, I am Marcio Junior, Developer Full Stack`;
    const helloTextPT = `Olá, eu sou Marcio Junior, Desenvolvedor Full Stack`;

    const helloText = isPortuguese ? helloTextPT : helloTextEN;
    let index = 0;

    const animateText = () => {
      setText(`${helloText.substring(0, index + 1)}...`);
      index++;
      if (index === helloText.length) {
        clearInterval(timer);
        setTimeout(() => {
          index = 0;
          timer = setInterval(animateText, 90);
        }, 1000);
      }
    };

    let timer = setInterval(animateText, 90);

    return () => {
      clearInterval(timer);
    };
  }, [isPortuguese]);

  const shadowStyle: CSSProperties = {
    position: 'absolute' as 'absolute',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    zIndex: -1,
  };

  const AudioAmong = new Audio('/assets/key.mp3');

  const handleAudio = () => {
    AudioAmong.currentTime = 0;
    AudioAmong.play()
  };


  return (
    <div className='flex xs:flex-col md:flex-row xs:h-[80vh] md:h-screen w-screen xs:pt-10 md:pt-0'>
      <div
        id='apresentation'
        className='flex xs:w-full xs:h-[30vh] md:w-[50vw] md:h-full items-center justify-center overflow-x-hidden'
      >
        <p className='text-slate-50 xs:text-left xs:text-2xl md:text-4xl xs:w-[300px] md:w-[450px]'>{text}</p>
        {/* Corrigido o onClick para chamar a função corretamente */}
        <AiOutlineSound
          color='#FFFF'
          size={30}
          className='-rotate-45 cursor-pointer'
          onClick={handleAudio} // Aqui a função é chamada corretamente
        />
      </div>

      <div
        id="earthAventure"
        className="flex xs:w-full xs:h-[50vh] md:w-[50vw] md:h-full items-center justify-center relative"
      >
        <EarthAventure />
        <div
          className="absolute xs:w-[150px] xs:h-[150px] md:w-[300px] md:h-[300px] xs:left-[50%] xs:top-[50%] md:left-[50%] md:top-[50%]
            xs:shadow-[0_0_150px_90px_rgba(30,58,138,0.8)] lg:shadow-[0_0_500px_150px_rgba(30,58,138,1.5)]"
          style={shadowStyle}
        ></div>
      </div>
    </div>
  );
}

export default HomeHero;
