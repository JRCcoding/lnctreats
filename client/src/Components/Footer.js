import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <Container>
        <Row className='footer_row'>
          <Col className='footer_col_1'>
            <ul>
              <li>Products</li>
              <li>Ordering</li>
              <li>Catering</li>
            </ul>
          </Col>

          <Col className='footer_col_2'>
            <ul>
              <li>Contact</li>
              <li>About</li>
              <li>Web Dev</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
