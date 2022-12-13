import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'
import { Row, Container } from 'react-bootstrap'
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
          <h2 className='title font-LaBelle'>Products</h2>

          <Container className='product_list'>
            <Row xs={1} sm={2} md={2} lg={3}>
              {products &&
                products.map((product) => (
                  <AnimationOnScroll
                    animateIn='animate__fadeInUp'
                    animateOnce='true'
                  >
                    <div key={product}>
                      <MDBCard className='product_card'>
                        <MDBCardImage
                          cascade
                          position='top'
                          alt='Lauryn Claxton LNC Treats'
                          src={product.img}
                        />
                        <MDBCardBody className='bg-lightMint'>
                          <MDBCardTitle>{product.title}</MDBCardTitle>
                          <MDBCardText>{product.description}</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </AnimationOnScroll>
                ))}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Products
