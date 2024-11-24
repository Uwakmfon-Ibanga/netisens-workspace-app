import React from 'react';

const GenderDropdown = () => {
  return (
    <div className="mb-4">
      <div className="relative">
        <select
          id="gender"
          name="gender"
          className="block appearance-none w-15 bg-white border border-gray-400 hover:border-gray-500 px-4 py-0.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Gender </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default GenderDropdown;
