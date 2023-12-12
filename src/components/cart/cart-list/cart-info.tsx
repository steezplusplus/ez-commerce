import { Price } from 'components/ui/price';
import { CartItem } from 'hooks/use-cart';
import { RemoveFromCart } from '../remove-from-cart';

export function CartInfo({ cartItem }: { cartItem: CartItem }) {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{cartItem.name}</h3>
        <RemoveFromCart inventoryId={cartItem.id} />
      </div>
      <h4 className="text-sm">{cartItem.color}</h4>
      <h4 className="text-sm">{cartItem.size}</h4>
      <h4 className="text-sm">
        <Price amount={String(cartItem.price)} />
      </h4>
    </div>
  );
}
