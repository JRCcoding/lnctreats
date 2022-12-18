import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../Styles/SellingPoints.css'
import cakeicon from '../Images/cakeicon.png'
import snackicon from '../Images/snackicon.png'
import catericon from '../Images/catericon.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SellingPoints = () => {
  return (
    <Container>
      <AnimationOnScroll
        animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutRight'
      >
        <Card className='about_card' id='top_card'>
          <img src={cakeicon} className='card_img' alt='cake icon'></img>
          <h1 className='card_title font-Pedestria'>Cakes</h1>
          <p className='card_text font-Multi'>
            Simple and custom cakes! I have a Cake Price Sheet but also open for
            consultation!
          </p>
        </Card>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn='animate__fadeInRight'
        animateOut='animate__fadeOutLeft'
      >
        <Card className='about_card_reverse'>
          <img
            src={snackicon}
            className='card_img_reverse'
            alt='snack icon'
          ></img>
          <h1 className='card_title_reverse font-Pedestria'>Snacks</h1>
          <p className='card_text_reverse font-Multi'>
            Huge variety of snacks from gummies to buffalo ranch trail mix!
          </p>
        </Card>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeInLeft'
        animateOut='animate__fadeOutRight'
      >
        <Card className='about_card'>
          <img src={catericon} className='card_img' alt='cake icon'></img>
          <h1 className='card_title font-Pedestria'>Catering</h1>
          <p className='card_text font-Multi'>
            From small meetings to all out <strong>BASH</strong>es, I can help
            you make your occassion that much more special!
          </p>
        </Card>
      </AnimationOnScroll>
    </Container>
  )
}

export default SellingPoints
