import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../Actions/cartActions'
import { useParams, withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../Components/Message'
import '../Styles/Cart.css'
import Meta from '../Components/Meta'
import { Fade } from 'react-reveal'

const CartScreen = ({ location, history }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams()
  const productId = id
  const qty = new URLSearchParams(location.search).get('qty')
  const date = new URLSearchParams(location.search).get('date')
  const additional = new URLSearchParams(location.search).get('additional')

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, date, additional))
    }
  }, [dispatch, productId, qty, date, additional])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/shipping')
  }

  return (
    <div className='background_pattern'>
      <Meta title='LNC Shopping Cart' />
      <Fade up>
        <Container>
          <Card>
            <Row>
              <Col md={8}>
                <h1 className='cart_title'>Shopping Cart:</h1>

                {cartItems.length === 0 ? (
                  <Container>
                    <Message variant='danger'>
                      Your cart is empty
                      <LinkContainer to='/products'>
                        <span className='clickable'>
                          <strong> &nbsp;GO TO PRODUCTS</strong>
                        </span>
                      </LinkContainer>
                    </Message>
                  </Container>
                ) : (
                  <ListGroup variant='flush'>
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item.product}>
                        <Row>
                          <Col md={2}>
                            <LinkContainer
                              to={`/product/${item.product}`}
                              className='clickable'
                            >
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </LinkContainer>
                          </Col>
                          <Col md={4}>
                            <LinkContainer
                              to={`/product/${item.product}`}
                              className='clickable'
                            >
                              <span>{item.name}</span>
                            </LinkContainer>
                          </Col>
                          <Col md={3}>
                            {item.qty} <strong>X</strong> $
                            {item.category === 'custom' ? (
                              <>{item.cakePrice}</>
                            ) : (
                              <>{item.price * item.qty}</>
                            )}
                          </Col>
                          <Col md={10}>
                            <Form.Control
                              as='select'
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(
                                    item.product,
                                    Number(e.target.value)
                                  )
                                )
                              }
                            >
                              {[...Array.from(Array(100).keys())].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>

                            {item.additional &&
                              item.additional !== 'undefined' && (
                                <>
                                  <strong>Notes: </strong>
                                  {item.additional}
                                  <br />
                                </>
                              )}

                            {item.date && item.date === 'no date' ? (
                              <></>
                            ) : (
                              <>
                                <strong>Date: </strong>{' '}
                                {item.date[5] === '0'
                                  ? item.date.substring(6)
                                  : item.date.substring(5)}
                                <br />
                              </>
                            )}
                          </Col>

                          <Col md={2}>
                            <Button
                              type='button'
                              variant='light'
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            >
                              <i className='fas fa-trash'></i>
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
                <hr></hr>
                {cartItems.length !== 0 ? (
                  <LinkContainer to='/products'>
                    <span className='clickable'>
                      <Button type='button' className='btn-block'>
                        {' '}
                        &nbsp;Continue Shopping
                      </Button>
                    </span>
                  </LinkContainer>
                ) : (
                  <></>
                )}
                {/* VALENTINE PRODUCT ADDON */}
                {/* <h1 className='cart_title'>Add-Ons:</h1>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <LinkContainer to={'/product/63bc3572245fdfc40c478e9d'}>
                      <Image
                        src='https://raw.githubusercontent.com/JRCcoding/lnctreats/development/client/src/Images/webp/xsmall-bouquet.webp'
                        alt='Small Bouquet'
                        fluid
                        rounded
                      />
                    </LinkContainer>
                  </Col>

                  <Col md={4}>
                    <LinkContainer to={'/product/63bc3572245fdfc40c478e9d'}>
                      <strong className='clickable'>
                        Add a Small Candy Bouquet! ❤
                      </strong>
                    </LinkContainer>
                  </Col>
                  <Col md={2}>$10.00</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup> */}
              </Col>
              <Col md={4}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h2>
                        Subtotal (
                        {cartItems.reduce(
                          (acc, item) => acc + parseInt(item.qty),
                          0
                        )}
                        ) items
                      </h2>
                      $
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc + parseInt(item.qty) * parseInt(item.price),
                          0
                        )
                        .toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Proceed To Checkout
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </Fade>
    </div>
  )
}

export default withRouter(CartScreen)
