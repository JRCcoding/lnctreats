import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <Row className='footer_row'>
        <Col>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>About Me</li>
          </ul>
        </Col>
        <Col></Col>

        <Col>
          <ul>
            <li>Contact</li>
            <li>Facebook</li>
            <li>About Me</li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
