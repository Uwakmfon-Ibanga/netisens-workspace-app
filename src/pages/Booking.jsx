import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import seatdetails from "../resources/seatdetails.json";
import Seat from "../components/Seat";

const Booking = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    setSeats(seatdetails);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-custom-purple-600 grid items-center h-[fit-content] sm:h-[100vh] md:h-[fit-content] w-[100-vw]">
        <div className="flex flex-col gap-5 justify-between ">
          <span className=" sm:text-2xl justify-center  p-5 text-right">Seats</span>
          <div className="w-full justify-center items-center grid ">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
            {seats.map((seat, index) => (
              <Seat
                key={index}
                isBooked={seat.isBooked}
                seatNumber={seat.seatNumber}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
