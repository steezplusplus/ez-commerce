import { prisma } from 'lib/db';
import { CategoryLink, DefaultCategoryLink } from './category-links';

export async function Categories() {
  const categories = await prisma.category.findMany();

  return (
    <nav>
      <h3 className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">Categories</h3>
      <ul className="space-y-2">
        <li className="text-xs font-light text-black hover:underline dark:text-white">
          <DefaultCategoryLink />
        </li>
        {categories.map((category) => {
          return (
            <li
              className="text-xs font-light text-black hover:underline dark:text-white"
              key={category.id}
            >
              <CategoryLink key={category.id} {...category} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
