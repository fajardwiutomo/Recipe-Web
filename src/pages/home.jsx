import React from "react";
import Body from "../component/body";
import CategoryFood from "../component/categoryFood";
import ListMeals from "../component/listMeals";
import Navbar from "../component/navbar";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <Body />
      <CategoryFood />
      <ListMeals/>
    </div>
  );
};

export default Home;
