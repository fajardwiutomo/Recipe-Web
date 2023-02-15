import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-20 flex justify-between items-center px-4">
      <img className="h-full py-1" src={Logo} />
      <div className="flex gap-2">
        <div className="underline">
          <h1 onClick={()=> {
            navigate("/")}} 
            className="font-semibold cursor-pointer">
            Home
          </h1>
        </div>
        <div className="px-4 underline">
          <h1 className="font-semibold">Recipes</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
