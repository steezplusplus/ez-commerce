import { Category } from '@prisma/client';
import Link from 'next/link';

export function CategoryLink(category: Category) {
  return (
    <li className="flex text-black hover:underline dark:text-white">
      <Link href={`/search/${category.slug}`} className="text-sm font-light">
        {category.name}
      </Link>
    </li>
  );
}
