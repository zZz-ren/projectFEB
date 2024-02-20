import React from "react";
import Logo from "../assets/images/logo-.jpg";

const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto bg-red-500">
          <div>
            <img className="w-16" src={Logo} alt="..." />
          </div>
          <div className="absolute bg-white min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <button className="hover:text-gray-500">Home</button>
              </li>
              <li>
                <button className="hover:text-gray-500">Product</button>
              </li>
              <li>
                <button className="hover:text-gray-500">Profile</button>
              </li>
              <li>
                <button className="hover:text-gray-500">Wishlist</button>
              </li>
              <li>
                <button className="hover:text-gray-500">Bag</button>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#233142] text-white py-2 px-5 rounded-full hover:bg-[#492d44] ">
              Sign-Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
