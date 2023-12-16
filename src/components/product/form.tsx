import { Color, Inventory, Product, Size } from '@prisma/client';
import { AddToCart } from 'components/cart/add-to-cart';
import { Radio } from 'components/product/radio';
import { Price } from 'components/ui/price';

export function ProductForm({
  product,
  selectedSize,
  selectedColor,
}: {
  product: Product & { inventory: Inventory[]; colors: Color[]; sizes: Size[] };
  selectedSize?: string;
  selectedColor?: string;
}) {
  const newSize = product.sizes.find((size) => size.value === selectedSize);
  const newColor = product.colors.find((color) => color.value === selectedColor) as Color;
  const newInventory = product.inventory.find((inv) => inv.colorId === newColor?.id && inv.sizeId === newSize?.id);

  return (
    <>
      <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
      <Price amount={String(product.price)} />
      <p>{product.description}</p>
      <ColorSelection colors={product.colors} />
      <SizeSelection sizes={product.sizes} />
      <AddToCart product={product} selectedSize={newSize} selectedColor={newColor} selectedInventory={newInventory} />
    </>
  );
}

function ColorSelection({ colors }: { colors: Color[] }) {
  return (
    <>
      <h3 className="text-md mb-1">Colors</h3>
      <fieldset className="mb-2 flex flex-wrap gap-1">
        {colors.map((color) => {
          return <Radio key={color.id} name="color" value={color.value} displayName={color.name} />;
        })}
      </fieldset>
    </>
  );
}

function SizeSelection({ sizes }: { sizes: Size[] }) {
  return (
    <>
      <h3 className="text-md mb-1">Sizes</h3>
      <fieldset className="mb-2 flex flex-wrap gap-1">
        {sizes.map((size) => {
          return <Radio key={size.id} name="size" value={size.value} displayName={size.name} />;
        })}
      </fieldset>
    </>
  );
}
