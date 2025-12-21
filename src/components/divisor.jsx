import Logo from "/assets/img/pudulogo.png"

export default function Divisor () {
    
    return(
        <>
            <div className="flex flex-row justify-center items-center w-full h-[3rem] gap-[1rem]">
                <div className="w-[25%] md:w-[10%] h-[1px] bg-white">
                </div>
                <div className="flex w-[15%] md:w-[3%] ">
                    <img src={Logo} alt="logo" className="transform scale-100"></img>
                </div>
                <div className="w-[25%] md:w-[10%] h-[1px] bg-white">
                </div>
            </div>
        </>
    );
}