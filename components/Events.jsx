import React from "react";
import { GiBrain, GiMicrophone, GiRobotLeg } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";
import Link from "next/link";

const EventCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-col justify-center items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl text-center">
    <div
      className={`w-20 h-20 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg font-bold">{title}</h3>
      <p className="mt-1 text-white text-sm text-center w-full md:w-9/12 mx-auto">
        {subtitle}
      </p>
    </div>
  </div>
);

const Events = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-center">
          Check out all the events
          <br />
          you can take part in!
        </h1>
      </div>

      <div className="flex-1 flex justify-center items-center pt-12 flex-wrap">
        <Link href="/events/robotics">
          <EventCard
            color="bg-[#2952E3]"
            title="Robotics"
            icon={<GiRobotLeg fontSize={50} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
        <Link href="/events/coding">
          <EventCard
            color="bg-[#8945F8]"
            title="Coding"
            icon={<FaCodeBranch fontSize={50} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
        <Link href="/events/gaming">
          <EventCard
            color="bg-[#F84550]"
            title="Gaming"
            icon={
              <IoLogoGameControllerB fontSize={50} className="text-white" />
            }
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
        <Link href="/events/speakup">
          <EventCard
            color="bg-[#F84550]"
            title="Speak Up"
            icon={<GiMicrophone fontSize={50} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
        <Link href="/events/innovation">
          <EventCard
            color="bg-[#F84550]"
            title="Innovation"
            icon={<SiMinds fontSize={50} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
        <Link href="/events/braingames">
          <EventCard
            color="bg-[#F84550]"
            title="Brain Games"
            icon={<GiBrain fontSize={50} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
        <Link href="/events/entertainment">
          <EventCard
            color="bg-[#F84550]"
            title="Entertainment"
            icon={<MdOutlineFestival fontSize={50} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </Link>
      </div>
    </div>
  </div>
);

export default Events;
