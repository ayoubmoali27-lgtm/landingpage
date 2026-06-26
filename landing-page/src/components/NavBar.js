import logo from "@/Sources/Image/logo.png";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
const navItems = [
  { label: "Features", href: "#Features" },
  { label: "Workflow", href: "#Workflow" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Feedback", href: "#feedback" },
];

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNavBar = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="sticky w-full top-0 z-50 py-3 backdrop-blur-lg border-b-2 border-neutral-200">
      {/* Div of the entire nav bar */}
      <div className=" px-4 w-full relative ">
        {/* Second div for the justify contents */}

        <div className="flex justify-between items-center w-full">
          {/* Image and Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">eatR</span>
          </div>
          {/*--- Image and Logo ---*/}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="btn">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* div ofthe eight button */}
          <div className="hidden lg:flex justify-end space-x-12 items-center">
            <button className="btn-sign">Sign In</button>

            <button className="bt">
              Get in touch
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <IconButton aria-label="menu" onClick={toggleNavBar}>
              {toggleMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>

          {/* ---div ofthe eight button--- */}
        </div>
        {toggleMenu && (
  <div className="fixed top-0 right-0 z-50 bg-white w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
    {/* close button inside the drawer */}
    <div className="absolute top-4 right-4">
      <IconButton aria-label="close" onClick={toggleNavBar}>
        <CloseIcon />
      </IconButton>
    </div>

    <ul>
      {navItems.map((item, index) => (
        <li key={index} className="py-4 text-center">
          <a href={item.href} className="btn">
            {item.label}
          </a>
        </li>
      ))}
    </ul>

    <div className="flex space-x-6 pt-6">
      <button className="btn-sign">Sign In</button>
      <button className="bt">
        Get in touch
        <div className="hoverEffect">
          <div></div>
        </div>
      </button>
    </div>
  </div>
)}

        {/* --Second div for the justify contents-- */}
      </div>
      {/* ----Div of the entire nav bar---- */}
    </nav>
  );
};
export default NavBar;
