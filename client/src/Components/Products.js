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

const Products = () => {
  return (
    <div>
      <Container>
        <h2 className='title' id='products'>
          Products
        </h2>
        <Container className='product_list'>
          <Row sm={1} md={2}>
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
