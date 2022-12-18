import React from 'react'
import Intro from '../Components/Intro'
import SellingPoints from '../Components/SellingPoints'
// import { Reveal } from 'react-reveal'

const HomeScreen = () => {
  return (
    <>
      {/* <Reveal effect='animate__animated animate__fadeInUp' cascade> */}
      <Intro />
      <SellingPoints />
      {/* </Reveal> */}
    </>
  )
}

export default HomeScreen
