import React from "react";
import travel from "../assets/travel.png";
import cleaning from "../assets/cleaning-cart.png";
const services = [
  {
    id: 1,
    title: "Pick Up & Drop",
    src: "https://luxhotelwebapp.netlify.app/Assets/travel.png",
    text: "We will pick and drop you off and on the airport at your arrival and departure times.",
  },
  {
    id: 2,
    title: "Parking Space",
    price: "150,000",
    src: "https://luxhotelwebapp.netlify.app/Assets/parking.png",
    text: "We have and provide enough parking space for in-house and day guests.",
  },
  {
    id: 3,
    title: "Room Services",
    price: "200,000",
    src: "https://luxhotelwebapp.netlify.app/Assets/cleaning-cart.png",
    text: "Great and professional guest room valets to keep your room clean at all time.",
  },
  {
    id: 4,
    title: "Swimming Pool",
    price: "275,000",
    src: "https://luxhotelwebapp.netlify.app/Assets/swimming-pool.png",
    text: "Swimming time dolor sit amet, consectetur adipisicing elit. Ea, quas.",
  },
  {
    id: 5,
    title: "Free WiFi",
    price: "275,000",
    src: "  https://luxhotelwebapp.netlify.app/Assets/wifi%20(3).png",
    text: "We have super fast internet and room cables for wired connection.",
  },

  {
    id: 6,
    title: "Fine Dining",
    price: "275,000",
    src: "https://luxhotelwebapp.netlify.app/Assets/breakfast.png",
    text: "We offer fine dining with our chefs' made dishes or outsourced.",
  },
];
const Facilities = () => {
  return (
    <section className="mx-auto w-[80%] py-12">
      <div className="pt-6 py-8">
        <h3 className="text-[15px] font-inter">OUR SERVICES AND FACILITIES</h3>
        <h1 className="text-[30px] font-gilda">Horizon Hotel Facilities</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2  gap-x-4   flex-wrap gap-y-4 place-content-center place-items-center">
        {services.map((service) => {
          return (
            <article className="border border-gray-300 px-6  p-6 space-y-2 rounded-lg">
              <img
                src={service.src}
                alt={`${service.title}_home_img`}
                className="w-[60px] h-[60px]"
              />
              <h2 className="font-gilda text-[25px]">{service.title}</h2>
              <p className="font-inter text-[15px]  text-gray-500 text-justify">
                {service.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Facilities;
