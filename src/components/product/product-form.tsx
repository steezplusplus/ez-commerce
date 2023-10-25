import { Product } from '@prisma/client';
import { AddToCart } from 'components/checkout/add-to-cart';
import { Price } from 'components/price/price';

type ProductFormProps = {
  product: Product;
};

// TODO Form should control search params. Include them in product added to localstorage
export function ProductForm(props: ProductFormProps) {
  const { product } = props;
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={String(product.price)} />
        </div>
      </div>
      {product.colors.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Colors</h3>
          <form className="flex flex-wrap gap-1">
            {product.colors.map((color) => {
              return <Radio name={color} key={color} />;
            })}
          </form>
        </div>
      )}
      {product.sizes.length > 0 && (
        <div className="my-2">
          <h3 className="text-md mb-2">Sizes</h3>
          <form className="flex flex-wrap gap-1">
            {product.sizes.map((size) => {
              return <Radio name={size} key={size} />;
            })}
          </form>
        </div>
      )}
      <p className="my-6 text-sm leading-tight dark:text-white/[60%]">{product.description}</p>
      <AddToCart product={product} />
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
