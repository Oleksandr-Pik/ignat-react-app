import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
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
