import { useLoaderData } from 'react-router-dom';

const Product = () => {
  const { data } = useLoaderData() as { data: Product };
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

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.rating}</p>
      <p>{data.price}</p>
      <p>{data.discountedPrice}</p>
      <img src={data.image.url} alt={data.image.alt} />
    </div>
  );
};

export default Product;
