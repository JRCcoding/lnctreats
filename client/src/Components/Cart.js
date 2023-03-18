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

const Cart = ({ location, history }) => {
  const { id } = useParams()
  const productId = id
  const qty = new URLSearchParams(location.search).get('qty')
  const date = new URLSearchParams(location.search).get('date')
  const shape = new URLSearchParams(location.search).get('shape')
  const size = new URLSearchParams(location.search).get('size')
  const cakeFlavor = new URLSearchParams(location.search).get('cakeFlavor')
  const otherCakeFlavor = new URLSearchParams(location.search).get(
    'otherCakeFlavor'
  )
  const frostingFlavor = new URLSearchParams(location.search).get(
    'frostingFlavor'
  )
  const otherFrostingFlavor = new URLSearchParams(location.search).get(
    'otherFrostingFlavor'
  )
  const filling = new URLSearchParams(location.search).get('filling')
  const additional = new URLSearchParams(location.search).get('additional')
  // const [flavor, setFlavor] = useState({})

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(
        addToCart(
          productId,
          qty,
          date,
          shape,
          size,
          cakeFlavor,
          otherCakeFlavor,
          frostingFlavor,
          otherFrostingFlavor,
          filling,
          additional
        )
      )
    }
  }, [
    dispatch,
    productId,
    qty,
    date,
    shape,
    size,
    cakeFlavor,
    otherCakeFlavor,
    frostingFlavor,
    otherFrostingFlavor,
    filling,
    additional,
  ])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
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
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={4}>
                        <LinkContainer to={`/product/${item.product}`}>
                          <span>{item.name}</span>
                        </LinkContainer>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={10}>
                        {item.qty === Number ? (
                          <Form.Control
                            as='select'
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(Number(item.countInStock)).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        ) : (
                          <></>
                        )}
                        <strong>Date: </strong>{' '}
                        {item.date ? item.date : 'error'}
                        <br />
                        <strong>Shape: </strong>
                        {item.shape ? item.shape : 'error'}
                        <br />
                        <strong>Size: </strong>
                        {item.size ? item.size : 'error'}
                        <br />
                        <strong>Cake Flavor: </strong>
                        {item.cakeFlavor ? item.cakeFlavor : 'error'}
                        <br />
                        <strong>Other Cake Flavor: </strong>
                        {item.otherCakeFlavor !== 'undefined'
                          ? item.otherCakeFlavor
                          : 'none'}
                        <br />
                        <strong>Frosting Flavor: </strong>
                        {item.frostingFlavor ? item.frostingFlavor : 'error'}
                        <br />
                        <strong>Other Frosting Flavor: </strong>
                        {item.otherFrostingFlavor !== 'undefined'
                          ? item.otherFrostingFlavor
                          : 'none'}
                        <br />
                        {/* {item.filling !== 'undefined' ? : <></>} */}
                        <strong>Filling: </strong>
                        {item.filling !== 'undefined' ? item.filling : 'none'}
                        <br />
                        <strong>Notes: </strong>
                        {item.additional ? item.additional : 'none'}
                        <br />
                      </Col>

                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => removeFromCartHandler(item.product)}
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
  )
}

export default withRouter(Cart)
