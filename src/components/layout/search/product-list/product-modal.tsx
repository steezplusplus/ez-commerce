'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Tab } from '@headlessui/react';
import { Color } from '@prisma/client';
import { Modal } from 'components/ui/modal';
import { Price } from 'components/ui/price';
import { useProductModal } from 'hooks/use-product-modal';

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
          <Gallery name={productData.name} images={productData.colors} />
        </div>

        <div className="space-y-4 sm:col-span-8 lg:col-span-7">
          <h4>{productData.description}</h4>
          <h4>
            <Price amount={String(productData.price)} />
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
            href={`/product/${productData.slug}`}
            onClick={() => productModal.onClose()}
          >
            Go to product page
          </Link>
        </div>
      </div>
    </Modal>
  );
}

type GalleryProps = {
  images: Color[];
  name: string;
};

export function Gallery(props: GalleryProps) {
  const { images, name } = props;
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} name={name} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={image.image}
                alt={image.altText}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

type GalleryTabProps = {
  image: Color;
  name: string;
};

function GalleryTab(props: GalleryTabProps) {
  const { image, name } = props;
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              fill
              src={image.image}
              alt={image.altText}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 20vw"
            />
          </span>
          <span
            className={`
              absolute inset-0 rounded-md ring-2 ring-offset-2
              ${selected ? 'ring-black' : 'ring-transparent'}
            `}
          />
        </div>
      )}
    </Tab>
  );
}
