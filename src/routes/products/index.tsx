import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';

import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

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

const Products = () => {
  const { data } = useLoaderData() as { data: Array<Product> };
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    document.title = 'Home | E-commerce';
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredData(data);
      return;
    }

    setFilteredData(
      data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, data]);

  return (
    <>
      <div className="px-2 md:px-0">
        <Input
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 md:px-0">
        {filteredData?.length === 0 ? <p>No products found.</p> : null}
        {filteredData?.map((product: Product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
