'use client';

import { ProductSearch } from 'components/navbar/product-search';
import { useSearchModal } from 'hooks/use-search-modal';
import { Modal } from './index';

export function SearchModal() {
  const searchModal = useSearchModal();
  const data = useSearchModal((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Modal open={searchModal.isOpen} onClose={searchModal.onClose}>
      <div className="flex w-full flex-col justify-center">
        <h3 className="mb-2 text-lg">Search products</h3>
        <ProductSearch callback={searchModal.onClose} />
      </div>
    </Modal>
  );
}
