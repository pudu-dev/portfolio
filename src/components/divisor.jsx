import img from "/assets/img/pudulogo.png"
import img2 from "/assets/img/huella_pudu.png"
import img3 from "/assets/img/huella_pudu3.png"

export default function Divisor ({imagen = 0}) {

    const imagenes = [
                {src: img, className: "transform scale-110"}, 
                {src: img2, className: "transform scale-60 rotate-45 "}, 
                {src: img3, className: "transform scale-80 rotate-45"}
    ];
    
    return(
        <>
            <div className="flex flex-row justify-center items-center w-full h-[3rem] gap-[1rem]">

                <div className="w-[25%] md:w-[10%] h-[1px] bg-white"></div>

                <div className="flex w-[15%] md:w-[3%] ">
                    <img src={imagenes[imagen].src} 
                         className={imagenes[imagen].className}>
                    </img>
                </div>

                <div className="w-[25%] md:w-[10%] h-[1px] bg-white"></div>

            </div>
            
        </>
    );
}

