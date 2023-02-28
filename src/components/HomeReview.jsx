import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const reviews = [
  {
    id: 1,
    first_name: "Guss",
    last_name: "Craxford",
    country: "Mexico",
    src: "https://media.istockphoto.com/photos/happy-millennial-afro-american-business-woman-posing-isolated-on-picture-id1386479313?b=1&k=20&m=1386479313&s=170667a&w=0&h=axEYGqmMKgDx8nk47CRAuGc27P1mnEu3zDJCdK7WlsE=",
    rating: 4.6,
  },
  {
    id: 2,
    first_name: "Rivkah",
    last_name: "Drissell",
    country: "Russia",
    src: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=",
    rating: 4.2,
  },
  {
    id: 3,
    first_name: "Suki",
    last_name: "Blackledge",
    country: "Poland",
    src: "https://media.istockphoto.com/id/1460126147/photo/business-woman-face-portrait-and-vision-for-leadership-growth-and-success-in-career-with.jpg?b=1&s=170667a&w=0&k=20&c=y7wYe3e2-N9QpzlLF3A3T8QQAEeZgWe_uMGrfZo0E48=",
    rating: 4.9,
  },
  {
    id: 4,
    first_name: "Elbertina",
    last_name: "Rubinowitz",
    country: "Spain",
    src: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
  },
  {
    id: 5,
    first_name: "Howey",
    last_name: "Vooght",
    country: "Poland",
    src: "https://plus.unsplash.com/premium_photo-1670588775984-9359804ddf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.2,
  },
  {
    id: 6,
    first_name: "Patty",
    last_name: "Sherrott",
    country: "Philippines",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
  },
];
const HomeReview = () => {
  return (
    <article className="mt-12 border-2 p-5 lg:p-8  justify-between items-center rounded-lg ">
      <div className="mt-4 ">
        <h2 className="text-[20px] lg:text-[25px] font-semibold text-primary mb-6 font-gilda ">
          SigmaBase Reviews
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center lg:justify-between space-x-6 mb-3  border-y  py-4">
        <div className="flex flex-row items-center ">
          <p className="flex space-x-2 items-center  rounded-full text-lg ">
            <AiOutlineStar className="lg:w-7 lg:h-7 w-6 h-6 text-orange-400" />
            <span className="font-semibold text-[15px] lg:text-xl  ">
              {" "}
              4.65{" "}
            </span>
          </p>
          <h2 className="text-[15px] lg:text-xl  font-semibold text-gray-800 pl-2">
            &#x2022; 65 Reviews
          </h2>
        </div>

        <div className=" pr-2 lg:pr-12 hidden sm:block">
          <button className="border border- bg-yellow-600 hover:bg-yellow-700 px-2 lg:px-6 lg:py-3 py-2 rounded font-semibold  text-white text-[15px] lg:text-[20px] ">
            See all reviews
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-6  font-inter">
        {reviews.map((review) => {
          return (
            <div
              className="border-t shadow p-4 mt-8 rounded-lg"
              key={review.id}
            >
              <div className="mt-4 flex flex-row items-center justify-between ">
                <div className="flex-row flex ">
                  <p className="w-12 h-12 bg-gray-100 rounded-full">
                    <img
                      src={review.src}
                      alt=""
                      className="rounded-full w-full h-full object-center object-cover"
                    />
                  </p>
                  <p className="inline-flex flex-col items-start pl-3">
                    <span className="text-sm font-">
                      {" "}
                      {`${review.first_name} ${review.last_name}`}{" "}
                    </span>
                    <span className="text-xs">{review.country}</span>
                  </p>
                </div>
                <p className="flex items-center font-medium pr-6 self-start">
                  <AiFillStar className="text-[15px]lg:text-[20px] text-yellow-500" />
                  <span className="text-[13px] lg:text-[16px]">{`(${review.rating})`}</span>
                </p>
              </div>

              <p className="mt-4 text-[13px] lg:text-sm leading-normal tracking-wideest text-justify px-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores dolore quia fugit, nulla iure est incidunt deleniti
                ab nobis repellendus voluptas quasi omnis perspiciatis delectus
                temporibus corrupti labore consectetur animi.
              </p>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default HomeReview;
