import { Suspense } from 'react';

import { AddToCart } from 'components/checkout/add-to-cart';
import { Footer } from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { Radio } from 'components/product/radio';
import { Container } from 'components/ui/container';
import { Price } from 'components/ui/price';
import { getProductPage } from 'lib/api';

// TODO mobile view show selects instead of radios
// TODO Scroll to image related to selected color
export default async function ProductPage({ params }: { params: { product: string } }) {
  const product = await getProductPage({ name: params.product });

  return (
    <>
      <Container className="px-4 pb-8">
        <div className="flex flex-col p-8 md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.colors.map((color) => {
                return {
                  id: color.id,
                  src: color.image,
                  alt: color.altText,
                };
              })}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
              <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
              <Price amount={String(product.price)} />
            </div>
            <p className="my-6 text-sm leading-tight dark:text-white/[60%]">
              {product.description}
            </p>
            <div className="my-2">
              <h3 className="text-md mb-2">Colors</h3>
              <fieldset className="flex flex-wrap gap-1">
                {product.colors.map((color) => {
                  return (
                    <Radio
                      key={color.id}
                      name="color"
                      value={color.value}
                      displayName={color.name}
                    />
                  );
                })}
              </fieldset>
            </div>
            <div className="my-2">
              <h3 className="text-md mb-2">Colors</h3>
              <fieldset className="flex flex-wrap gap-1">
                {product.sizes.map((size) => {
                  return (
                    <Radio key={size.id} name="size" value={size.value} displayName={size.name} />
                  );
                })}
              </fieldset>
            </div>
            <AddToCart product={product} />
          </div>
        </div>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
