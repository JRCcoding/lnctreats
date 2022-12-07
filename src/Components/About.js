import React from 'react'
import Profile from '../Images/maybeprofile.jpg'

const About = () => {
  return (
    <div className='d-flex about' id='about'>
      <img src={Profile} alt='...' className='w-50 d-block-inline ms-5' id='profileimg' />
      <p className='align-top ms-5 about-text'>
        Lauryn Claxton{' '}
        <b>
          <i>IS</i>
        </b>{' '}
        Lauryn's Next-door Cottage. Without her there is no website. We are all
        here because of Lauryn. Such an amazing woman, her husband is soooooo
        lucky.
      </p>
    </div>
  )
}

export default About
