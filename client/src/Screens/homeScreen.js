import React from 'react'
import Carousel from '../Components/Carousel'
import Carousel2 from '../Components/Carousel2'
import SellingPoints from '../Components/SellingPoints'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'

const HomeScreen = () => {
  return (
    // <div className='bg-LightBG'>
    <div className='background_pattern'>
      <Carousel />
      <SellingPoints />
      <Fade up>
        <Contact />
      </Fade>
    </div>
  )
}

export default HomeScreen
