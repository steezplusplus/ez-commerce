import Link from 'next/link';

import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage(props: CategoryPageProps) {
  const category = await prisma.category.findFirstOrThrow({
    where: {
      name: {
        equals: props.params.category,
        mode: 'insensitive',
      },
    },
    include: {
      products: true,
    },
  });
  return (
    <div className="min-h-screen">
      <h2 className="mb-2 text-sm font-light uppercase">{props.params.category}</h2>
      <section>
        <ul className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => {
            return (
              <li className="rounded-sm border px-2 py-1 text-sm font-extralight" key={product.id}>
                <Link href={`/product/${product.slug}`} className="hover:underline">
                  <div className="flex justify-between">
                    <h3 className="mr-4">{product.name}</h3>
                    <Price amount={product.price.toString()} />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
