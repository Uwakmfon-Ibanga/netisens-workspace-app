import React from 'react'
import styles from './StandardButton.module.css'
import { useNavigate } from 'react-router-dom'

const StandardButton = ({Backgroundcolor, target, text}) => {
    const buttonStyles = {
      backgroundColor: Backgroundcolor,
    }
    const navigate = useNavigate();
    function handleSubmit() {
      navigate(target);
    }
    
  return (
    <button onClick={handleSubmit} className={styles.StandardButton} style={buttonStyles}>{text}</button>
  )
}

export default StandardButton
