import ProductCard from '@/components/ProductCard';
import { useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

document.title = 'Home | E-commerce';

const Products = () => {
  const { data } = useLoaderData() as { data: Array<Product> };

  useEffect(() => {
    document.title = 'Home | E-commerce';
  }, []);

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

  return (
    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 md:px-0">
      {data?.map((product: Product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
