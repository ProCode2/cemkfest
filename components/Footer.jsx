import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/images/long_logo_slim.webp";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="sm:w-[90%] flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex justify-center items-center">
        <Image src={Logo} width={250} />
      </div>
      <div className="flex justify-end items-center flex-wrap sm:mt-0 mt-5 w-full">
        {/* <p className="text-white text-base text-center mx-2 cursor-pointer">
          Brochure
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Sponsorships
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Team
        </p> */}
        <Link href="tel: +91 6291180934"><p className="text-white text-base text-center mx-2 cursor-pointer">
          Contact
        </p></Link>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        it2019@cemk.ac.in
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Made by <Link href="https://twitter.com/prodipto221">Pradipta Ghoshal</Link></p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
