import React from "react";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    id: 1,
    text: "Check out our ambient and well-equipped event spaces that are not just a venue but a complete end-to-end service that ensure your event is a success without any hiccups! Check-out our event spaces by clicking the button below",
    name: "Shannon Brian",
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

const Testimonial = () => {
  return (
    <section className='hidden lg:block w-full h-[450px] relative bg-cover bg-center bg-no-repeat  mx-auto bg-[url("https://images.unsplash.com/photo-1524169741802-fe62fbccd1a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlZHJvb20lMjBnb2xkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")]'>
      <article className="w-full  z-50 bg-[rgba(0,0,0,0.35)] top-0 left-0 text-white  flex flex-col justify-center items-center">
        <h3 className="uppercase my-2">TESTIMONIALS</h3>
        <h1 className="font-gilda text-[40px]">What Our Clients' Say</h1>
        <p className="w-1/2 fomt-inter text-justify my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut vel
          dolore ipsum est sequi fuga eaque corporis fugit culpa necessitatibus,
          quidem explicabo facilis, maxime a ipsam non perspiciatis aperiam
          quibusdam. Quidem explicabo facilis, maxime a ipsam non perspiciatis
          aperiam quibusdam.
        </p>
        <div className="flex flex-row items-center space-x-3">
          <div className="p-1 bg-primary rounded-full">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="review image"
              height={50}
              width={50}
              className="rounded-full w-[60px] h-[60px] object-cover object-center"
            />
          </div>

          <p className="font-inter">
            <span className="block text-primary flex flex-row ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <span className="block text-[16px]">Shantela Missouri</span>
            <span className="block text-[14px]">Guest review</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Testimonial;
