import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Container,
  Form,
  FloatingLabel,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MDBCard } from 'mdb-react-ui-kit'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listProducts } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/Product.css'
import Meta from '../Components/Meta'
import { withRouter } from 'react-router-dom'

const ProductScreen = ({ history }) => {
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(1)
  const [date, setDate] = useState('no date')
  const [additional, setAdditional] = useState()
  const { id } = useParams()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productList = useSelector((state) => state.productList)
  const { loading, error } = productList
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setProduct(data)
    }
    fetchProduct()

    dispatch(listProducts())
  }, [dispatch, id])

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}&date=${date}&additional=${additional}`)
  }

  return (
    <div className='background_pattern'>
      {/* <div> */}
      <div>
        <Meta title={product.title} />

        <Container>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <MDBCard className='prod_info_box pr-2'>
              {/* SPLIT FOR CAT2 */}
              {product.category === 'custom' ? (
                <Row>
                  <Col md={6}>
                    <LinkContainer to='/products'>
                      <button className='backprod_button absolute top-0'>
                        GO BACK
                      </button>
                    </LinkContainer>

                    <Image
                      src={product.img}
                      alt={product.title}
                      fluid
                      className='prod_img'
                    />
                  </Col>
                  <Col md={6}>
                    <ListGroup variant='flush' className='mr-2'>
                      <ListGroup.Item>
                        <h3 style={{ textAlign: 'center' }}>{product.title}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {product.title === 'Custom Cakes' ? (
                          <>
                            <strong>Thank you</strong> for taking the time to
                            check out my work! I do all kinds of cakes, from
                            basic, 3" one color cakes to 3-tiered event cakes!
                            Flourettes, number cakes, edible images, you want
                            it, you got it!
                            <hr />
                            Check out the order request form below to request a
                            cake from me! I will get back to you as soon as
                            possible for your order details!
                          </>
                        ) : (
                          <>
                            <strong>Price: $</strong>
                            {product.price}+
                          </>
                        )}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <LinkContainer
                          to='/cakeorder'
                          style={{ width: '100%' }}
                        >
                          <button className='addcart_button'>
                            Request Custom Cake Order
                          </button>
                        </LinkContainer>
                      </ListGroup.Item>
                    </ListGroup>
                    {/* <Form onSubmit={addToCartHandler}> */}

                    {/* </Form> */}
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col md={6}>
                    <LinkContainer to='/products'>
                      <button className='backprod_button absolute top-0'>
                        GO BACK
                      </button>
                    </LinkContainer>

                    <Image
                      src={product.img}
                      alt={product.title}
                      fluid
                      className='prod_img'
                    />
                  </Col>
                  <Col md={6}>
                    <ListGroup variant='flush' className='mr-2'>
                      <ListGroup.Item>
                        <h3>{product.title}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Description: </strong> {product.description}
                      </ListGroup.Item>
                      {/* <ListGroup.Item>
                <strong>More Info: </strong> {product.additional}
              </ListGroup.Item> */}
                      <ListGroup.Item>
                        <strong>Price: $</strong>
                        {product.price}
                      </ListGroup.Item>

                      {product.countInStock < 1 && (
                        <ListGroup.Item>
                          <LinkContainer to='/contact'>
                            <button className='contact_button'>
                              CONTACT TO ORDER
                            </button>
                          </LinkContainer>
                        </ListGroup.Item>
                      )}
                      {product.countInStock > 0 && (
                        <ListGroup>
                          <ListGroup.Item>
                            Any custom orders or over limit orders on website
                            please
                            <LinkContainer to='/contact'>
                              <h6 className='inline clickable'> CONTACT ME</h6>
                            </LinkContainer>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>
                                <Form onSubmit={addToCartHandler}>
                                  <Form.Group>
                                    <FloatingLabel label='Quantity:'>
                                      <Form.Control
                                        as='select'
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                      >
                                        {[
                                          ...Array(
                                            Number(product.countInStock)
                                          ).keys(),
                                        ].map((x) => (
                                          <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                          </option>
                                        ))}
                                      </Form.Control>
                                    </FloatingLabel>
                                  </Form.Group>
                                  <br />
                                  <Form.Group
                                    className='mb-3'
                                    controlId='additional'
                                    value={additional}
                                    onChange={(e) =>
                                      setAdditional(e.target.value)
                                    }
                                  >
                                    <FloatingLabel label='Additions and Customizations:'>
                                      <Form.Control type='textbox' />
                                    </FloatingLabel>
                                  </Form.Group>
                                  <Form.Group
                                    className='mb-3'
                                    controlId='additional'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                  >
                                    <Form.Label>Date:</Form.Label>
                                    <Form.Control type='date' />
                                  </Form.Group>
                                  <button
                                    className='addcart_button'
                                    type='submit'
                                  >
                                    ADD TO CART
                                  </button>
                                </Form>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        </ListGroup>
                      )}
                    </ListGroup>
                  </Col>
                </Row>
              )}
            </MDBCard>
          )}
        </Container>
      </div>
    </div>
  )
}

export default withRouter(ProductScreen)
