import React, { CSSProperties, useState, useRef } from 'react';
import XpItem from './XpItem';
import Sobre from '../Sobre/Sobre';
import { useMediaQuery } from 'react-responsive';
import ZoomIcon from '../../assets/zoom.png';

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

  return (
    <div className="h-auto w-screen flex xs:flex-col xs:m-auto xs:items-center md:items-start md:justify-start md:pl-5 lg:pl-10">
      <div className='md:py-16'>
        <p className='text-[#c0c0c0] text-co md:text-6xl relative xs:max-sm:right-14 md:px-5 md:pb-12 xs:py-5'>
          <span className='font-bold font-sans'>#03 Years</span>
          {<br />} <span className='text-[#8ac6d1]'>of professional experience</span>
        </p>
      </div>

      <div className='flex xs:max-sm:flex-col md:flex-row'>
        <div
          id="costum"
          className="bg-[#161b22] flex relative items-center justify-start xs:min-h-[450px] lg:h-[75vh] xs:w-[90vw] md:w-[70vw] lg:w-[75vw] rounded-lg overflow-hidden z-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          style={containerStyle}
        >
          <div style={lightStyle}></div>

          <div className="grid xs:max-sm:grid-cols-1 md:grid-cols-2 h-full xs:max-sm:w-full xs:gap-6 sm:gap-2 p-2">
            <XpItem />
            <XpItem />
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
