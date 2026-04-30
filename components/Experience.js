'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1.4fr_0.6fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-start"
        >
          <img 
            src="/Vyoma/mannequin.png" 
            alt="Vyoma Experience" 
            className="w-full lg:w-[160%] max-w-[1100px] h-auto object-contain relative z-10 lg:-translate-x-20"
          />
          {/* Ground Contact Shadow - Enhanced for scale */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-black/[0.12] blur-[40px] rounded-[100%] -z-10"></div>
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-blue-50/50 blur-[150px] rounded-full -z-10 scale-125"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
            <span className="block bg-gradient-to-r from-[#1A1A1A] to-[#1A1A1A]/40 bg-clip-text text-transparent">
              Silence
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent italic font-medium">
              ends here.
            </span>
          </h2>

          <p className="text-xl text-[#666666] leading-relaxed max-w-md">
            For those who have lost their voice to the silence of paralysis, Vyoma provides a definitive bridge. We translate internal neural intent into clear, outward expression.
          </p>

          <div className="pt-4 space-y-2">
            <p className="text-lg font-medium text-[#1A1A1A]">
              Connect with loved ones.  Communicate your needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
