import Head from "next/head";
import { BsFillAlarmFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Button from "../components/Button";
import Events from "../components/Events";
import Robotics from "../components/Robotics";
import Coding from "../components/Coding";
import Spandan from "../components/Spandan";
import Gaming from "../components/Gaming";
import Innovations from "../components/Innovations";
import BrainGames from "../components/BrainGames";
import Entertainment from "../components/Entertainment";
import Speakup from "../components/Speakup";

export default function Home() {
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Generated by ResonanceXII" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-screen h-full py-28 flex items-center justify-start flex-col">
        <div className="flex justify-center items-center m-4 flex-col text-center">
          <div className="text-sm md:text-base blue-glassmorphism text-white font-mono flex justify-center items-center p-2 rounded-lg mb-3">
            <BsFillAlarmFill fontSize={24} className="mr-2" />
            <span>12</span>
            <span>:</span>
            <span>43</span>
            <span>:</span>
            <span>56</span>
          </div>
          <div>
            <h1 className="text-gradient font-bold text-3xl md:text-6xl tracking-wide">
              Dive Into the Euphoria <br /> of all things Tech!
            </h1>
            <p className="text-base md:text-lg mt-2">
              at the heart of CEMK, Kolaghat
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-4 mb-20">
          <div className="p-3 blue-glassmorphism rounded-full flex justify-center items-center w-full max-w-2xl mx-2 mt-4">
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
        </div>
      </section>
      <section className="bg-gradient-2 w-screen relative min-h-screen">
        <div className="static md:absolute md:-top-24 md:left-0 md:right-0 flex justify-center items-center flex-wrap p-4">
          <div className="white-glassmorphism rounded-lg py-6 px-16 text-center m-4 max-w-max">
            <span className="inline-flex items-center justify-center text-6xl">
              30 <BsPlusLg className="w-6 h-6 ml-2" />
            </span>
            <p className="uppercase mt-4">Events</p>
          </div>
          <div className="white-glassmorphism rounded-lg py-6 px-16 text-center m-4 max-w-max">
            <span className="inline-flex items-center justify-center text-6xl">
              30 <BsPlusLg className="w-6 h-6 ml-2" />
            </span>
            <p className="uppercase mt-4">Events</p>
          </div>
          <div className="white-glassmorphism rounded-lg py-6 px-16 text-center m-4 max-w-max">
            <span className="inline-flex items-center justify-center text-6xl">
              30 <BsPlusLg className="w-6 h-6 ml-2" />
            </span>
            <p className="uppercase mt-4">Events</p>
          </div>
          <div className="white-glassmorphism rounded-lg py-6 px-16 text-center m-4 max-w-max">
            <span className="inline-flex items-center justify-center text-6xl">
              30 <BsPlusLg className="w-6 h-6 ml-2" />
            </span>
            <p className="uppercase mt-4">Events</p>
          </div>
        </div>
        <div className="pt-20">
          <Events />
        </div>
      </section>
    </>
  );
}
