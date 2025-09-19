import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "./pages/Header";
import TopFooter from "./pages/TopFooter";
import Footer from "./pages/Footer"
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Proyects from "./pages/Proyects";
import Gallery from "./pages/Gallery";
import Scene from "./pages/Scene";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";


function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoading = location.pathname === "/";

  const landingRef = useRef(null);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const proyectsRef = useRef(null);
  const galleryRef = useRef(null);
  const footerRef = useRef(null);

  // Detecta scroll y actualiza la URL
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { path: "/Landing", ref: landingRef },
        { path: "/About", ref: aboutRef },
        { path: "/Technologies", ref: techRef },
        { path: "/Proyects", ref: proyectsRef },
        { path: "/Gallery", ref: galleryRef},
        { path: "/Footer", ref: footerRef},
      ];

      sections.forEach(({ path, ref }) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          if (location.pathname !== path) navigate(path, { replace: true });
        }
      });
    };

    const mainEl = mainRef.current;
    mainEl?.addEventListener("scroll", handleScroll, { passive: true });
    return () => mainEl?.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navigate]);

  // Función para click en header
  const handleNavClick = (ref, path) => {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80
    const top = ref.current.offsetTop - headerHeight;

    mainRef.current.scrollTo({
      top,
      behavior: "smooth"
    });

    navigate(path, { replace: true });
  };
/* vuelve transparente el fondo */
  const [mainTransparent, setMainTransparent] = useState(false);
  

  return (
    <div className="relative w-dvw h-dvh bg-white">

      {/* Fondo  3D*/}
      <div className="fixed w-full h-full z-0 pointer-events-none bg-black/99">
        <Scene />
      </div>

      {isLoading && (
      <div className="fixed w-full h-full z-50 bg-[#000319]">
        <Loading />
      </div>
      )}


      {/* Header */}
      {!isLoading && (
        <header className="fixed z-50 top-0 w-[99%] overflow-hidden">
            <Header refs={{ landingRef, aboutRef, techRef, proyectsRef , galleryRef}} onNavClick={handleNavClick}
            onToggleMainBg={() => setMainTransparent(prev => !prev)}
            />
        </header>
      )}

      {/* Main */}
      <main ref={mainRef} className="fixed w-full h-full overflow-y-auto" style={{ scrollbarWidth: "auto", scrollbarColor: "#d1d1d1 #2c2c2c" }}>
        {!isLoading  && (
          <>
            <section className={`${mainTransparent ? "bg-transparent" :"bg-gradient-to-b from-[#14002e] to-[#000319]"}`} ref={landingRef}><Landing /></section>
            <section className={`${mainTransparent ? "bg-transparent" :"bg-[#000319]"}`} ref={aboutRef}><About /></section>
            <section className={`${mainTransparent ? "bg-transparent" :"bg-gradient-to-b from-[#000319] via-[#1b0031] to-[#000319]"}`} ref={techRef}><Technologies /></section>
            <section className={`${mainTransparent ? "bg-transparent" :"bg-gradient-to-br from-[#000319] via-[#000319] to-[#212c80]"}`} ref={proyectsRef}><Proyects /></section>
            <section className={`${mainTransparent ? "bg-transparent" :"bg-gradient-to-tr from-[#000319] via-[#000319] to-[#212c80]"}`} ref={galleryRef}><Gallery /></section>
            <section className="bg-gradient-to-b from-[#14002e] to-[#000319]" ref={footerRef}><Footer /></section>
          </>
        )}
      </main>

      {/* TopFooter */}
      {!isLoading && (
        <footer className="fixed w-full z-50 bottom-0 left-0 bg-black/1 ">
          <TopFooter mainRef={mainRef}/>
        </footer>
      )}



    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
