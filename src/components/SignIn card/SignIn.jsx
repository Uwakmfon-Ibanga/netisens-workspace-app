import React, { useState } from 'react'
import styles from './SignIn.module.css'
import ShadowButton from '../Shadow Button/ShadowButton'
import GenderDropdown from '../GenderDropdown'
import Form from '../Form'
import { Link } from 'react-router-dom'

const SignIn = () => {


  return (
    <div className={styles.card}>
        <h4 className='text-lg'>Find your <span>perfect</span> space, with our help</h4>
        <h1 className='text-2xl'>Welcome</h1>
        <p>Enter your info to prceed securely</p>
        
      <Form />
      <p className='text-custom-grey text-xs'>Don’t have an account? <Link to='/signup' className='text-custom-blue'>Sign up</Link></p>
      <p className='text-xs w-4/5 text-shadow-md text-center'>By filling the following information and clicking this button you have agreed to our Terms of service and Company Policy.</p>
    </div>
  )
}

export default SignIn
