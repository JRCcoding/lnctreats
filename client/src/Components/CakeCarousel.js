import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import React from 'react'
import tiered from '../Images/cakes/16tiered.jpg'
import thirty from '../Images/cakes/30.jpg'
import cactus from '../Images/cakes/cactus.jpg'
import cinco from '../Images/cakes/cinco.jpg'
import ferrero from '../Images/cakes/ferrero.jpg'
import floral from '../Images/cakes/floral.jpg'
import floralpurple from '../Images/cakes/floralpurple.jpg'
import hulk from '../Images/cakes/hulk.jpg'
import micky from '../Images/cakes/micky.jpg'
import numbertwo from '../Images/cakes/number2.jpg'
import peppa from '../Images/cakes/peppa.jpg'
import pineappleupsidedown from '../Images/cakes/pineappleupsidedown.jpg'
import pinkhat from '../Images/cakes/pinkhat.jpg'
import wednesday from '../Images/cakes/wednesday.jpg'

const CakeCarousel = () => {
  return (
    <div>
      <MDBCarousel
        showIndicators
        carousel-fade
        className='ml-2 my-0'
        // style={{ height: '40%', width: '40%' }}
      >
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src={tiered}
          alt='...'
        ></MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={thirty}
          alt='...'
        ></MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src={cactus}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={4}
          src={cinco}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={5}
          src={ferrero}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={6}
          src={floral}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={7}
          src={floralpurple}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={8}
          src={hulk}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={9}
          src={micky}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={10}
          src={numbertwo}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={11}
          src={peppa}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={12}
          src={pineappleupsidedown}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={13}
          src={pinkhat}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={14}
          src={wednesday}
          alt='...'
        ></MDBCarouselItem>
      </MDBCarousel>
    </div>
  )
}

export default CakeCarousel
