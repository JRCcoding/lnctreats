import React from 'react'
import Carousel from '../Components/Carousel'
import Carousel2 from '../Components/Carousel2'
import SellingPoints from '../Components/SellingPoints'
import Contact from '../Components/Contact'

const HomeScreen = () => {
  return (
    // <div className='bg-Background'>
    <div className='bg-LightBG'>
      <Carousel />
      <SellingPoints />
      <Contact />
    </div>
  )
}

export default HomeScreen
