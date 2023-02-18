import React, { useEffect, useRef, useState } from "react";
import { GiBrain, GiMicrophone, GiRobotLeg } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useScrollPosition from "../hooks/useScrollPosition";
import { useOnScreen } from "../hooks/useOnScreen";

const EventCard = ({ color, title, icon, subtitle }) => {
  const scrollPosition = useScrollPosition();
  const eventsRef = useRef();
  const [showEvents, setShowEvents] = useState(false);
  let eventsVisible;
  if (typeof window !== "undefined") {
    eventsVisible = useOnScreen(eventsRef);
  }

  useEffect(() => {
    if (eventsVisible) setShowEvents(true);
    else setShowEvents(false);
  }, [scrollPosition]);
  return (
    <motion.div
      ref={eventsRef}
      animate={{
        opacity: showEvents ? 1 : 0,
        x: showEvents ? 0 : -100,
      }}
      transition={{ duration: 0.4 }}
      style={{ transform: "rotate3d(0, 1, 0, var(--rotate))" }}
      className="flex flex-col justify-center items-center cursor-pointer hover:shadow-xl text-center shadow-md shadow-slate-800 bg-[#14191f] rounded-md p-2 z-10"
    >
      <div
        className={`w-12 h-12 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-white font-bold text-sm md:text-lg mt-2">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const Events = ({ eventRef }) => {
  return (
    <div ref={eventRef} className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-xl md:text-3xl py-2 text-gradient text-center">
            Check out all the events
            <br />
            you can take part in!
          </h1>
        </div>

        <div className="flex-1 pt-8 grid grid-cols-3 gap-x-3 gap-y-6">
          <Link href="/events/robotics">
            <EventCard
              color="bg-[#2952E3]"
              title="Robotics"
              icon={<GiRobotLeg fontSize={20} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
          <Link href="/events/coding">
            <EventCard
              color="bg-[#8945F8]"
              title="Coding"
              icon={<FaCodeBranch fontSize={20} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
          <Link href="/events/gaming">
            <EventCard
              color="bg-[#F84550]"
              title="Gaming"
              icon={
                <IoLogoGameControllerB fontSize={20} className="text-white" />
              }
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
          <Link href="/events/speakup">
            <EventCard
              color="bg-[#F84550]"
              title="Speak Up"
              icon={<GiMicrophone fontSize={20} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
          <Link href="/events/innovation">
            <EventCard
              color="bg-[#F84550]"
              title="Innovation"
              icon={<SiMinds fontSize={20} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
          <Link href="/events/braingames">
            <EventCard
              color="bg-[#F84550]"
              title="Brain Games"
              icon={<GiBrain fontSize={20} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
          <Link href="/events/entertainment">
            <EventCard
              color="bg-[#F84550]"
              title="Entertainment"
              icon={<MdOutlineFestival fontSize={20} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
