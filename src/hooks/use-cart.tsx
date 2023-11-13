import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Item = {
  sizeId: string | null;
  colorId: string | null;
  productId: string;
};

export interface CartStore {
  items: Item[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  removeAll: () => void;
}

// TODO finish cart after inventory.
export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (productId: string) => {
        // set({ items: [...get().items, TODO ] });
        // toast.success('Added to cart.');
      },
      removeItem: (productId: string) => {
        // set({ items: [...get().items.filter((currentItem) => currentItem.productId !== productId)] });
        // toast.success('Removed from your cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
