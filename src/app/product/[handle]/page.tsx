import Image from 'next/image';

import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      slug: params.handle,
    },
    include: {
      variations: {
        include: {
          options: true,
        },
      },
    },
  });

  const { name, price, description, images, variations } = product;

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          {images.map((image, i) => {
            return (
              <div
                className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden rounded border"
                key={`${image}-${i}`}
              >
                <Image
                  className="h-full w-full object-contain"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  alt="TODO"
                  src={image}
                  priority={true}
                />
              </div>
            );
          })}
        </div>

        <div className="basis-full lg:basis-2/6">
          <h2 className="mb-2 text-5xl font-medium">{name}</h2>
          <p className="font-semibold text-neutral-400">{description}</p>
          <Price amount={price.toString()} />
          {variations.map((variant) => {
            return (
              <div key={variant.id}>
                <h3 className="text-md">{variant.name}</h3>
                <form className="flex flex-wrap gap-1">
                  {variant.options.map((option) => {
                    return (
                      <label
                        key={option.id}
                        className="mr-1 flex justify-center rounded border px-2 py-1"
                      >
                        {option.name}
                        <input className="ml-1" type="radio" name={variant.name} />
                      </label>
                    );
                  })}
                </form>
              </div>
            );
          })}
          <button className="rounded border px-2 py-1">Add to cart</button>
        </div>
      </div>
      <p>Related Products</p>
    </div>
  );
}
