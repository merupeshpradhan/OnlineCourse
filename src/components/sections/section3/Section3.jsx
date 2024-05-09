import React from "react";
import Carousel from "../section3/Carousel";
import Ellipse from "../../images/Ellipse.png";
import Group2 from "../../images/Group2.png";
import orangeplanet from "../../images/orangeplanet.png";

import Cards from "./Cards";
import SubBaner from "./SubBaner";

function Section3() {
  return (
    <>
      <section className="w-full flex justify-center items-center flex-col mb-[8%] lg:mt-7 overflow-hidden">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-semibold text-xl">What student’s say</h1>
          <p className="font-normal text-sm text-SuvaGrey">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <Carousel />
        <div className="absolute -z-10 flex justify-between w-full">
          <div className="flex">
            <div className="-translate-y-[30%] rotate-180">
              <img src={Ellipse} className=" " />
            </div>
            <div className="translate-y-[30%] -translate-x-[25vw]">
              <img src={Group2} />
            </div>
          </div>
          <div className="flex">
            <div className="translate-y-[35%] translate-x-[25vw]">
              <img src={orangeplanet} className="" />
            </div>
            <div className="translate-y-[7%]">
              <img src={Ellipse} className=" " />
            </div>
          </div>
        </div>
        <Cards />
        <SubBaner />
      </section>
    </>
  );
}

export default Section3;
