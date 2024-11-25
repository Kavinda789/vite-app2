import React from "react";
import Button from "../Shape/Button";
import { CategoryData } from "../../assets/assets";

function Category() {
  return (
    <div className="py-1">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90
          to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="">
              <div className="space-y-3 mb-4">
                <p className="mb-[2px] to-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40  mb-2">
                  Laptops
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={CategoryData[4]}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90
          to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] to-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40  mb-2">
                  Virtual
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={CategoryData[3]}
              alt=""
              className="w-[320px] absolute bottom-0"
            />
          </div>
          {/* third col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue
          to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] to-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20  mb-2">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={CategoryData[5]}
              alt=""
              className="w-[320px] absolute bottom-0 ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
