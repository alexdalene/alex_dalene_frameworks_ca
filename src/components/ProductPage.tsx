import useCartStore from '@/store/store';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Star } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  reviews: [Review];
}

interface Review {
  id: number;
  username: string;
  description: string;
  rating: number;
}

const ProductPage = (data: Product) => {
  const { toast } = useToast();

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-0">
      <img
        src={data.image.url}
        alt={data.image.alt}
        className="aspect-square w-full rounded-md object-cover"
      />

      <div className="sticky top-0 h-fit">
        <div className="mb-6">
          <h1 className="text-lg font-bold">{data.title}</h1>
          <p className="text-muted-foreground">{data.description}</p>
          {data.rating === 0 ? (
            <span className="invisible mt-6 text-sm">No rating</span>
          ) : (
            <div className="mt-6 flex">
              {Array.from({ length: Math.round(data.rating) }).map(
                (_, index) => (
                  <span key={index}>
                    <Star className="w-5 fill-muted-foreground stroke-none" />
                  </span>
                ),
              )}
              {Array.from({ length: 5 - Math.round(data.rating) }).map(
                (_, index) => (
                  <span key={index}>
                    <Star className=" w-5 fill-muted stroke-none" />
                  </span>
                ),
              )}
            </div>
          )}
        </div>

        <div className="relative flex justify-between">
          {data.discountedPrice < data.price ? (
            <div className="text-lg font-bold">
              <p className="text-xs font-normal text-muted-foreground">
                BEFORE {data.price}
              </p>
              <p>NOW {data.discountedPrice}</p>
            </div>
          ) : (
            <div className="flex items-end">
              <p className="text-lg font-bold">{data.price}</p>
            </div>
          )}
          <Button
            onClick={() => {
              addToCart(data);
              toast({
                title: 'Added to cart.',
                description: `${data.title} has been added to your cart.`,
              });
            }}
          >
            Add to cart
          </Button>
        </div>

        <div>
          <ul className="mt-6">
            {data.reviews.map((review: Review) => (
              <Card key={review.id} className="mb-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">{review.username}</CardTitle>
                  <CardDescription>{review.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {data.rating === 0 ? (
                    <span className="invisible text-sm">No rating</span>
                  ) : (
                    <div className=" flex">
                      {Array.from({ length: Math.round(data.rating) }).map(
                        (_, index) => (
                          <span key={index}>
                            <Star className="w-5 fill-muted-foreground stroke-none" />
                          </span>
                        ),
                      )}
                      {Array.from({ length: 5 - Math.round(data.rating) }).map(
                        (_, index) => (
                          <span key={index}>
                            <Star className="w-5 fill-muted stroke-none" />
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
