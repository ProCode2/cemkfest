import React from "react";
import Button from "./Button";

const Cultutal = ({ spandanRef }) => {
  return (
    <section
      ref={spandanRef}
      className="w-full bg-gradient-3 flex justify-center items-center py-20"
    >
      <div className="flex-1 flex justify-end items-center mr-20">
        <div className="bg-slate-300 font-bold p-10 rounded-full max-w-max text-3xl">
          LOGO
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="w-full h-full flex flex-col justify-center items-start">
          <h1 className="text-gradient font-bold text-3xl md:text-6xl tracking-wide text-left">
            Spandan 2k23
          </h1>
          <p className="text-base md:text-lg mt-2 mb-3">
            Devolve into the cultural fest of CEMK.
          </p>
          <Button text="Know More" />
        </div>
      </div>
    </section>
  );
};

export default Cultutal;
