'use client';

import { useEffect, useState } from 'react';

import { SearchModal } from '../components/layout/navbar/search-modal';
import { ProductModal } from '../components/layout/search/product-list/product-modal';

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
