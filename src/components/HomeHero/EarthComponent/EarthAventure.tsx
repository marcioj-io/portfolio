import React from 'react';
import { motion } from 'framer-motion';
import astro from '../../../assets/astro1.png';
import Earth from './Earth';

function EarthAventure() {
    return (
        <div className='flex xs:h-auto sm:w-full h-full w-full items-center justify-center '>
            <div className='absolute'>
                <Earth />
            </div>

            <div className='w-1/2 xs:w-1/3 md:w-1/4 lg:w-72'>
                <motion.div
                    style={{ background: 'transparent' }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 4,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    <img
                        alt=""
                        className=""
                        src={astro}
                    />
                </motion.div>
            </div>
        </div >
    );
}

export default EarthAventure;
