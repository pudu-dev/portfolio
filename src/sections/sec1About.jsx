import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "../components/Neon.css";

import { useTranslation } from "react-i18next";


export default function WhatIdo() {
  const whatRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from(whatRef.current, {
      x: -500,
      repeat: 0,
      yoyo: false,
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(skillsRef.current, {
      x: 500,
      repeat: 0,
      yoyo: false,
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
    });
  }, []);

  const { t } = useTranslation("sec1about");

  return (
    <>
      <div className="relative w-full h-full py-6 sm:py-8 md:py-12">
        
        {/* Main Title and Description */}
        <div ref={whatRef} className="text-white tracking-wide leading-relaxed text-center px-4 sm:px-6 md:px-8 lg:px-12"
            style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>

          <span className="font-serif font-bold text-[3rem] md:text-[5rem] underline decoration-dotted decoration-5 text-center drop-shadow-lg">
            {t("title_main")}
          </span>
          
          <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 max-w-4xl mx-auto">
            <p className="mb-4 sm:mb-6">
              {t("paragraph1")}
            </p>
            <p>
              {t("paragraph2")}
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center items-stretch mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4">
          <div ref={skillsRef} className="text-white tracking-wide leading-relaxed border-2 rounded-lg shadow-lg bg-white/5 w-fit text-center">       
            <div className="flex items-center">
              <div className="w-full text-center text-lg sm:text-xl md:text-2xl border-b-2 neon-border py-2 sm:py-3 font-semibold">
                {t("skills_title")}
              </div>
            </div>
            
            <div className="text-sm sm:text-base md:text-lg lg:text-xl p-3 sm:p-4 md:p-6 neon-border space-y-2 px-5">
              <div>{t("skill1")}</div>
              <div>{t("skill2")}</div>
              <div>{t("skill3")}</div>
              <div>{t("skill4")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}