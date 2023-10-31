import { Product } from '@prisma/client';
import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CartProduct = {
  size: string | null;
  color: string | null;
  product: Product;
};

export interface CartStore {
  items: CartProduct[];
  addItem: (product: Product, color: string | null, size: string | null) => void;
  removeItem: (product: Product) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: Product, color: string | null, size: string | null) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === product.id);

        if (existingItem) {
          return toast.error(`${product.name} is already in your cart.`);
        }

        set({ items: [...get().items, { product, color, size }] });
        toast.success(`${product.name} added to cart.`);
      },
      removeItem: (product: Product) => {
        set({ items: [...get().items.filter((item) => item.product.id !== product.id)] });
        toast.success(`${product.name} removed from your cart.`);
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
