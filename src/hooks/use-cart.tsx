import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Item = {
  size: string | null;
  color: string | null;
  id: string;
};

export interface CartStore {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items;
        const isDuplicate = currentItems.find((currentItem) => currentItem.id === item.id);

        if (isDuplicate) {
          return toast.error('This product is already in your cart.');
        }

        set({ items: [...get().items, item] });
        toast.success('Added to cart.');
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((currentItem) => currentItem.id !== id)] });
        toast.success('Removed from your cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
