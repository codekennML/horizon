import {
  AiFillStar,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlinePhone,
  AiOutlineStar,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import heroBanner from "../assets/banner-main.jpg";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const Hero = forwardRef((props, scrollRef) => {
  return (
    <section className="flex-section">
      <article className=" mt-12 lg:mt-0 lg:w-2/5 h-full relative">
        <div className="grid grid-cols-2  relative gap-4">
          <img
            className="h-full w-full block rounded-tl-md"
            src="https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2VwdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="travel-guest"
            srcset=""
            height="100%"
            width="400"
          />
          <img
            className="h-full w-full"
            src="https://media.istockphoto.com/id/1428092971/photo/happy-family-getting-key-card-at-hotels-front-desk.jpg?b=1&s=170667a&w=0&k=20&c=GaSBPIyoAqrD_GCncLVcHwWrZ0FXxyJAytq_fu8YLAk="
            alt="reception"
            srcset=""
            height="100%"
            width="400"
          />
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="reception"
            srcset=""
            height="100%"
            width="400"
          />
          <img
            className="h-full w-full block"
            src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="travel-guest"
            srcset=""
            height="100%"
            width="400"
          />
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWNrJTIwaW4lMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="reception"
            srcset=""
            height="100%"
            width="400"
          />

          <img
            className="h-full w-full rounded-br-md"
            src="https://media.istockphoto.com/id/1418165268/photo/happy-friends-having-christmas-dinner-at-home.jpg?b=1&s=170667a&w=0&k=20&c=ZYavyti7bhXnLeTw3CAy33WU252VQ6SZhRoM3nvFzcs="
            alt="reception"
            srcset=""
            height="100%"
            width="400"
          />
        </div>
        <div className=" w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] absolute  transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 p-4 bg-gray-600/30 mix-blend-lighten  "></div>
      </article>

      <article className="flex-1 w-full lg:w-3/5 space-y-2 ">
        <p className="text-[25px] text-primary flex-row flex space-x-2 pb-4">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
        <h3 className="text-[16px] lg:text-[14px] lg:tracking-[0.4em] font-gilda font-medium text-gray-500 my-[0.5em]">
          THE MOST LUXURIOUS SHORTLETS IN LAGOS
        </h3>
        <h1
          className="text-[25px] sm:text-[36px] lg:text-[40px] font-gilda tracking-[0.1em] font-medium text-gray-600
          "
        >
          Manifest a Luxury Experience
        </h1>

        <div className=" space-y-4 font-inter text-justify text-[14px] font-medium text-gray-900/70  ">
          <p>
            Welcome to the Horizon.With over 200 rooms, we provide a prime
            waterfront location with panoramic views of the Atlantic Ocean as
            well as impressive array of recreational facilities, including a
            world-class spa, fitness center, and swimming pool. The spa is a
            tranquil oasis, offering guests a range of treatments designed to
            relax and rejuvenate the mind and body. The fitness center is
            equipped with the latest cardio and weight training equipment, and
            guests can also take part in a variety of fitness classes, including
            yoga and Pilates.
          </p>

          <div className=" space-y-6">
            <p>
              One of the highlights of your stay will always be the dining
              experience. Horizon's main restaurant offers a tantalizing menu of
              international cuisine, and you relish every bite of the perfectly
              cooked steak and the accompanying sides. The sommelier recommends
              an excellent wine to complement your meal, and you savor every sip
              as you take in the stunning view of the ocean.
            </p>
            <div className="space-y-2 font-inter">
              <p className="flex  items-center space-x-2">
                <span className="text-primary">
                  <AiOutlineCheckCircle className="text-[18px] font-medium" />
                </span>
                <span className="text-[14px]">
                  Customer Rewards Program and excellent technology.
                </span>
              </p>
              <p className="flex  items-center space-x-2">
                <span className="text-primary">
                  <AiOutlineCheckCircle className="text-[18px] font-medium" />
                </span>
                <span className="text-[14px] ">
                  24 Month / 24,000km Nationwide Warranty monotone.
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-primary">
                  <AiOutlineCheckCircle className="text-[18px] font-medium" />
                </span>
                <span className="text-[14px]">
                  Curabitur dapibus nisl a urna congue, in pharetra urna
                  accumsan.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <Link
            ref={scrollRef}
            to="/details"
            className=" my-6 flex items-center space-x-3 px-6 text-[18px] fomt-semibold bg-primary  py-3 text-white w-48"
          >
            <span>Reserve Now</span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </Link>
          {/* <button className=" flex items-center text-primary font-bold text-[20px]  transform space-x-4 justify-center   px-4 py-3 ">
            <div className="rounded-full border-gray-600 border p-4 animate-pulse">
              <AiOutlinePhone className="text-[25px] transform rotate-90" />
            </div>
            <div>
              <p className="text-yellow-600 ">Make Reservation</p>
            </div>
          </button> */}
        </div>
      </article>
    </section>
  );
});

export default Hero;
