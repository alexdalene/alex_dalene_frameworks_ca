import useCartStore from '@/store/store';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';

import { Link } from 'react-router-dom';

interface CartItem {
  product: {
    id: number;
    title: string;
    price: number;
    image: {
      url: string;
      alt: string;
    };
  };
  quantity: number;
}

const CartItem = (item: CartItem) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const { toast } = useToast();

  return (
    <div key={item.product.id} className="grid grid-cols-5 items-start">
      <div className="col-span-2 flex gap-4">
        <Link to={`/product/${item.product.id}`} className="h-full min-w-fit">
          <img
            src={item.product.image.url}
            alt={item.product.image.alt}
            className="aspect-square h-20 rounded-md object-cover"
          />
        </Link>
        <div>
          <h2 className="mb-2 font-bold">{item.product.title}</h2>
          <p className="text-muted-foreground">{item.product.price}</p>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-end gap-2 tabular-nums md:gap-4">
        {item.quantity > 1 ? (
          <Button
            onClick={() => decreaseQuantity(item.product)}
            variant="outline"
            size="sm"
          >
            -
          </Button>
        ) : (
          <Button disabled variant="outline" size="sm">
            -
          </Button>
        )}
        <p>{item.quantity}</p>
        <Button
          onClick={() => increaseQuantity(item.product)}
          variant="outline"
          size="sm"
        >
          +
        </Button>
      </div>
      <div className="flex justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  removeFromCart(item.product);
                  toast({
                    title: 'Removed from cart.',
                    description: `${item.product.title} has been removed from your cart.`,
                  });
                }}
                variant="outline"
                className="w-fit"
              >
                x
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove from cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default CartItem;
