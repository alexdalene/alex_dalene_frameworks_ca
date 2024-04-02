import { Link, useLoaderData } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star } from 'lucide-react';

const Products = () => {
  const { data } = useLoaderData() as { data: Array<Product> };
  console.log(data);

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
  }

  const calculateDiscount = (price: number, discountedPrice: number) => {
    const difference = price - discountedPrice;
    const percentage = (difference / price) * 100;

    return Math.round(percentage);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {data?.map((product: Product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Card className="group flex flex-col justify-between overflow-hidden">
            <CardContent className="relative px-0">
              {product.discountedPrice < product.price && (
                <span className="absolute right-0 top-0 rounded-bl-lg bg-background px-2 py-1 text-sm font-bold text-primary">
                  -{calculateDiscount(product.price, product.discountedPrice)}%
                </span>
              )}
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="h-48 w-full rounded-lg rounded-b-none object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="line-clamp-1">{product.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="relative flex-col items-start gap-6">
              {product.rating === 0 ? (
                <span className="invisible text-sm">No rating</span>
              ) : (
                <div className="flex">
                  {Array.from({ length: Math.round(product.rating) }).map(
                    (_, index) => (
                      <span key={index}>
                        <Star className="w-5 fill-muted-foreground stroke-none" />
                      </span>
                    ),
                  )}
                  {Array.from({ length: 5 - Math.round(product.rating) }).map(
                    (_, index) => (
                      <span key={index}>
                        <Star className=" w-5 fill-muted stroke-none" />
                      </span>
                    ),
                  )}
                </div>
              )}

              {product.discountedPrice < product.price ? (
                <div className="text-lg font-bold">
                  <p className="absolute top-8 text-xs font-normal text-muted-foreground">
                    BEFORE {product.price}
                  </p>
                  <p>NOW {product.discountedPrice}</p>
                </div>
              ) : (
                <p className="text-lg font-bold">{product.price}</p>
              )}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Products;
