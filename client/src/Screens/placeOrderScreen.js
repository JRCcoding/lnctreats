import React, { useEffect, useRef, useState } from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
  Form,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import CheckoutSteps from '../Components/CheckoutSteps'
import { createOrder } from '../Actions/orderActions'
import { ORDER_CREATE_RESET } from '../Constants/orderConstants'
import { USER_DETAILS_RESET } from '../Constants/userConstants'
import { withRouter } from 'react-router-dom'
import Meta from '../Components/Meta'
import emailjs from '@emailjs/browser'

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } else if (!cart.paymentMethod) {
    history.push('/payment')
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems
      .reduce((acc, item) => acc + parseInt(item.qty) * parseInt(item.price), 0)
      .toFixed(2)
  )

  cart.shippingAddress.pickup === 'true'
    ? (cart.shippingPrice = addDecimals(0))
    : (cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 3.5))

  cart.taxPrice = addDecimals(Number((0.0825 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice))
    // Number(cart.taxPrice)
    .toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
  })

  const emailjsSend = () => {
    var emailjsParams = { item1: 'test' }
    emailjs
      .send(
        'service_mj24iav',
        'template_rg9j6oe',
        emailjsParams,
        'Ts0xnPtn_iKfBC4r0'
      )
      .then(
        (result) => {
          console.log('"New Order" emailjs sent', result.status, result.text)
        },
        (error) => {
          console.log('Failed...', error.text)
        }
      )
  }

  const placeOrderHandler = () => {
    emailjsSend()
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <div className='background_pattern'>
      {/* <div style={{ display: 'none' }}>
        <Form id='form'>
          <input name='emailOrder' value={partOfParsedEJS} readOnly />
        </Form>
      </div> */}
      <Meta title='LNC Place Order' />
      <Fade up>
        <Container>
          <Card>
            <Container>
              <CheckoutSteps step1 step2 step3 step4 />
              <Row>
                <Col md={8}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h2>
                        <strong>
                          ⭐I will contact you about any and all customizations!
                        </strong>
                      </h2>
                      <h2>Address</h2>
                      <p>
                        {cart.shippingAddress.address},{' '}
                        {cart.shippingAddress.city}{' '}
                        {cart.shippingAddress.postalCode},{' '}
                        {cart.shippingAddress.country}
                      </p>
                      <h2>Pickup</h2>
                      {cart.shippingAddress.pickup === 'true' ? (
                        <>Yes</>
                      ) : (
                        <>No</>
                      )}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>Payment Method</h2>
                      <strong>Method: </strong>
                      {cart.paymentMethod}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>Order Items</h2>
                      {cart.cartItems.length === 0 ? (
                        <Message>Your cart is empty</Message>
                      ) : (
                        <ListGroup variant='flush'>
                          {cart.cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                              <Row>
                                <Col md={2}>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fluid
                                    rounded
                                  />
                                </Col>
                                <Col>
                                  <Link to={`/product/${item.product}`}>
                                    {item.name}
                                  </Link>
                                </Col>
                                <Col md={4}>
                                  {item.qty} x ${item.price} = $
                                  {item.qty * item.price}
                                </Col>
                              </Row>
                              <Row>
                                <Col md={1}></Col>
                                <Col>{item.date}</Col>
                                <Col>
                                  {item.additional !== 'undefined' &&
                                    item.additional}
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <Card>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <h2>Order Summary</h2>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Items</Col>
                          <Col>${cart.itemsPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Shipping</Col>
                          <Col>${cart.shippingPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      {/* <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>${cart.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item> */}
                      <ListGroup.Item>
                        <Row>
                          <Col>Total</Col>
                          <Col>${cart.totalPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {error && <Message variant='danger'>{error}</Message>}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          type='button'
                          className='btn-block'
                          disabled={cart.cartItems === 0}
                          onClick={placeOrderHandler}
                        >
                          Place Order
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
      </Fade>
    </div>
  )
}

export default withRouter(PlaceOrderScreen)
