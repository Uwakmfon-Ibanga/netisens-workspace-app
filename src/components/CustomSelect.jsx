import React, { useState, useRef, useEffect } from 'react';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref=useRef(null);
  const options = [
    'Data Analysis',
    'User Interface/User Experience',
    'Web Development',
    'Project Management',
    'Brand Design',
    'product Management',
    'Web Design',
    'Graphics Design'
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeList = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', closeList);
    return () => {
      document.removeEventListener('mousedown', closeList);
    }
  }, [ref]);

  return (
    <div className="relative w-[75%] flex items-center">
      <div className='w-full flex gap-1 items-center'>
      <label className='font-extrabold' htmlFor="">Course:</label>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        
        className="w-full text-xs border-black border-b-2 text-left py-2 px-4 shadow focus:outline-none"
      >
        {selectedOption }
      </button>
      </div>
      {isOpen && (
        <ul ref={ref} className="absolute w-full bg-gray-100 border text-custom-grey border-gray-300 rounded-lg shadow max-h-40 top-[2rem] overflow-y-auto mt-1">
          {options.map((option, index) => (
            <li 
              key={index}
              onClick={() => handleOptionClick(option)}
              className="py-2 px-4 border-b border-black cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
