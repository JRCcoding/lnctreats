import React from 'react'
import { Fade } from 'react-reveal'
import About from '../Components/About'

const AboutScreen = () => {
  return (
    <div className='background_pattern'>
      <Fade up>
        <About />
      </Fade>
    </div>
  )
}

export default AboutScreen
