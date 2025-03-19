'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Text, useTexture, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

// Particle system for background
function ParticleField({ count = 100, color }: { count?: number, color: string }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      const { time, factor, speed, x, y, z } = particle;
      
      // Update the particle time
      particles[i].time = (time + speed) % 1;
      
      // Calculate new position
      const s = Math.cos(time * factor) + 2;
      const scale = 0.04 * s;
      
      // Update the instance matrix
      const matrix = new THREE.Matrix4();
      matrix.compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion(),
        new THREE.Vector3(scale, scale, scale)
      );
      
      mesh.current!.setMatrixAt(i, matrix);
    });
    
    mesh.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} castShadow receiveShadow>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} emissive={color} emissiveIntensity={0.2} />
    </instancedMesh>
  );
}

// Animated floating logo
function FloatingLogo({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.9} 
          emissive={color}
          emissiveIntensity={0.4}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </group>
  );
}

// Animated text
function AnimatedText({ text, position, color }: { text: string, position: [number, number, number], color: string }) {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/Poppins-Bold.ttf"
    >
      {text}
    </Text>
  );
}

export function Scene() {
  const { theme } = useTheme();
  
  // Colors based on theme
  const primaryColor = theme === 'dark' ? '#FF0000' : '#E50000';
  const secondaryColor = theme === 'dark' ? '#CC0000' : '#B30000';
  const accentColor = theme === 'dark' ? '#FFFFFF' : '#000000';
  const bgParticleColor = theme === 'dark' ? '#FF0000' : '#E50000';

  return (
    <PresentationControls
      global
      rotation={[0, 0, 0]}
      polar={[-Math.PI / 4, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
      speed={1.5}
      zoom={0.7}
    >
      {/* Background particles */}
      <ParticleField color={bgParticleColor} count={80} />
      
      {/* Center floating logo */}
      <Float rotationIntensity={0.2} floatIntensity={0.5}>
        <FloatingLogo color={primaryColor} />
      </Float>
      
      {/* Floating text elements */}
      <Float rotationIntensity={0.1} floatIntensity={0.3}>
        <AnimatedText text="Developer" position={[-2.5, 1.5, 0]} color={secondaryColor} />
      </Float>
      
      <Float rotationIntensity={0.1} floatIntensity={0.4}>
        <AnimatedText text="Designer" position={[2.5, 1.5, 0]} color={secondaryColor} />
      </Float>
      
      <Float rotationIntensity={0.1} floatIntensity={0.2}>
        <AnimatedText text="Creator" position={[0, -1.5, 0]} color={accentColor} />
      </Float>
    </PresentationControls>
  );
}

export default function ThreeScene() {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} />
        <pointLight position={[0, 0, 3]} intensity={0.5} color={theme === 'dark' ? '#FF0000' : '#E50000'} />
        <fog attach="fog" args={[theme === 'dark' ? '#121212' : '#FFFFFF', 3.5, 15]} />
        <Scene />
      </Canvas>
    </div>
  );
}
