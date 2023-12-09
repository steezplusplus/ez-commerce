'use client';

import { X } from 'lucide-react';

import { Button } from 'components/ui/button';
import { useCart } from 'hooks/use-cart';

type RemoveFromCartProps = {
  inventoryId: string;
};

export function RemoveFromCart(props: RemoveFromCartProps) {
  const { inventoryId } = props;
  const cart = useCart();

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cart.removeItem(inventoryId);
  };

  return (
    <Button className="px-1 py-1" onClick={(e) => removeFromCart(e)}>
      <X size="18" />
    </Button>
  );
}
