import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Appwrite/categoriesController";
import { getImageUrl } from "../Appwrite/storage";
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = await getProducts();
      const found = allProducts.find((p) => p.$id === productId);
      if (found) {
        setProduct({ ...found, image: getImageUrl(found.image) });
      }
    };
    fetchProduct();
  }, [productId]);

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
