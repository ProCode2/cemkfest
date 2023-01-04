import React, { useEffect } from "react";
import Confetti from "react-confetti";

const ClientConfetti = ({ setRenderConfetti }) => {
  useEffect(() => {
    setTimeout(() => setRenderConfetti(false), 10000);
  }, []);

  return typeof window !== "undefined" ? (
    <div className="w-screen h-screen absolute -left-50">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  ) : (
    <></>
  );
};

export default ClientConfetti;
