import { Category } from '@prisma/client';
import Link from 'next/link';

export function FooterMenu({ categories }: { categories: Category[] }) {
  return (
    <nav>
      <h3 className="mb-1">Categories</h3>
      <ul>
        <li>
          <Link href="/search" className="text-sm font-light text-blue-500 hover:text-blue-700 hover:underline">
            All
          </Link>
        </li>
        {categories.map((category: Category) => {
          return <FooterMenuItem key={category.id} category={category} />;
        })}
      </ul>
    </nav>
  );
}

function FooterMenuItem({ category }: { category: Category }) {
  const href = `/search/${category.slug}`;

  return (
    <li>
      <Link href={href} className="text-sm font-light text-blue-500 hover:text-blue-700 hover:underline">
        {category.name}
      </Link>
    </li>
  );
}
