import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Loader from "./Loader";
import useScrollPosition from "../hooks/useScrollPosition";
import Link from "next/link";

import Logo from "../public/images/long_logo_slim.png";
import Image from "next/image";
import { useOnClickOutside } from "../hooks/useOnClickOutSide";
import { useRouter } from "next/router";

const NavBarItem = ({ title, classprops, link }) => {
  return (
    <Link href={link}>
      <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    </Link>
  );
};

const Navbar = ({admin}) => {
  // console.log(teamRef);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [updateNavColor, setUpdateNavColor] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const scrollPos = useScrollPosition();

  const hamRef = useRef(null);

  
  useOnClickOutside(hamRef, () => setToggleMenu(false));
  router?.events?.on("routeChangeStart", (_) => setToggleMenu(false));


  useEffect(() => {
    if (scrollPos > 100) {
      setUpdateNavColor(true);
    } else {
      setUpdateNavColor(false);
    }
  }, [scrollPos, toggleMenu]);

  return (
    <nav
      className={`w-full flex md:justify-center justify-between items-center p-4 fixed top-0 left-0 z-30 ${
        updateNavColor ? "nav-glassmorphism" : "bg-transparent"
      }`}
    >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
        <Link href="/">
          <Image src={Logo} width={250} alt="Resonance XII" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { name: "Events", link: "/events" },
          { name: "Spandan", link: "/spandan" },
          status == "authenticated" && ({ name: "Profile", link: "/profile" }),
          admin && ({ name: "Admin", link: "/admin/events" })
        ].map((item, index) => (
          item && <NavBarItem
            key={item.name + index}
            title={item.name}
            link={item.link}
          />
        ))}
        {status == "loading" ? (
          <Loader classProps={"w-8 h-8"} />
        ) : status == "authenticated" ? (
          <li
            onClick={() => signOut()}
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Logout
          </li>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Login
          </button>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            ref={hamRef}
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              { name: "Events", link: "/events" },
              { name: "Spandan", link: "/spandan" },
              status == "authenticated" && ({ name: "Profile", link: "/profile" }),
              admin && ({ name: "Admin", link: "/admin/events" })
            ].map((item, index) => (
              item && <NavBarItem
                key={item.name + index}
                title={item.name}
                classprops="my-2 text-lg"
                link={item.link}
              />
            ))}
            {status == "loading" ? (
              <Loader classProps={"w-8 h-8"} />
            ) : status == "authenticated" ? (
              <li
                key="loyo"
                onClick={() => signOut()}
                className="mx-4 cursor-pointer my-2 text-lg"
              >
                Logout
              </li>
            ) : (
              <button
                key="yolo"
                onClick={() => signIn("google")}
                className="mx-4 cursor-pointer my-2 text-lg"
              >
                Login
              </button>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
