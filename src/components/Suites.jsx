import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const roomDetails = [
  {
    id: 1,
    name: "Junior Suite",
    price: "95,000",
    src: "https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Standard Suite",
    price: "150,000",
    src: "https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=ipltI775EjMuLRD8cP6fCzE9sm0hTRezq7I7iQ6JZq0=",
  },
  {
    id: 3,
    name: "Deluxe Suite",
    price: "200,000",
    src: " https://media.istockphoto.com/id/1177647722/photo/bedroom-modern-contemporary-style-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=GNFaQZ-aN05KLiD8s2m7f5O5CrMkTmDtAvrSBeq_qx0=",
  },
  {
    id: 4,
    name: "Platinum Suite",
    price: "275,000",
    src: "https://media.istockphoto.com/id/1258168976/photo/modern-style-bedroom.jpg?b=1&s=170667a&w=0&k=20&c=dSBvQ7Qy436ruHy21YnI7o6vC2s1NIVvckp7XWo_Ulk=",
  },
];

const Suites = () => {
  return (
    <section className="bg-yellow-900/20   py-12">
      <div className="py-8">
        <h3 className="text-center text-[13px]">
          THE MOST LUXURIOUS SHORTLETS IN LAGOS
        </h3>
        <h1 className="font-gilda text-[28px] lg:text-[40px] text-center">
          Featured Rooms & Suites
        </h1>
      </div>
      <div className="flex flex-row   mx-auto w-[90%] lg:w-[80%]  flex-wrap gap-y-4">
        {roomDetails.map((room) => {
          return (
            <article className="  w-full lg:w-1/2 px-3" key={room.id}>
              <div className="relative w-full">
                <div>
                  <div className="bg-white/90 text-[15px]  text-center absolute -top-0 left-0 py-4 px-3 rounded-b-lg">
                    <p className="font-bold text-[20px] font-gilda">
                      {" "}
                      {room.name}
                    </p>
                    <p className="text-[14px]">{`N ${room.price} / night`}</p>
                  </div>
                  <img
                    src={room.src}
                    alt=""
                    className="w-full h-[300px] object-cover object-center"
                  />
                  <article className="bg-gray-900/10 flex flex-row-reverse items-center justify-between py-2 px-4 absolute bottom-0 w-full rounded-t-lg">
                    <div className="  text-[14px]  px-4 rounded-md py-2">
                      <button className="flex flex-row items-center space-x-2 px-4 py-3 bg-white/80 text-primary font-medium text-[15px] ">
                        <Link to="/details">Book Now</Link>
                      </button>
                    </div>
                    <div>
                      <button className="flex flex-row items-center space-x-2 px-4 py-3 bg-primary text-white fomt-medium">
                        <Link to="/details">View Details</Link>
                        <span>
                          <AiOutlineArrowRight />
                        </span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Suites;
