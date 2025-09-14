import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';

import * as THREE from 'three';


// Preload correcto
useGLTF.preload('/glb/neonearth.glb');

export default function Scene() {

  return (
    <>
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 1]} fov={60} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Stars />
    </Canvas>
    </>
  );
}
