import React from 'react'
import styles from './BorderButton.module.css'

const BorderButton = ({text, borderColor }) => {
    const buttonStyles = {
        borderImage: borderColor,
        borderRadius: '20px'
    };

  return (
    <button style={buttonStyles} className="text-white w-50 h-9 border-2 border-solid rounded-2xl text-center p-1">{text}</button>
  )
}

export default BorderButton
