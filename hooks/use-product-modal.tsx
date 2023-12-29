import { ProductWithColor } from 'lib/api';
import { create } from 'zustand';

interface ProductModalStore {
  isOpen: boolean;
  product?: ProductWithColor;
  onOpen: (product: ProductWithColor) => void;
  onClose: () => void;
}

export const useProductModal = create<ProductModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (product: any) => set({ product, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
