import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Trash } from "lucide-react";

import { deleteProducts, getProducts } from "../Appwrite/categoriesController";
import { getImageUrl } from "../Appwrite/storage";

const ProoductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetched = await getProducts();
      const withImages = fetched.map((p) => ({
        ...p,
        image: getImageUrl(p.image),
      }));
      setProducts(withImages);
    };
    fetchProducts();
  }, []);

  const handleDelete = async(id)=>{
    if(window.confirm("Voulez-vous vraiment supprimer ce produit? ")){
        const success = await deleteProducts(id)
        if(success) {
            setProducts((prev)=> prev.filter((p)=> p.$id !== id))
        } 
    }
  }

  return (
    <motion.div
      className="bb-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Category
              </th>
              {/* <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              In Stock
            </th> */}

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {products.map((product) => (
              <tr key={product.$id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    ${product.price}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    ${product.category}
                  </div>
                </td>

                {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">${product.InStock}</div>
              </td> */}

                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(product.$id)}
                    className="text-red-400 hover-text-red-300"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
           {products.map((product) => (
  <div key={product._id} className="bg-gray-800 p-4 rounded-lg mb-4 sm:hidden">
    <div className="flex items-center">
      <img className="h-10 w-10 rounded-full object-cover" src={product.image} />
      <div className="ml-4">
        <p className="text-white font-medium">{product.name}</p>
        <p className="text-gray-300">${product.price}</p>
        <p className="text-gray-300">{product.category}</p>
      </div>
    </div>
    <div className="mt-2 flex justify-between">
      <button onClick={() => toggleFeaturedProduct(product._id)}>
        <Star />
      </button>
      <button onClick={() => deleteProduct(product._id)}>
        <Trash />
      </button>
    </div>
  </div>
))}
    </motion.div>
  );
};

export default ProoductList;
