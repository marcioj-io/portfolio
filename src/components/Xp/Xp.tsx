import React, { CSSProperties, useState, useRef } from 'react';
import XpItem, { ExperienciaProps } from './XpItem';
import Sobre from '../Sobre/Sobre';
import { useMediaQuery } from 'react-responsive';
import ZoomIcon from '../../assets/zoom.png';

// business
import verzel from '../../assets/verzel.jpg';
import nextc from '../../assets/nextcooders.jpg';
import koode from '../../assets/koode.jpg';
import { FaFilePdf } from "react-icons/fa6";
import { FaFileWord } from "react-icons/fa6";

function Xp() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && !isSmallScreen) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const lightWidth = 150;
      const lightHeight = 150;

      const limitedX = Math.max(lightWidth / 2, Math.min(x, width - lightWidth / 2));
      const limitedY = Math.max(lightHeight / 2, Math.min(y, height - lightHeight / 2));

      setLightPosition({ x: limitedX, y: limitedY });

      const tiltX = (y / height - 0.5) * 10;
      const tiltY = (x / width - 0.5) * 10;
      setTilt({ tiltX: 0, tiltY });
    }
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen) {
      setLightPosition({ x: -1000, y: -1000 });
      setTilt({ tiltX: 0, tiltY: 0 });
    }
  };

  const lightStyle: CSSProperties = {
    position: 'absolute',
    left: `${lightPosition.x}px`,
    top: `${lightPosition.y}px`,
    width: '0px',
    height: '0px',
    boxShadow: '0px 0px 200px 100px #8ac6d1',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    pointerEvents: 'none',
  };

  const cursorOffsetX = 50;
  const cursorOffsetY = 50;

  const containerStyle: CSSProperties = {
    transform: `perspective(6000px) rotateX(${tilt.tiltX}deg) rotateY(${tilt.tiltY}deg)`,
    cursor: `url(${ZoomIcon}) ${cursorOffsetX} ${cursorOffsetY}, auto`,
  };

  const Xp: ExperienciaProps[] = [
    {
      icon: verzel,
      title: 'Full-Stack Developer',
      empresa: 'Verzel Soluções em Sistemas',
      time: 'Set de 2023 - Set 2024',
      local: 'São Paulo, Brasil - Remota',
      description: 'Skills: Web technologies - React Native - Azure DevOps - Node.js - #react.ts - Microsoft Azure - C# - .NET Core - EntityFramework -Linq - Sql Server - Postgress - PrismaOrm - Docker - Nodemailer - Mailkit etc..'
    },
    {
      icon: nextc,
      title: 'Full-Stack Developer',
      empresa: 'NextCooders',
      time: 'Set de 2022 - Setember 2023',
      local: 'São Paulo, Brasil - Remote',
      description: 'Skills: Web technologies - Azure DevOps - Node.js - #react.ts - Microsoft Azure - .NET Core - EntityFramework - Linq'
    },
    {
      icon: koode,
      title: 'Full-Stack Developer',
      empresa: 'Koode',
      time: 'Feb de 2022 - Setember 2022',
      local: 'São Paulo, Brasil - Remote',
      description: 'Skills: Web technologies - Azure DevOps - Node.js - #react.ts - Microsoft Azure - .NET Core - AspNet'
    },
  ]

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'CV-MJ-Full-Stack.pdf';
    link.click();
  };

  const downloadWord = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.docx';
    link.download = 'CV-MJ-Full-Stack.docx';
    link.click();
  };

  return (
    <div className="h-auto w-screen flex xs:flex-col xs:m-auto xs:items-center md:items-start md:justify-start md:pl-5 lg:pl-10 xs:mt-20">
      <div >
        <p className='text-[#c0c0c0] md:text-6xl relative xs:max-sm:right-14 md:px-5 md:pb-12 xs:py-5'>
          <span className='font-bold font-sans xs:text-xl md:text-6xl'>#03 Years</span>
          {<br />} <span className='text-[#8ac6d1] xs:text-xl md:text-5xl'>of professional experience</span>
        </p>
      </div>

      <div className='relative flex xs:mt-11 xs:gap-7 md:gap-14'>
        <span className='relative xs:left-9 md:left-[45vw] text-slate-50 font-inter font-light top-1'>Donwload Cv here: </span>
        <FaFilePdf
          color='#1c916c'
          size={30}
          className='relative xs:left-9 md:left-[45vw] mb-5 cursor-pointer'
          onClick={downloadPDF}
          title="Baixar PDF"
        />

        <FaFileWord
          color='#8ac6d1'
          size={30}
          className='relative xs:left-9 md:left-[45vw] mb-5 cursor-pointer'
          onClick={downloadWord}
          title="Baixar Word"
        />
      </div>

      <div className='flex xs:max-sm:flex-col md:flex-row'>
        <div
          id="costum"
          className="bg-[#161b22] flex relative xs:justify-center md:items-start md:justify-start xs:max-h-[500px] xs:w-[90vw] md:w-[70vw] md:min-h-[73vh] lg:w-[75vw] rounded-lg overflow-hidden z-10 xs:pb-2 sm:pb-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          style={containerStyle}
        >
          <div style={lightStyle}></div>

          <div className="grid xs:max-sm:grid-cols-1 md:grid-cols-2 h-full xs:max-sm:w-full xs:gap-6 sm:gap-2 p-2">
            <XpItem projects={Xp} />
          </div>
        </div>
        <div className=''>
          <Sobre />
        </div>
      </div>
    </div>
  );
}

export default Xp;
