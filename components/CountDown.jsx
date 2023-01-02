import React, { useEffect, useState } from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { useCountdown } from "../hooks/useCountdown";

const CountDown = (time) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false); // to avoid react hydration error
  const [days, hours, minutes, seconds] = useCountdown("Jan 3 2023 00:00:00");

  useEffect(() => setInitialRenderComplete(true), []);
  return (
    <div className="text-sm md:text-base blue-glassmorphism text-white font-mono flex justify-center items-center p-2 rounded-lg mb-3">
      <BsFillAlarmFill fontSize={24} className="mr-2" />
      {initialRenderComplete ? (
        days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ? (
          <p>CEMK Lets Roll!</p>
        ) : (
          <div className="flex justify-center items-center">
            <p className="w-6">{days}</p>
            <p>:</p>
            <p className="w-6">{hours}</p>
            <p>:</p>
            <p className="w-6">{minutes}</p>
            <p>:</p>
            <p className="w-6">{seconds}</p>
          </div>
        )
      ) : null}
    </div>
  );
};

export default CountDown;
