import React from 'react'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'

const contactScreen = () => {
  return (
    <div className='background_pattern'>
      <Fade up>
        <Contact />
      </Fade>
    </div>
  )
}

export default contactScreen
