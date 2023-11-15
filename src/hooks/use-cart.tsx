import { Inventory } from '@prisma/client';
import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface CartStore {
  items: Inventory[];
  addItem: (data: Inventory) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Inventory) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Item already in cart.');
        }

        set({ items: [...get().items, data] });
        toast.success('Added to cart.');
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success('Removed from your cart.');
      },
      removeAll: () => {
        set({ items: [] });
        toast.success('Emptied your cart.');
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
