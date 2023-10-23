'use client';

import { Category } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type MobileCategoriesProps = {
  categories: Category[];
};

export function MobileCategoriesSelect(props: MobileCategoriesProps) {
  const { categories } = props;
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const newParams = new URLSearchParams(params.toString());
  newParams.delete('q');

  const selectedCategory = path.substring(path.lastIndexOf('/') + 1);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/search/${e.target.value}${newParams.size ? `?${newParams.toString()}` : ''}`);
  };

  return (
    <label>
      <span className="font-light">Categories</span>
      <select
        onChange={onChange}
        value={selectedCategory}
        className="w-full rounded-sm border border-neutral-200 px-2 py-1 text-sm dark:border-neutral-800"
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
    </label>
  );
}
