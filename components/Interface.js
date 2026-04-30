'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Interface() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold leading-tight">
              Your voice, <br />
              <span className="text-[#A5D8FF]">visualized.</span>
            </h2>
            <p className="text-xl text-[#666666] leading-relaxed max-w-md">
              An interface designed around you. Connect with loved ones, control your surroundings, and express yourself with zero physical effort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              gsap.to(".ripple-overlay", {
                left: x,
                top: y,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            {/* Soft Ripple Overlay */}
            <div className="ripple-overlay absolute w-64 h-64 ripple-bg -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-3xl z-20"></div>

            <div className="relative glass rounded-[3rem] p-6 shadow-2xl border-white/40 overflow-hidden">
              <div className="bg-white/80 backdrop-blur-md rounded-[2.2rem] aspect-video flex flex-col overflow-hidden relative z-10">
                {/* Mockup Header */}
                <div className="h-16 border-b border-gray-100/50 flex items-center justify-between px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center border border-blue-50">
                      <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse"></div>
                    </div>
                    <div>
                      <div className="w-24 h-2 bg-gray-200 rounded-full mb-1"></div>
                      <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-50"></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50"></div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-10 space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                    <div className="space-y-3 pt-2">
                      <div className="w-48 h-3 bg-gray-100 rounded-full"></div>
                      <div className="w-32 h-3 bg-gray-50 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="max-w-[80%] bg-blue-500 rounded-3xl rounded-tr-none px-8 py-5 shadow-[0_10px_30px_rgba(59,130,246,0.2)]"
                    >
                      <span className="text-white text-lg font-medium tracking-wide block">Tell Mom I love her.</span>
                    </motion.div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                    <div className="w-64 h-16 bg-gray-50 rounded-3xl p-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-75"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>

                {/* Footer Input */}
                <div className="h-20 border-t border-gray-100/50 flex items-center px-10">
                  <div className="flex-1 h-12 bg-gray-50/50 rounded-2xl flex items-center px-6 border border-gray-100">
                    <div className="w-2 h-4 bg-blue-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
