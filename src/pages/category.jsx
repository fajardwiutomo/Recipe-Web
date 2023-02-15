import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/navbar";

const Category = () => {
  const { categoryName } = useParams();
  const [list, setList] = useState([]);
  const navigate = useNavigate()

  const fetchByCategoryName = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setList(response.data.meals);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchByCategoryName();
  }, []);

  console.log(list);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Navbar />
      <div className="px-10 mx-auto">
        <h1 className="text-lg font-medium mt-10">{categoryName} Recipes</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {list.map((item, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center gap-5">
                <div className="h-32 w-40">
                  <img
                    onClick={() => {
                      console.log(item.idMeal);
                      navigate(`/category/${categoryName}/${item.idMeal}`)
                    }}
                    className="mt-5 rounded-lg"
                    src={item.strMealThumb}
                  />
                </div>
                <h1 className="mt-10 text-sm text-gray-500 font-medium">
                  {item.strMeal}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
