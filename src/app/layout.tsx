'use client';

import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { motion } from 'framer-motion';

const mono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Portfolio of Omm Sadul - Mechanical Engineering Student specializing in computational medicine and prediction algorithms" />
      </head>
      <body className={mono.className}>
        <ThemeProvider>
          <div className="relative">
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <motion.div
              className="content-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >              {children}
              <footer className="footer">
                <div className="footer-container">
                  <a href="https://github.com/ommsadul">github</a>
                  <span className="footer-dot">•</span>
                  <a href="https://x.com/sadulom13">x</a>
                  <span className="footer-dot">•</span>
                  <a href="https://scholar.google.com/citations?hl=en&user=RNrHfXMAAAAJ">google scholar</a>
                  <span className="footer-dot">•</span>
                  <a href="https://www.linkedin.com/in/omm-sadul-706515227/">linkedin</a>
                  <span className="footer-dot">•</span>
                  <a href="mailto:omssadul@gmail.com">email</a>
                  <span className="footer-dot">•</span>
                  <a href="https://medium.com/@omssadul">medium</a>
                </div>
              </footer>
            </motion.div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
