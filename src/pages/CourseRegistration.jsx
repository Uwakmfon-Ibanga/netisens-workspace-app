import React from "react";
import Header from "../components/Header/Header";
import CustomSelect from "../components/CustomSelect";
import ShadowButton from "../components/Shadow Button/ShadowButton";
import { Link } from "react-router-dom";

const CourseRegistration = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-[100vh] bg-custom-purple-600 relative flex items-center justify-center">

        <img src="/courseregistration1.png" alt="image" className="absolute h-[400px] hidden sm:block right-[500px] top-[350px]" />
        <img src="/courseregistration2.png" alt="image" className="absolute h-[300px] hidden sm:block left-[400px] top-[30rem]" />
        <div className="bg-custom-purple-100 w-full sm:w-3/4  h-[350px] rounded-md">
          <div className="flex justify-start gap-1 px-5 py-1">
            <span className="w-[20px] h-[20px] bg-custom-green rounded-[50%]"></span>
            <span className="w-[20px] h-[20px] bg-custom-yellow-200 rounded-[50%]"></span>
            <span className="w-[20px] h-[20px] bg-custom-purple-600 rounded-[50%]"></span>
          </div>
          <div className="w-[95%] h-[87%] rounded-md flex flex-col items-center py-5 justify-between bg-white m-auto flex-1 text-center">
            <p className="text-sm w-4/5 font-bold">
              For this category, there is a <span className="text-custom-green">10%</span> discount for all members.
            </p>
            <p className="text-custom-grey font-thin">Please fill in the course you’re offering</p>

            <CustomSelect />
            <ShadowButton text={'SUBMIT'} backgroundColor={'#0CF637'} />

            <p className="text-xs w-3/4 font-thin">By clicking this button you have agreed to our <Link  className='underline'> Terms of service</Link> and acknowledged our <Link  className='underline'>Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseRegistration;
