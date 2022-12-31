import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Loader from "./Loader";

// import logo from "../public/vercel.svg";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 nav-gradient absolute top-0 left-0">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
        <h1 className="text-3xl font-koulen text-white font-bold">
          ResonanceXII
        </h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Events", "Blogs", "Workshops", "Team"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        {status == "loading" ? (
          <Loader />
        ) : status == "authenticated" ? (
          <span className="text-sm">Hi, {session.user.name}!</span>
        ) : (
          <li
            onClick={() => signIn("google")}
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Login
          </li>
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
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Events", "Blogs", "Workshops", "Team"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
            {status == "loading" ? (
              <Loader />
            ) : status == "authenticated" ? (
              <li>Hi, {session.user.name}!</li>
            ) : (
              <li
                key="yolo"
                onClick={() => signIn("google")}
                className="mx-4 cursor-pointer my-2 text-lg"
              >
                Login
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
