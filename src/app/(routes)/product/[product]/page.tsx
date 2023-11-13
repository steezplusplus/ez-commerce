import { Suspense } from 'react';

import { AddToCart } from 'components/checkout/add-to-cart';
import { Footer } from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { Radio } from 'components/product/radio';
import { Price } from 'components/ui/price';
import { getProductPage } from 'lib/api';

type ProductPageProps = {
  params: {
    product: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

// TODO Use searchParams to scroll to relevant image
// TODO Mobile view broken
export default async function ProductPage(props: ProductPageProps) {
  const product = await getProductPage({ name: props.params.product });

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
          <div className="bottom-0 aspect-auto self-start sm:sticky sm:top-10 sm:aspect-square">
            <div className="absolute top-2">
              <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
              <Price amount={String(product.price)} />
              <p>{product.description}</p>

              <h3 className="text-md mb-2">Colors</h3>
              <fieldset className="flex flex-wrap gap-1">
                {product.colors.map((color) => {
                  return <Radio key={color.id} name="color" value={color.value} displayName={color.name} />;
                })}
              </fieldset>

              <h3 className="text-md mb-2">Sizes</h3>
              <fieldset className="flex flex-wrap gap-1">
                {product.sizes.map((size) => {
                  return <Radio key={size.id} name="size" value={size.value} displayName={size.name} />;
                })}
              </fieldset>

              <AddToCart
                productId={product.id}
                colorRequired={product.colors.length > 0}
                sizeRequired={product.sizes.length > 0}
              />
              <p className="text-xs">Limit 1 per person</p>
            </div>
          </div>

          <div>
            <Gallery images={product.images} />
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
