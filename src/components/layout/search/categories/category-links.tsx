'use client';

import { Category } from '@prisma/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function CategoryLink(category: Category) {
  const path = usePathname();
  const href = `/search/${category.slug}`;
  const active = path.endsWith(category.slug);

  return (
    <Link className={active ? 'underline' : ''} href={href}>
      {category.name}
    </Link>
  );
}

export function DefaultCategoryLink() {
  const path = usePathname();
  const href = '/search';
  const active = path === href;

  return (
    <Link href={href} className={active ? 'underline' : ''}>
      All
    </Link>
  );
}
