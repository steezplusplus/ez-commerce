'use client';

import { Modal } from 'components/ui/modal';
import { Price } from 'components/ui/price';
import { useProductModal } from 'hooks/use-product-modal';
import Image from 'next/image';

export function ProductModal() {
  const productModal = useProductModal();
  const productData = productModal.product;
  const colors = productData?.colors;

  if (!productData) {
    return null;
  }

  return (
    <Modal open={productModal.isOpen} onClose={productModal.onClose} title={productData.name}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          {colors?.map((color) => {
            return (
              <div key={color.id} className="relative mr-2 h-24 w-24 rounded-md sm:h-48 sm:w-48">
                <Image fill src={color.image} alt={color.altText} className="object-cover object-center" sizes="30vw" />
              </div>
            );
          })}
        </div>

        <div className="space-y-4 sm:col-span-8 lg:col-span-7">
          <h4>{productData.description}</h4>
          <h4>
            <Price amount={String(productData.price)} />
          </h4>
        </div>
      </div>
    </Modal>
  );
}
