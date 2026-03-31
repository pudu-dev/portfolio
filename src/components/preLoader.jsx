import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const { progress, active } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active && progress === 100) {
      setTimeout(() => setFadeOut(true), 400);

      setTimeout(() => {
        setVisible(false);
        if (onFinish) onFinish();
      }, 1000);
    }
  }, [active, progress, onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center 
      bg-black/90 backdrop-blur-md transition-opacity duration-1000
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center w-[280px]">

        {/* Logo / título */}
        <h1 className="text-white text-2xl tracking-widest mb-6 opacity-80">
          LOADING
        </h1>

        {/* Barra */}
        <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Porcentaje */}
        <p className="mt-4 text-white text-lg font-semibold">
          {Math.floor(progress)}%
        </p>

        {/* Glow decorativo */}
        <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>

      </div>
    </div>
  );
}