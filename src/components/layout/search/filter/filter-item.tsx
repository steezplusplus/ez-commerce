'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';

type FilterItemProps = {
  item: SortFilterItem;
};

// TODO aria current!
export function FilterItem(props: FilterItemProps) {
  const { item } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );

  return (
    <li className="mt-2 flex text-xs">
      <Link className="w-full hover:underline" href={href}>
        {item.title} {active ? ' <' : ''}
      </Link>
    </li>
  );
}
