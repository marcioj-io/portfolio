import { useEffect, useState } from 'react';
import { Form } from './Form';

function FormContato() {
  const [isPortuguese, setIsPortuguese] = useState(false);

  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0];
    if (userLang === 'pt-BR') {
      setIsPortuguese(true);
    }
  }, []);

  return (
    <div className='lg:min-h-screen h-auto w-screen flex flex-col items-center bg-gradient-to-b from-[#0e382a] to-[#967c52] xs:pb-16 md:pb-24 sm:pt-16 '>
      {isPortuguese ? (
        <>
          <p className='text-[#c0c0c0] md:text-6xl xs:pl-10 md:pl-16 xs:pt-6 md:pt-20 w-full'>
            <span className='font-bold font-sans xs:text-xl md:text-6xl'>
              #Precisa dos
              <br />
              meus serviços?
            </span>
          </p>
          <p className='text-[#c0c0c0] md:text-5xl xs:pl-10 md:pl-16 xs:py-6 md:pb-20 w-full'>
            <span className='font-sans xs:text-lg md:text-3xl'>
              Preencha o formulário abaixo que
              <br />
              irei retornar em breve
            </span>
          </p>
        </>
      ) : (
        <>
          <p className='text-[#c0c0c0] md:text-6xl xs:pl-10 md:pl-16 xs:pt-6 md:pt-20 w-full'>
            <span className='font-bold font-sans xs:text-xl md:text-6xl'>
              #Need my services ?
            </span>
          </p>
          <p className='text-[#c0c0c0] md:text-5xl xs:pl-10 md:pl-16 xs:py-6 md:pb-20 w-full'>
            <span className='font-sans xs:text-lg md:text-3xl'>
              Fill out the form and I will get back to you shortly.
            </span>
          </p>
        </>
      )}

      <Form />
    </div>
  );
}

export default FormContato;
