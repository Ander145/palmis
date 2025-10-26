import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CategoriesPage from "./pages/CategoriesPage";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Footer from "./sections/Footer";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminLogin from "./components/AdminLogin";
import AdminRoute from "./components/AdminToute";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        {/* Page d'accueil avec sections */}
        <Route
          path="/"
          element={
            <>
              <section className="min-h-screen" id="home">
                <Home />
              </section>
              <section className="min-h-screen" id="contact">
                <Contact />
              </section>
            </>
          }
        />

        {/* Page catégorie dynamique */}
        <Route path="/categories/:slug" element={<CategoriesPage />} />

        {/* Page admin seule */}

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
