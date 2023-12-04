'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Category } from '@prisma/client';

type CategoriesSelectProps = {
  categories: Category[];
};

export function CategoriesSelect(props: CategoriesSelectProps) {
  const { categories } = props;
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const newParams = new URLSearchParams(params.toString());
  newParams.delete('q');

  const selectedCategory = path.substring(path.lastIndexOf('/') + 1);

  const onSelect = (categorySlug: string) => {
    router.push(`/search/${categorySlug}${newParams.size ? `?${newParams.toString()}` : ''}`);
  };

  return (
    <select
      value={selectedCategory}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full rounded-sm border border-neutral-200 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-transparent"
    >
      <option value="">All</option>
      {categories.map((category) => {
        return (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
}
