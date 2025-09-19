
import FadeContent from '../components/FadeContent';

import WhatIdo from '../sections/sec1About';
import MoreAbout from '../sections/sec2About'
import avatar from '../assets/img/avatar.jpg'

import { useTranslation } from "react-i18next";

export default function About() {

  const { t } = useTranslation("about");
  
  return (
    <>
      <section className='relative w-full h-full pt-[5%] bg-transparent'>
        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='flex flex-col justify-center items-center w-full h-full text-white tracking-wide text-center'>
          <div className='flex flex-col  md:flex-row items-center justify-center md:gap-x-5'>
            <span className="text-[2rem] md:text-[4rem] font-black mb-1"
                  style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
              {t("hello")}
            </span>
          </div>
        
          <div className="flex flex-col items-center justify-end gap-y-4 md:mr-[3rem] border-4 border-white/10 rounded-4 shadow-[4px_4px_10px_#000350,_-4px_-4px_10px_#000350,4px_-4px_10px_#000350,-4px_4px_10px_#000350] bg-black/50 p-[1rem] m-[1rem] ">
            <div className="flex justify-center mb-[1rem]">
              <img src={avatar} alt="Foto de perfil" className="w-32 h-16 md:w-40 md:h-40 object-cover border-2 border-white shadow-md rounded-full object-center"/>
            </div>
            <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
              <span className="text-[clamp(1rem,5vw,1.5rem)]  text-purple-400">
                {t("tag")} &nbsp;
              </span>
              <span className="text-[clamp(1rem,5vw,1.5rem)] ">
                @Pudu<i className="bi bi-person-fill-check"></i><br/>
              </span>
            </span>
            <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
              <span className="text-[clamp(1rem,5vw,1.5rem)]  text-purple-400">
                {t("tag1")}&nbsp;
              </span>
              <span className="text-[clamp(1rem,5vw,1.5rem)] ">
                Benjamin Maldonado
              </span>
            </span>
            <span className='border border-white px-1.5 py-0.5 rounded text-[clamp(1.2rem,5vw,2rem)]  text-nowrap'>
              {t("title")}
            </span>
            <div className='text-center max-w-xs sm:max-w-sm md:max-w-md font-light text-xs sm:text-sm leading-snug px-2'>
              <p className="mb-2">
               {t("paragraph1")}
              </p>
              <p>
                {t("paragraph2")}
              </p>
            </div>
          </div>
        </div>
        </FadeContent>
      </section>

      <section>
        <WhatIdo/>
      </section>

      <section>
        <MoreAbout/>
      </section>
    </>
  );
}
