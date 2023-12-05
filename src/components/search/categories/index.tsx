import { Suspense } from 'react';

import { getCategories } from 'lib/api';
import { CategoriesItem, DefaultCategoryItem } from './categories-item';
import { CategoriesSelect } from './categories-select';

type CategoriesProps = {
  title: string;
};

export async function Categories(props: CategoriesProps) {
  const categories = await getCategories();
  const { title } = props;

  return (
    <Suspense>
      <nav>
        <h3 className="mb-1 text-sm">{title}</h3>
        <div className="hidden md:block">
          <ul>
            <DefaultCategoryItem />
            {categories.map((category) => {
              return <CategoriesItem category={category} key={category.id} />;
            })}
          </ul>
        </div>
        <div className="block md:hidden">
          <CategoriesSelect categories={categories} />
        </div>
      </nav>
    </Suspense>
  );
}
