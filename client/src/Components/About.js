import React, { useEffect } from 'react'
import { Row, Col, Accordion, Container } from 'react-bootstrap'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardLink,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from 'mdb-react-ui-kit'
import '../Styles/About.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../Actions/productActions'
import Loader from './Loader'
import Profile from '../Images/webp/maybeprofile.webp'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const About = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <AnimationOnScroll animateIn='animate__fadeInUp'>
      <Container id='about' className='font-'>
        <div className='about_section'>
          {loading ? (
            <Loader />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <MDBCard className='mt-4'>
              <MDBCardBody className='top_card'>
                <Row lg={2}>
                  <Col>
                    <MDBCard className='card lauryn_card'>
                      <MDBCardImage
                        position='top'
                        alt='Lauryn Claxton LNC Treats'
                        src={Profile}
                      />
                      <Accordion defaultActiveKey='0'>
                        <Accordion.Item eventKey='1'>
                          <Accordion.Header>
                            <MDBCardTitle className='card_link'>
                              Lauryn
                            </MDBCardTitle>
                          </Accordion.Header>
                          <Accordion.Body>
                            <MDBCardBody>
                              <MDBCardText className='about'>
                                Local baker and chef based in Midland, TX.
                              </MDBCardText>
                            </MDBCardBody>

                            <MDBCardBody>
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
                  <Col className='firsttext'>
                    {' '}
                    <p className='about'>
                      <MDBIcon fas icon='quote-left' />
                      &nbsp; Lauryn is a local baker who bakes out of her love
                      filled home in Midland, TX. She is a mother, a wife, and a
                      boss. Not only does she manage her business here, but she
                      has an amazing family learning from her. &nbsp;
                      <MDBIcon fas icon='quote-right' /> - Josh
                    </p>
                    <p className='about '>
                      From small personal treat boxes to meeting and large group
                      catering, I can help you with any snacking needs!
                    </p>
                    <p className='about '>Local delivery for $3</p>
                  </Col>
                </Row>

                <p className='about lasttext'>
                  I do custom cakes as well as simple cakes, cake pops, multiple
                  tiers and anything else you might want on a cake! Personalized
                  toppers can easily be added as well.
                </p>
              </MDBCardBody>
            </MDBCard>
          )}
        </div>
      </Container>
    </AnimationOnScroll>
  )
}

export default About
