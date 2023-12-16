import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/*
 * Inventory and product always exist.
 * Color and Size may not exist depending on the product.
 */
export type CartProduct = {
  inventoryId: string;
  productId: string;
  productName: string;
  productSlug: string;
  productPrice: number;
  colorId?: string;
  colorName?: string;
  colorValue?: string;
  colorImage?: string;
  colorAltText?: string;
  sizeId?: string;
  sizeName?: string;
  sizeValue?: string;
};

export interface CartStore {
  products: CartProduct[];
  addProduct: (cartProduct: CartProduct) => void;
  removeProduct: (inventoryId: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (cartProduct: CartProduct) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find((product) => product.inventoryId === cartProduct.inventoryId);

        if (existingProduct) {
          return toast.error('Item already in cart.');
        }

        set({ products: [...get().products, cartProduct] });
        toast.success('Added to cart.');
      },
      removeProduct: (inventoryId: string) => {
        set({ products: [...get().products.filter((product) => product.inventoryId !== inventoryId)] });
        toast.success('Removed from your cart.');
      },
      removeAll: () => {
        set({ products: [] });
        toast.success('Emptied your cart.');
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
