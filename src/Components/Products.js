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
import { Row, Col } from 'react-bootstrap'

const Products = () => {
  return (
    <div>
      <Container>
        <h2 className='title' id='products'>
          Products
        </h2>
        <Container className='product_list'>
          <Row>
            <Col>
              {products.map((product) => (
                <MDBCard className='product_card'>
                  <MDBCardImage
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
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Products
