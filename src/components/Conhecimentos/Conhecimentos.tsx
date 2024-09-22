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

import ConhecimentoItem from './ConhecimentoItem';
import { useMediaQuery } from 'react-responsive';

function Conhecimentos() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  // const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 768px)' });
  // const isLargeScreen = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
  // const isExtraLargeScreen = useMediaQuery({ query: '(min-width: 1025px)' });

  return (
    <div className="flex flex-col h-screen w-screen px-3 bg-[#0e382a]">
      <p className="text-[#c0c0c0] md:text-6xl font-bold font-sans relative pl-10 py-6 md:py-20 ">
        <span>#Skills</span>
      </p>

      <section className="flex flex-wrap justify-center gap-8 mt-8">
        <ConhecimentoItem title="Csharp" icon={<TbBrandCSharp color="#c3611c" size={100} />} />
        <ConhecimentoItem title=".NET" icon={<DiDotnet color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Node.js" icon={<FaNode color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Nestjs" icon={<SiNestjs color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Docker" icon={<GrDocker color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Express" icon={<SiExpress color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Fastify" icon={<SiFastify color="#c3611c" size={100} />} />
        <ConhecimentoItem title="jest" icon={<SiJest color="#c3611c" size={100} />} />
      </section>

      {!isSmallScreen ? <section className="flex flex-wrap justify-center gap-8 mt-8">
        <ConhecimentoItem title="React" icon={<FaReact color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Next" icon={<TbBrandNextjs color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Zod" icon={<TbDiamondFilled color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Typescript" icon={<BiLogoTypescript color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Mui Material" icon={<SiMui color="#c3611c" size={100} />} />
        <ConhecimentoItem title="BdSql" icon={<DiDatabase color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Prisma" icon={<SiPrisma color="#c3611c" size={100} />} />
        <ConhecimentoItem title="Others..." icon={<RiFolderUnknowFill color="#c3611c" size={100} />} />
      </section> : <></>
      }
    </div>
  );
}

export default Conhecimentos;
