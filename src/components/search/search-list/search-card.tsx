import { Expand } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Price } from 'components/ui/price';
import { usePreviewModal } from 'hooks/use-preview-modal';
import { Product } from 'lib/types';

export function SearchCard({ product }: { product: Product }) {
  const { id, name, slug, handle, image, altText, price } = product;

  const href = `/product/${slug}?color=${handle}`;

  return (
    <li key={id} className="group">
      <Link href={href} className="h-full w-full">
        <SearchCardImage altText={altText} image={image} />
        <SearchCardInfo name={name} price={price} />
      </Link>
    </li>
  );
}

function SearchCardImage({ image, altText }: { image: string; altText: string }) {
  'use client';
  const previewModal = usePreviewModal();

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    previewModal.onOpen([]);
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
          <button onClick={onPreview}>
            <Expand size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SearchCardInfo({ name, price }: { name: string; price: number }) {
  return (
    <div>
      <p className="text-lg font-semibold group-hover:underline">{name}</p>
      <span className="text-sm text-gray-500">
        <Price amount={String(price)} />
      </span>
    </div>
  );
}
