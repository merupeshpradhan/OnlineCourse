import React, { useState } from "react";

import Logo from "../images/Logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { CgMenuMotion } from "react-icons/cg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function navTogle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className="flex justify-between lg:justify-evenly md:justify-evenly  items-center p-5 bg-FloralWhite ">
        <div className="w-[130px]">
          <img src={Logo} className="cursor-pointer"/>
        </div>
        <div className="hidden lg:flex md:flex justify-between items-center gap-8 md:ml-24">
          <ul className="lg:flex md:flex lg:gap-8 md:gap-4 text-nero md:text-sm font-semibold cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Course</li>
            <li>Our Service</li>
            <li>Contact us</li>
          </ul>
          <button className="bg-ScarletGum text-White w-[105px] h-[40px] rounded-full">
            Sign in
          </button>
        </div>
        <div>
          {isOpen ? (
            <CgMenuMotion
              className="lg:hidden md:hidden text-[30px] cursor-pointer text-ScarletGum"
              onClick={navTogle}
            />
          ) : (
            <BiMenuAltRight
              className="lg:hidden md:hidden text-[30px] cursor-pointer text-ScarletGum"
              onClick={navTogle}
            />
          )}
        </div>
      </nav>
      <section
        className={`bg-FloralWhite flex justify-center transition duration-300  ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="p-7">
          <ul className="flex flex-col gap-8 items-center text-nero font-semibold h-full">
            <li>Home</li>
            <li>About us</li>
            <li>Course</li>
            <li>Our Service</li>
            <li>Contact us</li>
            <li>
              <button className="bg-ScarletGum text-White w-[120px] h-[45px] rounded-full">
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
