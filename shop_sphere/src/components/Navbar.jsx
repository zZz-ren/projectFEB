import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="fixed top-0 right-0 w-full
      bg-white text-black shadow-md"
      >
        <div className=" bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% Off on next booking</p>
              <p>Mobile no. +91 1234567890</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <img src="" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
