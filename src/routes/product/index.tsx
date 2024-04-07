import ProductPage from '@/components/ProductPage';

import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

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

const Product = () => {
  const { data } = useLoaderData() as { data: Product };

  useEffect(() => {
    document.title = `${data.title} | E-commerce`;
  }, [data.title]);

  return <ProductPage {...data} />;
};

export default Product;
