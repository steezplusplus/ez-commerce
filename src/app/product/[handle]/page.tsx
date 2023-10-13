import { prisma } from "lib/db";

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      name: {
        contains: params.handle,
        mode: "insensitive",
      },
    },
    include: {
      variations: true,
    },
  });

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <div className="relative aspect-square h-full max-h-[550px] w-full border rounded overflow-hidden">
            Image carousels
          </div>
        </div>

        <div className="basis-full lg:basis-2/6">
          <h2 className="mb-2 text-5xl font-medium">{product.name}</h2>
          <p className="font-semibold text-neutral-400">{product.description}</p>
        </div>

        <div className="flex gap-x-2">
          {product.variations.map((variant) => {
            return (
              <button 
                key={variant.id}
                className="px-2 py-1 border rounded uppercase"
              >
                {variant.name}
              </button>
            );
          })}
        </div>
      </div>
      <p>Related Products</p>
    </div>
  );
}
