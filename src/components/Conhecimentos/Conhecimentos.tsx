import { DiDotnet, DiDatabase } from 'react-icons/di';
import { FaReact, FaRobot, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiPrisma, SiMui } from 'react-icons/si';
import { TbBrandNextjs, TbDiamondFilled } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { GrDocker } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiNestjs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { RiFolderUnknowFill } from "react-icons/ri";
import './styles.css';
import ConhecimentoItem from './ConhecimentoItem';
import { useMediaQuery } from 'react-responsive';

function Conhecimentos() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  // const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 768px)' });
  // const isLargeScreen = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
  // const isExtraLargeScreen = useMediaQuery({ query: '(min-width: 1025px)' });

  return (
    <div className="flex flex-col h-auto w-screen bg-[#0e382a] gap-2 xs:py-4 xs:pb-12 ">
      <p className="text-[#c0c0c0] xs:text-xl md:text-6xl font-bold font-sans relative pl-10 py-6 md:py-20 gap-8 ">
        <span>#Skills</span>
      </p>

      <section className="flex flex-wrap justify-center gap-14 mt-8 px-3">
        <ConhecimentoItem title="Csharp" icon={<TbBrandCSharp className='contactIcon' size={100} />} />
        <ConhecimentoItem title=".NET" icon={<DiDotnet className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Node.js" icon={<FaNode className='contactIcon' color="" size={100} />} />
        <ConhecimentoItem title="Nestjs" icon={<SiNestjs className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Docker" icon={<GrDocker className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Express" icon={<SiExpress className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Fastify" icon={<SiFastify className='contactIcon' size={100} />} />
        {!isSmallScreen ? <ConhecimentoItem title="jest" icon={<SiJest className='contactIcon' size={100} />} /> : <></>}
      </section>

      {!isSmallScreen ? <section className="flex flex-wrap justify-center gap-8 mt-8 px-3">
        <ConhecimentoItem title="React" icon={<FaReact className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Next" icon={<TbBrandNextjs className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Zod" icon={<TbDiamondFilled className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Typescript" icon={<BiLogoTypescript className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Mui Material" icon={<SiMui className='contactIcon' size={100} />} />
        <ConhecimentoItem title="BdSql" icon={<DiDatabase className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Prisma" icon={<SiPrisma className='contactIcon' size={100} />} />
        <ConhecimentoItem title="Others..." icon={<RiFolderUnknowFill className='contactIcon' size={100} />} />
      </section> : <></>
      }
    </div>
  );
}

export default Conhecimentos;
