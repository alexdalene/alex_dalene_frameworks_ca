import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as actions from './actions';

const initialState = {
  items: [],
};

interface CartStore {
  items: {
    product: { id: number; name: string; price: number };
    quantity: number;
  }[];
  addToCart: (item: { id: number; name: string; price: number }) => void;
  removeFromCart: (item: { id: number; name: string; price: number }) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      ...initialState,
      addToCart: (item) => set(actions.addToCart(item)),
      removeFromCart: (item) => set(actions.removeFromCart(item)),
      clearCart: () => set(actions.clearCart()),
    }),
    {
      name: 'cartStore',
    }
  )
);

export default useCartStore;
