import { useState } from 'react';
import { createPortal } from "react-dom";

export default function Gallery() {
  const imagenes = [
    { id: 1, src: "/src/assets/img/avatar.jpg", caption: "PUDUWU IMAGEN" },
    { id: 2, src: "/src/assets/img/pm.jpg", caption: "Otra imagen" },
    { id: 3, src: "/src/assets/img/nonimus.jpeg", caption: "Imagen 3" },
    { id: 4, src: "/src/assets/img/neonland.jpg", caption: "Imagen 4" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const total = imagenes.length;
  const nextImg = () => setIndex((prev) => (prev + 1) % total);
  const prevImg = () => setIndex((prev) => (prev - 1 + total) % total);
  const exitImg = () => setShowModal(false);

  return (
    <>
      <section className="relative w-full h-full isolate overflow-hidden bg-gradient-to-tr from-[#000319] via-[#000319] to-[#212c80] p-[1rem]">
        
        <span className="text-[3rem] md:text-[5rem] font-serif text-white font-bold drop-shadow-lg flex justify-center items-center underline underline-offset-8 text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
          Gallery
        </span>

        <div className="grid grid-cols-2 gap-[0.5rem] my-[2rem] md:grid-cols-4 md:my-[5rem] md:px-[5rem] md:gap-[2.5rem] ">
          {imagenes.map((img, i) => (
            <figure key={img.id} className="w-[100%] h-[100%] flex flex-col items-center justify-center overflow-hidden rounded-2">
              <img
                onClick={() => {
                  setIndex(i);
                  setShowModal(true);
                }}
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover cursor-pointer"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Modal renderizado con portal */}
      {showModal && createPortal(
        <div /* onClick={exitImg}  */className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          <div className="relative flex flex-col items-center" /* onClick={(e) => e.stopPropagation()} */>
            <img src={imagenes[index].src} alt={imagenes[index].caption} className="max-h-[90%] max-w-[90%] object-contain rounded-lg"/>
            <figcaption className="text-white text-lg mt-2 text-center">
              {imagenes[index].caption}
            </figcaption>
          </div>
          {/* botones */}
          <button onClick={prevImg} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">
            <i className="bi bi-chevron-double-left text-[2rem] md:text-[4rem] active:text-cyan-600"></i>
          </button>
          <button onClick={nextImg} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">
            <i className="bi bi-chevron-double-right text-[2rem] md:text-[4rem] active:text-cyan-600"></i>
          </button>
          <button onClick={exitImg} className="absolute top-0 right-0 text-white z-50 border-2 px-1 py-1 rounded-2 hover:bg-red-500/20">
            <i className="bi bi-x-lg text-[1rem] md:text-[2rem] active:text-red-500"></i>
          </button>
        </div>,
        document.body
        )}
    </>
  );
}
