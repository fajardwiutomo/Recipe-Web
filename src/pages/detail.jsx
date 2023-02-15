import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
    console.log(data, ">>>>>");
  const fetchDetail = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setData(response.data.meals);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetail();
  }, []);

  //   useEffect(() => {
  //     const data =
  //     data[0]?.strInstructions.split("\r\n").map((item) => {
  //       return (
  //         <p>
  //           {item}
  //           <br />
  //         </p>
  //       );
  //     });
  //   }, [data]);

  useEffect(() => {
    let temporary = [];
    data?.map((item) => {
      for (let i = 1; i <= 20; i++) {
        if (
          item[`strIngredient${i}`] !== null &&
          item[`strIngredient${i}`] !== ""
        ) {
          temporary.push(item[`strIngredient${i}`]);
        }
      }
    });
    setIngredients(temporary);
  }, [data]);

  useEffect(() => {
    let temporary = [];
    data?.map((item) => {
      for (let i = 1; i <= 20; i++) {
        if (item[`strMeasure${i}`] !== null && item[`strMeasure${i}`] !== "" && item[`strMeasure${i}`] !== " ") {
          temporary.push(item[`strMeasure${i}`]);
        }
      }
    });
    setMeasure(temporary);
  }, [data]);

  return (
    <div className="mb-10 w-full max-w-5xl mx-auto">
      <Navbar />
      <div className=" mx-10 mt-10">
        <div className="mx-auto max-w-lg min-w-min h-56 sm:h-96">
          <img
            className="h-full w-full object-contain"
            src={data[0]?.strMealThumb}
          />
        </div>
        <h1 className="font-medium text-xl mt-5">{`${data[0]?.strMeal} (${data[0]?.strArea} Food)`}</h1>
        <h1 className="mt-2">Ingredients :</h1>
        <ul>
          {ingredients?.map((item, index) => {
            return (
              <div className="flex gap-2 font-light pl-10">
                <li className="list-disc" key={index}>
                  {item}
                </li>
              </div>
            );
          })}
        </ul>
        <h1 className="mt-2">Measure :</h1>
        <ul>
          {measure?.map((item, index) => {
            return (
              <div className="flex gap-2 font-light pl-10">
                <li className="list-disc" key={index}>
                  {item}
                </li>
              </div>
            );
          })}
        </ul>
        <h1 className="mt-2">Instruction :</h1>
        <div className="font-light pl-5">
          {data[0]?.strInstructions.split("\r\n").map((item, index) => {
            return (
              <div key={index}>
                {item}
                <br />
              </div>
            );
          })}
        </div>
        <span className="text-sm flex justify-end mt-2 text-gray-400">{data[0]?.strSource}</span>
      </div>
    </div>
  );
};

export default Detail;
