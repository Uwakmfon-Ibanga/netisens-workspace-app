import React, { useState } from 'react';
import ShadowButton from './Shadow Button/ShadowButton';

const Form = () => {
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
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-80 mx-auto p-4">
        <input
          type="text"
          name="userName"
          placeholder='Username'
          value={input.userName}
          onChange={(e) => handleChange(e)}
          className="col-span-1 w-full p-2 border border-gray-300 rounded"
          required
        />
      
     
        <input
          type="email"
          name="email"
          placeholder='Email'
          // value={}
          onChange={(e) =>handleChange(e)}
          className="col-span-1  w-full p-2 border border-gray-300 rounded"
          required
        />

      
      
        <select
          name="gender"
          // value={}
          onChange={(e) =>handleChange(e)}
          className="w-full text-left border border-gray-300 col-span-1 p-1 rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      
        <input
          type="tel"
          name="phone"
          placeholder='Phone No'
          // value={}
          onChange={(e) =>handleChange(e)}
          className="w-full col-span-1  p-2 border border-gray-300 rounded"
          required
        />
      
        {/* <button type="submit" className="bg-blue-500 col-span-2 text-center justify-self-center w-80 mt-4 text-white py-2 px-4 rounded">
          Submit
        </button> */}
        <ShadowButton backgroundColor={'#FF9D00'} text={'GET STARTED'}/>
        
    </form>
  );
};

export default Form;
