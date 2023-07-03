import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { saveShippingAddress } from '../Actions/cartActions'
import CheckoutSteps from '../Components/CheckoutSteps'
import FormContainer from '../Components/FormContainer'
import Meta from '../Components/Meta'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const { user } = useAuth0()

  const [name, setName] = useState()
  const [email, setEmail] = useState(user?.email)
  const [number, setNumber] = useState(user?.number)
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

  useEffect(() => {
    if (!user) {
      window.location.href =
        'https://dev-dstps3q4l34f7d23.us.auth0.com/u/login?state=hKFo2SBmSnJCbzIxeXhBQ2pMYUtrRmRVTUp5M0FrczZ4cHZFU6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGNsN2JzRU1kTG5kaGtWX0hGbWVuNGZlMTNUaG5jaWdUo2NpZNkgRVFGNTZnRzYyVE5neEJ5OW9iSzJtS3F0S0prbkJEZ2Q'
    }
  })

  return (
    <div className='background_pattern'>
      <Meta title='LNC Delivery' />
      <FormContainer>
        <Card>
          <Container>
            <CheckoutSteps step1 step2 />

            <Form
              onSubmit={submitHandler}
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
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
                <FloatingLabel label='Phone'>
                  <Form.Control
                    type='text'
                    placeholder='Phone'
                    value={number}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <hr />
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
              <hr />
              <Form.Group controlId='pickup'>
                <FloatingLabel label='Pickup'>
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
                </FloatingLabel>
              </Form.Group>

              <Button
                type='submit'
                variant='primary'
                className='btn-block button mb-4'
              >
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
