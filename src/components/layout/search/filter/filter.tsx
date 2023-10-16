import Link from 'next/link';

type SortBy = {
  name: string;
  slug: string;
};

const sortBy: SortBy[] = [
  { name: 'Price: Low to high', slug: 'price-asc' },
  { name: 'Price: High to low', slug: 'price-desc' },
];

export async function Filter() {
  return (
    <nav>
      <h3 className="text-xs text-neutral-500 dark:text-neutral-400">Sort by</h3>
      <ul>
        {sortBy.map((sort) => {
          return <FilterLink key={sort.slug} {...sort} />;
        })}
      </ul>
    </nav>
  );
}

function FilterLink(sort: SortBy) {
  return (
    <li className="mt-2 flex text-black hover:underline dark:text-white">
      <Link href={`/search?sort=${sort.slug}`} className="text-sm font-light">
        {sort.name}
      </Link>
    </li>
  );
}
