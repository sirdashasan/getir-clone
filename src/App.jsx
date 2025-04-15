import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./layouts/Layout";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
