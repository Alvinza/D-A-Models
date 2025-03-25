import React from "react";
import Title from "./Title.jsx";

const Policy = () => {
  return (
    <div className="mt-36">
      <Title title={"Policy"} />
      <div className="policy container mx-auto text-center p-2 max-w-4xl w-full px-4 md:px-8">
        <h5 className="text-gray-800 text-lg md:text-xl mb-4">
          PRIVACY NOTICE AND COMPLIANCE WITH THE PROTECTION OF PERSONAL
          INFORMATION ACT (ALSO KNOWN AS POPIA)
        </h5>
        <p className="mb-4 text-sm md:text-base">
          D&A MODEL MANAGEMENT CC (Registration number 2009/096194/23) would
          like to inform you (the "data subject") that we are committed to
          safeguarding your privacy and the confidentiality of your personal
          information. In terms of Section 18 of the Protection of Personal
          Information Act No 4. of 2013 ("POPI") with effect from 01 June 2021,
          we are obliged to provide you with information when collecting
          personal information from you.
        </p>
        <p className="mb-4 text-sm md:text-base">
          It is important that you understand how we collect and process your
          data, and for what purpose we use your information. This policy
          applies to all data collected by D&A Model Management in whichever
          manner or form, for the execution of our service obligations.
        </p>
        <p className="mb-4 text-sm md:text-base">
          The physical address of our head office is: 89 Bree street, 2nd floor,
          Cape Town, 8001, South Africa
        </p>
        <p className="mb-4 text-sm md:text-base">
          If you have any questions, please contact us on:
          contact@damodels.co.za
        </p>
      </div>
    </div>
  );
};

export default Policy;