'use client';

export default function Footer() {
  return (
    <footer className="bg-white py-24 border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="max-w-md space-y-4 text-center md:text-left">
            <h3 className="text-4xl font-bold tracking-tighter">Vyoma</h3>
            <p className="text-lg text-[#666666] leading-relaxed">
              Restoring communication and independence through pure thought.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-center">
            <a
              href="https://grenckdevs.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-10 group transition-opacity hover:opacity-80"
            >
              <p className="text-3xl md:text-5xl tracking-tight text-[#1A1A1A] leading-none text-right">
                <span className="font-light">A</span> <span className="font-bold">GrenckDevs</span> <br />
                <span className="font-light">Innovation</span>
              </p>
              <img src="/gd_black.png" alt="GrenckDevs Logo" className="h-24 md:h-32 w-auto transition-transform group-hover:scale-105" />
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#666666]">
          <p>© 2026 GrenckDves. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
