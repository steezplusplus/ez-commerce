import { Suspense } from 'react';

import { Footer } from 'components/layout/footer/footer';
import { Gallery } from 'components/product/gallery';
import { ProductForm } from 'components/product/product-form';
import { getProduct } from 'lib/api';

export default async function ProductPage({ params }: { params: { product: string } }) {
  const product = await getProduct({ slug: params.product });

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4 pb-8">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full border border-neutral-200 dark:border-neutral-800 lg:basis-4/6">
            <Gallery images={product.images} />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductForm product={product} />
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
