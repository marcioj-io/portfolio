import React, { CSSProperties, useEffect, useState } from 'react';
import EarthAventure from './EarthComponent/EarthAventure';

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

  return (
    <div className='flex xs:flex-col md:flex-row xs:h-[80vh] md:h-screen w-screen xs:pt-10 md:pt-0'>
      <div
        id='apresentation'
        className='flex xs:w-full xs:h-[30vh] md:w-[50vw] md:h-full items-center justify-center overflow-x-hidden'
      >
        <p className='text-slate-50 xs:text-2xl md:text-4xl xs:w-[300px] md:w-[450px]'>{text}</p>
      </div>

      {/* Caso modificado o tamanho do globo, corresponder ao height da div abaixo */}
      <div
        id="earthAventure"
        className="flex xs:w-full xs:h-[50vh] md:w-[50vw] md:h-full "
      >
        <EarthAventure />
        <div
          className="w-50 xs:w-[100px] xs:h-[100px] lg:w-[300px] lg:h-[300px] xs:left-[47%] xs:top-[50%] lg:left-[75%] lg:top-[50%]
    xs:shadow-[0_0_500px_120px_rgba(30,58,138,1.5)] lg:shadow-[0_0_500px_150px_rgba(30,58,138,1.5)]"
          style={shadowStyle}
        ></div>
      </div>

    </div>
  );
}

export default HomeHero;
