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

const Products = () => {
  return (
    <div>
      <Container>
        <h2 className='title' id='products'>
          Products
        </h2>
        <Container className='product_list'>
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
        </Container>
      </Container>
    </div>
  )
}

export default Products
