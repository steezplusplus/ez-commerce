import Link from 'next/link';

import { prisma } from 'lib/db';

export default async function Home() {
  const categories = await prisma.category.findMany();
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-2">
      <div className='flex gap-x-4'>
        {categories.map((category) => {
          return (
            <Link
              href={`/${category.name.toLocaleLowerCase()}`}
              className='text-sm font-light'
              key={category.id}>{category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
