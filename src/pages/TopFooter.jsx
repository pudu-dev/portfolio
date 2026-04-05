import { useState, useEffect } from "react";
import "../components/Neon.css";
import { useTranslation } from "react-i18next";

export default function TopFooter({ mainRef }) {

  const { t } = useTranslation("topfooter");

  const [openModal, setOpenModal] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const el = mainRef?.current;
    if (!el) return;

    const onScroll = () => {
      setAtTop(el.scrollTop <= 10);
    };

    onScroll();
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [mainRef]);

  const handleScrollToggle = () => {
    if (!mainRef.current) return;
    if (atTop) {
      mainRef.current.scrollTo({
        top: mainRef.current.scrollHeight,
        behavior: "smooth"
      });
    } else {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <section>
        {/* Botón UP / DOWN */}
        <div className="flex items-center justify-end m-3 bg-transparent">
          <button
            className="bg-gray-950 text-sky-400 px-2.5 py-1 border-2 rounded hover:bg-sky-400/50 transition duration-300"
            onClick={handleScrollToggle}
            aria-label={atTop ? t("buttonscrolldown") : t("buttonscrollup")}
          >
            <div className="flex flex-col items-center">
              {atTop ? (
                <i className="bi bi-arrow-down text-xl"></i>
              ) : (
                <i className="bi bi-arrow-up text-xl"></i>
              )}
              <span className="text-[clamp(0.8rem,1vw,1rem)] font-semibold">
                {atTop ? t("buttonscrolldown") : t("buttonscrollup")}
              </span>
            </div>
          </button>
        </div>

        {/* Botón Hire Me */}
        <div className="fixed bottom-0 left-0 m-3 text-[clamp(0.8rem,1vw,1rem)]">
          <button
            className="animate-[bounce_3s_infinite] font-semibold bg-gray-950 text-sky-400 hover:bg-sky-400/50 px-1 py-3 border-2 rounded-3 transition duration-300"
            onClick={() => setOpenModal(true)}
          >
            {t("buttonhire")}
          </button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setOpenModal(false);
              setShowEmail(false);
            }}
          />

          {/* Modal */}
          <div className="relative z-10 w-[90%] max-w-md
                          rounded-xl border neon-border-top
                          bg-gray-900/90 p-6 text-white">

            {/* Close */}
            <button
              onClick={() => {
                setOpenModal(false);
                setShowEmail(false);
              }}
              className="absolute top-3 right-3 text-gray-300 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-[2rem] text-center font-semibold mb-4 whitespace-pre-line">
              {t("modaltitle")}
            </h2>

            <p className="text-[1rem] text-center text-gray-300 mb-4 whitespace-pre-line">
              {t("modaltext")}
            </p>

            <div className="mt-4 flex gap-6 justify-center items-center">

              {/*  EMAIL CON HOVER + CLICK */}
              <div className="relative 
                              scale-100 hover:scale-120 lg:scale-150 lg:hover:scale-200 transition-transform ">
                <a
                  href="mailto:benjaminmaldonadobarrales@gmail.com?subject=Contacto%20desde%20portfolio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Correo"
                  onMouseEnter={() => setShowEmail(true)}
                  onMouseLeave={() => setShowEmail(false)}
                  onClick={(e) => {
                    // mobile: toggle email
                    if (window.innerWidth < 768) {
                      e.preventDefault();
                      setShowEmail((prev) => !prev);
                    }
                  }}
                  className="text-sky-400 hover:text-sky-300 text-2xl
                             scale-100 hover:scale-120
                             transition-transform"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>

                {showEmail && (
                  <span
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                               whitespace-nowrap
                               rounded-md bg-gray-950 border border-sky-400
                               px-3 py-1 text-sm text-sky-300
                               z-50"
                  >
                    benjaminmaldonadobarrales@gmail.com
                  </span>
                )}
              </div>

              {/* Discord */}
              <a
                href="https://discord.gg/YujfDbDxzZ"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="text-sky-400 hover:text-sky-300 text-2xl
                           scale-100 hover:scale-120 lg:scale-150 lg:hover:scale-200 transition-transform " 
              >
                <i className="bi bi-discord"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pududev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-sky-400 hover:text-sky-300 text-2xl
                           scale-100 hover:scale-120 lg:scale-150 lg:hover:scale-200 transition-transform "
              >
                <i className="bi bi-linkedin"></i>
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
