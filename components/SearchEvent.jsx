import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Button from "../components/Button";

const SearchEvent = () => {
  const getSearchResults = () => {
    return [1];
  };
  return (
    <div className="relative w-full max-w-2xl mx-2 mt-4">
      <div className="p-3 blue-glassmorphism rounded-full flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-full">
          <BiSearchAlt fontSize={24} className="" />
          <input
            type="text"
            placeholder="search for an event"
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm md:text-base"
          />
        </div>

        <Button text="find" />
      </div>
      <div className="absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md blue-glassmorphism shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {getSearchResults().length == 0 ? (
          <div className="py-8 text-center text-slate-600 text-4xl font-bold">
            No Results found
          </div>
        ) : (
          <div>
            <div className="py-3 pl-2 md:pl-4">
              <h3 className="text-xl text-slate-400 font-bold">
                Robo War 15Kg
              </h3>
              <p className="text-xs text-slate-600">
                The fight of wars here we ...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchEvent;
