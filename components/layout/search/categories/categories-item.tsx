'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { Category } from '@prisma/client';
import { createUrl } from '../../../../lib/utils';

type CategoriesItemProps = {
  category: Category;
};

export function CategoriesItem(props: CategoriesItemProps) {
  const { category } = props;
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete('q');

  const href = createUrl(`/search/${category.slug}`, newParams);
  const displayName = pathName.endsWith(category.slug) ? `> ${category.name}` : category.name;

  return (
    <>
      <li className="mt-2 flex text-xs" key={category.id}>
        <Link className="w-full hover:underline" href={href}>
          {displayName}
        </Link>
      </li>
    </>
  );
}

export function DefaultCategoryItem() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete('q');

  const href = `/search${newParams.size ? `?${newParams.toString()}` : ''}`;
  const displayName = pathName === '/search' ? '> All' : 'All';

  return (
    <li className="mt-2 flex text-xs">
      <Link className="w-full hover:underline" href={href}>
        {displayName}
      </Link>
    </li>
  );
}
