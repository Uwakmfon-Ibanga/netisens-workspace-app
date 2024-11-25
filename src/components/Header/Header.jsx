import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className=" absolute h-[32px] w-full flex items-end bg-transparent">
       <img className='pl-[38px] w-[120px]' src="Logo.png" alt="Netisens logo" />
    </div>
  )
}

export default Header
