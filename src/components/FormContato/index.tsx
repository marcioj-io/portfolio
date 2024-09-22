import { Form } from './Form';

function FormContato() {
  return (
    <div className='lg:min-h-screen h-auto w-screen flex flex-col items-center bg-gradient-to-b from-[#0e382a] to-[#967c52] pb-32 '>
      <p className='text-[#c0c0c0] md:text-6xl xs:pl-14 md:pl-24 xs:py-6 md:pt-20 w-full'>
        <span className='font-bold font-sans'>
          #Precisa dos
          <br />
          meus serviços?
        </span>
      </p>

      <p className='text-[#c0c0c0] md:text-5xl xs:pl-14 md:pl-24 xs:py-6 md:pb-20 w-full'>
        <span className='font-sans'>
          Preencha o formulário abaixo que
          <br />
          irei retornar em breve
        </span>
      </p>

      <Form />
    </div>
  );
}

export default FormContato;