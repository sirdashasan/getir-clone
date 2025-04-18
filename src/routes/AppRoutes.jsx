import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";


import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import GetirYemek from "../pages/GetirYemek";
import GetirBuyuk from "../pages/GetirBuyuk";
import GetirSu from "../pages/GetirSu";
import GetirCarsi from "../pages/GetirCarsi";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/kategori/:slug"
          element={
            <Layout>
              <CategoryPage />
            </Layout>
          }
        />
        <Route
          path="/urun/:slug"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/getiryemek"
          element={
            <Layout>
              <GetirYemek />
            </Layout>
          }
        />
        <Route
          path="/getirbuyuk"
          element={
            <Layout>
              <GetirBuyuk />
            </Layout>
          }
        />
        <Route
          path="/getirsu"
          element={
            <Layout>
              <GetirSu />
            </Layout>
          }
        />
        <Route
          path="/getircarsi"
          element={
            <Layout>
              <GetirCarsi />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
