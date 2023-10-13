import { Price } from "@/components/price";
import { prisma } from "../../../lib/db";

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
    <main className="flex min-h-screen flex-col items-center px-4 py-2">
      <h2 className="text-sm font-light uppercase mb-2">{props.params.category}</h2>
      <section>
        <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => {
            return (
              <li className='border rounded-sm px-2 py-1 text-sm font-extralight' key={product.id}>
                <div className="flex mb-1">
                  <h3 className="mr-4">{product.name}</h3>
                  <span className='ml-auto'>
                    <Price amount={product.price.toString()} />
                  </span>
                </div>                
                <p>{product.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}