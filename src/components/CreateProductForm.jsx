import { Loader, PlusCircle, ShoppingBasket, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { addProduct } from "../Appwrite/categoriesController";
import { uploadImage } from "../Appwrite/categoriesFile";
import { categories } from "../constants";

function CreateProductForm() {
  const loading = false;
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    categorySlug: "",
  });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let imageId = null;
    if (newProduct.image) {
      imageId = await uploadImage(newProduct.image); // Upload le fichier
    }

    // Passe uniquement l'ID du fichier à l'image
    await addProduct({ 
      ...newProduct, 
      image: imageId, 
      category: newProduct.category, 
      categorySlug: newProduct.categorySlug 
    });

    setNewProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      categorySlug: "",
      image: "",
    });
  } catch (error) {
    console.error("Error creating a product", error);
  }
};

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, image: file });
    }
  };
  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 w-[650px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">
        Create New Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-300 rounded-md
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
        <div className="mt-3">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-300 rounded-md
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
        <div className="mt-3">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            step="0.1"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-300 rounded-md
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
        <div className="mt-3">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            CategorySlug
          </label>
          <select
            id="categorySlug"
            name="categorySlug"
            value={newProduct.categorySlug}
            onChange={(e) =>
              setNewProduct({ ...newProduct, categorySlug: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-300 rounded-md
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.slug}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-300 rounded-md
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3 flex items-center">
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="sr-only"
            accept="image/*"
          />
          <label
            htmlFor="image"
            className="cursor-pointer bg-gray-700 py-2 px-3 boder border-gray-600 rounded-md
            shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2
            focus:ring-offset focus:ring-emerald-500"
          >
            <Upload className="h-5 w-5 inline-block mr-2" />
            Upload Image
          </label>
          {newProduct.image && (
            <span className="ml-3 text-sm text-gray-400">Image Uploaded</span>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
            font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader
                className="mr-2 h-5 w-5 animate-spin"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Product
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

export default CreateProductForm;
