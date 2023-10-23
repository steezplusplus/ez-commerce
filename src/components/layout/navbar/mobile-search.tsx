'use client';

import { useRef } from 'react';

import { AlignCenter, X } from 'lucide-react';
import { Search } from './search';

export function MobileSearch() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const labelId = 'mobile-search-label';
  const descriptionId = 'mobile-search-description';

  const showModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.showModal();
    }
  };

  const closeModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.close();
    }
  };

  return (
    <>
      <button onClick={showModalDialog} className="mr-2 rounded-md border p-2">
        <AlignCenter size="18" />
      </button>
      <dialog
        onKeyDown={(e) => e.key === 'Enter' && closeModalDialog}
        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="rounded-lg border p-2"
      >
        <div className="mb-2 flex justify-between">
          <h3 className="text-lg">Search products</h3>
          <button onClick={closeModalDialog} className="rounded-md border border-neutral-800 p-1">
            <X size="16" />
          </button>
        </div>
        <Search dialogRef={modaDialogRef} />
      </dialog>
    </>
  );
}
