import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CakeSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/cakeorder'>
            <Nav.Link>Type</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Type</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/cakequantity'>
            <Nav.Link>Quantity</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Quantity</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/cakeDate'>
            <Nav.Link>Date</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Date</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/cakeSubmit'>
            <Nav.Link>Submit Request</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Submit Request</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CakeSteps
