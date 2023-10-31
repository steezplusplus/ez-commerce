'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { RemoveFromCart } from 'components/checkout/remove-from-cart';
import { Grid, GridItem } from 'components/ui/grid';
import { Modal } from 'components/ui/modal';
import { Price } from 'components/ui/price';
import { CartStore, useCart } from 'hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

export function CartModal() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const labelId = 'cart-label'; // TODO
  const descriptionId = 'cart-description'; // TODO

  const showModal = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.close();
    }
  };

  return (
    <>
      <button
        className="flex items-center rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
        onClick={showModal}
      >
        <ShoppingCart size="18" />
        <span className="ml-2 text-sm font-medium dark:text-white">{cart.items.length}</span>
      </button>
      <Modal
        modalDialogRef={modaDialogRef}
        labelId={labelId}
        descriptionId={descriptionId}
        title="Cart"
      >
        <ProductList cart={cart} />
        <Link
          href="/checkout"
          className="mt-4 flex w-full justify-center rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800"
          onClick={closeModal}
        >
          Check out
        </Link>
      </Modal>
    </>
  );
}

type ProductListProps = {
  cart: CartStore;
};
function ProductList(props: ProductListProps) {
  const { cart } = props;

  if (cart.items.length === 0) {
    return <p>No products have been added to your cart</p>;
  }

  return (
    <>
      <Grid>
        {cart.items.map((item) => {
          return (
            <GridItem key={item.product.id}>
              <div className="flex items-center justify-between">
                <p>{item.product.name}</p>
                <RemoveFromCart product={item.product} />
              </div>
              <p>{item.size}</p>
              <p>{item.color}</p>
              <Price amount={String(item.product.price)} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
