import Head from "next/head";
import { BsPlusLg } from "react-icons/bs";
import Events from "../components/Events";
// import CountDown from "../components/CountDown";
import { useEffect, useRef, useState } from "react";
import Cultutal from "../components/Cultural";
import Team from "../components/Team";
import SearchEvent from "../components/SearchEvent";
import ArcReactor from "../components/ArcReactor";

import useScrollPosition from "../hooks/useScrollPosition";
import { useOnScreen } from "../hooks/useOnScreen";
import TimeLine from "../components/TimeLine";
import HeroInfo from "../components/HeroInfo";
import Image from "next/image";

import ResonanceLong from "../public/images/long_logo.png";

export default function Home({ teamRef, spandanRef, eventRef }) {
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Unleash The Matrix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full min-h-screen flex-col relative">
        <video
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
          src="/images/bg.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <div className="hero-section-overlay absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <HeroInfo />
        </div>
        <Image
          src={ResonanceLong}
          width={500}
          className="absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto drop-shadow-xl z-30"
        />
      </section>
      <section className="bg-gradient w-full flex flex-col justify-center items-center pb-8 overflow-hidden">
        <TimeLine
          logoLink={"something"}
          title={<Image src={ResonanceLong} />}
          subTitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem iste quia quas ducimus aspernatur, quasi cum maxime fuga cupiditate possimus non omnis consectetur eius incidunt dicta recusandae adipisci voluptatum quis!"
          }
        />
        <TimeLine title="Events" />
        <Events />
        <TimeLine title="Sponsors" />
        <Events />
      </section>
    </>
  );
}
