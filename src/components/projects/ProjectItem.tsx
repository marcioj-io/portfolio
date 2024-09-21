import { AiOutlineRightCircle } from 'react-icons/ai';
import React from 'react';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
  z?: string;
}

function ProjectItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <div className="flex xs:flex-col md:flex-row w-full h-full items-center even:lg:flex-row-reverse xs:gap-6 md:gap-20 bg-[#0d1117]">

      {/* Imagem */}
      <div className="xs:w-[80%] xs:h-[20vh] md:w-[50vw] md:h-[50vh] bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* Texto e Botão */}
      <div className="flex xs:absolute xs:w-[80vw] md:w-auto md:relative xs:pt-2 md:p-0 md:flex-col h-80 justify-between">
        <div>
          <h1 className="text-white text-base md:text-4xl font-light">
            {title}
          </h1>
          <h2 className="text-white text-xs md:text-lg font-light">
            {type}
          </h2>
        </div>

        <button type="button">
          <a href={`/projetos/${slug}`}
            className="text-white text-base md:text-4xl font-light flex items-center gap-3 transition duration-500"
          >
            Ver mais <AiOutlineRightCircle />
          </a>
        </button>
      </div>

    </div>
  );
}

export default ProjectItem;
