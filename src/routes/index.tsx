import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';

import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl py-20">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};

export default Root;
