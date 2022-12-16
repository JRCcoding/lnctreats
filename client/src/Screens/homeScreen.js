import React from 'react'
import Intro from '../Components/Intro'
import About from '../Components/About'
// import { Reveal } from 'react-reveal'

const HomeScreen = () => {
  return (
    <>
      {/* <Reveal effect='animate__animated animate__fadeInUp' cascade> */}
      <Intro />
      <About />
      {/* </Reveal> */}
    </>
  )
}

export default HomeScreen
