import { FilterLink } from './filter-link';

const sortBy = [
  { name: 'Relevance', handle: '' },
  { name: 'Price: Low to high', handle: '?sort=price-asc' },
  { name: 'Price: High to low', handle: '?sort=price-desc' },
];

export async function Filter() {
  return (
    <nav>
      <h3 className="text-xs text-neutral-500 dark:text-neutral-400">Sort by</h3>
      <ul>
        {sortBy.map((sort) => {
          return <FilterLink key={sort.handle} {...sort} />;
        })}
      </ul>
    </nav>
  );
}
