import React from "react";

const Product = ({ imgURL, name, price }) => {
  return (
    <div
      className=" relative flex flex-col w-[300px] gap-1 justify-center items-center mt-10 hover:scale-125
      transition duration-300 ease-in hover:text-4xl p-5 shadow-md bg-gradient-to-b from-purple-200 rounded-xl"
    >
      {imgURL && (
        <img
        src={imgURL}
        alt={name}
        width={450}
        height={450}
        className="rounded-xl bg-amber-100 p-5
      "
      />
      )}
      
      <div className="absolute bottom-10 left-10 right-0 p-4 z-20">
        <h3 className="text-pink-700 text-2xl font-semibold">{name}</h3>
        <h3 className="text-pink-700 text-2xl font-semibold">{price}</h3>
      </div>
    </div>
  );
};

export default Product;
