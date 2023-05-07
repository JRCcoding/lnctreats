import React from 'react'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'
import { Row, Col, Container } from 'react-bootstrap'
import { MDBIcon } from 'mdb-react-ui-kit'
import { Card, Image } from 'react-bootstrap'
import Logo from '../Images/todd_logo.png'

const AboutScreen = () => {
  window.scrollTo(0, 0)

  return (
    <div className='background_pattern'>
      <Meta title='About LNC Treats' />
      <Fade up>
        <div>
          <Container>
            <Card className='w-75 mx-auto'>
              <Row xs={1} md={1} lg={2} className='text-AccentText'>
                <Col>
                  <Image
                    position='top'
                    alt='Lauryn Claxton LNC Treats'
                    src={Logo}
                    style={{ borderRadius: '50%' }}
                  />
                </Col>
                <Col className='about_text'>
                  {' '}
                  <p className='about_p'>
                    <MDBIcon fas icon='quote-left' />
                    &nbsp; Lauryn is a local baker who bakes out of her love
                    filled home in Midland, TX. She is a mother, a wife, and a
                    boss. Not only does she manage her business here, but she
                    has an amazing family learning from her. &nbsp;
                    <MDBIcon fas icon='quote-right' /> - Josh ♥
                  </p>
                  <p className='about_p'>
                    From small personal treat boxes to meetings and large group
                    catering, I can help you with any snacking needs!
                  </p>
                  <p className='about_p'>
                    I do custom cakes as well as simple cakes, cake pops,
                    multiple tiers and anything else you might want on a cake!
                    Personalized toppers can easily be added as well.
                  </p>
                  <p className='about_p'>Local delivery starting at $5.00.</p>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      </Fade>
    </div>
  )
}

export default AboutScreen
