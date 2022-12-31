import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white">
      {text}
    </button>
  );
};

export default Button;
