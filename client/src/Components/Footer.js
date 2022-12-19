import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import '../Styles/Footer.css'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
    <div className='footer_container bg-Navbar'>
      <Container>
        <Row className='footer_row'>
          <Col className='footer_col_1 text-Navtitle2'>
            <ul>
              <LinkContainer
                to='/products'
                className='footer_links text-Navtitle2'
              >
                <li>Products</li>
              </LinkContainer>
              {/* <LinkContainer to='/products'>
                <li>Ordering</li>
              </LinkContainer>
              <LinkContainer to='/products'>
                <li>Catering</li>
              </LinkContainer> */}
              <LinkContainer
                to='/contact'
                className='footer_links text-Navtitle2'
              >
                <li>Contact</li>
              </LinkContainer>
            </ul>
          </Col>

          <Col className='footer_col_2  text-Navtitle2'>
            <ul>
              <LinkContainer
                to='/about'
                className='footer_links text-Navtitle2'
              >
                <li>About</li>
              </LinkContainer>
              <a
                href='https://www.josh-claxton.com'
                target='_blank'
                className='footer_links text-Navtitle2'
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
