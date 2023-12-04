import { Suspense } from 'react';

import { Color, Size } from '@prisma/client';
import { AddToCart } from 'components/checkout/add-to-cart';
import { Footer } from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { Radio } from 'components/product/radio';
import { Container } from 'components/ui/container';
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

export default async function ProductPage(props: ProductPageProps) {
  const { color: selectedColorValue, size: selectedSizeValue } = props.searchParams as { [key: string]: string };
  const product = await getProductPage({ name: props.params.product });

  const sizeRequired = product.sizes.length > 0;
  const colorRequired = product.colors.length > 0;

  let selectedSize: Size | undefined;
  if (sizeRequired) {
    if (selectedSizeValue) {
      selectedSize = product.sizes.find((size) => size.value === selectedSizeValue) as Size;
    }
  }

  let selectedColor: Color | undefined;
  if (colorRequired) {
    if (selectedColorValue) {
      selectedColor = product.colors.find((color) => color.value === selectedColorValue) as Color;
    }
  }

  const selectedInventory = product.inventory.find(
    (inventory) => inventory.colorId === selectedColor?.id && inventory.sizeId === selectedSize?.id
  );

  return (
    <>
      <Container className="px-4 pb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Gallery colors={product.colors} />

          <div>
            <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
            <Price amount={String(product.price)} />
            <p>{product.description}</p>

            <h3 className="text-md mb-1">Colors</h3>
            <fieldset className="mb-2 flex flex-wrap gap-1">
              {product.colors.map((color) => {
                return <Radio key={color.id} name="color" value={color.value} displayName={color.name} />;
              })}
            </fieldset>

            <h3 className="text-md mb-1">Sizes</h3>
            <fieldset className="mb-2 flex flex-wrap gap-1">
              {product.sizes.map((size) => {
                return <Radio key={size.id} name="size" value={size.value} displayName={size.name} />;
              })}
            </fieldset>

            <AddToCart
              selectedProductName={product.name}
              selectedProductPrice={product.price}
              sizeRequired={sizeRequired}
              selectedSizeName={selectedSize?.name}
              colorRequired={colorRequired}
              selectedColorName={selectedColor?.name}
              selectedColorImage={selectedColor?.image}
              selectedColorImageAltText={selectedColor?.altText}
              selectedInventory={selectedInventory?.inventory}
              selectedInventoryId={selectedInventory?.id}
            />
          </div>
        </div>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
