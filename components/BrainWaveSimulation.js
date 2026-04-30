'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

function TabletInterface() {
  const [messages] = useState([
    { id: 1, text: "Hello, this is my first thought." },
    { id: 2, text: "It feels so natural to communicate like this." },
    { id: 3, text: "I can finally say what's on my mind." },
  ]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative w-[320px] h-[460px] bg-white rounded-[3rem] border-[12px] border-[#0A0A0A] shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col"
    >
      {/* Status Bar */}
      <div className="h-8 px-6 flex justify-between items-center bg-white z-20 border-b border-gray-50/50">
        <span className="text-[10px] font-bold text-[#1A1A1A]">9:41</span>
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 border border-[#1A1A1A]/20 rounded-[2px] relative">
            <div className="absolute left-0 top-0 h-full bg-[#1A1A1A] w-[90%]"></div>
          </div>
          <div className="w-3 h-2 flex items-end space-x-[1px]">
            <div className="w-[2px] h-[30%] bg-[#1A1A1A]"></div>
            <div className="w-[2px] h-[60%] bg-[#1A1A1A]"></div>
            <div className="w-[2px] h-[100%] bg-[#1A1A1A]"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col z-10 overflow-hidden bg-white">
        <div className="flex items-center space-x-3 mb-8 border-b border-gray-50 pb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
          </div>
          <div>
            <div className="text-xs font-bold text-[#1A1A1A]">Neural Bridge</div>
            <div className="text-[9px] text-blue-400 font-medium tracking-wide uppercase">Active</div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-hide">
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: msg.id * 0.3 }}
              className="bg-blue-50 text-[#1A1A1A] p-4 rounded-2xl rounded-tr-sm text-[11px] leading-relaxed self-end max-w-[90%] shadow-sm"
            >
              {msg.text}
            </motion.div>
          ))}
          
          <div className="flex space-x-1.5 pt-2 self-end pr-2 opacity-30">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>

      {/* Home Indicator Container */}
      <div className="h-10 flex items-center justify-center bg-white z-20 pb-2">
        <div className="w-24 h-[4px] bg-gray-100 rounded-full"></div>
      </div>
    </motion.div>
  );
}

export default function BrainWaveSimulation() {
  const canvasRef = useRef(null);
  const intensity = useRef(1);
  const [_, setRender] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width, height;
    const lines = 8;
    const points = 150;
    
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      const currentIntensity = intensity.current;
      
      // Create a gradient to fade out waves at the edges
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(37, 99, 235, 0)');
      gradient.addColorStop(0.2, 'rgba(37, 99, 235, 1)');
      gradient.addColorStop(0.8, 'rgba(37, 99, 235, 1)');
      gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 0.5 + (i / lines) * 1.5;
        const alpha = (0.05 + (i / lines) * 0.15) * (1 + currentIntensity * 0.2);
        ctx.strokeStyle = gradient;
        ctx.globalAlpha = alpha;
        
        let prevX, prevY;
        
        for (let j = 0; j <= points; j++) {
          const x = (j / points) * width;
          
          // Significantly increased frequency and height
          const freq = (0.03 + i * 0.01) * currentIntensity;
          const amp = (40 + i * 15) * currentIntensity; // Much larger amplitude
          const speed = time * 0.0008;
          
          const yOffset = Math.sin(j * freq + speed + i) * amp * Math.cos(j * 0.04 + speed * 0.5);
          const y = height / 2 + yOffset;
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            // Quadratic smoothing
            const xc = (prevX + x) / 2;
            const yc = (prevY + y) / 2;
            ctx.quadraticCurveTo(prevX, prevY, xc, yc);
          }
          
          prevX = x;
          prevY = y;
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(intensity, { current: 3, duration: 1.5, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(intensity, { current: 1, duration: 2, ease: "power2.inOut" });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-32 flex items-center justify-center">
      {/* Background Neural Waves */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A]">
              From thought <br />
              <span className="text-[#3B82F6]">to reality.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-md leading-relaxed">
              Experience direct mental agency. Our neural interface bridge allows you to interact with the world by simply forming the intent.
            </p>
          </motion.div>
          
          {/* Neural Link Experience */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 pt-12">
            
            {/* Headband */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative z-20 cursor-pointer group"
            >
              <div className="absolute inset-0 bg-blue-100/30 blur-[100px] rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img 
                src="/vyoma_back.png" 
                alt="Vyoma Headband" 
                className="relative z-10 w-[300px] md:w-[450px] drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>

            {/* Connecting Cable SVG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-10 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                <motion.path 
                  d="M 380 320 Q 450 380 520 320" 
                  stroke="#1A1A1A" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                {/* Data Pulse */}
                <motion.circle r="2" fill="#3B82F6">
                  <animateMotion 
                    dur="2.5s" 
                    repeatCount="indefinite" 
                    path="M 380 320 Q 450 380 520 320" 
                  />
                </motion.circle>
              </svg>
            </div>

            {/* Tablet Interface */}
            <div className="relative z-20">
              <TabletInterface />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
