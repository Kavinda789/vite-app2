import React from "react";
import { Menu } from "../../assets/assets";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
function Navbar() {
  return (
    <div className="bg-white relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary
            font-semibold tracking-widest text-2xl uppercase
            sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Item */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-5">
                {Menu.map((data, i) => (
                  <li key={i}>
                    <a
                      className="inline-block px-4 font-semibold
                        text-gray-500 hover:text-black duration-200"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold
                    text-gray-500 hover:text-black py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div
                    className="absolute z-[9999] hidden group-hover:block
                  w-[200px] rounded-md bg-white shadow-md p-2 "
                  >
                    <ul className="space-y-2">
                      {Menu.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500 hover:text-black
                            duration-300 font-semibold inline-block w-full p-2 
                            hover:bg-primary/20 rounded-md"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className=" flex justify-between items-center gap-4">
            {/* Search Bar Section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl group-hover:text-primary text-gray-600 absolute
                top-1/2 -translate-y-1/2 right-3 duration-300"
              />
            </div>

            {/* Cart Section */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600" />
              <div
                className="w-4 bg-red-500 text-white rounded-full
              absolute top-0 right-0 flex items-center justify-center
              text-xs"
              >
                4
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
