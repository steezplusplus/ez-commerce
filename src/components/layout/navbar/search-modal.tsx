'use client';

import { ProductSearch } from 'components/layout/navbar/product-search';
import { Modal } from 'components/ui/modal';
import { useSearchModal } from 'hooks/use-search-modal';

export function SearchModal() {
  const searchModal = useSearchModal();
  const data = useSearchModal((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Modal open={searchModal.isOpen} onClose={searchModal.onClose} title="Search products">
      <div className="flex w-full flex-col justify-center">
        <ProductSearch callback={searchModal.onClose} />
      </div>
    </Modal>
  );
}
