'use client';

import { Category } from '@prisma/client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function CategoryLink(category: Category) {
  const path = usePathname();
  const params = useSearchParams();
  const href = `/search/${category.slug}`;
  const active = path.endsWith(category.slug);

  return (
    <Link className={active ? 'underline' : ''} href={`${href}?${params.toString()}`}>
      {category.name}
    </Link>
  );
}

export function DefaultCategoryLink() {
  const path = usePathname();
  const params = useSearchParams();
  const href = `/search`;
  const active = path === href;

  return (
    <Link href={`${href}?${params.toString()}`} className={active ? 'underline' : ''}>
      All
    </Link>
  );
}
