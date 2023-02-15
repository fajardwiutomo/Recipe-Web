import React from "react";
import Image from "../asset/food.png";

const Body = () => {
  return (
    <div className="flex justify-between items-center px-10 mt-5">
      <div className="">
        <h1 className="font-bold text-2xl mb-5">
          Let's Start Cooking With Popular Recipes
        </h1>
        <h1 className="font-light">
          want to learn cook but confused how to start? check this out!
        </h1>
        <button className="mt-5 border border-green-500 rounded-md px-4 py-2 text-sm text-white bg-green-500 font-semibold">
          Explore Menu
        </button>
      </div>
      <div className="">
        <img className="object-cover" src={Image} />
      </div>
    </div>
  );
};

export default Body;
