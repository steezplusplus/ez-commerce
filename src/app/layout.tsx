import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { prisma } from '../../lib/db';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ez-commerce',
  description: 'Built by Jesse Breuer-Penello',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const store = await prisma.store.findFirstOrThrow({});
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <nav className='flex justify-center py-2'>
          <Link href="/">
            <h1 className="text-sm font-medium uppercase" key={store.id}>{store.name}</h1>
          </Link>
        </nav>
        {children}
        </body>
    </html>
  )
}
