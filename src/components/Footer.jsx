import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="pt-10 bg-gray-400/20 overflow-hidden  font-inter">
      <div className="container px-4 mx-auto w-[80%] mx-auto">
        <div className="pb-10 border-b">
          <div className="flex flex-wrap -m-8">
            <div className="w-full sm:w-1/2 lg:w-4/12 p-8">
              <div className="lg:max-w-sm">
                <img src={logo} alt="" width={200} height={150} />
                <p className="text-[14px]">
                  Most Luxurious Shortlet in Lagos State
                </p>
                <p className="mb-5 font-sans text-gray-600 leading-relaxed">
                  7/9 Milaskte Okiur , Victoria Island Lagos
                </p>
                <p>
                  <span className="flex flex-row ">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-primary font-gilda text-[25px]">
                Company
              </h3>
              <ul className="text-white">
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-primary font-gilda text-[25px]">
                Pages
              </h3>
              <ul>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Login
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Register
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Add list
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-primary font-gilda text-[25px]">
                Legal
              </h3>
              <ul>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Terms
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-primary font-gilda text-[25px]">
                Resources
              </h3>
              <ul>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Service
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-6 -m-4">
          <div className="w-auto p-4">
            <p className="text-sm text-gray-600 font-medium">
              Copyright &copy; 2022 Horizon. All Rights Reserved
            </p>
          </div>
          <div className="w-auto p-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-auto p-4">
                <Link className="text-primary">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="w-auto p-4">
                <Link className="text-primary" href="#">
                  <AiOutlineWhatsApp />
                </Link>
              </div>
              <div className="w-auto p-4">
                <Link className="text-primary" href="#">
                  <AiOutlineInstagram />
                </Link>
              </div>
              <div className="w-auto p-4">
                <Link className="text-primary" href="#">
                  <AiOutlineTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
