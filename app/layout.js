import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Vyoma | Unlocking your world',
  description: 'Restoring communication and independence through the power of pure thought. A GrenckDves innovation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
