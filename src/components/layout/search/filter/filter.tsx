import { DefaultFilterLink, FilterLink } from './filter-link';

const sortBy = [
  { name: 'Price: Low to high', handle: 'price-asc' },
  { name: 'Price: High to low', handle: 'price-desc' },
];

export async function Filter() {
  return (
    <nav>
      <h3 className="mb-1 text-sm">Sort by</h3>
      <ul className="space-y-2">
        <li className="text-xs font-light hover:underline">
          <DefaultFilterLink />
        </li>
        {sortBy.map((sort) => {
          return (
            <li className="text-xs font-light hover:underline" key={sort.handle}>
              <FilterLink key={sort.handle} {...sort} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
