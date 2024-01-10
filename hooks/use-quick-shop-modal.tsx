import { create } from 'zustand';

import { ProductWithColor } from '@/lib/api';

interface QuickShopStore {
  isOpen: boolean;
  product?: ProductWithColor;
  onOpen: (product: ProductWithColor) => void;
  onClose: () => void;
}

export const useQuickShop = create<QuickShopStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (product: any) => set({ product, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
