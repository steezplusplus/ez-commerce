import { getCategories } from 'lib/api';
import { CategoryLink, DefaultCategoryLink } from './category-links';

export async function Categories() {
  const categories = await getCategories({});

  return (
    <nav>
      <h3 className="mb-1 text-sm">Categories</h3>
      <ul className="space-y-2">
        <li className="text-xs font-light hover:underline">
          <DefaultCategoryLink />
        </li>
        {categories.map((category) => {
          return (
            <li className="text-xs font-light hover:underline" key={category.id}>
              <CategoryLink key={category.id} {...category} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
