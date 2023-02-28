import { forwardRef, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Select from "react-select";
import DatePicker from "../utils/DatePicker";
import { addDays, format } from "date-fns";
import { Link } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";

const ReserveForm = forwardRef(({}, scrollRef) => {
  const options = [
    { label: "SigmaBase - Victoria Island", value: "sigma" },
    { label: "Lekki Footprint -  Admiralty Way, Lekki", value: "footprint" },
    { label: "Lekki Amitrox -  Admiralty Way, Lekki", value: "Amitrox" },
    { label: "Lekki Vainer -  Admiralty Way, Lekki", value: "Vainer" },
    { label: "Mapestry Signor - Elegushi- Lekki", value: "mapestry" },
  ];

  const [dateActive, setDateActive] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [formData, setFormData] = useState({
    rooms: 0,
    children: 0,
    adults: 0,
  });

  const bookingData = [
    {
      id: 1,
      name: "adults",
    },
    {
      id: 2,
      name: "children",
    },
    {
      id: 3,
      name: "rooms",
    },
  ];

  const handleFormData = (name, op) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: op === "increase" ? prev[name] + 1 : prev[name] - 1,
      };
    });
  };

  console.log(formData);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const start = format(date[0].startDate, "EE dd LLL");
  const end = format(new Date(date[0].endDate), "EE dd LLL");
  const formattedDate = `${start} - ${end}`;

  return (
    <aside className="w-full lg:w-1/3 pb-24 ">
      <section className="bg-primary sticky lg:top-32 rounded-lg ">
        <div className="w-full shadow-md p-5  bg-gray-50/20  border-gray-200 border ">
          <article>
            <div className="">
              <h2 className="text-[25px]  font-semibold text-center mb-3 font-gilda text-yellow-100">
                Reserve Now
              </h2>

              <form className="p-4 pb-12">
                <div className=" rounded-xl  pt-1 relative mb-4">
                  <label
                    htmlFor="Date"
                    className="text-gray-100 text-sm font-semibold pb-4 mt-4"
                  >
                    Check-in/Check-out Dates
                  </label>
                  <button
                    onClick={() => setDateActive((prevState) => !prevState)}
                    type="button"
                    className="w-full my-3 py-3 px-2 pl-3 text-sm rounded bg-white text-left"
                  >
                    <span>{formattedDate}</span>
                  </button>
                  {dateActive && (
                    <DatePicker
                      date={date}
                      setDate={setDate}
                      setDateActive={setDateActive}
                      position={`absolute top-20 left-1/2 transform -translate-x-1/2`}
                    />
                  )}
                </div>

                <div className=" rounded-lg pt-0  border-slate-300 mb-4">
                  <label
                    htmlFor="room_type"
                    className="text-gray-100 text-sm mb-4 font-semibold"
                  >
                    Select Room Type
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full bg-white rounded mt-1 py-3 px-2 border-gray-500 "
                  >
                    <optgroup label="One Bedroom">
                      <option value="1bedroom">Deluxe One Bedroom</option>
                      <option value="1bedroom">Standard One (1) Bedroom</option>
                    </optgroup>

                    <optgroup label="Studios">
                      <option value="1bedroom">Deluxe Studio</option>
                      <option value="1bedroom">Standard Studio</option>
                    </optgroup>

                    <optgroup label="Two Bedrooms">
                      <option value="1bedroom">Two Bedroom</option>
                    </optgroup>
                  </select>
                </div>
                <div className="pt-2 space-y-1 relative mt-3">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-white mb-4 pt-12 mt-4"
                  >
                    Add Guests
                  </label>
                  <button
                    onClick={() => setShowOptions((prevState) => !prevState)}
                    type="button"
                    className="w-full my-3 py-3 px-2 pl-3 text-sm rounded bg-white text-left"
                  >
                    <span>
                      {formData.adults} Adults &middot; {formData.children}{" "}
                      children &middot; {formData.rooms} rooms
                    </span>
                  </button>

                  {showOptions && (
                    <article className="bg-white w-full px-3 py-3 absolute top-20 z-40">
                      {bookingData.map((data) => {
                        return (
                          <div
                            className="flex flex-row justify-between px-6 py-2 items-center"
                            key={data.id}
                          >
                            <p className="font-medium capitalize">
                              {data.name}
                            </p>
                            <p className="border-2 border-gray-300 space-x-8  py-2.5 flex flex-row justify-between px-4 ">
                              <button
                                className="text-gray-600"
                                disabled={formData[data.name] < 1}
                                type="button"
                                onClick={() =>
                                  handleFormData(`${data.name}`, "decrease")
                                }
                              >
                                <AiOutlineMinus />
                              </button>
                              <span className="block text-gray-700 px-2 w-4">
                                {formData[data.name]}
                              </span>
                              <button
                                className="text-gray-800"
                                disabled={formData[data.name] > 9}
                                type="button"
                                onClick={() =>
                                  handleFormData(`${data.name}`, "increase")
                                }
                              >
                                <AiOutlinePlus className="disabled:text-gray-400" />
                              </button>
                            </p>
                          </div>
                        );
                      })}
                    </article>
                  )}
                </div>
                <button className=" mt-12 w-full text-white font-bold p-2 py-4 rounded bg-gradient-to-r from-yellow-500 to-orange-400 transition duration-300">
                  <Link to="/login">Reserve Now</Link>
                </button>
              </form>
            </div>
          </article>

          <div className="flex flex-row justify-center space-x-6 mt-6 ">
            <p className="text-sm mt-2 hover:underline ">Property Inquiry </p>
            <p className=" text-sm mt-2 hover:underline ">Contact Host</p>
          </div>
        </div>
      </section>
    </aside>
  );
});

export default ReserveForm;
