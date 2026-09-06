"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function RotatingStars() {
  const starsRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02;
      starsRef.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={60}
        count={3500}
        factor={5}
        saturation={0.5}
        fade
        speed={1}
      />
    </group>
  );
}

function FloatingParticles() {
  const count = 120;
  const meshRef = useRef<THREE.Points>(null);

  const particles = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#FF7300"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <RotatingStars />
        <FloatingParticles />
      </Canvas>
      {/* Radial gradient overlay for atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-asgardeo-orange/5 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-asgardeo-purple/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
