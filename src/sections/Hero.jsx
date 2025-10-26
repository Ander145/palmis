import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import { getProducts } from "../Appwrite/categoriesController";

const Hero = () => {
  const {slug} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchProducts = async () => {
      const fetched = await getProducts();
      setProducts(fetched);
      setLoading(false);
    };
    fetchProducts();
  }), []


    const filtredProducts = products.filter(
      (product)=> product.slug === slug
    )
  return (
    <div className="relative bg-pink-100 min-h-screen h-full" id="hero">
      
      <div className="p-10">
        <h2 className="text-4xl font-monserrat">Our Products</h2>
      </div>
     <div className='min-h-screen bg-pink-50 p-10'>
          <h1 className='text-4xl font-bold text-center mb-10 text-pink-600'>
            {filtredProducts[0]?.category || slug}
          </h1>

          {filtredProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {filtredProducts.map((product) => (
              <Categories key={product.id} {...product} />
          ))}
        </div>
          )

          }

    </div>
    </div>
  );
};
export default Hero;
