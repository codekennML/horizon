import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== "/" ? setIsHome(false) : setIsHome(true);
  }, [pathname]);

  function scroll() {
    window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <section>
      <header
        className={`${
          isHome && !isScroll
            ? "bg-[rgba(0,0,0,0.18)] text-yellow-600"
            : "bg-primary text-white"
        } transition-all ease duration-500 w-full  py-[1.5rem] lg:px-[6em] p-[2em]  lg:p-[0.8rem]  flex justify-between items-center fixed top-0 z-20`}
      >
        {/* Logo */}
        <div className="">
          <Link to="/" className="cursor-pointer ">
            <img
              src={logo}
              alt="home-logo"
              className="w-[80px] grayscale-[85%] filter brightness-200"
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="">
          <ul
            className={`  hidden  lg:flex  lg:pt-4 lg:flex-row lg:space-x-12  text-center space-y-4 lg:space-y-0 lg: uppercase lg:justify-between  font-medium font-inter 
          
            
            `}
          >
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Rooms</Link>
            </li>
            <li>
              <Link to="/details">Restaurant</Link>
            </li>
            <li>
              <Link to="/details">Event Space</Link>
            </li>
            <li>
              <Link to="/details">Facilities</Link>
            </li>
            <li className="px-6 py-1 rounded w-[30%] lg:w-max">
              <Link to="/login" className={`${isScroll ? "text-white" : ""}`}>
                Login
              </Link>
            </li>
          </ul>

          <ul
            className={`fixed pt-40  items-center justify-start space-y-12 flex flex-col text-white left-0 lg:relative  w-full h-screen lg:h-max  z-20 shadow-md py-[2em]  top-0 bottom-0 transition:opacity delay-600 opacity-100 duration-1000  bg-gray-900 lg:hidden ${
              showNav ? "left-[0%] opacity-100" : "opacity-0  left-[150%]"
            } `}
          >
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="details">Rooms</Link>
            </li>
            <li>
              <Link to="/details">Restaurant</Link>
            </li>
            <li>
              <Link to="/details">Event Space</Link>
            </li>
            <li>
              <Link to="/details">Facilities</Link>
            </li>

            <li className="bg-primary px-6 py-1 rounded w-[30%] text-center">
              <Link to="/login" className={`${isScroll ? "text-white" : ""}`}>
                Login
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowNav(false);
                }}
                className="absolute top-9  text-[2em] text-primary bg-white right-6 lg:hidden z-50"
              >
                <AiOutlineClose />
              </button>
            </li>
          </ul>
        </nav>

        {/* Nav toggle  */}
        <div className="lg:hidden">
          <button
            className=" text-white"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <AiOutlineMenu className="w-[30px] h-[40px] " />
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Navbar;
