'use client';

import { useEffect, useState } from 'react';

import { ProductModal } from 'components/layout/search/product-list/product-modal';
import { SearchModal } from 'components/ui/modal/search-modal';

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProductModal />
      <SearchModal />
    </>
  );
}
