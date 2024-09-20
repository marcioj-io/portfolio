import React from 'react'
import ProjectItem from './ProjectItem'

interface Iprojeto {
  slug: string
  title: string
  description: string
  type: string
  link: string
  thumbnail: string
}

export interface ProjetosProps {
  projetos: Iprojeto[]
}

function SectionProjects({ projetos }: ProjetosProps) {

  return (
    <div className="flex flex-col items-center w-screen h-auto pt-64 pb-8 mt-44 gap-20 ">

      <section className="flex flex-col w-[90vw] gap-8 lg:gap-16 ">
        {projetos.slice(0, 3).map((projeto, index) => (
          <ProjectItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            z={index === 1 ? '0' : '20'}
          />
        ))}
      </section>
      <button
        type="button"
        className="bg-violet-700 padding: 0.8rem 3rem rounded-lg border-none transition:0.5s hover:bg-violet-800"
      >
        <a
          href="/projetos"
          className="uppercase text=[#fff] text-2xl font-light max-w-lg:text-base"
        >
          Ver todos os projetos
        </a>
      </button>
    </div>
  )
}

export default SectionProjects
