import React, { useState } from "react";
import ShadowButton from "./Shadow Button/ShadowButton";

const Form = () => {
  const [input, setInput] = useState({
    userName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-4/5 mx-auto p-4 flex flex-col items-center gap-5 text-[10px]"
    >

      <div className="grid grid-cols-2 gap-4 w-full">
      <input
        type="text"
        name="userName"
        placeholder="Username"
        value={input.userName}
        onChange={(e) => handleChange(e)}
        className="col-span-1 w-[100px] h-[25px] p-2 border border-gray-300 rounded text-custom-grey"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        // value={}
        onChange={(e) => handleChange(e)}
        className="col-span-1  w-[100px] h-[25px]  p-2 border border-gray-300 rounded"
        required
      />

      <select
        name="gender"
        // value={}
        onChange={(e) => handleChange(e)}
        className="w-[100px] h-[25px]  text-left border text-custom-grey border-gray-300 col-span-1 p-1 rounded"
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        type="tel"
        name="phone"
        placeholder="Phone No"
        // value={}
        onChange={(e) => handleChange(e)}
        className="w-[100px] h-[25px]  col-span-1  p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        // value={}
        onChange={(e) => handleChange(e)}
        className="col-span-1 w-[100px] h-[25px]  p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        // value={}
        onChange={(e) => handleChange(e)}
        className="col-span-1 w-[100px] h-[25px]  p-2 border border-gray-300 rounded"
        required
      />
      </div>

      <ShadowButton backgroundColor={"#FF9D00"} text={"GET STARTED"} />
    </form>
  );
};

export default Form;
