import Image from 'next/image';

import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

export default async function ProductPage({ params }: { params: { product: string } }) {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      slug: params.product,
    },
  });

  const { name, price, description, images, colors, sizes } = product;

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
          {colors.length > 0 && (
            <>
              <h3 className="text-md">Colors</h3>
              <form className="flex flex-wrap gap-1">
                {colors.map((color) => {
                  return (
                    <label
                      key={color}
                      className="mr-1 flex justify-center rounded border px-2 py-1"
                    >
                      {color}
                      <input className="ml-1" type="radio" name="colors" />
                    </label>
                  );
                })}
              </form>
            </>
          )}
          {sizes.length > 0 && (
            <>
              <h3 className="text-md">Sizes</h3>
              <form className="flex flex-wrap gap-1">
                {sizes.map((sizes) => {
                  return (
                    <label
                      key={sizes}
                      className="mr-1 flex justify-center rounded border px-2 py-1"
                    >
                      {sizes}
                      <input className="ml-1" type="radio" name="sizes" />
                    </label>
                  );
                })}
              </form>
            </>
          )}
          <button className="rounded border px-2 py-1">Add to cart</button>
        </div>
      </div>
      <p>Related Products</p>
    </div>
  );
}
