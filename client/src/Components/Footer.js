import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import '../Styles/Footer.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_container'>
      <Container>
        <Row className='footer_row'>
          <Col className='footer_col_1'>
            <ul>
              <LinkContainer to='/products' className='footer_links'>
                <li>Products</li>
              </LinkContainer>
              <li>Ordering</li>
              <li>Catering</li>
            </ul>
          </Col>

          <Col className='footer_col_2'>
            <ul>
              <li>Contact</li>
              <a href='#about' className='footer_links'>
                <li>About</li>
              </a>
              <li>Web Dev</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
