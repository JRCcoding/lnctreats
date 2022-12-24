import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { MDBCard, MDBCardLink, MDBIcon } from 'mdb-react-ui-kit'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../Actions/productActions'
import Loader from './Loader'
import Profile from '../Images/webp/maybeprofile.webp'

const About = () => {
  return (
    <div>
      <Container>
        <MDBCard>
          <Row xs={1} md={1} lg={2} className='text-AccentText about_text'>
            <Col>
              <Image
                position='top'
                alt='Lauryn Claxton LNC Treats'
                src={Profile}
              />
            </Col>
            <Col className='firsttext'>
              {' '}
              <p className='about'>
                <MDBIcon fas icon='quote-left' />
                &nbsp; Lauryn is a local baker who bakes out of her love filled
                home in Midland, TX. She is a mother, a wife, and a boss. Not
                only does she manage her business here, but she has an amazing
                family learning from her. &nbsp;
                <MDBIcon fas icon='quote-right' /> - Josh
              </p>
              <p className='about '>
                From small personal treat boxes to meeting and large group
                catering, I can help you with any snacking needs!
              </p>
              <p className='about '>Local delivery for $3</p>
              <p className='about lasttext'>
                I do custom cakes as well as simple cakes, cake pops, multiple
                tiers and anything else you might want on a cake! Personalized
                toppers can easily be added as well.
              </p>
            </Col>
          </Row>
        </MDBCard>
      </Container>
    </div>
  )
}

export default About
