import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import useScrollPosition from "../hooks/useScrollPosition";
import Link from "next/link";

const HeroInfo = () => {
  const scrollPosition = useScrollPosition();
  const socialRef = useRef();
  const [showSocial, setShowSocial] = useState();

  useEffect(() => {
    if (scrollPosition < 30) setShowSocial(true);
    else setShowSocial(false);
  }, [scrollPosition]);
  return (
    <div className="h-full">
      <motion.div
        animate={{
          x: showSocial ? 0 : -100,
        }}
        className="h-full flex flex-col justify-center items-start max-w-max"
      >
        <div className="bg-[rgba(0,0,0,0.5)] p-4 rounded-md shadow-md flex flex-col justify-center items-center space-y-5 md:space-y-8">
          <Link target="_blank" href="https://www.facebook.com/resoXIInance23">
            <span>
              <AiFillFacebook fontSize={25} className="hover:text-slate-300" />
            </span>
          </Link>
          <Link target="_blank" href="https://www.facebook.com/span23dan">
            <span>
              <AiFillFacebook fontSize={25} className="hover:text-slate-300" />
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/cemkfest_official/"
          >
            <span>
              <AiFillInstagram fontSize={25} className="hover:text-slate-300" />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroInfo;
