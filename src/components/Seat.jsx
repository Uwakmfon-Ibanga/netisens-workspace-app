import React, { useState } from "react";

const Seat = ({ isBooked, seatNumber }) => {
    const [showModal, setShowModal] = useState({
        taken: false,
        free: false
    });

  const bookSeat = () => {

    if (isBooked) {
      setShowModal({taken: true});
      setTimeout(() => {
        setShowModal({taken: false});
      }, 1500);
    }else{
        setShowModal({free: true});
      setTimeout(() => {
        setShowModal({free: false});
      }, 1500);
    }
  };


  return (
    <div
      className="w-[100px] lg:w-[150px] flex justify-center items-center text-4xl lg:text-5xl font-extrabold rounded-lg h-[100px] lg:h-[150px] relative text-custom-purple-600 cursor-pointer"
      style={{
        backgroundColor: isBooked ? "#5F8967" : "#0CF637",
      }}
      onClick={bookSeat}
    >
      {seatNumber}
      {isBooked ? (
        <svg
          className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] rounded-full bg-black absolute top-[-15px] left-[5.1rem] lg:left-[8.1rem]"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 4.5C14.625 4.5 4.5 14.625 4.5 27C4.5 39.375 14.625 49.5 27 49.5C39.375 49.5 49.5 39.375 49.5 27C49.5 14.625 39.375 4.5 27 4.5ZM22.5 38.25L11.25 27L14.4225 23.8275L22.5 31.8825L39.5775 14.805L42.75 18L22.5 38.25Z"
            fill="white"
          />
        </svg>
      ) : null}

      { showModal.taken ? (
        <div className="w-[100vw] h-[100vh] fixed m-auto inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          {" "}
          <div className="w-[80%] h-[30%] md:w-[50%] md:h-[50%] bg-white flex flex-col items-center justify-center p-4 rounded-lg">
            {" "}
            <h3 className=" text-xl sm:text-4xl">THIS SEAT IS TAKEN!</h3>{" "}
          </div>{" "}
        </div>
      ) : null}

      { showModal.free ? (
        <div className="w-[100vw] h-[100vh] fixed m-auto inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          {" "}
          <div className="w-[80%] gap-3 h-[30%] md:w-[40%] md:h-[70%] bg-white flex flex-col items-center justify-center p-4 rounded-lg">
            {" "}
            <img className="w-[80%] h-[80%]" src="/seat confirmed.png" alt="" />
            <h3 className=" text-xl sm:text-4xl">SEAT CONFIRMED!</h3>{" "}
          </div>{" "}
        </div>
      ) : null}

    </div>
  );
};

export default Seat;
