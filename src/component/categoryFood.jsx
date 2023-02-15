import axios from "axios";
import React, { useEffect, useState } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useResizeDetector, withResizeDetector } from "react-resize-detector";
import { useNavigate } from "react-router-dom";

const CategoryFood = () => {
  const { width, height, ref } = useResizeDetector();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fecthCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fecthCategories();
      setCategories(response);
    };
    fetchAPI();
  }, []);
  return (
    <div ref={ref} className="px-10 mt-5">
      <div className="font-bold text-lg">Category</div>
      <div className="flex gap-4 w-full">
        {width < 500 && (
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={5}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            //   className="mySwiper"
          >
            {categories.categories &&
              categories.categories.map((category, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="swiper-cast">
                      <div className="flex flex-col items-center justify-center mt-4 pb-5">
                        <div className="w-16 h-16 border-gray-500 rounded-full border-4 overflow-hidden">
                          <img
                            onClick={() => {
                              navigate(`/category/${category.strCategory}`);
                            }}
                            className="flex justify-center items-center h-full w-full object-cover"
                            src={category.strCategoryThumb}
                          />
                        </div>
                        <div className="mt-1 font-medium">
                          {category.strCategory}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
        {width > 500 && width < 800 && (
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            slidesPerGroup={5}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            //   className="mySwiper"
          >
            {categories.categories &&
              categories.categories.map((category, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="swiper-cast">
                      <div className="flex flex-col items-center justify-center mt-4 pb-5">
                        <div className="w-16 h-16 border-gray-500 rounded-full border-4 overflow-hidden">
                          <img
                            onClick={() => {
                              navigate(`/category/${category.strCategory}`);
                            }}
                            className="flex justify-center items-center h-full w-full object-cover"
                            src={category.strCategoryThumb}
                          />
                        </div>
                        <div className="mt-1 font-medium">
                          {category.strCategory}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
        {width > 800 && (
          <Swiper
            slidesPerView={8}
            spaceBetween={10}
            slidesPerGroup={5}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            //   className="mySwiper"
          >
            {categories.categories &&
              categories.categories.map((category, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="swiper-cast">
                      <div className="flex flex-col items-center justify-center mt-4 pb-5">
                        <div className="w-16 h-16 border-gray-500 rounded-full border-4 overflow-hidden">
                          <img
                            onClick={() => {
                              navigate(`/category/${category.strCategory}`);
                            }}
                            className="flex justify-center items-center h-full w-full object-cover"
                            src={category.strCategoryThumb}
                          />
                        </div>
                        <div className="mt-1 font-medium">
                          {category.strCategory}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default CategoryFood;
