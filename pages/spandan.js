import React from "react";
import TimeLine from "../components/TimeLine";
import Image from "next/image";

const SpandanPage = () => {
  return (
    <div className="w-full min-h-screen pt-20 bg-gradient-4">
      <div className="max-w-5xl bg-transparent mx-auto flex flex-col justify-start items-center">
        <div className="max-w-2xl border border-slate-700 rounded-md shadow-md mx-atuo m-2 mt-12 p-4 text-center mb-0">
          <h2 className="text-2xl md:text-4xl uppercase font-bold tracking-wider mb-3">
            Spandan 2k23
          </h2>
          <p className="text-sm md:text-base text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quam sint nisi repellendus totam libero ex vel? Eum
            maxime facilis quis quisquam possimus sit dolorem nobis asperiores
            libero quidem. Natus!
          </p>
        </div>
        <TimeLine />
      </div>
      <div className="hidden md:block max-w-4xl md:h-[800px] bg-transparent p-6 mx-auto">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md shadow-lg shadow-gray-900">
          <div className="flex-[3] bg-slate-800"></div>
          <div className="flex flex-[7] bg-white">
            <div className="flex-[2]"></div>
            <div className="flex flex-[8] flex-col bg-red-500">
              <div className="flex flex-[7] bg-yellow-400">
                <div className="flex flex-[7] flex-col bg-green-500">
                  <div className="flex-[3]"></div>
                  <div className="flex flex-[7] bg-slate-500">
                    <div className="flex-[2]"></div>
                    <div className="flex flex-[8] flex-col bg-blue-500">
                      <div className="flex flex-[7] bg-yellow-400">
                        <div className="flex-[7]"></div>
                        <div className="flex flex-[3] flex-col bg-white"></div>
                      </div>
                      <div className="flex-[3]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[3] flex-col bg-slate-400"></div>
              </div>
              <div className="flex-[3]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpandanPage;
