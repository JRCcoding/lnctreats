import React from 'react'
import { Container } from 'react-bootstrap'
import About from './About'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import 'animate.css'
import Prod1 from '../Images/product1.jpg'
import Prod2 from '../Images/product2.jpg'
import Prod3 from '../Images/product3.jpg'

const Intro = () => {
  return (
    <div className='intro mb-5 pt-5' id='intro'>
      <Container>
        <MDBCarousel className='carousel mt-5 shadow-lg'>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src={Prod1}
            alt='Lauryns Next door Cottage Lady Bug Cake'
          >
            {' '}
            <div className='text-black'>
              <h1>Lady Bug Cake</h1>
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src={Prod2}
            alt='Lauryns Next door Cottage Celeste XOXO Cake'
          >
            {' '}
            <div className='text-black'>
              <h1>Celeste's XOXO Cake</h1>{' '}
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src={Prod3}
            alt='Lauryns Next door Cottage Halloween Treat Box'
          >
            <div className='text-black'>
              <h1>Halloween Treat Box</h1>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>

        <About />
      </Container>
    </div>
  )
}

export default Intro
