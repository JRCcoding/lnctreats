import React from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardLink,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from 'mdb-react-ui-kit'

import Profile from '../Images/maybeprofile.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const About = () => {
  return (
    <>
      <h2 className='title font-LaBelle underline'>About Lauryn</h2>
      <Row xs={1} lg={3} className='testing align-items-end'>
        <Col>
          {' '}
          <MDBCard
            className='card animate__animated animate__fadeInLeft bg-lightMint'
            id='about'
          >
            <MDBCardImage
              position='top'
              alt='Lauryn Claxton LNC Treats'
              src={Profile}
            />
            <Accordion defaultActiveKey='0' className='bg-lightMint'>
              <Accordion.Item eventKey='1'>
                <Accordion.Header className='bg-lightMint'>
                  <MDBCardTitle className='card_link'>Lauryn</MDBCardTitle>
                </Accordion.Header>
                <Accordion.Body className='bg-lightMint'>
                  <MDBCardBody className='bg-lightMint'>
                    <MDBCardText className='about'>
                      Beautiful woman with beautiful skills, she's da bomb fa
                      sho.
                    </MDBCardText>
                  </MDBCardBody>

                  <MDBCardBody className='bg-lightMint'>
                    <MDBCardLink
                      href='https://www.facebook.com/LNCsstreats/'
                      target='_blank'
                      className='card_link'
                    >
                      Facebook
                    </MDBCardLink>
                    <MDBCardLink
                      href='https://www.instagram.com/lnc_sweetandsavorytreats/'
                      target='_blank'
                      className='card_link card_link_right'
                    >
                      Instagram
                    </MDBCardLink>
                  </MDBCardBody>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </MDBCard>
        </Col>
        <Col>
          <AnimationOnScroll
            animateIn='animate__fadeInRight'
            animateOnce='true'
          >
            <MDBCard className='card lauryncard'>
              <MDBCardBody className='bg-lightMint'>
                <p className='about'>
                  <MDBIcon fas icon='quote-left' />
                  &nbsp;&nbsp;&nbsp; Lauryn is a local baker who bakes out of
                  her love filled home in Midland, TX. She is a mother, a wife,
                  and a boss. Not only does she manage her business here, but
                  she has an amazing family learning from her.
                  &nbsp;&nbsp;&nbsp;
                  <MDBIcon fas icon='quote-right' /> - Josh
                </p>
              </MDBCardBody>
            </MDBCard>
          </AnimationOnScroll>
        </Col>
      </Row>
      <Row xs={1} lg={3} className='testing mt-4'>
        <Col>
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
            <MDBCard className='card card2 col2card mb-4'>
              <MDBCardBody className='bg-lightMint'>
                <p className='about '>
                  From small personal treat boxes to meeting and large group
                  catering, I can help you with any snacking needs!
                </p>
              </MDBCardBody>
            </MDBCard>
          </AnimationOnScroll>
        </Col>
        <Col>
          <AnimationOnScroll
            animateIn='animate__fadeInRight'
            animateOnce='true'
          >
            <MDBCard className='card' id='lastcard'>
              <MDBCardBody className='bg-lightMint'>
                <p className='about'>
                  I do custom cakes as well as simple cakes, cake pops, multiple
                  tiers and anything else you might want on a cake! Personalized
                  toppers can easily be added as well. Check out my{' '}
                  <a href='#cakesheet' className='intextlink'>
                    Cake Price Sheet
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </AnimationOnScroll>
        </Col>
      </Row>
    </>
  )
}

export default About

/* 
        <Col>
          

          
        </Col>

        <AnimationOnScroll
          animateIn='animate__bounceInRight'
          animateOnce='true'
        >
          <Col>
            
          </Col>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__bounceInLeft' animateOnce='true'>
          <Col>
            <MDBCard className='card card2 card3'>
              <MDBCardBody>
                <p className='about'>
                  Lauryn is a local baker who bakes out of her love filled home
                  in Midland, TX. She is a mother, a wife, and a boss. Not only
                  does she manage her business here, but she has an amazing
                  family learning from her.
                </p>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </AnimationOnScroll>
      </Row> */
