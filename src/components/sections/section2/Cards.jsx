import React from "react";

import cardimage1 from "../../images/cardImage1.png";
import cardimage2 from "../../images/cardImage2.png";
import cardimage3 from "../../images/cardImage3.png";
import stars from "../../images/stars.png";
import line from "../../images/Line.png";
import time from "../../images/time.png";
import video from "../../images/video.png";
import download from "../../images/download.png";

function Cards() {
  return (
    <>
      <div className="min-h-[80vh] flex justify-center items-center lg:flex-row md:flex-row flex-col lg:-mt-10 md:-mt-10 gap-3 p-5 lg:gap-5 md:gap-3 lg:p-5 md:p-5">
        <div className="lg:h-[53vh] lg:w-[25vw] md:h-[52vh] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] p-3 rounded-lg flex flex-col gap-3 ">
          <div className="">
            <img src={cardimage2} className="rounded-lg" />
          </div>
          <div className=" flex justify-between items-center">
            <h3 className="text-DarkGray text-xs">UI/UX Design</h3>
            <img src={stars} />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              UI/UX Design for Beginners
            </h1>
            <p className="font-bold text-Pumpkin">$98</p>
          </div>
          <div>
            <img src={line} />
          </div>
          <div className="flex  justify-start items-center gap-4 mb-2">
            <div className="flex justify-center items-center gap-2">
              <img src={time} className="w-4" />
              <p className="text-DarkGray text-sm">22hr 30min</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={video} className="w-4" />
              <p className="text-DarkGray text-sm">34 Courses</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={download} className="w-4" />
              <p className="text-DarkGray text-sm">250 Sales</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="cursor-pointer bg-Pumpkin px-6 py-2 text-white font-semibold text-base rounded-full">Join Course</button>
          </div>
        </div>
        <div className="lg:h-[53vh] lg:w-[25vw] md:h-[52vh] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] p-3 rounded-lg flex flex-col gap-3 ">
          <div className="">
            <img src={cardimage1} className="rounded-lg" />
          </div>
          <div className=" flex justify-between items-center">
            <h3 className="text-DarkGray text-xs">UI/UX Design</h3>
            <img src={stars} />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              UI/UX Design for Beginners
            </h1>
            <p className="font-bold text-Pumpkin">$98</p>
          </div>
          <div>
            <img src={line} />
          </div>
          <div className="flex  justify-start items-center gap-4 mb-2">
            <div className="flex justify-center items-center gap-2">
              <img src={time} className="w-4" />
              <p className="text-DarkGray text-sm">22hr 30min</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={video} className="w-4" />
              <p className="text-DarkGray text-sm">34 Courses</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={download} className="w-4" />
              <p className="text-DarkGray text-sm">250 Sales</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="cursor-pointer bg-Pumpkin px-6 py-2 text-white font-semibold text-base rounded-full">Join Course</button>
          </div>
        </div>
        <div className="lg:h-[53vh] lg:w-[25vw] md:h-[52vh] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] p-3 rounded-lg flex flex-col gap-3 ">
          <div className="">
            <img src={cardimage3} className="rounded-lg" />
          </div>
          <div className=" flex justify-between items-center">
            <h3 className="text-DarkGray text-xs">UI/UX Design</h3>
            <img src={stars} />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              UI/UX Design for Beginners
            </h1>
            <p className="font-bold text-Pumpkin">$98</p>
          </div>
          <div>
            <img src={line} />
          </div>
          <div className="flex  justify-start items-center gap-4 mb-2">
            <div className="flex justify-center items-center gap-2">
              <img src={time} className="w-4" />
              <p className="text-DarkGray text-sm">22hr 30min</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={video} className="w-4" />
              <p className="text-DarkGray text-sm">34 Courses</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={download} className="w-4" />
              <p className="text-DarkGray text-sm">250 Sales</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="cursor-pointer bg-Pumpkin px-6 py-2 text-white font-semibold text-base rounded-full">Join Course</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
