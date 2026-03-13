import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.4, 100, 100]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#4338ca"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });
  return (
    <Float speed={speed * 1.5} floatIntensity={0.8}>
      <Torus ref={ref} args={[0.4, 0.08, 16, 100]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
      </Torus>
    </Float>
  );
}

function ParticleField() {
  const count = 300;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#8b5cf6" size={0.04} transparent opacity={0.6} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[-3, -3, -3]} intensity={0.8} color="#06b6d4" />

      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={1} />
      <ParticleField />
      <AnimatedSphere />
      <FloatingTorus position={[3, 1, -1]} color="#06b6d4" speed={0.8} />
      <FloatingTorus position={[-3, -1, -1]} color="#f43f5e" speed={1.2} />
      <FloatingTorus position={[2, -2, 0]} color="#8b5cf6" speed={0.6} />
    </Canvas>
  );
}
