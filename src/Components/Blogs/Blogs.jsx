import React from "react";
import Heading from "../Shape/Heading";
import { BlogData } from "../../assets/assets";

function Blogs() {
  return (
    <div className="my-12">
      <div className="container">
        {/* Head section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-6 gap-y-8 sm:gap-4 md:gap-7"
        >
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="bg-white"
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.img}
                  alt=""
                  className="w-full  h-[220px] object-cover rounded-2xl
                            hover:scale-105 duration-200"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-2">
                <p className="text-xl to-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {data.subttle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
