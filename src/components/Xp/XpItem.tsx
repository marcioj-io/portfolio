export interface ExperienciaProps {
  icon: string;
  title: string
  empresa: string
  time: string
  local: string
  description: string
}

interface XpItemProps {
  projects: ExperienciaProps[]
}

function XpItem({ projects }: XpItemProps) {
  return (
    <>
      {projects.map((p, index) => (
        <div key={index} className='flex items-start justify-center xs:w-full xs:h-full lg:w-[30vw] p-4 rounded-lg bg-transparent'>
          <div className="h-full xs:w-[15vw] md:w-[5vw] mr-3">
            <img src={p.icon} alt={`Ícone da empresa ${p.empresa}`} />
          </div>
          <div className="flex flex-col w-full h-full">
            <h1 className="text-white xs:max-sm:text-sm md:text-lg font-sans font-bold">
              {p.title}
            </h1>
            <h2 className="text-gray-400 font-inter xs:max-sm:text-sm md:mb-2 ">{p.empresa}</h2>
            <h3 className="text-white  xs:max-sm:text-sm font-inter">{p.time}</h3>
            <h3 className="text-white font-inter xs:max-sm:text-sm">{p.local}</h3>

            {/* text-slate-300 */}
            {/* text-[#bde9f0] */}
            <p className="text-[#c1e5eb] font-sans mt-5 xs:max-sm:text-sm ">{p.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}


export default XpItem