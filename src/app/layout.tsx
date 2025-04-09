'use client';

import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import './globals.css';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Portfolio of Omm Sadul - Mechanical Engineering Student specializing in computational medicine and prediction algorithms" />
      </head>
      <body className={inter.className}>        <ThemeProvider>          <div className="relative">
            <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50">
              <ThemeToggle />
            </div>
            <motion.div
              className="content-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
              <footer className="footer">
                <a href="https://github.com/ommsadul">github</a> | 
                <a href="https://x.com/sadulom13">twitter</a> | 
                <a href="https://scholar.google.com/citations?hl=en&user=RNrHfXMAAAAJ">google scholar</a> | 
                <a href="https://www.linkedin.com/in/omm-sadul-706515227/">linkedin</a> | 
                <a href="mailto:omssadul@gmail.com">gmail</a> |
                <a href="https://medium.com/@omssadul">medium</a> 
              </footer>
            </motion.div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
