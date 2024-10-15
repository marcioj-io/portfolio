import React, { useMemo, useState } from 'react';
import Robot from '../../assets/rob.png';
import HeroImage from '../../assets/eu.jpg';
import { motion } from 'framer-motion';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { MdRemoveCircleOutline } from "react-icons/md";


function Sobre() {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(!open);
    };

<<<<<<< Updated upstream
    const fullText = `In 2021, I completed my specialization as a Full Stack Developer at Instituto Proa - Senac, where my high performance earned me a scholarship for subsequent training at Alura Cursos in partnership with Oracle. I am currently active as a Full Stack Developer, mastering several technologies. On the backend, my expertise lies in .NET Core, making use of relevant libraries within the language, such as AutoMapper, Entity Framework, among others. As well as Node.js, I have experience with Nest.js, which provides us with an implemented testing environment (Jest), along with other relevant libraries.
In the user interface, I am proficient in React, combined with Typescript, exploring all the potential of React Hooks and Context API, together with other prominent libraries and frameworks. In my spare time, I dedicate myself to personal projects where I put into practice some of the most valued technologies on the market, such as Prisma, Node, .NET, React, Mui, Chakra, Formik, Yup, Styled-Components and Tailwind.CSS, among other control and development tools. This familiarity and experience allow me to use them with confidence and efficiency.`;

    const shortText = `In 2021, I completed my specialization as a Full Stack Developer at Instituto Proa - Senac, where my high performance earned me a scholarship for subsequent training at Alura Cursos in partnership with Oracle. I am currently active as a Full Stack Developer, mastering several technologies. On the backend, my expertise lies in .NET Core, making use of relevant libraries within the language, such as AutoMapper, Entity Framework, among others. As well as Node.js, I have experience with Nest.js, which provides us with an implemented testing environment (Jest), along with other relevant libraries.
On the user interface, I am proficient in React, combined with Typescript, exploring...`;
=======
    const fullText = t('about.fullText');
    const shortText = t('about.shortText');

    const MemorizedImg = useMemo(() => (
        <div
            className="bg-cover bg-no-repeat xs:h-20 xs:w-20 xs:mt-8 md:h-32 md:w-32 rounded-full mb-4"
            style={{ backgroundImage: `url(${HeroImage})` }}
        />
    ), [HeroImage]);
>>>>>>> Stashed changes

    return (
        <div className="flex flex-col h-full w-full xs:my-10">
            <div className="relative flex xs:justify-center xs:max-sm:top-8 md:left-36">
<<<<<<< Updated upstream
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

                        <p className="text-[#ded9d9] font-mono">
                            <span className="hidden md:block">{fullText}</span>
                            <span className="block md:hidden">{shortText}</span>
                        </p>

                        <div className='flex w-full xs:pb-2 xs:pt-10 xs:px-4 items-center justify-between md:justify-end'>
                            <a href={`/about`}
                                className="text-[#ded9d9] md:hidden text-base md:text-lg md:font-mono  flex items-center gap-3 transition duration-500 cursor-pointer"
                            >
                                See more <AiOutlineRightCircle className='xs:mt-[1px] ' />
                            </a>

                            <a className="text-[#ded9d9] text-base md:text-lg font-mono flex items-center gap-3 transition duration-500 cursor-pointer "
                                onClick={() => setOpen(false)}
                            >
                                Closed <AiOutlineRightCircle className='xs:mt-[1px]' />
                            </a>
                        </div>
                    </div>
                )}
=======
>>>>>>> Stashed changes
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
                            <p className="text-slate-100 font-inter xs:max-sm:text-sm"
                                onClick={() => setOpen(true)}
                            >
                                Click here to learn more</p>
                        </div>
                    )}
                    <img
                        alt="Robot"
                        onClick={handleOpenModal}
                        className="relative xs:h-[150px] md:h-[300px] md:w-[300px] md:top-24 md:transform md:rotate-[-30deg]"
                        src={Robot}
                    />
                </motion.div>

                {open && (
                    <div className="absolute xs:bg-[#161b22] md:bg-[#14533f] flex flex-col xs:w-full md:w-[850px] rounded-lg z-20 xs:top-[6rem] md:right-[16.8rem] md:top-60 xs:px-5 xs:pb-4 h-auto items-center">
                        {MemorizedImg}

                        <a className="relative left-[9rem] bottom-24 text-green-500 hover:text-green-500 transition duration-500 cursor-pointer font-bold sm:hidden"
                            onClick={() => setOpen(false)}
                        >
                            <MdRemoveCircleOutline className='xs:mt-[1px] mt-[5px]' size={30} />
                        </a>

                        <p className="text-[#ded9d9] font-mono md:p-4 md:mt-4">
                            <span className="hidden md:block">{fullText}</span>
                            <span className="block md:hidden">{shortText}</span>
                        </p>

                        <div className='flex w-full xs:pb-2 xs:pt-10 xs:px-4 items-center justify-between md:justify-end'>
                            <a href={`/about`} className="text-[#ded9d9] md:hidden text-base md:text-lg md:font-mono flex items-center gap-3 transition duration-500 cursor-pointer">
                                {t('about.seeMore')} <AiOutlineRightCircle className='xs:mt-[1px]' />
                            </a>

                            <a className="text-[#ded9d9] text-base md:text-lg font-mono flex items-center gap-3 transition duration-500 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                {t('about.close')} <AiOutlineRightCircle className='xs:mt-[1px]' />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sobre;
