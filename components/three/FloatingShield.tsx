"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Cryptographic node vertices for the outer shield
const icosahedronVertices: [number, number, number][] = [
  [-0.85, 1.38, 0],
  [0.85, 1.38, 0],
  [-0.85, -1.38, 0],
  [0.85, -1.38, 0],
  [0, -0.85, 1.38],
  [0, 0.85, 1.38],
  [0, -0.85, -1.38],
  [0, 0.85, -1.38],
  [1.38, 0, -0.85],
  [1.38, 0, 0.85],
  [-1.38, 0, -0.85],
  [-1.38, 0, 0.85],
];

function SecurityCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const crystalRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Gentle floating tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.25;
    }

    // Inner glowing core pulse and rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.5;
      coreRef.current.rotation.x = Math.sin(t * 0.7) * 0.3;
      const scale = 1 + Math.sin(t * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Outer crystal facets slow counter-spin
    if (crystalRef.current) {
      crystalRef.current.rotation.y = t * 0.2;
      crystalRef.current.rotation.z = Math.cos(t * 0.3) * 0.15;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.2;
      wireframeRef.current.rotation.z = Math.cos(t * 0.3) * 0.15;
    }

    // Orbiting security perimeter rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = 0.8 + Math.sin(t * 0.4) * 0.1;
      ring1Ref.current.rotation.y = t * 0.7;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -0.7 + Math.cos(t * 0.4) * 0.1;
      ring2Ref.current.rotation.y = -t * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Central Luminous Energy Core (Asgardeo Warm Glow) */}
        <mesh ref={coreRef}>
          <octahedronGeometry args={[0.95, 0]} />
          <meshStandardMaterial
            color="#FF7300"
            emissive="#FF5500"
            emissiveIntensity={1.6}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* Inner Golden Spark Core */}
        <mesh>
          <sphereGeometry args={[0.45, 24, 24]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFA043"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Semi-Translucent Holographic Crystal Shield */}
        <mesh ref={crystalRef}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial
            color="#806EFF"
            emissive="#5C45FD"
            emissiveIntensity={0.35}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.35}
            transmission={0.5}
            reflectivity={0.9}
          />
        </mesh>

        {/* Geometric Edge Accent Lattice */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.51, 0]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.9}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Cryptographic Node Constellation Vertices */}
        {icosahedronVertices.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive={idx % 2 === 0 ? "#FF7300" : "#00E5FF"}
              emissiveIntensity={2}
            />
          </mesh>
        ))}

        {/* Orbiting Security Ring 1 (Asgardeo Orange Protocol Perimeter) */}
        <group ref={ring1Ref}>
          <mesh>
            <torusGeometry args={[2.1, 0.02, 16, 100]} />
            <meshStandardMaterial
              color="#FFA043"
              emissive="#FF7300"
              emissiveIntensity={1.8}
            />
          </mesh>
          {/* Glowing Satellite Beacon */}
          <mesh position={[2.1, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive="#FF9838"
              emissiveIntensity={3}
            />
          </mesh>
        </group>

        {/* Orbiting Security Ring 2 (Zero-Trust Violet Perimeter) */}
        <group ref={ring2Ref}>
          <mesh>
            <torusGeometry args={[2.35, 0.016, 16, 100]} />
            <meshStandardMaterial
              color="#A78BFA"
              emissive="#7C3AED"
              emissiveIntensity={1.6}
            />
          </mesh>
          {/* Glowing Satellite Beacon */}
          <mesh position={[0, 2.35, 0]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive="#00E5FF"
              emissiveIntensity={3}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function FloatingShield() {
  return (
    <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />
        {/* Warm key light */}
        <pointLight position={[6, 6, 6]} intensity={3} color="#FFA043" />
        {/* Cool violet fill light */}
        <pointLight position={[-6, -4, -4]} intensity={2.5} color="#806EFF" />
        {/* Cyan rim light */}
        <pointLight position={[0, 6, -5]} intensity={2} color="#00E5FF" />
        {/* Directional front light to bring out crystal facets */}
        <directionalLight position={[0, 3, 5]} intensity={1.5} color="#FFFFFF" />
        <SecurityCore />
      </Canvas>
    </div>
  );
}
