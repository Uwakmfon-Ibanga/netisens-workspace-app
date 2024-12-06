import React from 'react'
import SignIn from '../../components/SignIn card/SignIn'
import Header from '../../components/Header/Header'

const GetStarted = () => {
  return (
    <>
    <Header />
    <div className='bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] grid items-center bg-[url(./workspaceimage.png)]'>
      <SignIn />
    </div>
    </>
  )
}

export default GetStarted
