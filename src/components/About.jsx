import React from "react";
import Title from "./Title.jsx";
import aboutImage from "../assets/about.png";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  // Redirect to Apply page
  const applyBtn = () => {
    navigate("/apply");
  };
  return (
    <div className="mt-24 md:mt-36 about">
      <Title title={"About"} />
      <div className="aboutText text-center container mx-auto px-4 md:px-8 max-w-full md:max-w-3xl lg:max-w-4xl">
        <p className="mb-4">
          D&A is a full-spectrum model agency that has been founded on the
          principles of integrity, respect, and dedication, with a commitment to
          excellence. We believe in celebrating diversity and encouraging
          everyone to embrace their unique qualities because we know that
          authenticity is the key to success.
        </p>
        <p className="mb-4">
          When you join D&A, you become part of a community dedicated to your
          growth and development. We tailor our approach to each individual,
          ensuring personalized attention and guidance needed to thrive in this
          fast-paced industry. With over a decade of experience and a collective
          industry expertise spanning over 40 years, D&A Models is renowned for
          its track record of success. We also place models all over the world
          with top international model agencies, allowing them to jet-set across
          the globe and immerse themselves in diverse cultural experiences.
        </p>
        <p className="mb-4">
          As a member of the D&A family, you will have access to a prestigious
          network of clients and brands, both locally and internationally. From
          leading fashion icons like Giorgio Armani, Charlotte Tilbury, Dolce &
          Gabbana, and Max Factor to global brands such as Nike, Adidas,
          Coca-Cola, and Audi, our roster represents the best of the best in the
          industry. We will connect you with opportunities that align with your
          authentic self, propelling your career to new heights.
        </p>
        <p className="mb-6">
          Your journey to success starts here at D&A Models. Allow us to guide
          you as you transform your dreams into reality. D&A Models is proud to
          be an integral member of the National Association of Model Agencies,
          upholding the highest standards of professionalism and ethics in
          everything we do.
        </p>
        <button onClick={applyBtn} className="btn btn-secondary mb-8">
          APPLY NOW
        </button>
      </div>
      <div className="aboutImage mx-auto px-4 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <img
          src={aboutImage}
          alt="D&A Models"
          className="w-full h-auto"
          style={{ transition: "filter 0.3s ease", cursor: "pointer" }}
          onMouseEnter={(e) => (e.target.style.filter = "brightness(80%)")}
          onMouseLeave={(e) => (e.target.style.filter = "brightness(100%)")}
        />
      </div>
    </div>
  );
};

export default About;
