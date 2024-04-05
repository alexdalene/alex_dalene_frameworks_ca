interface Product {
  id: number;
  title: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

interface cartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: cartItem[];
}

export const addToCart = (item: Product) => (state: CartState) => {
  const itemExists = state.items.find((i) => i.product.id === item.id);

  if (itemExists) {
    return {
      items: state.items.map((i) =>
        i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    };
  } else {
    return {
      items: [...state.items, { product: item, quantity: 1 }],
    };
  }
};

export const removeFromCart = (item: Product) => (state: CartState) => ({
  items: state.items.filter((i) => i.product.id !== item.id),
});

export const clearCart = () => (state: CartState) => ({
  items: (state.items = []),
});

export const increaseQuantity = (item: Product) => (state: CartState) => ({
  items: state.items.map((i) =>
    i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
  ),
});

export const decreaseQuantity = (item: Product) => (state: CartState) => {
  return {
    items: state.items.map((i) =>
      i.product.id === item.id && i.quantity > 1
        ? { ...i, quantity: i.quantity - 1 }
        : i,
    ),
  };
};
