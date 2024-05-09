import React from "react";
import leftEllipse1 from "../../images/leftEllipse1.png";
import leftEllipse2 from "../../images/leftEllipse2.png";
import RightEllipse1 from "../../images/RightEllipse1.png";
import RightEllipse2 from "../../images/RightEllipse2.png";
import orangelighteffect from "../../images/orangelighteffect.png";
import orangeGroup from "../../images/orangeGroup.png";
import idealamp from "../../images/idealamp.png";

function SubBaner() {
  return (
    <>
      <div className="w-[90%] min-h-[30vh] lg:min-h-[50vh] md:min-h-[30vh]  bg-ScarletGum rounded-xl relative">
        <div className="lg:flex md:hidden hidden justify-between">
          <div className="flex justify-items-center">
            <img src={leftEllipse1} className="absolute" />
            <img src={leftEllipse2} className="absolute" />
          </div>
          <div className="flex justify-end">
            <img src={RightEllipse1} className="absolute" />
            <img src={RightEllipse2} className="relative " />
          </div>
        </div>
        <div className="lg:w-full md:w-full flex justify-center items-center absolute inset-0 flex-col gap-4">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-white font-semibold lg:text-2xl md:text-2xl text-base text-center">
              Subscribe to our newsletter
            </h1>
            <h4 className="text-white lg:text-[11px] md:text-[11px] text-[11px] text-center">
              Lorem Ipsum is simply dummy text of the printing.
            </h4>
          </div>
          <div className=" bg-white flex items-center justify-between lg:gap-2 px-2 py-1 w-[80%] lg:w-[25%] md:w-[50%] rounded-full">
            <div className="flex items-center justify-center gap-1">
              <input
                type="text"
                placeholder="Email Address"
                className="placeholder:text-DarkGray text-xs lg:text-base md:text-base  md:w-[100%] w-[80%] outline-none"
              />
            </div>
            <button className="bg-Pumpkin l px-2 py-1 text-white text-[15px] rounded-full cursor-pointer">
              Continue
            </button>
          </div>
        </div>
        <div className="lg:block md:hidden hidden ">
          <img
            src={orangelighteffect}
            className="absolute w-[70%] -top-[10vh] -left-[20vw]"
          />
          <img
            src={orangeGroup}
            className="w-[10%] absolute left-[10vw] -bottom-3"
          />
        </div>
        <div className="lg:block md:hidden hidden">
          <img
            src={orangelighteffect}
            className=" absolute top-0 -right-[30vh] w-[60%]"
          />
          <img src={idealamp} className="absolute bottom-9 right-36  w-[10%]"/>
        </div>
      </div>
    </>
  );
}

export default SubBaner;
