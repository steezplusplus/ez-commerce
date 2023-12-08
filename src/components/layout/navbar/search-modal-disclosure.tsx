'use client';

import { SearchIcon } from 'lucide-react';

import { useSearchModal } from 'hooks/use-search-modal';

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
