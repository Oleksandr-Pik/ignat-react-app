import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <p>logo</p>
        <h1>Header</h1>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default SharedLayout;
