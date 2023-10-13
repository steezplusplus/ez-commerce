import { prisma } from "lib/db";
import Link from "next/link";

export async function Categories() {
  const categories = await prisma.category.findMany();
  return (
    <nav>
      <h3 className='text-xs text-neutral-500 dark:text-neutral-400'>Categories</h3>
        <ul>
          <li className="hover:underline mt-2 flex text-black dark:text-white">
            <Link
              href="/search"
              className='text-sm font-light'
            >
              All
            </Link>
          </li>
          {categories.map((category) => {
            return (
              <li key={category.id}className="hover:underline mt-2 flex text-black dark:text-white">
                <Link
                  href={`/search/${category.name.toLocaleLowerCase()}`}
                  className='text-sm font-light'
                  key={category.id}>{category.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}