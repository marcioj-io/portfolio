import React, { useState } from 'react';
import Robot from '../../assets/rob.png';
import HeroImage from '../../assets/eu.jpg';
import { motion } from 'framer-motion';
import { AiOutlineRightCircle } from 'react-icons/ai';

function Sobre() {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(!open);
    };

    const fullText = `Em 2021, concluí minha especialização como Desenvolvedor Full Stack no Instituto Proa - Senac, onde meu alto desempenho me proporcionou uma bolsa para a formação subsequente na Alura Cursos em parceria com a Oracle. Atualmente, estou ativo como Desenvolvedor Full Stack, dominando diversas tecnologias. No backend, minha expertise reside em .NET Core, fazendo uso de bibliotecas relevantes dentro da linguagem, como AutoMapper, Entity Framework, entre outras. Assim como o Node.js, tenho experiência com o Nest.js, que nos proporciona um ambiente de testes implementado (Jest), juntamente com outras bibliotecas relevantes.
    Na interface do usuário, sou proficientemente versado em React, combinado com Typescript, explorando todas as potencialidades do React Hooks e da Context API, em conjunto com outras bibliotecas e frameworks de destaque.
    Nos momentos de folga, dedico-me a projetos pessoais onde coloco em prática algumas das tecnologias mais valorizadas no mercado, tais como Prisma, Node, .NET, React, Mui, Chakra, Formik, Yup, Styled-Components e Tailwind.CSS, entre outras ferramentas de controle e desenvolvimento. Essa familiaridade e experiência me permitem utilizá-las com confiança e eficiência.`;

    const shortText = `Em 2021, concluí minha especialização como Desenvolvedor Full Stack no Instituto Proa - Senac, onde meu alto desempenho me proporcionou uma bolsa para a formação subsequente na Alura Cursos em parceria com a Oracle. Atualmente, estou ativo como Desenvolvedor Full Stack, dominando diversas tecnologias. No backend, minha expertise reside em .NET Core, fazendo uso de bibliotecas relevantes dentro da linguagem, como AutoMapper, Entity Framework, entre outras. Assim como o Node.js, tenho experiência com o Nest.js, que nos proporciona um ambiente de testes implementado (Jest), juntamente com outras bibliotecas relevantes.
    Na interface do usuário, sou proficientemente versado em React, combinado com Typescript, explorando...`;

    return (
        <div className="flex flex-col h-full w-full xs:my-10">
            <div className="relative flex xs:justify-center xs:max-sm:top-8 md:left-36">
                {open && (
                    <div className="absolute xs:bg-[#161b22] md:bg-[#14533f] flex flex-col xs:w-[350px] md:w-[850px] rounded-lg z-20 xs:top-20 md:right-[16.8rem] md:top-60 xs:px-5 xs:pb-4 h-auto items-center">
                        <div className="bg-cover bg-no-repeat xs:h-20 xs:w-20 xs:mt-8 md:h-32 md:w-32 rounded-full mb-4" style={{ backgroundImage: `url(${HeroImage})` }} />

                        <p className="text-slate-100 font-mono">
                            <span className="hidden md:block">{fullText}</span>
                            <span className="block md:hidden">{shortText}</span>
                        </p>

                        <div className='flex w-full xs:pt-6 items-center justify-between md:justify-end'>
                            <a href={`/about`}
                                className="text-[#f5efef] md:hidden text-base md:text-lg md:font-mono font-bold flex items-center gap-3 transition duration-500 cursor-pointer"
                            >
                                Ver mais <AiOutlineRightCircle className='mt-[5px]' />
                            </a>

                            <a className="text-[#f5efef] text-base md:text-lg font-mono flex items-center gap-3 transition duration-500 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                Fechar <AiOutlineRightCircle className='mt-[5px]' />
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
            </div>
        </div>
    );
}

export default Sobre;
