import React from "react";
import Slider from "react-slick";
import { SliderData } from "../../assets/assets";
import Button from "../Shape/Button";

function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* hero section */}
          <Slider {...settings}>
            {SliderData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text Content Section */}
                  <div
                    className="flex flex-col justify-center gap-4 sm:pt-3
                  text-center sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white sm:text-[80px]
                    md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="pl-3"
                    >
                      <Button
                        text="Shop By Catergory"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* img Section */}
                  <div className="order-1 sm:order-2">
                    <div data-aos="zoom-in" data-aos-once="true">
                      <img
                        src={data.img}
                        alt=""
                        className="w-[450px] h-[450px] sm:h-[450px] lg:scale-110
                    object-contain mx-auto drop-shadow-[-8px_4px_6px_rgb(0,0,0,.4)]
                    relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
