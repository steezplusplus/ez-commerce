'use client';

import { useEffect, useState } from 'react';

import { SearchModal } from '@/components/layout/navbar/search-modal';
import { QuickShopModal } from '@/components/quick-shop/quick-shop-modal';

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
      <QuickShopModal />
      <SearchModal />
    </>
  );
}
