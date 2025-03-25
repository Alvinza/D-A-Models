import React from "react";
import Title from "./Title";
import GridComplexExample from "./GridComplexExample";
import Slider from "./Slider";

function Apply() {
  return (
    <div className="mt-36 container">
      <Title title={"Apply"} />
      <div className="applyText text-center container mx-auto max-w-2xl px-4">
        <p>
          At D&A, we take pride in diversity, and wholeheartedly support the
          global movement for inclusion, providing everyone with the chance to
          shine regardless of height, age, gender, race, or size.
        </p>
        <p>
          If you believe you have what it takes, complete the information fields
          below and upload your images following the examples provided. Share a
          little bit about yourself too, as we can't wait to get to know you!
        </p>
        <p>
          If you are a local or international model, please also send your
          portfolio or relevant material to modelsearch@damodels.co.za
        </p>
        <p>Good Luck.</p>
      </div>
      <div className="text-center container mx-auto max-w-4xl px-4 mt-10">
        <div className="md:ml-30">
            <GridComplexExample />
        </div>
      </div>
      <div className="slider p-4 md:p-10 lg:p-20 mt-14">
        <Slider />
      </div>
    </div>
  );
}

export default Apply;