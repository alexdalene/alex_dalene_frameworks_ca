import Root from '@/routes';
import ErrorPage from '@/error-page';
import Cart from '@/routes/cart';
import Products from '@/routes/products';
import { allProductsLoader } from '@/api/loader';
import Product from '@/routes/product';
import { singleProductLoader } from '@/api/loader';
import './index.css';

import { ThemeProvider } from '@/components/theme-provider';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './routes/checkout';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: '/',
        element: <Products />,
        loader: allProductsLoader,
      },
      {
        path: 'product/:id',
        element: <Product />,
        loader: singleProductLoader,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
