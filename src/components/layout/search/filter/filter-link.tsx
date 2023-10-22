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

  const newParams = new URLSearchParams(params.toString());
  newParams.set('sort', handle);

  const displayName = params.get('sort') === handle ? `${name} <` : name;
  const href = `${path}?${newParams.toString()}`;

  return <Link href={href}>{displayName}</Link>;
}

export function DefaultFilterLink() {
  const path = usePathname();
  const params = useSearchParams();
  const newParams = new URLSearchParams(params.toString());
  newParams.delete('sort');

  const href = `${path}?${newParams.toString()}`;
  const displayName = params.get('sort') ? 'Relevance' : 'Relevance <';

  return <Link href={href}>{displayName}</Link>;
}
