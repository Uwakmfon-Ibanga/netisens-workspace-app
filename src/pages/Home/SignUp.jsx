import React, { useState } from "react";
import Header from "../../components/Header/Header";
import StandardButton from "../../components/standard button/StandardButton";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [input, setInput] = useState({
      userName : "",
      email: "",
      gender: "",
      phoneNumber: ""
  
    })
    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange (e) {
      const { name, value } = e.target;
      setInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  return (
    <>
      <Header />
      <div className="h-vh-100 w-vw-100 flex pl-3 bg-custom-purple-600 text-white">
          <img src="/signup image.png" className=" pl-2 bg-white rounded-lg w-vw-35" alt="" />
          

        <div className="grid flex-1 justify-center items-center min-h-screen w-vw-65">

          <form className="grid  grid-rows-4 gap-2 items-center p-6 rounded-lg shadow-lg">

            <p className="self-center text-3xl col-span-2 font-bold">Sign In</p>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              // value={}
              onChange={(e) => handleChange(e)}
              className="w-mid w-full col-span-2  p-2 border border-gray-300 rounded"
              required
            />
            <StandardButton Backgroundcolor={"#0CF637"} text={"SIGN IN"}/>
            <p className="col-span-2 text-mid text-custom-grey">Don’t have an account? <Link to='/signin' className="text-custom-blue">Sign In</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
