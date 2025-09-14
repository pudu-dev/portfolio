import { useState, useEffect , Children } from "react"

export default function Cards() {
  // Todas las tarjetas
  const cards = [
    // 1. Education
    <div className="w-80 h-50  md:w-full md:h-full flex flex-col justify-center items-center text-center border-2 bg-green-950/30 rounded-2xl p-2 border-white">
      <span className="text-[2rem] font-bold text-white">
        Education <i className="bi bi-book text-red-700"></i>
      </span>
      <br />
      <span className="text-[1.4rem] font-semibold text-white">
        My university education was in the city of Chillan in:
      </span>
      <img
        src="src/assets/img/logoinacap.png"
        alt="inacap"
        className="object-cover rounded bg-white scale-60"
      />
      <button
        onClick={() => setShowProfile(!showProfile)}
        className="my-2 border-2 border-black shadow-lg shadow-red-900 rounded p-1 bg-red-700"
      >
        <span className="text-[1.2rem] text-white">Perfil Profesional</span>
      </button>
    </div>,

    // 2. Courses
    <div className="text-white w-80 h-50 md:w-150 md:h-150 tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-2 rounded-2xl flex flex-col items-center">
      <span className="text-[2rem] font-bold text-white mb-4">Cursos</span>
      <img
        src="src/assets/img/cs50certificado.png"
        alt="cs50"
        className="object-cover mb-4 rounded"
      />
    </div>,

    // 3. Achievements
    <div className="text-white w-80 h-50 md:w-120 md:h-120 tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-2 rounded-2xl flex flex-col items-center">
      <span className="text-[2rem] font-bold mb-4">Logros</span>
      <img
        src="src/assets/img/oraclect.png"
        alt="oracle"
        className="object-cover mb-4 rounded"
      />
    </div>,

    // 4. Experience
    <div className="text-white w-80 h-50 md:w-120 md:h-120 text-center border-2 bg-green-950/30 p-2 rounded-2xl">
      <span className="text-[2rem] font-bold mb-4">Experiencia</span>
      <br />
      <span className="text-[1rem]">aun no cuento con experiencia laboral profesional.</span>
    </div>,

    // 5. Games
    <div className="text-white w-80 h-50 md:w-120 md:h-120 text-center border-2 bg-green-950/30 p-2 rounded-2xl flex flex-col justify-center items-center">
      <span className="text-[2rem] font-bold">Juegos<br /></span>

      <div className="flex justify-center items-center rounded-full w-15 h-15">
        <img src="/src/assets/img/challengerlogo.png"></img>
      </div>
      <span className="text-[1rem]">
        [2013-2017] <br />
        Challenger en league of legends, participando en diferentes equipos y torneos durante mi tiempo como jugador.
        <br />
        ¡ Aprendi muchas habilidades blandas y de ejecución ahí !
      </span>
    </div>,

    // 6. Hobbies
    <div className="text-white w-80 h-50 md:w-120 md:h-120 text-center border-2 bg-green-950/30 p-2 rounded-2xl flex flex-col justify-center items-center">
      <span className="text-[2rem] font-bold">Pasatiempos<br /></span>
      <span className="text-[1rem]">Estoy aprendiendo unreal engine 5, me encantan los videojuegos y espero algun dia crear mi propio mundo virtual *-*</span>
    </div>,

    // 7. My history
    <div className="text-white w-80 h-50 md:w-99 md:h-99 leading-relaxed text-center border-2 bg-green-950/30 p-2 rounded-2xl">
      <span className="text-[2rem] font-bold">Mi Historia<br /></span>
      <span className="text-[1rem]">
        Tengo 29 años, mi cumpleaños es el 2 de septiembre de 1996. <br/>
        soy nacido y criado en Santiago de Chile. <br/><br/>
      </span>
    </div>,

    // 8. Testimonials
    <div className="bg-green-950/30 text-white w-80 h-50 md:w-120 md:h-120 text-center border-2 p-2 rounded-2xl">
      <span className="text-[2rem] font-bold">Testimonios<br /></span>
      <span className="text-[1rem]">no hay referencias aun.</span>
    </div>,
  ];
  
  const [showProfile, setShowProfile] = useState(false); //estado para mostrar perfil profesional
  const [index, setIndex] = useState(0); //estado para botones de carrusel
  const [paused, setPaused] = useState(false); // 🔹 Estado para pausar el loop

  const total = Children.count(cards);

  // Lógica del carrusel
  const nextCard = () => setIndex((prev) => (prev + 1) % total);
  const prevCard = () => setIndex((prev) => (prev - 1 + total) % total);
  // Loop Carrusel

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000); // cambia cada 4 segundos (ajústalo como quieras)

    return () => clearInterval(interval); // limpiar cuando el componente se desmonte
  }, [total, paused]);


  return (
    <>    
    
      <div className="flex flex-col gap-3 bg-[#000319]">
        
        {/* Buttons */}
        <div className="flex flex-row w-full h-full justify-center items-center gap-2">
          <button onClick={prevCard}
                  className="px-4 py-3 rounded-2 border-2 border-white hover:bg-indigo-500 transition">
            <i className="bi bi-chevron-double-left text-white"></i>
          </button>
          <button onClick={nextCard}
                  className="px-4 py-3 rounded-2 border-2 border-white hover:bg-indigo-500 transition">
            <i className="bi bi-chevron-double-right text-white"></i>
          </button>
        </div>
         {/* Tarjeta actual */}
        <div className="flex w-full h-full justify-center items-center gap-2">
               
          <div className="flex items-center justify-center"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
          >
            {cards[index]}
          </div>
        </div>

      </div>


      {/* Modal Perfil Profesional */}
      {showProfile && (
        <div className="fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black/80 z-50 overflow-auto">
          <div className=" bg-black/50 text-white w-[90%] h-[65%] md:w-[50%] md:h-[50%] overflow-y-auto text-center border-2 border-white shadow-[4px_4px_10px_#000350,_-4px_-4px_10px_#000350,4px_-4px_10px_#000350,-4px_4px_10px_#000350]"
                style={{ scrollbarWidth: "thin", scrollbarColor: "red"}}>

            <span className="text-[2rem] md:text-[3rem] font-bold ">Perfil Profesional</span>
            <p className="text-[0.7rem] md:text-[1rem] leading-relaxed font-semibold text-start pt-2 px-4"
                style={{textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"}}>
                El Técnico de Nivel Superior en Analista Programador del Centro de Formación Técnica INACAP está capacitado para analizar, diseñar y desarrollar aplicaciones informáticas en diversas plataformas, utilizando metodologías ágiles y buenas prácticas de desarrollo seguro de software. 
                Su formación le permite implementar soluciones tecnológicas, gestionar bases de datos seguras y configurar entornos de trabajo multiplataforma, siempre enfocado en satisfacer las necesidades del usuario y optimizar los procesos de las organizaciones.
                Durante su carrera, adquiere experiencia práctica a través del Aprender Haciendo, desarrollando proyectos de complejidad creciente que integran programación de aplicaciones, diseño de bases de datos, diagramación de componentes de sistemas y preparación de infraestructura tecnológica.
                 Asimismo, fortalece competencias transversales como resolución de problemas, innovación y emprendimiento, ética y ciudadanía, trabajo colaborativo y comunicación, y se forma para mantenerse en constante aprendizaje, adaptándose a las tendencias de la industria tecnológica.
                Este perfil profesional le permite contribuir al desarrollo de proyectos innovadores que impactan positivamente en la transformación digital de empresas y comunidades, brindando soluciones tecnológicas de vanguardia.
                Además, su formación permite la continuidad académica hacia carreras de ingeniería en informática, ciberseguridad o programas de educación continua especializados.
            </p>
            <button
              onClick={() => setShowProfile(false)}
              className="mb-2 px-4 py-2 rounded bg-red-700 text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
