import React from 'react'
import Container from 'react-bootstrap/Container'
import products from '../data'

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'
import { Row } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Products = () => {
  return (
    <div>
      <Container>
        <AnimationOnScroll animateIn='animate__pulse' animateOnce='true'>
          <h2 className='title' id='products'>
            Products
          </h2>
        </AnimationOnScroll>

        <Container className='product_list'>
          <Row xs={1} sm={1} md={1}>
            {products.map((product) => (
              <MDBCard className='product_card'>
                <MDBCardImage
                  cascade
                  position='top'
                  alt='Lauryn Claxton LNC Treats'
                  src={product.img}
                />
                <MDBCardBody>
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText>{product.description}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Products
