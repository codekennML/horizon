import { useRef, useState } from "react";
import {
  AiFillStar,
  AiOutlineArrowDown,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { addDays } from "date-fns";

import { FaFacebookF } from "react-icons/fa";
import { register } from "swiper/element/bundle";
import Facilities from "./Facilities";
import Footer from "./Footer";
import Hero from "./Hero";
import ReserveForm from "./ReserveForm";
import Offers from "./Offers";
import Suites from "./Suites";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import { Link } from "react-router-dom";

register();

const bannerDesc = [
  {
    id: 1,
    title: "Find a Perfect Base for You",
    buttonText: "Book a  Suite",
    background:
      "https://media.istockphoto.com/id/1318363878/photo/luxury-modern-bedroom-interior-at-night.jpg?b=1&s=170667a&w=0&k=20&c=92VQlNjNQbG4V2eWlsGNNc9kuqbYTCwjRvriOQIQ2lc=",
  },
  {
    id: 2,
    title: "Enjoy Luxury Experiences",
    buttonText: "Make Reservation",
    background: "https://luxhotelwebapp.netlify.app/Assets/3.jpg",
  },
  {
    id: 3,
    title: "More Memories , Less Words",
    buttonText: "Reserve Now",
    background:
      "https://media.istockphoto.com/id/507832553/photo/modern-bedroom-overlooking-ocean.jpg?b=1&s=170667a&w=0&k=20&c=W4BzgilFUK1fR5VjGUT3iI4iwhKjcQtq5STHsrSNJUI=",
  },
];

const Home = () => {
  const scrollRef = useRef();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const scrollToForm = () => {
    scrollRef?.current.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
    });
  };

  return (
    <section className="h">
      <swiper-container
        speed="400"
        data-swiper-autoplay="2000"
        className="transition duration-700"
        effect="fade"
        loop="true"
        pagination="true"
        style={{
          "--swiper-pagination-color": "transparent",
          "--swiper-pagination-bullet-inactive-color": "transparent",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {bannerDesc.map((banner) => {
          return (
            <swiper-slide key={banner.id}>
              <article className=" h-screen w-screen flex justify-center items-center relative ">
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${banner.background})  `,
                    }}
                    className={` absolute  bg-cover bg-center top-0 left-0  bg-no-repeat h-full w-full  items-center z-10 `}
                  >
                    <div className="absolute top-0 left-0 h-full w-full z-40 bg-[rgba(0,0,0,0.55)]  ">
                      <section
                        className="relative flex justify-center items-center w-full h-full"
                        key={banner.id}
                      >
                        <div className="flex flex-col justify-center lg:w-[60%] w-full   items-center space-y-6 lg:space-y-12 mt-8 text-center px-1 wrap">
                          <ul className="flex flex-row justify-center lg:space-x-6">
                            <li>
                              <AiFillStar className="text-[20px] text-yellow-600" />
                            </li>
                            <li>
                              <AiFillStar className="text-[20px] text-yellow-600" />
                            </li>
                            <li>
                              <AiFillStar className="text-[20px] text-yellow-600" />
                            </li>
                            <li>
                              <AiFillStar className="text-[20px] text-yellow-600" />
                            </li>
                            <li>
                              <AiFillStar className="text-[20px] text-yellow-600" />
                            </li>
                            <li>
                              <AiFillStar className="text-[20px] text-yellow-600" />
                            </li>
                          </ul>
                          <p className=" my-4 text-[14px] lg:text-[18px] uppercase font-inter font-medium text-white lg:tracking-[.4em] tracking-wide leading-loose">
                            Luxury Vacation &amp; Holiday spot
                          </p>
                          <article>
                            <h3 className="text-[36px]    font-gilda text-white font-bold lg:text-[50px] md:text-[45px] lg:tracking-[.45em] uppercase">
                              {banner.title}
                            </h3>
                            <div className="flex flex-row justify-center space-x-6">
                              <Link
                                to="/details"
                                onClick={() => setShowBookingForm(true)}
                                className=" mt-6 text-center    px-12 hover:bg-gradient-to-tr hover:from-gray-200 hover:to-yellow-600 hover:text-gray-700  transition:background duration-150 ease-in rounded py-3 border border-gray-100 m-8 font-medium text-white text-[15px] lg:text-[20px]"
                              >
                                {banner.buttonText}
                              </Link>
                            </div>
                          </article>
                        </div>

                        <article className="hidden lg:block absolute right-[8%] top-[40%] text-white font-bold text-[20px] space-x-4 justify-center   h-full">
                          <div className=" relative text-white before:absolute before:-top-24 before:h-[80px] before:pt-12    before:flex-1 before:border-l-[1px] before:border-gray-400 before:ml-2 after:flex-1 after:border-r after:border-gray-400 after:ml-2 after:pt-12 after:absolute after:-bottom-24 after:h-[80px]   ">
                            <div className="space-y-3 ">
                              <button className="block">
                                <FaFacebookF className="text-[18px]" />{" "}
                              </button>
                              <button className="block">
                                <AiOutlineTwitter className="text-[18px]" />
                              </button>
                              <button className="block">
                                <AiOutlineWhatsApp className="text-[18px]" />
                              </button>
                              <button className="block">
                                <AiOutlineInstagram className="text-[18px]" />
                              </button>
                              <p></p>
                            </div>
                          </div>
                        </article>

                        <article className="absolute bottom-[10%] right-[5%] hidden lg:block">
                          <button
                            onClick={scrollToForm}
                            className="rounded-full p-3 border-gray-400 border   text-white text-center inline-flex justify-center slide"
                          >
                            <AiOutlineArrowDown className="text-[25px]" />
                          </button>
                        </article>
                      </section>
                    </div>
                  </div>
                </div>
              </article>
            </swiper-slide>
          );
        })}
      </swiper-container>

      <Hero ref={scrollRef} />
      <Suites />
      <Facilities />

      <Offers />
      <Testimonial />
      <Blog />
      <Footer />
    </section>
  );
};

export default Home;
