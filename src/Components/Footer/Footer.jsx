import React from "react";
import { Menu } from "../../assets/assets";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileRetro } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary
            font-semibold tracking-widest text-2xl uppercase
            sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mt-4">
              Made with 💖 by The Coding Journey
            </p>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-600 hover:text-black
                                duration-300"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Col Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-600 hover:text-black
                                duration-300"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div className="py-8 px-4 col-span-4 sm:col-auto">
                <div>
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Noida , Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <FaMobileRetro />
                    <p>+91 1234567890</p>
                  </div>
                </div>
                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram
                      className="text-3xl hover:text-primary
                        duration-300"
                    />
                  </a>
                  <a href="#">
                    <FaFacebook
                      className="text-3xl hover:text-primary
                        duration-300"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedin
                      className="text-3xl hover:text-primary
                        duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
