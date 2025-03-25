import React from "react";
import Title from "./Title.jsx";
import modelInfo from "../assets/girls.js";

const Girls = () => {
  return (
    <div className="mt-36">
      <Title title={"Girls"} />
      <div className="flex flex-wrap justify-center gap-4 p-4 md:p-8 lg:p-12">
        {modelInfo.map((models, index) => {
          return (
            <div key={index} className="model flex flex-col items-center mb-6">
              <img
                src={models.girlPicture}
                alt={models.girlName}
                className="h-48 w-40 sm:h-64 sm:w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 object-cover cursor-pointer transition-all duration-300 hover:brightness-75"
              />
              <p className="mt-2 text-center font-medium">{models.girlName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Girls;