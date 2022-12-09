import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
} from 'mdb-react-ui-kit'
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Prod1 from '../Images/product1.jpg'
import Prod2 from '../Images/product2.jpg'
import Prod3 from '../Images/product3.jpg'
import Profile from '../Images/maybeprofile.jpg'

const Intro = () => {
  return (
    <div className='intro mb-5 pt-5' id='intro'>
      <Container>
        <MDBCarousel
          carousel-fade
          className='carousel shadow-lg animate__animated animate__fadeInUpBig'
        >
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src={Prod1}
            alt='Lauryns Next door Cottage Lady Bug Cake'
          >
            {' '}
            <div className='text-black'>
              <h1>Lady Bug Cake</h1>{' '}
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

        <AnimationOnScroll
          animateIn='animate__bounceInLeft'
          duration='.8'
          animateOnce='true'
        >
          <MDBCard className='card' id='about'>
            <MDBCardImage
              position='top'
              alt='Lauryn Claxton LNC Treats'
              src={Profile}
            />
            <MDBCardBody>
              <MDBCardTitle>Lauryn</MDBCardTitle>
              <MDBCardText>
                Beautiful woman with beautiful skills, she's da bomb fa sho.
              </MDBCardText>
            </MDBCardBody>

            <MDBCardBody>
              <MDBCardLink href='#' className='card_link'>
                Facebook
              </MDBCardLink>
              <MDBCardLink href='#' className='card_link'>
                Instagram
              </MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn='animate__bounceInRight'
          delay='550'
          duration='.8'
          animateOnce='true'
        >
          <MDBCard className='card2'>
            <MDBCardBody>
              <p className='about'>
                Lauryn is a local baker who bakes out of her love filled home in
                Midland, TX. She is a mother, a wife, and a boss. Not only does
                she manage her business here, but she has an amazing family
                learning from her.
              </p>
            </MDBCardBody>
          </MDBCard>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn='animate__bounceInRight'
          delay='950'
          duration='.8'
          animateOnce='true'
        >
          <AnimationOnScroll
            animateIn='animate__bounceInRight'
            delay='650'
            duration='.8'
            animateOnce='true'
          >
            <MDBCard className='card2'>
              <MDBCardBody>
                <p className='about'>
                  Lauryn is a local baker who bakes out of her love filled home
                  in Midland, TX. She is a mother, a wife, and a boss. Not only
                  does she manage her business here, but she has an amazing
                  family learning from her.
                </p>
              </MDBCardBody>
            </MDBCard>
          </AnimationOnScroll>
          <MDBCard className='card2 card3'>
            <MDBCardBody>
              <p className='about'>
                Lauryn is a local baker who bakes out of her love filled home in
                Midland, TX. She is a mother, a wife, and a boss. Not only does
                she manage her business here, but she has an amazing family
                learning from her.
              </p>
            </MDBCardBody>
          </MDBCard>
        </AnimationOnScroll>
      </Container>
    </div>
  )
}

export default Intro
