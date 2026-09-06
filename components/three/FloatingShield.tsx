"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Trail } from "@react-three/drei";
import * as THREE from "three";

function SecurityCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -t * 0.3;
      wireframeRef.current.rotation.z = Math.cos(t * 0.3) * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.6;
      ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.5;
      ring2Ref.current.rotation.z = t * 0.4;
    }
  });

  return (
    <group>
      {/* Central Gem / Token */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.5, 2]} />
          <MeshDistortMaterial
            color="#FF7300"
            roughness={0.15}
            metalness={0.9}
            distort={0.25}
            speed={2}
          />
        </mesh>

        {/* Outer Wireframe Shield cage */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[2.0, 1]} />
          <meshStandardMaterial
            color="#5C45FD"
            wireframe
            emissive="#5C45FD"
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Orbiting Ring 1 (Orange Security Perimeter) */}
        <group ref={ring1Ref}>
          <mesh>
            <torusGeometry args={[2.5, 0.03, 16, 100]} />
            <meshStandardMaterial
              color="#FFA043"
              emissive="#FF7300"
              emissiveIntensity={1.2}
            />
          </mesh>
          {/* Glowing Satellite node */}
          <mesh position={[2.5, 0, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive="#FF7300"
              emissiveIntensity={2}
            />
          </mesh>
        </group>

        {/* Orbiting Ring 2 (Purple Zero-Trust Ring) */}
        <group ref={ring2Ref}>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.8, 0.025, 16, 100]} />
            <meshStandardMaterial
              color="#806EFF"
              emissive="#5C45FD"
              emissiveIntensity={1.2}
            />
          </mesh>
          {/* Glowing Satellite node */}
          <mesh position={[0, 2.8, 0]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              color="#00E5FF"
              emissive="#00E5FF"
              emissiveIntensity={2}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function FloatingShield() {
  return (
    <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#FFA043" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#806EFF" />
        <spotLight
          position={[0, 5, 5]}
          intensity={2}
          angle={0.6}
          penumbra={1}
          color="#FFFFFF"
        />
        <SecurityCore />
      </Canvas>
    </div>
  );
}
