import Header from "@/components/Header";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <main className="mx-auto grid w-full max-w-3xl place-content-center py-20">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
