import { CategoriesSelect } from '@/components/layout/search/categories//categories-select';
import { CategoriesItem, DefaultCategoryItem } from '@/components/layout/search/categories/categories-item';
import { getCategories } from '@/lib/api';

type CategoriesProps = {
  title: string;
};

export async function Categories(props: CategoriesProps) {
  const categories = await getCategories();
  const { title } = props;

  return (
    <nav className="md:sticky md:top-10">
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
  );
}
