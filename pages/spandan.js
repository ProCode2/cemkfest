import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import TimeLine from "../components/TimeLine";
import { BiShareAlt } from "react-icons/bi";
import Head from "next/head";
import SLogo from "../public/images/spandan_logo.webp";
import Image from "next/image";
import SpandanGallery from "../components/SpandanGallery";

const SpandanPage = () => {
  const songs = [
    {
      link: "https://www.youtube.com/watch?v=PoQFP-sb-uQ",
      src: "/ure_jawa.mp3",
    },
    {
      link: "https://www.youtube.com/watch?v=asFPrC2RudI",
      src: "/se_amare.mp3",
    },
  ];
  const [songLink, setSongLink] = useState("");
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);
  const playAudio = () => {
    setPlaying(true);
    const song = songs[Math.floor(Math.random() * songs.length)];
    setSongLink(song.link);
    audioRef.current.src = song.src;
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setPlaying(false);
    setSongLink("");
    audioRef.current.pause();
  };

  useEffect(() => {
    playAudio();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen pt-32 bg-gradient">
        <div className="max-w-5xl bg-transparent mx-auto flex flex-col justify-start items-center">
          <div className="max-w-2xl rounded-md shadow-md mx-atuo m-2 mt-12 p-4 text-center mb-0">
            <Image src={SLogo} alt="Spandan 2K23" />
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
        <div className="block md:hidden max-w-4xl bg-transparent p-6 mx-auto">
          <SpandanGallery />
        </div>
        {/* fixed bottom-10 right-10 p-4 rounded-md shadow-md text-sm text-slate-900 bg-slate-100 */}
        <div className="fixed bottom-3 right-3 md:bottom-8 md:right-8 p-4 rounded-md shadow-md max-w-max">
          <span className="relative flex h-12 w-40">
            <span
              className={`absolute inline-flex h-full w-full rounded-md bg-sky-400 opacity-75 justify-center items-center ${
                playing ? "animate-ping" : ""
              }`}
            ></span>
            <span
              className="cursor-pointer relative inline-flex rounded-md h-12 w-40 bg-sky-500 text-sm justify-center items-center"
              onClick={() => {
                if (playing) pauseAudio();
                else playAudio();
              }}
            >
              {playing ? "Pause" : "Play songs of our artists"}
              {playing ? (
                <Link
                  target="_blank"
                  href={songLink}
                  className="absolute -top-4 -right-3"
                >
                  <BiShareAlt
                    fontSize={40}
                    className="bg-slate-700 text-white p-2 rounded-full shadow-md"
                  />
                </Link>
              ) : null}
            </span>
          </span>
        </div>

        <audio ref={audioRef} src="/se_amare.mp3" className="hidden"></audio>
      </div>
    </>
  );
};

export default SpandanPage;
