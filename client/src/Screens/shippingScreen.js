import React, { useState } from 'react'
import { Form, Button, Card, Container, FloatingLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'
import { saveShippingAddress } from '../Actions/cartActions'
import { withRouter } from 'react-router-dom'
import Meta from '../Components/Meta'
import { useAuth0 } from '@auth0/auth0-react'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const { user } = useAuth0()

  const [name, setName] = useState()
  const [email, setEmail] = useState(user.email)
  const [number, setNumber] = useState(user.number)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState('United States')
  const [pickup, setPickup] = useState(shippingAddress.pickup)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({
        name,
        number,
        address,
        city,
        postalCode,
        country,
        pickup,
      })
    )
    history.push('/payment')
  }
  window.scrollTo(0, 0)

  return (
    <div className='background_pattern'>
      <Meta title='LNC Delivery' />
      <FormContainer>
        <Card>
          <Container>
            <CheckoutSteps step1 step2 />

            <Form onSubmit={submitHandler}>
              <h1>Delivery</h1>
              <h5>Local delivery only to Midland and Central/East Odessa</h5>
              <h7>
                <strong>Payments due at delivery or pickup</strong>
              </h7>
              <Form.Group controlId='name'>
                <FloatingLabel label='Name'>
                  <Form.Control
                    type='text'
                    placeholder='name'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='email'>
                <FloatingLabel label='Email'>
                  <Form.Control
                    type='text'
                    placeholder='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='number'>
                <FloatingLabel label='Number'>
                  <Form.Control
                    type='text'
                    placeholder='number'
                    value={number}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='address'>
                <FloatingLabel label='Address'>
                  <Form.Control
                    type='text'
                    placeholder='address'
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='city'>
                <FloatingLabel label='City'>
                  <Form.Control
                    type='text'
                    placeholder='city'
                    value={city}
                    required
                    onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='postalCode'>
                <FloatingLabel label='Postal code'>
                  <Form.Control
                    type='text'
                    placeholder='postal code'
                    value={postalCode}
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId='country'>
                <FloatingLabel label='Country'>
                  <Form.Control
                    type='text'
                    placeholder='country'
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <h1>Pickup</h1>
              <Form.Group controlId='pickup'>
                <Form.Label>Pickup</Form.Label>
                <Form.Select
                  type='text'
                  placeholder='Will you be picking up?'
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                >
                  <option value='chooseone'>Choose one...</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
                </Form.Select>
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

export default withRouter(ShippingScreen)
