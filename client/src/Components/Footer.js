import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import '../Styles/Footer.css'
import { LinkContainer } from 'react-router-bootstrap'

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
              <LinkContainer to='/about' className='footer_links'>
                <li>About</li>
              </LinkContainer>
              <a
                href='https://www.josh-claxton.com'
                target='_blank'
                className='footer_links'
                rel='noreferrer'
              >
                <li>Web Dev</li>
              </a>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer