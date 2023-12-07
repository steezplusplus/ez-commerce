'use client';

import { Toaster } from 'react-hot-toast';

const className =
  '!text-sm !border !rounded-lg !border-neutral-200 !text-black dark:!border-neutral-800 dark:!bg-neutral-600 dark:!text-white';

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: className,
      }}
    />
  );
}
