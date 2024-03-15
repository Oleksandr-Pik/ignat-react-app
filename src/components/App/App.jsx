import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import './App.scss';
import NotFound from "../NotFound/NotFound";

const MainPage = lazy(() => import("../../pages/MainPage"));
const ProductPage = lazy(() => import("../../pages/ProductPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
