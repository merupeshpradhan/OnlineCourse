import React from "react";
import Group from "../../images/Group.png";
import idealamp from "../../images/idealamp.png";

function SubHead() {
  return (
    <>
      <div className="flex justify-between w-full items-center lg:px-10 md:px-10 mt-3">
        <div>
          <img src={idealamp} />
        </div>
        <div className=" w-full flex justify-center flex-col items-center">
          <h1 className="font-semibold lg:text-4xl md:text-3xl text-2xl">Our Tracks</h1>
          <p className="font-normal text-sm text-SuvaGrey text-center">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div>
          <img src={Group} />
        </div>
      </div>
    </>
  );
}

export default SubHead;
