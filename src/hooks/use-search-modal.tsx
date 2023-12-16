import { create } from 'zustand';

interface SearchModalStore {
  isOpen: boolean;
  data?: any;
  onOpen: (data: any) => void;
  onClose: () => void;
}

export const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: any) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
