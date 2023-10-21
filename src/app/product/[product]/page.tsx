import { Suspense } from 'react';

import { Footer } from 'components/layout/footer/footer';
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
    <>
      <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full rounded-md border lg:basis-4/6">
            <div className="flex aspect-square h-full max-h-[550px] w-full items-center justify-center">
              Image
            </div>
          </div>

          <div className="basis-full lg:basis-2/6">
            <h2 className="mb-2 text-5xl font-medium">{name}</h2>
            <p className="mb-2 font-semibold text-neutral-400">{description}</p>
            <Price amount={price.toString()} />
            {colors.length > 0 && (
              <div className="my-2">
                <h3 className="text-md">Colors</h3>
                <form className="flex flex-wrap gap-1">
                  {colors.map((color) => {
                    return <Radio name={color} key={color} />;
                  })}
                </form>
              </div>
            )}
            {sizes.length > 0 && (
              <div className="my-2">
                <h3 className="text-md">Sizes</h3>
                <form className="flex flex-wrap gap-1">
                  {sizes.map((size) => {
                    return <Radio name={size} key={size} />;
                  })}
                </form>
              </div>
            )}
            <button className="w-full rounded border px-2 py-1">Add to cart</button>
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

type RadioProps = {
  name: string;
};
function Radio(props: RadioProps) {
  const { name } = props;
  return (
    <label className="mr-1 flex justify-center rounded border px-2 py-1">
      {name}
      <input className="ml-1" type="radio" name="sizes" />
    </label>
  );
}
