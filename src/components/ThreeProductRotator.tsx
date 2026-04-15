import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';

const ProductModel = ({ rotationY }: { rotationY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Smoothly interpolate to the target rotation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        rotationY,
        0.1
      );
      
      // Idle floating animation is handled by Float component
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <MeshDistortMaterial
        color="#ffffff"
        speed={2}
        distort={0.2}
        radius={1}
        metalness={0.8}
        roughness={0.1}
      />
    </mesh>
  );
};

export const ThreeProductRotator: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setRotation((val / 100) * Math.PI * 2);
  };

  return (
    <div className="relative w-full h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <ProductModel rotationY={rotation} />
              </Float>
            </Stage>
          </Suspense>
          
          {/* OrbitControls disabled for manual slider control, but could be enabled for touch */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
            onChange={(e) => {
              if (e?.target) {
                // Sync slider with orbit controls if needed
              }
            }}
          />
        </Canvas>
      </div>

      {/* Scrub Bar / Slider */}
      <div className="absolute bottom-12 w-full max-w-2xl px-6 z-20">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-sans">Manual Orbit Rotation</span>
          <div className="relative w-full h-[2px] bg-white/10">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-10"
              style={{ WebkitAppearance: 'none' }}
            />
            {/* Visual Slider Track & Handle */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-full bg-accent-cyan shadow-[0_0_10px_rgba(0,242,255,0.5)]" 
              style={{ width: `${(rotation / (Math.PI * 2)) * 100}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,242,255,0.8)] flex items-center justify-center pointer-events-none"
              style={{ left: `calc(${(rotation / (Math.PI * 2)) * 100}% - 20px)` }}
            >
              <div className="w-[2px] h-[10px] bg-luxury-black" />
            </div>
          </div>
          <div className="flex justify-between w-full text-[9px] text-white/30 font-sans tracking-widest">
            <span>-180°</span>
            <span>0°</span>
            <span>+180°</span>
          </div>
        </div>
      </div>

      {/* Interactive Labels */}
      <div className="absolute top-1/4 left-10 lg:left-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-1"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-cyan font-bold">SERIES // NEBULA-01</span>
          <h2 className="text-4xl lg:text-6xl font-display font-light leading-tight">Vitreous<br/>Reflective Shell</h2>
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 right-10 lg:right-20 text-right pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-2"
        >
          <p className="text-sm text-white/60 max-w-[200px] ml-auto font-light">
            Engineered with liquid polymer mesh and glass-morphic fibers for reactive thermal protection.
          </p>
          <p className="text-3xl font-display font-medium">$3,420.00</p>
        </motion.div>
      </div>
    </div>
  );
};
