import SpotlightCard from '../components/ProyectCard';
import { useState } from 'react';

import { useTranslation } from "react-i18next";

import Divisor from '../components/divisor';

export default function Proyects() {
  const [showGame, setShowGame] = useState(false);

  const { t } = useTranslation("proyects");

  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center isolate overflow-hidden bg-transparent p-6 ">

      <span className="text-[2rem] md:text-[5rem] text-white permanent-marker-regular drop-shadow-lg flex justify-center items-center text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
        {t("title")}
      </span>

      <div className='w-full flex justify-center'>
        <Divisor></Divisor>
      </div>
      
      <div className="grid grid-cols-1 md:flex-row gap-3 mt-[2rem] w-full h-full md:w-[50%] md:h-[50%] ">

        <SpotlightCard className="custom-spotlight-card" spotlightColor="#008A69">
          <div className="flex flex-col justify-center items-center w-full h-full border-2 rounded-4xl ">
            <img src="/assets/img/pudulogoinvader.png" alt="PuduGame" name="pudugame" className="w-full h-full object-fit rounded-t-4xl"/>
            <span className="text-white text-[1rem] md:text-[1.2rem] font-semibold text-center whitespace-nowrap m-[1rem]">
              {t("card1_title")}
            </span>
            <button onClick={() => setShowGame(true)}
                    className="mt-auto px-4 py-2 border-2 rounded text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110 transition-transform duration-200">
              <span className='text-[0.8rem] md:text-[1rem] whitespace-nowrap w-full'>
                {t("card1_button")}
              </span>
            </button>
          </div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="#5C004A">
          <div className="flex flex-col justify-center items-center w-full h-full border-2 rounded-5">
            <div className="text-6xl md:text-8xl text-white mt-[1rem]">
              <i className="bi bi-github"></i>
            </div>
            <span className="text-white text-[1rem] md:text-[1.2rem] font-semibold text-center whitespace-nowrap m-[1rem] ">
              {t("card2_title")}
            </span>
            <a href="https://github.com/pudusito"
               target="_blank"
               rel="noopener noreferrer"
               className="mt-auto px-1 py-2 border-2 rounded text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110 transition-transform duration-200">
              <span className='text-[0.8rem] md:text-[1rem] whitespace-nowrap'>
                {t("card2_button")}
              </span>
            </a>
          </div>
        </SpotlightCard>

    {/* 🔹 Modal juego 1 */}
      {showGame && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[9999]">
          <div className='relative flex justify-center items-center my-[1rem] '>
          <button className="border-2 bg-red-800/50 active:bg-red-600 text-white px-10 py-2 rounded hover:bg-red-800"
                  onClick={() => setShowGame(false)}>
            <i class="bi bi-x-lg text-white"></i>
          </button>
          </div>
          <div className="relative h-[65%] w-[90%] md:h-[70%] md:w-[30%]">
            {/* Juego en iframe */}
            <iframe
              src="/PuduInvaders/Puduevade.html"
              className="w-full h-full rounded-b-lg"
            />
          </div>
        </div>
      )} 

      </div>
    </section>
  );
}
