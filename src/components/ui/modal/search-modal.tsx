'use client';

import { SearchIcon } from 'lucide-react';

import { Search } from 'components/layout/navbar/search';
import { useSearchModal } from 'hooks/use-search-modal';
import { Modal } from './index';

export function SearchModalDisclosure() {
  const searchModal = useSearchModal();

  const onMobileSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchModal.onOpen([]); // TODO Pass data to modal.
  };

  return (
    <button onClick={onMobileSearch} className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
      <SearchIcon size="18" />
    </button>
  );
}

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
        <Search onSearch={searchModal.onClose} />
      </div>
    </Modal>
  );
}
