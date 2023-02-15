import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const ListMeals = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" },
    { value: "d", label: "d" },
    { value: "e", label: "e" },
    { value: "f", label: "f" },
    { value: "g", label: "g" },
    { value: "h", label: "h" },
    { value: "i", label: "i" },
    { value: "j", label: "j" },
    { value: "k", label: "k" },
    { value: "l", label: "l" },
    { value: "m", label: "m" },
    { value: "n", label: "en" },
    { value: "o", label: "o" },
    { value: "p", label: "p" },
    { value: "q", label: "q" },
    { value: "r", label: "r" },
    { value: "s", label: "s" },
    { value: "t", label: "t" },
    { value: "u", label: "u" },
    { value: "v", label: "v" },
    { value: "w", label: "w" },
    { value: "x", label: "x" },
    { value: "y", label: "y" },
    { value: "z", label: "z" },
  ];
  const fetchMealsByAbjad = async (e) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${e}`
      );
      setData(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMealsByAbjad("a");
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-10 mt-5">
      <div className="font-bold text-lg">Search What You Want</div>
      <Select
        value={options.value}
        onChange={(e) => {
          fetchMealsByAbjad(e.value);
        }}
        options={options}
        className="w-40 mt-2"
      />
      <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4">
        {data?.map((item) => {
          return (
            <div className="">
              <img
                onClick={() => {
                  navigate(`/category/${[item?.strCategory]}/${item.idMeal}`);
                }}
                className="rounded-lg"
                src={item?.strMealThumb}
              />
              <div className="mt-2 text-sm text-gray-500 font-medium mb-5">
                {item.strMeal}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMeals;
