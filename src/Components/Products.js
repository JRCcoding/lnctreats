import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import products from '../data'

const Products = () => {
  return (
    <div>
      <Container>
        <h2 className='title' id='products'>
          Products
        </h2>
        <Container className='product_list'>
          {products.map((product) => (
            <Row key='product'>
              <Col>{product.title}</Col>
              <Col>{product.description}</Col>
            </Row>
          ))}
        </Container>
      </Container>
    </div>
  )
}

export default Products
