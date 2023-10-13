import Link from 'next/link';
import { prisma } from '../../../../lib/db';

export async function Navbar() {
  const store = await prisma.store.findFirstOrThrow({});

  return (
    <nav className='flex justify-center py-2'>
      <Link href="/">
        <h1 className="text-sm font-medium uppercase" key={store.id}>{store.name}</h1>
      </Link>
    </nav>
  );
}