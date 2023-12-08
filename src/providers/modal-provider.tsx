'use client';

import { useEffect, useState } from 'react';

import { PreviewModal } from 'components/ui/modal/preview-modal';
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
      <PreviewModal />
      <SearchModal />
    </>
  );
}
