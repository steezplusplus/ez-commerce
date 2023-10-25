'use client';

import { SortFilterItem } from 'lib/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type FilterOptionProps = {
  list: SortFilterItem[];
};

export function FilterSelect(props: FilterOptionProps) {
  const { list } = props;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const newParams = new URLSearchParams(searchParams.toString());

  const selectedFilter = searchParams.get('sort') || '';

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      newParams.set('sort', e.target.value);
    } else {
      newParams.delete('sort');
    }

    router.push(`${pathname}/${newParams.size ? `?${newParams.toString()}` : ''}`);
  };

  return (
    <select
      value={selectedFilter}
      onChange={onChange}
      className="w-full rounded-sm border border-neutral-200 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-transparent"
    >
      {list.map((item, i) => {
        return (
          <option key={i} value={item.slug}>
            {item.title}
          </option>
        );
      })}
    </select>
  );
}
