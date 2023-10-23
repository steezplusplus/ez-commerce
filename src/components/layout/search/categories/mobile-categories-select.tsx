'use client';

import { Category } from '@prisma/client';

type MobileCategoriesProps = {
  categories: Category[];
};

// TODO control search params
export function MobileCategoriesSelect(props: MobileCategoriesProps) {
  const { categories } = props;
  // const router = useRouter();
  // const path = usePathname();
  // const params = useSearchParams();

  const onChange = () => {
    // router.push(`${path}`);
  };
  return (
    <select onChange={onChange} className="w-full">
      <option>All</option>
      {categories.map((category) => {
        return <option key={category.id}>{category.name}</option>;
      })}
    </select>
  );
}
