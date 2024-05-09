import React from "react";

import studentuser1 from "../../images/studentuser1.png";
import studentuser2 from "../../images/studentuser2.png";
import studentuser3 from "../../images/studentuser3.png";
import dots from "../../images/dots.png";

function Carousel() {
  return (
    <>
      <div className="lg:w-[70%] md:w-[90%] lg:h-[60vh] flex justify-center items-center ">
        <div className="w-[100%] flex flex-col items-center justify-center mb-10">
          <div className="flex h-full w-full justify-between gap-2 lg:flex-row md:flex-row  flex-col p-5">
            <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] p-4">
              <p className="text-SuvaGrey ">
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
              <div className="flex gap-2 items-center">
                <img src={studentuser1} />
                <div>
                  <h3 className="font-bold">Finlay Kirk</h3>
                  <h5 className="text-SuvaGrey text-sm">Web Developper</h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] p-4">
              <p className="text-SuvaGrey ">
                “Complete account of the system and expound the actual Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots”
              </p>
              <div className="flex gap-2 items-center">
                <img src={studentuser2} />
                <div>
                  <h3 className="font-bold">Dannette P. Cervantes</h3>
                  <h5 className="text-SuvaGrey text-sm">Web Design</h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] p-4">
              <p className="text-SuvaGrey ">
                “There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour”
              </p>
              <div className="flex gap-2 items-center">
                <img src={studentuser3} />
                <div>
                  <h3 className="font-bold">Clara R. Altman</h3>
                  <h5 className="text-SuvaGrey text-sm">UI&UX Design</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="felx justify-center items-center lg:block md:block hidden">
            <img src={dots} className="w-[80%]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
