'use client';

import { useEffect, useState } from 'react';

import { RemoveFromCart } from 'components/checkout/remove-from-cart';
import { Container } from 'components/ui/container';
import { useCart } from 'hooks/use-cart';

// TODO Footer cannot exist inside client component.
export default function CheckoutPage() {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Container className="px-4">
        <div className="mb-8 space-y-4 px-4">
          <h2 className="text-4xl font-semibold">Checkout</h2>
          <ul>
            {cart.items.map((item) => {
              return (
                <li key={`${item.productId}-${item.sizeId}-${item.colorId}`} className="border">
                  <p>{item.productId}</p>
                  <p>{item.colorId}</p>
                  <p>{item.sizeId}</p>
                  <RemoveFromCart inventoryId={item.id} />
                </li>
              );
            })}
          </ul>
          <button className="w-full rounded-sm border p-2">Purchase</button>
        </div>
      </Container>
      {/* <Suspense>
        <Footer />
      </Suspense> */}
    </>
  );
}
