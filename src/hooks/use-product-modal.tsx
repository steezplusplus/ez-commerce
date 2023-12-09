import { create } from 'zustand';

// TODO Replace `any`
interface ProductModalStore {
  isOpen: boolean;
  data?: any;
  onOpen: (data: any) => void;
  onClose: () => void;
}

export const useProductModal = create<ProductModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: any) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
