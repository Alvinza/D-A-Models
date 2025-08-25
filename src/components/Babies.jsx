import React from "react";
import Title from "./Title.jsx";
import modelInfo from "../assets/babies/babies.js"; // babies data

const Babies = () => {
  return (
    <div className="mt-36 px-4">
      <Title title={"Babies"} />
      
      {/* Responsive grid layout for displaying baby models */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {modelInfo.map((models, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
               {/* Lazy loading images for performance optimization */}
              <img
                src={models.babyPicture}
                alt={models.babyName}
                loading="lazy"
                className="w-full max-w-[250px] h-auto rounded-lg shadow-md transition-all duration-300 hover:brightness-75 cursor-pointer"
              />
              <p className="mt-2 text-center font-semibold">{models.babyName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Babies;
