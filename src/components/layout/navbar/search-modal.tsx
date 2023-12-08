// 'use client';

// import { useRef } from 'react';

// import { SearchIcon, X } from 'lucide-react';
// import { Search } from './search';

// // TODO Replace Modal
// export function SearchModal() {
//   const modaDialogRef = useRef<HTMLDialogElement>(null);
//   const labelId = 'mobile-search-label';

//   const showModalDialog = () => {
//     if (modaDialogRef.current) {
//       modaDialogRef.current.showModal();
//     }
//   };

//   const closeModalDialog = () => {
//     if (modaDialogRef.current) {
//       modaDialogRef.current.close();
//     }
//   };

//   return (
//     <>
//       <button onClick={showModalDialog} className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
//         <SearchIcon size="18" />
//       </button>
//       <dialog
//         onKeyDown={(e) => e.key === 'Enter' && closeModalDialog}
//         ref={modaDialogRef}
//         aria-labelledby={labelId}
//         autoFocus
//         className="rounded-lg border border-neutral-200 p-2 dark:border-neutral-800"
//       >
//         <div className="mb-2 flex items-center justify-between">
//           <h3 id={labelId} className="text-lg">
//             Search products
//           </h3>
//           <button
//             onClick={closeModalDialog}
//             className="rounded-md border border-neutral-200 p-1 dark:border-neutral-800"
//           >
//             <X size="16" />
//           </button>
//         </div>
//         <Search dialogRef={modaDialogRef} />
//       </dialog>
//     </>
//   );
// }
