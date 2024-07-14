import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "Blogs",
  //   link: "/blogs",
  // },
  {
    name: "Best Places",
    link: "/best-places",
  },
  {
    name: "Suggest Us",
    link: "/suggestus",
  },
  {
    name: "Contact Us",
    link: "/ContactUs",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              {/* Removed content */}
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                {/* <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li> */}
                <li className="py-4">
                  <NavLink to="/best-places" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/SuggestUs" activeClassName="active">
                    Suggest Us
                  </NavLink></li>
                  <li className="py-4">
                  <NavLink to="/ContactUs" activeClassName="active">
                    Contact Us
                  </NavLink></li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              {/* Removed Book Now button */}
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
