import React, { useState } from 'react';
import Robot from '../../assets/rob.png';
import HeroImage from '../../assets/eu.jpg';
import { motion } from 'framer-motion';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { MdRemoveCircleOutline } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function Sobre() {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(!open);
    };

    const fullText = t('about.fullText');
    const shortText = t('about.shortText');

    console.log(t('about.fullText'));


    return (
        <div className="flex flex-col h-full w-full xs:my-10">
            <div className="relative flex xs:justify-center xs:max-sm:top-8 md:left-36">
                {open && (
                    <div className="absolute xs:bg-[#161b22] md:bg-[#14533f] flex flex-col xs:w-full md:w-[850px] rounded-lg z-20 xs:top-[6rem] md:right-[16.8rem] md:top-60 xs:px-5 xs:pb-4 h-auto items-center">
                        <div
                            className="bg-cover bg-no-repeat xs:h-20 xs:w-20 xs:mt-8 md:h-32 md:w-32 rounded-full mb-4"
                            style={{ backgroundImage: `url(${HeroImage})` }} />

                        <a className="relative left-[9rem] bottom-24 text-green-500 hover:text-green-500 transition duration-500 cursor-pointer font-bold sm:hidden"
                            onClick={() => setOpen(false)}
                        >
                            <MdRemoveCircleOutline className='xs:mt-[1px] mt-[5px]'
                                size={30} />
                        </a>

                        <p className="text-[#ded9d9] font-mono md:p-4 md:mt-4">
                            <span className="hidden md:block">{fullText}</span>
                            <span className="block md:hidden">{shortText}</span>
                        </p>

                        <div className='flex w-full xs:pb-2 xs:pt-10 xs:px-4 items-center justify-between md:justify-end'>
                            <a href={`/about`}
                                className="text-[#ded9d9] md:hidden text-base md:text-lg md:font-mono  flex items-center gap-3 transition duration-500 cursor-pointer"
                            >
                                {t('about.seeMore')} <AiOutlineRightCircle className='xs:mt-[1px] ' />
                            </a>

                            <a className="text-[#ded9d9] text-base md:text-lg font-mono flex items-center gap-3 transition duration-500 cursor-pointer "
                                onClick={() => setOpen(false)}
                            >
                                {t('about.close')} <AiOutlineRightCircle className='xs:mt-[1px]' />
                            </a>
                        </div>
                    </div>
                )}
                <motion.div
                    style={{ background: 'transparent', zIndex: '10' }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 4,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {!open && (
                        <div className="bg-[#14533f] flex xs:max-sm:w-32 w-36 z-20 rounded-lg items-center justify-center absolute xs:right-[8rem] xs:top-16 md:right-[16rem] md:top-56 p-2">
                            <p className="text-slate-100 font-mono xs:max-sm:text-sm"
                                onClick={() => setOpen(true)}
                            >
                                {t('about.learnMore')}</p>
                        </div>
                    )}
                    <img
                        alt={t('about.robotAltText')}
                        onClick={handleOpenModal}
                        className="relative xs:h-[150px] md:h-[300px] md:w-[300px] md:top-24 md:transform md:rotate-[-30deg]"
                        src={Robot}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Sobre;
