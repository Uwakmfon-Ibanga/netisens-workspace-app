import React, { useState } from 'react'
import Form from '../Form'
import { Link } from 'react-router-dom'

const SignIn = () => {


  return (
    <div className='w-[80%] bg-white m-auto flex flex-col justify-center items-center rounded-[20px] py-[20px]'>
        <h4 className='text-xs'>Find your <span className='text-custom-green'>perfect</span> space, with our help</h4>
        <h1 className='text-2xl'>Welcome</h1>
        <p className='text-xs'>Enter your info to prceed securely</p>
        
      <Form />
      <p className='text-custom-grey text-sm'>Don’t have an account? <Link to='/signup' className='text-custom-blue'>Sign up</Link></p>
      <p className='text-[9px] w-4/5 text-shadow-md text-center'>By filling the following information and clicking this button you have agreed to our <Link to='/terms' className='underline'>Terms of service</Link> and <Link to='/terms' className='underline'>privacy Policy</Link>.</p>
    </div>
  )
}

export default SignIn
