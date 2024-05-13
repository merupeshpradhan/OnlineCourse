import React from "react";
import AliceCarousel from "react-alice-carousel";
import { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import studentuser1 from "../../images/studentuser1.png";
import studentuser2 from "../../images/studentuser2.png";
import studentuser3 from "../../images/studentuser3.png";

function Carousels() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3
     },
  };

  const items = [
    <div className="item p-10 h-[40vh]" data-value="1">
      <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-center p-4 h-full">
        <p className="text-SuvaGrey ">
          “Teachings of the great explore of truth, the master-builder of human
          happiness. no one rejects,dislikes, or avoids pleasure itself,
          pleasure itself”
        </p>
        <div className="flex gap-2 items-center">
          <img src={studentuser1} />
          <div>
            <h3 className="font-bold">Finlay Kirk</h3>
            <h5 className="text-SuvaGrey text-sm">Web Developper</h5>
          </div>
        </div>
      </div>
    </div>,
    <div className="item p-10 h-[40vh]" data-value="1">
      <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-center p-4 h-full">
        <p className="text-SuvaGrey ">
          “Teachings of the great explore of truth, the master-builder of human
          happiness. no one rejects,dislikes, or avoids pleasure itself,
          pleasure itself”
        </p>
        <div className="flex gap-2 items-center">
          <img src={studentuser2} />
          <div>
            <h3 className="font-bold">Finlay Kirk</h3>
            <h5 className="text-SuvaGrey text-sm">Web Developper</h5>
          </div>
        </div>
      </div>
    </div>,
    <div className="item p-10 h-[40vh]" data-value="1">
      <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-center p-4 h-full">
        <p className="text-SuvaGrey ">
          “Teachings of the great explore of truth, the master-builder of human
          happiness. no one rejects,dislikes, or avoids pleasure itself,
          pleasure itself”
        </p>
        <div className="flex gap-2 items-center">
          <img src={studentuser3} />
          <div>
            <h3 className="font-bold">Finlay Kirk</h3>
            <h5 className="text-SuvaGrey text-sm">Web Developper</h5>
          </div>
        </div>
      </div>
    </div>,
    <div className="item p-10 h-[40vh]" data-value="1">
      <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-center p-4 h-full">
        <p className="text-SuvaGrey ">
          “Teachings of the great explore of truth, the master-builder of human
          happiness. no one rejects,dislikes, or avoids pleasure itself,
          pleasure itself”
        </p>
        <div className="flex gap-2 items-center">
          <img src={studentuser1} />
          <div>
            <h3 className="font-bold">Finlay Kirk</h3>
            <h5 className="text-SuvaGrey text-sm">Web Developper</h5>
          </div>
        </div>
      </div>
    </div>,
    <div className="item p-10 h-[40vh]" data-value="1">
      <div className="flex flex-col gap-5 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-center p-4 h-full">
        <p className="text-SuvaGrey ">
          “Teachings of the great explore of truth, the master-builder of human
          happiness. no one rejects,dislikes, or avoids pleasure itself,
          pleasure itself”
        </p>
        <div className="flex gap-2 items-center">
          <img src={studentuser2} />
          <div>
            <h3 className="font-bold">Finlay Kirk</h3>
            <h5 className="text-SuvaGrey text-sm">Web Developper</h5>
          </div>
        </div>
      </div>
    </div>,
  ];

  const onSlideChange = (e) => {
    console.debug(
      `onSlideChange => Item's position before a change: ${e.item}. Event:`,
      e
    );
  };

  const onSlideChanged = (e) => {
    console.debug(
      `onSlideChanged => Item's position after changes: ${e.item}. Event:`,
      e
    );
  };

  return (
    <>
      <div className="w-[100%]">
        <AliceCarousel

          mouseTracking
          keyboardNavigation
          items={items}
          responsive={responsive}
          onSlideChange={onSlideChange}
          onSlideChanged={onSlideChanged}
        />
      </div>
    </>
  );
}

export default Carousels;
