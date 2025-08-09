import React from "react";
import Title from "./Title.jsx";
import mapPic from "../assets/map.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  // Redirect to Policy page
  const policyBtn = () => {
    navigate("/policy");
  };

  return (
    <div className="mt-36 px-4">
      <Title title={"Contact"} />
      <div className="text-center">
        <h5 className="p-3">CASTING BRIEFS / OPTIONS / BOOKINGS</h5>
        <a href="#home" className="text-gray-800 block text-lg">
          booker@damodels.co.za
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mt-14">
        <div>
          <h5 className="font-semibold">APPLY</h5>
          <a href="mailto:modelsearch@damodels.co.za" className="text-gray-700 block">
            modelsearch@damodels.co.za
          </a>
        </div>
        <div>
          <h5 className="font-semibold">ACCOUNTS</h5>
          <a href="mailto:finance@damodels.co.za" className="text-gray-700 block">
            finance@damodels.co.za
          </a>
        </div>
        <div>
          <h5 className="font-semibold">PHONE</h5>
          <a href="tel:+27021423664" className="text-gray-700 block">
            +27 (0) 21 423 6643
          </a>
        </div>
        <div>
          <h5 className="font-semibold">ADDRESS</h5>
          <p className="text-gray-700">
            89 Bree Street, 2nd floor,<br />
            Cape Town, South Africa 8001
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img src={mapPic} alt="map" className="w-full max-w-[600px] rounded-lg shadow-md" />
      </div>

      <div className="text-center mt-14 mb-10">
        <button onClick={policyBtn} className="btn btn-outline-secondary px-6 py-2 text-lg">
          POLICY
        </button>
      </div>
    </div>
  );
};

export default Contact;
