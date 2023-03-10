import React, { useEffect, useRef, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { motion } from "framer-motion";
import { useOnScreen } from "../hooks/useOnScreen";

const TimeLine = ({ logoLink, title, subTitle }) => {
  const scrollPosition = useScrollPosition();
  const barRef = useRef();
  const pointRef = useRef();
  const [showBar, setShowBar] = useState(false);
  const [showPoint, setShowPoint] = useState(false);
  let barVisible;
  let pointVisible;
  barVisible = useOnScreen(barRef);
  pointVisible = useOnScreen(pointRef);

  useEffect(() => {
    if (barVisible) setShowBar(true);
    else setShowBar(false);

    if (pointVisible) setShowPoint(true);
    else setShowPoint(false);
  }, [scrollPosition, barVisible, pointVisible]);
  return (
    <>
      <motion.div
        ref={barRef}
        className="w-1 md:w-2 bg-[#49668c]"
        animate={{
          height: showBar && 300,
        }}
      ></motion.div>
      <motion.div
        ref={pointRef}
        className="w-8 h-8 md:w-14 md:h-14 bg-[#49668c] border-4 border-slate-100 rounded-full relative"
        animate={{
          opacity: showPoint ? 1 : 0,
        }}
      >
        {logoLink ? (
          <motion.div
            initial={{ x: showPoint ? -100 : 0, opacity: showPoint ? 1 : 0 }}
            animate={{ x: showPoint ? 0 : -100, opacity: showPoint ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -left-[218px] md:-left-[245px] -top-[38px]"
          >{logoLink}</motion.div>
        ) : null}
        {title || subTitle ? (
          
          <motion.div
            initial={{
              x: showPoint ? 100 : 0,
              opacity: showPoint ? 1 : 0,
            }}
            animate={{
              x: showPoint ? 0 : 100,
              opacity: showPoint ? 1 : 0,
            }}
            transition={{ delay: 0.4 }}
            className="info-section-overlay w-[140px] md:w-72 rounded-md p-4 shadow-md shadow-slate-800 block absolute -right-[158px] md:-right-[360px] -top-[10px]"
          >
            
            <div className="w-full h-full relative">
              {title ? (
                <div className="uppercase tracking-wider font-bold text-base md:text-3xl">
                  {title}
                </div>
              ) : null}
              {subTitle ? (
                <p className="text-xs md:text-sm w-full">{subTitle}</p>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </>
  );
};

export default TimeLine;
