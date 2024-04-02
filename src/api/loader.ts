import { LoaderFunctionArgs } from 'react-router-dom';

export const singleProductLoader = async ({ params }: LoaderFunctionArgs) => {
  return fetch('https://v2.api.noroff.dev/online-shop/' + params.id);
};

export const allProductsLoader = async () => {
  return fetch('https://v2.api.noroff.dev/online-shop');
};
