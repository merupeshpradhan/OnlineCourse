import React from "react";

import { FaSearch } from "react-icons/fa";
import landingicons from "../../images/landingIcons.png";
import LandingObjects from "../../images/Landing-OBJECTS.png";
import LandingHeading from "../../images/Landing-Heading.png";

function Landing() {
  return (
    <>
      <div className=" lg:flex relative lg:h-full md:flex justify-center lg:p-40 md:p-5 p-6 bg-contain" style={{ backgroundImage: `url(${landingicons})`,backgroundRepeat:"no-repeat" }}>
        <div
          className="w-full h-full flex items-center  md:bg-cover lg:p-[5px] md:p-[66px]"
        >
          <div className="flex flex-col lg:gap-8 md:gap-3 gap-3">
            <img src={LandingHeading} className="md:w-[70%] lg:w-full w-[70%]"/>
            <p className="lg:w-[60%] md:w-[80%] text-xs text-justify">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
            <div className=" bg-white flex items-center justify-between lg:gap-2 px-2 py-1 lg:w-[55%] md:w-[90%] rounded-full">
              <div className="flex items-center justify-center gap-1">
                <FaSearch className="lg:text-base md:text-[16px] font-bold" />
                <input
                  type="text"
                  placeholder="Search for a Location"
                  className="placeholder:text-PrussianBlue lg:placeholder:font-medium md:placeholder:font-semibold lg:placeholder:text-base md:placeholder:text-[13px] placeholder:text-[14px] placeholder:font-semibold md:w-[100%] w-[80%] outline-none"
                />
              </div>
              <button className="bg-ScarletGum lg:px-3 lg:py-2 md:px-2 md:py-1 px-2 py-1 text-white lg:font-semibold md:font-normal md:text-[13px] rounded-full cursor-pointer">
                Continue
              </button>
            </div>
          </div>
          <div className="lg:block md:block hidden">
            <img src={LandingObjects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
