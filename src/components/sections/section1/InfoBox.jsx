import React from "react";
import Certificate from "../../images/certification.png";
import Exam from "../../images/exam.png";
import Onlinetest from "../../images/online-test.png";

function InfoBox() {
  return (
    <>
      <div className="bg-ScarletGum lg:h-[35vh] md:h-[35vh] lg:w-[80%] md:w-[90%] w-[80%] lg:absolute md:absolute lg:-mt-[17vh] md:-mt-[13vh]  -mt-3 rounded-xl flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col gap-5 p-3 items-center">
        <div className="w-full flex justify-center items-center gap-2">
            <div className="p-2 rounded-xl bg-white-bg ">
              <img src={Onlinetest} className="w-7" />
            </div>
            <div className="lg:w-[50%] md:w-[65%]">
              <h3 className="text-white font-semibold md:text-sm lg:w-[80%]">
                Learn The Latest Skills
              </h3>
              <p className=" text-[10px] text-white-bg lg:w-[80%]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        <div className="w-full flex justify-center items-center gap-2">
            <div className="p-2 rounded-xl bg-white-bg ">
              <img src={Exam} className="w-7" />
            </div>
            <div className="lg:w-[70%] md:w-[65%]">
              <h3 className="text-white font-semibold md:text-sm lg:w-[80%]">
                Learn The Latest Skills
              </h3>
              <p className=" text-[10px] text-white-bg lg:w-[80%]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        <div className="w-full flex justify-center items-center gap-2">
            <div className="p-2 rounded-xl bg-white-bg ">
              <img src={Certificate} className="w-7" />
            </div>
            <div className="lg:w-[70%] md:w-[65%]">
              <h3 className="text-white font-semibold md:text-sm lg:w-[80%]">
                Learn The Latest Skills
              </h3>
              <p className=" text-[10px] text-white-bg lg:w-[80%]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

export default InfoBox;
