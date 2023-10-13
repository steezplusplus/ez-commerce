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
      <h2 className="text-sm font-light uppercase">{props.params.category}</h2>
      <section>
        {category.products.map((product) => {
          return (
            <div className='border rounded-sm relative h-[600px] w-[400px]' key={product.id}>
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                <p className="mr-4">{product.name}</p>
                <Price amount={product.price.toString()} />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}