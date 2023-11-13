import { X } from 'lucide-react';

type ModalProps = {
  modalDialogRef: React.RefObject<HTMLDialogElement>;
  labelId: string;
  descriptionId: string;
  title: string;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const closeModalDialog = () => {
    if (props.modalDialogRef.current) {
      props.modalDialogRef.current.close();
    }
  };

  return (
    <dialog
      ref={props.modalDialogRef}
      aria-labelledby={props.labelId}
      aria-describedby={props.descriptionId}
      autoFocus
      className="w-1/2 rounded-lg border border-neutral-200 px-4 py-2 dark:border-neutral-800"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg">{props.title}</h3>
        <button onClick={closeModalDialog} className="rounded-md border border-neutral-200 p-1 dark:border-neutral-800">
          <X size="16" />
        </button>
      </div>
      {props.children}
    </dialog>
  );
}
