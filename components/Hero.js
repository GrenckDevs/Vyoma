'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import gsap from 'gsap';

function ParticleSystem(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(30000), { radius: 5 }));

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x -= delta / 60;
    ref.current.rotation.y -= delta / 65;
    
    // Subtle Wave Oscillation
    ref.current.position.y = Math.sin(time * 0.3) * 0.1;
    ref.current.position.x = Math.cos(time * 0.2) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#4A4A4A"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={1}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const imageRef = useRef(null);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-white"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 80;
        const yPos = (clientY / window.innerHeight - 0.5) * 80;

        gsap.to(".hero-bg-image", {
          x: xPos,
          y: yPos,
          rotateX: -yPos * 0.05,
          rotateY: xPos * 0.05,
          duration: 1.5,
          ease: "power2.out"
        });

        gsap.to(".hero-light", {
          x: clientX,
          y: clientY,
          duration: 0.6,
          ease: "power2.out"
        });
      }}
    >
      <div className="absolute inset-0 z-[100] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ParticleSystem />
        </Canvas>
      </div>

      <div className="hero-light absolute w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.7, scale: 1.05 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div ref={imageRef} className="hero-bg-image-wrapper relative flex items-center justify-center w-full h-full">
          <motion.img
            src="/vyoma.png"
            alt="Vyoma Background"
            className="hero-bg-image w-[80%] max-w-[100rem] object-contain"
          />
        </div>
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center select-none pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 50, letterSpacing: "-0.05em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter text-[#1A1A1A] mb-2 mix-blend-multiply leading-none"
        >
          Vyoma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, tracking: "0.2em" }}
          animate={{ opacity: 1, tracking: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light text-[#666666] uppercase mb-12"
          style={{ letterSpacing: "0.4em" }}
        >

        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="max-w-xl"
        >
          <p className="text-base md:text-lg text-[#1A1A1A] font-medium leading-relaxed">
            A GrenckDves innovation restoring communication and independence through the power of pure thought.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#1A1A1A] to-transparent opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
}
