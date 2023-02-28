import React from "react";

const offers = [
  {
    id: 1,
    subtitle: "DISCOVER",
    heading: "Event Spaces",
    text: "Check out our ambient and well-equipped event spaces that are not just a venue but a complete end-to-end service that ensure your event is a success without any hiccups! Check-out our event spaces by clicking the button below",
    buttonText: "LEARN MORE",
    src: "https://images.pexels.com/photos/4889279/pexels-photo-4889279.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 2,
    subtitle: "EXPERIENCE",
    heading: "The Health Club  Pool",
    text: "  Our health club and swimming activities are well managed and fairly affordable by all people. Getting a swimming pool membership gives you extra savings and benefits including discounted breakfast and  10% off on hotel rooms & events. See detailed pricing by clicking the button below.",
    buttonText: "Explore Now",
    src: "https://luxhotelwebapp.netlify.app/Assets/relaxing-3112750_1920.jpg",
  },
  {
    id: 3,
    subtitle: "Meet, Work, Study",
    heading: "Meeting Rooms & Co-working  Spaces",
    text: "At Signature Restaurant, we pride ourselves on providing delicious, hygienically-prepared meals. Our international chef is a master at crafting continental dishes giving you a taste of the world. Discover what more the restaurant has to offer by clicking the button below.",
    buttonText: "View All",
    src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hcmQlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    subtitle: "COMFORT",
    heading: "Airport Pick Up & Drop Off",
    text: "We have experienced driver and comfirtable vehicles to get you off the airport at you arrival and departure times. You simply need to let us know the number of guests you are moving with.",
    buttonText: "Book Now",
    src: "https://media.istockphoto.com/id/1192648836/photo/young-happy-woman-in-an-airplane-cabin.jpg?b=1&s=612x612&w=0&k=20&c=xqnttZw8lDE8A325GIhqvOcBuRbEDedGv0tB7sBpWw8=",
  },
];

const Offers = () => {
  return (
    <section className="mx-auto w-full lg:w-[80%] my-12 space-y-12 lg:space-y-0 px-3">
      {offers.map((offer, idx) => {
        return (
          <article
            key={idx}
            className={`${
              Number(idx) % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } flex w-full flex-col `}
          >
            <div className="lg:w-1/2 w-full overflow-hidden ">
              <img
                src={offer.src}
                alt={`${offer.name}_image`}
                height="100%"
                width="100%"
                className="block w-full h-full hover:scale-110 transform  transition-all duration-1000  ease-out object-cover object-center"
              />
            </div>

            <div className="bg-yellow-900/10 lg:w-1/2 w-full space-y-4 py-16 px-12">
              <h3 className="tracking-[0.3em] uppercase">{offer.subtitle}</h3>
              <h1 className="text-[25px] lg:text-[30px] font-gilda">
                {offer.heading}
              </h1>
              <p>{offer.text}</p>
              <button className="bg-primary  py-3 px-10 text-white font-medium">
                {offer.buttonText}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Offers;
