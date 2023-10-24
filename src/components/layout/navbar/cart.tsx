'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Grid, GridItem } from 'components/grid/grid';
import { Modal } from 'components/modal/modal';
import { Price } from 'components/price/price';
import { useCart } from 'hooks/use-cart';
import { ShoppingCart, X } from 'lucide-react';

export function Cart() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const labelId = 'cart-label'; // TODO
  const descriptionId = 'cart-description'; // TODO

  const showModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.showModal();
    }
  };

  const closeModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.close();
    }
  };

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={showModalDialog}
        className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
      >
        <ShoppingCart size="18" />
      </button>
      <Modal
        modalDialogRef={modaDialogRef}
        labelId={labelId}
        descriptionId={descriptionId}
        title="Cart"
      >
        <ProductList />
        <Link
          href="/checkout"
          className="mt-4 flex w-full justify-center rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800"
          onClick={closeModalDialog}
        >
          Check out
        </Link>
      </Modal>
    </>
  );
}

function ProductList() {
  const cartItems = useCart((cart) => cart.items);
  const cart = useCart();

  const onRemove = (productId: string) => {
    cart.removeItem(productId);
  };

  if (cartItems.length === 0) {
    return <p>No products have been added to your cart</p>;
  }

  return (
    <>
      <Grid>
        {cartItems.map((product) => {
          return (
            <GridItem key={product.id}>
              <div className="flex items-center justify-between">
                {product.name}
                <button
                  onClick={() => onRemove(product.id)}
                  className="rounded-md border border-neutral-200 p-1 dark:border-neutral-800"
                >
                  <X size="12" />
                </button>
              </div>
              <Price amount={String(product.price)} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
