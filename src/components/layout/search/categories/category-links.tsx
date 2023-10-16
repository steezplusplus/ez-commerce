'use client';

import { Category } from '@prisma/client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// TODO remove q from
export function CategoryLink(category: Category) {
  const { name, slug } = category;
  const path = usePathname();
  const params = useSearchParams();

  const newParams = new URLSearchParams(params.toString());
  newParams.delete('q');

  const href = `/search/${slug}${newParams.size ? `?${newParams.toString()}` : ''}`;
  const displayName = path.endsWith(slug) ? `> ${name}` : name;

  return <Link href={href}>{displayName}</Link>;
}

export function DefaultCategoryLink() {
  const path = usePathname();
  const params = useSearchParams();
  const newParams = new URLSearchParams(params.toString());
  newParams.delete('q');

  const href = `/search${newParams.size ? `?${newParams.toString()}` : ''}`;
  const displayName = path === '/search' ? '> All' : 'All';

  return <Link href={href}>{displayName}</Link>;
}
