'use client';

import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

// import { useCart } from 'hooks/use-cart';
import { IconButton } from 'components/ui/icon-button';
import { usePreviewModal } from 'hooks/use-preview-modal';

export function ProductImage({ image, altText }: { image: string; altText: string }) {
  const previewModal = usePreviewModal();
  // const cart = useCart();

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    previewModal.onOpen([]); // TODO Pass data to modal.
  };

  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // cart.addItem([]); // TODO Add item to cart.
  };

  return (
    <div
      className="
        relative aspect-square rounded-md 
        bg-gray-100 dark:bg-gray-700
      "
    >
      <Image
        fill
        alt={altText}
        src={image}
        className="aspect-square rounded-md object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100 ">
        <div className="flex justify-center gap-x-6">
          <IconButton onClick={onPreview} icon={<Expand size={16} className="text-gray-900" />} />
          <IconButton onClick={onAdd} icon={<ShoppingCart size={16} className="text-gray-900" />} />
        </div>
      </div>
    </div>
  );
}
