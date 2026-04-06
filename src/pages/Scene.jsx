import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react'; 
import CameraController from '../components/CameraController';


export default function Scene({ children, config = {}}) {

  // Configuración dinámica del canvas
  const {
    canvasProps = {dpr: [1, 2], gl: { antialias: true, powerPreference: "high-performance" }},
    camera = { position: [0, 0, 10], fov: 60 },
    ambient = 0.5,
    directional = { position: [2, 2, 5], intensity: 1 },
    stars = { show: true, count: 5000, size: 1, fade: true, speed: 1 },
  } = config;

  return (
    /* Plantilla de Canvas */
    <Canvas {...canvasProps}>
      {/* Luces */}
      <ambientLight intensity={ambient} />
      <directionalLight position={directional.position} intensity={directional.intensity} />

      {/* Cámara */}
      <PerspectiveCamera makeDefault position={camera.position} fov={camera.fov} />
      <CameraController />

      {/* Fondo */}
      {stars?.show && <Stars {...stars} />}

      {/* Escenas dinámicas */}
      <Suspense fallback={null}>
        {children}
      </Suspense>

      {/* Debug opcional */}
      {/* <OrbitControls /> */}
      {/* <CameraDebugger /> */}
    </Canvas>
  );
}