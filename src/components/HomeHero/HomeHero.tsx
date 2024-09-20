import React, { CSSProperties, useEffect, useState } from 'react';
import EarthAventure from './EarthComponent/EarthAventure';

function HomeHero() {
  const [text, setText] = useState('');

  useEffect(() => {
    const helloText = `Hello, I am Marcio junior, Developer Full Stack`;
    let index = 0;

    const animateText = () => {
      setText(`${helloText.substring(0, index + 1)}...`);
      index++;
      if (index === helloText.length) {
        clearInterval(timer);
        setTimeout(() => {
          index = 0;
          timer = setInterval(animateText, 200);
        }, 1000);
      }
    };

    let timer = setInterval(animateText, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const shadowStyle: CSSProperties = {
    position: 'absolute' as 'absolute',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    boxShadow: '0 0 500px 150px rgba(30, 58, 138, 1.5)',
    zIndex: -1
  };

  return (
    <div id='home-hero' className='h-screen w-screen xs:max-sm:h-[50vh] bg-violet-500'>
      <div className='grid xs:max-sm:grid-cols-1 md:grid-cols-2 h-full w-full'>
        <div id='apresentation' className='flex flex-col w-full xs:max-sm:min-h-20 sm:h-full xs:max-sm:justify-center justify-center xs:items-center bg-red-500 overflow-x-hidden'>
          <div className="flex xs:w-[270px] sm:w-[440px]">
            <p className='text-slate-50 text-4xl xs:max-sm:text-2xl'>
              {text}
            </p>
          </div>
        </div>
        <div id='earthAventure' className='flex h-full xs:max-sm:flex-1 xs:max-sm:items-start xs:max-sm:pt-9 bg-green-500 '>
          <EarthAventure />
          <div className='h-500 w-50 xs:w-[100px] xs:h-[100px] lg:w-[300px] lg:h-[300px] xs:left-[55%] xs:top-[35%] lg:left-[75%] lg:top-[50%] ' style={shadowStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
