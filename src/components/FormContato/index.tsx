import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/hook/UseLanguage';
import { Form } from './Form';
import { useTranslation } from 'react-i18next';

function FormContato() {
  const [isPortuguese, setIsPortuguese] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    if (language === 'pt') {
      setIsPortuguese(true);
    }
  }, []);

  return (
    <div
      className='lg:min-h-screen h-auto w-screen flex flex-col items-center bg-gradient-to-b from-[#0e382a] to-[#967c52] xs:pb-16 md:pb-24 sm:pt-16 '>
      <div
        data-aos="fade-down-right"
        data-aos-duration="2000"
        className='h-auto w-screen'
      >
        <>
          <p className='text-[#c0c0c0] md:text-6xl xs:pl-10 md:pl-16 xs:pt-6 md:pt-20 w-full'>
            <span className='font-bold font-sans xs:text-xl md:text-6xl'>
              {t('Contact.text1')}
              <br />
              {t('Contact.text2')}
            </span>
          </p>
          <p className='text-[#c0c0c0] md:text-5xl xs:pl-10 md:pl-16 xs:py-6 md:pb-20 w-full'>
            <span className='font-sans xs:text-lg md:text-3xl'>
              {t('Contact.text3')}
              <br />
              {t('Contact.text4')}
            </span>
          </p>
        </>
      </div>

      <Form />
    </div>
  );
}

export default FormContato;
