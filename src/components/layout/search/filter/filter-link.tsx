'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type FilterLinkProps = {
  name: string;
  handle: string;
};

export function FilterLink(props: FilterLinkProps) {
  const { name, handle } = props;
  const path = usePathname();
  const href = `${path}${handle}`;

  return (
    <li className="mt-2 flex text-black hover:underline dark:text-white">
      <Link href={href} className={`text-sm font-light`}>
        {name}
      </Link>
    </li>
  );
}
