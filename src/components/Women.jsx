import React from "react";
import Title from "./Title.jsx";
import modelInfo from "../assets/women.js";

const Women = () => {
  return (
    <div className="mt-36">
      <Title title={"Women"} />
      <div className="pictureCard flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-8 p-4 md:p-8 lg:p-12">
        {modelInfo.map((models, index) => {
          return (
            <div key={index} className="model mb-6">
              <img
                src={models.womenPicture}
                alt={`Model ${models.womenName}`}
                loading="lazy"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md cursor-pointer transition-all duration-300 hover:brightness-75"
                // Using CSS classes instead of inline styles for hover effects
              />
              <p className="m-2 text-base md:text-lg lg:text-xl">{models.womenName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Women;