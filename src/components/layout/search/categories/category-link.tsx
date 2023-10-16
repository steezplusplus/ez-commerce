import { Category } from '@prisma/client';
import Link from 'next/link';

export function CategoryLink(category: Category) {
  const href = `/search/${category.slug}`;
  return (
    <li className="flex  hover:underline">
      <Link className="text-sm font-light text-black dark:text-white" href={href}>
        {category.name}
      </Link>
    </li>
  );
}
