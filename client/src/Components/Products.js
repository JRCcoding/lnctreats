import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'
import { Row } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import asyncHandler from 'express-async-handler'

const Products = ({ product }) => {
  const [products, setProducts] = useState()

  useEffect(() => {
    const fetchProducts = asyncHandler(async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    })
    fetchProducts()
  })
  return (
    <div>
      <Container>
        <div className='products_box'>
          <AnimationOnScroll animateIn='animate__pulse' animateOnce='true'>
            <h2 className='title' id='products'>
              Products
            </h2>
          </AnimationOnScroll>

          <Container className='product_list'>
            <Row xs={1} sm={1} md={1}>
              {products &&
                products.map((product) => (
                  <div key={product}>
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
                  </div>
                ))}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Products
