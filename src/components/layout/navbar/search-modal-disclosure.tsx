'use client';

import { SearchIcon } from 'lucide-react';

import { Button } from 'components/ui/button';
import { useSearchModal } from 'hooks/use-search-modal';

export function SearchModalDisclosure() {
  const searchModal = useSearchModal();

  const onMobileSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchModal.onOpen([]); // TODO Pass data to modal.
  };

  return (
    <Button onClick={onMobileSearch} className="px-2 py-2">
      <SearchIcon size="18" />
    </Button>
  );
}
