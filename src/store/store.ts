import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as actions from './actions';

const initialState = {
  items: [],
};

interface CartStore {
  items: {
    product: {
      image: { url: string; alt: string };
      id: number;
      title: string;
      price: number;
    };
    quantity: number;
  }[];
  addToCart: (item: {
    id: number;
    title: string;
    price: number;
    image: { url: string; alt: string };
  }) => void;
  removeFromCart: (item: {
    id: number;
    title: string;
    price: number;
    image: { url: string; alt: string };
  }) => void;
  clearCart: () => void;
  increaseQuantity: (item: {
    id: number;
    title: string;
    price: number;
    image: { url: string; alt: string };
  }) => void;
  decreaseQuantity: (item: {
    id: number;
    title: string;
    price: number;
    image: { url: string; alt: string };
  }) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      ...initialState,
      addToCart: (item) => set(actions.addToCart(item)),
      removeFromCart: (item) => set(actions.removeFromCart(item)),
      clearCart: () => set(actions.clearCart()),
      increaseQuantity: (item) => set(actions.increaseQuantity(item)),
      decreaseQuantity: (item) => set(actions.decreaseQuantity(item)),
    }),
    {
      name: 'cartStore',
    },
  ),
);

export default useCartStore;
