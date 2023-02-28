import React from "react";
import { AiOutlineEnvironment, AiFillStar } from "react-icons/ai";
import { FaHouseDamage, FaSafari } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "../utils/DatePicker";
import Footer from "./Footer";
import HomeReview from "./HomeReview";
import ReserveForm from "./ReserveForm";

const HomeDetails = () => {
  return (
    <>
      <section className="w-[90%] lg:w-[85%] mx-auto">
        <section className="container overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-[400px] mt-32 mb-12  gap-2">
          <article className="">
            <img
              src="https://media.istockphoto.com/id/1318363878/photo/luxury-modern-bedroom-interior-at-night.jpg?b=1&s=170667a&w=0&k=20&c=92VQlNjNQbG4V2eWlsGNNc9kuqbYTCwjRvriOQIQ2lc="
              alt=""
              className="h-[400px] w-full rounded-l-lg object-cover object-center"
            />
          </article>

          <div className="flex flex-col lg:flex-row flex-wrap max-h-[400px] h-full gap-y-2  -my-2">
            <article className="h-1/2 w-1/2">
              <img
                src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="  w-full h-full pr-2"
              />
            </article>
            <article className="h-1/2 w-1/2">
              <img
                src="https://images.unsplash.com/photo-1653668428003-22428ea09cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8UUszbWFWWHc3eW98fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" rounded-tr-lg h-full w-full"
              />
            </article>
            <article className="h-1/2 w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" w-full h-full pr-2"
              />
            </article>
            <article className="h-1/2 w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" rounded-br-lg h-full w-full"
              />
            </article>
          </div>
        </section>

        <section className="container mt-12 flex flex-col lg:flex-row lg:space-x-6">
          <div className="w-full lg:w-2/3 pb-12 lg:pb-24 lg:pr-8">
            <article className=" flex justify-between border p-8   items-center rounded-lg">
              <div>
                <div className="flex flex-col items-start  space-y-4">
                  <h2 className="text-[20px] lg:text-[32px] font-semibold text-primary font-gilda">
                    SigmaBase Apartments
                  </h2>{" "}
                </div>
                <p className="text-[13px] lg:text-sm mt-2 inline-flex items-center font-inter">
                  <span class="pr-1 rounded-full text-xs font-medium inline-flex items-center dark:bg-primary-200 dark:text-primary-800 text-gray-700">
                    <AiOutlineEnvironment className="w-5 h-5 text-primary" />
                  </span>
                  7/9 Molade Okoya Thomas, Victoria Island. Lagos
                </p>
                <p className="flex items-center font-medium pr-6  text-[16px] text-gray-500 mt-3">
                  <AiFillStar className="text-[15px] lg:text-[20px] text-yellow-500" />
                  <AiFillStar className="text-[15px] lg:text-[20px] text-yellow-500" />
                  <AiFillStar className="text-[15px] lg:text-[20px] text-yellow-500" />
                  <AiFillStar className="text-[15px] lg:text-[20px] text-yellow-500" />
                  <AiFillStar className="text-[15px] lg:text-[20px] text-yellow-500" />
                  (4.8)
                </p>
              </div>

              <div className="flex flex-row space-x-12 pr-8"> </div>
            </article>

            <article className="border px-8 pb-8 pt-4  justify-center items-center rounded-lg mt-8">
              <h2 className="text-[20px]  lg:text-[25px] font-semibold text-primary mb-6  font-gilda">
                Overview
              </h2>
              <p className="text-[13px] lg:text-sm font-inter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, sequi, architecto at porro iure voluptate quo non iste
                quod eos ea nobis dolor, quasi delectus eaque doloremque? Illum,
                quis placeat!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex aspernatur ipsum earum mollitia, esse ipsam veritatis
                doloremque sint! Aliquam mollitia voluptates id veritatis. Natus
                modi debitis molestiae cumque numquam.
              </p>
            </article>

            <article className="mt-8 border  p-8 pt-4  justify-center items-center rounded-lg ">
              <h2 className="text-[20px] lg:text-[25px] font-semibold text-primary mb-6 font-gilda ">
                Available Amenities
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 font-inter">
                <p className="flex text-[13px] lg:text-sm space-x-2  mt-3 items-center">
                  <span className="pr-2"></span>
                  <span className="text-gray-700"> HDTV with Cable</span>
                </p>

                <p className="flex text-[13px] lg:text-sm  text-slate-700 space-x-2  mt-3 items-center">
                  <span className="pr-2"></span>
                  <span> Air conditioner</span>
                </p>
                <p className="flex  text-[13px] lg:text-sm  space-x-2  mt-3 items-center">
                  <span className="pr-2"></span>
                  <span> Free Wireless Internet</span>
                </p>

                <p className="flex text-[13px] lg:text-sm   space-x-2  mt-3 items-center">
                  <span className="pr-2">
                    {/* <FontAwesomeIcon */}
                    {/* icon={FaPersonDrowning}
                  className=" w-8 h-8 text-gray-600" /> */}
                  </span>
                  <span> Swimming Pool</span>
                </p>
                <p className="flex text-[13px] lg:text-sm  space-x-2  mt-3 items-center">
                  <span className="pr-2">
                    {/* <FontAwesomeIcon */}
                    {/* icon={FaBiohazard}
                  className=" w-8 h-8 text-gray-600" /> */}
                  </span>
                  <span> Laundry &amp; Washer</span>
                </p>
                <p className="flex text-[13px] lg:text-sm space-x-2  mt-3 items-center">
                  <span className="pr-2">
                    {/* <FontAwesomeIcon */}
                    {/* icon={FaWineGlass}
                  className=" w-6 h-6 text-gray-600" /> */}
                  </span>
                  <span> Relaxation &amp; Lounge</span>
                </p>
                <p className="flex text-[13px] lg:text-sm  space-x-2  mt-3 items-center">
                  <span className="pr-2">
                    {/* <FontAwesomeIcon */}
                    {/* icon={FaTemperatureArrowUp}
                  className=" w-6 h-6 text-gray-600" /> */}
                  </span>
                  <span> Water Heater</span>
                </p>

                <p className="flex text-[13px] lg:text-sm  space-x-2  mt-3 items-center">
                  <span className="pr-2">
                    {/* <FontAwesomeIcon */}
                    {/* icon={FaDumbbell}
                  className=" w-8 h-8 text-gray-600" /> */}
                  </span>
                  <span> Gym &amp; Fitness</span>
                </p>
                <p className="flex text-[13px] lg:text-sm  space-x-2  mt-3 items-center">
                  <span className="pr-2">
                    {/* <FontAwesomeIcon */}
                    {/* icon={FaAutomobile}
                  className=" w-6 h-6 text-gray-600" /> */}
                  </span>
                  <span>Free Parking Space</span>
                </p>
              </div>
            </article>

            <article className="mt-8 border  p-8 pt-4  justify-center items-center rounded-lg  ">
              <h2 className="text-[20px] lg:text-[25px] font-semibold text-primary mb-6 font-gilda ">
                SigmaBase Policies
              </h2>

              <ul className="space-y-4 mt-8 font-inter ">
                <li className="text-[13px] lg:text-sm ">
                  The minimum duratiion for stay in this apartment is 2 nights
                </li>
                <li className="text-[13px] lg:text-sm ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum minus quod magnam nemo amet ratione.
                </li>
                <li className="text-[13px] lg:text-sm ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum minus quod magnam nemo amet ratione.
                </li>
                <li className="text-[13px] lg:text-sm ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum minus quod magnam nemo amet ratione.
                </li>
              </ul>
              <div className="flex justify-end pr-12">
                <button className="border border- bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded font-semibold  text-white mt-6 text-[14px] lg:text-[18px]">
                  View Guest Policies
                </button>
              </div>
            </article>

            <HomeReview />
          </div>
          <ReserveForm />
        </section>
      </section>

      <Footer />
    </>
  );
};

export default HomeDetails;
