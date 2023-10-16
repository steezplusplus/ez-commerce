'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export type FilterLinkProps = {
  name: string;
  handle: string;
};

export function FilterLink(props: FilterLinkProps) {
  const { name, handle } = props;
  const path = usePathname();
  const params = useSearchParams();
  const active = params.get('sort') === handle ? 'underline' : '';

  return (
    <Link href={`${path}?sort=${handle}`} className={active}>
      {name}
    </Link>
  );
}

export function DefaultFilterLink() {
  const path = usePathname();
  const params = useSearchParams();
  const active = params.size === 0 ? 'underline' : '';
  return (
    <Link href={path} className={active}>
      Relevance
    </Link>
  );
}
