'use client';

import { Button } from 'components/ui/button';
import { useProductModal } from 'hooks/use-product-modal';

export function ProductModalDisclosure() {
  const productModal = useProductModal();

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    productModal.onOpen([]); // TODO Pass product data to the modal.
  };

  return (
    <Button className="w-full hover:underline" onClick={onPreview}>
      Quick Shop
    </Button>
  );
}
