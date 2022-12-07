import React from 'react'
import { Container } from 'react-bootstrap'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'

const Body = () => {
  return (
    <div className='intro'>
      <Container>
        <MDBCarousel showControls fade>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://mdbootstrap.com/img/new/slides/041.jpg'
            alt='...'
          >
            <h5>Title</h5>
            <p>Image description</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://mdbootstrap.com/img/new/slides/042.jpg'
            alt='...'
          >
            <h5>Title</h5>
            <p>Image description</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://mdbootstrap.com/img/new/slides/043.jpg'
            alt='...'
          >
            <h5>Title</h5>
            <p>Image description</p>
          </MDBCarouselItem>
        </MDBCarousel>
      </Container>
    </div>
  )
}

export default Body
