import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categories from "../components/Categories";
import { getProducts } from "../Appwrite/categoriesController";
import { getImageUrl } from "../Appwrite/storage";
import ProductDetail from "../components/ProductDetail";

const CategoriesPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetched = await getProducts();
      const withImages = fetched.map((p) => ({
        ...p,
        image: getImageUrl(p.image),
      }));
      setProducts(withImages);
      console.log("Image test URL:", getImageUrl(fetched[0]?.image));
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filtredProducts = products.filter(
    (product) => product.categorySlug === slug
  );

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-pink-600">
        {filtredProducts[0]?.category || slug}
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : filtredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtredProducts.map((product) => (
            <Link key={product.$id} to={`/product/${product.$id}`}>
            <Categories {...product} />
            </Link>
            
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Aucun produit trouvé</p>
      )}
    </div>
  );
};

export default CategoriesPage;
