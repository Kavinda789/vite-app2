import React from "react";
import { PartnerssData } from "../../assets/assets";

function Partners() {
  return (
    <div data-aos="zoom-out" className="py-8 mt-24 hidden md:block bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <img src={PartnerssData[0]} alt="brand" className="w-[80px]" />
          <img src={PartnerssData[1]} alt="brand" className="w-[80px]" />
          <img src={PartnerssData[2]} alt="brand" className="w-[80px]" />
          <img src={PartnerssData[3]} alt="brand" className="w-[80px]" />
          <img src={PartnerssData[4]} alt="brand" className="w-[80px]" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
