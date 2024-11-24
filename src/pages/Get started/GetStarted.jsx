import React from 'react'
import styles from './GetStarted.module.css'
import SignIn from '../../components/SignIn card/SignIn'
import Header from '../../components/Header/Header'

const GetStarted = () => {
  return (
    <>
    <Header />
    <div className={styles.background}>
      <SignIn />
    </div>
    </>
  )
}

export default GetStarted
