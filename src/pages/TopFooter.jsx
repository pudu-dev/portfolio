export default function TopFooter({ mainRef }) {

  const handleScrollTop = () => {
    mainRef.current?.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollBottom = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: mainRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };


  return (
    <section>
      {/* Botón UP */}
      <div className="flex items-center justify-end m-3 bg-transparent">
        <button
          className="bg-gray-950 text-sky-400 px-2.5 py-1 border-2 rounded hover:bg-sky-400/50 transition duration-300"
          onClick={handleScrollTop}
        >
          <div className="flex flex-col items-center">
            <i className="bi bi-arrow-up text-xl"></i>
            <span className="text-[clamp(0.8rem,1vw,1rem)] font-semibold">
              UP
            </span>
          </div>
        </button>
      </div>

      {/* Botón Hire Me */}
      <div className="fixed bottom-0 left-0 m-3 text-[clamp(0.8rem,1vw,1rem)]">
        <button className="animate-[bounce_7s_infinite] font-semibold bg-gray-950 text-sky-400 hover:bg-sky-400/50 px-1 py-3 border-2 rounded-3 transition duration-300"
         onClick={handleScrollBottom}
         >
          HIRE ME
        </button>
      </div>
    </section>
  );
}

