import React from 'react'
import { Container } from 'react-bootstrap'
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit'
import Prod1 from '../Images/product1.jpg'
import Prod2 from '../Images/product2.jpg'
import Prod3 from '../Images/product3.jpg'
import Profile from '../Images/maybeprofile.jpg'

const Intro = () => {
  return (
    <div className='intro mb-5 pt-5' id='intro'>
      <Container>
        <MDBCarousel carousel-fade className='carousel shadow-lg'>
          <MDBCarouselItem
            className='w-100 d-block rounded'
            itemId={1}
            src={Prod1}
            alt='...'
          >
            {' '}
            <div className='text-black'>
              <h1>Lady Bug Cake</h1>{' '}
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block rounded'
            itemId={2}
            src={Prod2}
            alt='...'
          >
            {' '}
            <div className='text-black'>
              <h1>Celeste's XOXO Cake</h1>{' '}
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block rounded'
            itemId={3}
            src={Prod3}
            alt='...'
          >
            <div className='text-black'>
              <h1>Halloween Treat Box</h1>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
        {/* <img
          src={Profile}
          alt='...'
          className='w-50 d-block-inline ms-5'
          id='profileimg'
        />
        <p className='align-top ms-5 about-text'>
          Lauryn Claxton{' '}
          <b>
            <i>IS</i>
          </b>{' '}
          Lauryn's Next-door Cottage. Without her there is no website. We are
          all here because of Lauryn. Such an amazing woman, her husband is
          soooooo lucky.
        </p> */}
        <MDBCard>
          <MDBCardImage position='top' alt='...' src={Profile} />
          <MDBCardBody>
            <MDBCardTitle>Lauryn</MDBCardTitle>
            <MDBCardText>
              Beautiful woman with beautiful skills, she's da bomb fa sho.
            </MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem>Amazing cakes</MDBListGroupItem>
            <MDBListGroupItem>Delicious snacks and goodies</MDBListGroupItem>
            <MDBListGroupItem>Personalized everything!</MDBListGroupItem>
          </MDBListGroup>
          <MDBCardBody>
            <MDBCardLink href='#'>Facebook</MDBCardLink>
            <MDBCardLink href='#'>Instagram</MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </Container>
    </div>
  )
}

export default Intro
