import React from "react";
import heroImg from "../assets/images/ness.png";
import { categories, products } from "../constants";
import Product from "../components/Product";
import bgImg from "../assets/images/nespic.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-pink-50 min-h-screen font-[Poppins]">
      {/* Section d'accueil */}
      <section
        className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Texte à gauche */}
        <div className="flex flex-col items-start gap-5 md:w-1/2">
          <h1 className="text-5xl md:text-4xl font-semibold text-amber-100 leading-tight">
            Découvrez votre vraie beauté
          </h1>
          <p className="text-amber-50 text-lg md:text-xl">
            Produits naturels, soins professionnels et expérience unique.
          </p>
          <a href="#hero">
            <button className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md">
            Explorer nos produits
          </button>
          </a>
        </div>

        {/* Image à droite */}
        {/* <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Beauté"
            className="rounded-full w-72 h-72 object-cover shadow-lg border-4 border-pink-200 "
          />
        </div> */}
      </section>

      {/* Section produits */}
      <section
        className="p-10 md:p-20 bg-opacity-40 inset-0 bg-white rounded-t-3xl shadow-inner bg-no-repeat bg-cover" id="hero"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {" "}
        {/* <div className="absolute  bg-black "></div> */}
        <h2 className="text-center text-3xl font-semibold text-amber-100 mb-10">
          Nos produits favoris
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {categories.map((categorie) => (
            <Link key={categorie.id} to={`/categories/${categorie.slug}`}>
              <Product {...categorie} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
