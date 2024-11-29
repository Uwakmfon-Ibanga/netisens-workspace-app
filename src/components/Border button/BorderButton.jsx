import React from 'react'
import styles from './BorderButton.module.css'
import { useNavigate } from 'react-router-dom';

const BorderButton = ({text, borderColor }) => {
    const buttonStyles = {
        borderImage: borderColor,
        borderRadius: '20px'
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signin');
    }

  return (
    <button onClick={handleClick} style={buttonStyles} className="text-white w-[200px] h-9 border-2 border-solid rounded-2xl text-center p-1 sm: text-xs w" >{text}</button>
  )
}

export default BorderButton
