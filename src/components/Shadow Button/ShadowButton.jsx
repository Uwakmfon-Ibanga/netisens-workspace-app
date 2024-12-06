import React from 'react'

const ShadowButton = ({text, backgroundColor}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        // boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }
  return (
    // <button className='shadow-black w-60 col-span-2 row-start-3 justify-self-center p-0. rounded-md' style={buttonStyle}>{text}</button>
    <button className="shadow-custom text-white font-bold w-[100px] text-[10px] lg:w-60 col-span-2 row-start-3 justify-self-center p-1 lg:p-2 rounded-md" style={buttonStyle} > {text} </button>
  )
}

export default ShadowButton
