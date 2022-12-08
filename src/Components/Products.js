import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import products from '../data'

const Products = () => {
  return (
    <div>
      <Container>
        <h2 className='title'>Products</h2>
        {products.map((product) => (
          <Row key='product' className='product_list'>
            <Col>{product.title}</Col>
            <Col>{product.description}</Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default Products
