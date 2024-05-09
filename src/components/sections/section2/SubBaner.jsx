import React from "react";

import studygirl from "../../images/studygirl.png"
import landingHeading from "../../images/Landing-Heading.png";
import hearts from "../../images/hearts.png";
import jigsaw from "../../images/jigsaw.png";

function SubBaner() {
  return (
    <>
      <div className="bg-FloralWhite lg:h-[50vh] md:h-[50vh] w-full flex justify-center items-center p-6 lg:justify-evenly md:justify-evenly flex-col lg:flex-row  md:flex-row mb-10 gap-5">
        <div className="lg:mt-[4rem] md :mt-[4rem]  justify-center flex">
            <img src={studygirl} className="lg:w-[60%] md:w-[60%] w-[40%]"/>
        </div>
        <div className=" flex justify-center flex-col lg:items-start md:items-start items-center gap-4">
            <div className="flex w-full justify-center lg:justify-start">
              <img src={landingHeading} className="w-[70%]"/>
            </div>
            <div className="flex items-center gap-4">
              <div className="border p-2 bg-ScarletGum rounded-xl">
                <img src={hearts} className="w-7"/>
              </div>
              <div className="flex flex-col">
              <h3>Easily Accessible</h3>
              <p className="text-DarkGray text-xs">Learning Will fell Very Comfortable With Courslab.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="border p-2 bg-ScarletGum rounded-xl">
                <img src={jigsaw} className="w-7"/>
              </div>
              <div className="flex flex-col">
              <h3>Easily Accessible</h3>
              <p className="text-DarkGray text-xs">Learning Will fell Very Comfortable With Courslab.</p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default SubBaner;
