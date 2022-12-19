import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../Styles/SellingPoints.css'
import cakeicon from '../Images/webp/cakeicon.webp'
import snackicon from '../Images/webp/snackicon.webp'
import catericon from '../Images/webp/catericon.webp'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SellingPoints = () => {
  return (
    <Container className='card_container'>
      <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
        <Card className='about_card rounded-top' id='top_card'>
          <Card.Body className='bg-Background about_card_body'>
            <img src={cakeicon} className='card_img' alt='cake icon'></img>
            <h1 className='card_title bg-Background  font-Pedestria'>Cakes</h1>
            <p className='card_text font-Multi'>
              Simple cakes to fully customized, contact me below to talk about
              pricing and work with your budget!
            </p>
          </Card.Body>
        </Card>
      </AnimationOnScroll>

      <Card className='about_card_reverse'>
        <Card.Body className='bg-Background about_card_body_reverse'>
          <img
            src={snackicon}
            className='card_img_reverse'
            alt='snack icon'
          ></img>
          <h1 className='card_title_reverse font-Pedestria'>Snacks</h1>
          <p className='card_text_reverse font-Multi'>
            Huge variety of snacks from gummies to Kickin' Munchy Mix
          </p>
        </Card.Body>
      </Card>

      <Card className='about_card'>
        <Card.Body className='bg-Background about_card_body'>
          <img src={catericon} className='card_img' alt='cake icon'></img>
          <h1 className='card_title  font-Pedestria'>Catering</h1>
          <p className='card_text  font-Multi'>
            From small meetings to all out BASHes, I can help you make your
            occassion that much more special
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default SellingPoints
