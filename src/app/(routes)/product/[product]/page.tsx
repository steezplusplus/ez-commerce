import { Suspense } from 'react';

import { Color, Inventory, Size } from '@prisma/client';
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
// TODO Show inventory
export default async function ProductPage(props: ProductPageProps) {
  const product = await getProductPage({ name: props.params.product });
  const { color: selectedColor, size: selectedSize } = props.searchParams as { [key: string]: string };
  const selectedColorId = product.colors.find((color) => color.value === selectedColor)?.id;
  const selectedSizeId = product.sizes.find((size) => size.value === selectedSize)?.id;
  const selectedProduct = product.Inventory.find(
    (inventory) => inventory.colorId === selectedColorId && inventory.sizeId === selectedSizeId
  );

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
          <Gallery colors={product.colors} />
          <ProductSlider
            price={product.price}
            name={product.name}
            description={product.description}
            colors={product.colors}
            sizes={product.sizes}
            selectedProduct={selectedProduct}
          />
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

type ProductSliderProps = {
  price: number;
  name: string;
  description: string;
  colors: Color[];
  sizes: Size[];
  selectedProduct?: Inventory;
};
function ProductSlider(props: ProductSliderProps) {
  return (
    <div className="bottom-0 aspect-auto self-start sm:sticky sm:top-10 sm:aspect-square">
      <div className="absolute top-2">
        <h1 className="mb-2 text-5xl font-medium">{props.name}</h1>
        <Price amount={String(props.price)} />
        <p>{props.description}</p>

        <h3 className="text-md mb-2">Colors</h3>
        <fieldset className="flex flex-wrap gap-1">
          {props.colors.map((color) => {
            return <Radio key={color.id} name="color" value={color.value} displayName={color.name} />;
          })}
        </fieldset>

        <h3 className="text-md mb-2">Sizes</h3>
        <fieldset className="flex flex-wrap gap-1">
          {props.sizes.map((size) => {
            return <Radio key={size.id} name="size" value={size.value} displayName={size.name} />;
          })}
        </fieldset>
        <AddToCart selectedProduct={props.selectedProduct} />
      </div>
    </div>
  );
}
