import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

export const TunnelPanel = () => {
  const particlesRef = useRef();
  
  // Configuración de partículas (forma cilíndrica)
  const particleCount = 2000;
  const particles = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const radius = 5;
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 10;
    particles.set([Math.cos(theta) * radius, y, Math.sin(theta) * radius], i * 3);
  }

  // Animación continua
  useFrame((_, delta) => {
    particlesRef.current.rotation.z += delta * 0.2;
    particlesRef.current.position.z += delta * 0.5;
    if (particlesRef.current.position.z > 5) {
      particlesRef.current.position.z = 0;
    }
  });

  return (
    <Points ref={particlesRef} positions={particles}>
      <PointMaterial 
        color="#00f0ff" 
        size={0.09} 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </Points>
  );
};

