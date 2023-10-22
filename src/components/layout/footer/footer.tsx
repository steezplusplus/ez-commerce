import Link from 'next/link';

import { CircleLogo } from 'components/logo/logo';
import { getCategories, getStore } from 'lib/api';

export async function Footer() {
  const store = await getStore();
  const categories = await getCategories({});

  return (
    <footer className="text-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 p-6 dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 md:pt-1" href="/">
            <CircleLogo />
            {store.name}
          </Link>
        </div>
        <nav>
          <p className="mb-1">Categories</p>
          <ul className="flex flex-col gap-y-2">
            <li className="font-light text-blue-500 hover:text-blue-700 hover:underline">
              <Link href={`/search`}>All</Link>
            </li>
            {categories.map((category) => {
              return (
                <li
                  className="font-light text-blue-500 hover:text-blue-700 hover:underline"
                  key={category.id}
                >
                  <Link href={`/search/${category.slug}`}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <Link
            className="text-blue-500 hover:text-blue-700 hover:underline"
            href="https://github.com/steezplusplus/ez-commerce"
          >
            View source code
          </Link>
          <p className="mt-1 font-thin">Made by Jesse Breuer-Penello</p>
        </div>
      </div>
    </footer>
  );
}
