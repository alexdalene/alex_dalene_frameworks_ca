import { Link } from 'react-router-dom';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import useCartStore from '@/store/store';

const Checkout = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    document.title = 'Checkout | E-commerce';

    setTimeout(() => {
      clearCart();
    }, 500);
  });

  return (
    <div className="grid place-content-center px-2 md:px-0">
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Thank your for your purchase!</CardTitle>
          <CardDescription className="max-w-md">
            The order is on its way. In the meantime, feel free to browse our
            products and find your next favorite item.
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-center">
          <Link to="/">
            <Button>Browse</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
