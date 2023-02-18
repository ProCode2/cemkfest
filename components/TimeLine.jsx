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
        className="w-3 bg-[#49668c]"
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
            className="w-16 h-16 md:w-32 md:h-32 bg-black rounded-full shadow-md absolute -left-[130px] md:-left-[245px] -top-[20px]"
          ></motion.div>
        ) : null}
        <motion.div
          initial={{ x: showPoint ? 100 : 0, opacity: showPoint ? 1 : 0 }}
          animate={{ x: showPoint ? 0 : 100, opacity: showPoint ? 1 : 0 }}
          transition={{ delay: 0.9 }}
          className="info-section-overlay w-[140px] md:w-72 rounded-md p-4 shadow-md shadow-slate-800 block absolute -right-[158px] md:-right-[360px] -top-[10px]"
        >
          <div className="w-full h-full relative">
            {title ? (
              <h3 className="uppercase tracking-wider font-bold text-sm md:text-3xl mt-b">
                {title}
              </h3>
            ) : null}
            {subTitle ? (
              <p className="text-xs md:text-sm w-full">{subTitle}</p>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TimeLine;
