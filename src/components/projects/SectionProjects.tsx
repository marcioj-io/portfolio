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
    <div className="flex flex-col w-screen lg:min-h-screen pt-10 lg:pt-20 h-auto bg-gradient-to-b from-[#0d1117] to-[#0e382a] ">
      <p className='text-[#c0c0c0] md:text-6xl relative xs:pl-14 xs:py-6 md:py-20'>
        <span className='font-bold font-sans'>
          #Projects
        </span>
      </p>
      <div className="flex flex-col items-center w-full h-auto pb-8">
        <section className="flex flex-col w-[94.5vw] gap-14 lg:gap-16 ">
          {projetos.slice(0, 3).map((projeto, index) => (
            <ProjectItem
              key={projeto.slug}
              index={index}
              img={projeto.thumbnail}
              title={projeto.title}
              type={projeto.type}
              slug={projeto.slug}
            />
          ))}
        </section>
      </div>
    </div>

  )
}

export default SectionProjects
