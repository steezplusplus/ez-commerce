import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import { Navbar } from 'components/layout/navbar';
import { ThemeProvider } from 'providers/theme-provider';
import { ToastProvider } from 'providers/toast-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Commerce',
  description: 'An open source digital commerce platform. Shop clothing, accessories and more.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <ThemeProvider>
          <ToastProvider />
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
