import verzel from '../../assets/verzel.jpg';

interface ExperienciaProps {
  year: string
  empresa: string
  title: string
  description: string
}

function XpItem({ }) {
  return (
    <div className='flex items-start justify-center xs:w-full lg:w-[30vw] xs:h-full p-4 rounded-lg bg-transparent'
    >
      <div className="h-full w-[5vw] mr-3">
        <img src={verzel} />
      </div>
      <div className=" flex flex-col w-full h-full">
        <h1 className="text-white xs:max-sm:text-sm md:text-lg font-sans font-bold">
          Full-stack Developer
        </h1>
        <h2 className="text-gray-400 font-sans xs:max-sm:text-sm ">Verzel Soluções em Sistemas</h2>
        <h3 className="text-white font-sans xs:max-sm:text-sm ">Set de 2023 - o momento - 5 meses</h3>
        <h3 className="text-white font-sans xs:max-sm:text-sm ">São Paulo, Brasil - Remota</h3>

        <p className="text-white font-sans mt-5 xs:max-sm:text-sm ">Competências: Tecnologia da web - React Native - Azure DevOps - Node.js - #react.ts - Microsoft Azure - .NET Core - Desenvolvimento Full Stack</p>
      </div>
    </div>
  )
}

export default XpItem
