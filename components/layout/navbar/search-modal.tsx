'use client';

import { useSearchModal } from '../../../hooks/use-search-modal';
import { Modal } from '../../ui/modal';
import { ProductSearch } from './product-search';

export function SearchModal() {
  const searchModal = useSearchModal();
  const data = useSearchModal((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Modal open={searchModal.isOpen} onClose={searchModal.onClose} title="Search products">
      <div className="mt-4 flex w-full flex-col justify-center">
        <ProductSearch callback={searchModal.onClose} />
      </div>
    </Modal>
  );
}
