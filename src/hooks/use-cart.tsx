import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type CartItem = {
  id: string; // TODO THIS IS INVENTORY ID. MAKE IT MORE OBVIOUS.
  name: string;
  slug: string;
  size?: string;
  sizeValue?: string; // TODO SHould this be named sizeSlug? Rename db col to slug? Same for colorValue -> colorSlug.
  color?: string;
  colorValue?: string;
  image?: string;
  altText?: string;
  price: number;
};

export interface CartStore {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error('Item already in cart.');
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
