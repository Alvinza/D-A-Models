import React from "react";
import Title from "./Title.jsx";
import modelInfo from "../assets/men.js";

const Men = () => {
  return (
    <div className="mt-36">
      <Title title={"Men"} />
      <div className="pictureCard flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 p-4 md:p-8 lg:p-12">
        {modelInfo.map((models, index) => {
          return (
            <div key={index} className="model mb-4">
              <img
                src={models.menPicture}
                alt={`Model ${models.menName}`}
                loading="lazy"
                className="w-full max-w-xs object-cover cursor-pointer transition-all duration-300 hover:brightness-75"
              />
              <p className="mt-2 text-sm md:text-base lg:text-lg">{models.menName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Men;