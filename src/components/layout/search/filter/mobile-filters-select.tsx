'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// TODO Remove duplicate schema
const sortBy = [
  { name: 'Price: Low to high', handle: 'price-asc' },
  { name: 'Price: High to low', handle: 'price-desc' },
];

export function MobileFiltersSelect() {
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const newParams = new URLSearchParams(params.toString());

  const selectedFilter = params.get('sort') || '';

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      newParams.set('sort', e.target.value);
    } else {
      newParams.delete('sort');
    }

    router.push(`${path}/${newParams.size ? `?${newParams.toString()}` : ''}`);
  };

  return (
    <label>
      <span className="font-light">Filters</span>
      <select
        onChange={onChange}
        value={selectedFilter}
        className="w-full rounded-sm border border-neutral-200 px-2 py-1 text-sm dark:border-neutral-800"
      >
        <option value="">Relevance</option>
        {sortBy.map((sort) => {
          return (
            <option key={sort.handle} value={sort.handle}>
              {sort.name}
            </option>
          );
        })}
      </select>
    </label>
  );
}
