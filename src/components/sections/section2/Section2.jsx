import React from "react";
import SubHead from "./SubHead";
import Cards from "./Cards";
import SubBaner from "./SubBaner";

function Section2() {
  return (
    <>
      <section className="flex items-center justify-center flex-col ">
        <SubHead />
        <Cards />
        <SubBaner />
      </section>
    </>
  );
}

export default Section2;
