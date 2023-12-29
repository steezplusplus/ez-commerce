'use client';

import { useProductModal } from '../../../../hooks/use-product-modal';
import { ProductWithColor } from '../../../../lib/api';
import { Button } from '../../../ui/button';

export function ProductModalDisclosure({ product }: { product: ProductWithColor }) {
  const productModal = useProductModal();

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    productModal.onOpen(product);
  };

  return (
    <Button
      className="
        w-full 
        bg-neutral-100
        text-neutral-600
        hover:underline
        hover:opacity-75
        dark:bg-neutral-800
        dark:text-neutral-200 
      "
      onClick={onPreview}
    >
      Quick Shop
    </Button>
  );
}
