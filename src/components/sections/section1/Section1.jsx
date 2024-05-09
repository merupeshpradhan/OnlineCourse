import React from "react";
import Landing from "./Landing";
import InfoBox from "./InfoBox";

function Section1() {
  return (
    <>
      <section className="lg:mb-[20vh] md:mb-[20vh] flex flex-col items-center relative">
        <div className="lg:h-[115vh] md:h-[70vh] flex bg-FloralWhite">
          <Landing />
        </div>
        <div className="w-full flex justify-center">
          <InfoBox />
        </div>
      </section>
    </>
  );
}

export default Section1;
