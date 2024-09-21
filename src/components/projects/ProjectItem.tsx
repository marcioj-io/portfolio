import { AiOutlineRightCircle } from 'react-icons/ai';
import React from 'react';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
  index: number; // Recebe o índice do item
}

function ProjectItem({ title, type, slug, img, index }: ProjetoProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex xs:flex-col md:flex-row w-full h-full items-center ${!isEven ? 'lg:flex-row-reverse' : ''} xs:gap-6 md:gap-20 bg-transparent`}>

      {/* Imagem com overlay de opacidade controlado por hover e transição de 3 segundos */}
      <div className="relative xs:w-[90vw] md:w-[50vw] xs:h-[20vh] md:h-[50vh] bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${img})` }}>
        {/* Overlay com opacidade padrão que desaparece no hover */}
        <div className="absolute inset-0 bg-[#1f1e1f] opacity-70 hover:opacity-0 transition-opacity duration-[1s] rounded-md"></div>
      </div>

      {/* Texto e Botão */}
      <div className="flex xs:absolute xs:w-[80vw] md:flex-col md:w-auto md:relative xs:pt-2 md:p-0 h-80 justify-between">
        {/* Ajuste a posição da div do título de forma condicional com base no índice */}
        <div className={`md:relative ${!isEven ? 'md:left-44' : 'md:right-44'}`}>
          <h1 className="text-[#C0C0C0] text-base md:text-4xl font-bold">
            {title}
          </h1>
          <h2 className="text-[#C0C0C0] text-xs md:text-lg font-bold">
            {type}
          </h2>
        </div>

        <button type="button">
          <a href={`/projetos/${slug}`}
            className="text-[#C0C0C0] text-base md:text-4xl font-bold flex items-center gap-3 transition duration-500"
          >
            Ver mais <AiOutlineRightCircle />
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;
