import React from "react";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const applyBtn = () => {
    navigate("/apply");
  };
  return (
    <div className="p-2 sm:p-4 mt-16 sm:mt-20">
      <hr />
      <div className="homeImg w-full">
        <img src={hero} alt="Home" className="w-full h-auto max-w-full mx-auto" />
      </div>

      <div className="homeBtn py-4 sm:py-6 md:py-8 text-center">
        <button 
          onClick={applyBtn} 
          className="btn btn-outline-secondary px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
        >
          APPLY HERE
        </button>
      </div>
    </div>
  );
};

export default Hero;