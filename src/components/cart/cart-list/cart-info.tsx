import { RemoveFromCart } from 'components/cart/remove-from-cart';
import { Price } from 'components/ui/price';
import { CartProduct } from 'hooks/use-cart';

export function CartInfo({ cartProduct }: { cartProduct: CartProduct }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{cartProduct.productName}</h3>
        <RemoveFromCart inventoryId={cartProduct.inventoryId} />
      </div>
      <h4 className="text-md mb-1">
        <Price amount={String(cartProduct.productPrice)} />
      </h4>
      <h4 className="mb-1 text-sm">{cartProduct.colorName}</h4>
      <h4 className="text-sm">{cartProduct.sizeName}</h4>
    </div>
  );
}

export function LoadingCartInfo() {
  return (
    <div className="flex w-full flex-col">
      <div className="mb-1 flex justify-between">
        {/* Product name */}
        <div className="h-7 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
        {/* Remove product button */}
        <div className="h-7 w-7 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      </div>
      {/* Price */}
      <div className="mb-1 h-6 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      {/* Color */}
      <div className="mb-1 h-5 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      {/* Size */}
      <div className="mb-1 h-5 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
    </div>
  );
}
