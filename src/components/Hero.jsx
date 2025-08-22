import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const applyBtn = () => {
    navigate("/apply");
  };

  const images = [hero1, hero3, hero2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 sm:mt-20">
      {/* Hero Slider */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-[#F1BC56]" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Apply Button OUTSIDE the hero */}
      <div className="py-6 text-center">
        <button
          onClick={applyBtn}
          className="btn btn-outline-secondary px-6 py-3 text-base"
        >
          APPLY HERE
        </button>
      </div>
    </div>
  );
};

export default Hero;
