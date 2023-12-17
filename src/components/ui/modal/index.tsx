'use client';

import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Fragment } from 'react';

type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const { title, open, onClose, children } = props;

  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div
            className="
              flex
              min-h-full
              items-center
              justify-center
              p-4
              text-center
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="
                  w-full
                  max-w-3xl
                  overflow-hidden
                  rounded-lg
                  text-left
                  align-middle
                "
              >
                <div
                  className="
                    relative
                    w-full
                    items-center
                    overflow-hidden
                    bg-neutral-50
                    px-4
                    pb-8
                    pt-14
                    shadow-2xl
                    dark:bg-neutral-900
                    sm:px-6
                    sm:pt-8
                    md:p-6
                    lg:p-8
                  "
                >
                  <div className="mb-4 flex items-center">
                    <h2 className="text-4xl font-semibold">{title}</h2>
                    <ModalCloseButton handleClose={onClose} />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function ModalCloseButton({ handleClose }: { handleClose: () => void }) {
  return (
    <button
      className="
        ml-auto
        rounded-md
        border
        border-neutral-200
        px-1
        py-1
        transition
        hover:opacity-75
        dark:border-neutral-800
      "
      onClick={handleClose}
    >
      <X size={16} />
    </button>
  );
}
