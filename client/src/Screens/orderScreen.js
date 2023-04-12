// import React from 'react'
// import { Fade } from 'react-bootstrap'
// import Meta from '../Components/Meta'
// import Order from '../Components/Order'

// const OrderScreen = () => {
//   return (
//     <div className='background_pattern'>
//       <Meta title='LNC Order' />
//       <Fade up>
//         <Order />
//       </Fade>
//     </div>
//   )
// }

// export default OrderScreen

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import {
  getOrderDetails,
  payOrder,
  payOrderAdmin,
  deliverOrder,
  deleteOrder,
} from '../Actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../Constants/orderConstants'
import { withRouter } from 'react-router-dom'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce(
        (acc, item) => acc + parseInt(item.qty) * parseInt(item.price),
        0
      )
    )
    order.totalPriceDecimals = addDecimals(order.totalPrice)
    order.shippingPriceDecimals = addDecimals(order.shippingPrice)
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, order, userInfo, history])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
    window.location.reload(false)
  }
  const paymentHandler = () => {
    dispatch(payOrderAdmin(orderId))
    window.location.reload(false)
  }
  const handleDelete = () => {
    dispatch(deleteOrder(order))
    history.push('/admin/orderlist')
  }
  const backButton = () => {
    history.push('/admin/orderlist')
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div className='background_pattern'>
      <Meta title='LNC Order' />
      <Fade up>
        <Container>
          <Card>
            <h1>Order {order._id.substring(19, 24)}</h1>
            <Row>
              <Col md={8}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                      <strong>Name: </strong> {order.user.name}
                    </p>
                    <p>
                      <strong>Number: </strong> {order.user.number}
                    </p>
                    <p>
                      <strong>Email: </strong>{' '}
                      <a href={`mailto:${order.user.email}`}>
                        {order.user.email}
                      </a>
                    </p>
                    <p>
                      <strong>Pickup: </strong>{' '}
                      {order.shippingAddress.pickup === true ? 'Yes' : 'No'}
                    </p>
                    <p>
                      <strong>Address:</strong>
                      <br />
                      {order.shippingAddress.address}
                      <br /> {order.shippingAddress.city}{' '}
                      {order.shippingAddress.postalCode}{' '}
                      {/* {order.shippingAddress.country} */}
                    </p>
                    {order.isDelivered ? (
                      <Message variant='success'>
                        Delivered on {order.deliveredAt}
                      </Message>
                    ) : (
                      <Message variant='danger'>Not Delivered</Message>
                    )}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                      <strong>Method: </strong>
                      {order.paymentMethod}
                    </p>
                    {order.isPaid ? (
                      <Message variant='success'>
                        Paid on {order.paidAt}
                      </Message>
                    ) : (
                      <Message variant='danger'>Not Paid</Message>
                    )}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <h2>Order Items</h2>
                    {order.orderItems.length === 0 ? (
                      <Message>Order is empty</Message>
                    ) : (
                      <ListGroup variant='flush'>
                        {order.orderItems.map((item, index) => (
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

                              <Col md={4} style={{ textAlign: 'right' }}>
                                {item.qty} x ${item.price}= $
                                {item.qty * item.price}
                              </Col>
                            </Row>
                            <Row>
                              <Col md={4}></Col>
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
                        <Col>${order.itemsPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Shipping</Col>
                        <Col>${order.shippingPriceDecimals}</Col>
                      </Row>
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>${order.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item> */}
                    <ListGroup.Item>
                      <Row>
                        <Col>Total</Col>
                        <Col>${order.totalPriceDecimals}</Col>
                      </Row>
                    </ListGroup.Item>
                    {!order.isPaid &&
                      !userInfo.isAdmin &&
                      order.paymentMethod === 'PayPal' && (
                        <ListGroup.Item>
                          {loadingPay && <Loader />}
                          {!sdkReady ? (
                            <Loader />
                          ) : (
                            <PayPalButton
                              amount={order.totalPrice}
                              onSuccess={successPaymentHandler}
                            />
                          )}
                        </ListGroup.Item>
                      )}

                    {userInfo && userInfo.isAdmin && !order.isDelivered && (
                      <ListGroup.Item>
                        <Button
                          type='button'
                          className='btn btn-block'
                          onClick={deliverHandler}
                        >
                          Mark As Delivered
                        </Button>
                      </ListGroup.Item>
                    )}
                    {userInfo && userInfo.isAdmin && !order.isPaid && (
                      <ListGroup.Item>
                        <Button
                          type='button'
                          className='btn btn-block'
                          onClick={paymentHandler}
                        >
                          Mark As Paid
                        </Button>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn btn-block'
                        onClick={backButton}
                      >
                        Back
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                  {userInfo && userInfo.isAdmin && (
                    <ListGroup.Item>
                      <Button
                        type='button'
                        variant='danger'
                        className='btn btn-block'
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  )}
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </Fade>
    </div>
  )
}

export default withRouter(OrderScreen)
