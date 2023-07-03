import React, { useState } from 'react'
import { Button, Card, Col, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { savePaymentMethod } from '../Actions/cartActions'
import CheckoutSteps from '../Components/CheckoutSteps'
import FormContainer from '../Components/FormContainer'
import Meta from '../Components/Meta'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }
  window.scrollTo(0, 0)

  return (
    <div className='background_pattern'>
      <Meta title='LNC Payment' />
      <FormContainer>
        <Card>
          <Container>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
                <Col>
                  {/* <Form.Check
                    type='radio'
                    label='PayPal or Credit Card'
                    id='PayPal'
                    name='paymentMethod'
                    value='PayPal'
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check> */}
                  <Form.Check
                    type='radio'
                    label='Stripe'
                    id='Stripe'
                    name='paymentMethod'
                    value='Stripe'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    label='Cash'
                    id='Cash'
                    name='paymentMethod'
                    value='Cash'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Continue
              </Button>
            </Form>
          </Container>
        </Card>
      </FormContainer>
    </div>
  )
}

export default withRouter(PaymentScreen)
