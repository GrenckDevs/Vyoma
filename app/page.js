'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import BrainWaveSimulation from '../components/BrainWaveSimulation';
import HowItWorks from '../components/HowItWorks';
import SoftwareExperience from '../components/SoftwareExperience';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <BrainWaveSimulation />
      <HowItWorks />
      <SoftwareExperience />
      <Footer />
    </main>
  );
}
