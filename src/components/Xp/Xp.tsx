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
import { useTranslation } from 'react-i18next';

function Xp() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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
    icon: nextc, // você precisa importar o ícone correspondente
    title: 'Full Stack Developer',
    empresa: 'Bebot',
    time: 'Jan de 2024 - Ago de 2025',
    local: 'São Paulo, Brasil - Remoto', // supondo, ajuste se precisar
    description: `Node.js, .NET, AWS: [EC2, RDS, S3], Cloudflare, React, JavaScript, Docker, SQL Server.`
  },
  {
    icon: nextc, // importe o ícone adequado
    title: 'Full Stack Developer',
    empresa: 'Prodata',
    time: 'Jan de 2024 - Mai de 2025',
    local: 'São Paulo, Brasil - Remoto', // ajustar conforme necessidade
    description: `.NET Framework, ASP.NET Core, SQL Server, Redis, MongoDB, Docker.`
  },
  {
    icon: verzel,
    title: 'Full Stack Developer',
    empresa: 'Verzel Soluções em Sistemas',
    time: 'Fev de 2022 - Dez de 2023',
    local: 'São Paulo, Brasil - Remoto',
    description: `.NET, Node.js, TypeScript, React, Redux, React Hooks, Material UI, Zod, Jest, Docker, Mailer, SQL Server.`
  },
];


  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'CV-MJ-Full-Stack.pdf';
    link.click();
  };

  // const downloadWord = () => {
  //   const link = document.createElement('a');
  //   link.href = '/assets/cv.docx';
  //   link.download = 'CV-MJ-Full-Stack.docx';
  //   link.click();
  // };

  const text1 = t('Xp.years')
  const text2 = t('Xp.profissional')

  return (
    <div className="h-full w-full xs:pl-2 sm:pl-9">
      <div className='xs:grid xs:grid-cols-1 sm:grid-cols-2 w-[95%] md:flex-col my-6'>
          <p className='text-[#c0c0c0] xs:max-sm:right-14 xs:py-5 md:text-6xl md:px-5 md:pb-12 '>
            <span className='font-bold font-sans xs:text-xl md:text-6xl'>
              {text1}
            </span>
            {<br />} <span className='text-[#8ac6d1] xs:text-xl md:text-5xl'>
              {text2}
            </span>
          </p>

        <div className='flex xs:items-end xs:relative xs:left-28'>
          <span className='text-slate-50 font-inter font-light xs:pr-7'>Donwload Cv here: </span>
          <FaFilePdf
            color='#1c916c'
            size={30}
            className='cursor-pointer'
            onClick={downloadPDF}
            title="Baixar PDF"
          />

          {/* <FaFileWord
            color='#8ac6d1'
            size={30}
            className='relative xs:left-9 md:left-[45vw] mb-5 cursor-pointer'
            onClick={downloadWord}
            title="Baixar Word"
          /> */}
        </div>
      </div>

      <div className='flex xs:max-sm:flex-col md:flex-row'>
        <div
          id="costum"
          className="bg-[#161b22] flex rounded-lg overflow-hidden z-10 xs:justify-center xs:w-[90vw] md:items-center md:justify-start md:w-[70vw] lg:w-[75vw] md:min-h-[80vh]  "
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
          {/* <Sobre /> */}
        </div>
      </div>
    </div>
  );
}

export default Xp;