import '@/styles/globals.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import { inter } from '@/lib/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <main className={`${inter.className}`}>
          <Header />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}
