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
