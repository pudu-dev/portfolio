import GradientText from "../components/TextMain";

import { useTranslation } from "react-i18next";

export default function Landing() {

  const { t } = useTranslation("landing");
  
  return (
    <>
      <div className='relative top-0 bg-gradient-to-b from-[#14002e] to-[#000319] w-full h-[5rem] md:h-[8rem] neon-border-bottom '></div>

      <section className='relative w-full h-full pt-[5%] bg-transparent'>

          <div className='flex flex-col gap-[1rem] '>
            <span className="text-[clamp(2rem,5vw,4rem)]  font-black justify-content-center items-center text-center"
                  style={{textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"}}>
              👋 
            </span>
            <GradientText
              colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]}
              animationSpeed={10}
              showBorder={false}
              className="text-[clamp(2.5rem,5vw,5rem)] p-[1rem] permanent-marker-regular text-center">
                {t("welcome")}
            </GradientText>
          </div>
   
        </section>
    </>
  );
}