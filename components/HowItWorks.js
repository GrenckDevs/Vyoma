'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StepIllustration = ({ step }) => {
  if (step === 0) { // Think
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"
        />
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          {/* Central Neural Pulse */}
          <motion.circle 
            cx="100" cy="100" r="40" 
            stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 100 100 L ${100 + Math.cos(i * 60 * Math.PI / 180) * 80} ${100 + Math.sin(i * 60 * Math.PI / 180) * 80}`}
              stroke="#3B82F6"
              strokeWidth="1"
              strokeOpacity="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
          <motion.circle 
            cx="100" cy="100" r="10" fill="#3B82F6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
  
  if (step === 1) { // Translate
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 100, opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: "linear" }}
              className="absolute text-[10px] font-mono text-blue-400/40 uppercase tracking-tighter"
              style={{ top: `${20 + i * 5}%` }}
            >
              {i % 2 === 0 ? "010110" : "SYNCING"}
            </motion.div>
          ))}
        </div>
        <div className="relative z-10 w-32 h-32 bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/5">
           <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-blue-400 rounded-lg flex items-center justify-center text-blue-500 font-bold text-xl"
           >
            A
           </motion.div>
        </div>
      </div>
    );
  }

  return ( // Act - Simplified
    <div className="relative w-full h-64 flex items-center justify-center">
      <div className="w-40 h-56 bg-white rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden p-6 flex flex-col">
        <div className="w-8 h-1 bg-gray-100 rounded-full mb-6 mx-auto"></div>
        <div className="space-y-3">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-2 bg-blue-50 rounded-full"
          ></motion.div>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-2 bg-blue-50 rounded-full"
          ></motion.div>
        </div>
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 w-1 h-3 bg-blue-400 rounded-full"
        />
      </div>
    </div>
  );
};

const steps = [
  {
    tag: "Phase 01",
    title: "Pure Intent.",
    description: "Your brain naturally forms intentions. Whether it's a word, a movement, or a simple command, the signals are already there.",
  },
  {
    tag: "Phase 02",
    title: "Instant Decoding.",
    description: "Our proprietary bridge translates high-density neural signals into clean digital data. No lag, no friction, just pure translation.",
  },
  {
    tag: "Phase 03",
    title: "Direct Display.",
    description: "Your internal voice is instantly displayed through any digital interface. Your thoughts manifest as words on the screen in real-time.",
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="bg-white py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] text-center"
          >
            How it works
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-24 lg:gap-40">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Illustration */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex-1 w-full max-w-md lg:max-w-none bg-gray-50/50 rounded-[3rem] p-12 border border-gray-100 group relative"
                >
                  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  <StepIllustration step={index} />
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex-1 space-y-6"
                >
                  <span className="text-blue-500/40 font-mono text-sm tracking-widest uppercase">{step.tag}</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">{step.title}</h3>
                  <p className="text-xl text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="pt-6">
                    <div className="w-12 h-[2px] bg-blue-500/20"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
