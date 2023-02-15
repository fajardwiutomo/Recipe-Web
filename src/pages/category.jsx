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
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {list.map((item, index) => {
            return (
              <div key={index}>
             
                  <img
                    onClick={() => {
                      console.log(item.idMeal);
                      navigate(`/category/${categoryName}/${item.idMeal}`)
                    }}
                    className="mt-5 rounded-lg"
                    src={item.strMealThumb}
                  />
            
                <h1 className="mt-2 text-sm text-gray-500 font-medium">
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
