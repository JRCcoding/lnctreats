import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MDBCard } from 'mdb-react-ui-kit'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listProducts } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/Product.css'
import Meta from '../Components/Meta'

const Product = ({ history, match }) => {
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(2)

  const { id } = useParams()
  const dispatch = useDispatch()

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
    history.push(`/cart/${match.params.id}?qty=${qty}`)
    history.push(`/cart/${match.params.id}?size=${size}`)
  }

  return (
    <div>
      <Meta title={product.title} />

      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <MDBCard className='prod_info_box'>
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
                  <ListGroup.Item>
                    <strong>More Info: </strong> {product.additional}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Price: $</strong>
                    {product.price}
                  </ListGroup.Item>

                  {/* {product.countInStock < 1 && ( */}
                  <ListGroup.Item>
                    <LinkContainer to='/contact'>
                      <button className='contact_button'>
                        CONTACT TO ORDER
                      </button>
                    </LinkContainer>
                  </ListGroup.Item>
                  {/* )} */}

                  {/* {product.countInStock > 0 && (
                    <ListGroup>
                      <ListGroup.Item>
                        Any orders over limit on website please
                        <LinkContainer to='/contact'>
                          <h6 className='inline clickable'> CONTACT ME</h6>
                        </LinkContainer>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <h5>
                              Quantity
                              <br />
                              <br />
                              Size
                            </h5>
                          </Col>
                          <Col>
                          
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[
                                ...Array(parseInt(product.countInStock)).keys(),
                              ].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>

                            <Form.Select aria-label='Size' onChange={setSize}>
                              <option value='Small'>Small $10</option>
                              <option value='Medium'>Medium $15</option>
                              <option value='Large'>Large $25</option>
                            </Form.Select>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <button
                          onClick={addToCartHandler}
                          className='addcart_button'
                          type='button'
                        >
                          ADD TO CART
                        </button>
                      </ListGroup.Item>
                    </ListGroup>
                  )} */}
                </ListGroup>
              </Col>
            </Row>
          </MDBCard>
        )}
      </Container>
    </div>
  )
}

export default Product
