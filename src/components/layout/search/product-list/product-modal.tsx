'use client';

import Link from 'next/link';

import { Gallery } from 'components/ui/gallery';
import { Modal } from 'components/ui/modal';
import { Price } from 'components/ui/price';
import { useProductModal } from 'hooks/use-product-modal';
import { ProductWithColor } from 'lib/api';

// TODO place of link. Styling of price. Make second col its own component.
export function ProductModal() {
  const productModal = useProductModal();
  const productData = productModal.product;

  if (!productData) {
    return null;
  }

  return (
    <Modal open={productModal.isOpen} onClose={productModal.onClose} title={productData.name}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery colors={productData.colors} />
        </div>
        <div className="h-full sm:col-span-8 lg:col-span-7">
          <ProductModalInfo product={productData} onClose={productModal.onClose} />
        </div>
      </div>
    </Modal>
  );
}

function ProductModalInfo({ product, onClose }: { product: ProductWithColor; onClose: () => void }) {
  return (
    <div className="flex h-full flex-col gap-y-4">
      <h4>{product.description}</h4>
      <h4>
        <Price amount={String(product.price)} />
      </h4>
      <Link
        className=" 
          flex
          items-center
          justify-center
          rounded-md
          border
          border-neutral-200
          bg-white
          p-2
          transition
          hover:opacity-75
          dark:border-neutral-800
          dark:bg-transparent
        "
        href={`/product/${product.slug}`}
        onClick={() => onClose()}
      >
        Go to product page
      </Link>
    </div>
  );
}
