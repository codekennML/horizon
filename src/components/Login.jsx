import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className=" relative bg-gradient-to-br from-orange-100  to-yellow-100 bg-white overflow-hidden h-screen justify-center items-center flex ">
      <div className="relative z-10 flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                  <Link className="mb-28 inline-block" href="#"></Link>
                  <h2 className="mb-16 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight font-gilda text-gray-600">
                    Sign in for awesome luxury deals.
                  </h2>

                  <ul className="md:max-w-xs">
                    <li className="mb-5 flex flex-wrap">
                      <span>
                        <AiOutlineCheckCircle className="w-5 h-5 text-primary mr-2" />
                      </span>
                      <span className="flex-1 font-medium leading-relaxed">
                        The best you can do in no time at all, amazing feature
                        goes here
                      </span>
                    </li>
                    <li className="mb-5 flex flex-wrap">
                      <span>
                        <AiOutlineCheckCircle className="w-5 h-5 text-primary mr-2" />
                      </span>
                      <span className="flex-1 font-medium leading-relaxed">
                        24/7 Support of our dedicated, highly professional team
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8  mix-blend-overlay mt-8 ">
          <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full ">
            <form className="md:max-w-lg mx-auto bg-white p-8 pt-12 rounded-lg shadow-md">
              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">
                  Email Address *
                </p>
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:outline-0"
                  id="signInInput1-1"
                  type="text"
                  placeholder="Enter email address"
                />
              </label>
              <label className="block mb-5">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">
                  Password *
                </p>
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="signInInput1-2"
                  type="password"
                  placeholder="********"
                />
              </label>
              <div className="flex flex-wrap justify-between -m-2 mb-4">
                <div className="w-auto p-2">
                  <div className="flex items-center">
                    <input
                      className="w-4 h-4 accent-primary"
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                    />
                    <label
                      className="ml-2 text-sm text-gray-900 font-medium"
                      for="default-checkbox"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <Link
                    className="text-sm text-primary hover:text-yellow-600 font-medium "
                    to="/login"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <button
                className="mb-9 py-4 px-9 w-full text-white font-semibold  border-indigo-700 rounded shadow-4xl  bg-yellow-600 hover:bg-yellow-700 transition ease-in-out duration-200"
                type="button"
              >
                Sign In
              </button>
              <p className="mb-5 text-sm text-gray-500 font-medium text-center">
                Or continue with
              </p>
              <div className="flex flex-wrap justify-center -m-2">
                <div className="w-auto p-2">
                  <button className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <img
                      className="mr-3"
                      src="flaro-assets/logos/brands/google.svg"
                      alt=""
                    />
                    <span className="font-semibold leading-normal">
                      Sign in with Google
                    </span>
                  </button>
                </div>
                <div className="w-auto p-2">
                  <button className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <img
                      className="mr-3"
                      src="flaro-assets/logos/brands/fb.svg"
                      alt=""
                    />
                    <span className="font-semibold leading-normal">
                      Sign in with Facebook
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
