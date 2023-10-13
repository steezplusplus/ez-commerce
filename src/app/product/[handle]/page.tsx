import { prisma } from "lib/db";

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      name: {
        equals: params.handle.replace('-', ' '),
        mode: "insensitive",
      }
    }
  });
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <h2>{product.name}</h2>
        </div>

        <div className="basis-full lg:basis-2/6">
          <p>{product.description}</p>
        </div>
      </div>
      <p>Related Products</p>
    </div>
  );
}
