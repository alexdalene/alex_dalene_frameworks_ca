import useCartStore from '@/store/store';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = () => {
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    document.title = 'Cart | E-commerce';
  }, []);

  const total = items.reduce((acc, item) => {
    const price = acc + item.product.price * item.quantity;

    return Math.round(price * 100) / 100;
  }, 0);

  return (
    <div className="flex w-full flex-col gap-8 px-2 md:px-0">
      <h1 className="text-lg font-bold">Your cart</h1>
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item.product.id} {...item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="flex items-end justify-between">
        <p>
          <span className="text-xs text-muted-foreground">TOTAL </span> {total}
        </p>
        {items.length > 0 && (
          <div>
            <Button
              onClick={() => useCartStore.getState().clearCart()}
              variant="outline"
            >
              Clear cart
            </Button>
            <Button className="ml-4">
              <Link to={`/checkout`}>Checkout</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
