import { Suspense } from 'react';

import { AddToCart } from 'components/checkout/add-to-cart';
import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { Price } from 'components/ui/price';
import { getProductPage } from 'lib/api';

export default async function ProductPage({ params }: { params: { product: string } }) {
  const product = await getProductPage({ name: params.product });

  return (
    <>
      <Container className="px-4 pb-8">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            {/* <Gallery images={product.images} /> */}
          </div>

          <div className="basis-full lg:basis-2/6">
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
              <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
              <Price amount={String(product.price)} />
            </div>
            {/* <ProductForm sizes={product.sizes} colors={product.colors} /> */}
            <AddToCart product={product} />
            <p className="my-6 text-sm leading-tight dark:text-white/[60%]">
              {product.variants[0]?.description}
            </p>
          </div>
        </div>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
