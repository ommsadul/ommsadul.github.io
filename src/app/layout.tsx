'use client';

import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const mono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Portfolio of Omm Sadul - Mechanical Engineering Student specializing in computational medicine and prediction algorithms" />
      </head>      <body className={mono.className}>
        <ThemeProvider>          <div className="relative min-h-screen flex flex-col items-center">            <div className="fixed top-5 right-6 z-50 hidden sm:flex items-center gap-x-5">              {/* Title removed as requested */}
              <ThemeToggle />
            </div><motion.div
              className={`${isHomePage ? 'content-wrapper-home' : 'content-wrapper'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.3 
              }}
            >
              {children}
            </motion.div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
