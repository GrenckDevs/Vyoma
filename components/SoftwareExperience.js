'use client';

import { motion } from 'framer-motion';
import { Heart, Monitor, MessageSquare, Shield } from 'lucide-react';

const SoftwareExperience = () => {
  return (
    <section className="bg-white py-60 overflow-hidden relative">
      {/* Background grain & ambient glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header Section - Asymmetrical */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 mb-40 items-end">
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] leading-[0.9]"
              >
                Silence <br />
                <span className="text-blue-500 italic font-medium">given form.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 leading-relaxed pb-2"
            >
              The Vyoma Interface isn't just a screen. It's a high-fidelity bridge between inner consciousness and external reality.
            </motion.p>
          </div>

          {/* Main Showcase - Large Monitor with depth */}
          <div className="relative mb-60">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="relative z-10 mx-auto max-w-[900px]"
            >
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent rounded-[3rem]"></div>

              {/* Device Frame */}
              <div className="bg-[#0A0A0A] p-4 rounded-[3.5rem] shadow-[0_80px_150px_-20px_rgba(0,0,0,0.3)] border border-white/5">
                <div className="aspect-[16/9] bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">

                  {/* Internal UI */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-20 px-12 flex justify-between items-center border-b border-gray-50/50 bg-white/80 backdrop-blur-md">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">Link: Secure 01</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-50"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-50"></div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center px-20">
                      <div className="space-y-2">
                        <motion.span
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.5em] block mb-6"
                        >
                          Synthesizing Intent...
                        </motion.span>
                        <h3 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-tight tracking-tighter">
                          "I am ready <br /> to speak."
                        </h3>
                      </div>

                      {/* Neural Wave Mini-Viz */}
                      <div className="absolute bottom-12 right-12 w-32 h-16 flex items-end gap-1">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                            className="w-1.5 bg-blue-100 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Stand - Minimalist */}
              <div className="w-1 h-32 bg-gradient-to-b from-gray-200 to-transparent mx-auto"></div>
              <div className="w-48 h-1 bg-gray-100 mx-auto rounded-full blur-sm opacity-50"></div>
            </motion.div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-400/5 blur-[150px] -z-10"></div>
          </div>

          {/* Feature Flow - Premium Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Shield size={22} />,
                title: "Hardware Bond",
                text: "Encrypted 1:1 pairing between headband and terminal. Zero external interference."
              },
              {
                icon: <MessageSquare size={22} />,
                title: "Public Presence",
                text: "Optimized for readability across healthcare environments and clinical settings."
              },
              {
                icon: <Heart size={22} />,
                title: "Empathetic Sync",
                text: "The software adjusts to patient fatigue levels, maintaining consistent accuracy."
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-[2.5rem] bg-gray-50/30 border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.08)] transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-500 rounded-[2.5rem]"></div>

                <div className="mb-8 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">{f.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                    {f.text}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareExperience;
