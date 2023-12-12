import { Price } from 'components/ui/price';
import { CartItem } from 'hooks/use-cart';
import { RemoveFromCart } from '../remove-from-cart';

export function CartInfo({ cartItem }: { cartItem: CartItem }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{cartItem.name}</h3>
        <RemoveFromCart inventoryId={cartItem.id} />
      </div>
      <h4 className="text-md mb-1">
        <Price amount={String(cartItem.price)} />
      </h4>
      <h4 className="mb-1 text-sm">{cartItem.color}</h4>
      <h4 className="text-sm">{cartItem.size}</h4>
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
