import Link from "next/link";

import { Price } from "components/price/price";
import { prisma } from "lib/db";


export default async function SearchPage() {
  const allProducts = await prisma.product.findMany();
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
      <section>
        <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => {
            return (
              <li className='border rounded-sm px-2 py-1 text-sm font-extralight' key={product.id}>
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