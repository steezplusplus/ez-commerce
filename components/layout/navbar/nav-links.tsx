/**
 * Creates a Link to navigate to each category in the store
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Category } from '@prisma/client';

type NavLinksProps = {
  categories: Category[];
};

type Routes = {
  label: string;
  href: string;
  ariaCurrent: 'page' | undefined;
}[];

export function NavLinks(props: NavLinksProps) {
  const { categories } = props;
  const pathName = usePathname();

  const routes: Routes = categories.map((category) => ({
    label: category.name,
    href: `/search/${category.slug}`,
    ariaCurrent: pathName.startsWith(`/search/${category.slug}`) ? 'page' : undefined,
  }));

  // TODO Hover style
  return (
    <>
      {routes.slice(0, 3).map((route) => {
        const { label, href, ariaCurrent } = route;

        return (
          <li key={href}>
            <Link
              href={href}
              className="group text-xs font-medium transition duration-300 hover:opacity-75"
              aria-current={ariaCurrent}
            >
              {label}
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-700 group-aria-[current=page]:max-w-full dark:bg-white" />
            </Link>
          </li>
        );
      })}
    </>
  );
}
