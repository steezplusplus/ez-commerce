'use client';

import { Modal } from 'components/ui/modal';
import { useProductModal } from 'hooks/use-product-modal';

export function ProductModal() {
  const productModal = useProductModal();
  const productData = useProductModal((state) => state.data);

  if (!productData) {
    return null;
  }

  return (
    <Modal open={productModal.isOpen} onClose={productModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <p>images</p>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <p>Product info</p>
        </div>
      </div>
    </Modal>
  );
}
