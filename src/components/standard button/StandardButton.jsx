import React from 'react'
import styles from './StandardButton.module.css'

const StandardButton = ({Backgroundcolor, text}) => {
    const buttonStyles = {
      backgroundColor: Backgroundcolor,
    }
    function handleSubmit(e) {
      e.preventDefault();
    }
    
  return (
    <button onClick={(e) => handleSubmit(e)} className={styles.StandardButton} style={buttonStyles}>{text}</button>
  )
}

export default StandardButton
