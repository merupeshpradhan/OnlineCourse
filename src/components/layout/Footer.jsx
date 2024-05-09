import React from "react";

import logo from "../images/Logo.png";

function Footer() {
  return (
    <>
      <footer className="min-h-[50vh] bg-FloralWhite w-full relative z-30">
        <div className="flex w-full md:justify-between lg:flex-row md:flex-row flex-col lg:gap-[10%] gap-5 lg:items-start md:items-start items-center lg:justify-center lg:p-[60px] md:p-[30px]">
          <div className="flex flex-col lg:w-[20%] md:w-[20%]  items-center justify-center">
            <img src={logo} className="w-24 mt-4" />
            <p className="text-xs text-center lg:text-start md:text-start p-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a
              type specimen book.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base font-semibold">Company</h1>
            <ul className="text-xs flex flex-col gap-4">
              <li>About Us</li>
              <li>How to work?</li>
              <li>Populer Course</li>
              <li>Service</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base font-semibold">Courses</h1>
            <ul className="text-xs flex flex-col gap-4">
              <li>Categories</li>
              <li>Ofline Course</li>
              <li>Vidio Course</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base font-semibold">Support</h1>
            <ul className="text-xs flex flex-col gap-4">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 ">
             <h1 className="text-base font-semibold lg:text-start md:text-start text-center">Contac Info</h1>
            <ul className="text-xs flex flex-col gap-4 lg:text-start md:text-start text-center">
              <li>+0913-705-3875</li>
              <li>ElizabethJ@jourrapide.com</li>
              <li>4808 Skinner Hollow Road Days Creek, OR 97429</li>
            </ul>
          </div>
        </div>
        <hr />
        <hr />
        <p className="text-xs text-center p-5">
          BookStore All Right Reserved, 2022
        </p>
      </footer>
    </>
  );
}

export default Footer;
