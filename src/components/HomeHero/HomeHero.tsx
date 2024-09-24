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
          timer = setInterval(animateText, 100);
        }, 1000);
      }
    };

    let timer = setInterval(animateText, 200);

    return () => {
      clearInterval(timer);
    };
  }, [isPortuguese]);

  const shadowStyle: CSSProperties = {
    position: 'absolute' as 'absolute',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    boxShadow: '0 0 500px 60px rgba(30, 58, 138, 1.5)', // Sombra padrão
    zIndex: -1,
  };

  return (
    <div id='home-hero' className='h-screen w-screen xs:max-sm:h-[50vh] xs:pt-16 xs:mb-24 md:mb-0 md:pt-0'>
      <div className='grid xs:max-sm:grid-cols-1 md:grid-cols-2 h-full w-full'>

        <div id='apresentation'
          className='flex xs:min-h-[100px] sm:h-full w-full overflow-x-hidden justify-center items-center xs:mb-12 md:mb-0'
        >
          <div className="flex items-center justify-center xs:h-[100px] xs:w-[270px] sm:w-[440px]">
            <p className='text-slate-50 text-4xl xs:max-sm:text-2xl'>
              {text}
            </p>
          </div>
        </div>

        <div id='earthAventure' className='flex h-full xs:max-sm:flex-1 xs:max-sm:items-start xs:max-sm:pt-9'>
          <EarthAventure />
          <div
            className='w-50 xs:w-[100px] xs:h-[100px] lg:w-[300px] lg:h-[300px] xs:left-[55%] xs:top-[35%] lg:left-[75%] lg:top-[50%]
            xs:shadow-[0_0_500px_60px_rgba(30,58,138,1.5)] lg:shadow-[0_0_500px_150px_rgba(30,58,138,1.5)]'
            style={shadowStyle}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
