import SpotlightCard from '../components/ProyectCard';
import { useState } from 'react';

import { useTranslation } from "react-i18next";

export default function Proyects() {
  const [showGame, setShowGame] = useState(false);

  const { t } = useTranslation("proyects");

  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center isolate overflow-hidden bg-gradient-to-br from-[#000319] via-[#000319] to-[#212c80] p-6 ">

      <span className="text-[3rem] md:text-[5rem] font-serif text-white font-bold drop-shadow-lg flex justify-center items-center underline underline-offset-8 text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
        {t("title")}
      </span>

      <div className="grid grid-cols-1 md:flex-row gap-3 mt-[2rem] w-full h-full md:w-[50%] md:h-[50%] ">

        <SpotlightCard className="custom-spotlight-card" spotlightColor="#008A69">
          <div className="flex flex-col justify-center items-center w-full h-full border-2 rounded-4xl ">
            <img src="/src/assets/img/pudulogoinvader.png" alt="PuduGame" name="pudugame" className="w-full h-full object-fit rounded-t-4xl"/>
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
            <img src="/src/assets/img/sysimg.jpg" alt="Pos" name="pos" className="w-full h-full object-fit rounded-t-4xl"/>
            <span className="text-white text-[1rem] md:text-[1.2rem] font-semibold text-center whitespace-nowrap m-[1rem] ">
              {t("card2_title")}
            </span>
            <button onClick={() => setShowGame(true)}
                    className="mt-auto px-1 py-2 border-2 rounded text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110 transition-transform duration-200">
              <span className='text-[0.8rem] md:text-[1rem] whitespace-nowrap'>
                {t("card2_button")}
              </span>
            </button>
          </div>
        </SpotlightCard>

        
    {/* 🔹 Modal */}
      {showGame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[850px] h-[650px] relative">
            {/* Botón cerrar */}
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
              onClick={() => setShowGame(false)}
            >
              <i class="bi bi-x-lg text-white"></i>
            </button>

            {/* Juego en iframe */}
            <iframe
              src="/PuduInvaders/Puduevade.html"
              width="100%"
              height="100%"
              className="rounded-b-lg"
            />
          </div>
        </div>
      )} 

      </div>
    </section>
  );
}
